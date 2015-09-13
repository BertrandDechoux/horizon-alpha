// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.player.stat');
goog.require('cljs.core');
/**
 * A player numeric statistic with a max value.
 */
horizon_alpha.player.stat.stat = (function horizon_alpha$player$stat$stat(var_args){
var args9717 = [];
var len__5555__auto___9720 = arguments.length;
var i__5556__auto___9721 = (0);
while(true){
if((i__5556__auto___9721 < len__5555__auto___9720)){
args9717.push((arguments[i__5556__auto___9721]));

var G__9722 = (i__5556__auto___9721 + (1));
i__5556__auto___9721 = G__9722;
continue;
} else {
}
break;
}

var G__9719 = args9717.length;
switch (G__9719) {
case 1:
return horizon_alpha.player.stat.stat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return horizon_alpha.player.stat.stat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9717.length)].join('')));

}
});

horizon_alpha.player.stat.stat.cljs$core$IFn$_invoke$arity$1 = (function (max){
if((max > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"max","max",1701898075,null))))].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),max,new cljs.core.Keyword(null,"max","max",61366548),max], null);
});

horizon_alpha.player.stat.stat.cljs$core$IFn$_invoke$arity$2 = (function (current,max){
if((((0) <= current)) && ((current <= max))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(0),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"max","max",1701898075,null))))].join('')));
}

if((max > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"max","max",1701898075,null))))].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),current,new cljs.core.Keyword(null,"max","max",61366548),max], null);
});

horizon_alpha.player.stat.stat.cljs$lang$maxFixedArity = 2;
horizon_alpha.player.stat.charged_QMARK_ = (function horizon_alpha$player$stat$charged_QMARK_(p__9724){
var map__9727 = p__9724;
var map__9727__$1 = ((((!((map__9727 == null)))?((((map__9727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9727):map__9727);
var max = cljs.core.get.call(null,map__9727__$1,new cljs.core.Keyword(null,"max","max",61366548));
var current = cljs.core.get.call(null,map__9727__$1,new cljs.core.Keyword(null,"current","current",-1088038603));

return cljs.core._EQ_.call(null,max,current);
});
horizon_alpha.player.stat.clear = (function horizon_alpha$player$stat$clear(p__9729){
var map__9732 = p__9729;
var map__9732__$1 = ((((!((map__9732 == null)))?((((map__9732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9732):map__9732);
var max = cljs.core.get.call(null,map__9732__$1,new cljs.core.Keyword(null,"max","max",61366548));

return horizon_alpha.player.stat.stat.call(null,(0),max);
});
horizon_alpha.player.stat.cleared_QMARK_ = (function horizon_alpha$player$stat$cleared_QMARK_(p__9734){
var map__9737 = p__9734;
var map__9737__$1 = ((((!((map__9737 == null)))?((((map__9737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9737):map__9737);
var current = cljs.core.get.call(null,map__9737__$1,new cljs.core.Keyword(null,"current","current",-1088038603));

return cljs.core._EQ_.call(null,(0),current);
});
/**
 * Increase a stat but without being over the max value.
 */
horizon_alpha.player.stat.charge = (function horizon_alpha$player$stat$charge(var_args){
var args9739 = [];
var len__5555__auto___9742 = arguments.length;
var i__5556__auto___9743 = (0);
while(true){
if((i__5556__auto___9743 < len__5555__auto___9742)){
args9739.push((arguments[i__5556__auto___9743]));

var G__9744 = (i__5556__auto___9743 + (1));
i__5556__auto___9743 = G__9744;
continue;
} else {
}
break;
}

var G__9741 = args9739.length;
switch (G__9741) {
case 1:
return horizon_alpha.player.stat.charge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return horizon_alpha.player.stat.charge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9739.length)].join('')));

}
});

horizon_alpha.player.stat.charge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return horizon_alpha.player.stat.charge.call(null,s,(1));
});

horizon_alpha.player.stat.charge.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
var m = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(s);
var u = (new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(s) + n);
if((u < m)){
return horizon_alpha.player.stat.stat.call(null,u,m);
} else {
return horizon_alpha.player.stat.stat.call(null,m,m);
}
});

horizon_alpha.player.stat.charge.cljs$lang$maxFixedArity = 2;
horizon_alpha.player.stat.uncharge = (function horizon_alpha$player$stat$uncharge(s,n){

if(cljs.core.truth_(horizon_alpha.player.stat.cleared_QMARK_.call(null,s))){
return s;
} else {
var m = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(s);
var u = (new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(s) - n);
if((u <= (0))){
return horizon_alpha.player.stat.stat.call(null,(0),m);
} else {
return horizon_alpha.player.stat.stat.call(null,u,m);
}
}
});

//# sourceMappingURL=stat.js.map