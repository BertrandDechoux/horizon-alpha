(ns horizon-alpha.model.heal
  "The heal action."
  (:require [horizon-alpha.player.stat :as s]))

(def ^:private heal-amount 100)

(defn normal-heal [state pos]
  "Standard heal procedure for npc healer."
  (let [id (get (:occupied state) pos)]
      (update-in state [:players id :hp] #(s/charge % heal-amount))))

(defn pc-heal [state id charge]
  "Sparadrap heals a pc and loses clumsiness."
  (let [target-hp (get-in state [:players id :hp :current])
        state2 (update-in state [:players id :hp] #(s/charge % charge))
        final-hp (get-in state2 [:players id :hp :current])
        ]
  (update-in state2 [:players :sparadrap :sp] #(s/uncharge % (- final-hp target-hp)))))

(defn npc-heal [state id]
  "Sparadrap heals a npc and gains clumsiness."
  (let [target-hp (get-in state [:players id :hp :current])
        state2 (update-in state [:players id :hp] #(s/charge % heal-amount))
        final-hp (get-in state2 [:players id :hp :current])
        ]
  (update-in state2 [:players :sparadrap :sp] #(s/charge % (* 2 (- final-hp target-hp))))))

(defn sparadrap-heal [state pos]
  "Custom heal procedure for sparadrap."
  (let [id (get (:occupied state) pos)
        charge (-> state :players :sparadrap :sp :current)]
        (if (= :npc (get-in state [:players id :type]))
          (npc-heal state id)
          (pc-heal state id (min heal-amount charge)))))

(defn heal [state pos]
  "The active player heals what is at the given position."
  (if (= :sparadrap (:active state))
    (sparadrap-heal state pos)
    (normal-heal state pos)))
