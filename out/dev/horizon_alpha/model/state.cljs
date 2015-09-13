(ns horizon-alpha.model.state
  "The complete state of the application."
  (:require [horizon-alpha.field.field :as f]
            [horizon-alpha.player.player :as p]
            [clojure.set :refer [union]]))

(defn sync-occupied [state]
  "Update the occupied state information ie the pos -> player-id index."
  (let [players (:players state)
        f #(vector (get-in % [1 :pos]) (first %))
        occupied (into {} (map f players))]
  (assoc-in state [:occupied] occupied)))

(defn sync-active [state]
  "Update the active state information ie which player is it the turn to act."
  (assoc-in state [:active] (-> state :players p/ready :id)))

(defn set-focus [state pos]
  (assoc-in state [:focus] pos))

(defn set-targets [state targets]
  (assoc-in state [:targets] targets))

(defn gen-state []
  "The complete state of the application."
  (let [field (f/gen-field)
        players (p/starting-players field)]
    (-> {:field field, :players players, :loots #{}}
        sync-occupied sync-active (set-focus nil) (set-targets nil))))

(defn active-done [state]
  (update-in state [:players (:active state)] p/done))

(defn sync-players [state]
  "Dead players should be replaced by loots."
  (let [deads (-> state :players p/dead p/positions set)
        s2 (update-in state [:loots] #(union % deads))]
    (update-in s2 [:players] p/alive)))

(defn clean [state]
  (-> state
      active-done sync-active
      (assoc-in [:targets] [])
      sync-players sync-occupied))
