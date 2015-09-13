// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.model.action');
goog.require('cljs.core');
goog.require('horizon_alpha.player.stat');
goog.require('horizon_alpha.model.attack');
goog.require('horizon_alpha.player.player');
goog.require('clojure.set');
goog.require('horizon_alpha.model.heal');
goog.require('horizon_alpha.field.field');
horizon_alpha.model.action.move = (function horizon_alpha$model$action$move(state,pos){

var player = cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state));
var state2 = cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),pos);
var state3 = cljs.core.update_in.call(null,state2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loots","loots",368837806)], null),((function (player,state2){
return (function (p1__9868_SHARP_){
return clojure.set.difference.call(null,p1__9868_SHARP_,cljs.core.PersistentHashSet.fromArray([pos], true));
});})(player,state2))
);
var sp_reset = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"artheon","artheon",-691926463),null,new cljs.core.Keyword(null,"gaea","gaea",-302875413),null], null), null),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state3));
if(sp_reset){
return cljs.core.update_in.call(null,state3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (player,state2,state3,sp_reset){
return (function (p1__9869_SHARP_){
return horizon_alpha.player.stat.clear.call(null,p1__9869_SHARP_);
});})(player,state2,state3,sp_reset))
);
} else {
return state3;
}
});
horizon_alpha.model.action.unleash = (function horizon_alpha$model$action$unleash(state,pos){

var omegazell = new cljs.core.Keyword(null,"omegazell","omegazell",-609157019).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state));
var target_id = cljs.core.get.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),pos);
var charge = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"gaea","gaea",-302875413),new cljs.core.Keyword(null,"sp","sp",1023349958),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var target_hp = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),target_id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var state2 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),target_id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),((function (omegazell,target_id,charge,target_hp){
return (function (p1__9870_SHARP_){
return horizon_alpha.player.stat.uncharge.call(null,p1__9870_SHARP_,charge);
});})(omegazell,target_id,charge,target_hp))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"gaea","gaea",-302875413),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (omegazell,target_id,charge,target_hp){
return (function (p1__9871_SHARP_){
return horizon_alpha.player.stat.clear.call(null,p1__9871_SHARP_);
});})(omegazell,target_id,charge,target_hp))
);
var final_hp = cljs.core.get_in.call(null,state2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),target_id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
return cljs.core.update_in.call(null,state2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"omegazell","omegazell",-609157019),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (omegazell,target_id,charge,target_hp,state2,final_hp){
return (function (p1__9872_SHARP_){
return horizon_alpha.player.stat.charge.call(null,p1__9872_SHARP_,(target_hp - final_hp));
});})(omegazell,target_id,charge,target_hp,state2,final_hp))
);
});
horizon_alpha.model.action.charge = (function horizon_alpha$model$action$charge(state,pos){

var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),pos);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (id){
return (function (p1__9873_SHARP_){
return horizon_alpha.player.stat.charge.call(null,p1__9873_SHARP_,(100));
});})(id))
);
});
if(typeof horizon_alpha.model.action.execute_action !== 'undefined'){
} else {
horizon_alpha.model.action.execute_action = (function (){var method_table__5410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5413__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5414__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"horizon-alpha.model.action","execute-action"),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5414__auto__,method_table__5410__auto__,prefer_table__5411__auto__,method_cache__5412__auto__,cached_hierarchy__5413__auto__));
})();
}
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"move","move",-2110884309),(function (target,state){
return horizon_alpha.model.action.move.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"loot","loot",76954122),(function (target,state){
return horizon_alpha.model.action.move.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"attack","attack",1957061788),(function (target,state){
return horizon_alpha.model.attack.attack.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"unleash","unleash",-1132542263),(function (target,state){
return horizon_alpha.model.action.unleash.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"heal","heal",-1734703848),(function (target,state){
return horizon_alpha.model.heal.heal.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"beam","beam",-1611040870),(function (target,state){
return horizon_alpha.model.attack.beam.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"charge","charge",426796560),(function (target,state){
return horizon_alpha.model.action.charge.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"block","block",664686210),(function (target,state){
return horizon_alpha.model.action.charge.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
cljs.core._add_method.call(null,horizon_alpha.model.action.execute_action,new cljs.core.Keyword(null,"boast","boast",1187409955),(function (target,state){
return horizon_alpha.model.action.charge.call(null,state,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(target));
}));
horizon_alpha.model.action.handle_action = (function horizon_alpha$model$action$handle_action(state,target){

return horizon_alpha.model.action.execute_action.call(null,target,state);
});

//# sourceMappingURL=action.js.map