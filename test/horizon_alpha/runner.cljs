(ns horizon-alpha.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [horizon-alpha.test.field.grid]
              [horizon-alpha.test.field.pos]
              [horizon-alpha.test.player.stat]))

  (doo-tests 'horizon-alpha.test.field.grid
             'horizon-alpha.test.field.pos
             'horizon-alpha.test.player.stat)