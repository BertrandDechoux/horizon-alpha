// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.model.state');
goog.require('cljs.core');
goog.require('horizon_alpha.field.field');
goog.require('horizon_alpha.player.player');
goog.require('clojure.set');
horizon_alpha.model.state.sync_occupied = (function horizon_alpha$model$state$sync_occupied(state){

var players = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state);
var f = ((function (players){
return (function (p1__15918_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get_in.call(null,p1__15918_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),cljs.core.first.call(null,p1__15918_SHARP_)],null));
});})(players))
;
var occupied = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,players));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occupied","occupied",-1962123949)], null),occupied);
});
horizon_alpha.model.state.sync_active = (function horizon_alpha$model$state$sync_active(state){

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(horizon_alpha.player.player.ready.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state))));
});
horizon_alpha.model.state.set_focus = (function horizon_alpha$model$state$set_focus(state,pos){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),pos);
});
horizon_alpha.model.state.set_targets = (function horizon_alpha$model$state$set_targets(state,targets){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"targets","targets",2014963406)], null),targets);
});
horizon_alpha.model.state.gen_state = (function horizon_alpha$model$state$gen_state(){

var field = horizon_alpha.field.field.gen_field.call(null);
var players = horizon_alpha.player.player.starting_players.call(null,field);
return horizon_alpha.model.state.set_targets.call(null,horizon_alpha.model.state.set_focus.call(null,horizon_alpha.model.state.sync_active.call(null,horizon_alpha.model.state.sync_occupied.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"players","players",-1361554569),players,new cljs.core.Keyword(null,"loots","loots",368837806),cljs.core.PersistentHashSet.EMPTY], null))),null),null);
});
horizon_alpha.model.state.active_done = (function horizon_alpha$model$state$active_done(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)], null),horizon_alpha.player.player.done);
});
horizon_alpha.model.state.sync_players = (function horizon_alpha$model$state$sync_players(state){

var deads = cljs.core.set.call(null,horizon_alpha.player.player.positions.call(null,horizon_alpha.player.player.dead.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state))));
var s2 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loots","loots",368837806)], null),((function (deads){
return (function (p1__15919_SHARP_){
return clojure.set.union.call(null,p1__15919_SHARP_,deads);
});})(deads))
);
return cljs.core.update_in.call(null,s2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569)], null),horizon_alpha.player.player.alive);
});
horizon_alpha.model.state.clean = (function horizon_alpha$model$state$clean(state){
return horizon_alpha.model.state.sync_occupied.call(null,horizon_alpha.model.state.sync_players.call(null,cljs.core.assoc_in.call(null,horizon_alpha.model.state.sync_active.call(null,horizon_alpha.model.state.active_done.call(null,state)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"targets","targets",2014963406)], null),cljs.core.PersistentVector.EMPTY)));
});

//# sourceMappingURL=state.js.map