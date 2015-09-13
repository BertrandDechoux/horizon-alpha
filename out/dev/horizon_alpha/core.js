// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.core');
goog.require('cljs.core');
goog.require('horizon_alpha.field.grid');
goog.require('om.dom');
goog.require('horizon_alpha.view.svg');
goog.require('horizon_alpha.model.game');
goog.require('horizon_alpha.player.player');
goog.require('horizon_alpha.view.player');
goog.require('horizon_alpha.utils');
goog.require('om.core');
goog.require('horizon_alpha.i18n');
goog.require('clojure.string');
goog.require('horizon_alpha.model.state');
cljs.core.enable_console_print_BANG_.call(null);
horizon_alpha.core.t = horizon_alpha.i18n.i18n.call(null);
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/chrome/,clojure.string.lower_case.call(null,horizon_alpha.utils.user_agent.call(null))))){
alert(horizon_alpha.core.t.call(null,new cljs.core.Keyword("setup","chrome-required","setup/chrome-required",-1881451712)));
} else {
var options_16308 = horizon_alpha.utils.app_element.call(null,"root");
if(!((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(options_16308) == null))){
horizon_alpha.core.app_state = cljs.core.atom.call(null,horizon_alpha.model.state.gen_state.call(null));

horizon_alpha.core.cell_radius = (19);

horizon_alpha.core.interpolate = horizon_alpha.field.grid.hex_tiling.call(null,(40));

horizon_alpha.core.field_cell = ((function (options_16308){
return (function horizon_alpha$core$field_cell(p__16297){
var vec__16300 = p__16297;
var vec__16301 = cljs.core.nth.call(null,vec__16300,(0),null);
var pos = cljs.core.nth.call(null,vec__16301,(0),null);
var terrain = cljs.core.nth.call(null,vec__16301,(1),null);
var is_loot = cljs.core.nth.call(null,vec__16300,(1),null);
var ipos = horizon_alpha.core.interpolate.call(null,pos);
var grad = [cljs.core.str("url(#grad_"),cljs.core.str(cljs.core.name.call(null,terrain)),cljs.core.str(")")].join('');
if(cljs.core.truth_(is_loot)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizon_alpha.view.svg.circle.call(null,ipos,horizon_alpha.core.cell_radius,"loot",cljs.core.PersistentArrayMap.EMPTY),horizon_alpha.view.svg.text.call(null,ipos,horizon_alpha.core.t.call(null,new cljs.core.Keyword("app","loot","app/loot",76597097)),"$")], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [horizon_alpha.view.svg.circle.call(null,ipos,horizon_alpha.core.cell_radius,cljs.core.name.call(null,terrain),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),grad], null))], null);
}
});})(options_16308))
;

horizon_alpha.core.app_view = ((function (options_16308){
return (function horizon_alpha$core$app_view(app,owner){
if(typeof horizon_alpha.core.t_horizon_alpha$core16305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
horizon_alpha.core.t_horizon_alpha$core16305 = (function (options,app_view,app,owner,meta16306){
this.options = options;
this.app_view = app_view;
this.app = app;
this.owner = owner;
this.meta16306 = meta16306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
horizon_alpha.core.t_horizon_alpha$core16305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (options_16308){
return (function (_16307,meta16306__$1){
var self__ = this;
var _16307__$1 = this;
return (new horizon_alpha.core.t_horizon_alpha$core16305(self__.options,self__.app_view,self__.app,self__.owner,meta16306__$1));
});})(options_16308))
;

horizon_alpha.core.t_horizon_alpha$core16305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (options_16308){
return (function (_16307){
var self__ = this;
var _16307__$1 = this;
return self__.meta16306;
});})(options_16308))
;

horizon_alpha.core.t_horizon_alpha$core16305.prototype.om$core$IRenderState$ = true;

horizon_alpha.core.t_horizon_alpha$core16305.prototype.om$core$IRenderState$render_state$arity$2 = ((function (options_16308){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "app"},React.DOM.div({"className": "apptitle"},React.DOM.span(null,"Horizon Alpha"),React.DOM.a({"href": horizon_alpha.core.t.call(null,new cljs.core.Keyword("app","guide","app/guide",-935529653)), "target": "_blank"},horizon_alpha.core.t.call(null,new cljs.core.Keyword("app","help","app/help",-439333319)))),cljs.core.apply.call(null,om.dom.div,{"className": "npcs"},React.DOM.div({"className": "title"},horizon_alpha.core.t.call(null,new cljs.core.Keyword("app","npcs","app/npcs",36158983))),om.core.build_all.call(null,horizon_alpha.view.player.info_view.call(null,horizon_alpha.core.app_state),horizon_alpha.player.player.npcs.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)))),cljs.core.apply.call(null,om.dom.svg,{"className": "field"},cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (___$1,options_16308){
return (function (p1__16296_SHARP_){
return horizon_alpha.core.field_cell.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16296_SHARP_,cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"loots","loots",368837806).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.first.call(null,p1__16296_SHARP_))], null));
});})(___$1,options_16308))
,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build_all.call(null,horizon_alpha.view.player.cell_view.call(null,horizon_alpha.core.app_state,horizon_alpha.core.interpolate,horizon_alpha.core.cell_radius),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build_all.call(null,horizon_alpha.view.player.target_view.call(null,horizon_alpha.core.app_state,horizon_alpha.core.interpolate,horizon_alpha.core.cell_radius),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(self__.app)))),cljs.core.apply.call(null,om.dom.div,{"className": "pcs"},React.DOM.img({"className": "logo", "src": "img/logo-noob.jpg"}),om.core.build_all.call(null,horizon_alpha.view.player.info_view.call(null,horizon_alpha.core.app_state),horizon_alpha.player.player.pcs.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});})(options_16308))
;

horizon_alpha.core.t_horizon_alpha$core16305.getBasis = ((function (options_16308){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.with_meta(new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta16306","meta16306",-1919175738,null)], null);
});})(options_16308))
;

horizon_alpha.core.t_horizon_alpha$core16305.cljs$lang$type = true;

horizon_alpha.core.t_horizon_alpha$core16305.cljs$lang$ctorStr = "horizon-alpha.core/t_horizon_alpha$core16305";

horizon_alpha.core.t_horizon_alpha$core16305.cljs$lang$ctorPrWriter = ((function (options_16308){
return (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"horizon-alpha.core/t_horizon_alpha$core16305");
});})(options_16308))
;

horizon_alpha.core.__GT_t_horizon_alpha$core16305 = ((function (options_16308){
return (function horizon_alpha$core$app_view_$___GT_t_horizon_alpha$core16305(options__$1,app_view__$1,app__$1,owner__$1,meta16306){
return (new horizon_alpha.core.t_horizon_alpha$core16305(options__$1,app_view__$1,app__$1,owner__$1,meta16306));
});})(options_16308))
;

}

return (new horizon_alpha.core.t_horizon_alpha$core16305(options_16308,horizon_alpha$core$app_view,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});})(options_16308))
;

om.core.root.call(null,horizon_alpha.core.app_view,horizon_alpha.core.app_state,options_16308);

horizon_alpha.model.game.start_BANG_.call(null,horizon_alpha.core.app_state);
} else {
}
}

//# sourceMappingURL=core.js.map