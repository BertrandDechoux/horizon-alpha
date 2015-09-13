(ns horizon-alpha.view.svg
  "Shortcut for svg clojureScript elements."
  (:require [om.dom :as dom]
            [horizon-alpha.utils :refer [to-js]]))

(defn circle [pos r className extra]
  (let [options {:cx (:x pos)
                 :cy (:y pos)
                 :r r
                 :className className}]
  (dom/circle (to-js (merge options extra)) nil)))

(defn text [pos className text]
  (let [options {:x (- (:x pos) 8)
                 :y (+ (:y pos) 10)
                 :className className}]
  (dom/text (to-js options) text)))
