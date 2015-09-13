(ns horizon-alpha.model.action
  "Action for any players."
  (:require [horizon-alpha.player.stat :as s]
            [horizon-alpha.field.field :as f]
            [horizon-alpha.player.player :as p]
            [horizon-alpha.model.heal :as heal]
            [horizon-alpha.model.attack :as attack]
            [clojure.set :refer [difference]]))

(defn move [state pos]
  "Move the active player to the given position."
  (let [player (get (:players state) (:active state))
        state2 (assoc-in state [:players (:id player) :pos] pos)
        state3 (update-in state2 [:loots] #(difference % #{pos}))
        sp-reset (contains? #{:artheon :gaea} (:active state3))]
        (if sp-reset (update-in state3 [:players (:id player) :sp] #(s/clear %)) state3)))

(defn unleash [state pos]
  "Gaea unleashes sp charge at what is at the given position."
  (let [omegazell (-> state :players :omegazell)
        target-id (get (:occupied state) pos)
        charge (get-in state [:players :gaea :sp :current])
        target-hp (get-in state [:players target-id :hp :current])
        state2 (-> state
                   (update-in [:players target-id :hp] #(s/uncharge % charge))
                   (update-in [:players :gaea :sp] #(s/clear %)))
        final-hp (get-in state2 [:players target-id :hp :current])
        ]
        (update-in state2 [:players :omegazell :sp] #(s/charge % (- target-hp final-hp)))))

(defn charge [state pos]
  "Charge sp of player at position."
  (let [id (get (:occupied state) pos)]
    (update-in state [:players id :sp] #(s/charge % 100))))

(defmulti execute-action :action)

(defmethod execute-action :move    [target state] (move state (:pos target)))
(defmethod execute-action :loot    [target state] (move state (:pos target)))
(defmethod execute-action :attack  [target state] (attack/attack state (:pos target)))
(defmethod execute-action :unleash [target state] (unleash state (:pos target)))
(defmethod execute-action :heal    [target state] (heal/heal state (:pos target)))
(defmethod execute-action :beam    [target state] (attack/beam state (:pos target)))
(defmethod execute-action :charge  [target state] (charge state (:pos target)))
(defmethod execute-action :block   [target state] (charge state (:pos target)))
(defmethod execute-action :boast   [target state] (charge state (:pos target)))

(defn handle-action[state target]
  "Execute the action chosen by the user."
  (execute-action target state))

