// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.model.game');
goog.require('cljs.core');
goog.require('horizon_alpha.model.target');
goog.require('horizon_alpha.model.ai');
goog.require('horizon_alpha.player.stat');
goog.require('horizon_alpha.player.player');
goog.require('horizon_alpha.model.action');
goog.require('horizon_alpha.utils');
goog.require('horizon_alpha.i18n');
goog.require('horizon_alpha.model.state');
horizon_alpha.model.game.t = horizon_alpha.i18n.i18n.call(null);
horizon_alpha.model.game.start_BANG_;
horizon_alpha.model.game.npc_end_BANG_ = (function horizon_alpha$model$game$npc_end_BANG_(state){

return horizon_alpha.utils.later.call(null,(function (){
cljs.core.swap_BANG_.call(null,state,(function (s){
return horizon_alpha.model.state.clean.call(null,horizon_alpha.model.ai.ai.call(null,s));
}));

return horizon_alpha.model.game.start_BANG_.call(null,state);
}),(500));
});
horizon_alpha.model.game.pc_end_BANG_ = (function horizon_alpha$model$game$pc_end_BANG_(state){

return cljs.core.swap_BANG_.call(null,state,horizon_alpha.model.target.pc_targets);
});
horizon_alpha.model.game.pc_action_BANG_ = (function horizon_alpha$model$game$pc_action_BANG_(target,state){

cljs.core.swap_BANG_.call(null,state,(function (p1__15925_SHARP_){
return horizon_alpha.model.state.clean.call(null,horizon_alpha.model.action.handle_action.call(null,p1__15925_SHARP_,target));
}));

return horizon_alpha.model.game.start_BANG_.call(null,state);
});
horizon_alpha.model.game.step = (function horizon_alpha$model$game$step(state){
var s1 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569)], null),horizon_alpha.player.player.charge_aps);
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"loots","loots",368837806).cljs$core$IFn$_invoke$arity$1(s1))){
return s1;
} else {
return cljs.core.update_in.call(null,s1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"gaea","gaea",-302875413),new cljs.core.Keyword(null,"sp","sp",1023349958)], null),((function (s1){
return (function (p1__15926_SHARP_){
return horizon_alpha.player.stat.clear.call(null,p1__15926_SHARP_);
});})(s1))
);
}
});
horizon_alpha.model.game.step_BANG_ = (function horizon_alpha$model$game$step_BANG_(state){

return cljs.core.swap_BANG_.call(null,state,horizon_alpha.model.game.step);
});
horizon_alpha.model.game.continue_QMARK__BANG_ = (function horizon_alpha$model$game$continue_QMARK__BANG_(state){

return (new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,state,horizon_alpha.model.state.sync_active)) == null);
});
horizon_alpha.model.game.end_BANG_ = (function horizon_alpha$model$game$end_BANG_(state){

var player = cljs.core.get.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(player);
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,horizon_alpha.player.player.npcs.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))))){
return alert(horizon_alpha.model.game.t.call(null,new cljs.core.Keyword("app","win","app/win",-1624569506)));
} else {
if(cljs.core.not_EQ_.call(null,(4),cljs.core.count.call(null,horizon_alpha.player.player.pcs.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))))){
return alert(horizon_alpha.model.game.t.call(null,new cljs.core.Keyword("app","lose","app/lose",-1493632405)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"npc","npc",2026900089),type)){
return horizon_alpha.model.game.npc_end_BANG_.call(null,state);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pc","pc",512913453),type)){
return horizon_alpha.model.game.pc_end_BANG_.call(null,state);
} else {
return null;
}
}
}
}
});
horizon_alpha.model.game.start_BANG_ = (function horizon_alpha$model$game$start_BANG_(state){

return horizon_alpha.utils.do_while_clock.call(null,(function (){
return horizon_alpha.model.game.step_BANG_.call(null,state);
}),(function (){
return horizon_alpha.model.game.continue_QMARK__BANG_.call(null,state);
}),(function (){
return horizon_alpha.model.game.end_BANG_.call(null,state);
}),(100));
});

//# sourceMappingURL=game.js.map