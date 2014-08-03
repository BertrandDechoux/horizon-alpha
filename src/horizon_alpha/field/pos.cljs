(ns horizon-alpha.field.pos
  "A position on a 2D space."
  (:require [horizon-alpha.utils :refer [pow2]]))

(defn pos [x y]
  "A classic 2D position."
  {:x x :y y})

(defn distance [p1 p2]
  "Euclidian lenght for 2 dimensions."
  (Math/sqrt (+ (pow2 (- (:x p2) (:x p1)))
                (pow2 (- (:y p2) (:y p1))))))

(defn normed-vec [from to]
  "The normalized vector."
  (let [x (- (:x to) (:x from))
        y (- (:y to) (:y from))
        d (distance from to)]
    (pos (/ x d) (/ y d))))

(defn angle[{:keys [x y]}]
  "Return the angle in degrees."
  (let [a (Math/atan2 x y)
        b (* a (/ 180 Math/PI))
        c (- 90 b)]
    c))
