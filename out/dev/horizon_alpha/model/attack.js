// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.model.attack');
goog.require('cljs.core');
goog.require('horizon_alpha.player.stat');
horizon_alpha.model.attack.attack_amount = (100);
horizon_alpha.model.attack.normal_attack = (function horizon_alpha$model$attack$normal_attack(state,pos){

var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),pos);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),((function (id){
return (function (p1__9748_SHARP_){
return horizon_alpha.player.stat.uncharge.call(null,p1__9748_SHARP_,horizon_alpha.model.attack.attack_amount);
});})(id))
);
});
horizon_alpha.model.attack.omegazell_attack = (function horizon_alpha$model$attack$omegazell_attack(state,pos){

var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),pos);
var charge = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"omegazell","omegazell",-609157019),new cljs.core.Keyword(null,"sp","sp",1023349958),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var state2 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),((function (id,charge){
return (function (p1__9749_SHARP_){
return horizon_alpha.player.stat.uncharge.call(null,p1__9749_SHARP_,(function (){var x__4835__auto__ = horizon_alpha.model.attack.attack_amount;
var y__4836__auto__ = charge;
return ((x__4835__auto__ < y__4836__auto__) ? x__4835__auto__ : y__4836__auto__);
})());
});})(id,charge))
);
return cljs.core.update_in.call(null,state2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"omegazell","omegazell",-609157019),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (id,charge,state2){
return (function (p1__9750_SHARP_){
return horizon_alpha.player.stat.uncharge.call(null,p1__9750_SHARP_,(function (){var x__4835__auto__ = horizon_alpha.model.attack.attack_amount;
var y__4836__auto__ = charge;
return ((x__4835__auto__ < y__4836__auto__) ? x__4835__auto__ : y__4836__auto__);
})());
});})(id,charge,state2))
);
});
horizon_alpha.model.attack.artheon_attack = (function horizon_alpha$model$attack$artheon_attack(state,pos){

var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),pos);
var target_hp = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var state2 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),((function (id,target_hp){
return (function (p1__9751_SHARP_){
return horizon_alpha.player.stat.uncharge.call(null,p1__9751_SHARP_,horizon_alpha.model.attack.attack_amount);
});})(id,target_hp))
);
var final_hp = cljs.core.get_in.call(null,state2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
return cljs.core.update_in.call(null,state2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"omegazell","omegazell",-609157019),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (id,target_hp,state2,final_hp){
return (function (p1__9752_SHARP_){
return horizon_alpha.player.stat.charge.call(null,p1__9752_SHARP_,(target_hp - final_hp));
});})(id,target_hp,state2,final_hp))
);
});
horizon_alpha.model.attack.attack = (function horizon_alpha$model$attack$attack(state,pos){

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"omegazell","omegazell",-609157019),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return horizon_alpha.model.attack.omegazell_attack.call(null,state,pos);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"artheon","artheon",-691926463),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))){
return horizon_alpha.model.attack.artheon_attack.call(null,state,pos);
} else {
return horizon_alpha.model.attack.normal_attack.call(null,state,pos);

}
}
});
horizon_alpha.model.attack.beam = (function horizon_alpha$model$attack$beam(state,pos){

var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),pos);
var target_hp = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var state2 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),horizon_alpha.player.stat.clear);
var final_hp = cljs.core.get_in.call(null,state2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id,new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var state3 = cljs.core.update_in.call(null,state2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"sparadrap","sparadrap",-316715099),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),horizon_alpha.player.stat.clear);
return cljs.core.update_in.call(null,state3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"omegazell","omegazell",-609157019),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (id,target_hp,state2,final_hp,state3){
return (function (p1__9753_SHARP_){
return horizon_alpha.player.stat.charge.call(null,p1__9753_SHARP_,(target_hp - final_hp));
});})(id,target_hp,state2,final_hp,state3))
);
});

//# sourceMappingURL=attack.js.map