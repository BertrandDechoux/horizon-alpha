(ns horizon-alpha.test.player.stat
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [horizon-alpha.player.stat :as s]
            [horizon-alpha.test.utils :as u]))

(deftest test-creation
  (is (= (s/stat 20) (s/stat 20 20))))

(deftest test-creation-error
  (is (u/throwing? #(s/stat 0)))
  (is (u/throwing? #(s/stat -1)))
  (is (u/throwing? #(s/stat 20 10))))

(deftest test-charged
  (is (s/charged? (s/stat 20)))
  (is (not(s/cleared? (s/stat 20)))))

(deftest test-empy
  (is (not(s/charged? (s/stat 0 20))))
  (is (s/cleared? (s/stat 0 20))))

(deftest test-not-empt-not-charged
  (is (not(s/cleared? (s/stat 10 20))))
  (is (not(s/charged? (s/stat 10 20)))))

(deftest test-clear
  (is (s/cleared? (s/clear (s/stat 10 20))))
  (is (= (s/stat 0 20) (s/clear (s/stat 0 20)))))

(deftest test-charge
  (is (-> (s/stat 0 20) (s/charge 20) s/charged?))
  (is (= (s/stat 20) (s/charge (s/stat 0 20) 20))))



