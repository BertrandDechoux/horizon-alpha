(ns taoensso.encore "Some tools I use often, w/o any external deps."
  {:author "Peter Taoussanis"}
                                           
                                                
                                                
                                               
                                                       
                                                      
                                                   
                                               
                                                              
                    
         (:require [clojure.string      :as str]
                   [clojure.set         :as set]
                   ;; [cljs.core.async  :as async]
                   [cljs.reader         :as edn]
                   ;;[goog.crypt.base64 :as base64]
                   [goog.string         :as gstr]
                   [goog.string.format]
                   [goog.string.StringBuffer]
                   [goog.events         :as gevents]
                   [goog.net.XhrIo      :as gxhr]
                   [goog.net.XhrIoPool  :as gxhr-pool]
                   ;; [goog.net.XhrManager :as xhrm]
                   [goog.Uri.QueryData  :as gquery-data]
                   [goog.structs        :as gstructs]
                   [goog.net.EventType]
                   [goog.net.ErrorCode])
         (:require-macros [taoensso.encore :as enc-macros :refer
                           (catch-errors have? have compile-if)]))

;;;; TODO
;; * Further boxed math optimizations.

;;;; Version check

(declare format)
(def  encore-version "Used for lib-consumer version assertions" 1.24)
(defn assert-min-encore-version [min-version]
  (when (< encore-version min-version)
    (throw
      (ex-info
        (format
          "Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution)."
          encore-version min-version)
        {:min-version  min-version
         :this-version encore-version}))))

(comment (assert-min-encore-version 1.3))

;;;; Core

                    
                                                                             
                                                                           

                                                                   
                                  
                                      
                       
                                                 
               
                  

                 
                                                            
                                                                                
                                                                             
                            
                                                                               
             
                                                                         
               

(defn name-with-attrs
  "Handles optional docstrings & attr maps for a macro def's name.
  Stolen from `clojure.tools.macro`."
  [name macro-args]
  (let [[docstring macro-args] (if (string? (first macro-args))
                                 [(first macro-args) (next macro-args)]
                                 [nil macro-args])
        [attr macro-args] (if (map? (first macro-args))
                            [(first macro-args) (next macro-args)]
                            [{} macro-args])
        attr (if docstring   (assoc attr :doc docstring) attr)
    attr (if (meta name) (conj (meta name) attr)     attr)]
    [(with-meta name attr) macro-args]))

                  
                                                                             
                       
                            
               
                                                  
                                         

                        
                                                                                
                         
           
                               
                       
                                        
                                   
                                    
                                               
                                                                      
                                          

                  
                                                                
                                                    
                       
                                            
                                              
                                                                                      
                                                         
                  

                    
                                                            
                                                                                

(comment (cond false "false") (cond-throw false "false"))

                                                                           
                                                                             
                                  
                  
                                                                  
                                                       
                 
                                          
            

                   
                                                                          
               
                                             
                                                            
                                                       
             
                                                                        
                              
                                 

                 
                                                                   
                                                  
                       
                                    
                
                                                                     
                                            

(comment
  (if-lets [a :a]  a)
  (if-lets [a nil] a)
  (if-lets [a :a b :b]  [a b])
  (if-lets [a :a b nil] [a b]))

                   
                                                                     
                   
                                 
             
                                                           
                                     

(comment (when-lets [a :a b nil] "foo"))

;;;; Types

;; ClojureScript keywords aren't `identical?` and Clojure doesn't have
;; `keyword-identical?`. This util helps alleviate the pain of writing
;; cross-platform code. Ref. http://goo.gl/be8CGP.
                                     
       (def kw-identical? keyword-identical?)

(defn stringy? [x] (or (keyword? x) (string? x)))
(defn atom?    [x] (instance?                                Atom x))

(compile-if (do (require 'clojure.core.async) true)
  (defn chan? [x]
                                                                           
           (instance?    cljs.core.async.impl.channels.ManyToManyChannel x))

  ;; Nb nil rather than false to help distinguish from negative `instance?` test:
  (defn chan? [x] nil))

                                                   
                                                   
      (defn error?     [x]                      
                                  (instance? js/Error x))

(defn error-data "Returns data map iff `x` is an error of any type on platform."
  [x]
  (when-let [data-map (or (ex-data x) ; ExceptionInfo
                                                                  
                                 (when (instance? js/Error  x) {}))]
    (merge
                                                              
                                           
                                           
                                             
             (let [err x] ; (catch :default t <...)
               {:err-type  (type      err)
                :err-msg   (.-message err)
                :err-cause (.-cause   err)})
      data-map)))

(comment
  (error-data (Throwable. "foo"))
  (error-data (Exception. "foo"))
  (error-data (ex-info    "foo" {:bar :baz})))

                                                                    
          
          
                                                      
                                                        

(comment (catch-errors (zero? "a")))

                                                                  
          
                                              
                                    

(comment (caught-error-data (/ 5 0)))

(defn     nnil? [x] (not (nil? x))) ; Same as `some?` in Clojure v1.6+
(defn   nblank? [x] (not (str/blank? x)))
(defn     nneg? [x] (not (neg? x)))
(defn  pos-int? [x] (and (integer? x) (pos? x)))
(defn nneg-int? [x] (and (integer? x) (not (neg? x))))
(defn   nvec? [n x] (and (vector?  x) (= (count x) n)))

(def udt? nneg-int?)
(defn vec2? [x] (nvec? 2 x))
(defn vec3? [x] (nvec? 3 x))

;;; These are less useful now that `have` traps errors
(defn nblank-str? [x] (and (string?  x) (not (str/blank? x))))
(defn   nneg-num? [x] (and (number?  x) (not (neg? x))))
(defn    pos-num? [x] (and (number?  x) (pos? x)))
(defn   zero-num? [x] (= 0 x)) ; Unlike `zero?`, works on non-nums

(defn as-?nblank [x] (when (string? x) (if (str/blank? x) nil x)))
(defn as-?kw     [x] (cond (keyword? x)       x  (string? x) (keyword x)))
(defn as-?name   [x] (cond (keyword? x) (name x) (string? x)          x))
(defn as-?bool   [x] (cond (nil?  x) nil
                       (or (true? x) (false? x)) x
                       (or (= x 0) (= x "false") (= x "FALSE") (= x "0")) false
                       (or (= x 1) (= x "true")  (= x "TRUE")  (= x "1")) true))

(defn as-?int [x]
  (cond (nil?    x) nil
        (number? x) (long x)
        (string? x)
               (let [x (js/parseInt x 10)] (when-not (js/isNaN x) x))
                                      
                                                  
                                                      
                                                                 ))

(defn as-?float [x]
  (cond (nil?    x) nil
        (number? x) (double x)
        (string? x)
               (let [x (js/parseFloat x)] (when-not (js/isNan x) x))
                                          
                                                        ))

(comment (have (as-?int "42")))

(defn nnil=
  ([x y]        (and (nnil? x) (= x y)))
  ([x y & more] (and (nnil? x) (apply = x y more))))

(comment (nnil= :foo :foo nil))

;;; `vec*`, `set*` functionality added to clojure.core as of Clojure 1.7-alpha5.
;;; Keeping these around for compatibility or use with older versions of Clojure.
(defn vec* [x] (if (vector? x) x (vec x)))
(defn set* [x] (if (set?    x) x (set x)))

(defn nnil-set  [x] (disj (set* x) nil))
(defn conj-some [coll ?x] (if (nnil? ?x) (conj coll ?x) coll))

(comment (nnil-set [:a :b nil]))

;;; Useful for map assertions, etc. (do *not* check that input is a map)
(defn ks=      [ks m] (=             (set (keys m)) (set* ks)))
(defn ks<=     [ks m] (set/subset?   (set (keys m)) (set* ks)))
(defn ks>=     [ks m] (set/superset? (set (keys m)) (set* ks)))
(defn ks-nnil? [ks m] (every? #(nnil? (get m %)) ks))

(comment
  (ks=      {:a :A :b :B  :c :C}  #{:a :b})
  (ks<=     {:a :A :b :B  :c :C}  #{:a :b})
  (ks>=     {:a :A :b :B  :c :C}  #{:a :b})
  (ks-nnil? {:a :A :b :B  :c nil} #{:a :b})
  (ks-nnil? {:a :A :b nil :c nil} #{:a :b}))

;;;; Conditionals (experimental)

(declare format)
(defn assertion-error [msg]                                    (js/Error. msg))
(defn hthrow "Implementation detail." [hard? ns-str ?line form val & [?err]]
  ;; http://dev.clojure.org/jira/browse/CLJ-865 would be handy for line numbers:
  (let [;; Cider unfortunately doesn't seem to print newlines in errors...
        pattern "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]"
        line-str (or ?line "?")
        form-str (pr-str form)
        val-str  (pr-str val)
        ?err-str (when-let [e ?err] (pr-str ?err))
        msg      (let [m (format pattern ns-str line-str form-str val-str)]
                   (if-not ?err-str m (str m "\nPredicate error: " ?err-str)))]
    (throw
      (if-not hard?
        (assertion-error msg)
        (ex-info msg {:ns    ns-str
                      :?line ?line
                      :form  form
                      :val   val
                      :?err  ?err})))))

(defn- non-throwing [pred] (fn [x] (let [[?r _] (catch-errors (pred x))] ?r)))
(defn hpred "Implementation detail." [pred-form]
  (if-not (vector? pred-form) pred-form
    (let [[type p1 p2 & more] pred-form
          ;; p1 (when p1 (hpred p1))
          ;; p2 (when p2 (hpred p2))
          ]
      (case type
        :=        (fn [x] (=        p1 x))
        :not=     (fn [x] (not=     p1 x))
        ;;
        :ks=      (fn [x] (ks=      p1 x))
        :ks<=     (fn [x] (ks<=     p1 x))
        :ks>=     (fn [x] (ks>=     p1 x))
        :ks-nnil? (fn [x] (ks-nnil? p1 x))
        (:el :in) (fn [x] (contains? (set* p1) x))
        (:not-el
         :not-in) (fn [x] (not (contains? (set* p1) x)))
        ;; complement/none-of:
        :not      (fn [x] (and (if-not p1 true (not ((hpred p1) x)))
                              (if-not p2 true (not ((hpred p2) x)))
                              (every? #(not ((hpred %) x)) more)))
        ;; any-of, (apply some-fn preds):
        :or  (fn [x] (or (when p1 ((non-throwing (hpred p1)) x))
                        (when p2 ((non-throwing (hpred p2)) x))
                        (some   #((non-throwing (hpred %))  x) more)))
        ;; all-of, (apply every-pred preds):
        :and (fn [x] (and (if-not p1 true ((hpred p1) x))
                         (if-not p2 true ((hpred p2) x))
                         (every? #((hpred %) x) more)))
        ;; pred-form ; No, rather throw on confusing/ambiguous pred-form (typo?)
        ))))

(comment
  ((hpred [:or nil? string?]) "foo")
  ((hpred [:or [:and integer? neg?] string?]) 5)
  ((hpred [:or zero? nil?]) nil) ; (zero? nil) throws
  )

                                        
                                                 
                      
                              
      
                                                 
                                              
                                                                                  
                  
            
                                                            
                                                    
                             
                            
                                
         
                                                               
                                                            

                                           
                                                 
                     
                              
                                 
                                                                        
                
                                                    
                                                        
                                                                           
                                           
                                
                                    
                                                                     

                                        
                                                                            
                                                                             
                                                       

          
                                                                             
                                                                            
                                                                                
                                
                                                                        
                                                             

                                                                             
                               

                                                                   
                                                                   
                                                                            
                                                                           
          
                                 
                                         
                                   
                                                             
           
                                                     
                                                        

                                            
                                                                          
                                           

                                                                                
                                           

                                                            
                                                             
                                                                           
                                    

(comment
  (let [x 5]      (have    integer? x))
  (let [x 5]      (have    string?  x))
  (let [x 5]      (have :! string?  x))
  (let [x 5 y  6] (have odd?  x x x y x))
  (let [x 0 y :a] (have zero? x x x y x))
  (have string? (do (println "eval1") "foo")
                (do (println "eval2") "bar"))
  (have number? (do (println "eval1") 5)
                (do (println "eval2") "bar")
                (do (println "eval3") 10))
  (have nil? false)
  (have string? :in ["a" "b"])
  (have string? :in (if true ["a" "b"] [1 2]))
  (have string? :in (mapv str (range 10)))
  (have string? :in ["a" 1])
  (have string? :in ["a" "b"] ["a" "b"])
  (have string? :in ["a" "b"] ["a" "b" 1])
  ((fn foo [x] {:pre [(have integer? x)]} (* x x)) "foo")
  (macroexpand '(have? a))
  (have? [:or nil? string?] "hello")

  ;; HotSpot is great with these:
  (qb 10000
    (have? "a")
    (have string? "a" "b" "c")
    (have? [:or nil? string?] "a" "b" "c")) ; [5.59 26.48 45.82]
  )

                    
                                                                                    
                                                                                
         
                                                               
                                                
                                                                  

                   
                                                                                     
                              
                
                                    
                                                                  
                                                    
                                              

(comment
  (check-some false [:bad-type (string? 0)] nil [:blank (str/blank? 0)])
  (check-all  false [:bad-type (string? 0)] nil [:blank (str/blank? 0)]))

;;;; Keywords

(defn fq-name
  "Like `name` but fully qualified: includes namespace in string when present."
  [x] (if (string? x) x
          (let [n (name x)]
            (if-let [ns (namespace x)] (str ns "/" n) n))))

(comment (map fq-name ["foo" :foo :foo.bar/baz]))

(defn explode-keyword [k] (str/split (fq-name k) #"[\./]"))
(comment (explode-keyword :foo.bar/baz))

(defn merge-keywords [ks & [no-slash?]]
  (let [parts (->> ks (filterv identity) (mapv explode-keyword) (reduce into []))]
    (when-not (empty? parts)
      (if no-slash?
        (keyword (str/join "." parts))
        (let [ppop (pop parts)]
          (keyword (when-not (empty? ppop) (str/join "." ppop))
                   (peek parts)))))))

(comment
  (merge-keywords [:foo.bar nil :baz.qux/end nil])
  (merge-keywords [:foo.bar nil :baz.qux/end nil] :no-slash)
  (merge-keywords [:a.b.c "d.e/k"])
  (merge-keywords [:a.b.c :d.e/k])
  (merge-keywords [nil :k])
  (merge-keywords [nil]))

;;;; Bytes

     
   
                                                
                                             
                                                              

                                                
                           
                           
                                     
                                        
                                        
           

                                      
                         
                     
                                              
                                                    

                                                                    
                                                         
                                         

;;;; Math

;; This must reflect to output correct long/double types:
(defn clamp [nmin nmax n] (if (< n nmin) nmin (if (> n nmax) nmax n)))

;; These will pass primitives through w/o reflection
                                                                                 
                                                                                 
                                                                    
                                                                                      

(defn pow [n exp] (Math/pow n exp))
(defn abs [n]     (if (neg? n) (- n) n)) ; #+clj (Math/abs n) reflects

(defn round [n & [type nplaces]]
  (let [                              n n
                                      modifier (when nplaces (Math/pow 10.0 nplaces))
        n* (if-not modifier n (* n modifier))
        rounded
        (case (or type :round)
          ;;; Note same API for both #+clj, #+cljs:
          :round (Math/round n*) ; Round to nearest int or nplaces
          :floor (Math/floor n*) ; Round down to -inf
          :ceil  (Math/ceil  n*) ; Round up to +inf
          :trunc (long n*)       ; Round up/down toward zero
          (throw (ex-info "Unknown round type" {:type type})))]
    (if-not modifier
      (long rounded)                ; Returns long
      (/ (double rounded) modifier) ; Returns double
      )))

(def round* round) ; Alias for ns refers

(defn round1 "Optimized common case."
                                   [n]
  (/ (double (Math/round (* n 10.0))) 10.0))

(defn round2 "Optimized common case."
                                   [n]
  (/ (double (Math/round (* n 100.0))) 100.0))

(comment
  (round -1.5 :floor)
  (round -1.5 :trunc)
  (round 1.1234567 :floor 5)
  (round 1.1234567 :round 5))

(defn exp-backoff "Returns binary exponential backoff value."
  [nattempt & [{:keys [factor] min' :min max' :max :or {factor 1000}}]]
  (let [binary-exp (Math/pow 2 (dec nattempt))
        time       (* (+ binary-exp (rand binary-exp)) 0.5 factor)]
    (long (let [time (if min' (max min' time) time)
                time (if max' (min max' time) time)]
            time))))

(comment (exp-backoff 4))

;;;; Date & time

(defn  now-dt []                                (js/Date.))
(defn now-udt                       []
                                   
         (.getTime (js/Date.)))

(defn now-udt-mock-fn "Useful for testing."
  [& [mock-udts]]
  (let [mock-udts (or mock-udts (range))
        idx       (atom -1)]
    (fn [] (nth mock-udts (swap! idx inc)))))

(comment (with-redefs [now-udt (now-udt-mock-fn)] (repeatedly 10 now-udt)))

(defn secs->ms                                 [secs] (*    secs  1000))
(defn ms->secs                                 [ms]   (quot ms    1000))
(defn ms "Returns number of milliseconds in period defined by given args."
  [& {:as opts :keys                                            
                                                               
                                                              
             [years months weeks days hours mins secs msecs ms]}]
  {:pre [(have #{:years :months :weeks :days :hours :mins :secs :msecs :ms}
           :in (keys opts))]}
  (round
   (+ (if years        (* years  1000 60 60 24 365)    0)
      (if months (long (* months 1000 60 60 24 29.53)) 0)
      (if weeks        (* weeks  1000 60 60 24 7)      0)
      (if days         (* days   1000 60 60 24)        0)
      (if hours        (* hours  1000 60 60)           0)
      (if mins         (* mins   1000 60)              0)
      (if secs         (* secs   1000)                 0)
      (if msecs           msecs                        0)
      (if ms              ms                           0))))

(def secs (comp ms->secs ms))
(comment #=(ms   :years 88 :months 3 :days 33)
         #=(secs :years 88 :months 3 :days 33))

                            
                                                                       
                                                                   

(comment
  (.get (thread-local-proxy (println "Foo")))
  (let [p (thread-local-proxy (println "Foo"))]
    (println "---")
    (dotimes [_ 100] (.get p))) ; Prints once

  (let [p (thread-local-proxy (println "Foo"))]
    (println "---")
    (.get p)
    (.get p)
    (future (.get p))
    (.get p)) ; Prints twice (2 threads)
  )

     
                                  
                                                 
          
                                                                        
                        
                                      
                      
                                                
                                           
                                                        
                     

     
                        
                                                                               
                                                                     

                                                                           
                                                                               

                                                                                
                                                                        
                                 
                                    
                                                                              
                                                         

(comment (qb 10000 (.format (simple-date-format "yyyy-MMM-dd") (Date.))))

;;;; Collections

(defn- translate-signed-idx
                                               
               [      signed-idx       max-idx]
  (if (>= signed-idx 0)
    (min      signed-idx max-idx)
    (max 0 (+ signed-idx max-idx))))

(comment (translate-signed-idx -3 5))

(defn sub-indexes
  "Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
  input (str, vec, etc.) with support for:
    * Clamping of indexes beyond limits.
    * Max-length -> end-index.
    * -ive indexes (as +ive indexes but work from back of input):
      (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
        h    e    l    l    o   ; 5 count
      (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes"
  [x start-idx & {:keys                                     
                               [      max-len       end-idx]}]
  {:pre  [(have? [:or nil? nneg-int?] max-len)]
   ;; Common out-of-bounds conds:
   ;; :post [(have? (fn [[s e]] (>= e s)) %)
   ;;        (have? (fn [[s e]] (>= s 0)) %)
   ;;        (have? (fn [[s e]] (<= e (count x))) %)]
   }
  (let [start-idx                               start-idx
        xlen       (count x) ; also = max-exclusive-end-idx
        start-idx* (translate-signed-idx start-idx xlen)
        end-idx*   (cond
                     max-len (                  enc-macros/min*
                               (+ start-idx* max-len) xlen)
                     end-idx (inc ; Want exclusive
                               (translate-signed-idx end-idx xlen))
                     :else   xlen)]
    (if (> start-idx*                              end-idx*)
      ;; [end-idx* start-idx*] ; Allow wrapping
      [0 0] ; Disallow wrapping
      [start-idx* end-idx*])))

(comment
  (sub-indexes "hello"  0 :max-len 5)  ; hello
  (sub-indexes "hello"  0 :max-len 9)  ; hello
  (sub-indexes "hello" -4 :max-len 5)  ; _ello
  (sub-indexes "hello"  2 :max-len 2)  ; __ll_
  (sub-indexes "hello" -2 :max-len 2)  ; ___lo
  (sub-indexes "hello" -2)             ; ___lo
  (sub-indexes "hello"  2)             ; __llo
  (sub-indexes "hello"  8)             ; _____
  (sub-indexes "hello"  9 :max-len 9)  ; _____
  (sub-indexes "hello"  0 :max-len 0)  ; _____
  (sub-indexes "hello"  3 :end-idx  1) ; _____
  (sub-indexes "hello"  3 :end-idx -1) ; ___lo
  )

(defn subvec* "Like `subvec` but uses `sub-indexes`."
  [v start-idx & [?max-len]] {:pre [(have? vector? v)]}
  (let [[start-idx* end-idx*] (sub-indexes v start-idx :max-len ?max-len)]
    (subvec v start-idx* end-idx*)))

(comment (subvec* [:a :b :c :d :e] -1))

(defrecord Swapped  [new-val return-val])
(defn      swapped  [new-val return-val] (Swapped. new-val return-val))
(defn      swapped? [x] (instance? Swapped x))
(defn      swapped* [x] (if (swapped? x) [(:new-val x) (:return-val x)] [x x]))

(comment ; TODO Debug, Ref. http://dev.clojure.org/jira/browse/CLJ-979
  ;; Appears (?) to be fixed as of Clojure 1.7-alpha5,
  ;; Ref. http://dev.clojure.org/jira/browse/CLJ-979
  (defrecord Foo1 [x])
  (instance? Foo1 (Foo1.  "bar"))
  (instance? Foo1 (->Foo1 "bar"))
  (compile 'taoensso.encore))

(declare dissoc-in)
(defn- swapped*-in "[<new-val> <return-val>]" [m ks f]
  (if (kw-identical? f :swap/dissoc)
    (swapped* (dissoc-in m (butlast ks) (last ks)))
    (let [old-val-in (get-in m ks)
          [new-val-in return-val] (swapped* (f old-val-in))
          new-val (if (kw-identical? new-val-in :swap/dissoc)
                    (dissoc-in m (butlast ks) (last ks))
                    (assoc-in  m ks new-val-in))]
      [new-val return-val])))

;; Recall: no `korks` support since it makes `nil` ambiguous (`[]` vs `[nil]`).
;; This ambiguity extends to (assoc-in {} [] :a), which (along with perf)
;; is why we special case empty/nil ks.
(defn- replace-in*
  "Reduces input with
  [<type> <ks> <reset-val-or-swap-fn>] or
         [<ks> <reset-val-or-swap-fn>] ops."
  [?vf-type m ops]
  (reduce
    (fn [accum ?op]
      (if-not ?op ; Allow conditional ops: (when <pred> <op>), etc.
        accum
        (let [[vf-type ks valf] (if-not ?vf-type ?op (cons ?vf-type ?op))]
          (case vf-type
            :reset (if (empty? ks) valf (assoc-in accum ks valf))
            :swap  (if (empty? ks)
                     (valf accum)
                     ;; Currently ignore possible <return-val>:
                     (nth (swapped*-in accum ks valf) 0))))))
    m ops))

(defn replace-in "Experimental. For use with `swap!`, etc."
  [m & ops] (replace-in* nil m ops))

(comment
  (replace-in {}
    [:reset [:a] {:b :B :c 100}]
    (when false [:reset [:a :b] :B2]) ; conditionals okay
    (do (assert true)
        [:reset [:a :b] :B3]) ; side-effects okay
    (let [my-swap-fn inc] ; `let`s okay
      [:swap [:a :c] my-swap-fn]))

  (let [a_ (atom {})]
    (swap! a_ replace-in
      [:reset [:a]    {:b :b1 :c :c1 :d 100}]
      [:swap  [:a :d] inc]
      [:swap  [:a :b] :swap/dissoc]
      [:swap  [:a :c] (fn [_] :swap/dissoc)])))

(defn swap-in!
  "More powerful version of `swap!`:
    * Supports optional `update-in` semantics.
    * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
      <new-val>. This is useful when writing atomic pull fns, etc."
  ([atom_ ks f]
     (if (empty? ks)
       (loop []
         (let [old-val @atom_
               [new-val return-val] (swapped* (f old-val))]
           (if-not (compare-and-set! atom_ old-val new-val)
             (recur) ; Ref. http://goo.gl/rFG8mW
             return-val)))

       (loop []
         (let [old-val @atom_
               [new-val return-val] (swapped*-in old-val ks f)]
           (if-not (compare-and-set! atom_ old-val new-val)
             (recur)
             return-val)))))

  ;; Experimental:
  ([atom_ ks f & more] {:pre [(have? even? (count more))]}
     (let [pairs (into [[ks f]] (partition 2 more))]
       (loop []
         (let [old-val @atom_
               new-val (replace-in* :swap old-val pairs)]
           (if-not (compare-and-set! atom_ old-val new-val)
             (recur)
             {:old old-val :new new-val}))))))

(defn reset-in! "Is to `reset!` as `swap-in!` is to `swap!`."
  ([atom_ ks new-val]
     (if (empty? ks)
       (reset! atom_ new-val)
       ;; Actually need swap! (CAS) to preserve other keys:
       (swap!  atom_ (fn [old-val] (assoc-in old-val ks new-val)))))

  ;; Experimental:
  ([atom_ ks new-val & more] {:pre [(have? even? (count more))]}
     (let [pairs (into [[ks new-val]] (partition 2 more))]
       (loop []
         (let [old-val @atom_
               new-val (replace-in* :reset old-val pairs)]
           (if-not (compare-and-set! atom_ old-val new-val)
             (recur)
             {:old old-val :new new-val}))))))

(comment
  ;;; update-in, `swapped`
  (let [a_ (atom {:a :A :b :B})] ; Returns new-val (default)
    [(swap-in! a_ [] (fn [m] (assoc m :c :C))) @a_])
  (let [a_ (atom {:a :A :b :B})] ; Returns old-val
    [(swap-in! a_ [] (fn [m] (swapped (assoc m :c :C) m))) @a_])
  (let [a_ (atom {:a {:b :B}})] ; Returns new-val-in (default)
    [(swap-in! a_ [:a] (fn [m] (assoc m :c :C))) @a_])
  (let [a_ (atom {:a {:b :B}})] ; Returns old-val-in
    [(swap-in! a_ [:a] (fn [m] (swapped (assoc m :c :C) m))) @a_])
  (let [a_ (atom {:a {:b 100}})] (swap-in! a_ [:a :b] inc)) ; => 101

  (let [a_ (atom {:a {:b :b1 :c :c1} :d :d1})]
    (swap-in! a_ [:a :c] :swap/dissoc) @a_)

  ;;; Bulk atomic updates
  (let [a_ (atom {})]
    (swap-in! a_
      []      (constantly {:a {:b :b1 :c :c1 :d 100}})
      [:a :b] (constantly :b2)
      ;; [:a] #(dissoc % :c)
      ;; [:a :c] :swap/dissoc
      [:a :c] (fn [_] :swap/dissoc)
      [:a :d] inc))

  (let [a_ (atom {})]
    (reset-in! a_
      []      {:a {:b :b1 :c :c1 :d 100}}
      [:a :b] :b2
      [:a :d] inc)))

(defn dissoc-in [m ks & dissoc-ks]
  (if (empty? ks)
    (apply dissoc m dissoc-ks)
    (apply update-in m ks dissoc dissoc-ks)))

(defn contains-in? [coll ks] (contains? (get-in coll (butlast ks)) (last ks)))

(comment
  (dissoc-in    {:a {:b {:c :C :d :D :e :E}}} [:a :b] :c :e)
  (contains-in? {:a {:b {:c :C :d :D :e :E}}} [:a :b :c])
  (contains-in? {:a {:b {:c :C :d :D :e :E}}} [:a]))

(defn assoc-some "Assocs each kv iff its value is not nil."
  [m & kvs] {:pre [(have? even? (count kvs))]}
  (into (or m {}) (for [[k v] (partition 2 kvs) :when (not (nil? v))] [k v])))

(defn assoc-when "Assocs each kv iff its val is truthy."
  [m & kvs] {:pre [(have? even? (count kvs))]}
  (into (or m {}) (for [[k v] (partition 2 kvs) :when v] [k v])))

(comment (assoc-some {:a :A} :b nil :c :C :d nil :e :E))

(defn queue? [x]
                                                   
         (instance? cljs.core.PersistentQueue    x))

(defn queue "Returns a PersistentQueue."
  ([]                                          
             cljs.core.PersistentQueue.EMPTY)
  ([coll] (into (queue) coll)))

(defn queue* [& items] (queue items))

(def seq-kvs
  "(seq     {:a :A}) => ([:a :A])
   (seq-kvs {:a :A}) => (:a :A)"
  (partial reduce concat))

(comment (seq-kvs {:a :A :b :B}))

(defn mapply
  "Like `apply` but assumes last arg is a map whose elements should be applied
  to `f` as an unpaired seq:
    (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
      where fn will receive args as: `(1 :y 2 :z 3)`."
  [f & args]
  (apply f (concat (butlast args) (seq-kvs (last args)))))

(defn- clj1098
  "Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
  against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098."
  [x] (or x {}))

(defn map-kvs [kf vf m]
  (if-not m {} ; Note also clj1098-safe
    (let [kf (if-not (kw-identical? kf :keywordize) kf (fn [k _] (keyword k)))
          vf (if-not (kw-identical? vf :keywordize) vf (fn [_ v] (keyword v)))]
      (persistent! (reduce-kv (fn [m k v] (assoc! m (if kf (kf k v) k)
                                                   (if vf (vf k v) v)))
                              (transient {}) m)))))

(defn map-keys [f m] (map-kvs     (fn [k _] (f k)) nil m))
(defn map-vals [f m] (map-kvs nil (fn [_ v] (f v)) m))

(defn filter-kvs [predk predv m]
  (if-not m {} ; Note also clj1098-safe
    (reduce-kv (fn [m k v] (if (and (predk k) (predv v)) m (dissoc m k))) m m)))

(defn filter-keys [pred m] (filter-kvs pred (constantly true) m))
(defn filter-vals [pred m] (filter-kvs (constantly true) pred m))

(comment (filter-vals (complement nil?) {:a :A :b :B :c false :d nil}))

(defn remove-vals
  "Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
  pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
  way that preservers :or semantics."
  [pred m]
  (if-not m {} ; Note also clj1098-safe
    (reduce-kv (fn [m k v] (if (pred v) (dissoc m k) m)) m m)))

(comment (remove-vals nil? {:a :A :b false :c nil :d :D}))

;; (def keywordize-map #(map-kvs :keywordize nil %))
(defn keywordize-map [m]
  (if-not m {} ; Note also clj1098-safe
    (reduce-kv (fn [m k v] (assoc m (keyword k) v)) {} m)))

(comment (keywordize-map nil)
         (keywordize-map {"akey" "aval" "bkey" "bval"}))

(defn as-map "Cross between `hash-map` & `map-kvs`."
  [kvs & [kf vf]]
  {:pre  [(have? [:or nil? sequential?] kvs)
          (have? [:or nil? ifn?]  kf vf)]
   :post [(have? [:or nil? map?]  %)]}
  (if (empty? kvs) {}
    (let [kf (if-not (kw-identical? kf :keywordize) kf
               (fn [k _] (keyword k)))]
      (loop [m (transient {}) [k v :as s] kvs]
        (let [k (if-not kf k (kf k v))
              v (if-not vf v (vf k v))
              new-m (assoc! m k v)]
          (if-let [n (nnext s)]
            (recur new-m n)
            (persistent! new-m)))))))

(comment
  (as-map nil)
  (as-map [])
  (as-map ["a" "A" "b" "B" "c" "C"] :keywordize
    (fn [k v] (case k (:a :b) (str "boo-" v) v))))

(defn fzipmap "Faster `zipmap` using transients." [ks vs]
  (loop [m  (transient {})
         ks (seq ks)
         vs (seq vs)]
    (if-not (and ks vs) (persistent! m)
      (recur (assoc! m (first ks) (first vs))
        (next ks)
        (next vs)))))

(comment (let [kvs (range 100)] (qb 100 (zipmap kvs kvs) (fzipmap kvs kvs))))

(defn into-all "Like `into` but supports multiple \"from\"s."
  ([to from] (into to from))
  ([to from & more] (reduce into (into to from) more)))

(defn interleave-all "Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb."
  ([]   '())
  ([c1] (lazy-seq c1))
  ([c1 c2]
     (lazy-seq
      (let [s1 (seq c1) s2 (seq c2)]
        (cond
         (and s1 s2)
         (cons (first s1) (cons (first s2)
                                (interleave-all (rest s1) (rest s2))))
         s1 s1
         s2 s2))))

  ([c1 c2 & colls]
     (lazy-seq
      (let [ss (filter identity (map seq (conj colls c2 c1)))]
        (concat (map first ss)
                (apply interleave-all (map rest ss)))))))

(comment (interleave-all [:a :b :c] [:A :B :C :D :E] [:1 :2]))

(defn takev [n coll] (if (vector? coll) (subvec* coll 0 n) (vec (take n coll))))

(defn distinctv "Prefer `set` when order doesn't matter (much faster)."
  ([coll] ; `distinctv`
     (-> (reduce (fn [[v seen] in]
                   (if-not (contains? seen in)
                     [(conj! v in) (conj seen in)]
                     [v seen]))
                 [(transient []) #{}]
                 coll)
         (nth 0)
         persistent!))
  ([keyfn coll] ; `distinctv-by`
     (-> (reduce (fn [[v seen] in]
                   (let [in* (keyfn in)]
                     (if-not (contains? seen in*)
                       [(conj! v in) (conj seen in*)]
                       [v seen])))
                 [(transient []) #{}]
                 coll)
         (nth 0)
         persistent!)))

(comment
  (distinctv        [[:a 1] [:a 1] [:a 2] [:b 1] [:b 3]])
  (distinctv second [[:a 1] [:a 1] [:a 2] [:b 1] [:b 3]])
  (qb 10000
    (distinctv       [:a :a :b :c :d :d :e :a :b :c :d])
    (doall (distinct [:a :a :b :c :d :d :e :a :b :c :d]))
    (set             [:a :a :b :c :d :d :e :a :b :c :d])))

(defn distinct-by "Like `sort-by` for distinct. Based on clojure.core/distinct."
  [keyfn coll]
  (let [step (fn step [xs seen]
               (lazy-seq
                ((fn [[v :as xs] seen]
                   (when-let [s (seq xs)]
                     (let [v* (keyfn v)]
                       (if (contains? seen v*)
                         (recur (rest s) seen)
                         (cons v (step (rest s) (conj seen v*)))))))
                 xs seen)))]
    (step coll #{})))

(compile-if (do (completing (fn [])) true) ; We have transducers support
  (do
    (defn removev [pred coll] (filterv (complement pred) coll))
    (defn xdistinct "distinctv` transducer."
      ([]
       (fn [rf]
         (let [seen_                              (atom {})]
           (fn
             ([]    (rf))
             ([acc] (rf acc))
             ([acc input]
              (if (contains? @seen_ input)
                acc
                (do                                
                           (swap! seen_ conj input)
                    (rf acc input))))))))
      ([keyfn]
       (fn [rf]
         (let [seen_                              (atom {})]
           (fn
             ([]    (rf))
             ([acc] (rf acc))
             ([acc input]
              (let [k (keyfn input)]
                (if (contains? @seen_ k)
                  acc
                  (do                            
                             (swap! seen_ conj k)
                      (rf acc input)))))))))

      ;; This arity seems unnecessary:
      ([keyfn coll] (sequence (xdistinct keyfn) coll)))))

(comment (xdistinct identity [1 2 3 1 4 5 2 6 7 1]))

(defn rcompare "Reverse comparator." [x y] (compare y x))

(defn nested-merge-with [f & maps]
  (when (some identity maps)
    (let [merge-entry
          (fn [m e]
            (let [k (key e) rv (val e)]
              (if-not (contains? m k) ; No lv
                (assoc m k rv)
                (let [lv (get m k)]
                  (if (and (map? lv) (map? rv)
                        #_(or (map? rv) (nil? rv)))
                    ;; Stack limited (don't nest too deaply):
                    (assoc m k (nested-merge-with f lv rv))
                    (assoc m k (f lv rv)))))))
          merge2 (fn [m1 m2] (reduce merge-entry (or m1 {}) (seq m2)))]
      (reduce merge2 maps))))

(def nested-merge
  (partial nested-merge-with #_(fn [x y] y)
    ;; We'll mimic `merge` behaviour re: nils against maps:
    (fn [x y] (if (and (map? x) (nil? y)) x y))))

(comment
  (nested-merge
    {:a1 :A1 :b1 :B1  :c1 {:a2 :A2 :b2 {:a3 :A3 :b3 :B3}}}
    {        :b1 :B1* :c1 {        :b2 {        :b3 :B3*}}}
    {                 :c1 nil}
    {                 :c1 {}}
    nil
    {}) ; =>
  {:a1 :A1, :b1 :B1*, :c1 {:a2 :A2, :b2 {:a3 :A3, :b3 :B3*}}})

(defn greatest "Returns the 'greatest' element in coll in O(n) time."
  [coll & [?comparator]]
  (let [comparator (or ?comparator rcompare)]
    (reduce #(if (pos? (comparator %1 %2)) %2 %1) coll)))

(defn least "Returns the 'least' element in coll in O(n) time."
  [coll & [?comparator]]
  (let [comparator (or ?comparator rcompare)]
    (reduce #(if (neg? (comparator %1 %2)) %2 %1) coll)))

(comment (greatest ["a" "e" "c" "b" "d"]))

(defn repeatedly-into
  "Like `repeatedly` but faster and `conj`s items into given collection."
                                [coll n f]
  (if (instance? clojure.lang.IEditableCollection coll)
    (loop [v (transient coll) idx 0]
      (if (>= idx n) (persistent! v)
        (recur (conj! v (f))
               (inc idx))))
    (loop [v coll idx 0]
      (if (>= idx n) v
        (recur (conj v (f))
               (inc idx))))))

(comment (repeatedly-into [] 10 rand))

                          
                 
                    
                  
                                                                    
                                                                    
                                          
                         
                           
                                   
                               
                        
                     
                            
                                  
                                  

;;;; Strings

       (defn undefined->nil [x] (if (undefined? x) nil x))
(defn nil->str [x]
                              
         (if (or (undefined? x) (nil? x)) "nil" x))

;;; Handy for atomic printing, etc.
;;; Note [xs] instead of [& xs] args for common-case perf:
(defn spaced-str-with-nils [xs] (str/join " " (mapv nil->str xs)))
(defn spaced-str [xs] (str/join " "                 (mapv undefined->nil xs)))

(defn format
  "Like `clojure.core/format` but:
    * Returns \"\" when fmt is nil rather than throwing an NPE.
    * Formats nil as \"nil\" rather than \"null\".
    * Provides ClojureScript support via goog.string.format (this has fewer
      formatting options!)."
                            
                [fmt & args]
  ;; when fmt ; Another alternative to prevent NPE?
  (let [fmt  (or fmt "") ; Prevent NPE
        args (mapv nil->str args)]
                                              
    ;; Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj (pulls in a
    ;; lot of Google Closure that's not v. friendly to dead code elimination):
           (apply gstr/format fmt args)))

(defn substr
  "Gives a consistent, flexible, cross-platform substring API built on
  `sub-indexes`."
  [s start-idx & [?max-len]] {:pre [(have? string? s)]}
  (let [[start-idx* end-idx*] (sub-indexes s start-idx :max-len ?max-len)]
                                                     
    ;; Could also use .substr:
           (.substring         s start-idx* end-idx*)))

(comment (substr "hello" -1 1))

(defn str-contains? [s substr]
                                             
         (not= -1 (.indexOf s substr)))

(defn str-starts-with? [s substr]
                                               
         (zero? (.indexOf s substr)))

(defn str-ends-with? [s substr]
                                             
         (let [s-len      (alength s) ; not .length!
               substr-len (alength substr)]
           (when (>= s-len substr-len)
             (not= -1 (.indexOf s substr (- s-len substr-len))))))

(defn join-once
  "Like `clojure.string/join` but ensures no double separators."
  [separator & coll]
  (reduce
   (fn [s1 s2]
     (let [s1 (str s1) s2 (str s2)]
       (if (str-ends-with? s1 separator)
         (if (str-starts-with? s2 separator)
           (str s1 (.substring s2 1))
           (str s1 s2))
         (if (str-starts-with? s2 separator)
           (str s1 s2)
           (if (or (= s1 "") (= s2 ""))
             (str s1 s2)
             (str s1 separator s2))))))
   nil
   coll))

(defn path
  "Joins string paths (URLs, file paths, etc.) ensuring correct \"/\"
  interposition."
  [& parts] (apply join-once "/" parts))

(comment (path "foo/"  "/bar" "baz/" "/qux/")
         (path "foo" nil "" "bar"))

;; (defn base64-enc "Encodes string as URL-safe Base64 string."
;;   [s] {:pre [(have? string? s)]}
;;   #+clj  (Base64/encodeBase64URLSafeString (.getBytes ^String s "UTF-8"))
;;   #+cljs (base64/encodeString s (boolean :web-safe)))

;; (defn base64-dec "Decodes Base64 string to string."
;;   [s]
;;   #+clj  (String. (Base64/decodeBase64 ^String s) "UTF-8")
;;   #+cljs (base64/decodeString s (boolean :web-safe)))

;; (comment (-> "Hello this is a test" base64-enc base64-dec))

(defn norm-word-breaks
  "Converts all word breaks of any form and length (including line breaks of any
  form, tabs, spaces, etc.) to a single regular space."
  [s] (str/replace (str s) #"\s+" \space))

(defn count-words [s] (if (str/blank? s) 0 (count (str/split s #"\s+"))))
(comment (count-words "Hello this is a    test"))

(defn uuid-str
  "Returns a UUIDv4 string of form \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\",
  Ref. http://www.ietf.org/rfc/rfc4122.txt,
       https://gist.github.com/franks42/4159427"
  ([]
                                            
           
     (let [fs (fn [n] (apply str (repeatedly n (fn [] (.toString (rand-int 16) 16)))))
           g  (fn [] (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16))
           sb (.append (goog.string.StringBuffer.)
                (fs 8) "-" (fs 4) "-4" (fs 3) "-" (g) (fs 3) "-" (fs 12))]
       ;;(UUID. sb) ; Equality fails on roundtrips
       (.toString sb)))
  ([max-length] (substr (uuid-str) 0 max-length)))

(comment (uuid-str 5))

;;;; IO

     
                    
                                                                            
     
                               
                              
                           
                                                                                   

(comment (slurp-resource "foo.txt"))

     
   
                                    
                                                                                
                        
                   
                                                                
                                              
                                          

                               
                                                                          
                                                      
                                                        
                                                             
                                
                          
                                                           
                                                                     
                                                            
                                                  
                                                           
                                           

;;;; Memoization

;;; TODO
;; * Consider implementing a self-gc'ing hashmap for use here & elsewhere?
;; * Invalidating memoize* cache doesn't scale horizontally; could easily build
;;   a Redis-backed distributed version with pttl, though it'd be slower.
;; * Consider a timer-wheel for cheaper ttl gc. UPD: core.async timeouts
;;   are actually faster.

(def ^:private ^:const gc-rate (/ 1.0 16000))
(defn gc-now? [] (<=                             (rand) gc-rate))

(defn swap-val! ; Public since it can be useful for custom memoization utils
  "Swaps associative value at key and returns the new value.
  Specialized, fast `swap-in!` for use mostly by memoization utils."
  [atom_ k f]
  (loop []
    (let [old-m @atom_
          new-v (f (get old-m k))
          new-m (assoc old-m k new-v)]
      (if (compare-and-set! atom_ old-m new-m) new-v
        (recur)))))

(defn memoized
  "Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
  and immediately applies memoized f to given arguments."
  [cache f & args]
  (if-not cache ; {<args> <delay-val>}
    (apply f args)
    @(swap-val! cache args #(if % % (delay (apply f args))))))

(defn memoize*
  "Like `clojure.core/memoize` but:
    * Uses delays to prevent race conditions on writes.
    * Supports auto invalidation & gc with `ttl-ms` option.
    * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
    * Supports cache size limit & gc with `cache-size` option."

  ;; De-raced, commands
  ([f]
    (let [cache (atom {})] ; {<args> <delay-val>}
      (fn ^{:arglists '([command & args] [& args])} [& [arg1 & argn :as args]]
        (if (kw-identical? arg1 :mem/del)
          (do (if (kw-identical? (first argn) :mem/all)
                (reset! cache {})
                (swap!  cache dissoc argn))
              nil)
          (let [fresh? (kw-identical? arg1 :mem/fresh)
                args   (if fresh? argn args)]
            @(swap-val! cache args
               (fn [?dv] (if (and ?dv (not fresh?)) ?dv
                           (delay (apply f args))))))))))

  ;; De-raced, commands, ttl, gc
  ([ttl-ms f]
     (have? [:or nil? pos-int?] ttl-ms)
     (let [cache (atom {})] ; {<args> <[delay-val udt :as cache-val]>}
      (fn ^{:arglists '([command & args] [& args])} [& [arg1 & argn :as args]]
        (if (kw-identical? arg1 :mem/del)
          (do (if (kw-identical? (first argn) :mem/all)
                (reset! cache {})
                (swap!  cache dissoc argn))
              nil)

          (do
            (when (gc-now?)
              (let [instant (now-udt)]
                (swap! cache
                  (fn [m] (reduce-kv
                           (fn [m* k [dv udt :as cv]]
                             (if                                              
                                        (> (- instant udt) ttl-ms)
                                 m*
                                 (assoc m* k cv))) {} (clj1098 m))))))

            (let [fresh?  (kw-identical? arg1 :mem/fresh)
                  args    (if fresh? argn args)
                  instant (now-udt)
                  [dv]    (swap-val! cache args
                            (fn [?cv]
                              (if (and ?cv (not fresh?)
                                    (let [[_dv udt] ?cv]
                                                                                   
                                             (< (- instant udt) ttl-ms)))
                                ?cv
                                [(delay (apply f args)) instant])))]
              @dv))))))

  ;; De-raced, commands, ttl, gc, max-size
  ([cache-size ttl-ms f]
    (have? [:or nil? pos-int?] ttl-ms)
    (have? pos-int? cache-size)
    (let [state (atom {:tick 0})] ; {:tick _
                                  ;  <args> <[dval ?udt tick-lru tick-lfu :as cval]>}
      (fn ^{:arglists '([command & args] [& args])} [& [arg1 & argn :as args]]
        (if (kw-identical? arg1 :mem/del)
          (do (if (kw-identical? (first argn) :mem/all)
                (reset! state {:tick 0})
                (swap!  state dissoc argn))
              nil)

          (do
            (when (gc-now?)
              (let [instant (now-udt)]
                (swap! state
                  (fn [m]
                    (let [m* (dissoc m :tick)
                          ;; First prune expired stuff:
                          m* (if-not ttl-ms m*
                               (reduce-kv
                                 (fn [m* k [dv udt _ _ :as cv]]
                                   (if                                              
                                              (> (- instant udt) ttl-ms)
                                       m*
                                       (assoc m* k cv)))
                                 {} (clj1098 m*)))

                          n-to-prune
                                                                       
                                 (- (count m*) cache-size)

                          ;; Then prune by descending tick-sum:
                          m* (if-not (pos? n-to-prune) m*
                               (->>
                                (keys m*)
                                (mapv (fn [k] (let [[_ _ tick-lru tick-lfu] (m* k)]
                                               [                                        
                                                       (+ tick-lru tick-lfu)
                                                k])))
                                (sort-by #(nth % 0))
                                ;; (#(do (println %) %)) ; Debug
                                (take    n-to-prune)
                                (mapv    #(nth % 1))
                                (apply dissoc m*)))]
                      (assoc m* :tick (:tick m)))))))

            (let [fresh?   (kw-identical? arg1 :mem/fresh)
                  args     (if fresh? argn args)
                  ?instant (when ttl-ms (now-udt))
                  tick'    (:tick @state) ; Accuracy/sync irrelevant
                  [dv]     (swap-val! state args
                             (fn [?cv]
                               (if (and ?cv (not fresh?)
                                     (or (nil? ?instant)
                                       (let [[_dv udt] ?cv]
                                                                                             
                                                (< (- ?instant udt) ttl-ms))))
                                 ?cv
                                 [(delay (apply f args)) ?instant tick' 1])))]

              ;; We always adjust counters, even on reads:
              (swap! state
                (fn [m]
                  (when-let [[dv ?udt tick-lru tick-lfu :as cv] (get m args)]
                    (merge m
                      {:tick (inc                          tick')
                       args  [dv ?udt tick'
                              (inc                             tick-lfu)]}))))
              @dv)))))))

(comment
  (do
    (def f0 (memoize         (fn [& xs] (Thread/sleep 600) (rand))))
    (def f1 (memoize*        (fn [& xs] (Thread/sleep 600) (rand))))
    (def f2 (memoize* 5000   (fn [& xs] (Thread/sleep 600) (rand))))
    (def f3 (memoize* 2 nil  (fn [& xs] (Thread/sleep 600) (rand))))
    (def f4 (memoize* 2 5000 (fn [& xs] (Thread/sleep 600) (rand)))))

  (qb 10000 (f0) (f1) (f2) (f3) (f4)) ; [1.62 2.92 3.87 11.0 13.52]

  (f1)
  (f1 :mem/del)
  (f1 :mem/fresh)

  ;; For testing, these need GC set to -always- run
  (f3 "a")
  (f3 "b")
  (f3 "c")
  (f3 "d")

  (println "--")
  (let [f0 (memoize  (fn [] (Thread/sleep 5) (println "compute0")))]
    (dotimes [_ 500] (future (f0)))) ; Prints many
  (let [f1 (memoize* (fn [] (Thread/sleep 5) (println "compute1")))]
    (dotimes [_ 500] (future (f1)))) ; NEVER prints >1
  (let [f4 (memoize* 2 5000 (fn [] (Thread/sleep 5) (println "compute1")))]
    (dotimes [_ 10] (future (f4)))))

(defn memoize-1
  "A particularly cheap+simple single-val memoize. Useful for Reactjs render op
  caching on mobile devices, etc."
  [f]
  (let [cache_ (atom {})] ; Single {<args> <delay-val>}
    (fn [& args]
      (if-let [dv_ (get @cache_ args)]
        @dv_
        (let [cache (swap! cache_
                      (fn [cache]
                        (if-let [dv_ (get cache args)]
                          cache
                          {args (delay (apply f args))})))
              dv_ (get cache args)]
          @dv_)))))

(comment
  (def fm1a (memoize   (fn [x] (Thread/sleep 3000) x)))
  (def fm1b (memoize-1 (fn [x] (Thread/sleep 3000) x)))
  (qb 1000 (fm1a "foo") (fm1b "foo")))

(defn rate-limiter* ; `rate-limiter` name used by deprecated API
  "Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
  returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
  [<ms-wait> <worst-offending-spec-id>] / <ms-wait>."
  [specs]
  (if (empty? specs)
    (constantly nil)
    (let [vspecs      (vec specs)
          vstates_    (atom {}) ; {<req-id> [[ncalls udt-window-start] <...>]}
          max-win-ms  (reduce max 0 (mapv (fn [[_ win-ms _ :as spec]] win-ms)
                                      vspecs))
          nspecs      (count vspecs)
          nid-specs   (count (filterv (fn [[_ _ id]] id) vspecs))
          _           (assert (or (zero? nid-specs) (= nid-specs nspecs)))
          return-ids? (not (zero? nid-specs))]

      (fn check-rate-limits [& [req-id]]
        (let [instant (now-udt)]

          (when (and req-id (gc-now?))
            (swap-in! vstates_ []
              (fn gc [m]
                (let [m (clj1098 m)]
                  (reduce-kv
                    (fn [m* req-id vstate]
                      (let [max-udt-win-start (reduce (fn [acc [_ udt _]]
                                                        (max acc udt))
                                                0 vstate)
                            min-win-ms-elapsed (- instant max-udt-win-start)]
                        (if (> min-win-ms-elapsed max-win-ms)
                          (dissoc m* req-id)
                          m*)))
                    m m)))))

          (swap-in! vstates_ [req-id]
            (fn [?vstate]
              (if-not ?vstate
                (swapped (vec (repeat nspecs [1 instant])) nil)
                ;; Need to atomically check if all limits pass before committing
                ;; to any ncall increments:
                (let [[vstate-with-resets ?worst-limit-offence]
                      (loop [in-vspecs  vspecs
                             in-vstate  ?vstate
                             out-vstate []
                             ?worst-limit-offence nil]
                        (let [[[ncalls-limit win-ms ?spec-id] & next-in-vspecs] in-vspecs
                              [[ncalls udt-win-start]         & next-in-vstate] in-vstate
                              win-ms-elapsed (- instant udt-win-start)
                              reset-due?     (>= win-ms-elapsed win-ms)
                              rate-limited?  (and (not reset-due?)
                                                  (>= ncalls ncalls-limit))
                              new-out-vstate ; No ncall increments yet:
                              (conj out-vstate
                                (if reset-due? [0 instant] [ncalls udt-win-start]))

                              new-?worst-limit-offence
                              (if-not rate-limited?
                                ?worst-limit-offence
                                (let [ms-wait (- win-ms win-ms-elapsed)]
                                  (if (or (nil? ?worst-limit-offence)
                                          (let [[max-ms-wait _] ?worst-limit-offence]
                                            (> ms-wait max-ms-wait)))
                                    [ms-wait ?spec-id]
                                    ?worst-limit-offence)))]

                          (if-not next-in-vspecs
                            [new-out-vstate new-?worst-limit-offence]
                            (recur next-in-vspecs next-in-vstate new-out-vstate
                                   new-?worst-limit-offence))))

                      all-limits-pass? (nil? ?worst-limit-offence)
                      new-vstate (if-not all-limits-pass?
                                   vstate-with-resets
                                   (mapv (fn [[ncalls udt-win-start]]
                                           [(inc ncalls) udt-win-start])
                                     vstate-with-resets))

                      result (when-let [wlo ?worst-limit-offence]
                               (if return-ids? wlo (let [[ms-wait _] wlo] ms-wait)))]

                (swapped new-vstate result))))))))))

(comment
  (def rl (rate-limiter* [[5 2000 :5s] [10 10000 :10s]]))
  (def rl (rate-limiter* [[5 2000    ] [10 10000     ]]))
  (def rl (rate-limiter* [[5 2000 :5s]]))
  (repeatedly 5 rl)
  (rl :req-id-1)
  (rl :req-id-2)
  (qb 10000 (rl)))

(defn rate-limit [specs f]
  (let [rl (rate-limiter* specs)]
    (fn [& args]
      (if-let [backoff (rl)]
        [nil backoff]
        [(f) nil]))))

(comment
  (def compute (rate-limit [[3 5000 :5s]] (fn [] "Compute!")))
  (compute))

;;;; Benchmarking

                                                 
      
(def nano-time
  ;; 1ms = 10^6ns
  ;; Uses **window context** as epoch!, Ref. http://goo.gl/mWZWnR
  (if-let [perf (and (exists? js/window)
                     (aget js/window "performance"))]
    ;; Ref. http://goo.gl/fn84us
    (if-let [f (or (aget perf "now")  (aget perf "mozNow") (aget perf "msNow")
                   (aget perf "oNow") (aget perf "webkitNow"))]
      ;; JS call returns millisecs double, accurate to 1/1000th of a ms:
      (fn [] (long (* 1e6 (.call f perf))))
      (fn [] (* 1e6 (now-udt))))
    (fn [] (* 1e6 (now-udt)))))

                                                                            
                                                           

                                                                           
                                                               

(defn qb-min-times                            [times] (apply min times))
                
                                                                                
                                                                                  
               
                                                                                  
                                                              
                                                 

                                        ; Alias

(comment (qb 2     (Thread/sleep 100))
         (qb 10000 (first [1 2 3 4 5]) (nth [1 2 3 4 5] 0)))

     
            
                                                                        
                                              
                               
                                    
                                     
                  
                            
                                             
                                                            
                      
                                                                       
                                         
                           
                               
                                
                                                         
                                                            

                                          
                                               

      
(do ; Simple client-side logging stuff. Experimental!!

  (def ^:private have-console? (exists? js/console))
  (def console-log
    (if-let [f (and have-console? (.-log js/console))]
      ;; (fn [x] (.call f js/console x) nil)
      (fn [xs] (.apply f js/console (into-array xs)) nil)
      (fn [xs] nil)))
  (def console-warn
    (if-let [f (and have-console? (.-warn js/console))]
      (fn [xs] (.apply f js/console (into-array xs)) nil)
      console-log))
  (def console-error
    (if-let [f (and have-console? (.-error js/console))]
      (fn [xs] (.apply f js/console (into-array xs)) nil)
      console-log))

  (enc-macros/defonce* ^:dynamic *log-level*
    "Log only logging calls >= <this-level>. Change val with `set!`/`binding`."
    :debug)

  ;; Note that it's currently difficult (expensive) to check if ClojureScript's
  ;; core.cljs/*print-fn* is actually un/defined
  (enc-macros/defonce* ^:dynamic *log-fn*
    "Experimental. Logger (fn [{:keys [level ?fmt xs msg_]}])->nil with:
      :level ; e/o #{:trace :debug :info :warn :error :fatal :report}
      :?fmt  ; Pattern for message formatting (when formatting)
      :xs    ; Raw logging call arguments (excl. pattern for message formatting)
      :msg_  ; Delay-wrapped formatted message string
    Change val with `set!`/`binding`."
    ^:default ; Helps identify default fn
    (fn [{:keys [level ?fmt xs msg_]}]
      (case level
        :warn  (console-warn  [(str "WARN: "  @msg_)])
        :error (console-error [(str "ERROR: " @msg_)])
        :fatal (console-error [(str "FATAL: " @msg_)])
               (console-log   [               @msg_]))
      nil))

  ;; Note current lack of macro (compile-time) levels for logging call elision
  (def ^:private log-level-sufficient?
    (let [ordered-levels [#_nil :trace :debug :info :warn :error :fatal :report]
          scored-levels  (zipmap ordered-levels (next (range)))
          valid-level?   (set ordered-levels)]
      (fn [level]
        (let [current-level *log-level*]
          (>= (scored-levels (enc-macros/have valid-level? level))
              (scored-levels (enc-macros/have valid-level? current-level)))))))

  (comment (mapv log-level-sufficient? [:debug :invalid]))

  ;; * Note that modern browsers (?) may offer native console.log string
  ;;   substitution, Ref. http://goo.gl/Ds4neL.
  ;; * Note current lack of [?throwable fmt & xs] support.
  (defn log  [    & xs] (console-log xs)) ; Special, logs _raw_ args
  (defn logp [    & xs] (*log-fn* {          :xs xs :msg_ (delay (spaced-str       xs))}) nil)
  (defn logf [fmt & xs] (*log-fn* {:?fmt fmt :xs xs :msg_ (delay (apply format fmt xs))}) nil)
  (defn sayp [    & xs] (js/alert (spaced-str       xs)))
  (defn sayf [fmt & xs] (js/alert (apply format fmt xs)))

  (let [logf* (fn [level fmt xs]
                (when (log-level-sufficient? level)
                  (*log-fn* {:level level :?fmt fmt :xs xs
                             :msg_ (delay (apply format fmt xs))})
                  nil))]
    (defn tracef  [fmt & xs] (logf* :trace  fmt xs))
    (defn debugf  [fmt & xs] (logf* :debug  fmt xs))
    (defn infof   [fmt & xs] (logf* :info   fmt xs))
    (defn warnf   [fmt & xs] (logf* :warn   fmt xs))
    (defn errorf  [fmt & xs] (logf* :error  fmt xs))
    (defn fatalf  [fmt & xs] (logf* :fatal  fmt xs))
    (defn reportf [fmt & xs] (logf* :report fmt xs))))

      
(defn get-window-location
  "Returns browser window's current location. Forgeable."
  []
  (let [loc* (.-location js/window)
        loc
        {;; Ref. http://bl.ocks.org/abernier/3070589
         :href     (.-href     loc*) ; "http://www.example.org:80/foo/bar?q=baz#bang"
         :protocol (.-protocol loc*) ; "http:" ; Note the :
         :hostname (.-hostname loc*) ; "example.org"
         :host     (.-host     loc*) ; "example.org:80"
         :pathname (.-pathname loc*) ; "/foo/bar"
         :search   (.-search   loc*) ; "?q=baz"
         :hash     (.-hash     loc*) ; "#bang"
         }]
    loc))

;;;; Ajax

       (def ^:private xhr-pool_ (delay (goog.net.XhrIoPool.)))
      
(defn- get-pooled-xhr!
  "Returns an immediately available XhrIo instance, or nil. The instance must be
  released back to pool manually."
  []
  (let [result (.getObject @xhr-pool_)]
    (when-not (undefined? result) result)))

      
(defn- coerce-xhr-params "[uri method get-or-post-params] -> [uri post-content]"
  [uri method params] {:pre [(have? [:or nil? map?] params)]}
  (let [?pstr ; URL-encoded string, or nil
        (when-not (empty? params)
          (let [s (-> params clj->js gstructs/Map. gquery-data/createFromMap
                      .toString)]
            (when-not (str/blank? s) s)))]
    (case method
      :get  [(if ?pstr (str uri "?" ?pstr) uri) nil]
      :post [uri ?pstr]
      :put  [uri ?pstr])))

;; TODO Ajax file params support
      
(defn ajax-lite
  "Alpha - subject to change.
  Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
  Ref. https://developers.google.com/closure/library/docs/xhrio.

  (ajax-lite \"/my-post-route\"
    {:method     :post
     :params     {:username \"Rich Hickey\"
                  :type     \"Awesome\"}
     :headers    {\"Foo\" \"Bar\"}
     :resp-type  :text
     :timeout-ms 7000}
    (fn async-callback [resp-map]
      (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
        ;; ?status  - 200, 404, ..., or nil on no response
        ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
        ;;                  :timeout :no-content <http-error-status> nil}
        (js/alert (str \"Ajax response: \" resp-map)))))"

  [uri {:keys [method params headers timeout-ms resp-type
               progress-fn ; Undocumented, experimental
               ] :as opts
        :or   {method :get timeout-ms 10000 resp-type :auto}}
   callback]
  {:pre [(have? [:or nil? nneg-int?] timeout-ms)]}
  (if-let [xhr (get-pooled-xhr!)]
    (try
      (let [timeout-ms (or (:timeout opts) timeout-ms) ; Deprecated opt
            method*    (case method :get "GET" :post "POST" :put "PUT")
            params     (map-keys name params)
            headers    (merge {"X-Requested-With" "XMLHTTPRequest"}
                         (map-keys name headers))
            ;;
            [uri* post-content*] (coerce-xhr-params uri method params)
            headers*
            (clj->js
             (if-not post-content* headers
               (assoc headers "Content-Type"
                 "application/x-www-form-urlencoded; charset=UTF-8")))]

        (doto xhr
          (gevents/listenOnce goog.net.EventType/READY
            (fn [_] (.releaseObject @xhr-pool_ xhr)))

          (gevents/listenOnce goog.net.EventType/COMPLETE
            (fn wrapped-callback [resp]
              (let [status        (.getStatus xhr) ; -1 when no resp
                    ;; e/o #{200 201 202 204 206 304 1223},
                    ;; Ref. http://goo.gl/6qcVp0:
                    success?      (.isSuccess xhr)
                    ?http-status  (when (not= status -1) status)
                    ?content-type (when ?http-status
                                    (.getResponseHeader xhr "Content-Type"))
                    ?content
                    (when ?http-status
                      (let [resp-type
                            (if-not (= resp-type :auto) resp-type
                              (condp #(str-contains? %2 %1)
                                  (str ?content-type) ; Prevent nil
                                "/edn"  :edn
                                "/json" :json
                                "/xml"  :xml
                                "/html" :text ; :xml only for text/xml!
                                :text))]
                        (try
                          (case resp-type
                            :text (.getResponseText xhr)
                            :json (.getResponseJson xhr)
                            :xml  (.getResponseXml  xhr)
                            :edn  (edn/read-string (.getResponseText xhr)))
                          (catch :default e
                            ;; Undocumented, subject to change:
                            {:ajax/bad-response-type resp-type
                             :ajax/resp-as-text (.getResponseText xhr)}))))

                    cb-arg
                    {;;; Raw stuff
                     :raw-resp resp
                     :xhr      xhr ; = (.-target resp)
                     ;;;
                     :success? success?
                     :?content-type (when ?http-status ?content-type)
                     :?content ?content
                     :?status  ?http-status
                     :?error
                     (or
                       (if ?http-status
                         ;; TODO `let` here is temporary workaround to suppress
                         ;; spurious Cljs warnings:
                         (let [^number n ?http-status]
                           (when-not success? ; (<= 200 n 299)
                             ?http-status))
                         (get { ;; goog.net.ErrorCode/NO_ERROR nil
                               goog.net.ErrorCode/EXCEPTION  :exception
                               goog.net.ErrorCode/HTTP_ERROR :http-error
                               goog.net.ErrorCode/ABORT      :abort
                               goog.net.ErrorCode/TIMEOUT    :timeout}
                           (.getLastErrorCode xhr) :unknown))
                       (when (and (nil? ?content)
                                  (not (#{204 1223} ?http-status)))
                         ;; Seems reasonable?:
                         :no-content))}]
                (callback cb-arg)))))

        ;; Experimental
        (when-let [pf progress-fn]
          (gevents/listen xhr goog.net.EventType/PROGRESS
            (fn [ev]
              (let [length-computable? (.-lengthComputable ev)
                    loaded (.-loaded ev)
                    total  (.-total  ev)
                    ?ratio (when (and length-computable?
                                      (not= total 0))
                             (/ loaded total))]
                (pf
                  {:?ratio ?ratio
                   :length-computable? length-computable?
                   :loaded loaded
                   :total  total
                   :ev     ev})))))

        (doto xhr
          (.setTimeoutInterval (or timeout-ms 0)) ; nil = 0 = no timeout
          (.send uri* method* post-content* headers*))

        ;; Allow aborts, etc.:
        xhr)

      (catch js/Error e
        (errorf "`ajax-lite` error: %s" e)
        (.releaseObject @xhr-pool_ xhr)
        nil))

    (do ; Pool failed to return an available xhr instance
      (callback {:?error :xhr-pool-depleted})
      nil)))

;;;; Ring

     
                  
                                                                              
                                                                                
                                         
                     
            
                                                                     
                                                          
                                                             

(comment
  (session-swap {:session {:req? true}} {:session nil}           assoc :new-k :new-v)
  (session-swap {:session {:req? true}} {:session {:resp? true}} assoc :new-k :new-v)
  (session-swap {:session {:old? true}} {}                       assoc :new-k :new-v))

     
                                     
                   
                                                                                   

(comment (normalize-headers {:headers {"Foo1" "bar1" "FOO2" "bar2" "foo3" "bar3"}}))

     
   
                                                                  
                                                                                   
                                                                                   
                                                                               
                                                                

(comment (merge-headers {:body "foo"} {"BAR" "baz"})
         (merge-headers "foo"         {"bar" "baz"}))

     
                   
                                       
                       
                                                        
                                                         
                               
                  
                       

(comment (redirect-resp :temp "/foo" "boo!"))

(defn url-encode "Stolen from http://goo.gl/99NSR1."
                         
         [s]
  (when s
                      
                                                                 
                                      
                                       
           (-> (str s)
               (js/encodeURIComponent s)
               (str/replace "*" "%2A")
               (str/replace "'" "%27"))))

(comment (mapv url-encode ["foo+bar" 47]))

(defn url-decode "Stolen from http://goo.gl/99NSR1."
  [s & [encoding]]
  (when s
                                                               
           (js/decodeURIComponent s)))

(comment (url-decode (url-encode "Hello there~*+")))

(defn format-query-string [m]
  (let [param (fn [k v]  (str (url-encode (name k)) "=" (url-encode v)))
        join  (fn [strs] (str/join "&" strs))]
    (when-not (empty? m)
      (join (for [[k v] m]
              (if (sequential? v)
                (join (mapv (partial param k) (or (seq v) [""])))
                (param k v)))))))

(comment
  (format-query-string {})
  (format-query-string {:k1 "v1" :k2 "v2" :k3 nil :k4 ["v4a" "v4b" 7] :k5 []}))

(defn- assoc-conj [m k v]
  (assoc m k (if-let [cur (get m k)] (if (vector? cur) (conj cur v) [cur v]) v)))

(comment (assoc-conj {:a "a"} :a "b"))

(defn parse-query-params "Based on `ring-codec/form-decode`."
  [s & [keywordize? encoding]] {:post [(have? map? %)]}
  (if (str/blank? s) {}
    (let [;; For convenience (e.g. JavaScript win-loc :search)
          s (if (str-starts-with? s "?") (substr s 1) s)]
      (if-not (str-contains? s "=") {}
        (let [m (reduce
                  (fn [m param]
                    (if-let [[k v] (str/split param #"=" 2)]
                      (assoc-conj m (url-decode k encoding) (url-decode v encoding))
                      m))
                  {}
                  (str/split s #"&"))]
          (if-not keywordize? m
            (keywordize-map m)))))))

(comment
  (parse-query-params nil)
  (parse-query-params "?foo=bar" :keywordize)
  (-> {:k1 "v1" :k2 "v2" :k3 nil :k4 ["v4a" "v4b"] :k5 [] :k6 47}
      (format-query-string)
      (parse-query-params)))

(defn merge-url-with-query-string [url m]
  (let [[url ?qstr] (str/split (str url) #"\?" 2)
        qmap (merge
               (when ?qstr (keywordize-map (parse-query-params ?qstr)))
               (keywordize-map m))]
    (str url (when-let [qstr (format-query-string qmap)] (str "?" qstr)))))

(comment
  (merge-url-with-query-string "/" nil)
  (merge-url-with-query-string "/?foo=bar" nil)
  (merge-url-with-query-string "/?foo=bar" {"foo" "overwrite"})
  (merge-url-with-query-string "/?foo=bar" {:foo  "overwrite"})
  (merge-url-with-query-string "/?foo=bar" {:foo2 "bar2" :num 5}))

;;;; DEPRECATED

                                                  
                                                  
                                                  
                                                  

;; Used by Sente <= v1.4.0-alpha2
(def logging-level (atom :debug)) ; Just ignoring this now

;; Used by Carmine <= v2.7.0
                                                                  

;; Used by Sente <= v1.1.0
       (defn set-exp-backoff-timeout! [nullary-f & [nattempt]]
         (.setTimeout js/window nullary-f (exp-backoff (or nattempt 0))))

;;; Arg order changed for easier partials
(defn keys=      [m ks] (ks=      ks m))
(defn keys<=     [m ks] (ks<=     ks m))
(defn keys>=     [m ks] (ks>=     ks m))
(defn keys=nnil? [m ks] (ks-nnil? ks m))

;;;; Legacy coercions (used by Carmine <= v2.7.1, at least)
(def parse-bool  as-?bool)
(def parse-int   as-?int)
(def parse-float as-?float)
(defn as-bool  [x] (when x (have (as-?bool  x))))
(defn as-int   [x] (when x (have (as-?int   x))))
(defn as-float [x] (when x (have (as-?float x))))

(def merge-deep-with nested-merge-with)
(def merge-deep      nested-merge)

;; API changed for greater flexibility:
(defn rate-limiter [ncalls-limit window-ms] (rate-limiter* [[ncalls-limit window-ms]]))
(defn rate-limited [ncalls-limit window-ms f]
  (let [rl (rate-limiter* [[ncalls-limit window-ms]])]
    (fn [& args]
      (if-let [backoff-ms (rl)]
        {:backoff-ms backoff-ms}
        {:result     (f)}))))

;;;;;;;;;;;; This file autogenerated from src/taoensso/encore.cljx
