// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.view.logo');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('horizon_alpha.utils');
goog.require('horizon_alpha.field.pos');
horizon_alpha.view.logo.avatar = (function horizon_alpha$view$logo$avatar(type,role){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"heal","heal",-1734703848),role)){
return "m 0 -12 l 3 0, 0 10, 10 0, 0 6, -10 0, 0 10, -6 0, 0 -10, -10 0, 0 -6, 10 0, 0 -10, 3 0 z";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dps","dps",1756250620),role)){
return "m 0 -15 c 8 15, 1 10, 3 21 l 4 0, 0 2, -5 0, 0 6, -4 0, 0 -6, -5 0, 0 -2, 4 0 m 3 -21 c -8 15, -1 10, -3 21 m 3 -21 z";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tank","tank",-798661744),role)){
return "m 0 -10 l 8 0 c 0 5, 0 20, -8 24 m 0 -24 l -8 0 c 0 5, 0 20, 8 24 m 0 24 z";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cast","cast",-1761029143),role)){
return "m -15 -5 l 30 0 -24.27 17.63, 9.27 -28.53, 9.27 28.53 z";
} else {
return " l 0 0, 10 10, -10 -10, -10 10, 10 -10, -10 -10, 10 10, 10 -10, -10 10 z";

}
}
}
}
});
horizon_alpha.view.logo.player = (function horizon_alpha$view$logo$player(pos,player__$1,extra){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(player__$1);
var role = new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(player__$1);
var d = [cljs.core.str("M "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str(horizon_alpha.view.logo.avatar.call(null,type,role))].join('');
var className = [cljs.core.str(cljs.core.name.call(null,type)),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,role))].join('');
var options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"className","className",-1983287057),className], null);
return React.DOM.path(horizon_alpha.utils.to_js.call(null,cljs.core.merge.call(null,options,extra)),null);
});
horizon_alpha.view.logo.cursor = (function horizon_alpha$view$logo$cursor(action){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loot","loot",76954122),null,new cljs.core.Keyword(null,"move","move",-2110884309),null], null), null),action)){
return "m 0 -5 l 6 6, -6 -6, -6 6, 6 -6, 0 16, 0 -16 z";
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heal","heal",-1734703848),null], null), null),action)){
return " l 0 0, 5 5, -5 -5, -5 5, 5 -5, -5 -5, 5 5, 5 -5, -5 5 z";
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unleash","unleash",-1132542263),null,new cljs.core.Keyword(null,"beam","beam",-1611040870),null,new cljs.core.Keyword(null,"attack","attack",1957061788),null], null), null),action)){
return "\n             l 0 0, 3 4, 0 -1, 1 0, -4 -3 z\n             l 0 0, 4 -3, -1 0, 0 -1, -3 4 z\n             l 0 0, -3 -4, 0 1, -1 0, 4 3 z\n             l 0 0, -4 3, 1 0, 0 1, 3 -4 z";
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"boast","boast",1187409955),null,new cljs.core.Keyword(null,"charge","charge",426796560),null], null), null),action)){
return "m 0 0 z";
} else {
return " l 0 0, 10 10, -10 -10, -10 10, 10 -10, -10 -10, 10 10, 10 -10, -10 10 z";

}
}
}
}
});
horizon_alpha.view.logo.cursor_transform = (function horizon_alpha$view$logo$cursor_transform(p__15929,nvec,action){
var map__15932 = p__15929;
var map__15932__$1 = ((((!((map__15932 == null)))?((((map__15932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15932):map__15932);
var x = cljs.core.get.call(null,map__15932__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__15932__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loot","loot",76954122),null,new cljs.core.Keyword(null,"move","move",-2110884309),null], null), null),action)){
var a = (horizon_alpha.field.pos.angle.call(null,nvec) + (90));
return [cljs.core.str("rotate("),cljs.core.str(a),cljs.core.str(","),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"heal","heal",-1734703848),action)){
var a = (45);
return [cljs.core.str("rotate("),cljs.core.str(a),cljs.core.str(","),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('');
} else {
return "";

}
}
});
horizon_alpha.view.logo.target = (function horizon_alpha$view$logo$target(pos,from,action,extra){
return React.DOM.path(horizon_alpha.utils.to_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"d","d",1972142424),[cljs.core.str("M "),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)),cljs.core.str(horizon_alpha.view.logo.cursor.call(null,action))].join(''),new cljs.core.Keyword(null,"className","className",-1983287057),"target",new cljs.core.Keyword(null,"transform","transform",1381301764),horizon_alpha.view.logo.cursor_transform.call(null,pos,horizon_alpha.field.pos.normed_vec.call(null,from,pos),action)], null),extra)),null);
});

//# sourceMappingURL=logo.js.map