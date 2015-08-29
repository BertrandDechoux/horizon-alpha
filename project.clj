(defproject horizon-alpha "0.1.0-SNAPSHOT"
  :description "Poc game based on the Noob universe from studio OLYDRI"
  :url "http://bertranddechoux.github.io/horizon-alpha/resources/horizon-alpha.html"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.7.3"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [com.cemerick/clojurescript.test "0.3.1"]
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
              :compiler {:output-dir "out/test"
                         :output-to "out/test/unit-test.js"
                         :preamble ["test/js/react.min.js"]
                         :externs ["test/js/react.extern.js"]
                         :optimizations :whitespace
                         :pretty-print true}}]

    :test-commands {"unit-tests" ["phantomjs" :runner
                                            "window.literal_js_executed=true"
                                            "resources/test/js/es5-shim.js"
                                            "resources/test/js/es5-sham.js"
                                            "resources/test/js/console-polyfill.js"
                                            "resources/test/js/polyfill.js"
                                            "out/test/unit-test.js"]}})
