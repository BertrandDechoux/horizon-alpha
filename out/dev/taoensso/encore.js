// Compiled by ClojureScript 1.7.122 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.format;
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = 1.24;
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
if((taoensso.encore.encore_version < min_version)){
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).",taoensso.encore.encore_version,min_version),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),min_version,new cljs.core.Keyword(null,"this-version","this-version",355666086),taoensso.encore.encore_version], null));
} else {
return null;
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__16372 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__16372,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__16372,(1),null);
var vec__16373 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__16373,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__16373,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__4497__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var data_map = temp__4425__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args16376 = [];
var len__5555__auto___16382 = arguments.length;
var i__5556__auto___16383 = (0);
while(true){
if((i__5556__auto___16383 < len__5555__auto___16382)){
args16376.push((arguments[i__5556__auto___16383]));

var G__16384 = (i__5556__auto___16383 + (1));
i__5556__auto___16383 = G__16384;
continue;
} else {
}
break;
}

var G__16381 = args16376.length;
switch (G__16381) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5574__auto__ = (new cljs.core.IndexedSeq(args16376.slice((2)),(0)));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5574__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__4485__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__4485__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__4485__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__4485__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__4485__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__4485__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq16377){
var G__16378 = cljs.core.first.call(null,seq16377);
var seq16377__$1 = cljs.core.next.call(null,seq16377);
var G__16379 = cljs.core.first.call(null,seq16377__$1);
var seq16377__$2 = cljs.core.next.call(null,seq16377__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__16378,G__16379,seq16377__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_.call(null,(function (p1__16386_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__16386_SHARP_));
}),ks);
});
taoensso.encore.format;
taoensso.encore.assertion_error = (function taoensso$encore$assertion_error(msg){
return (new Error(msg));
});
/**
 * Implementation detail.
 */
taoensso.encore.hthrow = (function taoensso$encore$hthrow(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16395 = arguments.length;
var i__5556__auto___16396 = (0);
while(true){
if((i__5556__auto___16396 < len__5555__auto___16395)){
args__5562__auto__.push((arguments[i__5556__auto___16396]));

var G__16397 = (i__5556__auto___16396 + (1));
i__5556__auto___16396 = G__16397;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((5) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((5)),(0))):null);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5563__auto__);
});

taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic = (function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__16393){
var vec__16394 = p__16393;
var _QMARK_err = cljs.core.nth.call(null,vec__16394,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__4497__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return "?";
}
})();
var form_str = cljs.core.pr_str.call(null,form);
var val_str = cljs.core.pr_str.call(null,val);
var _QMARK_err_str = (function (){var temp__4425__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4425__auto__)){
var e = temp__4425__auto__;
return cljs.core.pr_str.call(null,_QMARK_err);
} else {
return null;
}
})();
var msg = (function (){var m = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not.call(null,hard_QMARK_))?taoensso.encore.assertion_error.call(null,msg):cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_str,new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err], null)));
});

taoensso.encore.hthrow.cljs$lang$maxFixedArity = (5);

taoensso.encore.hthrow.cljs$lang$applyTo = (function (seq16387){
var G__16388 = cljs.core.first.call(null,seq16387);
var seq16387__$1 = cljs.core.next.call(null,seq16387);
var G__16389 = cljs.core.first.call(null,seq16387__$1);
var seq16387__$2 = cljs.core.next.call(null,seq16387__$1);
var G__16390 = cljs.core.first.call(null,seq16387__$2);
var seq16387__$3 = cljs.core.next.call(null,seq16387__$2);
var G__16391 = cljs.core.first.call(null,seq16387__$3);
var seq16387__$4 = cljs.core.next.call(null,seq16387__$3);
var G__16392 = cljs.core.first.call(null,seq16387__$4);
var seq16387__$5 = cljs.core.next.call(null,seq16387__$4);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(G__16388,G__16389,G__16390,G__16391,G__16392,seq16387__$5);
});
taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
var vec__16400 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e16401){if((e16401 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16401;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16401;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__16400,(0),null);
var _ = cljs.core.nth.call(null,vec__16400,(1),null);
return _QMARK_r;
});
});
/**
 * Implementation detail.
 */
taoensso.encore.hpred = (function taoensso$encore$hpred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__16407 = pred_form;
var type = cljs.core.nth.call(null,vec__16407,(0),null);
var p1 = cljs.core.nth.call(null,vec__16407,(1),null);
var p2 = cljs.core.nth.call(null,vec__16407,(2),null);
var more = cljs.core.nthnext.call(null,vec__16407,(3));
var G__16408 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16408) {
case "el":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "not=":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return cljs.core.not_EQ_.call(null,p1,x);
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "or":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
var or__4497__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__4497__auto____$1)){
return or__4497__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__4497__auto____$1,or__4497__auto__,G__16408,vec__16407,type,p1,p2,more){
return (function (p1__16403_SHARP_){
return taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1__16403_SHARP_)).call(null,x);
});})(or__4497__auto____$1,or__4497__auto__,G__16408,vec__16407,type,p1,p2,more))
,more);
}
}
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "not":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
var and__4485__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1).call(null,x)));
if(and__4485__auto__){
var and__4485__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p2).call(null,x)));
if(and__4485__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__4485__auto____$1,and__4485__auto__,G__16408,vec__16407,type,p1,p2,more){
return (function (p1__16402_SHARP_){
return cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1__16402_SHARP_).call(null,x));
});})(and__4485__auto____$1,and__4485__auto__,G__16408,vec__16407,type,p1,p2,more))
,more);
} else {
return and__4485__auto____$1;
}
} else {
return and__4485__auto__;
}
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "ks=":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "and":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
var and__4485__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$encore$hpred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__4485__auto__)){
var and__4485__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$encore$hpred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__4485__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__4485__auto____$1,and__4485__auto__,G__16408,vec__16407,type,p1,p2,more){
return (function (p1__16404_SHARP_){
return taoensso$encore$hpred.call(null,p1__16404_SHARP_).call(null,x);
});})(and__4485__auto____$1,and__4485__auto__,G__16408,vec__16407,type,p1,p2,more))
,more);
} else {
return and__4485__auto____$1;
}
} else {
return and__4485__auto__;
}
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "not-in":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "not-el":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "=":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,p1,x);
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
case "in":
return ((function (G__16408,vec__16407,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__16408,vec__16407,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
 * Like `name` but fully qualified: includes namespace in string when present.
 */
taoensso.encore.fq_name = (function taoensso$encore$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4423__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16414 = arguments.length;
var i__5556__auto___16415 = (0);
while(true){
if((i__5556__auto___16415 < len__5555__auto___16414)){
args__5562__auto__.push((arguments[i__5556__auto___16415]));

var G__16416 = (i__5556__auto___16415 + (1));
i__5556__auto___16415 = G__16416;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__16412){
var vec__16413 = p__16412;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__16413,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq16410){
var G__16411 = cljs.core.first.call(null,seq16410);
var seq16410__$1 = cljs.core.next.call(null,seq16410);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__16411,seq16410__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16422 = arguments.length;
var i__5556__auto___16423 = (0);
while(true){
if((i__5556__auto___16423 < len__5555__auto___16422)){
args__5562__auto__.push((arguments[i__5556__auto___16423]));

var G__16424 = (i__5556__auto___16423 + (1));
i__5556__auto___16423 = G__16424;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__16419){
var vec__16420 = p__16419;
var type = cljs.core.nth.call(null,vec__16420,(0),null);
var nplaces = cljs.core.nth.call(null,vec__16420,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__16421 = ((((function (){var or__4497__auto__ = type;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__4497__auto__ = type;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);
switch (G__16421) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq16417){
var G__16418 = cljs.core.first.call(null,seq16417);
var seq16417__$1 = cljs.core.next.call(null,seq16417);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__16418,seq16417__$1);
});
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
 * Optimized common case.
 */
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16432 = arguments.length;
var i__5556__auto___16433 = (0);
while(true){
if((i__5556__auto___16433 < len__5555__auto___16432)){
args__5562__auto__.push((arguments[i__5556__auto___16433]));

var G__16434 = (i__5556__auto___16433 + (1));
i__5556__auto___16433 = G__16434;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__16428){
var vec__16429 = p__16428;
var map__16430 = cljs.core.nth.call(null,vec__16429,(0),null);
var map__16430__$1 = ((((!((map__16430 == null)))?((((map__16430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16430):map__16430);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__16430__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__16430__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__16430__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__4828__auto__ = min_SINGLEQUOTE_;
var y__4829__auto__ = time;
return ((x__4828__auto__ > y__4829__auto__) ? x__4828__auto__ : y__4829__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__4835__auto__ = max_SINGLEQUOTE_;
var y__4836__auto__ = time__$1;
return ((x__4835__auto__ < y__4836__auto__) ? x__4835__auto__ : y__4836__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq16426){
var G__16427 = cljs.core.first.call(null,seq16426);
var seq16426__$1 = cljs.core.next.call(null,seq16426);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__16427,seq16426__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
/**
 * Useful for testing.
 */
taoensso.encore.now_udt_mock_fn = (function taoensso$encore$now_udt_mock_fn(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16438 = arguments.length;
var i__5556__auto___16439 = (0);
while(true){
if((i__5556__auto___16439 < len__5555__auto___16438)){
args__5562__auto__.push((arguments[i__5556__auto___16439]));

var G__16440 = (i__5556__auto___16439 + (1));
i__5556__auto___16439 = G__16440;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((0) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((0)),(0))):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5563__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__16436){
var vec__16437 = p__16436;
var mock_udts = cljs.core.nth.call(null,vec__16437,(0),null);
var mock_udts__$1 = (function (){var or__4497__auto__ = mock_udts;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__16437,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__16437,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq16435){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16435));
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16450 = arguments.length;
var i__5556__auto___16451 = (0);
while(true){
if((i__5556__auto___16451 < len__5555__auto___16450)){
args__5562__auto__.push((arguments[i__5556__auto___16451]));

var G__16452 = (i__5556__auto___16451 + (1));
i__5556__auto___16451 = G__16452;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((0) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5563__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__16442){
var map__16443 = p__16442;
var map__16443__$1 = ((((!((map__16443 == null)))?((((map__16443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16443):map__16443);
var opts = map__16443__$1;
var years = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__16443,map__16443__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (hcond_in__16445){
var vec__16446 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hcond_in__16445], null);
}catch (e16448){if((e16448 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16448;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16448;

}
}})();
var x__13043__auto__ = cljs.core.nth.call(null,vec__16446,(0),null);
var _QMARK_x_err__13044__auto__ = cljs.core.nth.call(null,vec__16446,(1),null);
var have_x_QMARK___13045__auto__ = (_QMARK_x_err__13044__auto__ == null);
var vec__16447 = ((have_x_QMARK___13045__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)).call(null,x__13043__auto__)], null);
}catch (e16449){if((e16449 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16449;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16449;

}
}})():null);
var pass_QMARK___13046__auto__ = cljs.core.nth.call(null,vec__16447,(0),null);
var _QMARK_pred_err__13047__auto__ = cljs.core.nth.call(null,vec__16447,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto__)){
return x__13043__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hcond-in__16445","hcond-in__16445",20889240,null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)),((have_x_QMARK___13045__auto__)?x__13043__auto__:_QMARK_x_err__13044__auto__),_QMARK_pred_err__13047__auto__);
}
});})(map__16443,map__16443__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?cljs.core.long$.call(null,(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53)):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms)?ms:(0))));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq16441){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16441));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__4835__auto__ = signed_idx;
var y__4836__auto__ = max_idx;
return ((x__4835__auto__ < y__4836__auto__) ? x__4835__auto__ : y__4836__auto__);
} else {
var x__4828__auto__ = (0);
var y__4829__auto__ = (signed_idx + max_idx);
return ((x__4828__auto__ > y__4829__auto__) ? x__4828__auto__ : y__4829__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16467 = arguments.length;
var i__5556__auto___16468 = (0);
while(true){
if((i__5556__auto___16468 < len__5555__auto___16467)){
args__5562__auto__.push((arguments[i__5556__auto___16468]));

var G__16469 = (i__5556__auto___16468 + (1));
i__5556__auto___16468 = G__16469;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((2) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((2)),(0))):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5563__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__16460){
var map__16461 = p__16460;
var map__16461__$1 = ((((!((map__16461 == null)))?((((map__16461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16461):map__16461);
var max_len = cljs.core.get.call(null,map__16461__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__16461__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if((function (){
var vec__16463_16470 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_len], null);
}catch (e16465){if((e16465 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16465;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16465;

}
}})();
var x__13043__auto___16471 = cljs.core.nth.call(null,vec__16463_16470,(0),null);
var _QMARK_x_err__13044__auto___16472 = cljs.core.nth.call(null,vec__16463_16470,(1),null);
var have_x_QMARK___13045__auto___16473 = (_QMARK_x_err__13044__auto___16472 == null);
var vec__16464_16474 = ((have_x_QMARK___13045__auto___16473)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__13043__auto___16471)], null);
}catch (e16466){if((e16466 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16466;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16466;

}
}})():null);
var pass_QMARK___13046__auto___16475 = cljs.core.nth.call(null,vec__16464_16474,(0),null);
var _QMARK_pred_err__13047__auto___16476 = cljs.core.nth.call(null,vec__16464_16474,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16475)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___13045__auto___16473)?x__13043__auto___16471:_QMARK_x_err__13044__auto___16472),_QMARK_pred_err__13047__auto___16476);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__13105__auto__ = (start_idx_STAR_ + max_len);
var n2__13106__auto__ = xlen;
if((n1__13105__auto__ > n2__13106__auto__)){
return n2__13106__auto__;
} else {
return n1__13105__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq16457){
var G__16458 = cljs.core.first.call(null,seq16457);
var seq16457__$1 = cljs.core.next.call(null,seq16457);
var G__16459 = cljs.core.first.call(null,seq16457__$1);
var seq16457__$2 = cljs.core.next.call(null,seq16457__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__16458,G__16459,seq16457__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`.
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16487 = arguments.length;
var i__5556__auto___16488 = (0);
while(true){
if((i__5556__auto___16488 < len__5555__auto___16487)){
args__5562__auto__.push((arguments[i__5556__auto___16488]));

var G__16489 = (i__5556__auto___16488 + (1));
i__5556__auto___16488 = G__16489;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((2) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((2)),(0))):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5563__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__16480){
var vec__16481 = p__16480;
var _QMARK_max_len = cljs.core.nth.call(null,vec__16481,(0),null);
if((function (){
var vec__16482_16490 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}catch (e16484){if((e16484 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16484;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16484;

}
}})();
var x__13043__auto___16491 = cljs.core.nth.call(null,vec__16482_16490,(0),null);
var _QMARK_x_err__13044__auto___16492 = cljs.core.nth.call(null,vec__16482_16490,(1),null);
var have_x_QMARK___13045__auto___16493 = (_QMARK_x_err__13044__auto___16492 == null);
var vec__16483_16494 = ((have_x_QMARK___13045__auto___16493)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__13043__auto___16491)], null);
}catch (e16485){if((e16485 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16485;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16485;

}
}})():null);
var pass_QMARK___13046__auto___16495 = cljs.core.nth.call(null,vec__16483_16494,(0),null);
var _QMARK_pred_err__13047__auto___16496 = cljs.core.nth.call(null,vec__16483_16494,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16495)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___13045__auto___16493)?x__13043__auto___16491:_QMARK_x_err__13044__auto___16492),_QMARK_pred_err__13047__auto___16496);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__16486 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__16486,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__16486,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq16477){
var G__16478 = cljs.core.first.call(null,seq16477);
var seq16477__$1 = cljs.core.next.call(null,seq16477);
var G__16479 = cljs.core.first.call(null,seq16477__$1);
var seq16477__$2 = cljs.core.next.call(null,seq16477__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__16478,G__16479,seq16477__$2);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5111__auto__,k__5112__auto__){
var self__ = this;
var this__5111__auto____$1 = this;
return cljs.core._lookup.call(null,this__5111__auto____$1,k__5112__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5113__auto__,k16498,else__5114__auto__){
var self__ = this;
var this__5113__auto____$1 = this;
var G__16500 = (((k16498 instanceof cljs.core.Keyword))?k16498.fqn:null);
switch (G__16500) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16498,else__5114__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5125__auto__,writer__5126__auto__,opts__5127__auto__){
var self__ = this;
var this__5125__auto____$1 = this;
var pr_pair__5128__auto__ = ((function (this__5125__auto____$1){
return (function (keyval__5129__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5126__auto__,cljs.core.pr_writer,""," ","",opts__5127__auto__,keyval__5129__auto__);
});})(this__5125__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5126__auto__,pr_pair__5128__auto__,"#taoensso.encore.Swapped{",", ","}",opts__5127__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16497){
var self__ = this;
var G__16497__$1 = this;
return (new cljs.core.RecordIter((0),G__16497__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5109__auto__){
var self__ = this;
var this__5109__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5105__auto__){
var self__ = this;
var this__5105__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5115__auto__){
var self__ = this;
var this__5115__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5106__auto__){
var self__ = this;
var this__5106__auto____$1 = this;
var h__4932__auto__ = self__.__hash;
if(!((h__4932__auto__ == null))){
return h__4932__auto__;
} else {
var h__4932__auto____$1 = cljs.core.hash_imap.call(null,this__5106__auto____$1);
self__.__hash = h__4932__auto____$1;

return h__4932__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5107__auto__,other__5108__auto__){
var self__ = this;
var this__5107__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4485__auto__ = other__5108__auto__;
if(cljs.core.truth_(and__4485__auto__)){
var and__4485__auto____$1 = (this__5107__auto____$1.constructor === other__5108__auto__.constructor);
if(and__4485__auto____$1){
return cljs.core.equiv_map.call(null,this__5107__auto____$1,other__5108__auto__);
} else {
return and__4485__auto____$1;
}
} else {
return and__4485__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5120__auto__,k__5121__auto__){
var self__ = this;
var this__5120__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__5121__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5120__auto____$1),self__.__meta),k__5121__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5121__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5118__auto__,k__5119__auto__,G__16497){
var self__ = this;
var this__5118__auto____$1 = this;
var pred__16501 = cljs.core.keyword_identical_QMARK_;
var expr__16502 = k__5119__auto__;
if(cljs.core.truth_(pred__16501.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__16502))){
return (new taoensso.encore.Swapped(G__16497,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16501.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__16502))){
return (new taoensso.encore.Swapped(self__.new_val,G__16497,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5119__auto__,G__16497),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5123__auto__){
var self__ = this;
var this__5123__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5110__auto__,G__16497){
var self__ = this;
var this__5110__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__16497,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5116__auto__,entry__5117__auto__){
var self__ = this;
var this__5116__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5117__auto__)){
return cljs.core._assoc.call(null,this__5116__auto____$1,cljs.core._nth.call(null,entry__5117__auto__,(0)),cljs.core._nth.call(null,entry__5117__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5116__auto____$1,entry__5117__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__5145__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5145__auto__,writer__5146__auto__){
return cljs.core._write.call(null,writer__5146__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__16499){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__16499),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__16499),null,cljs.core.dissoc.call(null,G__16499,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
taoensso.encore.dissoc_in;
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__16506 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__16506,(0),null);
var return_val = cljs.core.nth.call(null,vec__16506,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops.
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__16509 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__16509,(0),null);
var ks = cljs.core.nth.call(null,vec__16509,(1),null);
var valf = cljs.core.nth.call(null,vec__16509,(2),null);
var G__16510 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__16510) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16514 = arguments.length;
var i__5556__auto___16515 = (0);
while(true){
if((i__5556__auto___16515 < len__5555__auto___16514)){
args__5562__auto__.push((arguments[i__5556__auto___16515]));

var G__16516 = (i__5556__auto___16515 + (1));
i__5556__auto___16515 = G__16516;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq16512){
var G__16513 = cljs.core.first.call(null,seq16512);
var seq16512__$1 = cljs.core.next.call(null,seq16512);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__16513,seq16512__$1);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args16517 = [];
var len__5555__auto___16530 = arguments.length;
var i__5556__auto___16531 = (0);
while(true){
if((i__5556__auto___16531 < len__5555__auto___16530)){
args16517.push((arguments[i__5556__auto___16531]));

var G__16532 = (i__5556__auto___16531 + (1));
i__5556__auto___16531 = G__16532;
continue;
} else {
}
break;
}

var G__16523 = args16517.length;
switch (G__16523) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5574__auto__ = (new cljs.core.IndexedSeq(args16517.slice((3)),(0)));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5574__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__16524 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__16524,(0),null);
var return_val = cljs.core.nth.call(null,vec__16524,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__16525 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__16525,(0),null);
var return_val = cljs.core.nth.call(null,vec__16525,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if((function (){
var vec__16526_16534 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e16528){if((e16528 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16528;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16528;

}
}})();
var x__13043__auto___16535 = cljs.core.nth.call(null,vec__16526_16534,(0),null);
var _QMARK_x_err__13044__auto___16536 = cljs.core.nth.call(null,vec__16526_16534,(1),null);
var have_x_QMARK___13045__auto___16537 = (_QMARK_x_err__13044__auto___16536 == null);
var vec__16527_16538 = ((have_x_QMARK___13045__auto___16537)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__13043__auto___16535)], null);
}catch (e16529){if((e16529 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16529;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16529;

}
}})():null);
var pass_QMARK___13046__auto___16539 = cljs.core.nth.call(null,vec__16527_16538,(0),null);
var _QMARK_pred_err__13047__auto___16540 = cljs.core.nth.call(null,vec__16527_16538,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16539)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___13045__auto___16537)?x__13043__auto___16535:_QMARK_x_err__13044__auto___16536),_QMARK_pred_err__13047__auto___16540);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq16518){
var G__16519 = cljs.core.first.call(null,seq16518);
var seq16518__$1 = cljs.core.next.call(null,seq16518);
var G__16520 = cljs.core.first.call(null,seq16518__$1);
var seq16518__$2 = cljs.core.next.call(null,seq16518__$1);
var G__16521 = cljs.core.first.call(null,seq16518__$2);
var seq16518__$3 = cljs.core.next.call(null,seq16518__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16519,G__16520,G__16521,seq16518__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args16541 = [];
var len__5555__auto___16552 = arguments.length;
var i__5556__auto___16553 = (0);
while(true){
if((i__5556__auto___16553 < len__5555__auto___16552)){
args16541.push((arguments[i__5556__auto___16553]));

var G__16554 = (i__5556__auto___16553 + (1));
i__5556__auto___16553 = G__16554;
continue;
} else {
}
break;
}

var G__16547 = args16541.length;
switch (G__16547) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5574__auto__ = (new cljs.core.IndexedSeq(args16541.slice((3)),(0)));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5574__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if((function (){
var vec__16548_16556 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e16550){if((e16550 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16550;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16550;

}
}})();
var x__13043__auto___16557 = cljs.core.nth.call(null,vec__16548_16556,(0),null);
var _QMARK_x_err__13044__auto___16558 = cljs.core.nth.call(null,vec__16548_16556,(1),null);
var have_x_QMARK___13045__auto___16559 = (_QMARK_x_err__13044__auto___16558 == null);
var vec__16549_16560 = ((have_x_QMARK___13045__auto___16559)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__13043__auto___16557)], null);
}catch (e16551){if((e16551 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16551;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16551;

}
}})():null);
var pass_QMARK___13046__auto___16561 = cljs.core.nth.call(null,vec__16549_16560,(0),null);
var _QMARK_pred_err__13047__auto___16562 = cljs.core.nth.call(null,vec__16549_16560,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16561)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___13045__auto___16559)?x__13043__auto___16557:_QMARK_x_err__13044__auto___16558),_QMARK_pred_err__13047__auto___16562);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq16542){
var G__16543 = cljs.core.first.call(null,seq16542);
var seq16542__$1 = cljs.core.next.call(null,seq16542);
var G__16544 = cljs.core.first.call(null,seq16542__$1);
var seq16542__$2 = cljs.core.next.call(null,seq16542__$1);
var G__16545 = cljs.core.first.call(null,seq16542__$2);
var seq16542__$3 = cljs.core.next.call(null,seq16542__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16543,G__16544,G__16545,seq16542__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16566 = arguments.length;
var i__5556__auto___16567 = (0);
while(true){
if((i__5556__auto___16567 < len__5555__auto___16566)){
args__5562__auto__.push((arguments[i__5556__auto___16567]));

var G__16568 = (i__5556__auto___16567 + (1));
i__5556__auto___16567 = G__16568;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((2) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5563__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.apply.call(null,cljs.core.dissoc,m,dissoc_ks);
} else {
return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
}
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq16563){
var G__16564 = cljs.core.first.call(null,seq16563);
var seq16563__$1 = cljs.core.next.call(null,seq16563);
var G__16565 = cljs.core.first.call(null,seq16563__$1);
var seq16563__$2 = cljs.core.next.call(null,seq16563__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__16564,G__16565,seq16563__$2);
});
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16583 = arguments.length;
var i__5556__auto___16584 = (0);
while(true){
if((i__5556__auto___16584 < len__5555__auto___16583)){
args__5562__auto__.push((arguments[i__5556__auto___16584]));

var G__16585 = (i__5556__auto___16584 + (1));
i__5556__auto___16584 = G__16585;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
var vec__16571_16586 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e16573){if((e16573 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16573;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16573;

}
}})();
var x__13043__auto___16587 = cljs.core.nth.call(null,vec__16571_16586,(0),null);
var _QMARK_x_err__13044__auto___16588 = cljs.core.nth.call(null,vec__16571_16586,(1),null);
var have_x_QMARK___13045__auto___16589 = (_QMARK_x_err__13044__auto___16588 == null);
var vec__16572_16590 = ((have_x_QMARK___13045__auto___16589)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__13043__auto___16587)], null);
}catch (e16574){if((e16574 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16574;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16574;

}
}})():null);
var pass_QMARK___13046__auto___16591 = cljs.core.nth.call(null,vec__16572_16590,(0),null);
var _QMARK_pred_err__13047__auto___16592 = cljs.core.nth.call(null,vec__16572_16590,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16591)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___13045__auto___16589)?x__13043__auto___16587:_QMARK_x_err__13044__auto___16588),_QMARK_pred_err__13047__auto___16592);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4497__auto__ = m;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5269__auto__ = (function taoensso$encore$iter__16575(s__16576){
return (new cljs.core.LazySeq(null,(function (){
var s__16576__$1 = s__16576;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16576__$1);
if(temp__4425__auto__){
var s__16576__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16576__$2)){
var c__5267__auto__ = cljs.core.chunk_first.call(null,s__16576__$2);
var size__5268__auto__ = cljs.core.count.call(null,c__5267__auto__);
var b__16578 = cljs.core.chunk_buffer.call(null,size__5268__auto__);
if((function (){var i__16577 = (0);
while(true){
if((i__16577 < size__5268__auto__)){
var vec__16581 = cljs.core._nth.call(null,c__5267__auto__,i__16577);
var k = cljs.core.nth.call(null,vec__16581,(0),null);
var v = cljs.core.nth.call(null,vec__16581,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__16578,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16593 = (i__16577 + (1));
i__16577 = G__16593;
continue;
} else {
var G__16594 = (i__16577 + (1));
i__16577 = G__16594;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16578),taoensso$encore$iter__16575.call(null,cljs.core.chunk_rest.call(null,s__16576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16578),null);
}
} else {
var vec__16582 = cljs.core.first.call(null,s__16576__$2);
var k = cljs.core.nth.call(null,vec__16582,(0),null);
var v = cljs.core.nth.call(null,vec__16582,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__16575.call(null,cljs.core.rest.call(null,s__16576__$2)));
} else {
var G__16595 = cljs.core.rest.call(null,s__16576__$2);
s__16576__$1 = G__16595;
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
return iter__5269__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq16569){
var G__16570 = cljs.core.first.call(null,seq16569);
var seq16569__$1 = cljs.core.next.call(null,seq16569);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__16570,seq16569__$1);
});
/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16610 = arguments.length;
var i__5556__auto___16611 = (0);
while(true){
if((i__5556__auto___16611 < len__5555__auto___16610)){
args__5562__auto__.push((arguments[i__5556__auto___16611]));

var G__16612 = (i__5556__auto___16611 + (1));
i__5556__auto___16611 = G__16612;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
var vec__16598_16613 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e16600){if((e16600 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16600;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16600;

}
}})();
var x__13043__auto___16614 = cljs.core.nth.call(null,vec__16598_16613,(0),null);
var _QMARK_x_err__13044__auto___16615 = cljs.core.nth.call(null,vec__16598_16613,(1),null);
var have_x_QMARK___13045__auto___16616 = (_QMARK_x_err__13044__auto___16615 == null);
var vec__16599_16617 = ((have_x_QMARK___13045__auto___16616)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__13043__auto___16614)], null);
}catch (e16601){if((e16601 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16601;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16601;

}
}})():null);
var pass_QMARK___13046__auto___16618 = cljs.core.nth.call(null,vec__16599_16617,(0),null);
var _QMARK_pred_err__13047__auto___16619 = cljs.core.nth.call(null,vec__16599_16617,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16618)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___13045__auto___16616)?x__13043__auto___16614:_QMARK_x_err__13044__auto___16615),_QMARK_pred_err__13047__auto___16619);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4497__auto__ = m;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5269__auto__ = (function taoensso$encore$iter__16602(s__16603){
return (new cljs.core.LazySeq(null,(function (){
var s__16603__$1 = s__16603;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16603__$1);
if(temp__4425__auto__){
var s__16603__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16603__$2)){
var c__5267__auto__ = cljs.core.chunk_first.call(null,s__16603__$2);
var size__5268__auto__ = cljs.core.count.call(null,c__5267__auto__);
var b__16605 = cljs.core.chunk_buffer.call(null,size__5268__auto__);
if((function (){var i__16604 = (0);
while(true){
if((i__16604 < size__5268__auto__)){
var vec__16608 = cljs.core._nth.call(null,c__5267__auto__,i__16604);
var k = cljs.core.nth.call(null,vec__16608,(0),null);
var v = cljs.core.nth.call(null,vec__16608,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__16605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16620 = (i__16604 + (1));
i__16604 = G__16620;
continue;
} else {
var G__16621 = (i__16604 + (1));
i__16604 = G__16621;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16605),taoensso$encore$iter__16602.call(null,cljs.core.chunk_rest.call(null,s__16603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16605),null);
}
} else {
var vec__16609 = cljs.core.first.call(null,s__16603__$2);
var k = cljs.core.nth.call(null,vec__16609,(0),null);
var v = cljs.core.nth.call(null,vec__16609,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__16602.call(null,cljs.core.rest.call(null,s__16603__$2)));
} else {
var G__16622 = cljs.core.rest.call(null,s__16603__$2);
s__16603__$1 = G__16622;
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
return iter__5269__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq16596){
var G__16597 = cljs.core.first.call(null,seq16596);
var seq16596__$1 = cljs.core.next.call(null,seq16596);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__16597,seq16596__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args16623 = [];
var len__5555__auto___16626 = arguments.length;
var i__5556__auto___16627 = (0);
while(true){
if((i__5556__auto___16627 < len__5555__auto___16626)){
args16623.push((arguments[i__5556__auto___16627]));

var G__16628 = (i__5556__auto___16627 + (1));
i__5556__auto___16627 = G__16628;
continue;
} else {
}
break;
}

var G__16625 = args16623.length;
switch (G__16625) {
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16623.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16631 = arguments.length;
var i__5556__auto___16632 = (0);
while(true){
if((i__5556__auto___16632 < len__5555__auto___16631)){
args__5562__auto__.push((arguments[i__5556__auto___16632]));

var G__16633 = (i__5556__auto___16632 + (1));
i__5556__auto___16632 = G__16633;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((0) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((0)),(0))):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5563__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq16630){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16630));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16636 = arguments.length;
var i__5556__auto___16637 = (0);
while(true){
if((i__5556__auto___16637 < len__5555__auto___16636)){
args__5562__auto__.push((arguments[i__5556__auto___16637]));

var G__16638 = (i__5556__auto___16637 + (1));
i__5556__auto___16637 = G__16638;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq16634){
var G__16635 = cljs.core.first.call(null,seq16634);
var seq16634__$1 = cljs.core.next.call(null,seq16634);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__16635,seq16634__$1);
});
/**
 * Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
 *   against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__4497__auto__ = x;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,k,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__4485__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__4485__auto__)){
return predv.call(null,v);
} else {
return and__4485__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16663 = arguments.length;
var i__5556__auto___16664 = (0);
while(true){
if((i__5556__auto___16664 < len__5555__auto___16663)){
args__5562__auto__.push((arguments[i__5556__auto___16664]));

var G__16665 = (i__5556__auto___16664 + (1));
i__5556__auto___16664 = G__16665;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__16641){
var vec__16642 = p__16641;
var kf = cljs.core.nth.call(null,vec__16642,(0),null);
var vf = cljs.core.nth.call(null,vec__16642,(1),null);
if((function (){
var vec__16643_16666 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs], null);
}catch (e16645){if((e16645 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16645;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16645;

}
}})();
var x__13043__auto___16667 = cljs.core.nth.call(null,vec__16643_16666,(0),null);
var _QMARK_x_err__13044__auto___16668 = cljs.core.nth.call(null,vec__16643_16666,(1),null);
var have_x_QMARK___13045__auto___16669 = (_QMARK_x_err__13044__auto___16668 == null);
var vec__16644_16670 = ((have_x_QMARK___13045__auto___16669)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null)).call(null,x__13043__auto___16667)], null);
}catch (e16646){if((e16646 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16646;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16646;

}
}})():null);
var pass_QMARK___13046__auto___16671 = cljs.core.nth.call(null,vec__16644_16670,(0),null);
var _QMARK_pred_err__13047__auto___16672 = cljs.core.nth.call(null,vec__16644_16670,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16671)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null)),((have_x_QMARK___13045__auto___16669)?x__13043__auto___16667:_QMARK_x_err__13044__auto___16668),_QMARK_pred_err__13047__auto___16672);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))].join('')));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var vec__16647 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf], null);
}catch (e16649){if((e16649 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16649;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16649;

}
}})();
var x__13043__auto__ = cljs.core.nth.call(null,vec__16647,(0),null);
var _QMARK_x_err__13044__auto__ = cljs.core.nth.call(null,vec__16647,(1),null);
var have_x_QMARK___13045__auto__ = (_QMARK_x_err__13044__auto__ == null);
var vec__16648 = ((have_x_QMARK___13045__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__13043__auto__)], null);
}catch (e16650){if((e16650 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16650;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16650;

}
}})():null);
var pass_QMARK___13046__auto__ = cljs.core.nth.call(null,vec__16648,(0),null);
var _QMARK_pred_err__13047__auto__ = cljs.core.nth.call(null,vec__16648,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto__)){
return x__13043__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___13045__auto__)?x__13043__auto__:_QMARK_x_err__13044__auto__),_QMARK_pred_err__13047__auto__);
}
})(),(function (){var vec__16651 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vf], null);
}catch (e16653){if((e16653 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16653;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16653;

}
}})();
var x__13043__auto__ = cljs.core.nth.call(null,vec__16651,(0),null);
var _QMARK_x_err__13044__auto__ = cljs.core.nth.call(null,vec__16651,(1),null);
var have_x_QMARK___13045__auto__ = (_QMARK_x_err__13044__auto__ == null);
var vec__16652 = ((have_x_QMARK___13045__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__13043__auto__)], null);
}catch (e16654){if((e16654 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16654;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16654;

}
}})():null);
var pass_QMARK___13046__auto__ = cljs.core.nth.call(null,vec__16652,(0),null);
var _QMARK_pred_err__13047__auto__ = cljs.core.nth.call(null,vec__16652,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto__)){
return x__13043__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vf","vf",1319108258,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___13045__auto__)?x__13043__auto__:_QMARK_x_err__13044__auto__),_QMARK_pred_err__13047__auto__);
}
})()], null);

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__16642,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__16642,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__16656 = kvs;
var vec__16657 = G__16656;
var k = cljs.core.nth.call(null,vec__16657,(0),null);
var v = cljs.core.nth.call(null,vec__16657,(1),null);
var s = vec__16657;
var m__$1 = m;
var G__16656__$1 = G__16656;
while(true){
var m__$2 = m__$1;
var vec__16658 = G__16656__$1;
var k__$1 = cljs.core.nth.call(null,vec__16658,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__16658,(1),null);
var s__$1 = vec__16658;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4423__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
var G__16673 = new_m;
var G__16674 = n;
m__$1 = G__16673;
G__16656__$1 = G__16674;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if((function (){
var vec__16659_16675 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e16661){if((e16661 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16661;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16661;

}
}})();
var x__13043__auto___16676 = cljs.core.nth.call(null,vec__16659_16675,(0),null);
var _QMARK_x_err__13044__auto___16677 = cljs.core.nth.call(null,vec__16659_16675,(1),null);
var have_x_QMARK___13045__auto___16678 = (_QMARK_x_err__13044__auto___16677 == null);
var vec__16660_16679 = ((have_x_QMARK___13045__auto___16678)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__13043__auto___16676)], null);
}catch (e16662){if((e16662 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16662;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16662;

}
}})():null);
var pass_QMARK___13046__auto___16680 = cljs.core.nth.call(null,vec__16660_16679,(0),null);
var _QMARK_pred_err__13047__auto___16681 = cljs.core.nth.call(null,vec__16660_16679,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16680)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___13045__auto___16678)?x__13043__auto___16676:_QMARK_x_err__13044__auto___16677),_QMARK_pred_err__13047__auto___16681);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq16639){
var G__16640 = cljs.core.first.call(null,seq16639);
var seq16639__$1 = cljs.core.next.call(null,seq16639);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__16640,seq16639__$1);
});
/**
 * Faster `zipmap` using transients.
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__16682 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__16683 = cljs.core.next.call(null,ks__$1);
var G__16684 = cljs.core.next.call(null,vs__$1);
m = G__16682;
ks__$1 = G__16683;
vs__$1 = G__16684;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args16685 = [];
var len__5555__auto___16691 = arguments.length;
var i__5556__auto___16692 = (0);
while(true){
if((i__5556__auto___16692 < len__5555__auto___16691)){
args16685.push((arguments[i__5556__auto___16692]));

var G__16693 = (i__5556__auto___16692 + (1));
i__5556__auto___16692 = G__16693;
continue;
} else {
}
break;
}

var G__16690 = args16685.length;
switch (G__16690) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5574__auto__ = (new cljs.core.IndexedSeq(args16685.slice((2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5574__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq16686){
var G__16687 = cljs.core.first.call(null,seq16686);
var seq16686__$1 = cljs.core.next.call(null,seq16686);
var G__16688 = cljs.core.first.call(null,seq16686__$1);
var seq16686__$2 = cljs.core.next.call(null,seq16686__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__16687,G__16688,seq16686__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args16695 = [];
var len__5555__auto___16701 = arguments.length;
var i__5556__auto___16702 = (0);
while(true){
if((i__5556__auto___16702 < len__5555__auto___16701)){
args16695.push((arguments[i__5556__auto___16702]));

var G__16703 = (i__5556__auto___16702 + (1));
i__5556__auto___16702 = G__16703;
continue;
} else {
}
break;
}

var G__16700 = args16695.length;
switch (G__16700) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5574__auto__ = (new cljs.core.IndexedSeq(args16695.slice((2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5574__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq16696){
var G__16697 = cljs.core.first.call(null,seq16696);
var seq16696__$1 = cljs.core.next.call(null,seq16696);
var G__16698 = cljs.core.first.call(null,seq16696__$1);
var seq16696__$2 = cljs.core.next.call(null,seq16696__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__16697,G__16698,seq16696__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.vec.call(null,cljs.core.take.call(null,n,coll));
}
});
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args16705 = [];
var len__5555__auto___16712 = arguments.length;
var i__5556__auto___16713 = (0);
while(true){
if((i__5556__auto___16713 < len__5555__auto___16712)){
args16705.push((arguments[i__5556__auto___16713]));

var G__16714 = (i__5556__auto___16713 + (1));
i__5556__auto___16713 = G__16714;
continue;
} else {
}
break;
}

var G__16707 = args16705.length;
switch (G__16707) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16705.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__16708,in$){
var vec__16709 = p__16708;
var v = cljs.core.nth.call(null,vec__16709,(0),null);
var seen = cljs.core.nth.call(null,vec__16709,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__16710,in$){
var vec__16711 = p__16710;
var v = cljs.core.nth.call(null,vec__16711,(0),null);
var seen = cljs.core.nth.call(null,vec__16711,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Like `sort-by` for distinct. Based on clojure.core/distinct.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__16722,seen__$1){
while(true){
var vec__16723 = p__16722;
var v = cljs.core.nth.call(null,vec__16723,(0),null);
var xs__$1 = vec__16723;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__16724 = cljs.core.rest.call(null,s);
var G__16725 = seen__$1;
p__16722 = G__16724;
seen__$1 = G__16725;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

/**
 * distinctv` transducer.
 */
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args16730 = [];
var len__5555__auto___16733 = arguments.length;
var i__5556__auto___16734 = (0);
while(true){
if((i__5556__auto___16734 < len__5555__auto___16733)){
args16730.push((arguments[i__5556__auto___16734]));

var G__16735 = (i__5556__auto___16734 + (1));
i__5556__auto___16734 = G__16735;
continue;
} else {
}
break;
}

var G__16732 = args16730.length;
switch (G__16732) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16730.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var seen_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen_){
return (function() {
var G__16737 = null;
var G__16737__0 = (function (){
return rf.call(null);
});
var G__16737__1 = (function (acc){
return rf.call(null,acc);
});
var G__16737__2 = (function (acc,input){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),input)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,seen_,cljs.core.conj,input);

return rf.call(null,acc,input);
}
});
G__16737 = function(acc,input){
switch(arguments.length){
case 0:
return G__16737__0.call(this);
case 1:
return G__16737__1.call(this,acc);
case 2:
return G__16737__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16737.cljs$core$IFn$_invoke$arity$0 = G__16737__0;
G__16737.cljs$core$IFn$_invoke$arity$1 = G__16737__1;
G__16737.cljs$core$IFn$_invoke$arity$2 = G__16737__2;
return G__16737;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen_){
return (function() {
var G__16738 = null;
var G__16738__0 = (function (){
return rf.call(null);
});
var G__16738__1 = (function (acc){
return rf.call(null,acc);
});
var G__16738__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,seen_,cljs.core.conj,k);

return rf.call(null,acc,input);
}
});
G__16738 = function(acc,input){
switch(arguments.length){
case 0:
return G__16738__0.call(this);
case 1:
return G__16738__1.call(this,acc);
case 2:
return G__16738__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16738.cljs$core$IFn$_invoke$arity$0 = G__16738__0;
G__16738.cljs$core$IFn$_invoke$arity$1 = G__16738__1;
G__16738.cljs$core$IFn$_invoke$arity$2 = G__16738__2;
return G__16738;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.sequence.call(null,taoensso.encore.xdistinct.call(null,keyfn),coll);
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 2;
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16741 = arguments.length;
var i__5556__auto___16742 = (0);
while(true){
if((i__5556__auto___16742 < len__5555__auto___16741)){
args__5562__auto__.push((arguments[i__5556__auto___16742]));

var G__16743 = (i__5556__auto___16742 + (1));
i__5556__auto___16742 = G__16743;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__4497__auto__ = m1;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq16739){
var G__16740 = cljs.core.first.call(null,seq16739);
var seq16739__$1 = cljs.core.next.call(null,seq16739);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__16740,seq16739__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Returns the 'greatest' element in coll in O(n) time.
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16750 = arguments.length;
var i__5556__auto___16751 = (0);
while(true){
if((i__5556__auto___16751 < len__5555__auto___16750)){
args__5562__auto__.push((arguments[i__5556__auto___16751]));

var G__16752 = (i__5556__auto___16751 + (1));
i__5556__auto___16751 = G__16752;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__16748){
var vec__16749 = p__16748;
var _QMARK_comparator = cljs.core.nth.call(null,vec__16749,(0),null);
var comparator = (function (){var or__4497__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__16749,_QMARK_comparator){
return (function (p1__16744_SHARP_,p2__16745_SHARP_){
if((comparator.call(null,p1__16744_SHARP_,p2__16745_SHARP_) > (0))){
return p2__16745_SHARP_;
} else {
return p1__16744_SHARP_;
}
});})(comparator,vec__16749,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq16746){
var G__16747 = cljs.core.first.call(null,seq16746);
var seq16746__$1 = cljs.core.next.call(null,seq16746);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__16747,seq16746__$1);
});
/**
 * Returns the 'least' element in coll in O(n) time.
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16759 = arguments.length;
var i__5556__auto___16760 = (0);
while(true){
if((i__5556__auto___16760 < len__5555__auto___16759)){
args__5562__auto__.push((arguments[i__5556__auto___16760]));

var G__16761 = (i__5556__auto___16760 + (1));
i__5556__auto___16760 = G__16761;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__16757){
var vec__16758 = p__16757;
var _QMARK_comparator = cljs.core.nth.call(null,vec__16758,(0),null);
var comparator = (function (){var or__4497__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__16758,_QMARK_comparator){
return (function (p1__16753_SHARP_,p2__16754_SHARP_){
if((comparator.call(null,p1__16753_SHARP_,p2__16754_SHARP_) < (0))){
return p2__16754_SHARP_;
} else {
return p1__16753_SHARP_;
}
});})(comparator,vec__16758,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq16755){
var G__16756 = cljs.core.first.call(null,seq16755);
var seq16755__$1 = cljs.core.next.call(null,seq16755);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__16756,seq16755__$1);
});
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__16762 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__16763 = (idx + (1));
v = G__16762;
idx = G__16763;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__16764 = cljs.core.conj.call(null,v,f.call(null));
var G__16765 = (idx + (1));
v = G__16764;
idx = G__16765;
continue;
}
break;
}
}
});
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16768 = arguments.length;
var i__5556__auto___16769 = (0);
while(true){
if((i__5556__auto___16769 < len__5555__auto___16768)){
args__5562__auto__.push((arguments[i__5556__auto___16769]));

var G__16770 = (i__5556__auto___16769 + (1));
i__5556__auto___16769 = G__16770;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var fmt__$1 = (function (){var or__4497__auto__ = fmt;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq16766){
var G__16767 = cljs.core.first.call(null,seq16766);
var seq16766__$1 = cljs.core.next.call(null,seq16766);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__16767,seq16766__$1);
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`.
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16781 = arguments.length;
var i__5556__auto___16782 = (0);
while(true){
if((i__5556__auto___16782 < len__5555__auto___16781)){
args__5562__auto__.push((arguments[i__5556__auto___16782]));

var G__16783 = (i__5556__auto___16782 + (1));
i__5556__auto___16782 = G__16783;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((2) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5563__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__16774){
var vec__16775 = p__16774;
var _QMARK_max_len = cljs.core.nth.call(null,vec__16775,(0),null);
if((function (){
var vec__16776_16784 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}catch (e16778){if((e16778 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16778;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16778;

}
}})();
var x__13043__auto___16785 = cljs.core.nth.call(null,vec__16776_16784,(0),null);
var _QMARK_x_err__13044__auto___16786 = cljs.core.nth.call(null,vec__16776_16784,(1),null);
var have_x_QMARK___13045__auto___16787 = (_QMARK_x_err__13044__auto___16786 == null);
var vec__16777_16788 = ((have_x_QMARK___13045__auto___16787)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__13043__auto___16785)], null);
}catch (e16779){if((e16779 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16779;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16779;

}
}})():null);
var pass_QMARK___13046__auto___16789 = cljs.core.nth.call(null,vec__16777_16788,(0),null);
var _QMARK_pred_err__13047__auto___16790 = cljs.core.nth.call(null,vec__16777_16788,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16789)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s","s",-948495851,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___13045__auto___16787)?x__13043__auto___16785:_QMARK_x_err__13044__auto___16786),_QMARK_pred_err__13047__auto___16790);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__16780 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__16780,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__16780,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq16771){
var G__16772 = cljs.core.first.call(null,seq16771);
var seq16771__$1 = cljs.core.next.call(null,seq16771);
var G__16773 = cljs.core.first.call(null,seq16771__$1);
var seq16771__$2 = cljs.core.next.call(null,seq16771__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__16772,G__16773,seq16771__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16793 = arguments.length;
var i__5556__auto___16794 = (0);
while(true){
if((i__5556__auto___16794 < len__5555__auto___16793)){
args__5562__auto__.push((arguments[i__5556__auto___16794]));

var G__16795 = (i__5556__auto___16794 + (1));
i__5556__auto___16794 = G__16795;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq16791){
var G__16792 = cljs.core.first.call(null,seq16791);
var seq16791__$1 = cljs.core.next.call(null,seq16791);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__16792,seq16791__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16797 = arguments.length;
var i__5556__auto___16798 = (0);
while(true){
if((i__5556__auto___16798 < len__5555__auto___16797)){
args__5562__auto__.push((arguments[i__5556__auto___16798]));

var G__16799 = (i__5556__auto___16798 + (1));
i__5556__auto___16798 = G__16799;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((0) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5563__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq16796){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16796));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args16800 = [];
var len__5555__auto___16803 = arguments.length;
var i__5556__auto___16804 = (0);
while(true){
if((i__5556__auto___16804 < len__5555__auto___16803)){
args16800.push((arguments[i__5556__auto___16804]));

var G__16805 = (i__5556__auto___16804 + (1));
i__5556__auto___16804 = G__16805;
continue;
} else {
}
break;
}

var G__16802 = args16800.length;
switch (G__16802) {
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16800.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var fs = (function (n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
})));
});
var g = ((function (fs){
return (function (){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});})(fs))
;
var sb = (new goog.string.StringBuffer()).append(fs.call(null,(8)),"-",fs.call(null,(4)),"-4",fs.call(null,(3)),"-",g.call(null),fs.call(null,(3)),"-",fs.call(null,(12)));
return sb.toString();
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value.
 *   Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments.
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16811 = arguments.length;
var i__5556__auto___16812 = (0);
while(true){
if((i__5556__auto___16812 < len__5555__auto___16811)){
args__5562__auto__.push((arguments[i__5556__auto___16812]));

var G__16813 = (i__5556__auto___16812 + (1));
i__5556__auto___16812 = G__16813;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((2) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5563__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__16807_SHARP_){
if(cljs.core.truth_(p1__16807_SHARP_)){
return p1__16807_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq16808){
var G__16809 = cljs.core.first.call(null,seq16808);
var seq16808__$1 = cljs.core.next.call(null,seq16808);
var G__16810 = cljs.core.first.call(null,seq16808__$1);
var seq16808__$2 = cljs.core.next.call(null,seq16808__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__16809,G__16810,seq16808__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args16816 = [];
var len__5555__auto___16851 = arguments.length;
var i__5556__auto___16852 = (0);
while(true){
if((i__5556__auto___16852 < len__5555__auto___16851)){
args16816.push((arguments[i__5556__auto___16852]));

var G__16853 = (i__5556__auto___16852 + (1));
i__5556__auto___16852 = G__16853;
continue;
} else {
}
break;
}

var G__16818 = args16816.length;
switch (G__16818) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16816.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__16855__delegate = function (p__16819){
var vec__16820 = p__16819;
var arg1 = cljs.core.nth.call(null,vec__16820,(0),null);
var argn = cljs.core.nthnext.call(null,vec__16820,(1));
var args = vec__16820;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__16820,arg1,argn,args,cache){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__4485__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__4485__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__4485__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__16820,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__16820,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__16820,arg1,argn,args,cache))
));
}
};
var G__16855 = function (var_args){
var p__16819 = null;
if (arguments.length > 0) {
var G__16856__i = 0, G__16856__a = new Array(arguments.length -  0);
while (G__16856__i < G__16856__a.length) {G__16856__a[G__16856__i] = arguments[G__16856__i + 0]; ++G__16856__i;}
  p__16819 = new cljs.core.IndexedSeq(G__16856__a,0);
} 
return G__16855__delegate.call(this,p__16819);};
G__16855.cljs$lang$maxFixedArity = 0;
G__16855.cljs$lang$applyTo = (function (arglist__16857){
var p__16819 = cljs.core.seq(arglist__16857);
return G__16855__delegate(p__16819);
});
G__16855.cljs$core$IFn$_invoke$arity$variadic = G__16855__delegate;
return G__16855;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var vec__16821_16858 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e16823){if((e16823 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16823;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16823;

}
}})();
var x__13043__auto___16859 = cljs.core.nth.call(null,vec__16821_16858,(0),null);
var _QMARK_x_err__13044__auto___16860 = cljs.core.nth.call(null,vec__16821_16858,(1),null);
var have_x_QMARK___13045__auto___16861 = (_QMARK_x_err__13044__auto___16860 == null);
var vec__16822_16862 = ((have_x_QMARK___13045__auto___16861)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__13043__auto___16859)], null);
}catch (e16824){if((e16824 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16824;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16824;

}
}})():null);
var pass_QMARK___13046__auto___16863 = cljs.core.nth.call(null,vec__16822_16862,(0),null);
var _QMARK_pred_err__13047__auto___16864 = cljs.core.nth.call(null,vec__16822_16862,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16863)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___13045__auto___16861)?x__13043__auto___16859:_QMARK_x_err__13044__auto___16860),_QMARK_pred_err__13047__auto___16864);
}


var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__16865__delegate = function (p__16825){
var vec__16826 = p__16825;
var arg1 = cljs.core.nth.call(null,vec__16826,(0),null);
var argn = cljs.core.nthnext.call(null,vec__16826,(1));
var args = vec__16826;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_16866 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_16866,vec__16826,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_16866,vec__16826,arg1,argn,args,cache){
return (function (m_STAR_,k,p__16827){
var vec__16828 = p__16827;
var dv = cljs.core.nth.call(null,vec__16828,(0),null);
var udt = cljs.core.nth.call(null,vec__16828,(1),null);
var cv = vec__16828;
if(((instant_16866 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_16866,vec__16826,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_16866,vec__16826,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__16829 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__16826,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__4485__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__4485__auto__)){
var and__4485__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__4485__auto____$1){
var vec__16831 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__16831,(0),null);
var udt = cljs.core.nth.call(null,vec__16831,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__4485__auto____$1;
}
} else {
return and__4485__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__16826,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__16826,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__16826,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__16829,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__16865 = function (var_args){
var p__16825 = null;
if (arguments.length > 0) {
var G__16867__i = 0, G__16867__a = new Array(arguments.length -  0);
while (G__16867__i < G__16867__a.length) {G__16867__a[G__16867__i] = arguments[G__16867__i + 0]; ++G__16867__i;}
  p__16825 = new cljs.core.IndexedSeq(G__16867__a,0);
} 
return G__16865__delegate.call(this,p__16825);};
G__16865.cljs$lang$maxFixedArity = 0;
G__16865.cljs$lang$applyTo = (function (arglist__16868){
var p__16825 = cljs.core.seq(arglist__16868);
return G__16865__delegate(p__16825);
});
G__16865.cljs$core$IFn$_invoke$arity$variadic = G__16865__delegate;
return G__16865;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var vec__16832_16869 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e16834){if((e16834 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16834;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16834;

}
}})();
var x__13043__auto___16870 = cljs.core.nth.call(null,vec__16832_16869,(0),null);
var _QMARK_x_err__13044__auto___16871 = cljs.core.nth.call(null,vec__16832_16869,(1),null);
var have_x_QMARK___13045__auto___16872 = (_QMARK_x_err__13044__auto___16871 == null);
var vec__16833_16873 = ((have_x_QMARK___13045__auto___16872)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__13043__auto___16870)], null);
}catch (e16835){if((e16835 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16835;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16835;

}
}})():null);
var pass_QMARK___13046__auto___16874 = cljs.core.nth.call(null,vec__16833_16873,(0),null);
var _QMARK_pred_err__13047__auto___16875 = cljs.core.nth.call(null,vec__16833_16873,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16874)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___13045__auto___16872)?x__13043__auto___16870:_QMARK_x_err__13044__auto___16871),_QMARK_pred_err__13047__auto___16875);
}


var vec__16836_16876 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cache_size], null);
}catch (e16838){if((e16838 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16838;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16838;

}
}})();
var x__13043__auto___16877 = cljs.core.nth.call(null,vec__16836_16876,(0),null);
var _QMARK_x_err__13044__auto___16878 = cljs.core.nth.call(null,vec__16836_16876,(1),null);
var have_x_QMARK___13045__auto___16879 = (_QMARK_x_err__13044__auto___16878 == null);
var vec__16837_16880 = ((have_x_QMARK___13045__auto___16879)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.pos_int_QMARK_).call(null,x__13043__auto___16877)], null);
}catch (e16839){if((e16839 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16839;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16839;

}
}})():null);
var pass_QMARK___13046__auto___16881 = cljs.core.nth.call(null,vec__16837_16880,(0),null);
var _QMARK_pred_err__13047__auto___16882 = cljs.core.nth.call(null,vec__16837_16880,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___16881)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null)),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)),((have_x_QMARK___13045__auto___16879)?x__13043__auto___16877:_QMARK_x_err__13044__auto___16878),_QMARK_pred_err__13047__auto___16882);
}


var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__16883__delegate = function (p__16840){
var vec__16841 = p__16840;
var arg1 = cljs.core.nth.call(null,vec__16841,(0),null);
var argn = cljs.core.nthnext.call(null,vec__16841,(1));
var args = vec__16841;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_16884 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_16884,vec__16841,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_16884,vec__16841,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__16842){
var vec__16843 = p__16842;
var dv = cljs.core.nth.call(null,vec__16843,(0),null);
var udt = cljs.core.nth.call(null,vec__16843,(1),null);
var _ = cljs.core.nth.call(null,vec__16843,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__16843,(3),null);
var cv = vec__16843;
if(((instant_16884 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_16884,vec__16841,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_16884,vec__16841,arg1,argn,args,state){
return (function (p1__16815_SHARP_){
return cljs.core.nth.call(null,p1__16815_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_16884,vec__16841,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_16884,vec__16841,arg1,argn,args,state){
return (function (p1__16814_SHARP_){
return cljs.core.nth.call(null,p1__16814_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_16884,vec__16841,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_16884,vec__16841,arg1,argn,args,state){
return (function (k){
var vec__16844 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__16844,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16844,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__16844,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__16844,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_16884,vec__16841,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_16884,vec__16841,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__16845 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__16841,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__4485__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__4485__auto__)){
var and__4485__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__4485__auto____$1){
var or__4497__auto__ = (_QMARK_instant == null);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var vec__16849 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__16849,(0),null);
var udt = cljs.core.nth.call(null,vec__16849,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__4485__auto____$1;
}
} else {
return and__4485__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__16841,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__16841,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__16841,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__16845,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__16845,dv,vec__16841,arg1,argn,args,state){
return (function (m){
var temp__4425__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__16850 = temp__4425__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__16850,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__16850,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__16850,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__16850,(3),null);
var cv = vec__16850;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__16845,dv,vec__16841,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__16883 = function (var_args){
var p__16840 = null;
if (arguments.length > 0) {
var G__16885__i = 0, G__16885__a = new Array(arguments.length -  0);
while (G__16885__i < G__16885__a.length) {G__16885__a[G__16885__i] = arguments[G__16885__i + 0]; ++G__16885__i;}
  p__16840 = new cljs.core.IndexedSeq(G__16885__a,0);
} 
return G__16883__delegate.call(this,p__16840);};
G__16883.cljs$lang$maxFixedArity = 0;
G__16883.cljs$lang$applyTo = (function (arglist__16886){
var p__16840 = cljs.core.seq(arglist__16886);
return G__16883__delegate(p__16840);
});
G__16883.cljs$core$IFn$_invoke$arity$variadic = G__16883__delegate;
return G__16883;
})()
;
;})(state))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * A particularly cheap+simple single-val memoize. Useful for Reactjs render op
 *   caching on mobile devices, etc.
 */
taoensso.encore.memoize_1 = (function taoensso$encore$memoize_1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__16887__delegate = function (args){
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(temp__4423__auto__)){
var dv_ = temp__4423__auto__;
return cljs.core.deref.call(null,dv_);
} else {
var cache = cljs.core.swap_BANG_.call(null,cache_,((function (temp__4423__auto__,cache_){
return (function (cache){
var temp__4423__auto____$1 = cljs.core.get.call(null,cache,args);
if(cljs.core.truth_(temp__4423__auto____$1)){
var dv_ = temp__4423__auto____$1;
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (temp__4423__auto____$1,temp__4423__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(temp__4423__auto____$1,temp__4423__auto__,cache_))
,null))], true, false);
}
});})(temp__4423__auto__,cache_))
);
var dv_ = cljs.core.get.call(null,cache,args);
return cljs.core.deref.call(null,dv_);
}
};
var G__16887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16888__i = 0, G__16888__a = new Array(arguments.length -  0);
while (G__16888__i < G__16888__a.length) {G__16888__a[G__16888__i] = arguments[G__16888__i + 0]; ++G__16888__i;}
  args = new cljs.core.IndexedSeq(G__16888__a,0);
} 
return G__16887__delegate.call(this,args);};
G__16887.cljs$lang$maxFixedArity = 0;
G__16887.cljs$lang$applyTo = (function (arglist__16889){
var args = cljs.core.seq(arglist__16889);
return G__16887__delegate(args);
});
G__16887.cljs$core$IFn$_invoke$arity$variadic = G__16887__delegate;
return G__16887;
})()
;
;})(cache_))
});
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__16925){
var vec__16926 = p__16925;
var _ = cljs.core.nth.call(null,vec__16926,(0),null);
var win_ms = cljs.core.nth.call(null,vec__16926,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__16926,(2),null);
var spec = vec__16926;
return win_ms;
});})(vspecs,vstates_))
,vspecs));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__16927){
var vec__16928 = p__16927;
var _ = cljs.core.nth.call(null,vec__16928,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16928,(1),null);
var id = cljs.core.nth.call(null,vec__16928,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null),new cljs.core.Symbol(null,"nspecs","nspecs",-1621596945,null)))))].join('')))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__16929){
var vec__16945 = p__16929;
var req_id = cljs.core.nth.call(null,vec__16945,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__4485__auto__ = req_id;
if(cljs.core.truth_(and__4485__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__4485__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
var m__$1 = taoensso.encore.clj1098.call(null,m);
return cljs.core.reduce_kv.call(null,((function (m__$1,instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (m__$1,instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__16948){
var vec__16949 = p__16948;
var ___$1 = cljs.core.nth.call(null,vec__16949,(0),null);
var udt = cljs.core.nth.call(null,vec__16949,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__16949,(2),null);
var x__4828__auto__ = acc;
var y__4829__auto__ = udt;
return ((x__4828__auto__ > y__4829__auto__) ? x__4828__auto__ : y__4829__auto__);
});})(m__$1,instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(m__$1,instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m__$1,m__$1);
});})(instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__16950 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__16951 = in_vspecs;
var vec__16952 = cljs.core.nth.call(null,vec__16951,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__16952,(0),null);
var win_ms = cljs.core.nth.call(null,vec__16952,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__16952,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__16951,(1));
var vec__16953 = in_vstate;
var vec__16954 = cljs.core.nth.call(null,vec__16953,(0),null);
var ncalls = cljs.core.nth.call(null,vec__16954,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__16954,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__16953,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__4497__auto__ = (_QMARK_worst_limit_offence == null);
if(or__4497__auto__){
return or__4497__auto__;
} else {
var vec__16956 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__16956,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16956,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__16960 = next_in_vspecs;
var G__16961 = next_in_vstate;
var G__16962 = new_out_vstate;
var G__16963 = new__QMARK_worst_limit_offence;
in_vspecs = G__16960;
in_vstate = G__16961;
out_vstate = G__16962;
_QMARK_worst_limit_offence = G__16963;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__16950,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__16950,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__16950,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__16957){
var vec__16958 = p__16957;
var ncalls = cljs.core.nth.call(null,vec__16958,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__16958,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__16950,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__16959 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__16959,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16959,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__16945,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__16929 = null;
if (arguments.length > 0) {
var G__16964__i = 0, G__16964__a = new Array(arguments.length -  0);
while (G__16964__i < G__16964__a.length) {G__16964__a[G__16964__i] = arguments[G__16964__i + 0]; ++G__16964__i;}
  p__16929 = new cljs.core.IndexedSeq(G__16964__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__16929);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__16965){
var p__16929 = cljs.core.seq(arglist__16965);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__16929);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__16966__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__16966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16967__i = 0, G__16967__a = new Array(arguments.length -  0);
while (G__16967__i < G__16967__a.length) {G__16967__a[G__16967__i] = arguments[G__16967__i + 0]; ++G__16967__i;}
  args = new cljs.core.IndexedSeq(G__16967__a,0);
} 
return G__16966__delegate.call(this,args);};
G__16966.cljs$lang$maxFixedArity = 0;
G__16966.cljs$lang$applyTo = (function (arglist__16968){
var args = cljs.core.seq(arglist__16968);
return G__16966__delegate(args);
});
G__16966.cljs$core$IFn$_invoke$arity$variadic = G__16966__delegate;
return G__16966;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__4485__auto__ = typeof window !== 'undefined';
if(and__4485__auto__){
return (window["performance"]);
} else {
return and__4485__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__4497__auto__ = (perf["now"]);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__4497__auto____$1)){
return or__4497__auto____$1;
} else {
var or__4497__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__4497__auto____$2)){
return or__4497__auto____$2;
} else {
var or__4497__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__4497__auto____$3)){
return or__4497__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var f = temp__4423__auto____$1;
return ((function (f,temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4423__auto____$1,perf,temp__4423__auto__))
} else {
return ((function (temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto____$1,perf,temp__4423__auto__))
}
} else {
return ((function (temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto__))
}
})();
taoensso.encore.qb_min_times = (function taoensso$encore$qb_min_times(times){
return cljs.core.apply.call(null,cljs.core.min,times);
});
taoensso.encore.have_console_QMARK_ = typeof console !== 'undefined';

taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__4485__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__4485__auto__)){
return console.log;
} else {
return and__4485__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4423__auto__))
} else {
return ((function (temp__4423__auto__){
return (function (xs){
return null;
});
;})(temp__4423__auto__))
}
})();

taoensso.encore.console_warn = (function (){var temp__4423__auto__ = (function (){var and__4485__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__4485__auto__)){
return console.warn;
} else {
return and__4485__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4423__auto__))
} else {
return taoensso.encore.console_log;
}
})();

taoensso.encore.console_error = (function (){var temp__4423__auto__ = (function (){var and__4485__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__4485__auto__)){
return console.error;
} else {
return and__4485__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4423__auto__))
} else {
return taoensso.encore.console_log;
}
})();

if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * Log only logging calls >= <this-level>. Change val with `set!`/`binding`.
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

if(typeof taoensso.encore._STAR_log_fn_STAR_ !== 'undefined'){
} else {
/**
 * Experimental. Logger (fn [{:keys [level ?fmt xs msg_]}])->nil with:
 *    :level ; e/o #{:trace :debug :info :warn :error :fatal :report}
 *    :?fmt  ; Pattern for message formatting (when formatting)
 *    :xs    ; Raw logging call arguments (excl. pattern for message formatting)
 *    :msg_  ; Delay-wrapped formatted message string
 *  Change val with `set!`/`binding`.
 */
taoensso.encore._STAR_log_fn_STAR_ = cljs.core.with_meta((function taoensso$encore$_STAR_log_fn_STAR_(p__16969){
var map__16973 = p__16969;
var map__16973__$1 = ((((!((map__16973 == null)))?((((map__16973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16973):map__16973);
var level = cljs.core.get.call(null,map__16973__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_fmt = cljs.core.get.call(null,map__16973__$1,new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268));
var xs = cljs.core.get.call(null,map__16973__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
var msg_ = cljs.core.get.call(null,map__16973__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var G__16975_17005 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__16975_17005) {
case "warn":
taoensso.encore.console_warn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("WARN: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
case "error":
taoensso.encore.console_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("ERROR: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
case "fatal":
taoensso.encore.console_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("FATAL: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
default:
taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,msg_)], null));

}

return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),true], null));
}

taoensso.encore.log_level_sufficient_QMARK_ = (function (){var ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
var scored_levels = cljs.core.zipmap.call(null,ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
var valid_level_QMARK_ = cljs.core.set.call(null,ordered_levels);
return ((function (ordered_levels,scored_levels,valid_level_QMARK_){
return (function (level){
var current_level = taoensso.encore._STAR_log_level_STAR_;
return (scored_levels.call(null,(function (){var vec__16976 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
}catch (e16978){if((e16978 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16978;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16978;

}
}})();
var x__13043__auto__ = cljs.core.nth.call(null,vec__16976,(0),null);
var _QMARK_x_err__13044__auto__ = cljs.core.nth.call(null,vec__16976,(1),null);
var have_x_QMARK___13045__auto__ = (_QMARK_x_err__13044__auto__ == null);
var vec__16977 = ((have_x_QMARK___13045__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__13043__auto__)], null);
}catch (e16979){if((e16979 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16979;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16979;

}
}})():null);
var pass_QMARK___13046__auto__ = cljs.core.nth.call(null,vec__16977,(0),null);
var _QMARK_pred_err__13047__auto__ = cljs.core.nth.call(null,vec__16977,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto__)){
return x__13043__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1777,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"level","level",-1363938217,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___13045__auto__)?x__13043__auto__:_QMARK_x_err__13044__auto__),_QMARK_pred_err__13047__auto__);
}
})()) >= scored_levels.call(null,(function (){var vec__16980 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_level], null);
}catch (e16982){if((e16982 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16982;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16982;

}
}})();
var x__13043__auto__ = cljs.core.nth.call(null,vec__16980,(0),null);
var _QMARK_x_err__13044__auto__ = cljs.core.nth.call(null,vec__16980,(1),null);
var have_x_QMARK___13045__auto__ = (_QMARK_x_err__13044__auto__ == null);
var vec__16981 = ((have_x_QMARK___13045__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__13043__auto__)], null);
}catch (e16983){if((e16983 instanceof java.lang.Throwable)){
var t__12927__auto__ = e16983;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e16983;

}
}})():null);
var pass_QMARK___13046__auto__ = cljs.core.nth.call(null,vec__16981,(0),null);
var _QMARK_pred_err__13047__auto__ = cljs.core.nth.call(null,vec__16981,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto__)){
return x__13043__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1778,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"current-level","current-level",1628605637,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___13045__auto__)?x__13043__auto__:_QMARK_x_err__13044__auto__),_QMARK_pred_err__13047__auto__);
}
})()));
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();


taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17007 = arguments.length;
var i__5556__auto___17008 = (0);
while(true){
if((i__5556__auto___17008 < len__5555__auto___17007)){
args__5562__auto__.push((arguments[i__5556__auto___17008]));

var G__17009 = (i__5556__auto___17008 + (1));
i__5556__auto___17008 = G__17009;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((0) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((0)),(0))):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5563__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq16984){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16984));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17010 = arguments.length;
var i__5556__auto___17011 = (0);
while(true){
if((i__5556__auto___17011 < len__5555__auto___17010)){
args__5562__auto__.push((arguments[i__5556__auto___17011]));

var G__17012 = (i__5556__auto___17011 + (1));
i__5556__auto___17011 = G__17012;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((0) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5563__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return taoensso.encore.spaced_str.call(null,xs);
}),null))], null));

return null;
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq16985){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16985));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17013 = arguments.length;
var i__5556__auto___17014 = (0);
while(true){
if((i__5556__auto___17014 < len__5555__auto___17013)){
args__5562__auto__.push((arguments[i__5556__auto___17014]));

var G__17015 = (i__5556__auto___17014 + (1));
i__5556__auto___17014 = G__17015;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268),fmt,new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,taoensso.encore.format,fmt,xs);
}),null))], null));

return null;
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq16986){
var G__16987 = cljs.core.first.call(null,seq16986);
var seq16986__$1 = cljs.core.next.call(null,seq16986);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__16987,seq16986__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17016 = arguments.length;
var i__5556__auto___17017 = (0);
while(true){
if((i__5556__auto___17017 < len__5555__auto___17016)){
args__5562__auto__.push((arguments[i__5556__auto___17017]));

var G__17018 = (i__5556__auto___17017 + (1));
i__5556__auto___17017 = G__17018;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((0) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5563__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq16988){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16988));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17019 = arguments.length;
var i__5556__auto___17020 = (0);
while(true){
if((i__5556__auto___17020 < len__5555__auto___17019)){
args__5562__auto__.push((arguments[i__5556__auto___17020]));

var G__17021 = (i__5556__auto___17020 + (1));
i__5556__auto___17020 = G__17021;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq16989){
var G__16990 = cljs.core.first.call(null,seq16989);
var seq16989__$1 = cljs.core.next.call(null,seq16989);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__16990,seq16989__$1);
});

var logf_STAR__17022 = (function (level,fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_level_sufficient_QMARK_.call(null,level))){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268),fmt,new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,taoensso.encore.format,fmt,xs);
}),null))], null));

return null;
} else {
return null;
}
});
taoensso.encore.tracef = ((function (logf_STAR__17022){
return (function taoensso$encore$tracef(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17023 = arguments.length;
var i__5556__auto___17024 = (0);
while(true){
if((i__5556__auto___17024 < len__5555__auto___17023)){
args__5562__auto__.push((arguments[i__5556__auto___17024]));

var G__17025 = (i__5556__auto___17024 + (1));
i__5556__auto___17024 = G__17025;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});})(logf_STAR__17022))
;

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__17022){
return (function (fmt,xs){
return logf_STAR__17022.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),fmt,xs);
});})(logf_STAR__17022))
;

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = ((function (logf_STAR__17022){
return (function (seq16991){
var G__16992 = cljs.core.first.call(null,seq16991);
var seq16991__$1 = cljs.core.next.call(null,seq16991);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__16992,seq16991__$1);
});})(logf_STAR__17022))
;

taoensso.encore.debugf = ((function (logf_STAR__17022){
return (function taoensso$encore$debugf(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17026 = arguments.length;
var i__5556__auto___17027 = (0);
while(true){
if((i__5556__auto___17027 < len__5555__auto___17026)){
args__5562__auto__.push((arguments[i__5556__auto___17027]));

var G__17028 = (i__5556__auto___17027 + (1));
i__5556__auto___17027 = G__17028;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});})(logf_STAR__17022))
;

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__17022){
return (function (fmt,xs){
return logf_STAR__17022.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),fmt,xs);
});})(logf_STAR__17022))
;

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = ((function (logf_STAR__17022){
return (function (seq16993){
var G__16994 = cljs.core.first.call(null,seq16993);
var seq16993__$1 = cljs.core.next.call(null,seq16993);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__16994,seq16993__$1);
});})(logf_STAR__17022))
;

taoensso.encore.infof = ((function (logf_STAR__17022){
return (function taoensso$encore$infof(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17029 = arguments.length;
var i__5556__auto___17030 = (0);
while(true){
if((i__5556__auto___17030 < len__5555__auto___17029)){
args__5562__auto__.push((arguments[i__5556__auto___17030]));

var G__17031 = (i__5556__auto___17030 + (1));
i__5556__auto___17030 = G__17031;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});})(logf_STAR__17022))
;

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__17022){
return (function (fmt,xs){
return logf_STAR__17022.call(null,new cljs.core.Keyword(null,"info","info",-317069002),fmt,xs);
});})(logf_STAR__17022))
;

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = ((function (logf_STAR__17022){
return (function (seq16995){
var G__16996 = cljs.core.first.call(null,seq16995);
var seq16995__$1 = cljs.core.next.call(null,seq16995);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__16996,seq16995__$1);
});})(logf_STAR__17022))
;

taoensso.encore.warnf = ((function (logf_STAR__17022){
return (function taoensso$encore$warnf(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17032 = arguments.length;
var i__5556__auto___17033 = (0);
while(true){
if((i__5556__auto___17033 < len__5555__auto___17032)){
args__5562__auto__.push((arguments[i__5556__auto___17033]));

var G__17034 = (i__5556__auto___17033 + (1));
i__5556__auto___17033 = G__17034;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});})(logf_STAR__17022))
;

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__17022){
return (function (fmt,xs){
return logf_STAR__17022.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),fmt,xs);
});})(logf_STAR__17022))
;

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = ((function (logf_STAR__17022){
return (function (seq16997){
var G__16998 = cljs.core.first.call(null,seq16997);
var seq16997__$1 = cljs.core.next.call(null,seq16997);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__16998,seq16997__$1);
});})(logf_STAR__17022))
;

taoensso.encore.errorf = ((function (logf_STAR__17022){
return (function taoensso$encore$errorf(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17035 = arguments.length;
var i__5556__auto___17036 = (0);
while(true){
if((i__5556__auto___17036 < len__5555__auto___17035)){
args__5562__auto__.push((arguments[i__5556__auto___17036]));

var G__17037 = (i__5556__auto___17036 + (1));
i__5556__auto___17036 = G__17037;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});})(logf_STAR__17022))
;

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__17022){
return (function (fmt,xs){
return logf_STAR__17022.call(null,new cljs.core.Keyword(null,"error","error",-978969032),fmt,xs);
});})(logf_STAR__17022))
;

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = ((function (logf_STAR__17022){
return (function (seq16999){
var G__17000 = cljs.core.first.call(null,seq16999);
var seq16999__$1 = cljs.core.next.call(null,seq16999);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__17000,seq16999__$1);
});})(logf_STAR__17022))
;

taoensso.encore.fatalf = ((function (logf_STAR__17022){
return (function taoensso$encore$fatalf(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17038 = arguments.length;
var i__5556__auto___17039 = (0);
while(true){
if((i__5556__auto___17039 < len__5555__auto___17038)){
args__5562__auto__.push((arguments[i__5556__auto___17039]));

var G__17040 = (i__5556__auto___17039 + (1));
i__5556__auto___17039 = G__17040;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});})(logf_STAR__17022))
;

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__17022){
return (function (fmt,xs){
return logf_STAR__17022.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),fmt,xs);
});})(logf_STAR__17022))
;

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = ((function (logf_STAR__17022){
return (function (seq17001){
var G__17002 = cljs.core.first.call(null,seq17001);
var seq17001__$1 = cljs.core.next.call(null,seq17001);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__17002,seq17001__$1);
});})(logf_STAR__17022))
;

taoensso.encore.reportf = ((function (logf_STAR__17022){
return (function taoensso$encore$reportf(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17041 = arguments.length;
var i__5556__auto___17042 = (0);
while(true){
if((i__5556__auto___17042 < len__5555__auto___17041)){
args__5562__auto__.push((arguments[i__5556__auto___17042]));

var G__17043 = (i__5556__auto___17042 + (1));
i__5556__auto___17042 = G__17043;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});})(logf_STAR__17022))
;

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__17022){
return (function (fmt,xs){
return logf_STAR__17022.call(null,new cljs.core.Keyword(null,"report","report",1394055010),fmt,xs);
});})(logf_STAR__17022))
;

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = ((function (logf_STAR__17022){
return (function (seq17003){
var G__17004 = cljs.core.first.call(null,seq17003);
var seq17003__$1 = cljs.core.next.call(null,seq17003);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__17004,seq17003__$1);
});})(logf_STAR__17022))
;
/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if((function (){
var vec__17049_17054 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);
}catch (e17051){if((e17051 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17051;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17051;

}
}})();
var x__13043__auto___17055 = cljs.core.nth.call(null,vec__17049_17054,(0),null);
var _QMARK_x_err__13044__auto___17056 = cljs.core.nth.call(null,vec__17049_17054,(1),null);
var have_x_QMARK___13045__auto___17057 = (_QMARK_x_err__13044__auto___17056 == null);
var vec__17050_17058 = ((have_x_QMARK___13045__auto___17057)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__13043__auto___17055)], null);
}catch (e17052){if((e17052 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17052;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17052;

}
}})():null);
var pass_QMARK___13046__auto___17059 = cljs.core.nth.call(null,vec__17050_17058,(0),null);
var _QMARK_pred_err__13047__auto___17060 = cljs.core.nth.call(null,vec__17050_17058,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___17059)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"params","params",-1943919534,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___13045__auto___17057)?x__13043__auto___17055:_QMARK_x_err__13044__auto___17056),_QMARK_pred_err__13047__auto___17060);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
})());
var G__17053 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__17053) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000}
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__17064,callback){
var map__17086 = p__17064;
var map__17086__$1 = ((((!((map__17086 == null)))?((((map__17086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17086):map__17086);
var opts = map__17086__$1;
var method = cljs.core.get.call(null,map__17086__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__17086__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__17086__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__17086__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__17086__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var progress_fn = cljs.core.get.call(null,map__17086__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
if((function (){
var vec__17088_17107 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeout_ms], null);
}catch (e17090){if((e17090 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17090;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17090;

}
}})();
var x__13043__auto___17108 = cljs.core.nth.call(null,vec__17088_17107,(0),null);
var _QMARK_x_err__13044__auto___17109 = cljs.core.nth.call(null,vec__17088_17107,(1),null);
var have_x_QMARK___13045__auto___17110 = (_QMARK_x_err__13044__auto___17109 == null);
var vec__17089_17111 = ((have_x_QMARK___13045__auto___17110)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__13043__auto___17108)], null);
}catch (e17091){if((e17091 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17091;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17091;

}
}})():null);
var pass_QMARK___13046__auto___17112 = cljs.core.nth.call(null,vec__17089_17111,(0),null);
var _QMARK_pred_err__13047__auto___17113 = cljs.core.nth.call(null,vec__17089_17111,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___17112)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___13045__auto___17110)?x__13043__auto___17108:_QMARK_x_err__13044__auto___17109),_QMARK_pred_err__13047__auto___17113);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4423__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
try{var timeout_ms__$1 = (function (){var or__4497__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__17094 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__17094) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__17093 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__17093,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__17093,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__17095_17115 = xhr;
goog.events.listenOnce(G__17095_17115,goog.net.EventType.READY,((function (G__17095_17115,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__17093,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__17086,map__17086__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__17095_17115,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__17093,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__17086,map__17086__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);

goog.events.listenOnce(G__17095_17115,goog.net.EventType.COMPLETE,((function (G__17095_17115,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__17093,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__17086,map__17086__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__17101 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__17095_17115,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__17093,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__17086,map__17086__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function (p1__17063_SHARP_,p2__17062_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__17062_SHARP_,p1__17063_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__17095_17115,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__17093,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__17086,map__17086__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
;
var expr__17102 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__17101.call(null,"/edn",expr__17102))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__17101.call(null,"/json",expr__17102))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__17101.call(null,"/xml",expr__17102))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__17101.call(null,"/html",expr__17102))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__17105 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__17105) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e17104){var e = e17104;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__4497__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__17095_17115,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__17093,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__17086,map__17086__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);


var temp__4425__auto___17117 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___17117)){
var pf_17118 = temp__4425__auto___17117;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_17118,temp__4425__auto___17117,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__17093,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__17086,map__17086__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__4485__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__4485__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__4485__auto__;
}
})())?(loaded / total):null);
return pf_17118.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_17118,temp__4425__auto___17117,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__17093,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__17086,map__17086__$1,opts,method,params,headers,timeout_ms,resp_type,progress_fn))
);
} else {
}

var G__17106_17119 = xhr;
G__17106_17119.setTimeoutInterval((function (){var or__4497__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return (0);
}
})());

G__17106_17119.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e17092){if((e17092 instanceof Error)){
var e = e17092;
taoensso.encore.errorf.call(null,"`ajax-lite` error: %s",e);

cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e17092;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17124 = arguments.length;
var i__5556__auto___17125 = (0);
while(true){
if((i__5556__auto___17125 < len__5555__auto___17124)){
args__5562__auto__.push((arguments[i__5556__auto___17125]));

var G__17126 = (i__5556__auto___17125 + (1));
i__5556__auto___17125 = G__17126;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__17122){
var vec__17123 = p__17122;
var encoding = cljs.core.nth.call(null,vec__17123,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq17120){
var G__17121 = cljs.core.first.call(null,seq17120);
var seq17120__$1 = cljs.core.next.call(null,seq17120);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__17121,seq17120__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,v))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return null;
} else {
return join.call(null,(function (){var iter__5269__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__17135(s__17136){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__17136__$1 = s__17136;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17136__$1);
if(temp__4425__auto__){
var s__17136__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17136__$2)){
var c__5267__auto__ = cljs.core.chunk_first.call(null,s__17136__$2);
var size__5268__auto__ = cljs.core.count.call(null,c__5267__auto__);
var b__17138 = cljs.core.chunk_buffer.call(null,size__5268__auto__);
if((function (){var i__17137 = (0);
while(true){
if((i__17137 < size__5268__auto__)){
var vec__17141 = cljs.core._nth.call(null,c__5267__auto__,i__17137);
var k = cljs.core.nth.call(null,vec__17141,(0),null);
var v = cljs.core.nth.call(null,vec__17141,(1),null);
cljs.core.chunk_append.call(null,b__17138,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__4497__auto__ = cljs.core.seq.call(null,v);
if(or__4497__auto__){
return or__4497__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__17143 = (i__17137 + (1));
i__17137 = G__17143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17138),taoensso$encore$format_query_string_$_iter__17135.call(null,cljs.core.chunk_rest.call(null,s__17136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17138),null);
}
} else {
var vec__17142 = cljs.core.first.call(null,s__17136__$2);
var k = cljs.core.nth.call(null,vec__17142,(0),null);
var v = cljs.core.nth.call(null,vec__17142,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__4497__auto__ = cljs.core.seq.call(null,v);
if(or__4497__auto__){
return or__4497__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__17135.call(null,cljs.core.rest.call(null,s__17136__$2)));
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__5269__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4423__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cur = temp__4423__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17153 = arguments.length;
var i__5556__auto___17154 = (0);
while(true){
if((i__5556__auto___17154 < len__5555__auto___17153)){
args__5562__auto__.push((arguments[i__5556__auto___17154]));

var G__17155 = (i__5556__auto___17154 + (1));
i__5556__auto___17154 = G__17155;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__17146){
var vec__17147 = p__17146;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__17147,(0),null);
var encoding = cljs.core.nth.call(null,vec__17147,(1),null);
var _PERCENT_ = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__17147,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__17148 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__17148,(0),null);
var v = cljs.core.nth.call(null,vec__17148,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__17147,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if((function (){
var vec__17149_17156 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e17151){if((e17151 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17151;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17151;

}
}})();
var x__13043__auto___17157 = cljs.core.nth.call(null,vec__17149_17156,(0),null);
var _QMARK_x_err__13044__auto___17158 = cljs.core.nth.call(null,vec__17149_17156,(1),null);
var have_x_QMARK___13045__auto___17159 = (_QMARK_x_err__13044__auto___17158 == null);
var vec__17150_17160 = ((have_x_QMARK___13045__auto___17159)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.map_QMARK_).call(null,x__13043__auto___17157)], null);
}catch (e17152){if((e17152 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17152;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17152;

}
}})():null);
var pass_QMARK___13046__auto___17161 = cljs.core.nth.call(null,vec__17150_17160,(0),null);
var _QMARK_pred_err__13047__auto___17162 = cljs.core.nth.call(null,vec__17150_17160,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto___17161)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),((have_x_QMARK___13045__auto___17159)?x__13043__auto___17157:_QMARK_x_err__13044__auto___17158),_QMARK_pred_err__13047__auto___17162);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq17144){
var G__17145 = cljs.core.first.call(null,seq17144);
var seq17144__$1 = cljs.core.next.call(null,seq17144);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__17145,seq17144__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__17164 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__17164,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__17164,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
return [cljs.core.str(url__$1),cljs.core.str((function (){var temp__4425__auto__ = taoensso.encore.format_query_string.call(null,qmap);
if(cljs.core.truth_(temp__4425__auto__)){
var qstr = temp__4425__auto__;
return [cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return null;
}
})())].join('');
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5562__auto__ = [];
var len__5555__auto___17169 = arguments.length;
var i__5556__auto___17170 = (0);
while(true){
if((i__5556__auto___17170 < len__5555__auto___17169)){
args__5562__auto__.push((arguments[i__5556__auto___17170]));

var G__17171 = (i__5556__auto___17170 + (1));
i__5556__auto___17170 = G__17171;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__17167){
var vec__17168 = p__17167;
var nattempt = cljs.core.nth.call(null,vec__17168,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__4497__auto__ = nattempt;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq17165){
var G__17166 = cljs.core.first.call(null,seq17165);
var seq17165__$1 = cljs.core.next.call(null,seq17165);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17166,seq17165__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
if(cljs.core.truth_(x)){
var vec__17176 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_bool.call(null,x)], null);
}catch (e17178){if((e17178 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17178;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17178;

}
}})();
var x__13043__auto__ = cljs.core.nth.call(null,vec__17176,(0),null);
var _QMARK_x_err__13044__auto__ = cljs.core.nth.call(null,vec__17176,(1),null);
var have_x_QMARK___13045__auto__ = (_QMARK_x_err__13044__auto__ == null);
var vec__17177 = ((have_x_QMARK___13045__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__13043__auto__)], null);
}catch (e17179){if((e17179 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17179;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17179;

}
}})():null);
var pass_QMARK___13046__auto__ = cljs.core.nth.call(null,vec__17177,(0),null);
var _QMARK_pred_err__13047__auto__ = cljs.core.nth.call(null,vec__17177,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto__)){
return x__13043__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2137,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___13045__auto__)?x__13043__auto__:_QMARK_x_err__13044__auto__),_QMARK_pred_err__13047__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
if(cljs.core.truth_(x)){
var vec__17184 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_int.call(null,x)], null);
}catch (e17186){if((e17186 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17186;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17186;

}
}})();
var x__13043__auto__ = cljs.core.nth.call(null,vec__17184,(0),null);
var _QMARK_x_err__13044__auto__ = cljs.core.nth.call(null,vec__17184,(1),null);
var have_x_QMARK___13045__auto__ = (_QMARK_x_err__13044__auto__ == null);
var vec__17185 = ((have_x_QMARK___13045__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__13043__auto__)], null);
}catch (e17187){if((e17187 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17187;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17187;

}
}})():null);
var pass_QMARK___13046__auto__ = cljs.core.nth.call(null,vec__17185,(0),null);
var _QMARK_pred_err__13047__auto__ = cljs.core.nth.call(null,vec__17185,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto__)){
return x__13043__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2138,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___13045__auto__)?x__13043__auto__:_QMARK_x_err__13044__auto__),_QMARK_pred_err__13047__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
if(cljs.core.truth_(x)){
var vec__17192 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_float.call(null,x)], null);
}catch (e17194){if((e17194 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17194;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17194;

}
}})();
var x__13043__auto__ = cljs.core.nth.call(null,vec__17192,(0),null);
var _QMARK_x_err__13044__auto__ = cljs.core.nth.call(null,vec__17192,(1),null);
var have_x_QMARK___13045__auto__ = (_QMARK_x_err__13044__auto__ == null);
var vec__17193 = ((have_x_QMARK___13045__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__13043__auto__)], null);
}catch (e17195){if((e17195 instanceof java.lang.Throwable)){
var t__12927__auto__ = e17195;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12927__auto__], null);
} else {
throw e17195;

}
}})():null);
var pass_QMARK___13046__auto__ = cljs.core.nth.call(null,vec__17193,(0),null);
var _QMARK_pred_err__13047__auto__ = cljs.core.nth.call(null,vec__17193,(1),null);
if(cljs.core.truth_(pass_QMARK___13046__auto__)){
return x__13043__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2139,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___13045__auto__)?x__13043__auto__:_QMARK_x_err__13044__auto__),_QMARK_pred_err__13047__auto__);
}
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__17196__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__17196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17197__i = 0, G__17197__a = new Array(arguments.length -  0);
while (G__17197__i < G__17197__a.length) {G__17197__a[G__17197__i] = arguments[G__17197__i + 0]; ++G__17197__i;}
  args = new cljs.core.IndexedSeq(G__17197__a,0);
} 
return G__17196__delegate.call(this,args);};
G__17196.cljs$lang$maxFixedArity = 0;
G__17196.cljs$lang$applyTo = (function (arglist__17198){
var args = cljs.core.seq(arglist__17198);
return G__17196__delegate(args);
});
G__17196.cljs$core$IFn$_invoke$arity$variadic = G__17196__delegate;
return G__17196;
})()
;
;})(rl))
});

//# sourceMappingURL=encore.js.map