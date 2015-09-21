(ns horizon-alpha.test.field.pos
  (:require-macros [cljs.test
                    :refer (deftest is testing run-tests)])
  (:require [cljs.test :as t]
            [horizon-alpha.field.pos :as p]
            [horizon-alpha.test.utils :as u]))

(defn angle [x y]
  (-> (p/pos x y) p/angle int))

(defn n-angle [x1 y1 x2 y2]
  (-> (p/normed-vec (p/pos x1 y1) (p/pos x2 y2)) p/angle int))

(deftest test-angle-round
  (is (=   0  (angle  1  0)))
  (is (=  90  (angle  0  1)))
  (is (= 180  (angle -1  0)))
  (is (= -90  (angle  0 -1)))
  )

(deftest test-angle-normalized
  (is (=   0  (n-angle   2  1,  10   1)))
  (is (=  90  (n-angle   1  2,   1  10)))
  (is (= 180  (n-angle  -2 -1, -10  -1)))
  (is (= -90  (n-angle  -1 -2,  -1 -10)))
  )



