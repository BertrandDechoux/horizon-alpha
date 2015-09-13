// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.model.path');
goog.require('cljs.core');
goog.require('horizon_alpha.field.grid');
goog.require('horizon_alpha.field.field');
goog.require('horizon_alpha.player.player');
goog.require('clojure.set');
horizon_alpha.model.path.walkable_neighbors = (function horizon_alpha$model$path$walkable_neighbors(pos,state){

var around = cljs.core.set.call(null,horizon_alpha.field.grid.neighbors.call(null,pos));
var occupied = cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state)));
var neighbors = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state),clojure.set.difference.call(null,around,occupied));
return horizon_alpha.field.field.positions.call(null,cljs.core.filter.call(null,horizon_alpha.field.field.walkable_QMARK_,neighbors));
});
horizon_alpha.model.path.fiend_neighbors = (function horizon_alpha$model$path$fiend_neighbors(player,state){

var around = cljs.core.set.call(null,horizon_alpha.field.grid.neighbors.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player)));
var fiends = horizon_alpha.player.player.fiends.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(player));
var occupied = cljs.core.set.call(null,horizon_alpha.player.player.positions.call(null,fiends));
var neighbors = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(state),clojure.set.intersection.call(null,around,occupied));
var positions = horizon_alpha.field.field.positions.call(null,neighbors);
var ids = cljs.core.vals.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"occupied","occupied",-1962123949).cljs$core$IFn$_invoke$arity$1(state),positions));
return cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state),ids);
});
horizon_alpha.model.path.walk = (function horizon_alpha$model$path$walk(done,pred_QMARK_){

return (function (p1__9839_SHARP_){
var iter__5269__auto__ = (function horizon_alpha$model$path$walk_$_iter__9844(s__9845){
return (new cljs.core.LazySeq(null,(function (){
var s__9845__$1 = s__9845;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9845__$1);
if(temp__4425__auto__){
var s__9845__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9845__$2)){
var c__5267__auto__ = cljs.core.chunk_first.call(null,s__9845__$2);
var size__5268__auto__ = cljs.core.count.call(null,c__5267__auto__);
var b__9847 = cljs.core.chunk_buffer.call(null,size__5268__auto__);
if((function (){var i__9846 = (0);
while(true){
if((i__9846 < size__5268__auto__)){
var n = cljs.core._nth.call(null,c__5267__auto__,i__9846);
if(cljs.core.truth_(pred_QMARK_.call(null,n))){
cljs.core.chunk_append.call(null,b__9847,cljs.core.conj.call(null,p1__9839_SHARP_,n));

var G__9848 = (i__9846 + (1));
i__9846 = G__9848;
continue;
} else {
var G__9849 = (i__9846 + (1));
i__9846 = G__9849;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9847),horizon_alpha$model$path$walk_$_iter__9844.call(null,cljs.core.chunk_rest.call(null,s__9845__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9847),null);
}
} else {
var n = cljs.core.first.call(null,s__9845__$2);
if(cljs.core.truth_(pred_QMARK_.call(null,n))){
return cljs.core.cons.call(null,cljs.core.conj.call(null,p1__9839_SHARP_,n),horizon_alpha$model$path$walk_$_iter__9844.call(null,cljs.core.rest.call(null,s__9845__$2)));
} else {
var G__9850 = cljs.core.rest.call(null,s__9845__$2);
s__9845__$1 = G__9850;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5269__auto__.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,horizon_alpha.field.grid.neighbors.call(null,cljs.core.first.call(null,p1__9839_SHARP_))),done));
});
});
horizon_alpha.model.path.step = (function horizon_alpha$model$path$step(paths,done,pred_QMARK_,targets){
while(true){

var paths2 = cljs.core.mapcat.call(null,horizon_alpha.model.path.walk.call(null,done,pred_QMARK_),paths);
var done2 = cljs.core.reduce.call(null,((function (paths,done,pred_QMARK_,targets,paths2){
return (function (p1__9851_SHARP_,p2__9852_SHARP_){
return cljs.core.conj.call(null,p1__9851_SHARP_,cljs.core.first.call(null,p2__9852_SHARP_));
});})(paths,done,pred_QMARK_,targets,paths2))
,done,paths2);
if((cljs.core._EQ_.call(null,paths,paths2)) || (!(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,targets,done2))))){
return paths2;
} else {
var G__9853 = paths2;
var G__9854 = done2;
var G__9855 = pred_QMARK_;
var G__9856 = targets;
paths = G__9853;
done = G__9854;
pred_QMARK_ = G__9855;
targets = G__9856;
continue;
}
break;
}
});
horizon_alpha.model.path.short_paths = (function horizon_alpha$model$path$short_paths(pos,state,pred_QMARK_,targets){

var neighbors = horizon_alpha.field.grid.neighbors.call(null,pos);
var around = cljs.core.set.call(null,cljs.core.filter.call(null,pred_QMARK_,neighbors));
var done = around;
var paths = cljs.core.map.call(null,((function (neighbors,around,done){
return (function (p1__9857_SHARP_){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__9857_SHARP_);
});})(neighbors,around,done))
,around);
return horizon_alpha.model.path.step.call(null,paths,done,pred_QMARK_,targets);
});
horizon_alpha.model.path.best_moves = (function horizon_alpha$model$path$best_moves(paths,targets){
return cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,cljs.core.second),cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__9858_SHARP_){
if(cljs.core.contains_QMARK_.call(null,targets,cljs.core.first.call(null,p1__9858_SHARP_))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.last.call(null,p1__9858_SHARP_),(1)], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([cljs.core.last.call(null,p1__9858_SHARP_),(0)], true, false);
}
}),paths)));
});

//# sourceMappingURL=path.js.map