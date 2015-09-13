// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.field.grid');
goog.require('cljs.core');
goog.require('horizon_alpha.field.pos');
goog.require('horizon_alpha.utils');
horizon_alpha.field.grid.square = (function horizon_alpha$field$grid$square(length){

var r = cljs.core.range.call(null,(1),(length + (1)));
var iter__5269__auto__ = ((function (r){
return (function horizon_alpha$field$grid$square_$_iter__9696(s__9697){
return (new cljs.core.LazySeq(null,((function (r){
return (function (){
var s__9697__$1 = s__9697;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9697__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5265__auto__ = ((function (s__9697__$1,x,xs__4977__auto__,temp__4425__auto__,r){
return (function horizon_alpha$field$grid$square_$_iter__9696_$_iter__9698(s__9699){
return (new cljs.core.LazySeq(null,((function (s__9697__$1,x,xs__4977__auto__,temp__4425__auto__,r){
return (function (){
var s__9699__$1 = s__9699;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__9699__$1);
if(temp__4425__auto____$1){
var s__9699__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9699__$2)){
var c__5267__auto__ = cljs.core.chunk_first.call(null,s__9699__$2);
var size__5268__auto__ = cljs.core.count.call(null,c__5267__auto__);
var b__9701 = cljs.core.chunk_buffer.call(null,size__5268__auto__);
if((function (){var i__9700 = (0);
while(true){
if((i__9700 < size__5268__auto__)){
var y = cljs.core._nth.call(null,c__5267__auto__,i__9700);
cljs.core.chunk_append.call(null,b__9701,horizon_alpha.field.pos.pos.call(null,x,y));

var G__9702 = (i__9700 + (1));
i__9700 = G__9702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9701),horizon_alpha$field$grid$square_$_iter__9696_$_iter__9698.call(null,cljs.core.chunk_rest.call(null,s__9699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9701),null);
}
} else {
var y = cljs.core.first.call(null,s__9699__$2);
return cljs.core.cons.call(null,horizon_alpha.field.pos.pos.call(null,x,y),horizon_alpha$field$grid$square_$_iter__9696_$_iter__9698.call(null,cljs.core.rest.call(null,s__9699__$2)));
}
} else {
return null;
}
break;
}
});})(s__9697__$1,x,xs__4977__auto__,temp__4425__auto__,r))
,null,null));
});})(s__9697__$1,x,xs__4977__auto__,temp__4425__auto__,r))
;
var fs__5266__auto__ = cljs.core.seq.call(null,iterys__5265__auto__.call(null,r));
if(fs__5266__auto__){
return cljs.core.concat.call(null,fs__5266__auto__,horizon_alpha$field$grid$square_$_iter__9696.call(null,cljs.core.rest.call(null,s__9697__$1)));
} else {
var G__9703 = cljs.core.rest.call(null,s__9697__$1);
s__9697__$1 = G__9703;
continue;
}
} else {
return null;
}
break;
}
});})(r))
,null,null));
});})(r))
;
return iter__5269__auto__.call(null,r);
});
horizon_alpha.field.grid.hex_tiling = (function horizon_alpha$field$grid$hex_tiling(x_scale){

var y_scale = Math.sqrt((horizon_alpha.utils.pow2.call(null,x_scale) - horizon_alpha.utils.pow2.call(null,(x_scale / (2)))));
return ((function (y_scale){
return (function (p__9707){
var map__9708 = p__9707;
var map__9708__$1 = ((((!((map__9708 == null)))?((((map__9708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9708):map__9708);
var x = cljs.core.get.call(null,map__9708__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9708__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return horizon_alpha.field.pos.pos.call(null,(x_scale * ((cljs.core.odd_QMARK_.call(null,y))?x:(0.5 + x))),(y_scale * y));
});
;})(y_scale))
});
horizon_alpha.field.grid.neighbors = (function horizon_alpha$field$grid$neighbors(p__9710){
var map__9713 = p__9710;
var map__9713__$1 = ((((!((map__9713 == null)))?((((map__9713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9713):map__9713);
var x = cljs.core.get.call(null,map__9713__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9713__$1,new cljs.core.Keyword(null,"y","y",-1757859776));

if(cljs.core.even_QMARK_.call(null,y)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizon_alpha.field.pos.pos.call(null,x,(y - (1))),horizon_alpha.field.pos.pos.call(null,(x + (1)),(y - (1))),horizon_alpha.field.pos.pos.call(null,(x + (1)),y),horizon_alpha.field.pos.pos.call(null,(x + (1)),(y + (1))),horizon_alpha.field.pos.pos.call(null,x,(y + (1))),horizon_alpha.field.pos.pos.call(null,(x - (1)),y)], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizon_alpha.field.pos.pos.call(null,(x - (1)),(y - (1))),horizon_alpha.field.pos.pos.call(null,x,(y - (1))),horizon_alpha.field.pos.pos.call(null,(x + (1)),y),horizon_alpha.field.pos.pos.call(null,x,(y + (1))),horizon_alpha.field.pos.pos.call(null,(x - (1)),(y + (1))),horizon_alpha.field.pos.pos.call(null,(x - (1)),y)], null);
}
});

//# sourceMappingURL=grid.js.map