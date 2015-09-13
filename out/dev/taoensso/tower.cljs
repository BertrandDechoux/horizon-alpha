(ns taoensso.tower
  "Simple internationalization (i18n) and localization (L10n) library for
  Clojure/Script. Wraps standard Java/Script facilities when possible."
  {:author "Peter Taoussanis, Janne Asmala"}
                                           
                                          
                                              
                                              
                                                                             
                                                            
                                                               
         (:require-macros [taoensso.encore :as encore]
                          [taoensso.tower  :as tower-macros])
         (:require        [clojure.string  :as str]
                          [goog.string     :as gstr]
                          [goog.string.format]
                          [taoensso.encore :as encore]))

;;;; Encore version check

     
                                                                       
                                                                            
                                
          
              
               
                                                                                                                                                  
                             
                                             

;;;; Locales
;;; We use the following terms:
;; 'Locale'     - Valid JVM Locale object.
;; 'locale'     - Valid JVM Locale object, or a locale kw like `:en-GB`.
;; 'jvm-locale' - Valid JVM Locale object, or a locale kw like `:en-GB` which
;;                can become a valid JVM Locale object.
;; 'kw-locale'  - A locale kw like `:en-GB`. These are the only locales we use
;;                with Cljs.
;;
;; The Clj localization API wraps JVM facilities so requires locales which are
;; or can become valid JVM Locale objects. In contrast, the translation API is
;; independent of any JVM facilities so can take arbitrary locales.

                                                                    
     
                  
                                                                       
                                                                                
        
                                         
                                                 
                                                          

     
                    
                                                                                 
                      
           
         
                          
                                            
                                                                 

                            
                            
                                                 

           
                                                     
                    
                            
                                         
                                                 

     
               
                                                                        
                                                                        
                                   
          
                            
                                         
                                                    
                                                        

(comment
  (encore/qb 10000 (jvm-locale :en))
  (let [ls [nil :invalid :en-invalid :en-GB (Locale/getDefault)]]
    [(map #(try-jvm-locale %)            ls)
     (map #(try-jvm-locale % :lang-only) ls)]))

(def kw-locale "\"en_gb-var1\" -> :en-gb-var1, etc."
  (memoize
    (fn [?loc & [lang-only?]]
      (let [loc-name
                   (name (or ?loc :nil))
                                                                     
                                                                     
                                                     
                                           
            loc-name (str/replace loc-name "_" "-")
            loc-name (if-not lang-only? loc-name
                       (first (str/split loc-name #"-")))]
        (keyword loc-name)))))

(comment
  ;; [1] Ref. https://github.com/ptaoussanis/tower/issues/56 re: weird JVM
  ;; locale handling for certain locales:
  [(str (Locale. "id")) (Locale. "id") (.toLanguageTag (Locale. "id"))
   (kw-locale :id)]

  (map #(kw-locale %) [nil :whatever-foo :en (jvm-locale :en) "en-GB" :jvm-default])
  (map #(kw-locale % :lang-only) [nil :whatever-foo :en (jvm-locale :en) "en-GB" :jvm-default])

  )

;;;; Localization
;; The Java date API is a mess, but we (thankfully!) don't need much of it for
;; the simple date formatting+parsing that Tower provides. So while the
;; java.time (Java 8) and Joda-Time APIs are better, we choose instead to just
;; use the widely-available date API and patch over the relevant nasty bits.
;; This is an implementation detail from the perspective of lib consumers.
;;
;; Note that we use DateFormat rather than SimpleDateFormat since it offers
;; better facilities (esp. wider locale support, etc.).

;; Unlike SimpleDateFormat (with it's arbitrary patterns), DateFormat supports
;; a limited set of predefined locale-specific styles:
     
                                
                              
                            
                             
                           
                             

     
                                                                  
          
              
                                               
                                                                          
                                                               
                                                                
                         

;;; Some contortions here to get high performance thread-safe formatters (none
;;; of the java.text formatters are thread-safe!). Each constructor* call will
;;; return a memoized (=> shared) proxy, that'll return thread-local instances
;;; on `.get`.
;;
     
   
                                                                             
                                                                 
                                                                             
                                                                 
                                                                                    
                                                                  
    
                                                                                  
                                                                  
                                                                                  
                                                                   
                                                                                  
                                                                   
                                                                                  
                                                                     

     
                                           
     
                     
      
                      
                                             
                           
                                               
                                               
                                               
                                                     
                                    
        
                     
                            
                                            
                                            
                                            
                                            
                                                   
                                  

     
         
                                   
                                                                  
                                                              
                                                    

     
           
                                                                              
                     
                   
                            
                                           
                           
                                           
                                           
                                           
                                           

                                               
                                               
                                               
                                                   
                                  

     
                                                            
     
                                                 
                 
                                        
                         
                                 
                                 
                                                   
                                  

     
                                                                       
                                                           

(comment
  (fmt :en (Date.))
  (fmt :de (Date.))
  (fmt :en (Date.) :date-short)
  (fmt :en (Date.) :dt-long)

  (fmt   :en-US 55.474   :currency)
  (parse :en-US "$55.47" :currency)

  (fmt   :en (/ 3 9) :percent)
  (parse :en "33%"   :percent)

  (parse :en (fmt :en (Date.)) :date)

  (lsort :en ["a" "d" "c" "b" "f" "_"]))

     
               
                                                                              
                                                                               
                                                               
              
                                   
              
                                              
                                               
                                              
                                               
                                                                    
                                

(comment (normalize "hello" :invalid))

;;;; Localized text formatting

;; (defmem- f-str Formatter [Loc] (Formatter. Loc))

     
                                           
                                                                              
                          
                                                               

      
(defn fmt-str "Alpha - subject to change."
  ;; TODO We don't actually have any locale-aware cljs-side format fn
  [_loc fmt & args] (apply encore/format (or fmt "") args))

     
             
                                                                                
                                                    
                                      
                                                                            
                                       

(comment
  (fmt-msg :de "foobar {0}!" 102.22)
  (fmt-str :de "foobar %s!"  102.22)

  (fmt-msg :de "foobar {0,number,integer}!" 102.22)
  (fmt-str :de "foobar %d!" (int 102.22))

  ;; "choice" formatting is about the only redeeming quality of `fmt-msg`. Note
  ;; that choice text must be unescaped! Use `!` decorator:
  (map #(fmt-msg :de "{0,choice,0#no cats|1#one cat|1<{0,number} cats}" %)
        (range 5)))

;;;; Localized country & language names

     
                                                                                      

     
                                  
                    
                                                                
                                             
                                          

(comment (country-name :za :de))

     
                                                                                  

     
                               
                         
                                                         
                                                                    
                                           

(comment (lang-name :en :de))

     
                  
                                                                        
          
                                
                                                           
                                           
                                                                                     
                                           
                                
                                               

(comment (get-langs :en))

     
              
                                                                        
          
                            
                                               
                                       
                                                                            
                                                                  
                                   
                                
                                               

(comment (get-countries :en))

;;;; Timezones (doesn't depend on locales)

                                   
                                                                              
                                                         
                                                                              

     
              
                       
          
                                                             
                                                        
                                                   

     
                                     
                     
                                                 
                                         
                                  
                                     
                                         
                                
                                   

(comment (tz-name "Asia/Bangkok" (* 90 60 1000)))

     
                  
                                                                        
                                                                  
                     
                                             
                                              
                                 
                                                                 
                                                                
                                        
                                            
                                        
                                                            
                              
                                              
                                                                           

(comment (get-timezones))

;;;; Translations

(def ^:dynamic *tscope* nil)
                                 
                                                       
                            
                                                                 

(def scoped "Merges scope keywords: (scope :a.b :c/d :e) => :a.b.c.d/e"
  (memoize (fn [& ks] (encore/merge-keywords ks))))

(comment (scoped :a.b :c/d :e))

(def tscoped scoped) ; Alias for `:refer`s,

(def ^:private loc-tree
  "Returns intelligent, descending-preference vector of locale keys to search
  for given locale or vector of descending-preference locales."
  (let [loc-tree*
        (memoize
          (fn [loc] ; :en-GB-var1 -> [:en-GB-var1 :en-GB :en]
            (let [loc-parts (str/split (name (kw-locale loc)) #"-")]
              (mapv #(keyword (str/join "-" %))
                (take-while identity (iterate butlast loc-parts))))))]

    (fn [loc-or-locs] ; Expensive, perf-sensitive, not easily memo'd
      (if-not (vector? loc-or-locs)
        (loc-tree* loc-or-locs) ; Build search tree from single locale
        ;; Build search tree from multiple desc-preference locales (some
        ;; transducers would be nice here):
        ;; (encore/distinctv (reduce into (mapv loc-tree* loc-or-locs)))
        (let [lang-first-idxs ; {:en 0 :fr 1 ...}
              (zipmap (encore/distinctv (mapv (comp peek loc-tree*)
                                          loc-or-locs))
                (range))

              loc-score ; :en-GB -> -2
              (fn [loc]
                (let [tree   (loc-tree* loc)
                      lang   (peek  tree)
                      nparts (count tree)]
                  (- (* 10 (get lang-first-idxs lang)) nparts)))

              locs (reduce into [] (mapv loc-tree* loc-or-locs))
              sorted-locs (sort-by loc-score (encore/distinctv locs))]
          (vec sorted-locs))))))

(comment
  (loc-tree [:en-US :fr-FR :fr :en :DE-de]) ; [:en-US :en :fr-FR :fr :de-DE :de]
  (loc-tree [:en-US :en-GB]) ; [:en-US :en-GB :en]
  (encore/qb 10000 (loc-tree [:en-US :fr-FR :fr :en :DE-de])))

;;; tconfig

(defn default-tfmt-str "Implementation detail. Based on `encore/format`."
                                 
                [_loc fmt & args] ; TODO Locale support?
  (let [fmt  (or fmt "") ; Prevent NPE
        args (mapv encore/nil->str args)]

         
                                             
                                                    
                                                                    
       

           (apply gstr/format fmt args) ; Ignore locale
    ))

     
                    
                                                                   

                                                                         
                                                                      

                                                                        
                                                     
                                                         
                                                                 
                                                            
                                                       
                                                             
                                                             
                                                             
                                                       
                                                      
                                                                  
                                                               
                                                       
                                                    
                                                                     

                                                                            
                          
                                                                

                                                              
                       
                                                           
                                                    
                              
                                                      
                                             
                    
                                     
                                          

;;; Dictionaries

(comment ; ClojureScript
  (def my-dict-inline   (tower-macros/dict-compile {:en {:a "**hello**"}}))
  (def my-dict-resource (tower-macros/dict-compile "slurps/i18n/utils.clj")))

     
                                       
             
                                                                  
                                     
                                                                  
                                   
                                                                                         
                                                 
              
                                   
                                                 
                                                                 
                                                                                     
                                                                                    
                                                                                    
                                                                  
                
                                
                                                               
                                                        
                                                              
                                                                                     

                                                       
                                 

(comment
  (dict-load
    {:en        {:foo ":en foo"
                 :bar ":en :bar"}
     :en-US     {:foo ":en-US foo"}
     :ja        "test_ja.clj"
     :arbitrary {:foo ":arbitrary :example/foo text"}}))

     
                                 
                                         
           
                            
                              
                             
                                   
                                   
                    
                                         
     
                                                  
                            
                                             
                              
                             
                                   
                                   
                                             
                    
                     
          
                            
                            
                    
                    
                                   
                                   
                                      

     
                                      
                      
                                 
                                             
                                                                  
                                           

                        
                           
                                                                              
                                            
                                     

(comment (match-decorators (default-decorators :default) :hello))

     
                        
                                                                 
                                                                    
                                                               
                                             
                                 
                                 
                                                                        
                                     
                                                                             
                                                                  
                                                         
                                                  
                                   
                                                                              
                                                           
                                                  

                               
                               
                                    
                                 
                     
                                                           
                                                                           
                                                                            
                                                                    

     
                 
                         
                                                                              
                                                  
                                                                        
                           
                
                                    
                            
                                   
                                                                     
                                       
                                             

                                                 
                                        
                                                       
                                                     
                                                  

(comment (encore/qb 1000 (dict-compile (:dictionary example-tconfig))))

                                                            
                                                         

;;;

(defn- nstr [x] (if (nil? x) "nil" (str x)))
(defn- find1 ; This fn is perf sensitive, but isn't easily memo'd
  ([dict scope k ltree] ; Find scoped
     (let [[l1 :as ls] ltree
           scoped-k ; (if-not scope k (scoped scope k))
           (scoped scope k) ; Even with nil scope, to get ns/kw form
           ]
       (if (next ls)
         (some #(get-in dict [scoped-k %]) ls)
         (do    (get-in dict [scoped-k l1])))))
  ([dict k ltree] ; Find unscoped
     (let [[l1 :as ls] ltree]
       (if (next ls)
         (some #(get-in dict [k %]) ls)
         (do    (get-in dict [k l1]))))))

(defn- make-t-uncached
  [tconfig] {:pre [(map? tconfig)                            ]}
  (let [{:keys [                        compiled-dictionary
                dev-mode? fallback-locale scope-fn fmt-fn
                log-missing-translation-fn cache-locales?]
         :or   {fallback-locale :en
                cache-locales?                    true
                scope-fn (fn [] *tscope*)
                fmt-fn   default-tfmt-str
                log-missing-translation-fn
                (fn [{:keys [dev-mode?] :as args}]
                  (let [pattern "Missing-translation: %s"]
                                        
                                                         
                                                          
                           (if dev-mode?
                             (encore/debugf pattern args)
                             (encore/warnf  pattern args))))}} tconfig

               _
               (do (assert (:compiled-dictionary tconfig)
                     "Missing tconfig key: :compiled-dictionary")
                   (assert     (not (:dictionary tconfig))
                     "Invalid tconfig key: :dictionary"))

        ;; Nb `loc-tree` is expensive and not easily cached at the top-level,
        ;; but a _per_ `t` cache is trivial when `l-or-ls` is constant (e.g.
        ;; with the Ring middleware):
        loc-tree* (if cache-locales? (memoize loc-tree) loc-tree)
        get-dict
               (fn [] compiled-dictionary)
             
                                                       
                                                                             
                                                                        
                                                                               
                                          
                                                           
                                                        
                                                      ]

    (fn new-t [l-or-ls k-or-ks & fmt-args]
      (let [dict  (get-dict)
            ks    (if (vector? k-or-ks) k-or-ks [k-or-ks])
            ls    (if (vector? l-or-ls) l-or-ls [l-or-ls])
            [l1]  ls ; Preferred locale (always used for fmt)
            scope (scope-fn)
            ks?   (vector? k-or-ks)
            tr
            (or
              ;; Try locales & parents:
              (let [ltree (loc-tree* ls)]
                (if ks?
                  (some #(find1 dict scope % ltree) (take-while keyword? ks))
                  (find1 dict scope k-or-ks ltree)))

              (let [last-k (peek ks)]
                (if-not (keyword? last-k)
                  ;; Explicit final, non-keyword fallback (may be nil)
                  (if (nil? last-k) ::nil last-k)
                  (do
                    (when-let [log-f log-missing-translation-fn]
                      (log-f {:locales ls :scope scope :ks ks :dev-mode? dev-mode?}))
                    (or
                      ;; Try fallback-locale & parents:
                      (let [ltree (loc-tree* fallback-locale)]
                        (if ks?
                          (some #(find1 dict scope % ltree) ks)
                          (find1 dict scope k-or-ks ltree)))

                      ;; Try (unscoped) :missing in locales, parents,
                      ;; fallback-loc, & parents:
                      (let [ltree (loc-tree* (conj ls fallback-locale))]
                        (when-let [pattern (find1 dict :missing ltree)]
                          (fmt-fn l1 pattern (nstr ls) (nstr scope) (nstr ks)))))))))]

        (when-not (encore/kw-identical? tr ::nil)
          (let [tr (or tr "")]
            (if (nil? fmt-args) tr
              (apply fmt-fn l1 tr fmt-args))))))))

(def ^:private make-t-cached (memoize make-t-uncached))
(def make-t
       
                                       
                                           
                                             
         make-t-uncached)

(comment
  (t :en-ZA example-tconfig :example/foo)
  (with-tscope :example (t :en-ZA example-tconfig :foo))
  (t :en example-tconfig :invalid)
  (t :en example-tconfig [:invalid :example/foo])
  (t :en example-tconfig [:invalid "Explicit fallback"])

  ;;; Invalid locales
  (t nil      example-tconfig :example/foo)
  (t :invalid example-tconfig :example/foo)

  (do
    (def prod-t (make-t (merge example-tconfig
                          {:dev-mode? false :cache-locales? true})))
    (encore/qb 10000
      (prod-t :en :example/foo)
      (prod-t :en [:invalid "fallback"]) ; Can act like gettext
      (prod-t :en [:invalid :example/foo])
      (prod-t :en [:invalid nil])
      (prod-t [:es-UY :ar-KW :sr-CS :en] [:invalid nil])))
  ;; [87.38 161.25 84.32 94.05] ; v3.0.2
  ;; [12.28  21.03 17.04 29.31] ; v3.1.0-SNAPSHOT (after perf work)
  )

                                   ; TODO Use hiccup?
                                   ; TODO Use clojure.xml/parse?

;;;; DEPRECATED
;; The v2 API basically breaks everything. To allow lib consumers to migrate
;; gradually, the entire v1 API is reproduced below. This should allow Tower v2
;; to act as a quasi drop-in replacement for v1, despite the huge changes
;; under-the-covers.

     
   
                                                 
                                                

                              
                                     
                                                                

                                
            
                         
                      
                                                                    
                                                       
                                                       
                                                                   
                                                       
                                                                                 

                                                     
                                          
                                                                          

                                             
                                    
                                                                        

                                                        
                                                                           

                                                                         

                                                                   
                                                                    
                                                                    
                                                                     

                                                                     
                                                                      
                                                                      
                                                                       

                                                                 

                           
                 
                                  
                                                            
                                           

                                 
                                      
                                                         

                                 
                                      
                                                         

                               
                                              
                                                                         

                                
                                        
                                                           

                                
                                        
                                                           

                              
                                              
                                                                         

                                                             
                                                             

                              
                
                                                
                            
                              

                                                   
                                                                            
                                                                                         

                                                        
                                                                    
                               
                                                                              
                                                
                                  
                                                            
                                                               

                                                        
                                                           
                              
                                                                              
                                              
                                                             

                                                               
                                             

                                            
                                                                                     

                                                        
                                                            

                                    
                                     
                                       

                                 
                                                     
                                    
                                                                         
                                                                                
                                                
                                             

                              
            
                                               
                            
                                                                   
                                                                    
                                                

                              
            
                                               
                            
                                                                   
                                                        
                                                                             
                                                                       
                                                                    
                                                                                   

                              
                                               
         
                                           
                       
                                                   
                                      
                                     
                                                                     
                                                                    
                                                                    
                                                                          
                                                                                           
                                           
                                                                                 
                                                         
                                                               
                                                            

          
                                                                            
                             
                             
                              

                                                                       
                                                                       
                                                                        

;;;;;;;;;;;; This file autogenerated from src/taoensso/tower.cljx
