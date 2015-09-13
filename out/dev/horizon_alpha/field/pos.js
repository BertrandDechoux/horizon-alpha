// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.field.pos');
goog.require('cljs.core');
goog.require('horizon_alpha.utils');
horizon_alpha.field.pos.pos = (function horizon_alpha$field$pos$pos(x,y){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
horizon_alpha.field.pos.distance = (function horizon_alpha$field$pos$distance(p1,p2){

return Math.sqrt((horizon_alpha.utils.pow2.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1))) + horizon_alpha.utils.pow2.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1)))));
});
horizon_alpha.field.pos.normed_vec = (function horizon_alpha$field$pos$normed_vec(from,to){

var x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from));
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from));
var d = horizon_alpha.field.pos.distance.call(null,from,to);
return horizon_alpha.field.pos.pos.call(null,(x / d),(y / d));
});
horizon_alpha.field.pos.angle = (function horizon_alpha$field$pos$angle(p__9683){
var map__9686 = p__9683;
var map__9686__$1 = ((((!((map__9686 == null)))?((((map__9686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9686):map__9686);
var x = cljs.core.get.call(null,map__9686__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9686__$1,new cljs.core.Keyword(null,"y","y",-1757859776));

var a = Math.atan2(x,y);
var b = (a * ((180) / Math.PI));
var c = ((90) - b);
return c;
});

//# sourceMappingURL=pos.js.map