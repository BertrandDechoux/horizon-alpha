// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.model.heal');
goog.require('cljs.core');
goog.require('horizon_alpha.player.stat');
horizon_alpha.model.heal.heal_amount = (100);
horizon_alpha.model.heal.normal_heal = (function horizon_alpha$model$heal$normal_heal(state,pos){

var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),pos);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),((function (id){
return (function (p1__9861_SHARP_){
return horizon_alpha.player.stat.charge.call(null,p1__9861_SHARP_,horizon_alpha.model.heal.heal_amount);
});})(id))
);
});
horizon_alpha.model.heal.pc_heal = (function horizon_alpha$model$heal$pc_heal(state,id,charge){

var target_hp = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var state2 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),((function (target_hp){
return (function (p1__9862_SHARP_){
return horizon_alpha.player.stat.charge.call(null,p1__9862_SHARP_,charge);
});})(target_hp))
);
var final_hp = cljs.core.get_in.call(null,state2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
return cljs.core.update_in.call(null,state2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"sparadrap","sparadrap",-316715099),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (target_hp,state2,final_hp){
return (function (p1__9863_SHARP_){
return horizon_alpha.player.stat.uncharge.call(null,p1__9863_SHARP_,(final_hp - target_hp));
});})(target_hp,state2,final_hp))
);
});
horizon_alpha.model.heal.npc_heal = (function horizon_alpha$model$heal$npc_heal(state,id){

var target_hp = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var state2 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),((function (target_hp){
return (function (p1__9864_SHARP_){
return horizon_alpha.player.stat.charge.call(null,p1__9864_SHARP_,horizon_alpha.model.heal.heal_amount);
});})(target_hp))
);
var final_hp = cljs.core.get_in.call(null,state2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
return cljs.core.update_in.call(null,state2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"sparadrap","sparadrap",-316715099),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (target_hp,state2,final_hp){
return (function (p1__9865_SHARP_){
return horizon_alpha.player.stat.charge.call(null,p1__9865_SHARP_,((2) * (final_hp - target_hp)));
});})(target_hp,state2,final_hp))
);
});
horizon_alpha.model.heal.sparadrap_heal = (function horizon_alpha$model$heal$sparadrap_heal(state,pos){

var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),pos);
var charge = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sp","sp",1023349958).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sparadrap","sparadrap",-316715099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state))));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"npc","npc",2026900089),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
return horizon_alpha.model.heal.npc_heal.call(null,state,id);
} else {
return horizon_alpha.model.heal.pc_heal.call(null,state,id,(function (){var x__4835__auto__ = horizon_alpha.model.heal.heal_amount;
var y__4836__auto__ = charge;
return ((x__4835__auto__ < y__4836__auto__) ? x__4835__auto__ : y__4836__auto__);
})());
}
});
horizon_alpha.model.heal.heal = (function horizon_alpha$model$heal$heal(state,pos){

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sparadrap","sparadrap",-316715099),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return horizon_alpha.model.heal.sparadrap_heal.call(null,state,pos);
} else {
return horizon_alpha.model.heal.normal_heal.call(null,state,pos);
}
});

//# sourceMappingURL=heal.js.map