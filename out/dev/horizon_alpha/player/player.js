// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.player.player');
goog.require('cljs.core');
goog.require('horizon_alpha.player.stat');
goog.require('horizon_alpha.field.field');
goog.require('horizon_alpha.utils');
horizon_alpha.player.player.previous_id = cljs.core.atom.call(null,(0));
horizon_alpha.player.player.next_id = (function horizon_alpha$player$player$next_id(){
return cljs.core.swap_BANG_.call(null,horizon_alpha.player.player.previous_id,cljs.core.inc);
});
horizon_alpha.player.player.pc = (function horizon_alpha$player$player$pc(id,role,name,hp,ap,actions,sp){

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pc","pc",512913453),new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"hp","hp",-1541237831),horizon_alpha.player.stat.stat.call(null,hp),new cljs.core.Keyword(null,"sp","sp",1023349958),horizon_alpha.player.stat.stat.call(null,((sp / (2)) | (0)),sp),new cljs.core.Keyword(null,"ap","ap",-1072838153),horizon_alpha.player.stat.stat.call(null,(0),ap),new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null);
});
horizon_alpha.player.player.npc = (function horizon_alpha$player$player$npc(role,name,hp,ap,actions){

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),horizon_alpha.player.player.next_id.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"npc","npc",2026900089),new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"hp","hp",-1541237831),horizon_alpha.player.stat.stat.call(null,hp),new cljs.core.Keyword(null,"ap","ap",-1072838153),horizon_alpha.player.stat.stat.call(null,(0),ap),new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null);
});
horizon_alpha.player.player.init_pcs = (function horizon_alpha$player$player$init_pcs(){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizon_alpha.player.player.pc.call(null,new cljs.core.Keyword(null,"artheon","artheon",-691926463),new cljs.core.Keyword(null,"tank","tank",-798661744),"Arth\u00E9on",(1000),(35),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"attack","attack",1957061788),null], null), null),(500)),horizon_alpha.player.player.pc.call(null,new cljs.core.Keyword(null,"omegazell","omegazell",-609157019),new cljs.core.Keyword(null,"dps","dps",1756250620),"Omega Zell",(400),(10),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boast","boast",1187409955),null,new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"attack","attack",1957061788),null], null), null),(500)),horizon_alpha.player.player.pc.call(null,new cljs.core.Keyword(null,"gaea","gaea",-302875413),new cljs.core.Keyword(null,"cast","cast",-1761029143),"Gaea",(400),(15),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"unleash","unleash",-1132542263),null,new cljs.core.Keyword(null,"loot","loot",76954122),null,new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"charge","charge",426796560),null], null), null),(500)),horizon_alpha.player.player.pc.call(null,new cljs.core.Keyword(null,"sparadrap","sparadrap",-316715099),new cljs.core.Keyword(null,"heal","heal",-1734703848),"Sparadrap",(200),(15),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"heal","heal",-1734703848),null,new cljs.core.Keyword(null,"beam","beam",-1611040870),null], null), null),(500))], null);
});
horizon_alpha.player.player.init_npcs = (function horizon_alpha$player$player$init_npcs(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizon_alpha.player.player.npc.call(null,new cljs.core.Keyword(null,"tank","tank",-798661744),"Mob",(900),(40),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"attack","attack",1957061788),null], null), null)),horizon_alpha.player.player.npc.call(null,new cljs.core.Keyword(null,"dps","dps",1756250620),"Dark Avenger",(300),(15),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"attack","attack",1957061788),null], null), null)),horizon_alpha.player.player.npc.call(null,new cljs.core.Keyword(null,"heal","heal",-1734703848),"Ma\u00EEtre Zen",(100),(20),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"heal","heal",-1734703848),null], null), null))], null);
});
horizon_alpha.player.player.starting_players = (function horizon_alpha$player$player$starting_players(field){
var pcs_pos = cljs.core.shuffle.call(null,horizon_alpha.field.field.positions.call(null,cljs.core.filter.call(null,horizon_alpha.utils.and_QMARK_.call(null,horizon_alpha.field.field.walkable_QMARK_,horizon_alpha.field.field.inside_QMARK_),field)));
var npcs_pos = cljs.core.shuffle.call(null,horizon_alpha.field.field.positions.call(null,cljs.core.filter.call(null,horizon_alpha.utils.and_QMARK_.call(null,horizon_alpha.field.field.walkable_QMARK_,horizon_alpha.field.field.edge_QMARK_),field)));
var starting = ((function (pcs_pos,npcs_pos){
return (function (init,pos){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (pcs_pos,npcs_pos){
return (function (p1__9786_SHARP_,p2__9787_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__9786_SHARP_),cljs.core.assoc_in.call(null,p1__9786_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),p2__9787_SHARP_)],null));
});})(pcs_pos,npcs_pos))
,init.call(null),pos));
});})(pcs_pos,npcs_pos))
;
return cljs.core.merge.call(null,starting.call(null,horizon_alpha.player.player.init_pcs,pcs_pos),starting.call(null,horizon_alpha.player.player.init_npcs,npcs_pos));
});
horizon_alpha.player.player.positions = (function horizon_alpha$player$player$positions(players){

return cljs.core.map.call(null,(function (p1__9788_SHARP_){
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__9788_SHARP_));
}),players);
});
horizon_alpha.player.player.done = (function horizon_alpha$player$player$done(player){


return cljs.core.update_in.call(null,player,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ap","ap",-1072838153)], null),horizon_alpha.player.stat.clear);
});
horizon_alpha.player.player.alive_QMARK_ = (function horizon_alpha$player$player$alive_QMARK_(player){

return cljs.core.not.call(null,horizon_alpha.player.stat.cleared_QMARK_.call(null,new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(player)));
});
horizon_alpha.player.player.wounded_QMARK_ = (function horizon_alpha$player$player$wounded_QMARK_(player){

return cljs.core.not.call(null,horizon_alpha.player.stat.charged_QMARK_.call(null,new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(player)));
});
horizon_alpha.player.player.friends = (function horizon_alpha$player$player$friends(players,type){

return cljs.core.filter.call(null,(function (p1__9789_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,p1__9789_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"type","type",1174270348)], null)),type);
}),players);
});
horizon_alpha.player.player.fiends = (function horizon_alpha$player$player$fiends(players,type){

return cljs.core.filter.call(null,(function (p1__9790_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,p1__9790_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"type","type",1174270348)], null)),type);
}),players);
});
horizon_alpha.player.player.pcs = (function horizon_alpha$player$player$pcs(players){

return cljs.core.filter.call(null,(function (p1__9791_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,p1__9791_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"pc","pc",512913453));
}),players);
});
horizon_alpha.player.player.npcs = (function horizon_alpha$player$player$npcs(players){

return cljs.core.filter.call(null,(function (p1__9792_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,p1__9792_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"npc","npc",2026900089));
}),players);
});
horizon_alpha.player.player.ready = (function horizon_alpha$player$player$ready(players){

return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__9793_SHARP_){
return horizon_alpha.player.stat.charged_QMARK_.call(null,new cljs.core.Keyword(null,"ap","ap",-1072838153).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__9793_SHARP_)));
}),players)));
});
horizon_alpha.player.player.weakest_at = (function horizon_alpha$player$player$weakest_at(players){

return cljs.core.first.call(null,horizon_alpha.player.player.positions.call(null,cljs.core.sort_by.call(null,(function (p1__9794_SHARP_){
return cljs.core.get_in.call(null,p1__9794_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
}),players)));
});
horizon_alpha.player.player.charge_aps = (function horizon_alpha$player$player$charge_aps(players){

return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__9795_SHARP_){
return cljs.core.update_in.call(null,p1__9795_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"ap","ap",-1072838153)], null),horizon_alpha.player.stat.charge);
}),players));
});
horizon_alpha.player.player.alive = (function horizon_alpha$player$player$alive(players){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,horizon_alpha.player.player.alive_QMARK_,cljs.core.second),players));
});
horizon_alpha.player.player.dead = (function horizon_alpha$player$player$dead(players){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,horizon_alpha.player.player.alive_QMARK_,cljs.core.second),players));
});
horizon_alpha.player.player.wounded = (function horizon_alpha$player$player$wounded(players){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,horizon_alpha.player.player.wounded_QMARK_,cljs.core.second),players));
});

//# sourceMappingURL=player.js.map