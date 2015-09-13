// Compiled by ClojureScript 1.7.122 {}
goog.provide('taoensso.tower');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('taoensso.encore');
/**
 * "en_gb-var1" -> :en-gb-var1, etc.
 */
taoensso.tower.kw_locale = cljs.core.memoize.call(null,(function() { 
var G__16315__delegate = function (_QMARK_loc,p__16313){
var vec__16314 = p__16313;
var lang_only_QMARK_ = cljs.core.nth.call(null,vec__16314,(0),null);
var loc_name = cljs.core.name.call(null,(function (){var or__4497__auto__ = _QMARK_loc;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return new cljs.core.Keyword(null,"nil","nil",99600501);
}
})());
var loc_name__$1 = clojure.string.replace.call(null,loc_name,"_","-");
var loc_name__$2 = ((cljs.core.not.call(null,lang_only_QMARK_))?loc_name__$1:cljs.core.first.call(null,clojure.string.split.call(null,loc_name__$1,/-/)));
return cljs.core.keyword.call(null,loc_name__$2);
};
var G__16315 = function (_QMARK_loc,var_args){
var p__16313 = null;
if (arguments.length > 1) {
var G__16316__i = 0, G__16316__a = new Array(arguments.length -  1);
while (G__16316__i < G__16316__a.length) {G__16316__a[G__16316__i] = arguments[G__16316__i + 1]; ++G__16316__i;}
  p__16313 = new cljs.core.IndexedSeq(G__16316__a,0);
} 
return G__16315__delegate.call(this,_QMARK_loc,p__16313);};
G__16315.cljs$lang$maxFixedArity = 1;
G__16315.cljs$lang$applyTo = (function (arglist__16317){
var _QMARK_loc = cljs.core.first(arglist__16317);
var p__16313 = cljs.core.rest(arglist__16317);
return G__16315__delegate(_QMARK_loc,p__16313);
});
G__16315.cljs$core$IFn$_invoke$arity$variadic = G__16315__delegate;
return G__16315;
})()
);
/**
 * Alpha - subject to change.
 */
taoensso.tower.fmt_str = (function taoensso$tower$fmt_str(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16323 = arguments.length;
var i__5556__auto___16324 = (0);
while(true){
if((i__5556__auto___16324 < len__5555__auto___16323)){
args__5562__auto__.push((arguments[i__5556__auto___16324]));

var G__16325 = (i__5556__auto___16324 + (1));
i__5556__auto___16324 = G__16325;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((2) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((2)),(0))):null);
return taoensso.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5563__auto__);
});

taoensso.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic = (function (_loc,fmt,args){
return cljs.core.apply.call(null,taoensso.encore.format,(function (){var or__4497__auto__ = fmt;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return "";
}
})(),args);
});

taoensso.tower.fmt_str.cljs$lang$maxFixedArity = (2);

taoensso.tower.fmt_str.cljs$lang$applyTo = (function (seq16320){
var G__16321 = cljs.core.first.call(null,seq16320);
var seq16320__$1 = cljs.core.next.call(null,seq16320);
var G__16322 = cljs.core.first.call(null,seq16320__$1);
var seq16320__$2 = cljs.core.next.call(null,seq16320__$1);
return taoensso.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic(G__16321,G__16322,seq16320__$2);
});
taoensso.tower._STAR_tscope_STAR_ = null;
/**
 * Merges scope keywords: (scope :a.b :c/d :e) => :a.b.c.d/e
 */
taoensso.tower.scoped = cljs.core.memoize.call(null,(function() { 
var G__16327__delegate = function (ks){
return taoensso.encore.merge_keywords.call(null,ks);
};
var G__16327 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__16328__i = 0, G__16328__a = new Array(arguments.length -  0);
while (G__16328__i < G__16328__a.length) {G__16328__a[G__16328__i] = arguments[G__16328__i + 0]; ++G__16328__i;}
  ks = new cljs.core.IndexedSeq(G__16328__a,0);
} 
return G__16327__delegate.call(this,ks);};
G__16327.cljs$lang$maxFixedArity = 0;
G__16327.cljs$lang$applyTo = (function (arglist__16329){
var ks = cljs.core.seq(arglist__16329);
return G__16327__delegate(ks);
});
G__16327.cljs$core$IFn$_invoke$arity$variadic = G__16327__delegate;
return G__16327;
})()
);
taoensso.tower.tscoped = taoensso.tower.scoped;
/**
 * Returns intelligent, descending-preference vector of locale keys to search
 *   for given locale or vector of descending-preference locales.
 */
taoensso.tower.loc_tree = (function (){var loc_tree_STAR_ = cljs.core.memoize.call(null,(function (loc){
var loc_parts = clojure.string.split.call(null,cljs.core.name.call(null,taoensso.tower.kw_locale.call(null,loc)),/-/);
return cljs.core.mapv.call(null,((function (loc_parts){
return (function (p1__16330_SHARP_){
return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",p1__16330_SHARP_));
});})(loc_parts))
,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,cljs.core.butlast,loc_parts)));
}));
return ((function (loc_tree_STAR_){
return (function (loc_or_locs){
if(!(cljs.core.vector_QMARK_.call(null,loc_or_locs))){
return loc_tree_STAR_.call(null,loc_or_locs);
} else {
var lang_first_idxs = cljs.core.zipmap.call(null,taoensso.encore.distinctv.call(null,cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.peek,loc_tree_STAR_),loc_or_locs)),cljs.core.range.call(null));
var loc_score = ((function (lang_first_idxs,loc_tree_STAR_){
return (function (loc){
var tree = loc_tree_STAR_.call(null,loc);
var lang = cljs.core.peek.call(null,tree);
var nparts = cljs.core.count.call(null,tree);
return (((10) * cljs.core.get.call(null,lang_first_idxs,lang)) - nparts);
});})(lang_first_idxs,loc_tree_STAR_))
;
var locs = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,loc_tree_STAR_,loc_or_locs));
var sorted_locs = cljs.core.sort_by.call(null,loc_score,taoensso.encore.distinctv.call(null,locs));
return cljs.core.vec.call(null,sorted_locs);
}
});
;})(loc_tree_STAR_))
})();
/**
 * Implementation detail. Based on `encore/format`.
 */
taoensso.tower.default_tfmt_str = (function taoensso$tower$default_tfmt_str(var_args){
var args__5562__auto__ = [];
var len__5555__auto___16334 = arguments.length;
var i__5556__auto___16335 = (0);
while(true){
if((i__5556__auto___16335 < len__5555__auto___16334)){
args__5562__auto__.push((arguments[i__5556__auto___16335]));

var G__16336 = (i__5556__auto___16335 + (1));
i__5556__auto___16335 = G__16336;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((2) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((2)),(0))):null);
return taoensso.tower.default_tfmt_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5563__auto__);
});

taoensso.tower.default_tfmt_str.cljs$core$IFn$_invoke$arity$variadic = (function (_loc,fmt,args){
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

taoensso.tower.default_tfmt_str.cljs$lang$maxFixedArity = (2);

taoensso.tower.default_tfmt_str.cljs$lang$applyTo = (function (seq16331){
var G__16332 = cljs.core.first.call(null,seq16331);
var seq16331__$1 = cljs.core.next.call(null,seq16331);
var G__16333 = cljs.core.first.call(null,seq16331__$1);
var seq16331__$2 = cljs.core.next.call(null,seq16331__$1);
return taoensso.tower.default_tfmt_str.cljs$core$IFn$_invoke$arity$variadic(G__16332,G__16333,seq16331__$2);
});
taoensso.tower.nstr = (function taoensso$tower$nstr(x){
if((x == null)){
return "nil";
} else {
return [cljs.core.str(x)].join('');
}
});
taoensso.tower.find1 = (function taoensso$tower$find1(var_args){
var args16339 = [];
var len__5555__auto___16344 = arguments.length;
var i__5556__auto___16345 = (0);
while(true){
if((i__5556__auto___16345 < len__5555__auto___16344)){
args16339.push((arguments[i__5556__auto___16345]));

var G__16346 = (i__5556__auto___16345 + (1));
i__5556__auto___16345 = G__16346;
continue;
} else {
}
break;
}

var G__16341 = args16339.length;
switch (G__16341) {
case 4:
return taoensso.tower.find1.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.tower.find1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16339.length)].join('')));

}
});

taoensso.tower.find1.cljs$core$IFn$_invoke$arity$4 = (function (dict,scope,k,ltree){
var vec__16342 = ltree;
var l1 = cljs.core.nth.call(null,vec__16342,(0),null);
var ls = vec__16342;
var scoped_k = taoensso.tower.scoped.call(null,scope,k);
if(cljs.core.next.call(null,ls)){
return cljs.core.some.call(null,((function (vec__16342,l1,ls,scoped_k){
return (function (p1__16337_SHARP_){
return cljs.core.get_in.call(null,dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scoped_k,p1__16337_SHARP_], null));
});})(vec__16342,l1,ls,scoped_k))
,ls);
} else {
return cljs.core.get_in.call(null,dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scoped_k,l1], null));
}
});

taoensso.tower.find1.cljs$core$IFn$_invoke$arity$3 = (function (dict,k,ltree){
var vec__16343 = ltree;
var l1 = cljs.core.nth.call(null,vec__16343,(0),null);
var ls = vec__16343;
if(cljs.core.next.call(null,ls)){
return cljs.core.some.call(null,((function (vec__16343,l1,ls){
return (function (p1__16338_SHARP_){
return cljs.core.get_in.call(null,dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__16338_SHARP_], null));
});})(vec__16343,l1,ls))
,ls);
} else {
return cljs.core.get_in.call(null,dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,l1], null));
}
});

taoensso.tower.find1.cljs$lang$maxFixedArity = 4;
taoensso.tower.make_t_uncached = (function taoensso$tower$make_t_uncached(tconfig){
if(cljs.core.map_QMARK_.call(null,tconfig)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"tconfig","tconfig",35930630,null))))].join('')));
}

var map__16357 = tconfig;
var map__16357__$1 = ((((!((map__16357 == null)))?((((map__16357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16357):map__16357);
var compiled_dictionary = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"compiled-dictionary","compiled-dictionary",-739477055));
var dev_mode_QMARK_ = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091));
var fallback_locale = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"fallback-locale","fallback-locale",-1300697761),new cljs.core.Keyword(null,"en","en",88457073));
var scope_fn = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"scope-fn","scope-fn",-1139485860),((function (map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale){
return (function (){
return taoensso.tower._STAR_tscope_STAR_;
});})(map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale))
);
var fmt_fn = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"fmt-fn","fmt-fn",1822593570),taoensso.tower.default_tfmt_str);
var log_missing_translation_fn = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"log-missing-translation-fn","log-missing-translation-fn",-1222017068),((function (map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn){
return (function (p__16359){
var map__16360 = p__16359;
var map__16360__$1 = ((((!((map__16360 == null)))?((((map__16360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16360):map__16360);
var args = map__16360__$1;
var dev_mode_QMARK___$1 = cljs.core.get.call(null,map__16360__$1,new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091));
var pattern = "Missing-translation: %s";
if(cljs.core.truth_(dev_mode_QMARK___$1)){
return taoensso.encore.debugf.call(null,pattern,args);
} else {
return taoensso.encore.warnf.call(null,pattern,args);
}
});})(map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn))
);
var cache_locales_QMARK_ = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"cache-locales?","cache-locales?",-2101196885),true);
var _ = (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"compiled-dictionary","compiled-dictionary",-739477055).cljs$core$IFn$_invoke$arity$1(tconfig))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Missing tconfig key: :compiled-dictionary"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Keyword(null,"compiled-dictionary","compiled-dictionary",-739477055),new cljs.core.Symbol(null,"tconfig","tconfig",35930630,null))))].join('')));
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865).cljs$core$IFn$_invoke$arity$1(tconfig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Invalid tconfig key: :dictionary"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),new cljs.core.Symbol(null,"tconfig","tconfig",35930630,null)))))].join('')));
}
})()
;
var loc_tree_STAR_ = (cljs.core.truth_(cache_locales_QMARK_)?cljs.core.memoize.call(null,taoensso.tower.loc_tree):taoensso.tower.loc_tree);
var get_dict = ((function (map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_){
return (function (){
return compiled_dictionary;
});})(map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_))
;
return ((function (map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict){
return (function() { 
var taoensso$tower$make_t_uncached_$_new_t__delegate = function (l_or_ls,k_or_ks,fmt_args){
var dict = get_dict.call(null);
var ks = ((cljs.core.vector_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null));
var ls = ((cljs.core.vector_QMARK_.call(null,l_or_ls))?l_or_ls:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_or_ls], null));
var vec__16363 = ls;
var l1 = cljs.core.nth.call(null,vec__16363,(0),null);
var scope = scope_fn.call(null);
var ks_QMARK_ = cljs.core.vector_QMARK_.call(null,k_or_ks);
var tr = (function (){var or__4497__auto__ = (function (){var ltree = loc_tree_STAR_.call(null,ls);
if(ks_QMARK_){
return cljs.core.some.call(null,((function (ltree,dict,ks,ls,vec__16363,l1,scope,ks_QMARK_,map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict){
return (function (p1__16348_SHARP_){
return taoensso.tower.find1.call(null,dict,scope,p1__16348_SHARP_,ltree);
});})(ltree,dict,ks,ls,vec__16363,l1,scope,ks_QMARK_,map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict))
,cljs.core.take_while.call(null,cljs.core.keyword_QMARK_,ks));
} else {
return taoensso.tower.find1.call(null,dict,scope,k_or_ks,ltree);
}
})();
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
var last_k = cljs.core.peek.call(null,ks);
if(!((last_k instanceof cljs.core.Keyword))){
if((last_k == null)){
return new cljs.core.Keyword("taoensso.tower","nil","taoensso.tower/nil",-738257546);
} else {
return last_k;
}
} else {
var temp__4425__auto___16364 = log_missing_translation_fn;
if(cljs.core.truth_(temp__4425__auto___16364)){
var log_f_16365 = temp__4425__auto___16364;
log_f_16365.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"locales","locales",1785635955),ls,new cljs.core.Keyword(null,"scope","scope",-439358418),scope,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091),dev_mode_QMARK_], null));
} else {
}

var or__4497__auto____$1 = (function (){var ltree = loc_tree_STAR_.call(null,fallback_locale);
if(ks_QMARK_){
return cljs.core.some.call(null,((function (ltree,last_k,or__4497__auto__,dict,ks,ls,vec__16363,l1,scope,ks_QMARK_,map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict){
return (function (p1__16349_SHARP_){
return taoensso.tower.find1.call(null,dict,scope,p1__16349_SHARP_,ltree);
});})(ltree,last_k,or__4497__auto__,dict,ks,ls,vec__16363,l1,scope,ks_QMARK_,map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict))
,ks);
} else {
return taoensso.tower.find1.call(null,dict,scope,k_or_ks,ltree);
}
})();
if(cljs.core.truth_(or__4497__auto____$1)){
return or__4497__auto____$1;
} else {
var ltree = loc_tree_STAR_.call(null,cljs.core.conj.call(null,ls,fallback_locale));
var temp__4425__auto__ = taoensso.tower.find1.call(null,dict,new cljs.core.Keyword(null,"missing","missing",362507769),ltree);
if(cljs.core.truth_(temp__4425__auto__)){
var pattern = temp__4425__auto__;
return fmt_fn.call(null,l1,pattern,taoensso.tower.nstr.call(null,ls),taoensso.tower.nstr.call(null,scope),taoensso.tower.nstr.call(null,ks));
} else {
return null;
}
}
}
}
})();
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,tr,new cljs.core.Keyword("taoensso.tower","nil","taoensso.tower/nil",-738257546)))){
return null;
} else {
var tr__$1 = (function (){var or__4497__auto__ = tr;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return "";
}
})();
if((fmt_args == null)){
return tr__$1;
} else {
return cljs.core.apply.call(null,fmt_fn,l1,tr__$1,fmt_args);
}
}
};
var taoensso$tower$make_t_uncached_$_new_t = function (l_or_ls,k_or_ks,var_args){
var fmt_args = null;
if (arguments.length > 2) {
var G__16366__i = 0, G__16366__a = new Array(arguments.length -  2);
while (G__16366__i < G__16366__a.length) {G__16366__a[G__16366__i] = arguments[G__16366__i + 2]; ++G__16366__i;}
  fmt_args = new cljs.core.IndexedSeq(G__16366__a,0);
} 
return taoensso$tower$make_t_uncached_$_new_t__delegate.call(this,l_or_ls,k_or_ks,fmt_args);};
taoensso$tower$make_t_uncached_$_new_t.cljs$lang$maxFixedArity = 2;
taoensso$tower$make_t_uncached_$_new_t.cljs$lang$applyTo = (function (arglist__16367){
var l_or_ls = cljs.core.first(arglist__16367);
arglist__16367 = cljs.core.next(arglist__16367);
var k_or_ks = cljs.core.first(arglist__16367);
var fmt_args = cljs.core.rest(arglist__16367);
return taoensso$tower$make_t_uncached_$_new_t__delegate(l_or_ls,k_or_ks,fmt_args);
});
taoensso$tower$make_t_uncached_$_new_t.cljs$core$IFn$_invoke$arity$variadic = taoensso$tower$make_t_uncached_$_new_t__delegate;
return taoensso$tower$make_t_uncached_$_new_t;
})()
;
;})(map__16357,map__16357__$1,compiled_dictionary,dev_mode_QMARK_,fallback_locale,scope_fn,fmt_fn,log_missing_translation_fn,cache_locales_QMARK_,_,loc_tree_STAR_,get_dict))
});
taoensso.tower.make_t_cached = cljs.core.memoize.call(null,taoensso.tower.make_t_uncached);
taoensso.tower.make_t = taoensso.tower.make_t_uncached;

//# sourceMappingURL=tower.js.map