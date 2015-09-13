(ns horizon-alpha.view.logo
  "Define the logo for every person on the playing field."
  (:require [om.dom :as dom :include-macros true]
            [horizon-alpha.utils :refer [to-js]]
            [horizon-alpha.field.pos :as p]))

(defn avatar [type role]
  (cond
     (= :heal role) "m 0 -12 l 3 0, 0 10, 10 0, 0 6, -10 0, 0 10, -6 0, 0 -10, -10 0, 0 -6, 10 0, 0 -10, 3 0 z"
     (= :dps role) "m 0 -15 c 8 15, 1 10, 3 21 l 4 0, 0 2, -5 0, 0 6, -4 0, 0 -6, -5 0, 0 -2, 4 0 m 3 -21 c -8 15, -1 10, -3 21 m 3 -21 z"
     (= :tank role) "m 0 -10 l 8 0 c 0 5, 0 20, -8 24 m 0 -24 l -8 0 c 0 5, 0 20, 8 24 m 0 24 z"
     (= :cast role) "m -15 -5 l 30 0 -24.27 17.63, 9.27 -28.53, 9.27 28.53 z"
     :else " l 0 0, 10 10, -10 -10, -10 10, 10 -10, -10 -10, 10 10, 10 -10, -10 10 z"))

(defn player [pos player extra]
  (let [x (:x pos)
        y (:y pos)
        type (:type player)
        role (:role player)
        d (str "M " x " " y (avatar type role))
        className (str (name type) " " (name role))
        options {:x x :y y :d d :className className}]
  (dom/path (to-js (merge options extra)) nil )))

(defn cursor [action]
  (cond
     (contains? #{:move :loot} action) "m 0 -5 l 6 6, -6 -6, -6 6, 6 -6, 0 16, 0 -16 z"
     (contains? #{:heal} action) " l 0 0, 5 5, -5 -5, -5 5, 5 -5, -5 -5, 5 5, 5 -5, -5 5 z"
     (contains? #{:attack :unleash :beam} action) "
             l 0 0, 3 4, 0 -1, 1 0, -4 -3 z
             l 0 0, 4 -3, -1 0, 0 -1, -3 4 z
             l 0 0, -3 -4, 0 1, -1 0, 4 3 z
             l 0 0, -4 3, 1 0, 0 1, 3 -4 z"
     (contains? #{:block :boast :charge} action) "m 0 0 z"
     :else " l 0 0, 10 10, -10 -10, -10 10, 10 -10, -10 -10, 10 10, 10 -10, -10 10 z"))

(defn cursor-transform [{:keys [x y]} nvec action]
  (cond
     (contains? #{:move :loot} action) (let [a (+ (p/angle nvec) 90)] (str "rotate(" a "," x "," y ")"))
     (= :heal action) (let [a 45] (str "rotate(" a "," x "," y ")"))
     :else ""))

(defn target [pos from action extra]
  (dom/path (to-js (merge {:x (:x pos)
                           :y (:y pos)
                           :d (str "M " (:x pos) " " (:y pos) (cursor action))
                           :className "target"
                           :transform (cursor-transform pos (p/normed-vec from pos) action)}
                          extra)) nil ))

