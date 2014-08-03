(ns horizon-alpha.field.terrain
  "Ground behavior.")

(defn transparent? [t]
  "Can we see through it?"
  (contains? #{:grass :lava} t))

(defn walkable? [t]
  "Can we walk into it?"
  (contains? #{:grass} t))

(defn rand-terrain []
  "Randomized terrain type. P(:grass) > P(:rock) > P(:lava)"
  (if (< (rand) 0.9)
    :grass
    (if (< (rand) 0.9) :rock :lava)))
