// Compiled by ClojureScript 1.7.122 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.display_name[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core.display_name["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.init_state[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core.init_state["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.should_update[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,next_props,next_state);
} else {
var m__5153__auto____$1 = (om.core.should_update["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.will_mount[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core.will_mount["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.did_mount[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core.did_mount["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.will_unmount[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.will_update[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,next_props,next_state);
} else {
var m__5153__auto____$1 = (om.core.will_update["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.did_update[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__5153__auto____$1 = (om.core.did_update["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.will_receive_props[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,next_props);
} else {
var m__5153__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.render[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core.render["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.render_props[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,props,state);
} else {
var m__5153__auto____$1 = (om.core.render_props["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core.render_state[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,state);
} else {
var m__5153__auto____$1 = (om.core.render_state["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__5153__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args17989 = [];
var len__5555__auto___17992 = arguments.length;
var i__5556__auto___17993 = (0);
while(true){
if((i__5556__auto___17993 < len__5555__auto___17992)){
args17989.push((arguments[i__5556__auto___17993]));

var G__17994 = (i__5556__auto___17993 + (1));
i__5556__auto___17993 = G__17994;
continue;
} else {
}
break;
}

var G__17991 = args17989.length;
switch (G__17991) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17989.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._get_state[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core._get_state["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._get_state[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,ks);
} else {
var m__5153__auto____$1 = (om.core._get_state["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args17996 = [];
var len__5555__auto___17999 = arguments.length;
var i__5556__auto___18000 = (0);
while(true){
if((i__5556__auto___18000 < len__5555__auto___17999)){
args17996.push((arguments[i__5556__auto___18000]));

var G__18001 = (i__5556__auto___18000 + (1));
i__5556__auto___18000 = G__18001;
continue;
} else {
}
break;
}

var G__17998 = args17996.length;
switch (G__17998) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17996.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._get_render_state[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._get_render_state[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,ks);
} else {
var m__5153__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args18003 = [];
var len__5555__auto___18006 = arguments.length;
var i__5556__auto___18007 = (0);
while(true){
if((i__5556__auto___18007 < len__5555__auto___18006)){
args18003.push((arguments[i__5556__auto___18007]));

var G__18008 = (i__5556__auto___18007 + (1));
i__5556__auto___18007 = G__18008;
continue;
} else {
}
break;
}

var G__18005 = args18003.length;
switch (G__18005) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18003.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,val,render);
} else {
var m__5153__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,ks,val,render);
} else {
var m__5153__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._get_queue[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core._get_queue["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,c);
} else {
var m__5153__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5152__auto__ = (((x == null))?null:x);
var m__5153__auto__ = (om.core._value[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,x);
} else {
var m__5153__auto____$1 = (om.core._value["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5152__auto__ = (((cursor == null))?null:cursor);
var m__5153__auto__ = (om.core._path[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,cursor);
} else {
var m__5153__auto____$1 = (om.core._path["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5152__auto__ = (((cursor == null))?null:cursor);
var m__5153__auto__ = (om.core._state[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,cursor);
} else {
var m__5153__auto____$1 = (om.core._state["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args18010 = [];
var len__5555__auto___18013 = arguments.length;
var i__5556__auto___18014 = (0);
while(true){
if((i__5556__auto___18014 < len__5555__auto___18013)){
args18010.push((arguments[i__5556__auto___18014]));

var G__18015 = (i__5556__auto___18014 + (1));
i__5556__auto___18014 = G__18015;
continue;
} else {
}
break;
}

var G__18012 = args18010.length;
switch (G__18012) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18010.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5152__auto__ = (((value == null))?null:value);
var m__5153__auto__ = (om.core._to_cursor[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,value,state);
} else {
var m__5153__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5152__auto__ = (((value == null))?null:value);
var m__5153__auto__ = (om.core._to_cursor[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,value,state,path);
} else {
var m__5153__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5152__auto__ = (((cursor == null))?null:cursor);
var m__5153__auto__ = (om.core._derive[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,cursor,derived,state,path);
} else {
var m__5153__auto____$1 = (om.core._derive["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5152__auto__ = (((cursor == null))?null:cursor);
var m__5153__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,cursor,korks,f,tag);
} else {
var m__5153__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5152__auto__ = (((x == null))?null:x);
var m__5153__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,x,key,tx_listen);
} else {
var m__5153__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5152__auto__ = (((x == null))?null:x);
var m__5153__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,x,key);
} else {
var m__5153__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5152__auto__ = (((x == null))?null:x);
var m__5153__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__5153__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,id,p,val);
} else {
var m__5153__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,id,p);
} else {
var m__5153__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,id);
} else {
var m__5153__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._get_property[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,id,p);
} else {
var m__5153__auto____$1 = (om.core._get_property["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5152__auto__ = (((cursor == null))?null:cursor);
var m__5153__auto__ = (om.core._root_key[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,cursor);
} else {
var m__5153__auto____$1 = (om.core._root_key["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._adapt[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,other);
} else {
var m__5153__auto____$1 = (om.core._adapt["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,c);
} else {
var m__5153__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$,c);
} else {
var m__5153__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5152__auto__ = (((this$ == null))?null:this$);
var m__5153__auto__ = (om.core._get_deps[goog.typeOf(x__5152__auto__)]);
if(!((m__5153__auto__ == null))){
return m__5153__auto__.call(null,this$);
} else {
var m__5153__auto____$1 = (om.core._get_deps["_"]);
if(!((m__5153__auto____$1 == null))){
return m__5153__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args18021 = [];
var len__5555__auto___18025 = arguments.length;
var i__5556__auto___18026 = (0);
while(true){
if((i__5556__auto___18026 < len__5555__auto___18025)){
args18021.push((arguments[i__5556__auto___18026]));

var G__18027 = (i__5556__auto___18026 + (1));
i__5556__auto___18026 = G__18027;
continue;
} else {
}
break;
}

var G__18023 = args18021.length;
switch (G__18023) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18021.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__18024 = (x.props["__om_cursor"]);
var G__18024__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__18024,korks__$1):G__18024);
return G__18024__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args18029 = [];
var len__5555__auto___18032 = arguments.length;
var i__5556__auto___18033 = (0);
while(true){
if((i__5556__auto___18033 < len__5555__auto___18032)){
args18029.push((arguments[i__5556__auto___18033]));

var G__18034 = (i__5556__auto___18033 + (1));
i__5556__auto___18033 = G__18034;
continue;
} else {
}
break;
}

var G__18031 = args18029.length;
switch (G__18031) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18029.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args18036 = [];
var len__5555__auto___18039 = arguments.length;
var i__5556__auto___18040 = (0);
while(true){
if((i__5556__auto___18040 < len__5555__auto___18039)){
args18036.push((arguments[i__5556__auto___18040]));

var G__18041 = (i__5556__auto___18040 + (1));
i__5556__auto___18040 = G__18041;
continue;
} else {
}
break;
}

var G__18038 = args18036.length;
switch (G__18038) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18036.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__18044 = state;
(G__18044["__om_prev_state"] = (state["__om_state"]));

(G__18044["__om_state"] = pending_state);

(G__18044["__om_pending_state"] = null);

return G__18044;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args18045 = [];
var len__5555__auto___18048 = arguments.length;
var i__5556__auto___18049 = (0);
while(true){
if((i__5556__auto___18049 < len__5555__auto___18048)){
args18045.push((arguments[i__5556__auto___18049]));

var G__18050 = (i__5556__auto___18049 + (1));
i__5556__auto___18049 = G__18050;
continue;
} else {
}
break;
}

var G__18047 = args18045.length;
switch (G__18047) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18045.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4497__auto__ = props;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4497__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_18074 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4497__auto__ = (state_18074["__om_prev_state"]);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return (state_18074["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__18055 = cljs.core.seq.call(null,refs);
var chunk__18056 = null;
var count__18057 = (0);
var i__18058 = (0);
while(true){
if((i__18058 < count__18057)){
var ref = cljs.core._nth.call(null,chunk__18056,i__18058);
om.core.unobserve.call(null,this$,ref);

var G__18075 = seq__18055;
var G__18076 = chunk__18056;
var G__18077 = count__18057;
var G__18078 = (i__18058 + (1));
seq__18055 = G__18075;
chunk__18056 = G__18076;
count__18057 = G__18077;
i__18058 = G__18078;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__18055);
if(temp__4425__auto____$1){
var seq__18055__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18055__$1)){
var c__5300__auto__ = cljs.core.chunk_first.call(null,seq__18055__$1);
var G__18079 = cljs.core.chunk_rest.call(null,seq__18055__$1);
var G__18080 = c__5300__auto__;
var G__18081 = cljs.core.count.call(null,c__5300__auto__);
var G__18082 = (0);
seq__18055 = G__18079;
chunk__18056 = G__18080;
count__18057 = G__18081;
i__18058 = G__18082;
continue;
} else {
var ref = cljs.core.first.call(null,seq__18055__$1);
om.core.unobserve.call(null,this$,ref);

var G__18083 = cljs.core.next.call(null,seq__18055__$1);
var G__18084 = null;
var G__18085 = (0);
var G__18086 = (0);
seq__18055 = G__18083;
chunk__18056 = G__18084;
count__18057 = G__18085;
i__18058 = G__18086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4485__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__4485__auto__)){
var and__4485__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__4485__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__4485__auto____$1;
}
} else {
return and__4485__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4485__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4485__auto__){
return cljs.core.some.call(null,((function (and__4485__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__18052_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__18052_SHARP_);
});})(and__4485__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4485__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_18061 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_18062 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_18063 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_18064 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_18065 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_18065;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_18064;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18063;

om.core._STAR_state_STAR_ = _STAR_state_STAR_18062;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_18061;
}}),(function (next_props,next_state){
var this$ = this;
var c_18087 = om.core.children.call(null,this$);
if(((!((c_18087 == null)))?(((false) || (c_18087.om$core$IWillUpdate$))?true:(((!c_18087.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_18087):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_18087))){
var state_18088 = this$.state;
om.core.will_update.call(null,c_18087,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4497__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4497__auto__ = id;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_18089 = om.core.children.call(null,this$);
if(((!((c_18089 == null)))?(((false) || (c_18089.om$core$IWillMount$))?true:(((!c_18089.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_18089):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_18089))){
om.core.will_mount.call(null,c_18089);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x18091 = obj;
x18091.om$core$ISetState$ = true;

x18091.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x18091){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4485__auto__ = !((app_state == null));
if(and__4485__auto__){
return render;
} else {
return and__4485__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x18091))
;

x18091.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x18091){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4485__auto__ = !((app_state == null));
if(and__4485__auto__){
return render;
} else {
return and__4485__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x18091))
;

x18091.om$core$IGetRenderState$ = true;

x18091.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x18091){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x18091))
;

x18091.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x18091){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x18091))
;

x18091.om$core$IGetState$ = true;

x18091.om$core$IGetState$_get_state$arity$1 = ((function (x18091){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4497__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return (state["__om_state"]);
}
});})(x18091))
;

x18091.om$core$IGetState$_get_state$arity$2 = ((function (x18091){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x18091))
;

return x18091;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4497__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4497__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_18102 = om.core.children.call(null,this$);
if(((!((c_18102 == null)))?(((false) || (c_18102.om$core$IWillMount$))?true:(((!c_18102.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_18102):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_18102))){
om.core.will_mount.call(null,c_18102);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__18096 = cljs.core.seq.call(null,refs);
var chunk__18097 = null;
var count__18098 = (0);
var i__18099 = (0);
while(true){
if((i__18099 < count__18098)){
var ref = cljs.core._nth.call(null,chunk__18097,i__18099);
om.core.unobserve.call(null,this$,ref);

var G__18103 = seq__18096;
var G__18104 = chunk__18097;
var G__18105 = count__18098;
var G__18106 = (i__18099 + (1));
seq__18096 = G__18103;
chunk__18097 = G__18104;
count__18098 = G__18105;
i__18099 = G__18106;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__18096);
if(temp__4425__auto____$1){
var seq__18096__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18096__$1)){
var c__5300__auto__ = cljs.core.chunk_first.call(null,seq__18096__$1);
var G__18107 = cljs.core.chunk_rest.call(null,seq__18096__$1);
var G__18108 = c__5300__auto__;
var G__18109 = cljs.core.count.call(null,c__5300__auto__);
var G__18110 = (0);
seq__18096 = G__18107;
chunk__18097 = G__18108;
count__18098 = G__18109;
i__18099 = G__18110;
continue;
} else {
var ref = cljs.core.first.call(null,seq__18096__$1);
om.core.unobserve.call(null,this$,ref);

var G__18111 = cljs.core.next.call(null,seq__18096__$1);
var G__18112 = null;
var G__18113 = (0);
var G__18114 = (0);
seq__18096 = G__18111;
chunk__18097 = G__18112;
count__18098 = G__18113;
i__18099 = G__18114;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_18115 = this$.props;
var c_18116 = om.core.children.call(null,this$);
if(((!((c_18116 == null)))?(((false) || (c_18116.om$core$IWillUpdate$))?true:(((!c_18116.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_18116):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_18116))){
var state_18117 = this$.state;
om.core.will_update.call(null,c_18116,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_18118 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4497__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x18120 = cljs.core.clj__GT_js.call(null,methods$);
x18120.om$core$ISetState$ = true;

x18120.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x18120){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4485__auto__ = !((gstate == null));
if(and__4485__auto__){
return render;
} else {
return and__4485__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x18120))
;

x18120.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x18120){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x18120))
;

x18120.om$core$IGetRenderState$ = true;

x18120.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x18120){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x18120))
;

x18120.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x18120){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x18120))
;

x18120.om$core$IGetState$ = true;

x18120.om$core$IGetState$_get_state$arity$1 = ((function (x18120){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4497__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x18120))
;

x18120.om$core$IGetState$_get_state$arity$2 = ((function (x18120){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x18120))
;

return x18120;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__18124){
var vec__18125 = p__18124;
var k = cljs.core.nth.call(null,vec__18125,(0),null);
var v = cljs.core.nth.call(null,vec__18125,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__18126 = null;
var G__18126__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__18126__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__18126 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18126__2.call(this,self__,k);
case 3:
return G__18126__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18126.cljs$core$IFn$_invoke$arity$2 = G__18126__2;
G__18126.cljs$core$IFn$_invoke$arity$3 = G__18126__3;
return G__18126;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args18123){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18123)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__18128 = null;
var G__18128__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__18128__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__18128 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18128__2.call(this,self__,k);
case 3:
return G__18128__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18128.cljs$core$IFn$_invoke$arity$2 = G__18128__2;
G__18128.cljs$core$IFn$_invoke$arity$3 = G__18128__3;
return G__18128;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args18127){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18127)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x18130 = cljs.core.clone.call(null,val);
x18130.cljs$core$IDeref$ = true;

x18130.cljs$core$IDeref$_deref$arity$1 = ((function (x18130){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x18130))
;

x18130.om$core$ICursor$ = true;

x18130.om$core$ICursor$_path$arity$1 = ((function (x18130){
return (function (_){
var ___$1 = this;
return path;
});})(x18130))
;

x18130.om$core$ICursor$_state$arity$1 = ((function (x18130){
return (function (_){
var ___$1 = this;
return state;
});})(x18130))
;

x18130.om$core$ITransact$ = true;

x18130.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18130){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x18130))
;

x18130.cljs$core$IEquiv$ = true;

x18130.cljs$core$IEquiv$_equiv$arity$2 = ((function (x18130){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x18130))
;

return x18130;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args18131 = [];
var len__5555__auto___18136 = arguments.length;
var i__5556__auto___18137 = (0);
while(true){
if((i__5556__auto___18137 < len__5555__auto___18136)){
args18131.push((arguments[i__5556__auto___18137]));

var G__18138 = (i__5556__auto___18137 + (1));
i__5556__auto___18137 = G__18138;
continue;
} else {
}
break;
}

var G__18133 = args18131.length;
switch (G__18133) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18131.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x18143 = cljs.core.clone.call(null,x);
x18143.cljs$core$ICloneable$ = true;

x18143.cljs$core$ICloneable$_clone$arity$1 = ((function (x18143){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x18143))
;

x18143.om$core$IAdapt$ = true;

x18143.om$core$IAdapt$_adapt$arity$2 = ((function (x18143){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x18143))
;

x18143.om$core$ICursorDerive$ = true;

x18143.om$core$ICursorDerive$_derive$arity$4 = ((function (x18143){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x18143))
;

x18143.om$core$ITransact$ = true;

x18143.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18143){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x18143))
;

return x18143;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x18151 = cljs.core.clone.call(null,cursor);
x18151.om$core$ICursorDerive$ = true;

x18151.om$core$ICursorDerive$_derive$arity$4 = ((function (x18151,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x18151,path,storage))
;

x18151.om$core$IOmRef$ = true;

x18151.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x18151,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x18151,path,storage))
;

x18151.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x18151,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x18151,path,storage))
;

x18151.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x18151,path,storage){
return (function (_){
var ___$1 = this;
var seq__18152 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__18153 = null;
var count__18154 = (0);
var i__18155 = (0);
while(true){
if((i__18155 < count__18154)){
var c = cljs.core._nth.call(null,chunk__18153,i__18155);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__18156 = seq__18152;
var G__18157 = chunk__18153;
var G__18158 = count__18154;
var G__18159 = (i__18155 + (1));
seq__18152 = G__18156;
chunk__18153 = G__18157;
count__18154 = G__18158;
i__18155 = G__18159;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18152);
if(temp__4425__auto__){
var seq__18152__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18152__$1)){
var c__5300__auto__ = cljs.core.chunk_first.call(null,seq__18152__$1);
var G__18160 = cljs.core.chunk_rest.call(null,seq__18152__$1);
var G__18161 = c__5300__auto__;
var G__18162 = cljs.core.count.call(null,c__5300__auto__);
var G__18163 = (0);
seq__18152 = G__18160;
chunk__18153 = G__18161;
count__18154 = G__18162;
i__18155 = G__18163;
continue;
} else {
var c = cljs.core.first.call(null,seq__18152__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__18164 = cljs.core.next.call(null,seq__18152__$1);
var G__18165 = null;
var G__18166 = (0);
var G__18167 = (0);
seq__18152 = G__18164;
chunk__18153 = G__18165;
count__18154 = G__18166;
i__18155 = G__18167;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18151,path,storage))
;

x18151.om$core$IOmRef$_get_deps$arity$1 = ((function (x18151,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x18151,path,storage))
;

x18151.om$core$ITransact$ = true;

x18151.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x18151,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x18151,path,storage))
;

return x18151;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4497__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ref-cursor?","ref-cursor?",1026875459,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4497__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args18168 = [];
var len__5555__auto___18175 = arguments.length;
var i__5556__auto___18176 = (0);
while(true){
if((i__5556__auto___18176 < len__5555__auto___18175)){
args18168.push((arguments[i__5556__auto___18176]));

var G__18177 = (i__5556__auto___18176 + (1));
i__5556__auto___18176 = G__18177;
continue;
} else {
}
break;
}

var G__18170 = args18168.length;
switch (G__18170) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18168.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__18171_18179 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__18172_18180 = null;
var count__18173_18181 = (0);
var i__18174_18182 = (0);
while(true){
if((i__18174_18182 < count__18173_18181)){
var f_18183 = cljs.core._nth.call(null,chunk__18172_18180,i__18174_18182);
f_18183.call(null);

var G__18184 = seq__18171_18179;
var G__18185 = chunk__18172_18180;
var G__18186 = count__18173_18181;
var G__18187 = (i__18174_18182 + (1));
seq__18171_18179 = G__18184;
chunk__18172_18180 = G__18185;
count__18173_18181 = G__18186;
i__18174_18182 = G__18187;
continue;
} else {
var temp__4425__auto___18188 = cljs.core.seq.call(null,seq__18171_18179);
if(temp__4425__auto___18188){
var seq__18171_18189__$1 = temp__4425__auto___18188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18171_18189__$1)){
var c__5300__auto___18190 = cljs.core.chunk_first.call(null,seq__18171_18189__$1);
var G__18191 = cljs.core.chunk_rest.call(null,seq__18171_18189__$1);
var G__18192 = c__5300__auto___18190;
var G__18193 = cljs.core.count.call(null,c__5300__auto___18190);
var G__18194 = (0);
seq__18171_18179 = G__18191;
chunk__18172_18180 = G__18192;
count__18173_18181 = G__18193;
i__18174_18182 = G__18194;
continue;
} else {
var f_18195 = cljs.core.first.call(null,seq__18171_18189__$1);
f_18195.call(null);

var G__18196 = cljs.core.next.call(null,seq__18171_18189__$1);
var G__18197 = null;
var G__18198 = (0);
var G__18199 = (0);
seq__18171_18179 = G__18196;
chunk__18172_18180 = G__18197;
count__18173_18181 = G__18198;
i__18174_18182 = G__18199;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__4497__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__4497__auto__){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__4497__auto____$1){
return or__4497__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args18210 = [];
var len__5555__auto___18213 = arguments.length;
var i__5556__auto___18214 = (0);
while(true){
if((i__5556__auto___18214 < len__5555__auto___18213)){
args18210.push((arguments[i__5556__auto___18214]));

var G__18215 = (i__5556__auto___18214 + (1));
i__5556__auto___18214 = G__18215;
continue;
} else {
}
break;
}

var G__18212 = args18210.length;
switch (G__18212) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18210.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_18217 = (function (){var or__4497__auto__ = descriptor;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
var or__4497__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4497__auto____$1)){
return or__4497__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_18217 === goog.object.get(f,"om$tag"))))){
var factory_18218 = React.createFactory(React.createClass(rdesc_18217));
goog.object.set(f,"om$descriptor",factory_18218);

goog.object.set(f,"om$tag",rdesc_18217);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args18219 = [];
var len__5555__auto___18222 = arguments.length;
var i__5556__auto___18223 = (0);
while(true){
if((i__5556__auto___18223 < len__5555__auto___18222)){
args18219.push((arguments[i__5556__auto___18223]));

var G__18224 = (i__5556__auto___18223 + (1));
i__5556__auto___18223 = G__18224;
continue;
} else {
}
break;
}

var G__18221 = args18219.length;
switch (G__18221) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18219.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args18226 = [];
var len__5555__auto___18231 = arguments.length;
var i__5556__auto___18232 = (0);
while(true){
if((i__5556__auto___18232 < len__5555__auto___18231)){
args18226.push((arguments[i__5556__auto___18232]));

var G__18233 = (i__5556__auto___18232 + (1));
i__5556__auto___18232 = G__18233;
continue;
} else {
}
break;
}

var G__18228 = args18226.length;
switch (G__18228) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18226.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__18229 = m;
var map__18229__$1 = ((((!((map__18229 == null)))?((((map__18229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18229):map__18229);
var key = cljs.core.get.call(null,map__18229__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__18229__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__18229__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__18229__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__18229__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4497__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__18229,map__18229__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__18229,map__18229__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__18229,map__18229__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__18229,map__18229__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4497__auto__ = rkey;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args18235 = [];
var len__5555__auto___18238 = arguments.length;
var i__5556__auto___18239 = (0);
while(true){
if((i__5556__auto___18239 < len__5555__auto___18238)){
args18235.push((arguments[i__5556__auto___18239]));

var G__18240 = (i__5556__auto___18239 + (1));
i__5556__auto___18239 = G__18240;
continue;
} else {
}
break;
}

var G__18237 = args18235.length;
switch (G__18237) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18235.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args18242 = [];
var len__5555__auto___18245 = arguments.length;
var i__5556__auto___18246 = (0);
while(true){
if((i__5556__auto___18246 < len__5555__auto___18245)){
args18242.push((arguments[i__5556__auto___18246]));

var G__18247 = (i__5556__auto___18246 + (1));
i__5556__auto___18246 = G__18247;
continue;
} else {
}
break;
}

var G__18244 = args18242.length;
switch (G__18244) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18242.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_18265 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_18266 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_18267 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x18258_18268 = state;
x18258_18268.om$core$IRootProperties$ = true;

x18258_18268.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_18265,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_18265,cljs.core.dissoc,id,k);
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_18265,cljs.core.dissoc,id);
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$IRootProperties$_get_property$arity$3 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_18265),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$INotify$ = true;

x18258_18268.om$core$INotify$_listen_BANG_$arity$3 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_18266,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_18266,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$INotify$_notify_BANG_$arity$3 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__18259_18269 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_18266));
var chunk__18260_18270 = null;
var count__18261_18271 = (0);
var i__18262_18272 = (0);
while(true){
if((i__18262_18272 < count__18261_18271)){
var vec__18263_18273 = cljs.core._nth.call(null,chunk__18260_18270,i__18262_18272);
var __18274 = cljs.core.nth.call(null,vec__18263_18273,(0),null);
var f_18275 = cljs.core.nth.call(null,vec__18263_18273,(1),null);
f_18275.call(null,tx_data,root_cursor);

var G__18276 = seq__18259_18269;
var G__18277 = chunk__18260_18270;
var G__18278 = count__18261_18271;
var G__18279 = (i__18262_18272 + (1));
seq__18259_18269 = G__18276;
chunk__18260_18270 = G__18277;
count__18261_18271 = G__18278;
i__18262_18272 = G__18279;
continue;
} else {
var temp__4425__auto___18280 = cljs.core.seq.call(null,seq__18259_18269);
if(temp__4425__auto___18280){
var seq__18259_18281__$1 = temp__4425__auto___18280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18259_18281__$1)){
var c__5300__auto___18282 = cljs.core.chunk_first.call(null,seq__18259_18281__$1);
var G__18283 = cljs.core.chunk_rest.call(null,seq__18259_18281__$1);
var G__18284 = c__5300__auto___18282;
var G__18285 = cljs.core.count.call(null,c__5300__auto___18282);
var G__18286 = (0);
seq__18259_18269 = G__18283;
chunk__18260_18270 = G__18284;
count__18261_18271 = G__18285;
i__18262_18272 = G__18286;
continue;
} else {
var vec__18264_18287 = cljs.core.first.call(null,seq__18259_18281__$1);
var __18288 = cljs.core.nth.call(null,vec__18264_18287,(0),null);
var f_18289 = cljs.core.nth.call(null,vec__18264_18287,(1),null);
f_18289.call(null,tx_data,root_cursor);

var G__18290 = cljs.core.next.call(null,seq__18259_18281__$1);
var G__18291 = null;
var G__18292 = (0);
var G__18293 = (0);
seq__18259_18269 = G__18290;
chunk__18260_18270 = G__18291;
count__18261_18271 = G__18292;
i__18262_18272 = G__18293;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$IRenderQueue$ = true;

x18258_18268.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_18267);
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_18267),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_18267,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

x18258_18268.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x18258_18268,properties_18265,listeners_18266,render_queue_18267){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_18267,cljs.core.empty);
});})(x18258_18268,properties_18265,listeners_18266,render_queue_18267))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x18295 = cljs.core.clone.call(null,cursor);
x18295.cljs$core$ICloneable$ = true;

x18295.cljs$core$ICloneable$_clone$arity$1 = ((function (x18295){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x18295))
;

x18295.om$core$IAdapt$ = true;

x18295.om$core$IAdapt$_adapt$arity$2 = ((function (x18295){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x18295))
;

x18295.om$core$IRootKey$ = true;

x18295.om$core$IRootKey$_root_key$arity$1 = ((function (x18295){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x18295))
;

return x18295;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__18296){
var map__18360 = p__18296;
var map__18360__$1 = ((((!((map__18360 == null)))?((((map__18360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18360):map__18360);
var options = map__18360__$1;
var target = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__18360__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__18423 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__18423,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__18423,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4497__auto__ = adapt;
if(cljs.core.truth_(or__4497__auto__)){
return or__4497__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_18424 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_18393 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_18394 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_18395 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_18396 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_18396;

om.core._STAR_state_STAR_ = _STAR_state_STAR_18395;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_18394;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_18393;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_18424);
} else {
}
}

var queue_18425 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_18425)){
} else {
var seq__18397_18426 = cljs.core.seq.call(null,queue_18425);
var chunk__18398_18427 = null;
var count__18399_18428 = (0);
var i__18400_18429 = (0);
while(true){
if((i__18400_18429 < count__18399_18428)){
var c_18430 = cljs.core._nth.call(null,chunk__18398_18427,i__18400_18429);
if(cljs.core.truth_(c_18430.isMounted())){
var temp__4425__auto___18431 = (c_18430.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___18431)){
var next_props_18432 = temp__4425__auto___18431;
(c_18430.props["__om_cursor"] = next_props_18432);

(c_18430.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4497__auto__ = !((function (){var G__18402 = om.core.children.call(null,c_18430);
if(!((G__18402 == null))){
if((false) || (G__18402.om$core$ICheckState$)){
return true;
} else {
if((!G__18402.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18402);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18402);
}
})());
if(or__4497__auto__){
return or__4497__auto__;
} else {
return c_18430.shouldComponentUpdate(c_18430.props,c_18430.state);
}
})())){
c_18430.forceUpdate();
} else {
}
} else {
}

var G__18433 = seq__18397_18426;
var G__18434 = chunk__18398_18427;
var G__18435 = count__18399_18428;
var G__18436 = (i__18400_18429 + (1));
seq__18397_18426 = G__18433;
chunk__18398_18427 = G__18434;
count__18399_18428 = G__18435;
i__18400_18429 = G__18436;
continue;
} else {
var temp__4425__auto___18437 = cljs.core.seq.call(null,seq__18397_18426);
if(temp__4425__auto___18437){
var seq__18397_18438__$1 = temp__4425__auto___18437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18397_18438__$1)){
var c__5300__auto___18439 = cljs.core.chunk_first.call(null,seq__18397_18438__$1);
var G__18440 = cljs.core.chunk_rest.call(null,seq__18397_18438__$1);
var G__18441 = c__5300__auto___18439;
var G__18442 = cljs.core.count.call(null,c__5300__auto___18439);
var G__18443 = (0);
seq__18397_18426 = G__18440;
chunk__18398_18427 = G__18441;
count__18399_18428 = G__18442;
i__18400_18429 = G__18443;
continue;
} else {
var c_18444 = cljs.core.first.call(null,seq__18397_18438__$1);
if(cljs.core.truth_(c_18444.isMounted())){
var temp__4425__auto___18445__$1 = (c_18444.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___18445__$1)){
var next_props_18446 = temp__4425__auto___18445__$1;
(c_18444.props["__om_cursor"] = next_props_18446);

(c_18444.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4497__auto__ = !((function (){var G__18404 = om.core.children.call(null,c_18444);
if(!((G__18404 == null))){
if((false) || (G__18404.om$core$ICheckState$)){
return true;
} else {
if((!G__18404.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18404);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__18404);
}
})());
if(or__4497__auto__){
return or__4497__auto__;
} else {
return c_18444.shouldComponentUpdate(c_18444.props,c_18444.state);
}
})())){
c_18444.forceUpdate();
} else {
}
} else {
}

var G__18447 = cljs.core.next.call(null,seq__18397_18438__$1);
var G__18448 = null;
var G__18449 = (0);
var G__18450 = (0);
seq__18397_18426 = G__18447;
chunk__18398_18427 = G__18448;
count__18399_18428 = G__18449;
i__18400_18429 = G__18450;
continue;
}
} else {
}
}
break;
}
}

var _refs_18451 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_18451)){
} else {
var seq__18405_18452 = cljs.core.seq.call(null,_refs_18451);
var chunk__18406_18453 = null;
var count__18407_18454 = (0);
var i__18408_18455 = (0);
while(true){
if((i__18408_18455 < count__18407_18454)){
var vec__18409_18456 = cljs.core._nth.call(null,chunk__18406_18453,i__18408_18455);
var path_18457__$1 = cljs.core.nth.call(null,vec__18409_18456,(0),null);
var cs_18458 = cljs.core.nth.call(null,vec__18409_18456,(1),null);
var cs_18459__$1 = cljs.core.deref.call(null,cs_18458);
var seq__18410_18460 = cljs.core.seq.call(null,cs_18459__$1);
var chunk__18411_18461 = null;
var count__18412_18462 = (0);
var i__18413_18463 = (0);
while(true){
if((i__18413_18463 < count__18412_18462)){
var vec__18414_18464 = cljs.core._nth.call(null,chunk__18411_18461,i__18413_18463);
var id_18465 = cljs.core.nth.call(null,vec__18414_18464,(0),null);
var c_18466 = cljs.core.nth.call(null,vec__18414_18464,(1),null);
if(cljs.core.truth_(c_18466.shouldComponentUpdate(c_18466.props,c_18466.state))){
c_18466.forceUpdate();
} else {
}

var G__18467 = seq__18410_18460;
var G__18468 = chunk__18411_18461;
var G__18469 = count__18412_18462;
var G__18470 = (i__18413_18463 + (1));
seq__18410_18460 = G__18467;
chunk__18411_18461 = G__18468;
count__18412_18462 = G__18469;
i__18413_18463 = G__18470;
continue;
} else {
var temp__4425__auto___18471 = cljs.core.seq.call(null,seq__18410_18460);
if(temp__4425__auto___18471){
var seq__18410_18472__$1 = temp__4425__auto___18471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18410_18472__$1)){
var c__5300__auto___18473 = cljs.core.chunk_first.call(null,seq__18410_18472__$1);
var G__18474 = cljs.core.chunk_rest.call(null,seq__18410_18472__$1);
var G__18475 = c__5300__auto___18473;
var G__18476 = cljs.core.count.call(null,c__5300__auto___18473);
var G__18477 = (0);
seq__18410_18460 = G__18474;
chunk__18411_18461 = G__18475;
count__18412_18462 = G__18476;
i__18413_18463 = G__18477;
continue;
} else {
var vec__18415_18478 = cljs.core.first.call(null,seq__18410_18472__$1);
var id_18479 = cljs.core.nth.call(null,vec__18415_18478,(0),null);
var c_18480 = cljs.core.nth.call(null,vec__18415_18478,(1),null);
if(cljs.core.truth_(c_18480.shouldComponentUpdate(c_18480.props,c_18480.state))){
c_18480.forceUpdate();
} else {
}

var G__18481 = cljs.core.next.call(null,seq__18410_18472__$1);
var G__18482 = null;
var G__18483 = (0);
var G__18484 = (0);
seq__18410_18460 = G__18481;
chunk__18411_18461 = G__18482;
count__18412_18462 = G__18483;
i__18413_18463 = G__18484;
continue;
}
} else {
}
}
break;
}

var G__18485 = seq__18405_18452;
var G__18486 = chunk__18406_18453;
var G__18487 = count__18407_18454;
var G__18488 = (i__18408_18455 + (1));
seq__18405_18452 = G__18485;
chunk__18406_18453 = G__18486;
count__18407_18454 = G__18487;
i__18408_18455 = G__18488;
continue;
} else {
var temp__4425__auto___18489 = cljs.core.seq.call(null,seq__18405_18452);
if(temp__4425__auto___18489){
var seq__18405_18490__$1 = temp__4425__auto___18489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18405_18490__$1)){
var c__5300__auto___18491 = cljs.core.chunk_first.call(null,seq__18405_18490__$1);
var G__18492 = cljs.core.chunk_rest.call(null,seq__18405_18490__$1);
var G__18493 = c__5300__auto___18491;
var G__18494 = cljs.core.count.call(null,c__5300__auto___18491);
var G__18495 = (0);
seq__18405_18452 = G__18492;
chunk__18406_18453 = G__18493;
count__18407_18454 = G__18494;
i__18408_18455 = G__18495;
continue;
} else {
var vec__18416_18496 = cljs.core.first.call(null,seq__18405_18490__$1);
var path_18497__$1 = cljs.core.nth.call(null,vec__18416_18496,(0),null);
var cs_18498 = cljs.core.nth.call(null,vec__18416_18496,(1),null);
var cs_18499__$1 = cljs.core.deref.call(null,cs_18498);
var seq__18417_18500 = cljs.core.seq.call(null,cs_18499__$1);
var chunk__18418_18501 = null;
var count__18419_18502 = (0);
var i__18420_18503 = (0);
while(true){
if((i__18420_18503 < count__18419_18502)){
var vec__18421_18504 = cljs.core._nth.call(null,chunk__18418_18501,i__18420_18503);
var id_18505 = cljs.core.nth.call(null,vec__18421_18504,(0),null);
var c_18506 = cljs.core.nth.call(null,vec__18421_18504,(1),null);
if(cljs.core.truth_(c_18506.shouldComponentUpdate(c_18506.props,c_18506.state))){
c_18506.forceUpdate();
} else {
}

var G__18507 = seq__18417_18500;
var G__18508 = chunk__18418_18501;
var G__18509 = count__18419_18502;
var G__18510 = (i__18420_18503 + (1));
seq__18417_18500 = G__18507;
chunk__18418_18501 = G__18508;
count__18419_18502 = G__18509;
i__18420_18503 = G__18510;
continue;
} else {
var temp__4425__auto___18511__$1 = cljs.core.seq.call(null,seq__18417_18500);
if(temp__4425__auto___18511__$1){
var seq__18417_18512__$1 = temp__4425__auto___18511__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18417_18512__$1)){
var c__5300__auto___18513 = cljs.core.chunk_first.call(null,seq__18417_18512__$1);
var G__18514 = cljs.core.chunk_rest.call(null,seq__18417_18512__$1);
var G__18515 = c__5300__auto___18513;
var G__18516 = cljs.core.count.call(null,c__5300__auto___18513);
var G__18517 = (0);
seq__18417_18500 = G__18514;
chunk__18418_18501 = G__18515;
count__18419_18502 = G__18516;
i__18420_18503 = G__18517;
continue;
} else {
var vec__18422_18518 = cljs.core.first.call(null,seq__18417_18512__$1);
var id_18519 = cljs.core.nth.call(null,vec__18422_18518,(0),null);
var c_18520 = cljs.core.nth.call(null,vec__18422_18518,(1),null);
if(cljs.core.truth_(c_18520.shouldComponentUpdate(c_18520.props,c_18520.state))){
c_18520.forceUpdate();
} else {
}

var G__18521 = cljs.core.next.call(null,seq__18417_18512__$1);
var G__18522 = null;
var G__18523 = (0);
var G__18524 = (0);
seq__18417_18500 = G__18521;
chunk__18418_18501 = G__18522;
count__18419_18502 = G__18523;
i__18420_18503 = G__18524;
continue;
}
} else {
}
}
break;
}

var G__18525 = cljs.core.next.call(null,seq__18405_18490__$1);
var G__18526 = null;
var G__18527 = (0);
var G__18528 = (0);
seq__18405_18452 = G__18525;
chunk__18406_18453 = G__18526;
count__18407_18454 = G__18527;
i__18408_18455 = G__18528;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__18360,map__18360__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args18531 = [];
var len__5555__auto___18534 = arguments.length;
var i__5556__auto___18535 = (0);
while(true){
if((i__5556__auto___18535 < len__5555__auto___18534)){
args18531.push((arguments[i__5556__auto___18535]));

var G__18536 = (i__5556__auto___18535 + (1));
i__5556__auto___18535 = G__18536;
continue;
} else {
}
break;
}

var G__18533 = args18531.length;
switch (G__18533) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18531.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args18538 = [];
var len__5555__auto___18541 = arguments.length;
var i__5556__auto___18542 = (0);
while(true){
if((i__5556__auto___18542 < len__5555__auto___18541)){
args18538.push((arguments[i__5556__auto___18542]));

var G__18543 = (i__5556__auto___18542 + (1));
i__5556__auto___18542 = G__18543;
continue;
} else {
}
break;
}

var G__18540 = args18538.length;
switch (G__18540) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18538.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args18547 = [];
var len__5555__auto___18551 = arguments.length;
var i__5556__auto___18552 = (0);
while(true){
if((i__5556__auto___18552 < len__5555__auto___18551)){
args18547.push((arguments[i__5556__auto___18552]));

var G__18553 = (i__5556__auto___18552 + (1));
i__5556__auto___18552 = G__18553;
continue;
} else {
}
break;
}

var G__18549 = args18547.length;
switch (G__18549) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18547.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__18550 = owner.refs;
var G__18550__$1 = (((G__18550 == null))?null:(G__18550[name]));
var G__18550__$2 = (((G__18550__$1 == null))?null:G__18550__$1.getDOMNode());
return G__18550__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__18556 = owner.refs;
var G__18556__$1 = (((G__18556 == null))?null:goog.object.get(G__18556,name));
return G__18556__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args18557 = [];
var len__5555__auto___18560 = arguments.length;
var i__5556__auto___18561 = (0);
while(true){
if((i__5556__auto___18561 < len__5555__auto___18560)){
args18557.push((arguments[i__5556__auto___18561]));

var G__18562 = (i__5556__auto___18561 + (1));
i__5556__auto___18561 = G__18562;
continue;
} else {
}
break;
}

var G__18559 = args18557.length;
switch (G__18559) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18557.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args18564 = [];
var len__5555__auto___18567 = arguments.length;
var i__5556__auto___18568 = (0);
while(true){
if((i__5556__auto___18568 < len__5555__auto___18567)){
args18564.push((arguments[i__5556__auto___18568]));

var G__18569 = (i__5556__auto___18568 + (1));
i__5556__auto___18568 = G__18569;
continue;
} else {
}
break;
}

var G__18566 = args18564.length;
switch (G__18566) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18564.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args18571 = [];
var len__5555__auto___18574 = arguments.length;
var i__5556__auto___18575 = (0);
while(true){
if((i__5556__auto___18575 < len__5555__auto___18574)){
args18571.push((arguments[i__5556__auto___18575]));

var G__18576 = (i__5556__auto___18575 + (1));
i__5556__auto___18575 = G__18576;
continue;
} else {
}
break;
}

var G__18573 = args18571.length;
switch (G__18573) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18571.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args18578 = [];
var len__5555__auto___18581 = arguments.length;
var i__5556__auto___18582 = (0);
while(true){
if((i__5556__auto___18582 < len__5555__auto___18581)){
args18578.push((arguments[i__5556__auto___18582]));

var G__18583 = (i__5556__auto___18582 + (1));
i__5556__auto___18582 = G__18583;
continue;
} else {
}
break;
}

var G__18580 = args18578.length;
switch (G__18580) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18578.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args18585 = [];
var len__5555__auto___18588 = arguments.length;
var i__5556__auto___18589 = (0);
while(true){
if((i__5556__auto___18589 < len__5555__auto___18588)){
args18585.push((arguments[i__5556__auto___18589]));

var G__18590 = (i__5556__auto___18589 + (1));
i__5556__auto___18589 = G__18590;
continue;
} else {
}
break;
}

var G__18587 = args18585.length;
switch (G__18587) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18585.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map