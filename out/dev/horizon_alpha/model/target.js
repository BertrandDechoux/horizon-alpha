// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.model.target');
goog.require('cljs.core');
goog.require('horizon_alpha.player.player');
goog.require('horizon_alpha.player.stat');
goog.require('horizon_alpha.model.path');
horizon_alpha.model.target.moves = (function horizon_alpha$model$target$moves(state,player){
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player);
var move_neighbors = horizon_alpha.model.path.walkable_neighbors.call(null,pos,state);
return cljs.core.map.call(null,((function (pos,move_neighbors){
return (function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"pos","pos",-864607220),p,new cljs.core.Keyword(null,"from","from",1815293044),pos], null);
});})(pos,move_neighbors))
,move_neighbors);
});
horizon_alpha.model.target.attacks = (function horizon_alpha$model$target$attacks(state,player){
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player);
var attack_neighbors = horizon_alpha.player.player.positions.call(null,horizon_alpha.model.path.fiend_neighbors.call(null,player,state));
return cljs.core.map.call(null,((function (pos,attack_neighbors){
return (function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"pos","pos",-864607220),p,new cljs.core.Keyword(null,"from","from",1815293044),pos], null);
});})(pos,attack_neighbors))
,attack_neighbors);
});
horizon_alpha.model.target.heals = (function horizon_alpha$model$target$heals(state,player){
if(cljs.core.truth_((function (){var and__4485__auto__ = new cljs.core.Keyword(null,"heal","heal",-1734703848).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player));
if(cljs.core.truth_(and__4485__auto__)){
return cljs.core.not.call(null,horizon_alpha.player.stat.charged_QMARK_.call(null,new cljs.core.Keyword(null,"sp","sp",1023349958).cljs$core$IFn$_invoke$arity$1(player)));
} else {
return and__4485__auto__;
}
})())){
return cljs.core.map.call(null,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"heal","heal",-1734703848),new cljs.core.Keyword(null,"pos","pos",-864607220),p,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player)], null);
}),cljs.core.keys.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state)));
} else {
return null;
}
});
horizon_alpha.model.target.beams = (function horizon_alpha$model$target$beams(state,player){
if(cljs.core.truth_((function (){var and__4485__auto__ = new cljs.core.Keyword(null,"heal","heal",-1734703848).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player));
if(cljs.core.truth_(and__4485__auto__)){
return horizon_alpha.player.stat.charged_QMARK_.call(null,new cljs.core.Keyword(null,"sp","sp",1023349958).cljs$core$IFn$_invoke$arity$1(player));
} else {
return and__4485__auto__;
}
})())){
return cljs.core.map.call(null,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"beam","beam",-1611040870),new cljs.core.Keyword(null,"pos","pos",-864607220),p,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player)], null);
}),cljs.core.keys.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state)));
} else {
return null;
}
});
horizon_alpha.model.target.blocks = (function horizon_alpha$model$target$blocks(state,player){
if(cljs.core.truth_(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player)], null)], null);
} else {
return null;
}
});
horizon_alpha.model.target.loots = (function horizon_alpha$model$target$loots(state,player){
if(cljs.core.truth_(new cljs.core.Keyword(null,"loot","loot",76954122).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player)))){
return cljs.core.map.call(null,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"loot","loot",76954122),new cljs.core.Keyword(null,"pos","pos",-864607220),p,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player)], null);
}),new cljs.core.Keyword(null,"loots","loots",368837806).cljs$core$IFn$_invoke$arity$1(state));
} else {
return null;
}
});
horizon_alpha.model.target.charges = (function horizon_alpha$model$target$charges(state,player){
if(cljs.core.truth_((function (){var and__4485__auto__ = new cljs.core.Keyword(null,"charge","charge",426796560).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player));
if(cljs.core.truth_(and__4485__auto__)){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"loots","loots",368837806).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__4485__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"charge","charge",426796560),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player)], null)], null);
} else {
return null;
}
});
horizon_alpha.model.target.unleashs = (function horizon_alpha$model$target$unleashs(state,player){
if(cljs.core.truth_(new cljs.core.Keyword(null,"unleash","unleash",-1132542263).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player)))){
return cljs.core.map.call(null,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"unleash","unleash",-1132542263),new cljs.core.Keyword(null,"pos","pos",-864607220),p,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player)], null);
}),horizon_alpha.player.player.positions.call(null,horizon_alpha.player.player.npcs.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state))));
} else {
return null;
}
});
horizon_alpha.model.target.boasts = (function horizon_alpha$model$target$boasts(state,player){
if(cljs.core.truth_(new cljs.core.Keyword(null,"boast","boast",1187409955).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"boast","boast",1187409955),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player)], null)], null);
} else {
return null;
}
});
horizon_alpha.model.target.pc_targets = (function horizon_alpha$model$target$pc_targets(state){

var player = cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state));
var actions = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizon_alpha.model.target.moves,horizon_alpha.model.target.attacks,horizon_alpha.model.target.heals,horizon_alpha.model.target.beams,horizon_alpha.model.target.blocks,horizon_alpha.model.target.loots,horizon_alpha.model.target.charges,horizon_alpha.model.target.unleashs,horizon_alpha.model.target.boasts], null);
var targets = cljs.core.mapcat.call(null,((function (player,actions){
return (function (p1__15922_SHARP_){
return p1__15922_SHARP_.call(null,state,player);
});})(player,actions))
,actions);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"targets","targets",2014963406)], null),targets);
});

//# sourceMappingURL=target.js.map