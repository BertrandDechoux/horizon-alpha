(defproject horizon-alpha "0.1.0-SNAPSHOT"
  :description "Poc game based on the Noob universe from studio OLYDRI"
  :url "http://bertranddechoux.github.io/horizon-alpha/resources/horizon-alpha.html"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [com.taoensso/tower "3.1.0-beta3"]
                 [org.omcljs/om "0.9.0"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-doo "0.1.4"]
            [lein-ancient "0.6.7"]]

  :source-paths ["src"]
  :hooks [leiningen.cljsbuild]

  :cljsbuild {

    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:output-to "out/dev/horizon_alpha.js"
                         :output-dir "out/dev"
                         :optimizations :none
                         :source-map true}}

             {:id "test"
              :source-paths ["src" "test"]
              :compiler {:main 'horizon-alpha.runner
                         :output-dir "out/test"
                         :output-to "out/test/unit-test.js"
                         :preamble ["test/js/react.min.js"]
                         :externs ["test/js/react.extern.js"]
                         :optimizations :whitespace
                         :pretty-print true}}]
  })
