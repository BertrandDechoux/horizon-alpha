(ns horizon-alpha.model.ai
  "Action for any players."
  (:require [horizon-alpha.field.grid :as grid]
            [horizon-alpha.model.action :as a]
            [horizon-alpha.field.field :as f]
            [horizon-alpha.player.player :as p]
            [horizon-alpha.model.heal :as heal]
            [horizon-alpha.model.attack :as attack]
            [horizon-alpha.model.path :as path]))

(defn hit-weakest [state player]
  "If a fiend is nearby, hits the weakest."
  (let [fiend (p/weakest-at (path/fiend-neighbors player state))]
    (if (and fiend (-> player :actions :attack)) (attack/attack state fiend) state)))

#_("Improve this by moving to the position with less fiends around.")
(defn escape-danger [state player]
  "If a fiend is nearby, escapes from the danger."
  (let [destination (-> (path/walkable-neighbors (:pos player) state) shuffle first)
        fiend (p/weakest-at (path/fiend-neighbors player state))]
    (if (and fiend destination) (a/move state destination) state)))

(defn heal-wounded [state player]
  "If a friend is wounded, heals the weakest."
    (let [wounded (-> (p/friends (:players state) :npc) p/wounded p/weakest-at)]
      (if (and wounded (-> player :actions :heal)) (heal/heal state wounded) state)))

(defn towards-fiend [state player]
  "Moves towards the nearest fiend."
    (let [empty-cells (->> state :field (filter f/walkable?) f/positions set)
          targets (-> (:players state) p/pcs p/positions set)
          walkable? #(contains? empty-cells %)
          paths (path/short-paths (:pos player) state walkable? targets)
          moves (path/best-moves paths targets)]
      (if (and (first moves) (-> player :actions :attack)) (a/move state (-> moves first first)) state)))

#_("Improve this by fixing being stuck in the corners.")
(defn around-fiend [state player]
  "Moves around the nearest fiend."
    (let [empty-cells (->> state :field (filter f/walkable?) f/positions set)
          targets (-> (:players state) p/pcs p/positions set)
          walkable? #(contains? empty-cells %)
          paths (path/short-paths (:pos player) state walkable? targets)
          moves (path/best-moves paths targets)]
      (if (and (first moves) (-> player :actions :attack)) (a/move state (-> moves last first)) state)))

(defn random-move [state player]
  "Moves to a random nearby position."
  (let [destination (-> (path/walkable-neighbors (:pos player) state) shuffle first)]
    (if destination (a/move state destination) state)))

(defn ai [state]
  "Core of artifical intelligence."
  (let [player (get (:players state) (:active state))
        strategies [hit-weakest heal-wounded towards-fiend around-fiend random-move]
        solutions (map #(% state player) strategies)
        solution (some #(when (not= state %) %) solutions)
        ]
    (if solution solution state)))
