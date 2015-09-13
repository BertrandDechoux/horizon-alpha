(ns horizon-alpha.i18n
  (:require [horizon-alpha.utils :refer [lang]]
            [taoensso.tower :as tower :refer-macros (with-tscope)]))

(defn i18n[]
    "Returns a translation function using the user language"
    (let [dict (tower/dict-compile* "i18n.clj")
          config {
            :fallback-locale :en
            ;; Inlined (macro) dict => this ns needs rebuild for dict changes to reflect.
            ;; (dictionary .clj file can be placed in project's `/resources` dir):
            :compiled-dictionary dict
          }
          t (tower/make-t config)
          l (lang)]
         #(t l %)))