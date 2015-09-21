(ns horizon-alpha.test.field.grid
  (:require-macros [cljs.test
                    :refer (deftest is testing run-tests)])
  (:require [cljs.test :as t]
            [horizon-alpha.field.pos :as p]
            [horizon-alpha.field.grid :as g]
            [horizon-alpha.test.utils :as u]))


(def interpolate (g/hex-tiling 40))

(defn close? [d] (<= d (* 1.5 40)))

(defn neighbors-distances [x y]
  (for [c [(p/pos x y)], n (g/neighbors c)]
    (p/distance (interpolate c) (interpolate n))))

(deftest test-size-neighbors
  (is (= 6 (count (g/neighbors (p/pos 5 5)))))
  (is (= 6 (count (g/neighbors (p/pos 10 10))))))

(deftest test-distance-neighbors
  (is (every? close? (neighbors-distances 5 5)))
  (is (every? close? (neighbors-distances 10 10))))



