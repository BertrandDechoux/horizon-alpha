(ns horizon-alpha.field.grid
  "An ensemble of positions."
  (:require [horizon-alpha.field.pos :as p]
            [horizon-alpha.utils :refer [pow2]]))

(defn square [length]
  "All positions of a square grid."
  (let [r (range 1 (inc length))]
    (for [x r, y r] (p/pos x y))))

(defn hex-tiling [x-scale]
  "Return function transforming square grid position to hexagonal tiling."
  (let [y-scale (Math/sqrt (- (-> x-scale pow2)
                              (-> x-scale (/ 2) pow2)))]
    (fn [{:keys [x y]}]
      (p/pos (* x-scale (if (odd? y) x (+ 0.5 x)))
           (* y-scale y)))))

(defn neighbors [{:keys [x y]}]
  "All positions next to the provided one, according to hex tiling."
  (if (even? y)
    [(p/pos x (dec y))
     (p/pos (inc x) (dec y))
     (p/pos (inc x) y)
     (p/pos (inc x) (inc y))
     (p/pos x (inc y))
     (p/pos (dec x) y)
     ]
    [(p/pos (dec x) (dec y))
     (p/pos x (dec y))
     (p/pos (inc x) y)
     (p/pos x (inc y))
     (p/pos (dec x) (inc y))
     (p/pos (dec x) y)
     ]))
