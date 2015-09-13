(ns horizon-alpha.view.player
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [horizon-alpha.model.game :as game]
            [horizon-alpha.player.player :refer [pcs npcs]]
            [horizon-alpha.view.logo :as logo]
            [horizon-alpha.view.svg :as svg]
            [horizon-alpha.utils :refer [to-js]]))

(defn width [{:keys [current max]}]
  "Gauge representation of a stat."
  (str (* 100 (/ current max)) "%"))

(defn stat [player stat-type]
  "Dom representation of a stat."
  (when (stat-type player)
    (dom/div #js { :className (str "stat " (name stat-type)) }
             (dom/div #js { :style #js { :width (width (stat-type player)) }} nil))))

(defn focus! [pos app-state]
  "Change position in focus."
  (fn [e] (swap! app-state #(assoc-in % [:focus] pos))))

(defn focus-register[pos app-state extra]
  "Update focus on dom events."
  (to-js (merge { :onMouseEnter (focus! pos app-state)
                  :onMouseLeave (focus! nil app-state)} extra)))

(defn css-class [player app-state]
  "Common css classes for player views : type, focus and view."
  (str (name (:type player))
       (if (= (:pos player) (:focus @app-state)) " focus " "")
       (if (= (:id player) (:active @app-state)) " active" "")))

(defn info-view [app-state]
  "View with name and stats of the player."
  (fn [[_ player] owner]
    (reify
      om/IRender
      (render [_]
              (dom/div (focus-register (:pos player) app-state { :className (str "player " (css-class player app-state)) })
                       (dom/svg #js { :className "icon" } (logo/player {:x 23.5 :y 23.5} player {}))
                       (dom/p nil (:name player))
                       (dom/div #js { :className "stats" } (stat player :hp) (stat player :sp) (stat player :ap)))))))

(defn cell-view [app-state interpolate cell-radius]
  "View of the player in the field."
  (fn [[_ player] owner]
    (reify
      om/IRender
      (render [_]
              (let [ipos (interpolate (:pos player))
                    type (:type player)]
                (dom/g (focus-register (:pos player) app-state {})
                       (svg/circle ipos cell-radius (css-class player app-state) {})
                       (logo/player ipos player {})))))))

(defn target-view [app-state interpolate cell-radius]
  "View of the player in the field."
  (fn [target owner]
    (reify
      om/IRender
      (render [_]
              (let [{:keys [action pos from]} target
                    ipos (interpolate pos)
                    ifrom (interpolate from)]
                (dom/g (focus-register pos app-state { :className (str "target " (name action))
                                                       :onClick (fn [e] (game/pc-action! target app-state))})
                       (svg/circle ipos (- cell-radius 8) "target" {})
                       (logo/target ipos ifrom action {})))))))
