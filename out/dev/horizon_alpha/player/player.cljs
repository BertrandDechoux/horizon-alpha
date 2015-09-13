(ns horizon-alpha.player.player
  "Player : a playable or not character."
    (:require [horizon-alpha.player.stat :as s]
              [horizon-alpha.field.field :as f]
              [horizon-alpha.utils :refer [and?]]))

(def ^:private previous-id (atom 0))

(defn- next-id []
  (swap! previous-id inc))

(defn pc [id role name hp ap actions sp]
  "Any actor in the game (playable or not)."
  {:id id, :type :pc, :role role, :name name,
   :hp (s/stat hp), :sp (s/stat (-> sp (/ 2) int) sp), :ap (s/stat 0 ap),
   :actions actions})

(defn npc [role name hp ap actions]
  "Any actor in the game (playable or not)."
  {:id (next-id), :type :npc, :role role, :name name,
   :hp (s/stat hp), :ap (s/stat 0 ap),
   :actions actions})

(defn init-pcs []
"
Arthéon
> Vie + Colère
Omega Zell => add :slash
> Vie + Machisme
Gaea => add :loot
> Vie + Avarice
Sparadrap => add :beam
> Vie + Maladresse
"
  [(pc :artheon   :tank  "Arthéon"    1000 35 #{:move :attack :block} 500)
   (pc :omegazell :dps   "Omega Zell"  400 10 #{:move :attack :boast} 500)
   (pc :gaea      :cast  "Gaea"        400 15 #{:move :charge :unleash :loot} 500)
   (pc :sparadrap :heal  "Sparadrap"   200 15 #{:move :heal :beam} 500)])

(defn init-npcs []
  [(npc :tank "Mob" 900 40 #{:move :attack})
   (npc :dps  "Dark Avenger" 300 15 #{:move :attack})
   (npc :heal "Maître Zen" 100 20 #{:move :heal})])

(defn starting-players [field]
  (let [pcs-pos  (->> field (filter (and? f/walkable? f/inside?))
                          f/positions shuffle)
        npcs-pos (->> field (filter (and? f/walkable? f/edge?))
                          f/positions shuffle)
        starting (fn[init pos] (into {} (map #(vector
                                               (:id %1)
                                               (assoc-in %1 [:pos] %2))
                                 (init) pos)))]
    (merge (starting init-pcs pcs-pos) (starting init-npcs npcs-pos))))

(defn positions [players]
  "Positions from all players."
  (map #(-> % second :pos) players))

(defn done [player]
  "The player has acted during its turn : empty ap stat".
  (update-in player [:ap] s/clear))

(defn alive? [player]
  "Empty hp means death."
  (-> player :hp s/cleared? not))

(defn wounded? [player]
  "Player is wounded if hp is not at max."
  (-> player :hp s/charged? not))

(defn friends [players type]
  "All players from a given type."
  (filter #(= (get-in % [1 :type]) type) players))

(defn fiends [players type]
  "All players from the opposite type."
  (filter #(not= (get-in % [1 :type]) type) players))

(defn pcs [players]
  "All playable characters from players."
  (filter #(= (get-in % [1 :type]) :pc) players))

(defn npcs [players]
  "All non playable characters from players."
  (filter #(= (get-in % [1 :type]) :npc) players))

(defn ready [players]
  "Return a ready player."
  (-> (filter #(-> % val :ap s/charged?) players) first second))

(defn weakest-at [players]
  "Return the positions with the player having the lowest health."
  (-> (sort-by #(get-in % [1 :hp :current]) players) positions first))

(defn charge-aps [players]
  "Charge :ap stat for all players."
  (merge {} (map #(update-in % [1 :ap] s/charge) players)))

(defn alive [players]
  "All alive players."
  (into {} (filter (comp alive? second) players)))

(defn dead [players]
  "All dead players."
  (into {} (filter (comp not alive? second) players)))

(defn wounded [players]
  "All wounded players."
  (into {} (filter (comp wounded? second) players)))
