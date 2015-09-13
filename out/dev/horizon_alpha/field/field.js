// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.field.field');
goog.require('cljs.core');
goog.require('horizon_alpha.field.terrain');
goog.require('horizon_alpha.field.grid');
/**
 * Number of cells horizontally and vertically.
 */
horizon_alpha.field.field.field_length = (14);
horizon_alpha.field.field.gen_field = (function horizon_alpha$field$field$gen_field(){

return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__5269__auto__ = (function horizon_alpha$field$field$gen_field_$_iter__9762(s__9763){
return (new cljs.core.LazySeq(null,(function (){
var s__9763__$1 = s__9763;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9763__$1);
if(temp__4425__auto__){
var s__9763__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9763__$2)){
var c__5267__auto__ = cljs.core.chunk_first.call(null,s__9763__$2);
var size__5268__auto__ = cljs.core.count.call(null,c__5267__auto__);
var b__9765 = cljs.core.chunk_buffer.call(null,size__5268__auto__);
if((function (){var i__9764 = (0);
while(true){
if((i__9764 < size__5268__auto__)){
var pos = cljs.core._nth.call(null,c__5267__auto__,i__9764);
cljs.core.chunk_append.call(null,b__9765,cljs.core.PersistentArrayMap.fromArray([pos,horizon_alpha.field.terrain.rand_terrain.call(null)], true, false));

var G__9766 = (i__9764 + (1));
i__9764 = G__9766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9765),horizon_alpha$field$field$gen_field_$_iter__9762.call(null,cljs.core.chunk_rest.call(null,s__9763__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9765),null);
}
} else {
var pos = cljs.core.first.call(null,s__9763__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([pos,horizon_alpha.field.terrain.rand_terrain.call(null)], true, false),horizon_alpha$field$field$gen_field_$_iter__9762.call(null,cljs.core.rest.call(null,s__9763__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5269__auto__.call(null,horizon_alpha.field.grid.square.call(null,horizon_alpha.field.field.field_length));
})());
});
horizon_alpha.field.field.edge_QMARK_ = (function horizon_alpha$field$field$edge_QMARK_(p__9767){
var vec__9771 = p__9767;
var map__9772 = cljs.core.nth.call(null,vec__9771,(0),null);
var map__9772__$1 = ((((!((map__9772 == null)))?((((map__9772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9772):map__9772);
var x = cljs.core.get.call(null,map__9772__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9772__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var _ = cljs.core.nth.call(null,vec__9771,(1),null);

return (cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([(1),horizon_alpha.field.field.field_length], true),x)) || (cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([(1),horizon_alpha.field.field.field_length], true),y));
});
horizon_alpha.field.field.inside_QMARK_ = (function horizon_alpha$field$field$inside_QMARK_(p__9774){
var vec__9778 = p__9774;
var map__9779 = cljs.core.nth.call(null,vec__9778,(0),null);
var map__9779__$1 = ((((!((map__9779 == null)))?((((map__9779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9779):map__9779);
var x = cljs.core.get.call(null,map__9779__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9779__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var _ = cljs.core.nth.call(null,vec__9778,(1),null);

var margin = (3);
var min = ((1) + margin);
var max = (horizon_alpha.field.field.field_length - margin);
return (((min <= x)) && ((x <= max))) && (((min <= y)) && ((y <= max)));
});
horizon_alpha.field.field.walkable_QMARK_ = (function horizon_alpha$field$field$walkable_QMARK_(p__9781){
var vec__9783 = p__9781;
var _ = cljs.core.nth.call(null,vec__9783,(0),null);
var terrain = cljs.core.nth.call(null,vec__9783,(1),null);

return horizon_alpha.field.terrain.walkable_QMARK_.call(null,terrain);
});
horizon_alpha.field.field.positions = (function horizon_alpha$field$field$positions(field){

return cljs.core.map.call(null,cljs.core.first,field);
});

//# sourceMappingURL=field.js.map