(ns horizon-alpha.model.game
  "The management(!) of the state of the application."
  (:require [horizon-alpha.model.state :as st]
            [horizon-alpha.player.player :as p]
            [horizon-alpha.player.stat :as s]
            [horizon-alpha.model.action :as a]
            [horizon-alpha.model.target :as target]
            [horizon-alpha.model.ai :as ai]
            [horizon-alpha.utils :refer [do-while-clock later and?]]
            [horizon-alpha.i18n :refer [i18n]]))

; bad package architecture...
(def t (i18n))

(declare start!)

(defn npc-end! [state]
  "For npc player player, automatically chose the best options.
  and contine the game."
  (later #(do
            (swap! state (fn[s] (-> s ai/ai st/clean)))
            (start! state))
         500))

(defn pc-end! [state]
  "For pc player, display the options."
  (swap! state target/pc-targets))

(defn pc-action! [target state]
  "Continue the game by executing the selected pc action."
  (do
    (swap! state #(-> % (a/handle-action target) st/clean))
    (start! state)))

(defn step[state]
  (let [s1 (update-in state [:players] p/charge-aps)]
    (if (-> s1 :loots empty?) s1
      (update-in s1 [:players :gaea :sp] #(s/clear %)))))

(defn step! [state]
  "Perform something each tick of the game clock."
  (swap! state step))

(defn continue?! [state]
  "The game clocks should stops when on player is ready."
  (-> state (swap! st/sync-active) :active nil?))

(defn end! [state]
  "When clock stops, check end of game or find out which side must play."
  (let [player (get (:players @state) (:active @state))
        type (:type player)]
    (cond (= 0 (-> @state :players p/npcs count)) (js/alert (t :app/win))
          (not= 4 (-> @state :players p/pcs count)) (js/alert (t :app/lose))
          (= :npc type) (npc-end! state)
          (= :pc type) (pc-end! state))))

(defn start! [state]
  "Start game clock associated with game logic."
  (do-while-clock #(step! state) #(continue?! state) #(end! state) 100))
