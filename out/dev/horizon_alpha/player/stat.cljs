(ns horizon-alpha.player.stat
  "A player numeric value.")

(defn stat
  "A player numeric statistic with a max value."
  ([max]
     {:pre [(pos? max)]}
     {:current max :max max})
  ([current max]
     {:pre [(<= 0 current max)(pos? max)]}
     {:current current :max max}))

(defn charged? [{:keys [max current]}]
  "True iff stat is at max value."
  (= max current))

(defn clear [{:keys [max]}]
  "Remove all charge from stat."
  (stat 0 max))

(defn cleared? [{:keys [current]}]
  "True iff stat is at 0."
  (= 0 current))

(defn charge
  "Increase a stat but without being over the max value."
  ([s]
    (charge s 1))
  ([s n]
      (let [m (:max s)
            u (+ (:current s) n)]
      (if (< u m) (stat u m) (stat m m)))))

(defn uncharge [s n]
  "Decrease a stat but without being below the min value."
  (if (cleared? s) s
    (let [m (:max s)
          u (- (:current s) n)]
    (if (<= u 0) (stat 0 m) (stat u m)))))
