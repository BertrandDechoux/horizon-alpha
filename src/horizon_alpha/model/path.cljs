(ns horizon-alpha.model.path
  "Logic for actions in the field."
  (:require [horizon-alpha.field.grid :as grid]
            [horizon-alpha.field.field :as f]
            [horizon-alpha.player.player :as p]
            [clojure.set :refer [difference intersection]]))

(defn walkable-neighbors [pos state]
  "Positions that are within walkable reach from pos."
  (let [around (-> pos grid/neighbors set)
        occupied (-> state :occupied keys set)
        neighbors (select-keys (:field state) (difference around occupied))]
    (f/positions (filter f/walkable? neighbors))))

(defn fiend-neighbors [player state]
  "Players that are within attackable reach from pos."
  (let [around (-> player :pos grid/neighbors set)
        fiends (p/fiends (:players state) (:type player))
        occupied (-> fiends p/positions set)
        neighbors (select-keys (:field state) (intersection around occupied))
        positions (f/positions neighbors)
        ids (vals (select-keys (:occupied state) positions))]
    (select-keys (:players state) ids)))

(defn- walk [done pred?]
  "All possibles paths from an existent path."
  #(for [n (difference (set (grid/neighbors (first %))) done) :when (pred? n)] (conj % n)))

(defn- step [paths done pred? targets]
  "One step for all current paths."
  (let [paths2 (mapcat (walk done pred?) paths)
        done2 (reduce #(conj %1 (first %2)) done paths2)]
    (if (or (= paths paths2) (-> (intersection targets done2) empty? not))
            paths2 (recur paths2 done2 pred? targets))))

(defn short-paths [pos state pred? targets]
  "Shortest paths."
  (let [neighbors (grid/neighbors pos)
        around (set (filter pred? neighbors))
        done around
        paths (map #(list %) around)]
    (step paths done pred? targets)))

(defn best-moves [paths targets]
  (->> (map #(if (contains? targets (first %)) {(last %) 1} {(last %) 0}) paths)
       (apply merge-with +)
       (sort-by (comp - second))))

