// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

/**
 * @interface
 */
cljs.core.async.impl.protocols.ReadPort = function(){};

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__5152__auto__ = (((port == null))?null:port);
var m__5153__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,port,fn1_handler);
} else {
var m__5153__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,port,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.WritePort = function(){};

/**
 * derefable nil if put, nil if put was enqueued. Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn0_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else {
var x__5152__auto__ = (((port == null))?null:port);
var m__5153__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,port,val,fn0_handler);
} else {
var m__5153__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,port,val,fn0_handler);
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Channel = function(){};

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__5152__auto__ = (((chan == null))?null:chan);
var m__5153__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,chan);
} else {
var m__5153__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Handler = function(){};

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__5152__auto__ = (((h == null))?null:h);
var m__5153__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,h);
} else {
var m__5153__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__5152__auto__ = (((h == null))?null:h);
var m__5153__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,h);
} else {
var m__5153__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Buffer = function(){};

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__5152__auto__ = (((b == null))?null:b);
var m__5153__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,b);
} else {
var m__5153__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__5152__auto__ = (((b == null))?null:b);
var m__5153__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,b);
} else {
var m__5153__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(b,itm){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else {
var x__5152__auto__ = (((b == null))?null:b);
var m__5153__auto__ = (cljs.core.async.impl.protocols.add_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,b,itm);
} else {
var m__5153__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,b,itm);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!",b);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.UnblockingBuffer = function(){};


//# sourceMappingURL=protocols.js.map