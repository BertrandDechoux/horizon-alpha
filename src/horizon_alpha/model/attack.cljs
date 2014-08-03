(ns horizon-alpha.model.attack
  "The attack action."
  (:require [horizon-alpha.player.stat :as s]))

(def ^:private attack-amount 100)

(defn normal-attack [state pos]
  "The active player attacks what is at the given position."
  (let [id (get (:occupied state) pos)]
    (update-in state [:players id :hp] #(s/uncharge % attack-amount))))

(defn omegazell-attack [state pos]
  "The active player attacks what is at the given position."
  (let [id (get (:occupied state) pos)
        charge (get-in state [:players :omegazell :sp :current])
        state2 (update-in state [:players id :hp] #(s/uncharge % (min attack-amount charge)))]
    (update-in state2 [:players :omegazell :sp] #(s/uncharge % (min attack-amount charge)))))

(defn artheon-attack [state pos]
  "Artheon attacks a npc and enables Omegazell to attack even more."
  (let [id (get (:occupied state) pos)
        target-hp (get-in state [:players id :hp :current])
        state2 (update-in state [:players id :hp] #(s/uncharge % attack-amount))
        final-hp (get-in state2 [:players id :hp :current])]
    (update-in state2 [:players :omegazell :sp] #(s/charge % (- target-hp final-hp)))))

(defn attack [state pos]
  "The active player attacks what is at the given position."
  (cond
   (= :omegazell (:active state)) (omegazell-attack state pos)
   (= :artheon (:active state)) (artheon-attack state pos)
   :default (normal-attack state pos)))


(defn beam [state pos]
  "Sparadrap kills what is at the given position and enables Omegazell to attack even more."
  (let [id (get (:occupied state) pos)
        target-hp (get-in state [:players id :hp :current])
        state2 (update-in state [:players id :hp] s/clear)
        final-hp (get-in state2 [:players id :hp :current])
        state3 (update-in state2 [:players :sparadrap :sp] s/clear)]
    (update-in state3 [:players :omegazell :sp] #(s/charge % (- target-hp final-hp)))))
