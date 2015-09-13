// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.model.ai');
goog.require('cljs.core');
goog.require('horizon_alpha.model.attack');
goog.require('horizon_alpha.field.grid');
goog.require('horizon_alpha.player.player');
goog.require('horizon_alpha.model.action');
goog.require('horizon_alpha.model.path');
goog.require('horizon_alpha.model.heal');
goog.require('horizon_alpha.field.field');
horizon_alpha.model.ai.hit_weakest = (function horizon_alpha$model$ai$hit_weakest(state,player){

var fiend = horizon_alpha.player.player.weakest_at.call(null,horizon_alpha.model.path.fiend_neighbors.call(null,player,state));
if(cljs.core.truth_((function (){var and__4485__auto__ = fiend;
if(cljs.core.truth_(and__4485__auto__)){
return new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player));
} else {
return and__4485__auto__;
}
})())){
return horizon_alpha.model.attack.attack.call(null,state,fiend);
} else {
return state;
}
});
horizon_alpha.model.ai.escape_danger = (function horizon_alpha$model$ai$escape_danger(state,player){

var destination = cljs.core.first.call(null,cljs.core.shuffle.call(null,horizon_alpha.model.path.walkable_neighbors.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player),state)));
var fiend = horizon_alpha.player.player.weakest_at.call(null,horizon_alpha.model.path.fiend_neighbors.call(null,player,state));
if(cljs.core.truth_((function (){var and__4485__auto__ = fiend;
if(cljs.core.truth_(and__4485__auto__)){
return destination;
} else {
return and__4485__auto__;
}
})())){
return horizon_alpha.model.action.move.call(null,state,destination);
} else {
return state;
}
});
horizon_alpha.model.ai.heal_wounded = (function horizon_alpha$model$ai$heal_wounded(state,player){

var wounded = horizon_alpha.player.player.weakest_at.call(null,horizon_alpha.player.player.wounded.call(null,horizon_alpha.player.player.friends.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"npc","npc",2026900089))));
if(cljs.core.truth_((function (){var and__4485__auto__ = wounded;
if(cljs.core.truth_(and__4485__auto__)){
return new cljs.core.Keyword(null,"heal","heal",-1734703848).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player));
} else {
return and__4485__auto__;
}
})())){
return horizon_alpha.model.heal.heal.call(null,state,wounded);
} else {
return state;
}
});
horizon_alpha.model.ai.towards_fiend = (function horizon_alpha$model$ai$towards_fiend(state,player){

var empty_cells = cljs.core.set.call(null,horizon_alpha.field.field.positions.call(null,cljs.core.filter.call(null,horizon_alpha.field.field.walkable_QMARK_,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state))));
var targets = cljs.core.set.call(null,horizon_alpha.player.player.positions.call(null,horizon_alpha.player.player.pcs.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state))));
var walkable_QMARK_ = ((function (empty_cells,targets){
return (function (p1__9876_SHARP_){
return cljs.core.contains_QMARK_.call(null,empty_cells,p1__9876_SHARP_);
});})(empty_cells,targets))
;
var paths = horizon_alpha.model.path.short_paths.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player),state,walkable_QMARK_,targets);
var moves = horizon_alpha.model.path.best_moves.call(null,paths,targets);
if(cljs.core.truth_((function (){var and__4485__auto__ = cljs.core.first.call(null,moves);
if(cljs.core.truth_(and__4485__auto__)){
return new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player));
} else {
return and__4485__auto__;
}
})())){
return horizon_alpha.model.action.move.call(null,state,cljs.core.first.call(null,cljs.core.first.call(null,moves)));
} else {
return state;
}
});
horizon_alpha.model.ai.around_fiend = (function horizon_alpha$model$ai$around_fiend(state,player){

var empty_cells = cljs.core.set.call(null,horizon_alpha.field.field.positions.call(null,cljs.core.filter.call(null,horizon_alpha.field.field.walkable_QMARK_,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state))));
var targets = cljs.core.set.call(null,horizon_alpha.player.player.positions.call(null,horizon_alpha.player.player.pcs.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state))));
var walkable_QMARK_ = ((function (empty_cells,targets){
return (function (p1__9877_SHARP_){
return cljs.core.contains_QMARK_.call(null,empty_cells,p1__9877_SHARP_);
});})(empty_cells,targets))
;
var paths = horizon_alpha.model.path.short_paths.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player),state,walkable_QMARK_,targets);
var moves = horizon_alpha.model.path.best_moves.call(null,paths,targets);
if(cljs.core.truth_((function (){var and__4485__auto__ = cljs.core.first.call(null,moves);
if(cljs.core.truth_(and__4485__auto__)){
return new cljs.core.Keyword(null,"attack","attack",1957061788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(player));
} else {
return and__4485__auto__;
}
})())){
return horizon_alpha.model.action.move.call(null,state,cljs.core.first.call(null,cljs.core.last.call(null,moves)));
} else {
return state;
}
});
horizon_alpha.model.ai.random_move = (function horizon_alpha$model$ai$random_move(state,player){

var destination = cljs.core.first.call(null,cljs.core.shuffle.call(null,horizon_alpha.model.path.walkable_neighbors.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player),state)));
if(cljs.core.truth_(destination)){
return horizon_alpha.model.action.move.call(null,state,destination);
} else {
return state;
}
});
horizon_alpha.model.ai.ai = (function horizon_alpha$model$ai$ai(state){

var player = cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state));
var strategies = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizon_alpha.model.ai.hit_weakest,horizon_alpha.model.ai.heal_wounded,horizon_alpha.model.ai.towards_fiend,horizon_alpha.model.ai.around_fiend,horizon_alpha.model.ai.random_move], null);
var solutions = cljs.core.map.call(null,((function (player,strategies){
return (function (p1__9878_SHARP_){
return p1__9878_SHARP_.call(null,state,player);
});})(player,strategies))
,strategies);
var solution = cljs.core.some.call(null,((function (player,strategies,solutions){
return (function (p1__9879_SHARP_){
if(cljs.core.not_EQ_.call(null,state,p1__9879_SHARP_)){
return p1__9879_SHARP_;
} else {
return null;
}
});})(player,strategies,solutions))
,solutions);
if(cljs.core.truth_(solution)){
return solution;
} else {
return state;
}
});

//# sourceMappingURL=ai.js.map