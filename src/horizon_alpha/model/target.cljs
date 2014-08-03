(ns horizon-alpha.model.target
  "Possible options for any pcs."
  (:require [horizon-alpha.player.player :as p]
            [horizon-alpha.player.stat :as s]
            [horizon-alpha.model.path :as path]))

(defn moves[state player]
  (let [pos (:pos player)
        move-neighbors (path/walkable-neighbors pos state)]
    (map (fn[p] {:action :move, :pos p, :from pos}) move-neighbors)))

(defn attacks[state player]
  (let [pos (:pos player)
        attack-neighbors (p/positions (path/fiend-neighbors player state))]
    (map (fn[p] {:action :attack, :pos p, :from pos}) attack-neighbors)))

(defn heals[state player]
  (when (and (-> player :actions :heal) (-> player :sp s/charged? not))
    (map (fn[p] {:action :heal, :pos p, :from (:pos player)}) (-> state :occupied keys))))

(defn beams[state player]
  (when (and (-> player :actions :heal) (-> player :sp s/charged?))
    (map (fn[p] {:action :beam, :pos p, :from (:pos player)}) (-> state :occupied keys))))

(defn blocks[state player]
  (when (-> player :actions :block)
    [{:action :block, :pos (:pos player), :from (:pos player)}]))

(defn loots[state player]
  (when (-> player :actions :loot)
    (map (fn[p] {:action :loot, :pos p, :from (:pos player)}) (-> state :loots))))

(defn charges[state player]
  (when (and (-> player :actions :charge) (-> state :loots empty?))
    [{:action :charge, :pos (:pos player), :from (:pos player)}]))

(defn unleashs[state player]
  (when (-> player :actions :unleash)
    (map (fn[p] {:action :unleash, :pos p, :from (:pos player)}) (-> state :players p/npcs p/positions))))

(defn boasts[state player]
  (when (-> player :actions :boast)
    [{:action :boast, :pos (:pos player), :from (:pos player)}]))

(defn pc-targets[state]
  "Setup all possible action for the user."
  (let [player (get (:players state) (:active state))
        actions [moves attacks heals beams blocks loots charges unleashs boasts]
        targets (mapcat #(% state player) actions)]
    (assoc-in state [:targets] targets)))

