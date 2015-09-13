// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
horizon_alpha.utils.app_element = (function horizon_alpha$utils$app_element(id){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(id)], null);
});
horizon_alpha.utils.lang = (function horizon_alpha$utils$lang(){

return (window["navigator"]["language"]);
});
horizon_alpha.utils.user_agent = (function horizon_alpha$utils$user_agent(){

return (window["navigator"]["userAgent"]);
});
horizon_alpha.utils.later = (function horizon_alpha$utils$later(f,msecs){

var c__6873__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto__){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto__){
return (function (state_8702){
var state_val_8703 = (state_8702[(1)]);
if((state_val_8703 === (1))){
var inst_8697 = cljs.core.async.timeout.call(null,msecs);
var state_8702__$1 = state_8702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8702__$1,(2),inst_8697);
} else {
if((state_val_8703 === (2))){
var inst_8699 = (state_8702[(2)]);
var inst_8700 = f.call(null);
var state_8702__$1 = (function (){var statearr_8704 = state_8702;
(statearr_8704[(7)] = inst_8699);

return statearr_8704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8702__$1,inst_8700);
} else {
return null;
}
}
});})(c__6873__auto__))
;
return ((function (switch__6798__auto__,c__6873__auto__){
return (function() {
var horizon_alpha$utils$later_$_state_machine__6799__auto__ = null;
var horizon_alpha$utils$later_$_state_machine__6799__auto____0 = (function (){
var statearr_8708 = [null,null,null,null,null,null,null,null];
(statearr_8708[(0)] = horizon_alpha$utils$later_$_state_machine__6799__auto__);

(statearr_8708[(1)] = (1));

return statearr_8708;
});
var horizon_alpha$utils$later_$_state_machine__6799__auto____1 = (function (state_8702){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_8702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e8709){if((e8709 instanceof Object)){
var ex__6802__auto__ = e8709;
var statearr_8710_8712 = state_8702;
(statearr_8710_8712[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8713 = state_8702;
state_8702 = G__8713;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
horizon_alpha$utils$later_$_state_machine__6799__auto__ = function(state_8702){
switch(arguments.length){
case 0:
return horizon_alpha$utils$later_$_state_machine__6799__auto____0.call(this);
case 1:
return horizon_alpha$utils$later_$_state_machine__6799__auto____1.call(this,state_8702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
horizon_alpha$utils$later_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = horizon_alpha$utils$later_$_state_machine__6799__auto____0;
horizon_alpha$utils$later_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = horizon_alpha$utils$later_$_state_machine__6799__auto____1;
return horizon_alpha$utils$later_$_state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto__))
})();
var state__6875__auto__ = (function (){var statearr_8711 = f__6874__auto__.call(null);
(statearr_8711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto__);

return statearr_8711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto__))
);

return c__6873__auto__;
});
horizon_alpha.utils.do_while_clock = (function horizon_alpha$utils$do_while_clock(step_f,continue_f,end_f,msecs){

var c__6873__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6873__auto__){
return (function (){
var f__6874__auto__ = (function (){var switch__6798__auto__ = ((function (c__6873__auto__){
return (function (state_8768){
var state_val_8769 = (state_8768[(1)]);
if((state_val_8769 === (1))){
var inst_8750 = cljs.core.async.timeout.call(null,msecs);
var inst_8751 = inst_8750;
var state_8768__$1 = (function (){var statearr_8770 = state_8768;
(statearr_8770[(7)] = inst_8751);

return statearr_8770;
})();
var statearr_8771_8786 = state_8768__$1;
(statearr_8771_8786[(2)] = null);

(statearr_8771_8786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8769 === (2))){
var inst_8751 = (state_8768[(7)]);
var state_8768__$1 = state_8768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8768__$1,(4),inst_8751);
} else {
if((state_val_8769 === (3))){
var inst_8766 = (state_8768[(2)]);
var state_8768__$1 = state_8768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8768__$1,inst_8766);
} else {
if((state_val_8769 === (4))){
var inst_8754 = (state_8768[(2)]);
var inst_8755 = continue_f.call(null);
var inst_8756 = cljs.core.not.call(null,inst_8755);
var state_8768__$1 = (function (){var statearr_8772 = state_8768;
(statearr_8772[(8)] = inst_8754);

return statearr_8772;
})();
if(inst_8756){
var statearr_8773_8787 = state_8768__$1;
(statearr_8773_8787[(1)] = (5));

} else {
var statearr_8774_8788 = state_8768__$1;
(statearr_8774_8788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8769 === (5))){
var inst_8758 = end_f.call(null);
var state_8768__$1 = state_8768;
var statearr_8775_8789 = state_8768__$1;
(statearr_8775_8789[(2)] = inst_8758);

(statearr_8775_8789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8769 === (6))){
var inst_8760 = step_f.call(null);
var inst_8761 = cljs.core.async.timeout.call(null,msecs);
var inst_8751 = inst_8761;
var state_8768__$1 = (function (){var statearr_8776 = state_8768;
(statearr_8776[(9)] = inst_8760);

(statearr_8776[(7)] = inst_8751);

return statearr_8776;
})();
var statearr_8777_8790 = state_8768__$1;
(statearr_8777_8790[(2)] = null);

(statearr_8777_8790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8769 === (7))){
var inst_8764 = (state_8768[(2)]);
var state_8768__$1 = state_8768;
var statearr_8778_8791 = state_8768__$1;
(statearr_8778_8791[(2)] = inst_8764);

(statearr_8778_8791[(1)] = (3));


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
var horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto__ = null;
var horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto____0 = (function (){
var statearr_8782 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8782[(0)] = horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto__);

(statearr_8782[(1)] = (1));

return statearr_8782;
});
var horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto____1 = (function (state_8768){
while(true){
var ret_value__6800__auto__ = (function (){try{while(true){
var result__6801__auto__ = switch__6798__auto__.call(null,state_8768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6801__auto__;
}
break;
}
}catch (e8783){if((e8783 instanceof Object)){
var ex__6802__auto__ = e8783;
var statearr_8784_8792 = state_8768;
(statearr_8784_8792[(5)] = ex__6802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8793 = state_8768;
state_8768 = G__8793;
continue;
} else {
return ret_value__6800__auto__;
}
break;
}
});
horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto__ = function(state_8768){
switch(arguments.length){
case 0:
return horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto____0.call(this);
case 1:
return horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto____1.call(this,state_8768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$0 = horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto____0;
horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto__.cljs$core$IFn$_invoke$arity$1 = horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto____1;
return horizon_alpha$utils$do_while_clock_$_state_machine__6799__auto__;
})()
;})(switch__6798__auto__,c__6873__auto__))
})();
var state__6875__auto__ = (function (){var statearr_8785 = f__6874__auto__.call(null);
(statearr_8785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6873__auto__);

return statearr_8785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6875__auto__);
});})(c__6873__auto__))
);

return c__6873__auto__;
});
horizon_alpha.utils.to_js = (function horizon_alpha$utils$to_js(m){

return cljs.core.apply.call(null,cljs.core.js_obj,cljs.core.mapcat.call(null,(function (p__8796){
var vec__8797 = p__8796;
var k = cljs.core.nth.call(null,vec__8797,(0),null);
var v = cljs.core.nth.call(null,vec__8797,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
}),m));
});
horizon_alpha.utils.pow2 = (function horizon_alpha$utils$pow2(n){

return Math.pow(n,(2));
});
horizon_alpha.utils.and_QMARK_ = (function horizon_alpha$utils$and_QMARK_(p1,p2){

return (function (p1__8798_SHARP_){
var and__4485__auto__ = p1.call(null,p1__8798_SHARP_);
if(cljs.core.truth_(and__4485__auto__)){
return p2.call(null,p1__8798_SHARP_);
} else {
return and__4485__auto__;
}
});
});

//# sourceMappingURL=utils.js.map