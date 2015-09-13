// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async18632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18632 = (function (fn_handler,f,meta18633){
this.fn_handler = fn_handler;
this.f = f;
this.meta18633 = meta18633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18634,meta18633__$1){
var self__ = this;
var _18634__$1 = this;
return (new cljs.core.async.t_cljs$core$async18632(self__.fn_handler,self__.f,meta18633__$1));
});

cljs.core.async.t_cljs$core$async18632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18634){
var self__ = this;
var _18634__$1 = this;
return self__.meta18633;
});

cljs.core.async.t_cljs$core$async18632.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta18633","meta18633",1998009030,null)], null);
});

cljs.core.async.t_cljs$core$async18632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18632";

cljs.core.async.t_cljs$core$async18632.cljs$lang$ctorPrWriter = (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async18632");
});

cljs.core.async.__GT_t_cljs$core$async18632 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async18632(fn_handler__$1,f__$1,meta18633){
return (new cljs.core.async.t_cljs$core$async18632(fn_handler__$1,f__$1,meta18633));
});

}

return (new cljs.core.async.t_cljs$core$async18632(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer. If buf-or-n is a number,
 *   will create and use a fixed buffer of that size.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args18637 = [];
var len__5555__auto___18640 = arguments.length;
var i__5556__auto___18641 = (0);
while(true){
if((i__5556__auto___18641 < len__5555__auto___18640)){
args18637.push((arguments[i__5556__auto___18641]));

var G__18642 = (i__5556__auto___18641 + (1));
i__5556__auto___18641 = G__18642;
continue;
} else {
}
break;
}

var G__18639 = args18637.length;
switch (G__18639) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18637.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 1;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args18644 = [];
var len__5555__auto___18647 = arguments.length;
var i__5556__auto___18648 = (0);
while(true){
if((i__5556__auto___18648 < len__5555__auto___18647)){
args18644.push((arguments[i__5556__auto___18648]));

var G__18649 = (i__5556__auto___18648 + (1));
i__5556__auto___18648 = G__18649;
continue;
} else {
}
break;
}

var G__18646 = args18644.length;
switch (G__18646) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18644.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18651 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18651);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18651,ret){
return (function (){
return fn1.call(null,val_18651);
});})(val_18651,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(){
return null;
});
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args18652 = [];
var len__5555__auto___18655 = arguments.length;
var i__5556__auto___18656 = (0);
while(true){
if((i__5556__auto___18656 < len__5555__auto___18655)){
args18652.push((arguments[i__5556__auto___18656]));

var G__18657 = (i__5556__auto___18656 + (1));
i__5556__auto___18656 = G__18657;
continue;
} else {
}
break;
}

var G__18654 = args18652.length;
switch (G__18654) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18652.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
return cljs.core.async.put_BANG_.call(null,port,val,cljs.core.async.nop);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn0){
return cljs.core.async.put_BANG_.call(null,port,val,fn0,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));
if(cljs.core.truth_((function (){var and__4485__auto__ = ret;
if(cljs.core.truth_(and__4485__auto__)){
return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else {
return and__4485__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
fn0.call(null);
} else {
cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else {
}

return null;
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5400__auto___18659 = n;
var x_18660 = (0);
while(true){
if((x_18660 < n__5400__auto___18659)){
(a[x_18660] = (0));

var G__18661 = (x_18660 + (1));
x_18660 = G__18661;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__18662 = (i + (1));
i = G__18662;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18666 = (function (alt_flag,flag,meta18667){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18667 = meta18667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18668,meta18667__$1){
var self__ = this;
var _18668__$1 = this;
return (new cljs.core.async.t_cljs$core$async18666(self__.alt_flag,self__.flag,meta18667__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18668){
var self__ = this;
var _18668__$1 = this;
return self__.meta18667;
});})(flag))
;

cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18666.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18667","meta18667",540659168,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18666";

cljs.core.async.t_cljs$core$async18666.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async18666");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18666 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18666(alt_flag__$1,flag__$1,meta18667){
return (new cljs.core.async.t_cljs$core$async18666(alt_flag__$1,flag__$1,meta18667));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18666(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18672 = (function (alt_handler,flag,cb,meta18673){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18673 = meta18673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18674,meta18673__$1){
var self__ = this;
var _18674__$1 = this;
return (new cljs.core.async.t_cljs$core$async18672(self__.alt_handler,self__.flag,self__.cb,meta18673__$1));
});

cljs.core.async.t_cljs$core$async18672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18674){
var self__ = this;
var _18674__$1 = this;
return self__.meta18673;
});

cljs.core.async.t_cljs$core$async18672.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18673","meta18673",1382883657,null)], null);
});

cljs.core.async.t_cljs$core$async18672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18672";

cljs.core.async.t_cljs$core$async18672.cljs$lang$ctorPrWriter = (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async18672");
});

cljs.core.async.__GT_t_cljs$core$async18672 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18672(alt_handler__$1,flag__$1,cb__$1,meta18673){
return (new cljs.core.async.t_cljs$core$async18672(alt_handler__$1,flag__$1,cb__$1,meta18673));
});

}

return (new cljs.core.async.t_cljs$core$async18672(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18675_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18675_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4497__auto__ = wport;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18676 = (i + (1));
i = G__18676;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4497__auto__ = ret;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4485__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4485__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4485__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 *   inside a (go ...) block. ports is a vector of channel endpoints, which
 *   can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and nil for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5562__auto__ = [];
var len__5555__auto___18682 = arguments.length;
var i__5556__auto___18683 = (0);
while(true){
if((i__5556__auto___18683 < len__5555__auto___18682)){
args__5562__auto__.push((arguments[i__5556__auto___18683]));

var G__18684 = (i__5556__auto___18683 + (1));
i__5556__auto___18683 = G__18684;
continue;
} else {
}
break;
}

var argseq__5563__auto__ = ((((1) < args__5562__auto__.length))?(new cljs.core.IndexedSeq(args__5562__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5563__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18679){
var map__18680 = p__18679;
var map__18680__$1 = ((((!((map__18680 == null)))?((((map__18680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18680):map__18680);
var opts = map__18680__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18677){
var G__18678 = cljs.core.first.call(null,seq18677);
var seq18677__$1 = cljs.core.next.call(null,seq18677);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18678,seq18677__$1);
});
/**
 * Takes a function and a source channel, and returns a channel which
 *   contains the values produced by applying f to each value taken from
 *   the source channel
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18692 = (function (map_LT_,f,ch,meta18693){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18693 = meta18693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18694,meta18693__$1){
var self__ = this;
var _18694__$1 = this;
return (new cljs.core.async.t_cljs$core$async18692(self__.map_LT_,self__.f,self__.ch,meta18693__$1));
});

cljs.core.async.t_cljs$core$async18692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18694){
var self__ = this;
var _18694__$1 = this;
return self__.meta18693;
});

cljs.core.async.t_cljs$core$async18692.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18692.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18695 = (function (map_LT_,f,ch,meta18693,_,fn1,meta18696){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18693 = meta18693;
this._ = _;
this.fn1 = fn1;
this.meta18696 = meta18696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18697,meta18696__$1){
var self__ = this;
var _18697__$1 = this;
return (new cljs.core.async.t_cljs$core$async18695(self__.map_LT_,self__.f,self__.ch,self__.meta18693,self__._,self__.fn1,meta18696__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18697){
var self__ = this;
var _18697__$1 = this;
return self__.meta18696;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18695.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18695.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18685_SHARP_){
return f1.call(null,(((p1__18685_SHARP_ == null))?null:self__.f.call(null,p1__18685_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18695.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18693","meta18693",-2056267106,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18692","cljs.core.async/t_cljs$core$async18692",540554801,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18696","meta18696",-2047984443,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18695";

cljs.core.async.t_cljs$core$async18695.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async18695");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18695 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18695(map_LT___$1,f__$1,ch__$1,meta18693__$1,___$2,fn1__$1,meta18696){
return (new cljs.core.async.t_cljs$core$async18695(map_LT___$1,f__$1,ch__$1,meta18693__$1,___$2,fn1__$1,meta18696));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18695(self__.map_LT_,self__.f,self__.ch,self__.meta18693,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4485__auto__ = ret;
if(cljs.core.truth_(and__4485__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4485__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18692.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});

cljs.core.async.t_cljs$core$async18692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18693","meta18693",-2056267106,null)], null);
});

cljs.core.async.t_cljs$core$async18692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18692";

cljs.core.async.t_cljs$core$async18692.cljs$lang$ctorPrWriter = (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async18692");
});

cljs.core.async.__GT_t_cljs$core$async18692 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18692(map_LT___$1,f__$1,ch__$1,meta18693){
return (new cljs.core.async.t_cljs$core$async18692(map_LT___$1,f__$1,ch__$1,meta18693));
});

}

return (new cljs.core.async.t_cljs$core$async18692(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a function and a target channel, and returns a channel which
 *   applies f to each value before supplying it to the target channel.
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18701 = (function (map_GT_,f,ch,meta18702){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18702 = meta18702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18703,meta18702__$1){
var self__ = this;
var _18703__$1 = this;
return (new cljs.core.async.t_cljs$core$async18701(self__.map_GT_,self__.f,self__.ch,meta18702__$1));
});

cljs.core.async.t_cljs$core$async18701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18703){
var self__ = this;
var _18703__$1 = this;
return self__.meta18702;
});

cljs.core.async.t_cljs$core$async18701.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18701.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18701.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18701.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18701.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18701.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});

cljs.core.async.t_cljs$core$async18701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a target channel, and returns a channel which\n  applies f to each value before supplying it to the target channel."], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18702","meta18702",-1090949578,null)], null);
});

cljs.core.async.t_cljs$core$async18701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18701";

cljs.core.async.t_cljs$core$async18701.cljs$lang$ctorPrWriter = (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async18701");
});

cljs.core.async.__GT_t_cljs$core$async18701 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18701(map_GT___$1,f__$1,ch__$1,meta18702){
return (new cljs.core.async.t_cljs$core$async18701(map_GT___$1,f__$1,ch__$1,meta18702));
});

}

return (new cljs.core.async.t_cljs$core$async18701(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 *   supplies only the values for which the predicate returns true to the
 *   target channel.
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18707 = (function (filter_GT_,p,ch,meta18708){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18708 = meta18708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18709,meta18708__$1){
var self__ = this;
var _18709__$1 = this;
return (new cljs.core.async.t_cljs$core$async18707(self__.filter_GT_,self__.p,self__.ch,meta18708__$1));
});

cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18709){
var self__ = this;
var _18709__$1 = this;
return self__.meta18708;
});

cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box.call(null,null);
}
});

cljs.core.async.t_cljs$core$async18707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a predicate and a target channel, and returns a channel which\n  supplies only the values for which the predicate returns true to the\n  target channel."], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18708","meta18708",625402187,null)], null);
});

cljs.core.async.t_cljs$core$async18707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18707";

cljs.core.async.t_cljs$core$async18707.cljs$lang$ctorPrWriter = (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async18707");
});

cljs.core.async.__GT_t_cljs$core$async18707 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18707(filter_GT___$1,p__$1,ch__$1,meta18708){
return (new cljs.core.async.t_cljs$core$async18707(filter_GT___$1,p__$1,ch__$1,meta18708));
});

}

return (new cljs.core.async.t_cljs$core$async18707(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 *   supplies only the values for which the predicate returns false to the
 *   target channel.
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Takes a predicate and a source channel, and returns a channel which
 *   contains only the values taken from the source channel for which the
 *   predicate returns true. The returned channel will be unbuffered by
 *   default, or a buf-or-n can be supplied. The channel will close
 *   when the source channel closes.
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args18710 = [];
var len__5555__auto___18754 = arguments.length;
var i__5556__auto___18755 = (0);
while(true){
if((i__5556__auto___18755 < len__5555__auto___18754)){
args18710.push((arguments[i__5556__auto___18755]));

var G__18756 = (i__5556__auto___18755 + (1));
i__5556__auto___18755 = G__18756;
continue;
} else {
}
break;
}

var G__18712 = args18710.length;
switch (G__18712) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18710.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6873__auto___18758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___18758,out){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___18758,out){
return (function (state_18733){
var state_val_18734 = (state_18733[(1)]);
if((state_val_18734 === (7))){
var inst_18729 = (state_18733[(2)]);
var state_18733__$1 = state_18733;
var statearr_18735_18759 = state_18733__$1;
(statearr_18735_18759[(2)] = inst_18729);

(statearr_18735_18759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (1))){
var state_18733__$1 = state_18733;
var statearr_18736_18760 = state_18733__$1;
(statearr_18736_18760[(2)] = null);

(statearr_18736_18760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (4))){
var inst_18715 = (state_18733[(7)]);
var inst_18715__$1 = (state_18733[(2)]);
var inst_18716 = (inst_18715__$1 == null);
var state_18733__$1 = (function (){var statearr_18737 = state_18733;
(statearr_18737[(7)] = inst_18715__$1);

return statearr_18737;
})();
if(cljs.core.truth_(inst_18716)){
var statearr_18738_18761 = state_18733__$1;
(statearr_18738_18761[(1)] = (5));

} else {
var statearr_18739_18762 = state_18733__$1;
(statearr_18739_18762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (6))){
var inst_18715 = (state_18733[(7)]);
var inst_18720 = p.call(null,inst_18715);
var state_18733__$1 = state_18733;
if(cljs.core.truth_(inst_18720)){
var statearr_18740_18763 = state_18733__$1;
(statearr_18740_18763[(1)] = (8));

} else {
var statearr_18741_18764 = state_18733__$1;
(statearr_18741_18764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (3))){
var inst_18731 = (state_18733[(2)]);
var state_18733__$1 = state_18733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18733__$1,inst_18731);
} else {
if((state_val_18734 === (2))){
var state_18733__$1 = state_18733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18733__$1,(4),ch);
} else {
if((state_val_18734 === (11))){
var inst_18723 = (state_18733[(2)]);
var state_18733__$1 = state_18733;
var statearr_18742_18765 = state_18733__$1;
(statearr_18742_18765[(2)] = inst_18723);

(statearr_18742_18765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (9))){
var state_18733__$1 = state_18733;
var statearr_18743_18766 = state_18733__$1;
(statearr_18743_18766[(2)] = null);

(statearr_18743_18766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (5))){
var inst_18718 = cljs.core.async.close_BANG_.call(null,out);
var state_18733__$1 = state_18733;
var statearr_18744_18767 = state_18733__$1;
(statearr_18744_18767[(2)] = inst_18718);

(statearr_18744_18767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (10))){
var inst_18726 = (state_18733[(2)]);
var state_18733__$1 = (function (){var statearr_18745 = state_18733;
(statearr_18745[(8)] = inst_18726);

return statearr_18745;
})();
var statearr_18746_18768 = state_18733__$1;
(statearr_18746_18768[(2)] = null);

(statearr_18746_18768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (8))){
var inst_18715 = (state_18733[(7)]);
var state_18733__$1 = state_18733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18733__$1,(11),out,inst_18715);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___18758,out))
;
return ((function (switch__6798__auto__,c__6873__auto___18758,out){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_18750 = [null,null,null,null,null,null,null,null,null];
(statearr_18750[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_18750[(1)] = (1));

return statearr_18750;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_18733){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_18733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e18751){if((e18751 instanceof Object)){
var ex__6802__auto__ = e18751;
var statearr_18752_18769 = state_18733;
(statearr_18752_18769[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18770 = state_18733;
state_18733 = G__18770;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_18733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_18733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___18758,out))
})();
var state__6875__auto__ = (function (){var statearr_18753 = f__6874__auto__.call(null);
(statearr_18753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___18758);

return statearr_18753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___18758,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a predicate and a source channel, and returns a channel which
 *   contains only the values taken from the source channel for which the
 *   predicate returns false. The returned channel will be unbuffered by
 *   default, or a buf-or-n can be supplied. The channel will close
 *   when the source channel closes.
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18771 = [];
var len__5555__auto___18774 = arguments.length;
var i__5556__auto___18775 = (0);
while(true){
if((i__5556__auto___18775 < len__5555__auto___18774)){
args18771.push((arguments[i__5556__auto___18775]));

var G__18776 = (i__5556__auto___18775 + (1));
i__5556__auto___18775 = G__18776;
continue;
} else {
}
break;
}

var G__18773 = args18771.length;
switch (G__18773) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18771.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6873__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto__){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto__){
return (function (state_18929){
var state_val_18930 = (state_18929[(1)]);
if((state_val_18930 === (7))){
var inst_18925 = (state_18929[(2)]);
var state_18929__$1 = state_18929;
var statearr_18931_18968 = state_18929__$1;
(statearr_18931_18968[(2)] = inst_18925);

(statearr_18931_18968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (20))){
var inst_18900 = (state_18929[(7)]);
var inst_18911 = (state_18929[(2)]);
var inst_18912 = cljs.core.next.call(null,inst_18900);
var inst_18886 = inst_18912;
var inst_18887 = null;
var inst_18888 = (0);
var inst_18889 = (0);
var state_18929__$1 = (function (){var statearr_18932 = state_18929;
(statearr_18932[(8)] = inst_18888);

(statearr_18932[(9)] = inst_18886);

(statearr_18932[(10)] = inst_18889);

(statearr_18932[(11)] = inst_18911);

(statearr_18932[(12)] = inst_18887);

return statearr_18932;
})();
var statearr_18933_18969 = state_18929__$1;
(statearr_18933_18969[(2)] = null);

(statearr_18933_18969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (1))){
var state_18929__$1 = state_18929;
var statearr_18934_18970 = state_18929__$1;
(statearr_18934_18970[(2)] = null);

(statearr_18934_18970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (4))){
var inst_18875 = (state_18929[(13)]);
var inst_18875__$1 = (state_18929[(2)]);
var inst_18876 = (inst_18875__$1 == null);
var state_18929__$1 = (function (){var statearr_18938 = state_18929;
(statearr_18938[(13)] = inst_18875__$1);

return statearr_18938;
})();
if(cljs.core.truth_(inst_18876)){
var statearr_18939_18971 = state_18929__$1;
(statearr_18939_18971[(1)] = (5));

} else {
var statearr_18940_18972 = state_18929__$1;
(statearr_18940_18972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (15))){
var state_18929__$1 = state_18929;
var statearr_18941_18973 = state_18929__$1;
(statearr_18941_18973[(2)] = null);

(statearr_18941_18973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (13))){
var inst_18888 = (state_18929[(8)]);
var inst_18886 = (state_18929[(9)]);
var inst_18889 = (state_18929[(10)]);
var inst_18887 = (state_18929[(12)]);
var inst_18896 = (state_18929[(2)]);
var inst_18897 = (inst_18889 + (1));
var tmp18935 = inst_18888;
var tmp18936 = inst_18886;
var tmp18937 = inst_18887;
var inst_18886__$1 = tmp18936;
var inst_18887__$1 = tmp18937;
var inst_18888__$1 = tmp18935;
var inst_18889__$1 = inst_18897;
var state_18929__$1 = (function (){var statearr_18942 = state_18929;
(statearr_18942[(14)] = inst_18896);

(statearr_18942[(8)] = inst_18888__$1);

(statearr_18942[(9)] = inst_18886__$1);

(statearr_18942[(10)] = inst_18889__$1);

(statearr_18942[(12)] = inst_18887__$1);

return statearr_18942;
})();
var statearr_18943_18974 = state_18929__$1;
(statearr_18943_18974[(2)] = null);

(statearr_18943_18974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (6))){
var inst_18875 = (state_18929[(13)]);
var inst_18880 = f.call(null,inst_18875);
var inst_18885 = cljs.core.seq.call(null,inst_18880);
var inst_18886 = inst_18885;
var inst_18887 = null;
var inst_18888 = (0);
var inst_18889 = (0);
var state_18929__$1 = (function (){var statearr_18944 = state_18929;
(statearr_18944[(8)] = inst_18888);

(statearr_18944[(9)] = inst_18886);

(statearr_18944[(10)] = inst_18889);

(statearr_18944[(12)] = inst_18887);

return statearr_18944;
})();
var statearr_18945_18975 = state_18929__$1;
(statearr_18945_18975[(2)] = null);

(statearr_18945_18975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (17))){
var inst_18900 = (state_18929[(7)]);
var inst_18904 = cljs.core.chunk_first.call(null,inst_18900);
var inst_18905 = cljs.core.chunk_rest.call(null,inst_18900);
var inst_18906 = cljs.core.count.call(null,inst_18904);
var inst_18886 = inst_18905;
var inst_18887 = inst_18904;
var inst_18888 = inst_18906;
var inst_18889 = (0);
var state_18929__$1 = (function (){var statearr_18946 = state_18929;
(statearr_18946[(8)] = inst_18888);

(statearr_18946[(9)] = inst_18886);

(statearr_18946[(10)] = inst_18889);

(statearr_18946[(12)] = inst_18887);

return statearr_18946;
})();
var statearr_18947_18976 = state_18929__$1;
(statearr_18947_18976[(2)] = null);

(statearr_18947_18976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (3))){
var inst_18927 = (state_18929[(2)]);
var state_18929__$1 = state_18929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18929__$1,inst_18927);
} else {
if((state_val_18930 === (12))){
var inst_18920 = (state_18929[(2)]);
var state_18929__$1 = state_18929;
var statearr_18948_18977 = state_18929__$1;
(statearr_18948_18977[(2)] = inst_18920);

(statearr_18948_18977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (2))){
var state_18929__$1 = state_18929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18929__$1,(4),in$);
} else {
if((state_val_18930 === (19))){
var inst_18915 = (state_18929[(2)]);
var state_18929__$1 = state_18929;
var statearr_18949_18978 = state_18929__$1;
(statearr_18949_18978[(2)] = inst_18915);

(statearr_18949_18978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (11))){
var inst_18900 = (state_18929[(7)]);
var inst_18886 = (state_18929[(9)]);
var inst_18900__$1 = cljs.core.seq.call(null,inst_18886);
var state_18929__$1 = (function (){var statearr_18950 = state_18929;
(statearr_18950[(7)] = inst_18900__$1);

return statearr_18950;
})();
if(inst_18900__$1){
var statearr_18951_18979 = state_18929__$1;
(statearr_18951_18979[(1)] = (14));

} else {
var statearr_18952_18980 = state_18929__$1;
(statearr_18952_18980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (9))){
var inst_18922 = (state_18929[(2)]);
var state_18929__$1 = (function (){var statearr_18953 = state_18929;
(statearr_18953[(15)] = inst_18922);

return statearr_18953;
})();
var statearr_18954_18981 = state_18929__$1;
(statearr_18954_18981[(2)] = null);

(statearr_18954_18981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (5))){
var inst_18878 = cljs.core.async.close_BANG_.call(null,out);
var state_18929__$1 = state_18929;
var statearr_18955_18982 = state_18929__$1;
(statearr_18955_18982[(2)] = inst_18878);

(statearr_18955_18982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (14))){
var inst_18900 = (state_18929[(7)]);
var inst_18902 = cljs.core.chunked_seq_QMARK_.call(null,inst_18900);
var state_18929__$1 = state_18929;
if(inst_18902){
var statearr_18956_18983 = state_18929__$1;
(statearr_18956_18983[(1)] = (17));

} else {
var statearr_18957_18984 = state_18929__$1;
(statearr_18957_18984[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (16))){
var inst_18918 = (state_18929[(2)]);
var state_18929__$1 = state_18929;
var statearr_18958_18985 = state_18929__$1;
(statearr_18958_18985[(2)] = inst_18918);

(statearr_18958_18985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (10))){
var inst_18889 = (state_18929[(10)]);
var inst_18887 = (state_18929[(12)]);
var inst_18894 = cljs.core._nth.call(null,inst_18887,inst_18889);
var state_18929__$1 = state_18929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18929__$1,(13),out,inst_18894);
} else {
if((state_val_18930 === (18))){
var inst_18900 = (state_18929[(7)]);
var inst_18909 = cljs.core.first.call(null,inst_18900);
var state_18929__$1 = state_18929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18929__$1,(20),out,inst_18909);
} else {
if((state_val_18930 === (8))){
var inst_18888 = (state_18929[(8)]);
var inst_18889 = (state_18929[(10)]);
var inst_18891 = (inst_18889 < inst_18888);
var inst_18892 = inst_18891;
var state_18929__$1 = state_18929;
if(cljs.core.truth_(inst_18892)){
var statearr_18959_18986 = state_18929__$1;
(statearr_18959_18986[(1)] = (10));

} else {
var statearr_18960_18987 = state_18929__$1;
(statearr_18960_18987[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto__))
;
return ((function (switch__6798__auto__,c__6873__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6799__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6799__auto____0 = (function (){
var statearr_18964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18964[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6799__auto__);

(statearr_18964[(1)] = (1));

return statearr_18964;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6799__auto____1 = (function (state_18929){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_18929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e18965){if((e18965 instanceof Object)){
var ex__6802__auto__ = e18965;
var statearr_18966_18988 = state_18929;
(statearr_18966_18988[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18989 = state_18929;
state_18929 = G__18989;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6799__auto__ = function(state_18929){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6799__auto____1.call(this,state_18929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6799__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6799__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto__))
})();
var state__6875__auto__ = (function (){var statearr_18967 = f__6874__auto__.call(null);
(statearr_18967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto__);

return statearr_18967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto__))
);

return c__6873__auto__;
});
/**
 * Takes a function and a source channel, and returns a channel which
 *   contains the values in each collection produced by applying f to
 *   each value taken from the source channel. f must return a
 *   collection.
 * 
 *   The returned channel will be unbuffered by default, or a buf-or-n
 *   can be supplied. The channel will close when the source channel
 *   closes.
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18990 = [];
var len__5555__auto___18993 = arguments.length;
var i__5556__auto___18994 = (0);
while(true){
if((i__5556__auto___18994 < len__5555__auto___18993)){
args18990.push((arguments[i__5556__auto___18994]));

var G__18995 = (i__5556__auto___18994 + (1));
i__5556__auto___18994 = G__18995;
continue;
} else {
}
break;
}

var G__18992 = args18990.length;
switch (G__18992) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18990.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a function and a target channel, and returns a channel which
 *   applies f to each value put, then supplies each element of the result
 *   to the target channel. f must return a collection.
 * 
 *   The returned channel will be unbuffered by default, or a buf-or-n
 *   can be supplied. The target channel will be closed when the source
 *   channel closes.
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18997 = [];
var len__5555__auto___19000 = arguments.length;
var i__5556__auto___19001 = (0);
while(true){
if((i__5556__auto___19001 < len__5555__auto___19000)){
args18997.push((arguments[i__5556__auto___19001]));

var G__19002 = (i__5556__auto___19001 + (1));
i__5556__auto___19001 = G__19002;
continue;
} else {
}
break;
}

var G__18999 = args18997.length;
switch (G__18999) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18997.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel. By default, the to channel will be closed when the
 *   from channel closes, but can be determined by the close?
 *   parameter.
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19004 = [];
var len__5555__auto___19047 = arguments.length;
var i__5556__auto___19048 = (0);
while(true){
if((i__5556__auto___19048 < len__5555__auto___19047)){
args19004.push((arguments[i__5556__auto___19048]));

var G__19049 = (i__5556__auto___19048 + (1));
i__5556__auto___19048 = G__19049;
continue;
} else {
}
break;
}

var G__19006 = args19004.length;
switch (G__19006) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19004.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6873__auto___19051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___19051){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___19051){
return (function (state_19026){
var state_val_19027 = (state_19026[(1)]);
if((state_val_19027 === (7))){
var inst_19022 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
var statearr_19028_19052 = state_19026__$1;
(statearr_19028_19052[(2)] = inst_19022);

(statearr_19028_19052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (1))){
var state_19026__$1 = state_19026;
var statearr_19029_19053 = state_19026__$1;
(statearr_19029_19053[(2)] = null);

(statearr_19029_19053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (4))){
var inst_19009 = (state_19026[(7)]);
var inst_19009__$1 = (state_19026[(2)]);
var inst_19010 = (inst_19009__$1 == null);
var state_19026__$1 = (function (){var statearr_19030 = state_19026;
(statearr_19030[(7)] = inst_19009__$1);

return statearr_19030;
})();
if(cljs.core.truth_(inst_19010)){
var statearr_19031_19054 = state_19026__$1;
(statearr_19031_19054[(1)] = (5));

} else {
var statearr_19032_19055 = state_19026__$1;
(statearr_19032_19055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (6))){
var inst_19009 = (state_19026[(7)]);
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19026__$1,(11),to,inst_19009);
} else {
if((state_val_19027 === (3))){
var inst_19024 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19026__$1,inst_19024);
} else {
if((state_val_19027 === (2))){
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19026__$1,(4),from);
} else {
if((state_val_19027 === (11))){
var inst_19019 = (state_19026[(2)]);
var state_19026__$1 = (function (){var statearr_19033 = state_19026;
(statearr_19033[(8)] = inst_19019);

return statearr_19033;
})();
var statearr_19034_19056 = state_19026__$1;
(statearr_19034_19056[(2)] = null);

(statearr_19034_19056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (9))){
var state_19026__$1 = state_19026;
var statearr_19035_19057 = state_19026__$1;
(statearr_19035_19057[(2)] = null);

(statearr_19035_19057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (5))){
var state_19026__$1 = state_19026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19036_19058 = state_19026__$1;
(statearr_19036_19058[(1)] = (8));

} else {
var statearr_19037_19059 = state_19026__$1;
(statearr_19037_19059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (10))){
var inst_19016 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
var statearr_19038_19060 = state_19026__$1;
(statearr_19038_19060[(2)] = inst_19016);

(statearr_19038_19060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (8))){
var inst_19013 = cljs.core.async.close_BANG_.call(null,to);
var state_19026__$1 = state_19026;
var statearr_19039_19061 = state_19026__$1;
(statearr_19039_19061[(2)] = inst_19013);

(statearr_19039_19061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___19051))
;
return ((function (switch__6798__auto__,c__6873__auto___19051){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_19043 = [null,null,null,null,null,null,null,null,null];
(statearr_19043[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_19043[(1)] = (1));

return statearr_19043;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_19026){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_19026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e19044){if((e19044 instanceof Object)){
var ex__6802__auto__ = e19044;
var statearr_19045_19062 = state_19026;
(statearr_19045_19062[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19063 = state_19026;
state_19026 = G__19063;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_19026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_19026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___19051))
})();
var state__6875__auto__ = (function (){var statearr_19046 = f__6874__auto__.call(null);
(statearr_19046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___19051);

return statearr_19046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___19051))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19064 = [];
var len__5555__auto___19110 = arguments.length;
var i__5556__auto___19111 = (0);
while(true){
if((i__5556__auto___19111 < len__5555__auto___19110)){
args19064.push((arguments[i__5556__auto___19111]));

var G__19112 = (i__5556__auto___19111 + (1));
i__5556__auto___19111 = G__19112;
continue;
} else {
}
break;
}

var G__19066 = args19064.length;
switch (G__19066) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19064.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6873__auto___19114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___19114,tc,fc){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___19114,tc,fc){
return (function (state_19088){
var state_val_19089 = (state_19088[(1)]);
if((state_val_19089 === (7))){
var inst_19084 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
var statearr_19090_19115 = state_19088__$1;
(statearr_19090_19115[(2)] = inst_19084);

(statearr_19090_19115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (1))){
var state_19088__$1 = state_19088;
var statearr_19091_19116 = state_19088__$1;
(statearr_19091_19116[(2)] = null);

(statearr_19091_19116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (4))){
var inst_19069 = (state_19088[(7)]);
var inst_19069__$1 = (state_19088[(2)]);
var inst_19070 = (inst_19069__$1 == null);
var state_19088__$1 = (function (){var statearr_19092 = state_19088;
(statearr_19092[(7)] = inst_19069__$1);

return statearr_19092;
})();
if(cljs.core.truth_(inst_19070)){
var statearr_19093_19117 = state_19088__$1;
(statearr_19093_19117[(1)] = (5));

} else {
var statearr_19094_19118 = state_19088__$1;
(statearr_19094_19118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (6))){
var inst_19069 = (state_19088[(7)]);
var inst_19075 = p.call(null,inst_19069);
var state_19088__$1 = state_19088;
if(cljs.core.truth_(inst_19075)){
var statearr_19095_19119 = state_19088__$1;
(statearr_19095_19119[(1)] = (9));

} else {
var statearr_19096_19120 = state_19088__$1;
(statearr_19096_19120[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (3))){
var inst_19086 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19088__$1,inst_19086);
} else {
if((state_val_19089 === (2))){
var state_19088__$1 = state_19088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19088__$1,(4),ch);
} else {
if((state_val_19089 === (11))){
var inst_19069 = (state_19088[(7)]);
var inst_19079 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19088__$1,(8),inst_19079,inst_19069);
} else {
if((state_val_19089 === (9))){
var state_19088__$1 = state_19088;
var statearr_19097_19121 = state_19088__$1;
(statearr_19097_19121[(2)] = tc);

(statearr_19097_19121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (5))){
var inst_19072 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19073 = cljs.core.async.close_BANG_.call(null,fc);
var state_19088__$1 = (function (){var statearr_19098 = state_19088;
(statearr_19098[(8)] = inst_19072);

return statearr_19098;
})();
var statearr_19099_19122 = state_19088__$1;
(statearr_19099_19122[(2)] = inst_19073);

(statearr_19099_19122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (10))){
var state_19088__$1 = state_19088;
var statearr_19100_19123 = state_19088__$1;
(statearr_19100_19123[(2)] = fc);

(statearr_19100_19123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (8))){
var inst_19081 = (state_19088[(2)]);
var state_19088__$1 = (function (){var statearr_19101 = state_19088;
(statearr_19101[(9)] = inst_19081);

return statearr_19101;
})();
var statearr_19102_19124 = state_19088__$1;
(statearr_19102_19124[(2)] = null);

(statearr_19102_19124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___19114,tc,fc))
;
return ((function (switch__6798__auto__,c__6873__auto___19114,tc,fc){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_19106 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19106[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_19106[(1)] = (1));

return statearr_19106;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_19088){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_19088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e19107){if((e19107 instanceof Object)){
var ex__6802__auto__ = e19107;
var statearr_19108_19125 = state_19088;
(statearr_19108_19125[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19126 = state_19088;
state_19088 = G__19126;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_19088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_19088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___19114,tc,fc))
})();
var state__6875__auto__ = (function (){var statearr_19109 = f__6874__auto__.call(null);
(statearr_19109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___19114);

return statearr_19109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___19114,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6873__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto__){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto__){
return (function (state_19173){
var state_val_19174 = (state_19173[(1)]);
if((state_val_19174 === (1))){
var inst_19159 = init;
var state_19173__$1 = (function (){var statearr_19175 = state_19173;
(statearr_19175[(7)] = inst_19159);

return statearr_19175;
})();
var statearr_19176_19191 = state_19173__$1;
(statearr_19176_19191[(2)] = null);

(statearr_19176_19191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (2))){
var state_19173__$1 = state_19173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19173__$1,(4),ch);
} else {
if((state_val_19174 === (3))){
var inst_19171 = (state_19173[(2)]);
var state_19173__$1 = state_19173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19173__$1,inst_19171);
} else {
if((state_val_19174 === (4))){
var inst_19162 = (state_19173[(8)]);
var inst_19162__$1 = (state_19173[(2)]);
var inst_19163 = (inst_19162__$1 == null);
var state_19173__$1 = (function (){var statearr_19177 = state_19173;
(statearr_19177[(8)] = inst_19162__$1);

return statearr_19177;
})();
if(cljs.core.truth_(inst_19163)){
var statearr_19178_19192 = state_19173__$1;
(statearr_19178_19192[(1)] = (5));

} else {
var statearr_19179_19193 = state_19173__$1;
(statearr_19179_19193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (5))){
var inst_19159 = (state_19173[(7)]);
var state_19173__$1 = state_19173;
var statearr_19180_19194 = state_19173__$1;
(statearr_19180_19194[(2)] = inst_19159);

(statearr_19180_19194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (6))){
var inst_19162 = (state_19173[(8)]);
var inst_19159 = (state_19173[(7)]);
var inst_19166 = f.call(null,inst_19159,inst_19162);
var inst_19159__$1 = inst_19166;
var state_19173__$1 = (function (){var statearr_19181 = state_19173;
(statearr_19181[(7)] = inst_19159__$1);

return statearr_19181;
})();
var statearr_19182_19195 = state_19173__$1;
(statearr_19182_19195[(2)] = null);

(statearr_19182_19195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19174 === (7))){
var inst_19169 = (state_19173[(2)]);
var state_19173__$1 = state_19173;
var statearr_19183_19196 = state_19173__$1;
(statearr_19183_19196[(2)] = inst_19169);

(statearr_19183_19196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6873__auto__))
;
return ((function (switch__6798__auto__,c__6873__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6799__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6799__auto____0 = (function (){
var statearr_19187 = [null,null,null,null,null,null,null,null,null];
(statearr_19187[(0)] = cljs$core$async$reduce_$_state_machine__6799__auto__);

(statearr_19187[(1)] = (1));

return statearr_19187;
});
var cljs$core$async$reduce_$_state_machine__6799__auto____1 = (function (state_19173){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_19173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e19188){if((e19188 instanceof Object)){
var ex__6802__auto__ = e19188;
var statearr_19189_19197 = state_19173;
(statearr_19189_19197[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19198 = state_19173;
state_19173 = G__19198;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6799__auto__ = function(state_19173){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6799__auto____1.call(this,state_19173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6799__auto____0;
cljs$core$async$reduce_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6799__auto____1;
return cljs$core$async$reduce_$_state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto__))
})();
var state__6875__auto__ = (function (){var statearr_19190 = f__6874__auto__.call(null);
(statearr_19190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto__);

return statearr_19190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto__))
);

return c__6873__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19199 = [];
var len__5555__auto___19243 = arguments.length;
var i__5556__auto___19244 = (0);
while(true){
if((i__5556__auto___19244 < len__5555__auto___19243)){
args19199.push((arguments[i__5556__auto___19244]));

var G__19245 = (i__5556__auto___19244 + (1));
i__5556__auto___19244 = G__19245;
continue;
} else {
}
break;
}

var G__19201 = args19199.length;
switch (G__19201) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19199.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6873__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto__){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto__){
return (function (state_19222){
var state_val_19223 = (state_19222[(1)]);
if((state_val_19223 === (7))){
var inst_19203 = (state_19222[(7)]);
var inst_19208 = (state_19222[(2)]);
var inst_19209 = cljs.core.next.call(null,inst_19203);
var inst_19203__$1 = inst_19209;
var state_19222__$1 = (function (){var statearr_19224 = state_19222;
(statearr_19224[(7)] = inst_19203__$1);

(statearr_19224[(8)] = inst_19208);

return statearr_19224;
})();
var statearr_19225_19247 = state_19222__$1;
(statearr_19225_19247[(2)] = null);

(statearr_19225_19247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (1))){
var inst_19202 = cljs.core.seq.call(null,coll);
var inst_19203 = inst_19202;
var state_19222__$1 = (function (){var statearr_19226 = state_19222;
(statearr_19226[(7)] = inst_19203);

return statearr_19226;
})();
var statearr_19227_19248 = state_19222__$1;
(statearr_19227_19248[(2)] = null);

(statearr_19227_19248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (4))){
var inst_19203 = (state_19222[(7)]);
var inst_19206 = cljs.core.first.call(null,inst_19203);
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19222__$1,(7),ch,inst_19206);
} else {
if((state_val_19223 === (6))){
var inst_19218 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19228_19249 = state_19222__$1;
(statearr_19228_19249[(2)] = inst_19218);

(statearr_19228_19249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (3))){
var inst_19220 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19222__$1,inst_19220);
} else {
if((state_val_19223 === (2))){
var inst_19203 = (state_19222[(7)]);
var state_19222__$1 = state_19222;
if(cljs.core.truth_(inst_19203)){
var statearr_19229_19250 = state_19222__$1;
(statearr_19229_19250[(1)] = (4));

} else {
var statearr_19230_19251 = state_19222__$1;
(statearr_19230_19251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (9))){
var state_19222__$1 = state_19222;
var statearr_19231_19252 = state_19222__$1;
(statearr_19231_19252[(2)] = null);

(statearr_19231_19252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (5))){
var state_19222__$1 = state_19222;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19232_19253 = state_19222__$1;
(statearr_19232_19253[(1)] = (8));

} else {
var statearr_19233_19254 = state_19222__$1;
(statearr_19233_19254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (10))){
var inst_19216 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19234_19255 = state_19222__$1;
(statearr_19234_19255[(2)] = inst_19216);

(statearr_19234_19255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (8))){
var inst_19213 = cljs.core.async.close_BANG_.call(null,ch);
var state_19222__$1 = state_19222;
var statearr_19235_19256 = state_19222__$1;
(statearr_19235_19256[(2)] = inst_19213);

(statearr_19235_19256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto__))
;
return ((function (switch__6798__auto__,c__6873__auto__){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_19239 = [null,null,null,null,null,null,null,null,null];
(statearr_19239[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_19239[(1)] = (1));

return statearr_19239;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_19222){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_19222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e19240){if((e19240 instanceof Object)){
var ex__6802__auto__ = e19240;
var statearr_19241_19257 = state_19222;
(statearr_19241_19257[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19258 = state_19222;
state_19222 = G__19258;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_19222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_19222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto__))
})();
var state__6875__auto__ = (function (){var statearr_19242 = f__6874__auto__.call(null);
(statearr_19242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto__);

return statearr_19242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto__))
);

return c__6873__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5152__auto__ = (((_ == null))?null:_);
var m__5153__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,_);
} else {
var m__5153__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5152__auto__ = (((m == null))?null:m);
var m__5153__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5153__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5152__auto__ = (((m == null))?null:m);
var m__5153__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,m,ch);
} else {
var m__5153__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5152__auto__ = (((m == null))?null:m);
var m__5153__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,m);
} else {
var m__5153__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap put throws an exception, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19482 = (function (mult,ch,cs,meta19483){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19483 = meta19483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19484,meta19483__$1){
var self__ = this;
var _19484__$1 = this;
return (new cljs.core.async.t_cljs$core$async19482(self__.mult,self__.ch,self__.cs,meta19483__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19484){
var self__ = this;
var _19484__$1 = this;
return self__.meta19483;
});})(cs))
;

cljs.core.async.t_cljs$core$async19482.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19482.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19482.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19482.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19482.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19482.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap put throws an exception, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19483","meta19483",-1082780467,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19482";

cljs.core.async.t_cljs$core$async19482.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async19482");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19482 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19482(mult__$1,ch__$1,cs__$1,meta19483){
return (new cljs.core.async.t_cljs$core$async19482(mult__$1,ch__$1,cs__$1,meta19483));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19482(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6873__auto___19705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___19705,cs,m,dchan,dctr,done){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___19705,cs,m,dchan,dctr,done){
return (function (state_19619){
var state_val_19620 = (state_19619[(1)]);
if((state_val_19620 === (7))){
var inst_19615 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19621_19706 = state_19619__$1;
(statearr_19621_19706[(2)] = inst_19615);

(statearr_19621_19706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (20))){
var inst_19516 = (state_19619[(7)]);
var inst_19526 = cljs.core.first.call(null,inst_19516);
var inst_19527 = cljs.core.nth.call(null,inst_19526,(0),null);
var inst_19528 = cljs.core.nth.call(null,inst_19526,(1),null);
var state_19619__$1 = (function (){var statearr_19622 = state_19619;
(statearr_19622[(8)] = inst_19527);

return statearr_19622;
})();
if(cljs.core.truth_(inst_19528)){
var statearr_19623_19707 = state_19619__$1;
(statearr_19623_19707[(1)] = (22));

} else {
var statearr_19624_19708 = state_19619__$1;
(statearr_19624_19708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (27))){
var inst_19558 = (state_19619[(9)]);
var inst_19556 = (state_19619[(10)]);
var inst_19563 = cljs.core._nth.call(null,inst_19556,inst_19558);
var state_19619__$1 = (function (){var statearr_19625 = state_19619;
(statearr_19625[(11)] = inst_19563);

return statearr_19625;
})();
var statearr_19626_19709 = state_19619__$1;
(statearr_19626_19709[(2)] = null);

(statearr_19626_19709[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (1))){
var state_19619__$1 = state_19619;
var statearr_19627_19710 = state_19619__$1;
(statearr_19627_19710[(2)] = null);

(statearr_19627_19710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (24))){
var inst_19516 = (state_19619[(7)]);
var inst_19533 = (state_19619[(2)]);
var inst_19534 = cljs.core.next.call(null,inst_19516);
var inst_19496 = inst_19534;
var inst_19497 = null;
var inst_19498 = (0);
var inst_19499 = (0);
var state_19619__$1 = (function (){var statearr_19628 = state_19619;
(statearr_19628[(12)] = inst_19496);

(statearr_19628[(13)] = inst_19497);

(statearr_19628[(14)] = inst_19533);

(statearr_19628[(15)] = inst_19499);

(statearr_19628[(16)] = inst_19498);

return statearr_19628;
})();
var statearr_19629_19711 = state_19619__$1;
(statearr_19629_19711[(2)] = null);

(statearr_19629_19711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (39))){
var inst_19576 = (state_19619[(17)]);
var inst_19594 = (state_19619[(2)]);
var inst_19595 = cljs.core.next.call(null,inst_19576);
var inst_19555 = inst_19595;
var inst_19556 = null;
var inst_19557 = (0);
var inst_19558 = (0);
var state_19619__$1 = (function (){var statearr_19633 = state_19619;
(statearr_19633[(9)] = inst_19558);

(statearr_19633[(10)] = inst_19556);

(statearr_19633[(18)] = inst_19555);

(statearr_19633[(19)] = inst_19557);

(statearr_19633[(20)] = inst_19594);

return statearr_19633;
})();
var statearr_19634_19712 = state_19619__$1;
(statearr_19634_19712[(2)] = null);

(statearr_19634_19712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (4))){
var inst_19487 = (state_19619[(21)]);
var inst_19487__$1 = (state_19619[(2)]);
var inst_19488 = (inst_19487__$1 == null);
var state_19619__$1 = (function (){var statearr_19635 = state_19619;
(statearr_19635[(21)] = inst_19487__$1);

return statearr_19635;
})();
if(cljs.core.truth_(inst_19488)){
var statearr_19636_19713 = state_19619__$1;
(statearr_19636_19713[(1)] = (5));

} else {
var statearr_19637_19714 = state_19619__$1;
(statearr_19637_19714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (15))){
var inst_19496 = (state_19619[(12)]);
var inst_19497 = (state_19619[(13)]);
var inst_19499 = (state_19619[(15)]);
var inst_19498 = (state_19619[(16)]);
var inst_19512 = (state_19619[(2)]);
var inst_19513 = (inst_19499 + (1));
var tmp19630 = inst_19496;
var tmp19631 = inst_19497;
var tmp19632 = inst_19498;
var inst_19496__$1 = tmp19630;
var inst_19497__$1 = tmp19631;
var inst_19498__$1 = tmp19632;
var inst_19499__$1 = inst_19513;
var state_19619__$1 = (function (){var statearr_19638 = state_19619;
(statearr_19638[(12)] = inst_19496__$1);

(statearr_19638[(13)] = inst_19497__$1);

(statearr_19638[(15)] = inst_19499__$1);

(statearr_19638[(22)] = inst_19512);

(statearr_19638[(16)] = inst_19498__$1);

return statearr_19638;
})();
var statearr_19639_19715 = state_19619__$1;
(statearr_19639_19715[(2)] = null);

(statearr_19639_19715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (21))){
var inst_19537 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19640_19716 = state_19619__$1;
(statearr_19640_19716[(2)] = inst_19537);

(statearr_19640_19716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (31))){
var inst_19563 = (state_19619[(11)]);
var inst_19564 = (state_19619[(2)]);
var inst_19565 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_19566 = cljs.core.async.untap_STAR_.call(null,m,inst_19563);
var state_19619__$1 = (function (){var statearr_19641 = state_19619;
(statearr_19641[(23)] = inst_19565);

(statearr_19641[(24)] = inst_19564);

return statearr_19641;
})();
var statearr_19642_19717 = state_19619__$1;
(statearr_19642_19717[(2)] = inst_19566);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (32))){
var inst_19563 = (state_19619[(11)]);
var inst_19487 = (state_19619[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19619,(31),Object,null,(30));
var inst_19570 = cljs.core.async.put_BANG_.call(null,inst_19563,inst_19487,done);
var state_19619__$1 = state_19619;
var statearr_19643_19718 = state_19619__$1;
(statearr_19643_19718[(2)] = inst_19570);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (40))){
var inst_19585 = (state_19619[(25)]);
var inst_19586 = (state_19619[(2)]);
var inst_19587 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_19588 = cljs.core.async.untap_STAR_.call(null,m,inst_19585);
var state_19619__$1 = (function (){var statearr_19644 = state_19619;
(statearr_19644[(26)] = inst_19586);

(statearr_19644[(27)] = inst_19587);

return statearr_19644;
})();
var statearr_19645_19719 = state_19619__$1;
(statearr_19645_19719[(2)] = inst_19588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (33))){
var inst_19576 = (state_19619[(17)]);
var inst_19578 = cljs.core.chunked_seq_QMARK_.call(null,inst_19576);
var state_19619__$1 = state_19619;
if(inst_19578){
var statearr_19646_19720 = state_19619__$1;
(statearr_19646_19720[(1)] = (36));

} else {
var statearr_19647_19721 = state_19619__$1;
(statearr_19647_19721[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (13))){
var inst_19506 = (state_19619[(28)]);
var inst_19509 = cljs.core.async.close_BANG_.call(null,inst_19506);
var state_19619__$1 = state_19619;
var statearr_19648_19722 = state_19619__$1;
(statearr_19648_19722[(2)] = inst_19509);

(statearr_19648_19722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (22))){
var inst_19527 = (state_19619[(8)]);
var inst_19530 = cljs.core.async.close_BANG_.call(null,inst_19527);
var state_19619__$1 = state_19619;
var statearr_19649_19723 = state_19619__$1;
(statearr_19649_19723[(2)] = inst_19530);

(statearr_19649_19723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (36))){
var inst_19576 = (state_19619[(17)]);
var inst_19580 = cljs.core.chunk_first.call(null,inst_19576);
var inst_19581 = cljs.core.chunk_rest.call(null,inst_19576);
var inst_19582 = cljs.core.count.call(null,inst_19580);
var inst_19555 = inst_19581;
var inst_19556 = inst_19580;
var inst_19557 = inst_19582;
var inst_19558 = (0);
var state_19619__$1 = (function (){var statearr_19650 = state_19619;
(statearr_19650[(9)] = inst_19558);

(statearr_19650[(10)] = inst_19556);

(statearr_19650[(18)] = inst_19555);

(statearr_19650[(19)] = inst_19557);

return statearr_19650;
})();
var statearr_19651_19724 = state_19619__$1;
(statearr_19651_19724[(2)] = null);

(statearr_19651_19724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (41))){
var inst_19585 = (state_19619[(25)]);
var inst_19487 = (state_19619[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19619,(40),Object,null,(39));
var inst_19592 = cljs.core.async.put_BANG_.call(null,inst_19585,inst_19487,done);
var state_19619__$1 = state_19619;
var statearr_19652_19725 = state_19619__$1;
(statearr_19652_19725[(2)] = inst_19592);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (43))){
var state_19619__$1 = state_19619;
var statearr_19653_19726 = state_19619__$1;
(statearr_19653_19726[(2)] = null);

(statearr_19653_19726[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (29))){
var inst_19603 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19654_19727 = state_19619__$1;
(statearr_19654_19727[(2)] = inst_19603);

(statearr_19654_19727[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (44))){
var inst_19612 = (state_19619[(2)]);
var state_19619__$1 = (function (){var statearr_19655 = state_19619;
(statearr_19655[(29)] = inst_19612);

return statearr_19655;
})();
var statearr_19656_19728 = state_19619__$1;
(statearr_19656_19728[(2)] = null);

(statearr_19656_19728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (6))){
var inst_19547 = (state_19619[(30)]);
var inst_19546 = cljs.core.deref.call(null,cs);
var inst_19547__$1 = cljs.core.keys.call(null,inst_19546);
var inst_19548 = cljs.core.count.call(null,inst_19547__$1);
var inst_19549 = cljs.core.reset_BANG_.call(null,dctr,inst_19548);
var inst_19554 = cljs.core.seq.call(null,inst_19547__$1);
var inst_19555 = inst_19554;
var inst_19556 = null;
var inst_19557 = (0);
var inst_19558 = (0);
var state_19619__$1 = (function (){var statearr_19657 = state_19619;
(statearr_19657[(9)] = inst_19558);

(statearr_19657[(10)] = inst_19556);

(statearr_19657[(18)] = inst_19555);

(statearr_19657[(19)] = inst_19557);

(statearr_19657[(31)] = inst_19549);

(statearr_19657[(30)] = inst_19547__$1);

return statearr_19657;
})();
var statearr_19658_19729 = state_19619__$1;
(statearr_19658_19729[(2)] = null);

(statearr_19658_19729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (28))){
var inst_19555 = (state_19619[(18)]);
var inst_19576 = (state_19619[(17)]);
var inst_19576__$1 = cljs.core.seq.call(null,inst_19555);
var state_19619__$1 = (function (){var statearr_19659 = state_19619;
(statearr_19659[(17)] = inst_19576__$1);

return statearr_19659;
})();
if(inst_19576__$1){
var statearr_19660_19730 = state_19619__$1;
(statearr_19660_19730[(1)] = (33));

} else {
var statearr_19661_19731 = state_19619__$1;
(statearr_19661_19731[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (25))){
var inst_19558 = (state_19619[(9)]);
var inst_19557 = (state_19619[(19)]);
var inst_19560 = (inst_19558 < inst_19557);
var inst_19561 = inst_19560;
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19561)){
var statearr_19662_19732 = state_19619__$1;
(statearr_19662_19732[(1)] = (27));

} else {
var statearr_19663_19733 = state_19619__$1;
(statearr_19663_19733[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (34))){
var state_19619__$1 = state_19619;
var statearr_19664_19734 = state_19619__$1;
(statearr_19664_19734[(2)] = null);

(statearr_19664_19734[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (17))){
var state_19619__$1 = state_19619;
var statearr_19665_19735 = state_19619__$1;
(statearr_19665_19735[(2)] = null);

(statearr_19665_19735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (3))){
var inst_19617 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19619__$1,inst_19617);
} else {
if((state_val_19620 === (12))){
var inst_19542 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19666_19736 = state_19619__$1;
(statearr_19666_19736[(2)] = inst_19542);

(statearr_19666_19736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (2))){
var state_19619__$1 = state_19619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19619__$1,(4),ch);
} else {
if((state_val_19620 === (23))){
var state_19619__$1 = state_19619;
var statearr_19667_19737 = state_19619__$1;
(statearr_19667_19737[(2)] = null);

(statearr_19667_19737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (35))){
var inst_19601 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19668_19738 = state_19619__$1;
(statearr_19668_19738[(2)] = inst_19601);

(statearr_19668_19738[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (19))){
var inst_19516 = (state_19619[(7)]);
var inst_19520 = cljs.core.chunk_first.call(null,inst_19516);
var inst_19521 = cljs.core.chunk_rest.call(null,inst_19516);
var inst_19522 = cljs.core.count.call(null,inst_19520);
var inst_19496 = inst_19521;
var inst_19497 = inst_19520;
var inst_19498 = inst_19522;
var inst_19499 = (0);
var state_19619__$1 = (function (){var statearr_19669 = state_19619;
(statearr_19669[(12)] = inst_19496);

(statearr_19669[(13)] = inst_19497);

(statearr_19669[(15)] = inst_19499);

(statearr_19669[(16)] = inst_19498);

return statearr_19669;
})();
var statearr_19670_19739 = state_19619__$1;
(statearr_19670_19739[(2)] = null);

(statearr_19670_19739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (11))){
var inst_19496 = (state_19619[(12)]);
var inst_19516 = (state_19619[(7)]);
var inst_19516__$1 = cljs.core.seq.call(null,inst_19496);
var state_19619__$1 = (function (){var statearr_19671 = state_19619;
(statearr_19671[(7)] = inst_19516__$1);

return statearr_19671;
})();
if(inst_19516__$1){
var statearr_19672_19740 = state_19619__$1;
(statearr_19672_19740[(1)] = (16));

} else {
var statearr_19673_19741 = state_19619__$1;
(statearr_19673_19741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (9))){
var inst_19544 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19674_19742 = state_19619__$1;
(statearr_19674_19742[(2)] = inst_19544);

(statearr_19674_19742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (5))){
var inst_19494 = cljs.core.deref.call(null,cs);
var inst_19495 = cljs.core.seq.call(null,inst_19494);
var inst_19496 = inst_19495;
var inst_19497 = null;
var inst_19498 = (0);
var inst_19499 = (0);
var state_19619__$1 = (function (){var statearr_19675 = state_19619;
(statearr_19675[(12)] = inst_19496);

(statearr_19675[(13)] = inst_19497);

(statearr_19675[(15)] = inst_19499);

(statearr_19675[(16)] = inst_19498);

return statearr_19675;
})();
var statearr_19676_19743 = state_19619__$1;
(statearr_19676_19743[(2)] = null);

(statearr_19676_19743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (14))){
var state_19619__$1 = state_19619;
var statearr_19677_19744 = state_19619__$1;
(statearr_19677_19744[(2)] = null);

(statearr_19677_19744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (45))){
var inst_19609 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19678_19745 = state_19619__$1;
(statearr_19678_19745[(2)] = inst_19609);

(statearr_19678_19745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (26))){
var inst_19547 = (state_19619[(30)]);
var inst_19605 = (state_19619[(2)]);
var inst_19606 = cljs.core.seq.call(null,inst_19547);
var state_19619__$1 = (function (){var statearr_19679 = state_19619;
(statearr_19679[(32)] = inst_19605);

return statearr_19679;
})();
if(inst_19606){
var statearr_19680_19746 = state_19619__$1;
(statearr_19680_19746[(1)] = (42));

} else {
var statearr_19681_19747 = state_19619__$1;
(statearr_19681_19747[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (16))){
var inst_19516 = (state_19619[(7)]);
var inst_19518 = cljs.core.chunked_seq_QMARK_.call(null,inst_19516);
var state_19619__$1 = state_19619;
if(inst_19518){
var statearr_19685_19748 = state_19619__$1;
(statearr_19685_19748[(1)] = (19));

} else {
var statearr_19686_19749 = state_19619__$1;
(statearr_19686_19749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (38))){
var inst_19598 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19687_19750 = state_19619__$1;
(statearr_19687_19750[(2)] = inst_19598);

(statearr_19687_19750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (30))){
var inst_19558 = (state_19619[(9)]);
var inst_19556 = (state_19619[(10)]);
var inst_19555 = (state_19619[(18)]);
var inst_19557 = (state_19619[(19)]);
var inst_19572 = (state_19619[(2)]);
var inst_19573 = (inst_19558 + (1));
var tmp19682 = inst_19556;
var tmp19683 = inst_19555;
var tmp19684 = inst_19557;
var inst_19555__$1 = tmp19683;
var inst_19556__$1 = tmp19682;
var inst_19557__$1 = tmp19684;
var inst_19558__$1 = inst_19573;
var state_19619__$1 = (function (){var statearr_19688 = state_19619;
(statearr_19688[(9)] = inst_19558__$1);

(statearr_19688[(10)] = inst_19556__$1);

(statearr_19688[(18)] = inst_19555__$1);

(statearr_19688[(33)] = inst_19572);

(statearr_19688[(19)] = inst_19557__$1);

return statearr_19688;
})();
var statearr_19689_19751 = state_19619__$1;
(statearr_19689_19751[(2)] = null);

(statearr_19689_19751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (10))){
var inst_19497 = (state_19619[(13)]);
var inst_19499 = (state_19619[(15)]);
var inst_19505 = cljs.core._nth.call(null,inst_19497,inst_19499);
var inst_19506 = cljs.core.nth.call(null,inst_19505,(0),null);
var inst_19507 = cljs.core.nth.call(null,inst_19505,(1),null);
var state_19619__$1 = (function (){var statearr_19690 = state_19619;
(statearr_19690[(28)] = inst_19506);

return statearr_19690;
})();
if(cljs.core.truth_(inst_19507)){
var statearr_19691_19752 = state_19619__$1;
(statearr_19691_19752[(1)] = (13));

} else {
var statearr_19692_19753 = state_19619__$1;
(statearr_19692_19753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (18))){
var inst_19540 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19693_19754 = state_19619__$1;
(statearr_19693_19754[(2)] = inst_19540);

(statearr_19693_19754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (42))){
var state_19619__$1 = state_19619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19619__$1,(45),dchan);
} else {
if((state_val_19620 === (37))){
var inst_19576 = (state_19619[(17)]);
var inst_19585 = cljs.core.first.call(null,inst_19576);
var state_19619__$1 = (function (){var statearr_19694 = state_19619;
(statearr_19694[(25)] = inst_19585);

return statearr_19694;
})();
var statearr_19695_19755 = state_19619__$1;
(statearr_19695_19755[(2)] = null);

(statearr_19695_19755[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (8))){
var inst_19499 = (state_19619[(15)]);
var inst_19498 = (state_19619[(16)]);
var inst_19501 = (inst_19499 < inst_19498);
var inst_19502 = inst_19501;
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19502)){
var statearr_19696_19756 = state_19619__$1;
(statearr_19696_19756[(1)] = (10));

} else {
var statearr_19697_19757 = state_19619__$1;
(statearr_19697_19757[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___19705,cs,m,dchan,dctr,done))
;
return ((function (switch__6798__auto__,c__6873__auto___19705,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6799__auto__ = null;
var cljs$core$async$mult_$_state_machine__6799__auto____0 = (function (){
var statearr_19701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19701[(0)] = cljs$core$async$mult_$_state_machine__6799__auto__);

(statearr_19701[(1)] = (1));

return statearr_19701;
});
var cljs$core$async$mult_$_state_machine__6799__auto____1 = (function (state_19619){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_19619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e19702){if((e19702 instanceof Object)){
var ex__6802__auto__ = e19702;
var statearr_19703_19758 = state_19619;
(statearr_19703_19758[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19759 = state_19619;
state_19619 = G__19759;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6799__auto__ = function(state_19619){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6799__auto____1.call(this,state_19619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6799__auto____0;
cljs$core$async$mult_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6799__auto____1;
return cljs$core$async$mult_$_state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___19705,cs,m,dchan,dctr,done))
})();
var state__6875__auto__ = (function (){var statearr_19704 = f__6874__auto__.call(null);
(statearr_19704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___19705);

return statearr_19704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___19705,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args19760 = [];
var len__5555__auto___19763 = arguments.length;
var i__5556__auto___19764 = (0);
while(true){
if((i__5556__auto___19764 < len__5555__auto___19763)){
args19760.push((arguments[i__5556__auto___19764]));

var G__19765 = (i__5556__auto___19764 + (1));
i__5556__auto___19764 = G__19765;
continue;
} else {
}
break;
}

var G__19762 = args19760.length;
switch (G__19762) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19760.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5152__auto__ = (((m == null))?null:m);
var m__5153__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,m,ch);
} else {
var m__5153__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5152__auto__ = (((m == null))?null:m);
var m__5153__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,m,ch);
} else {
var m__5153__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5152__auto__ = (((m == null))?null:m);
var m__5153__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,m);
} else {
var m__5153__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5152__auto__ = (((m == null))?null:m);
var m__5153__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,m,state_map);
} else {
var m__5153__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5152__auto__ = (((m == null))?null:m);
var m__5153__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,m,mode);
} else {
var m__5153__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19920 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19921){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19921 = meta19921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19922,meta19921__$1){
var self__ = this;
var _19922__$1 = this;
return (new cljs.core.async.t_cljs$core$async19920(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19921__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19922){
var self__ = this;
var _19922__$1 = this;
return self__.meta19921;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19921","meta19921",-1788749396,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19920";

cljs.core.async.t_cljs$core$async19920.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async19920");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19920 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19920(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19921){
return (new cljs.core.async.t_cljs$core$async19920(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19921));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19920(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6873__auto___20073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___20073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___20073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20015){
var state_val_20016 = (state_20015[(1)]);
if((state_val_20016 === (7))){
var inst_19938 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20017_20074 = state_20015__$1;
(statearr_20017_20074[(2)] = inst_19938);

(statearr_20017_20074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (20))){
var inst_19950 = (state_20015[(7)]);
var state_20015__$1 = state_20015;
var statearr_20018_20075 = state_20015__$1;
(statearr_20018_20075[(2)] = inst_19950);

(statearr_20018_20075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (27))){
var state_20015__$1 = state_20015;
var statearr_20019_20076 = state_20015__$1;
(statearr_20019_20076[(2)] = null);

(statearr_20019_20076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (1))){
var inst_19926 = (state_20015[(8)]);
var inst_19926__$1 = calc_state.call(null);
var inst_19928 = (inst_19926__$1 == null);
var inst_19929 = cljs.core.not.call(null,inst_19928);
var state_20015__$1 = (function (){var statearr_20020 = state_20015;
(statearr_20020[(8)] = inst_19926__$1);

return statearr_20020;
})();
if(inst_19929){
var statearr_20021_20077 = state_20015__$1;
(statearr_20021_20077[(1)] = (2));

} else {
var statearr_20022_20078 = state_20015__$1;
(statearr_20022_20078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (24))){
var inst_19973 = (state_20015[(9)]);
var inst_19994 = (state_20015[(10)]);
var inst_19980 = (state_20015[(11)]);
var inst_19994__$1 = inst_19973.call(null,inst_19980);
var state_20015__$1 = (function (){var statearr_20023 = state_20015;
(statearr_20023[(10)] = inst_19994__$1);

return statearr_20023;
})();
if(cljs.core.truth_(inst_19994__$1)){
var statearr_20024_20079 = state_20015__$1;
(statearr_20024_20079[(1)] = (29));

} else {
var statearr_20025_20080 = state_20015__$1;
(statearr_20025_20080[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (4))){
var inst_19941 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
if(cljs.core.truth_(inst_19941)){
var statearr_20026_20081 = state_20015__$1;
(statearr_20026_20081[(1)] = (8));

} else {
var statearr_20027_20082 = state_20015__$1;
(statearr_20027_20082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (15))){
var inst_19967 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
if(cljs.core.truth_(inst_19967)){
var statearr_20028_20083 = state_20015__$1;
(statearr_20028_20083[(1)] = (19));

} else {
var statearr_20029_20084 = state_20015__$1;
(statearr_20029_20084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (21))){
var inst_19972 = (state_20015[(12)]);
var inst_19972__$1 = (state_20015[(2)]);
var inst_19973 = cljs.core.get.call(null,inst_19972__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19974 = cljs.core.get.call(null,inst_19972__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19975 = cljs.core.get.call(null,inst_19972__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20015__$1 = (function (){var statearr_20030 = state_20015;
(statearr_20030[(12)] = inst_19972__$1);

(statearr_20030[(9)] = inst_19973);

(statearr_20030[(13)] = inst_19974);

return statearr_20030;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20015__$1,(22),inst_19975);
} else {
if((state_val_20016 === (31))){
var inst_20002 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
if(cljs.core.truth_(inst_20002)){
var statearr_20031_20085 = state_20015__$1;
(statearr_20031_20085[(1)] = (32));

} else {
var statearr_20032_20086 = state_20015__$1;
(statearr_20032_20086[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (32))){
var inst_19979 = (state_20015[(14)]);
var state_20015__$1 = state_20015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20015__$1,(35),out,inst_19979);
} else {
if((state_val_20016 === (33))){
var state_20015__$1 = state_20015;
var statearr_20033_20087 = state_20015__$1;
(statearr_20033_20087[(2)] = null);

(statearr_20033_20087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (13))){
var inst_19950 = (state_20015[(7)]);
var inst_19957 = inst_19950.cljs$lang$protocol_mask$partition0$;
var inst_19958 = (inst_19957 & (64));
var inst_19959 = inst_19950.cljs$core$ISeq$;
var inst_19960 = (inst_19958) || (inst_19959);
var state_20015__$1 = state_20015;
if(cljs.core.truth_(inst_19960)){
var statearr_20034_20088 = state_20015__$1;
(statearr_20034_20088[(1)] = (16));

} else {
var statearr_20035_20089 = state_20015__$1;
(statearr_20035_20089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (22))){
var inst_19979 = (state_20015[(14)]);
var inst_19980 = (state_20015[(11)]);
var inst_19978 = (state_20015[(2)]);
var inst_19979__$1 = cljs.core.nth.call(null,inst_19978,(0),null);
var inst_19980__$1 = cljs.core.nth.call(null,inst_19978,(1),null);
var inst_19981 = (inst_19979__$1 == null);
var inst_19982 = cljs.core._EQ_.call(null,inst_19980__$1,change);
var inst_19983 = (inst_19981) || (inst_19982);
var state_20015__$1 = (function (){var statearr_20036 = state_20015;
(statearr_20036[(14)] = inst_19979__$1);

(statearr_20036[(11)] = inst_19980__$1);

return statearr_20036;
})();
if(cljs.core.truth_(inst_19983)){
var statearr_20037_20090 = state_20015__$1;
(statearr_20037_20090[(1)] = (23));

} else {
var statearr_20038_20091 = state_20015__$1;
(statearr_20038_20091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (29))){
var inst_19994 = (state_20015[(10)]);
var state_20015__$1 = state_20015;
var statearr_20039_20092 = state_20015__$1;
(statearr_20039_20092[(2)] = inst_19994);

(statearr_20039_20092[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (6))){
var state_20015__$1 = state_20015;
var statearr_20040_20093 = state_20015__$1;
(statearr_20040_20093[(2)] = false);

(statearr_20040_20093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (28))){
var inst_19990 = (state_20015[(2)]);
var inst_19991 = calc_state.call(null);
var inst_19950 = inst_19991;
var state_20015__$1 = (function (){var statearr_20041 = state_20015;
(statearr_20041[(15)] = inst_19990);

(statearr_20041[(7)] = inst_19950);

return statearr_20041;
})();
var statearr_20042_20094 = state_20015__$1;
(statearr_20042_20094[(2)] = null);

(statearr_20042_20094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (25))){
var inst_20011 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20043_20095 = state_20015__$1;
(statearr_20043_20095[(2)] = inst_20011);

(statearr_20043_20095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (34))){
var inst_19972 = (state_20015[(12)]);
var inst_20008 = (state_20015[(2)]);
var inst_19950 = inst_19972;
var state_20015__$1 = (function (){var statearr_20044 = state_20015;
(statearr_20044[(16)] = inst_20008);

(statearr_20044[(7)] = inst_19950);

return statearr_20044;
})();
var statearr_20045_20096 = state_20015__$1;
(statearr_20045_20096[(2)] = null);

(statearr_20045_20096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (17))){
var state_20015__$1 = state_20015;
var statearr_20046_20097 = state_20015__$1;
(statearr_20046_20097[(2)] = false);

(statearr_20046_20097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (3))){
var state_20015__$1 = state_20015;
var statearr_20047_20098 = state_20015__$1;
(statearr_20047_20098[(2)] = false);

(statearr_20047_20098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (12))){
var inst_20013 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20015__$1,inst_20013);
} else {
if((state_val_20016 === (2))){
var inst_19926 = (state_20015[(8)]);
var inst_19931 = inst_19926.cljs$lang$protocol_mask$partition0$;
var inst_19932 = (inst_19931 & (64));
var inst_19933 = inst_19926.cljs$core$ISeq$;
var inst_19934 = (inst_19932) || (inst_19933);
var state_20015__$1 = state_20015;
if(cljs.core.truth_(inst_19934)){
var statearr_20048_20099 = state_20015__$1;
(statearr_20048_20099[(1)] = (5));

} else {
var statearr_20049_20100 = state_20015__$1;
(statearr_20049_20100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (23))){
var inst_19979 = (state_20015[(14)]);
var inst_19985 = (inst_19979 == null);
var state_20015__$1 = state_20015;
if(cljs.core.truth_(inst_19985)){
var statearr_20050_20101 = state_20015__$1;
(statearr_20050_20101[(1)] = (26));

} else {
var statearr_20051_20102 = state_20015__$1;
(statearr_20051_20102[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (35))){
var inst_20005 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20052_20103 = state_20015__$1;
(statearr_20052_20103[(2)] = inst_20005);

(statearr_20052_20103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (19))){
var inst_19950 = (state_20015[(7)]);
var inst_19969 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19950);
var state_20015__$1 = state_20015;
var statearr_20053_20104 = state_20015__$1;
(statearr_20053_20104[(2)] = inst_19969);

(statearr_20053_20104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (11))){
var inst_19950 = (state_20015[(7)]);
var inst_19954 = (inst_19950 == null);
var inst_19955 = cljs.core.not.call(null,inst_19954);
var state_20015__$1 = state_20015;
if(inst_19955){
var statearr_20054_20105 = state_20015__$1;
(statearr_20054_20105[(1)] = (13));

} else {
var statearr_20055_20106 = state_20015__$1;
(statearr_20055_20106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (9))){
var inst_19926 = (state_20015[(8)]);
var state_20015__$1 = state_20015;
var statearr_20056_20107 = state_20015__$1;
(statearr_20056_20107[(2)] = inst_19926);

(statearr_20056_20107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (5))){
var state_20015__$1 = state_20015;
var statearr_20057_20108 = state_20015__$1;
(statearr_20057_20108[(2)] = true);

(statearr_20057_20108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (14))){
var state_20015__$1 = state_20015;
var statearr_20058_20109 = state_20015__$1;
(statearr_20058_20109[(2)] = false);

(statearr_20058_20109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (26))){
var inst_19980 = (state_20015[(11)]);
var inst_19987 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19980);
var state_20015__$1 = state_20015;
var statearr_20059_20110 = state_20015__$1;
(statearr_20059_20110[(2)] = inst_19987);

(statearr_20059_20110[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (16))){
var state_20015__$1 = state_20015;
var statearr_20060_20111 = state_20015__$1;
(statearr_20060_20111[(2)] = true);

(statearr_20060_20111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (30))){
var inst_19973 = (state_20015[(9)]);
var inst_19980 = (state_20015[(11)]);
var inst_19974 = (state_20015[(13)]);
var inst_19997 = cljs.core.empty_QMARK_.call(null,inst_19973);
var inst_19998 = inst_19974.call(null,inst_19980);
var inst_19999 = cljs.core.not.call(null,inst_19998);
var inst_20000 = (inst_19997) && (inst_19999);
var state_20015__$1 = state_20015;
var statearr_20061_20112 = state_20015__$1;
(statearr_20061_20112[(2)] = inst_20000);

(statearr_20061_20112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (10))){
var inst_19926 = (state_20015[(8)]);
var inst_19946 = (state_20015[(2)]);
var inst_19947 = cljs.core.get.call(null,inst_19946,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19948 = cljs.core.get.call(null,inst_19946,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19949 = cljs.core.get.call(null,inst_19946,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19950 = inst_19926;
var state_20015__$1 = (function (){var statearr_20062 = state_20015;
(statearr_20062[(17)] = inst_19947);

(statearr_20062[(18)] = inst_19948);

(statearr_20062[(19)] = inst_19949);

(statearr_20062[(7)] = inst_19950);

return statearr_20062;
})();
var statearr_20063_20113 = state_20015__$1;
(statearr_20063_20113[(2)] = null);

(statearr_20063_20113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (18))){
var inst_19964 = (state_20015[(2)]);
var state_20015__$1 = state_20015;
var statearr_20064_20114 = state_20015__$1;
(statearr_20064_20114[(2)] = inst_19964);

(statearr_20064_20114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20016 === (8))){
var inst_19926 = (state_20015[(8)]);
var inst_19943 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19926);
var state_20015__$1 = state_20015;
var statearr_20065_20115 = state_20015__$1;
(statearr_20065_20115[(2)] = inst_19943);

(statearr_20065_20115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___20073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6798__auto__,c__6873__auto___20073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6799__auto__ = null;
var cljs$core$async$mix_$_state_machine__6799__auto____0 = (function (){
var statearr_20069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20069[(0)] = cljs$core$async$mix_$_state_machine__6799__auto__);

(statearr_20069[(1)] = (1));

return statearr_20069;
});
var cljs$core$async$mix_$_state_machine__6799__auto____1 = (function (state_20015){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_20015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e20070){if((e20070 instanceof Object)){
var ex__6802__auto__ = e20070;
var statearr_20071_20116 = state_20015;
(statearr_20071_20116[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20117 = state_20015;
state_20015 = G__20117;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6799__auto__ = function(state_20015){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6799__auto____1.call(this,state_20015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6799__auto____0;
cljs$core$async$mix_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6799__auto____1;
return cljs$core$async$mix_$_state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___20073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6875__auto__ = (function (){var statearr_20072 = f__6874__auto__.call(null);
(statearr_20072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___20073);

return statearr_20072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___20073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5152__auto__ = (((p == null))?null:p);
var m__5153__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5153__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5152__auto__ = (((p == null))?null:p);
var m__5153__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,p,v,ch);
} else {
var m__5153__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20118 = [];
var len__5555__auto___20121 = arguments.length;
var i__5556__auto___20122 = (0);
while(true){
if((i__5556__auto___20122 < len__5555__auto___20121)){
args20118.push((arguments[i__5556__auto___20122]));

var G__20123 = (i__5556__auto___20122 + (1));
i__5556__auto___20122 = G__20123;
continue;
} else {
}
break;
}

var G__20120 = args20118.length;
switch (G__20120) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20118.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5152__auto__ = (((p == null))?null:p);
var m__5153__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,p);
} else {
var m__5153__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5152__auto__ = (((p == null))?null:p);
var m__5153__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,p,v);
} else {
var m__5153__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20126 = [];
var len__5555__auto___20253 = arguments.length;
var i__5556__auto___20254 = (0);
while(true){
if((i__5556__auto___20254 < len__5555__auto___20253)){
args20126.push((arguments[i__5556__auto___20254]));

var G__20255 = (i__5556__auto___20254 + (1));
i__5556__auto___20254 = G__20255;
continue;
} else {
}
break;
}

var G__20128 = args20126.length;
switch (G__20128) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20126.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4497__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4497__auto__,mults){
return (function (p1__20125_SHARP_){
if(cljs.core.truth_(p1__20125_SHARP_.call(null,topic))){
return p1__20125_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20125_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4497__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20129 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20130){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20130 = meta20130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20131,meta20130__$1){
var self__ = this;
var _20131__$1 = this;
return (new cljs.core.async.t_cljs$core$async20129(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20130__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20131){
var self__ = this;
var _20131__$1 = this;
return self__.meta20130;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20129.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20130","meta20130",849179942,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20129";

cljs.core.async.t_cljs$core$async20129.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"cljs.core.async/t_cljs$core$async20129");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20129 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20129(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20130){
return (new cljs.core.async.t_cljs$core$async20129(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20130));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20129(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6873__auto___20257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___20257,mults,ensure_mult,p){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___20257,mults,ensure_mult,p){
return (function (state_20205){
var state_val_20206 = (state_20205[(1)]);
if((state_val_20206 === (7))){
var inst_20201 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20207_20258 = state_20205__$1;
(statearr_20207_20258[(2)] = inst_20201);

(statearr_20207_20258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (20))){
var state_20205__$1 = state_20205;
var statearr_20208_20259 = state_20205__$1;
(statearr_20208_20259[(2)] = null);

(statearr_20208_20259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (1))){
var state_20205__$1 = state_20205;
var statearr_20209_20260 = state_20205__$1;
(statearr_20209_20260[(2)] = null);

(statearr_20209_20260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (24))){
var inst_20134 = (state_20205[(7)]);
var inst_20184 = (state_20205[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20205,(23),Object,null,(22));
var inst_20191 = cljs.core.async.muxch_STAR_.call(null,inst_20184);
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20205__$1,(25),inst_20191,inst_20134);
} else {
if((state_val_20206 === (4))){
var inst_20134 = (state_20205[(7)]);
var inst_20134__$1 = (state_20205[(2)]);
var inst_20135 = (inst_20134__$1 == null);
var state_20205__$1 = (function (){var statearr_20210 = state_20205;
(statearr_20210[(7)] = inst_20134__$1);

return statearr_20210;
})();
if(cljs.core.truth_(inst_20135)){
var statearr_20211_20261 = state_20205__$1;
(statearr_20211_20261[(1)] = (5));

} else {
var statearr_20212_20262 = state_20205__$1;
(statearr_20212_20262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (15))){
var inst_20176 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20213_20263 = state_20205__$1;
(statearr_20213_20263[(2)] = inst_20176);

(statearr_20213_20263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (21))){
var inst_20198 = (state_20205[(2)]);
var state_20205__$1 = (function (){var statearr_20214 = state_20205;
(statearr_20214[(9)] = inst_20198);

return statearr_20214;
})();
var statearr_20215_20264 = state_20205__$1;
(statearr_20215_20264[(2)] = null);

(statearr_20215_20264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (13))){
var inst_20158 = (state_20205[(10)]);
var inst_20160 = cljs.core.chunked_seq_QMARK_.call(null,inst_20158);
var state_20205__$1 = state_20205;
if(inst_20160){
var statearr_20216_20265 = state_20205__$1;
(statearr_20216_20265[(1)] = (16));

} else {
var statearr_20217_20266 = state_20205__$1;
(statearr_20217_20266[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (22))){
var inst_20195 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20218_20267 = state_20205__$1;
(statearr_20218_20267[(2)] = inst_20195);

(statearr_20218_20267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (6))){
var inst_20182 = (state_20205[(11)]);
var inst_20134 = (state_20205[(7)]);
var inst_20184 = (state_20205[(8)]);
var inst_20182__$1 = topic_fn.call(null,inst_20134);
var inst_20183 = cljs.core.deref.call(null,mults);
var inst_20184__$1 = cljs.core.get.call(null,inst_20183,inst_20182__$1);
var state_20205__$1 = (function (){var statearr_20219 = state_20205;
(statearr_20219[(11)] = inst_20182__$1);

(statearr_20219[(8)] = inst_20184__$1);

return statearr_20219;
})();
if(cljs.core.truth_(inst_20184__$1)){
var statearr_20220_20268 = state_20205__$1;
(statearr_20220_20268[(1)] = (19));

} else {
var statearr_20221_20269 = state_20205__$1;
(statearr_20221_20269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (25))){
var inst_20193 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20222_20270 = state_20205__$1;
(statearr_20222_20270[(2)] = inst_20193);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (17))){
var inst_20158 = (state_20205[(10)]);
var inst_20167 = cljs.core.first.call(null,inst_20158);
var inst_20168 = cljs.core.async.muxch_STAR_.call(null,inst_20167);
var inst_20169 = cljs.core.async.close_BANG_.call(null,inst_20168);
var inst_20170 = cljs.core.next.call(null,inst_20158);
var inst_20144 = inst_20170;
var inst_20145 = null;
var inst_20146 = (0);
var inst_20147 = (0);
var state_20205__$1 = (function (){var statearr_20223 = state_20205;
(statearr_20223[(12)] = inst_20146);

(statearr_20223[(13)] = inst_20147);

(statearr_20223[(14)] = inst_20169);

(statearr_20223[(15)] = inst_20145);

(statearr_20223[(16)] = inst_20144);

return statearr_20223;
})();
var statearr_20224_20271 = state_20205__$1;
(statearr_20224_20271[(2)] = null);

(statearr_20224_20271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (3))){
var inst_20203 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20205__$1,inst_20203);
} else {
if((state_val_20206 === (12))){
var inst_20178 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20225_20272 = state_20205__$1;
(statearr_20225_20272[(2)] = inst_20178);

(statearr_20225_20272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (2))){
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20205__$1,(4),ch);
} else {
if((state_val_20206 === (23))){
var inst_20182 = (state_20205[(11)]);
var inst_20186 = (state_20205[(2)]);
var inst_20187 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20182);
var state_20205__$1 = (function (){var statearr_20226 = state_20205;
(statearr_20226[(17)] = inst_20186);

return statearr_20226;
})();
var statearr_20227_20273 = state_20205__$1;
(statearr_20227_20273[(2)] = inst_20187);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (19))){
var state_20205__$1 = state_20205;
var statearr_20228_20274 = state_20205__$1;
(statearr_20228_20274[(2)] = null);

(statearr_20228_20274[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (11))){
var inst_20158 = (state_20205[(10)]);
var inst_20144 = (state_20205[(16)]);
var inst_20158__$1 = cljs.core.seq.call(null,inst_20144);
var state_20205__$1 = (function (){var statearr_20229 = state_20205;
(statearr_20229[(10)] = inst_20158__$1);

return statearr_20229;
})();
if(inst_20158__$1){
var statearr_20230_20275 = state_20205__$1;
(statearr_20230_20275[(1)] = (13));

} else {
var statearr_20231_20276 = state_20205__$1;
(statearr_20231_20276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (9))){
var inst_20180 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20232_20277 = state_20205__$1;
(statearr_20232_20277[(2)] = inst_20180);

(statearr_20232_20277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (5))){
var inst_20141 = cljs.core.deref.call(null,mults);
var inst_20142 = cljs.core.vals.call(null,inst_20141);
var inst_20143 = cljs.core.seq.call(null,inst_20142);
var inst_20144 = inst_20143;
var inst_20145 = null;
var inst_20146 = (0);
var inst_20147 = (0);
var state_20205__$1 = (function (){var statearr_20233 = state_20205;
(statearr_20233[(12)] = inst_20146);

(statearr_20233[(13)] = inst_20147);

(statearr_20233[(15)] = inst_20145);

(statearr_20233[(16)] = inst_20144);

return statearr_20233;
})();
var statearr_20234_20278 = state_20205__$1;
(statearr_20234_20278[(2)] = null);

(statearr_20234_20278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (14))){
var state_20205__$1 = state_20205;
var statearr_20238_20279 = state_20205__$1;
(statearr_20238_20279[(2)] = null);

(statearr_20238_20279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (16))){
var inst_20158 = (state_20205[(10)]);
var inst_20162 = cljs.core.chunk_first.call(null,inst_20158);
var inst_20163 = cljs.core.chunk_rest.call(null,inst_20158);
var inst_20164 = cljs.core.count.call(null,inst_20162);
var inst_20144 = inst_20163;
var inst_20145 = inst_20162;
var inst_20146 = inst_20164;
var inst_20147 = (0);
var state_20205__$1 = (function (){var statearr_20239 = state_20205;
(statearr_20239[(12)] = inst_20146);

(statearr_20239[(13)] = inst_20147);

(statearr_20239[(15)] = inst_20145);

(statearr_20239[(16)] = inst_20144);

return statearr_20239;
})();
var statearr_20240_20280 = state_20205__$1;
(statearr_20240_20280[(2)] = null);

(statearr_20240_20280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (10))){
var inst_20146 = (state_20205[(12)]);
var inst_20147 = (state_20205[(13)]);
var inst_20145 = (state_20205[(15)]);
var inst_20144 = (state_20205[(16)]);
var inst_20152 = cljs.core._nth.call(null,inst_20145,inst_20147);
var inst_20153 = cljs.core.async.muxch_STAR_.call(null,inst_20152);
var inst_20154 = cljs.core.async.close_BANG_.call(null,inst_20153);
var inst_20155 = (inst_20147 + (1));
var tmp20235 = inst_20146;
var tmp20236 = inst_20145;
var tmp20237 = inst_20144;
var inst_20144__$1 = tmp20237;
var inst_20145__$1 = tmp20236;
var inst_20146__$1 = tmp20235;
var inst_20147__$1 = inst_20155;
var state_20205__$1 = (function (){var statearr_20241 = state_20205;
(statearr_20241[(12)] = inst_20146__$1);

(statearr_20241[(13)] = inst_20147__$1);

(statearr_20241[(18)] = inst_20154);

(statearr_20241[(15)] = inst_20145__$1);

(statearr_20241[(16)] = inst_20144__$1);

return statearr_20241;
})();
var statearr_20242_20281 = state_20205__$1;
(statearr_20242_20281[(2)] = null);

(statearr_20242_20281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (18))){
var inst_20173 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20243_20282 = state_20205__$1;
(statearr_20243_20282[(2)] = inst_20173);

(statearr_20243_20282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (8))){
var inst_20146 = (state_20205[(12)]);
var inst_20147 = (state_20205[(13)]);
var inst_20149 = (inst_20147 < inst_20146);
var inst_20150 = inst_20149;
var state_20205__$1 = state_20205;
if(cljs.core.truth_(inst_20150)){
var statearr_20244_20283 = state_20205__$1;
(statearr_20244_20283[(1)] = (10));

} else {
var statearr_20245_20284 = state_20205__$1;
(statearr_20245_20284[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___20257,mults,ensure_mult,p))
;
return ((function (switch__6798__auto__,c__6873__auto___20257,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_20249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20249[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_20249[(1)] = (1));

return statearr_20249;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_20205){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_20205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e20250){if((e20250 instanceof Object)){
var ex__6802__auto__ = e20250;
var statearr_20251_20285 = state_20205;
(statearr_20251_20285[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20286 = state_20205;
state_20205 = G__20286;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_20205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_20205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___20257,mults,ensure_mult,p))
})();
var state__6875__auto__ = (function (){var statearr_20252 = f__6874__auto__.call(null);
(statearr_20252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___20257);

return statearr_20252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___20257,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20287 = [];
var len__5555__auto___20290 = arguments.length;
var i__5556__auto___20291 = (0);
while(true){
if((i__5556__auto___20291 < len__5555__auto___20290)){
args20287.push((arguments[i__5556__auto___20291]));

var G__20292 = (i__5556__auto___20291 + (1));
i__5556__auto___20291 = G__20292;
continue;
} else {
}
break;
}

var G__20289 = args20287.length;
switch (G__20289) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20287.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20294 = [];
var len__5555__auto___20297 = arguments.length;
var i__5556__auto___20298 = (0);
while(true){
if((i__5556__auto___20298 < len__5555__auto___20297)){
args20294.push((arguments[i__5556__auto___20298]));

var G__20299 = (i__5556__auto___20298 + (1));
i__5556__auto___20298 = G__20299;
continue;
} else {
}
break;
}

var G__20296 = args20294.length;
switch (G__20296) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20294.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20301 = [];
var len__5555__auto___20372 = arguments.length;
var i__5556__auto___20373 = (0);
while(true){
if((i__5556__auto___20373 < len__5555__auto___20372)){
args20301.push((arguments[i__5556__auto___20373]));

var G__20374 = (i__5556__auto___20373 + (1));
i__5556__auto___20373 = G__20374;
continue;
} else {
}
break;
}

var G__20303 = args20301.length;
switch (G__20303) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20301.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6873__auto___20376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___20376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___20376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20342){
var state_val_20343 = (state_20342[(1)]);
if((state_val_20343 === (7))){
var state_20342__$1 = state_20342;
var statearr_20344_20377 = state_20342__$1;
(statearr_20344_20377[(2)] = null);

(statearr_20344_20377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (1))){
var state_20342__$1 = state_20342;
var statearr_20345_20378 = state_20342__$1;
(statearr_20345_20378[(2)] = null);

(statearr_20345_20378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (4))){
var inst_20306 = (state_20342[(7)]);
var inst_20308 = (inst_20306 < cnt);
var state_20342__$1 = state_20342;
if(cljs.core.truth_(inst_20308)){
var statearr_20346_20379 = state_20342__$1;
(statearr_20346_20379[(1)] = (6));

} else {
var statearr_20347_20380 = state_20342__$1;
(statearr_20347_20380[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (15))){
var inst_20338 = (state_20342[(2)]);
var state_20342__$1 = state_20342;
var statearr_20348_20381 = state_20342__$1;
(statearr_20348_20381[(2)] = inst_20338);

(statearr_20348_20381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (13))){
var inst_20331 = cljs.core.async.close_BANG_.call(null,out);
var state_20342__$1 = state_20342;
var statearr_20349_20382 = state_20342__$1;
(statearr_20349_20382[(2)] = inst_20331);

(statearr_20349_20382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (6))){
var state_20342__$1 = state_20342;
var statearr_20350_20383 = state_20342__$1;
(statearr_20350_20383[(2)] = null);

(statearr_20350_20383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (3))){
var inst_20340 = (state_20342[(2)]);
var state_20342__$1 = state_20342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20342__$1,inst_20340);
} else {
if((state_val_20343 === (12))){
var inst_20328 = (state_20342[(8)]);
var inst_20328__$1 = (state_20342[(2)]);
var inst_20329 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20328__$1);
var state_20342__$1 = (function (){var statearr_20351 = state_20342;
(statearr_20351[(8)] = inst_20328__$1);

return statearr_20351;
})();
if(cljs.core.truth_(inst_20329)){
var statearr_20352_20384 = state_20342__$1;
(statearr_20352_20384[(1)] = (13));

} else {
var statearr_20353_20385 = state_20342__$1;
(statearr_20353_20385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (2))){
var inst_20305 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20306 = (0);
var state_20342__$1 = (function (){var statearr_20354 = state_20342;
(statearr_20354[(9)] = inst_20305);

(statearr_20354[(7)] = inst_20306);

return statearr_20354;
})();
var statearr_20355_20386 = state_20342__$1;
(statearr_20355_20386[(2)] = null);

(statearr_20355_20386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (11))){
var inst_20306 = (state_20342[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20342,(10),Object,null,(9));
var inst_20315 = chs__$1.call(null,inst_20306);
var inst_20316 = done.call(null,inst_20306);
var inst_20317 = cljs.core.async.take_BANG_.call(null,inst_20315,inst_20316);
var state_20342__$1 = state_20342;
var statearr_20356_20387 = state_20342__$1;
(statearr_20356_20387[(2)] = inst_20317);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (9))){
var inst_20306 = (state_20342[(7)]);
var inst_20319 = (state_20342[(2)]);
var inst_20320 = (inst_20306 + (1));
var inst_20306__$1 = inst_20320;
var state_20342__$1 = (function (){var statearr_20357 = state_20342;
(statearr_20357[(10)] = inst_20319);

(statearr_20357[(7)] = inst_20306__$1);

return statearr_20357;
})();
var statearr_20358_20388 = state_20342__$1;
(statearr_20358_20388[(2)] = null);

(statearr_20358_20388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (5))){
var inst_20326 = (state_20342[(2)]);
var state_20342__$1 = (function (){var statearr_20359 = state_20342;
(statearr_20359[(11)] = inst_20326);

return statearr_20359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20342__$1,(12),dchan);
} else {
if((state_val_20343 === (14))){
var inst_20328 = (state_20342[(8)]);
var inst_20333 = cljs.core.apply.call(null,f,inst_20328);
var state_20342__$1 = state_20342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20342__$1,(16),out,inst_20333);
} else {
if((state_val_20343 === (16))){
var inst_20335 = (state_20342[(2)]);
var state_20342__$1 = (function (){var statearr_20360 = state_20342;
(statearr_20360[(12)] = inst_20335);

return statearr_20360;
})();
var statearr_20361_20389 = state_20342__$1;
(statearr_20361_20389[(2)] = null);

(statearr_20361_20389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (10))){
var inst_20310 = (state_20342[(2)]);
var inst_20311 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20342__$1 = (function (){var statearr_20362 = state_20342;
(statearr_20362[(13)] = inst_20310);

return statearr_20362;
})();
var statearr_20363_20390 = state_20342__$1;
(statearr_20363_20390[(2)] = inst_20311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20343 === (8))){
var inst_20324 = (state_20342[(2)]);
var state_20342__$1 = state_20342;
var statearr_20364_20391 = state_20342__$1;
(statearr_20364_20391[(2)] = inst_20324);

(statearr_20364_20391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___20376,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6798__auto__,c__6873__auto___20376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_20368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20368[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_20368[(1)] = (1));

return statearr_20368;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_20342){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_20342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e20369){if((e20369 instanceof Object)){
var ex__6802__auto__ = e20369;
var statearr_20370_20392 = state_20342;
(statearr_20370_20392[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20393 = state_20342;
state_20342 = G__20393;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_20342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_20342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___20376,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6875__auto__ = (function (){var statearr_20371 = f__6874__auto__.call(null);
(statearr_20371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___20376);

return statearr_20371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___20376,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args20395 = [];
var len__5555__auto___20451 = arguments.length;
var i__5556__auto___20452 = (0);
while(true){
if((i__5556__auto___20452 < len__5555__auto___20451)){
args20395.push((arguments[i__5556__auto___20452]));

var G__20453 = (i__5556__auto___20452 + (1));
i__5556__auto___20452 = G__20453;
continue;
} else {
}
break;
}

var G__20397 = args20395.length;
switch (G__20397) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20395.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6873__auto___20455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___20455,out){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___20455,out){
return (function (state_20427){
var state_val_20428 = (state_20427[(1)]);
if((state_val_20428 === (7))){
var inst_20407 = (state_20427[(7)]);
var inst_20406 = (state_20427[(8)]);
var inst_20406__$1 = (state_20427[(2)]);
var inst_20407__$1 = cljs.core.nth.call(null,inst_20406__$1,(0),null);
var inst_20408 = cljs.core.nth.call(null,inst_20406__$1,(1),null);
var inst_20409 = (inst_20407__$1 == null);
var state_20427__$1 = (function (){var statearr_20429 = state_20427;
(statearr_20429[(9)] = inst_20408);

(statearr_20429[(7)] = inst_20407__$1);

(statearr_20429[(8)] = inst_20406__$1);

return statearr_20429;
})();
if(cljs.core.truth_(inst_20409)){
var statearr_20430_20456 = state_20427__$1;
(statearr_20430_20456[(1)] = (8));

} else {
var statearr_20431_20457 = state_20427__$1;
(statearr_20431_20457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (1))){
var inst_20398 = cljs.core.vec.call(null,chs);
var inst_20399 = inst_20398;
var state_20427__$1 = (function (){var statearr_20432 = state_20427;
(statearr_20432[(10)] = inst_20399);

return statearr_20432;
})();
var statearr_20433_20458 = state_20427__$1;
(statearr_20433_20458[(2)] = null);

(statearr_20433_20458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (4))){
var inst_20399 = (state_20427[(10)]);
var state_20427__$1 = state_20427;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20427__$1,(7),inst_20399);
} else {
if((state_val_20428 === (6))){
var inst_20423 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
var statearr_20434_20459 = state_20427__$1;
(statearr_20434_20459[(2)] = inst_20423);

(statearr_20434_20459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (3))){
var inst_20425 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20427__$1,inst_20425);
} else {
if((state_val_20428 === (2))){
var inst_20399 = (state_20427[(10)]);
var inst_20401 = cljs.core.count.call(null,inst_20399);
var inst_20402 = (inst_20401 > (0));
var state_20427__$1 = state_20427;
if(cljs.core.truth_(inst_20402)){
var statearr_20436_20460 = state_20427__$1;
(statearr_20436_20460[(1)] = (4));

} else {
var statearr_20437_20461 = state_20427__$1;
(statearr_20437_20461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (11))){
var inst_20399 = (state_20427[(10)]);
var inst_20416 = (state_20427[(2)]);
var tmp20435 = inst_20399;
var inst_20399__$1 = tmp20435;
var state_20427__$1 = (function (){var statearr_20438 = state_20427;
(statearr_20438[(11)] = inst_20416);

(statearr_20438[(10)] = inst_20399__$1);

return statearr_20438;
})();
var statearr_20439_20462 = state_20427__$1;
(statearr_20439_20462[(2)] = null);

(statearr_20439_20462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (9))){
var inst_20407 = (state_20427[(7)]);
var state_20427__$1 = state_20427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20427__$1,(11),out,inst_20407);
} else {
if((state_val_20428 === (5))){
var inst_20421 = cljs.core.async.close_BANG_.call(null,out);
var state_20427__$1 = state_20427;
var statearr_20440_20463 = state_20427__$1;
(statearr_20440_20463[(2)] = inst_20421);

(statearr_20440_20463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (10))){
var inst_20419 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
var statearr_20441_20464 = state_20427__$1;
(statearr_20441_20464[(2)] = inst_20419);

(statearr_20441_20464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (8))){
var inst_20408 = (state_20427[(9)]);
var inst_20407 = (state_20427[(7)]);
var inst_20406 = (state_20427[(8)]);
var inst_20399 = (state_20427[(10)]);
var inst_20411 = (function (){var cs = inst_20399;
var vec__20404 = inst_20406;
var v = inst_20407;
var c = inst_20408;
return ((function (cs,vec__20404,v,c,inst_20408,inst_20407,inst_20406,inst_20399,state_val_20428,c__6873__auto___20455,out){
return (function (p1__20394_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20394_SHARP_);
});
;})(cs,vec__20404,v,c,inst_20408,inst_20407,inst_20406,inst_20399,state_val_20428,c__6873__auto___20455,out))
})();
var inst_20412 = cljs.core.filterv.call(null,inst_20411,inst_20399);
var inst_20399__$1 = inst_20412;
var state_20427__$1 = (function (){var statearr_20442 = state_20427;
(statearr_20442[(10)] = inst_20399__$1);

return statearr_20442;
})();
var statearr_20443_20465 = state_20427__$1;
(statearr_20443_20465[(2)] = null);

(statearr_20443_20465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___20455,out))
;
return ((function (switch__6798__auto__,c__6873__auto___20455,out){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_20447 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20447[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_20447[(1)] = (1));

return statearr_20447;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_20427){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_20427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e20448){if((e20448 instanceof Object)){
var ex__6802__auto__ = e20448;
var statearr_20449_20466 = state_20427;
(statearr_20449_20466[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20467 = state_20427;
state_20427 = G__20467;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_20427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_20427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___20455,out))
})();
var state__6875__auto__ = (function (){var statearr_20450 = f__6874__auto__.call(null);
(statearr_20450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___20455);

return statearr_20450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___20455,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args20468 = [];
var len__5555__auto___20517 = arguments.length;
var i__5556__auto___20518 = (0);
while(true){
if((i__5556__auto___20518 < len__5555__auto___20517)){
args20468.push((arguments[i__5556__auto___20518]));

var G__20519 = (i__5556__auto___20518 + (1));
i__5556__auto___20518 = G__20519;
continue;
} else {
}
break;
}

var G__20470 = args20468.length;
switch (G__20470) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20468.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6873__auto___20521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___20521,out){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___20521,out){
return (function (state_20494){
var state_val_20495 = (state_20494[(1)]);
if((state_val_20495 === (7))){
var inst_20476 = (state_20494[(7)]);
var inst_20476__$1 = (state_20494[(2)]);
var inst_20477 = (inst_20476__$1 == null);
var inst_20478 = cljs.core.not.call(null,inst_20477);
var state_20494__$1 = (function (){var statearr_20496 = state_20494;
(statearr_20496[(7)] = inst_20476__$1);

return statearr_20496;
})();
if(inst_20478){
var statearr_20497_20522 = state_20494__$1;
(statearr_20497_20522[(1)] = (8));

} else {
var statearr_20498_20523 = state_20494__$1;
(statearr_20498_20523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (1))){
var inst_20471 = (0);
var state_20494__$1 = (function (){var statearr_20499 = state_20494;
(statearr_20499[(8)] = inst_20471);

return statearr_20499;
})();
var statearr_20500_20524 = state_20494__$1;
(statearr_20500_20524[(2)] = null);

(statearr_20500_20524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (4))){
var state_20494__$1 = state_20494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20494__$1,(7),ch);
} else {
if((state_val_20495 === (6))){
var inst_20489 = (state_20494[(2)]);
var state_20494__$1 = state_20494;
var statearr_20501_20525 = state_20494__$1;
(statearr_20501_20525[(2)] = inst_20489);

(statearr_20501_20525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (3))){
var inst_20491 = (state_20494[(2)]);
var inst_20492 = cljs.core.async.close_BANG_.call(null,out);
var state_20494__$1 = (function (){var statearr_20502 = state_20494;
(statearr_20502[(9)] = inst_20491);

return statearr_20502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20494__$1,inst_20492);
} else {
if((state_val_20495 === (2))){
var inst_20471 = (state_20494[(8)]);
var inst_20473 = (inst_20471 < n);
var state_20494__$1 = state_20494;
if(cljs.core.truth_(inst_20473)){
var statearr_20503_20526 = state_20494__$1;
(statearr_20503_20526[(1)] = (4));

} else {
var statearr_20504_20527 = state_20494__$1;
(statearr_20504_20527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (11))){
var inst_20471 = (state_20494[(8)]);
var inst_20481 = (state_20494[(2)]);
var inst_20482 = (inst_20471 + (1));
var inst_20471__$1 = inst_20482;
var state_20494__$1 = (function (){var statearr_20505 = state_20494;
(statearr_20505[(8)] = inst_20471__$1);

(statearr_20505[(10)] = inst_20481);

return statearr_20505;
})();
var statearr_20506_20528 = state_20494__$1;
(statearr_20506_20528[(2)] = null);

(statearr_20506_20528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (9))){
var state_20494__$1 = state_20494;
var statearr_20507_20529 = state_20494__$1;
(statearr_20507_20529[(2)] = null);

(statearr_20507_20529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (5))){
var state_20494__$1 = state_20494;
var statearr_20508_20530 = state_20494__$1;
(statearr_20508_20530[(2)] = null);

(statearr_20508_20530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (10))){
var inst_20486 = (state_20494[(2)]);
var state_20494__$1 = state_20494;
var statearr_20509_20531 = state_20494__$1;
(statearr_20509_20531[(2)] = inst_20486);

(statearr_20509_20531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20495 === (8))){
var inst_20476 = (state_20494[(7)]);
var state_20494__$1 = state_20494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20494__$1,(11),out,inst_20476);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___20521,out))
;
return ((function (switch__6798__auto__,c__6873__auto___20521,out){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_20513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20513[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_20513[(1)] = (1));

return statearr_20513;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_20494){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_20494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e20514){if((e20514 instanceof Object)){
var ex__6802__auto__ = e20514;
var statearr_20515_20532 = state_20494;
(statearr_20515_20532[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20533 = state_20494;
state_20494 = G__20533;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_20494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_20494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___20521,out))
})();
var state__6875__auto__ = (function (){var statearr_20516 = f__6874__auto__.call(null);
(statearr_20516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___20521);

return statearr_20516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___20521,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will contain values from ch. Consecutive duplicate
 * values will be dropped.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args20534 = [];
var len__5555__auto___20585 = arguments.length;
var i__5556__auto___20586 = (0);
while(true){
if((i__5556__auto___20586 < len__5555__auto___20585)){
args20534.push((arguments[i__5556__auto___20586]));

var G__20587 = (i__5556__auto___20586 + (1));
i__5556__auto___20586 = G__20587;
continue;
} else {
}
break;
}

var G__20536 = args20534.length;
switch (G__20536) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20534.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6873__auto___20589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___20589,out){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___20589,out){
return (function (state_20560){
var state_val_20561 = (state_20560[(1)]);
if((state_val_20561 === (7))){
var inst_20555 = (state_20560[(2)]);
var state_20560__$1 = state_20560;
var statearr_20562_20590 = state_20560__$1;
(statearr_20562_20590[(2)] = inst_20555);

(statearr_20562_20590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20561 === (1))){
var inst_20537 = null;
var state_20560__$1 = (function (){var statearr_20563 = state_20560;
(statearr_20563[(7)] = inst_20537);

return statearr_20563;
})();
var statearr_20564_20591 = state_20560__$1;
(statearr_20564_20591[(2)] = null);

(statearr_20564_20591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20561 === (4))){
var inst_20540 = (state_20560[(8)]);
var inst_20540__$1 = (state_20560[(2)]);
var inst_20541 = (inst_20540__$1 == null);
var inst_20542 = cljs.core.not.call(null,inst_20541);
var state_20560__$1 = (function (){var statearr_20565 = state_20560;
(statearr_20565[(8)] = inst_20540__$1);

return statearr_20565;
})();
if(inst_20542){
var statearr_20566_20592 = state_20560__$1;
(statearr_20566_20592[(1)] = (5));

} else {
var statearr_20567_20593 = state_20560__$1;
(statearr_20567_20593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20561 === (6))){
var state_20560__$1 = state_20560;
var statearr_20568_20594 = state_20560__$1;
(statearr_20568_20594[(2)] = null);

(statearr_20568_20594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20561 === (3))){
var inst_20557 = (state_20560[(2)]);
var inst_20558 = cljs.core.async.close_BANG_.call(null,out);
var state_20560__$1 = (function (){var statearr_20569 = state_20560;
(statearr_20569[(9)] = inst_20557);

return statearr_20569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20560__$1,inst_20558);
} else {
if((state_val_20561 === (2))){
var state_20560__$1 = state_20560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20560__$1,(4),ch);
} else {
if((state_val_20561 === (11))){
var inst_20540 = (state_20560[(8)]);
var inst_20549 = (state_20560[(2)]);
var inst_20537 = inst_20540;
var state_20560__$1 = (function (){var statearr_20570 = state_20560;
(statearr_20570[(7)] = inst_20537);

(statearr_20570[(10)] = inst_20549);

return statearr_20570;
})();
var statearr_20571_20595 = state_20560__$1;
(statearr_20571_20595[(2)] = null);

(statearr_20571_20595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20561 === (9))){
var inst_20540 = (state_20560[(8)]);
var state_20560__$1 = state_20560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20560__$1,(11),out,inst_20540);
} else {
if((state_val_20561 === (5))){
var inst_20537 = (state_20560[(7)]);
var inst_20540 = (state_20560[(8)]);
var inst_20544 = cljs.core._EQ_.call(null,inst_20540,inst_20537);
var state_20560__$1 = state_20560;
if(inst_20544){
var statearr_20573_20596 = state_20560__$1;
(statearr_20573_20596[(1)] = (8));

} else {
var statearr_20574_20597 = state_20560__$1;
(statearr_20574_20597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20561 === (10))){
var inst_20552 = (state_20560[(2)]);
var state_20560__$1 = state_20560;
var statearr_20575_20598 = state_20560__$1;
(statearr_20575_20598[(2)] = inst_20552);

(statearr_20575_20598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20561 === (8))){
var inst_20537 = (state_20560[(7)]);
var tmp20572 = inst_20537;
var inst_20537__$1 = tmp20572;
var state_20560__$1 = (function (){var statearr_20576 = state_20560;
(statearr_20576[(7)] = inst_20537__$1);

return statearr_20576;
})();
var statearr_20577_20599 = state_20560__$1;
(statearr_20577_20599[(2)] = null);

(statearr_20577_20599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___20589,out))
;
return ((function (switch__6798__auto__,c__6873__auto___20589,out){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_20581 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20581[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_20581[(1)] = (1));

return statearr_20581;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_20560){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_20560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e20582){if((e20582 instanceof Object)){
var ex__6802__auto__ = e20582;
var statearr_20583_20600 = state_20560;
(statearr_20583_20600[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20601 = state_20560;
state_20560 = G__20601;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_20560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_20560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___20589,out))
})();
var state__6875__auto__ = (function (){var statearr_20584 = f__6874__auto__.call(null);
(statearr_20584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___20589);

return statearr_20584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___20589,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will contain vectors of n items taken from ch. The
 * final vector in the return channel may be smaller than n if ch closed before
 * the vector could be completely filled.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20602 = [];
var len__5555__auto___20672 = arguments.length;
var i__5556__auto___20673 = (0);
while(true){
if((i__5556__auto___20673 < len__5555__auto___20672)){
args20602.push((arguments[i__5556__auto___20673]));

var G__20674 = (i__5556__auto___20673 + (1));
i__5556__auto___20673 = G__20674;
continue;
} else {
}
break;
}

var G__20604 = args20602.length;
switch (G__20604) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20602.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6873__auto___20676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___20676,out){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___20676,out){
return (function (state_20642){
var state_val_20643 = (state_20642[(1)]);
if((state_val_20643 === (7))){
var inst_20638 = (state_20642[(2)]);
var state_20642__$1 = state_20642;
var statearr_20644_20677 = state_20642__$1;
(statearr_20644_20677[(2)] = inst_20638);

(statearr_20644_20677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (1))){
var inst_20605 = (new Array(n));
var inst_20606 = inst_20605;
var inst_20607 = (0);
var state_20642__$1 = (function (){var statearr_20645 = state_20642;
(statearr_20645[(7)] = inst_20607);

(statearr_20645[(8)] = inst_20606);

return statearr_20645;
})();
var statearr_20646_20678 = state_20642__$1;
(statearr_20646_20678[(2)] = null);

(statearr_20646_20678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (4))){
var inst_20610 = (state_20642[(9)]);
var inst_20610__$1 = (state_20642[(2)]);
var inst_20611 = (inst_20610__$1 == null);
var inst_20612 = cljs.core.not.call(null,inst_20611);
var state_20642__$1 = (function (){var statearr_20647 = state_20642;
(statearr_20647[(9)] = inst_20610__$1);

return statearr_20647;
})();
if(inst_20612){
var statearr_20648_20679 = state_20642__$1;
(statearr_20648_20679[(1)] = (5));

} else {
var statearr_20649_20680 = state_20642__$1;
(statearr_20649_20680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (15))){
var inst_20632 = (state_20642[(2)]);
var state_20642__$1 = state_20642;
var statearr_20650_20681 = state_20642__$1;
(statearr_20650_20681[(2)] = inst_20632);

(statearr_20650_20681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (13))){
var state_20642__$1 = state_20642;
var statearr_20651_20682 = state_20642__$1;
(statearr_20651_20682[(2)] = null);

(statearr_20651_20682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (6))){
var inst_20607 = (state_20642[(7)]);
var inst_20628 = (inst_20607 > (0));
var state_20642__$1 = state_20642;
if(cljs.core.truth_(inst_20628)){
var statearr_20652_20683 = state_20642__$1;
(statearr_20652_20683[(1)] = (12));

} else {
var statearr_20653_20684 = state_20642__$1;
(statearr_20653_20684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (3))){
var inst_20640 = (state_20642[(2)]);
var state_20642__$1 = state_20642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20642__$1,inst_20640);
} else {
if((state_val_20643 === (12))){
var inst_20606 = (state_20642[(8)]);
var inst_20630 = cljs.core.vec.call(null,inst_20606);
var state_20642__$1 = state_20642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20642__$1,(15),out,inst_20630);
} else {
if((state_val_20643 === (2))){
var state_20642__$1 = state_20642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20642__$1,(4),ch);
} else {
if((state_val_20643 === (11))){
var inst_20622 = (state_20642[(2)]);
var inst_20623 = (new Array(n));
var inst_20606 = inst_20623;
var inst_20607 = (0);
var state_20642__$1 = (function (){var statearr_20654 = state_20642;
(statearr_20654[(7)] = inst_20607);

(statearr_20654[(10)] = inst_20622);

(statearr_20654[(8)] = inst_20606);

return statearr_20654;
})();
var statearr_20655_20685 = state_20642__$1;
(statearr_20655_20685[(2)] = null);

(statearr_20655_20685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (9))){
var inst_20606 = (state_20642[(8)]);
var inst_20620 = cljs.core.vec.call(null,inst_20606);
var state_20642__$1 = state_20642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20642__$1,(11),out,inst_20620);
} else {
if((state_val_20643 === (5))){
var inst_20607 = (state_20642[(7)]);
var inst_20610 = (state_20642[(9)]);
var inst_20615 = (state_20642[(11)]);
var inst_20606 = (state_20642[(8)]);
var inst_20614 = (inst_20606[inst_20607] = inst_20610);
var inst_20615__$1 = (inst_20607 + (1));
var inst_20616 = (inst_20615__$1 < n);
var state_20642__$1 = (function (){var statearr_20656 = state_20642;
(statearr_20656[(12)] = inst_20614);

(statearr_20656[(11)] = inst_20615__$1);

return statearr_20656;
})();
if(cljs.core.truth_(inst_20616)){
var statearr_20657_20686 = state_20642__$1;
(statearr_20657_20686[(1)] = (8));

} else {
var statearr_20658_20687 = state_20642__$1;
(statearr_20658_20687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (14))){
var inst_20635 = (state_20642[(2)]);
var inst_20636 = cljs.core.async.close_BANG_.call(null,out);
var state_20642__$1 = (function (){var statearr_20660 = state_20642;
(statearr_20660[(13)] = inst_20635);

return statearr_20660;
})();
var statearr_20661_20688 = state_20642__$1;
(statearr_20661_20688[(2)] = inst_20636);

(statearr_20661_20688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (10))){
var inst_20626 = (state_20642[(2)]);
var state_20642__$1 = state_20642;
var statearr_20662_20689 = state_20642__$1;
(statearr_20662_20689[(2)] = inst_20626);

(statearr_20662_20689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20643 === (8))){
var inst_20615 = (state_20642[(11)]);
var inst_20606 = (state_20642[(8)]);
var tmp20659 = inst_20606;
var inst_20606__$1 = tmp20659;
var inst_20607 = inst_20615;
var state_20642__$1 = (function (){var statearr_20663 = state_20642;
(statearr_20663[(7)] = inst_20607);

(statearr_20663[(8)] = inst_20606__$1);

return statearr_20663;
})();
var statearr_20664_20690 = state_20642__$1;
(statearr_20664_20690[(2)] = null);

(statearr_20664_20690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___20676,out))
;
return ((function (switch__6798__auto__,c__6873__auto___20676,out){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_20668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20668[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_20668[(1)] = (1));

return statearr_20668;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_20642){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_20642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e20669){if((e20669 instanceof Object)){
var ex__6802__auto__ = e20669;
var statearr_20670_20691 = state_20642;
(statearr_20670_20691[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20692 = state_20642;
state_20642 = G__20692;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_20642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_20642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___20676,out))
})();
var state__6875__auto__ = (function (){var statearr_20671 = f__6874__auto__.call(null);
(statearr_20671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___20676);

return statearr_20671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___20676,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will contain vectors of items taken from ch. New
 * vectors will be created whenever (f itm) returns a value that differs from
 * the previous item's (f itm).
 * 
 *   The output channel is unbuffered, unless buf-or-n is given
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20693 = [];
var len__5555__auto___20767 = arguments.length;
var i__5556__auto___20768 = (0);
while(true){
if((i__5556__auto___20768 < len__5555__auto___20767)){
args20693.push((arguments[i__5556__auto___20768]));

var G__20769 = (i__5556__auto___20768 + (1));
i__5556__auto___20768 = G__20769;
continue;
} else {
}
break;
}

var G__20695 = args20693.length;
switch (G__20695) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20693.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6873__auto___20771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto___20771,out){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto___20771,out){
return (function (state_20737){
var state_val_20738 = (state_20737[(1)]);
if((state_val_20738 === (7))){
var inst_20733 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
var statearr_20739_20772 = state_20737__$1;
(statearr_20739_20772[(2)] = inst_20733);

(statearr_20739_20772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (1))){
var inst_20696 = [];
var inst_20697 = inst_20696;
var inst_20698 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20737__$1 = (function (){var statearr_20740 = state_20737;
(statearr_20740[(7)] = inst_20697);

(statearr_20740[(8)] = inst_20698);

return statearr_20740;
})();
var statearr_20741_20773 = state_20737__$1;
(statearr_20741_20773[(2)] = null);

(statearr_20741_20773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (4))){
var inst_20701 = (state_20737[(9)]);
var inst_20701__$1 = (state_20737[(2)]);
var inst_20702 = (inst_20701__$1 == null);
var inst_20703 = cljs.core.not.call(null,inst_20702);
var state_20737__$1 = (function (){var statearr_20742 = state_20737;
(statearr_20742[(9)] = inst_20701__$1);

return statearr_20742;
})();
if(inst_20703){
var statearr_20743_20774 = state_20737__$1;
(statearr_20743_20774[(1)] = (5));

} else {
var statearr_20744_20775 = state_20737__$1;
(statearr_20744_20775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (15))){
var inst_20727 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
var statearr_20745_20776 = state_20737__$1;
(statearr_20745_20776[(2)] = inst_20727);

(statearr_20745_20776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (13))){
var state_20737__$1 = state_20737;
var statearr_20746_20777 = state_20737__$1;
(statearr_20746_20777[(2)] = null);

(statearr_20746_20777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (6))){
var inst_20697 = (state_20737[(7)]);
var inst_20722 = inst_20697.length;
var inst_20723 = (inst_20722 > (0));
var state_20737__$1 = state_20737;
if(cljs.core.truth_(inst_20723)){
var statearr_20747_20778 = state_20737__$1;
(statearr_20747_20778[(1)] = (12));

} else {
var statearr_20748_20779 = state_20737__$1;
(statearr_20748_20779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (3))){
var inst_20735 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20737__$1,inst_20735);
} else {
if((state_val_20738 === (12))){
var inst_20697 = (state_20737[(7)]);
var inst_20725 = cljs.core.vec.call(null,inst_20697);
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20737__$1,(15),out,inst_20725);
} else {
if((state_val_20738 === (2))){
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20737__$1,(4),ch);
} else {
if((state_val_20738 === (11))){
var inst_20705 = (state_20737[(10)]);
var inst_20701 = (state_20737[(9)]);
var inst_20715 = (state_20737[(2)]);
var inst_20716 = [];
var inst_20717 = inst_20716.push(inst_20701);
var inst_20697 = inst_20716;
var inst_20698 = inst_20705;
var state_20737__$1 = (function (){var statearr_20749 = state_20737;
(statearr_20749[(11)] = inst_20717);

(statearr_20749[(7)] = inst_20697);

(statearr_20749[(8)] = inst_20698);

(statearr_20749[(12)] = inst_20715);

return statearr_20749;
})();
var statearr_20750_20780 = state_20737__$1;
(statearr_20750_20780[(2)] = null);

(statearr_20750_20780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (9))){
var inst_20697 = (state_20737[(7)]);
var inst_20713 = cljs.core.vec.call(null,inst_20697);
var state_20737__$1 = state_20737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20737__$1,(11),out,inst_20713);
} else {
if((state_val_20738 === (5))){
var inst_20698 = (state_20737[(8)]);
var inst_20705 = (state_20737[(10)]);
var inst_20701 = (state_20737[(9)]);
var inst_20705__$1 = f.call(null,inst_20701);
var inst_20706 = cljs.core._EQ_.call(null,inst_20705__$1,inst_20698);
var inst_20707 = cljs.core.keyword_identical_QMARK_.call(null,inst_20698,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20708 = (inst_20706) || (inst_20707);
var state_20737__$1 = (function (){var statearr_20751 = state_20737;
(statearr_20751[(10)] = inst_20705__$1);

return statearr_20751;
})();
if(cljs.core.truth_(inst_20708)){
var statearr_20752_20781 = state_20737__$1;
(statearr_20752_20781[(1)] = (8));

} else {
var statearr_20753_20782 = state_20737__$1;
(statearr_20753_20782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (14))){
var inst_20730 = (state_20737[(2)]);
var inst_20731 = cljs.core.async.close_BANG_.call(null,out);
var state_20737__$1 = (function (){var statearr_20755 = state_20737;
(statearr_20755[(13)] = inst_20730);

return statearr_20755;
})();
var statearr_20756_20783 = state_20737__$1;
(statearr_20756_20783[(2)] = inst_20731);

(statearr_20756_20783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (10))){
var inst_20720 = (state_20737[(2)]);
var state_20737__$1 = state_20737;
var statearr_20757_20784 = state_20737__$1;
(statearr_20757_20784[(2)] = inst_20720);

(statearr_20757_20784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20738 === (8))){
var inst_20697 = (state_20737[(7)]);
var inst_20705 = (state_20737[(10)]);
var inst_20701 = (state_20737[(9)]);
var inst_20710 = inst_20697.push(inst_20701);
var tmp20754 = inst_20697;
var inst_20697__$1 = tmp20754;
var inst_20698 = inst_20705;
var state_20737__$1 = (function (){var statearr_20758 = state_20737;
(statearr_20758[(14)] = inst_20710);

(statearr_20758[(7)] = inst_20697__$1);

(statearr_20758[(8)] = inst_20698);

return statearr_20758;
})();
var statearr_20759_20785 = state_20737__$1;
(statearr_20759_20785[(2)] = null);

(statearr_20759_20785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6873__auto___20771,out))
;
return ((function (switch__6798__auto__,c__6873__auto___20771,out){
return (function() {
var cljs$core$async$state_machine__6799__auto__ = null;
var cljs$core$async$state_machine__6799__auto____0 = (function (){
var statearr_20763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20763[(0)] = cljs$core$async$state_machine__6799__auto__);

(statearr_20763[(1)] = (1));

return statearr_20763;
});
var cljs$core$async$state_machine__6799__auto____1 = (function (state_20737){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_20737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e20764){if((e20764 instanceof Object)){
var ex__6802__auto__ = e20764;
var statearr_20765_20786 = state_20737;
(statearr_20765_20786[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20787 = state_20737;
state_20737 = G__20787;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
cljs$core$async$state_machine__6799__auto__ = function(state_20737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6799__auto____1.call(this,state_20737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6799__auto____0;
cljs$core$async$state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6799__auto____1;
return cljs$core$async$state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto___20771,out))
})();
var state__6875__auto__ = (function (){var statearr_20766 = f__6874__auto__.call(null);
(statearr_20766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto___20771);

return statearr_20766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto___20771,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map