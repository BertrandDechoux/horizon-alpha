(ns horizon-alpha.utils
  "Various utilities for clojure, clojureScript or OM."
  (:require [cljs.core.async :as async :refer [go <! timeout]])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(defn app-element [id]
  "Specify the dom anchor : https://github.com/swannodette/om/wiki/Documentation#root"
  {:target (. js/document (getElementById id))})

(defn later[f msecs]
  "Async execution of the function."
  (go (let [timer (timeout msecs)]
        (<! timer)
        (f))))

(defn do-while-clock [step-f continue-f end-f msecs]
  "Execute (doFn) every msecs while (continueFn)."
  (go (loop [timer (timeout msecs)]
        (<! timer)
        (if-not (continue-f)
          (end-f)
          (do (step-f) (recur (timeout msecs)))))))

(defn to-js [m]
  "Transform a clojure(script) map into a javascript object."
  (apply js-obj (mapcat (fn[[k v]] [(name k) v]) m)))

(defn pow2[n]
  "Shorcut for to the power of 2."
  (Math/pow n 2))

(defn and?[p1 p2]
  "And composition for predicates."
  #(and (p1 %) (p2 %)))
