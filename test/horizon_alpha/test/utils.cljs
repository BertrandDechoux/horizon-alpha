(ns horizon-alpha.test.utils
  "Various utilities for testing purpose.")

(defn throwing? [s]
  "True iif an Error was raised."
  (try (do (s) false) (catch :default e true)))

