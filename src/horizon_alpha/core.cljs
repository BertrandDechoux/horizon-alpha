(ns horizon-alpha.core
  (:require [clojure.string :refer [lower-case]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [horizon-alpha.model.state :refer [gen-state]]
            [horizon-alpha.model.game :as game]
            [horizon-alpha.field.grid :as grid]
            [horizon-alpha.player.player :refer [pcs npcs]]
            [horizon-alpha.view.player :as player]
            [horizon-alpha.view.svg :as svg]
            [horizon-alpha.i18n :refer [i18n]]
            [horizon-alpha.utils :refer [app-element lang user-agent]]))

(enable-console-print!)

(def t (i18n))

(if (not (re-find #"chrome" (lower-case (user-agent))))
    ; warning message
    (js/alert (t :setup/chrome-required))
    ; else starts the game
    (let [options (app-element "root")]
      (if-not (nil? (:target options))
        (do
          (def app-state (atom (gen-state)))
          (def cell-radius 19)
          (def interpolate (grid/hex-tiling 40))

          (defn field-cell [[[pos terrain] is-loot]]
            (let [ipos (interpolate pos)
                  grad (str "url(#grad_" (name terrain) ")")]
              (if is-loot
                [(svg/circle ipos cell-radius "loot" {})
                 (svg/text ipos (t :app/loot) "$")]
                [(svg/circle ipos cell-radius (name terrain) {:fill grad})])))

          (defn app-view [app owner]
            (reify
              om/IRenderState
              (render-state [_ state]
                (dom/div #js {:id "app"}
                  (dom/div #js { :className "apptitle" }
                           (dom/span nil "Horizon Alpha")
                           (dom/a #js { :href (t :app/guide) :target "_blank" } (t :app/help)))
                  (apply dom/div #js { :className "npcs" }
                         (dom/div #js { :className "title" } (t :app/npcs))
                         (om/build-all (player/info-view app-state) (npcs (:players app))))
                  (apply dom/svg #js { :className "field" }
                      (concat (mapcat #(field-cell [% (contains? (:loots app) (first %))]) (:field app))
                              (om/build-all (player/cell-view app-state interpolate cell-radius) (:players app))
                              (om/build-all (player/target-view app-state interpolate cell-radius) (:targets app))))
                  (apply dom/div #js { :className "pcs" }
                         (dom/img #js { :className "logo" :src "img/logo-noob.jpg"})
                         (om/build-all (player/info-view app-state) (pcs (:players app))))))))

          (om/root app-view app-state options)
          (game/start! app-state)))))



