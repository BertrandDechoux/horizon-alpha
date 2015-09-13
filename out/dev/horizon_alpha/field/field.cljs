(ns horizon-alpha.field.field
  "A grid with properties."
  (:require [horizon-alpha.field.terrain :as t]
            [horizon-alpha.field.grid :as grid]))

(def ^:private field-length
  "Number of cells horizontally and vertically."
  14)

(defn gen-field []
  "Generate the full randomize playing-field."
  (apply merge (for [pos (grid/square field-length)] { pos (t/rand-terrain)})))

(defn edge? [[{:keys [x y]} _]]
  "True if the position is on one edge of the playing field."
  (or (contains? #{1 field-length} x)
      (contains? #{1 field-length} y)))

(defn inside? [[{:keys [x y]} _]]
  "True if the position is remote from the edges."
  (let [margin 3
        min (+ 1 margin)
        max (- field-length margin)]
    (and (<= min x max) (<= min y max))))

(defn walkable? [[_ terrain]]
  "True if the position has a walkable terrain."
  (t/walkable? terrain))

(defn positions [field]
  "Extract all the positions from the field."
  (map first field))
