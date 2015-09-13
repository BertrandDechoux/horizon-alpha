// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.view.player');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('horizon_alpha.view.svg');
goog.require('horizon_alpha.model.game');
goog.require('horizon_alpha.view.logo');
goog.require('horizon_alpha.player.player');
goog.require('horizon_alpha.utils');
goog.require('om.core');
horizon_alpha.view.player.width = (function horizon_alpha$view$player$width(p__16258){
var map__16261 = p__16258;
var map__16261__$1 = ((((!((map__16261 == null)))?((((map__16261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16261):map__16261);
var current = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var max = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"max","max",61366548));

return [cljs.core.str(((100) * (current / max))),cljs.core.str("%")].join('');
});
horizon_alpha.view.player.stat = (function horizon_alpha$view$player$stat(player,stat_type){

if(cljs.core.truth_(stat_type.call(null,player))){
return React.DOM.div({"className": [cljs.core.str("stat "),cljs.core.str(cljs.core.name.call(null,stat_type))].join('')},React.DOM.div({"style": {"width": horizon_alpha.view.player.width.call(null,stat_type.call(null,player))}},null));
} else {
return null;
}
});
horizon_alpha.view.player.focus_BANG_ = (function horizon_alpha$view$player$focus_BANG_(pos,app_state){

return (function (e){
return cljs.core.swap_BANG_.call(null,app_state,(function (p1__16263_SHARP_){
return cljs.core.assoc_in.call(null,p1__16263_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),pos);
}));
});
});
horizon_alpha.view.player.focus_register = (function horizon_alpha$view$player$focus_register(pos,app_state,extra){

return horizon_alpha.utils.to_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),horizon_alpha.view.player.focus_BANG_.call(null,pos,app_state),new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),horizon_alpha.view.player.focus_BANG_.call(null,null,app_state)], null),extra));
});
horizon_alpha.view.player.css_class = (function horizon_alpha$view$player$css_class(player,app_state){

return [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(player))),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))))?" focus ":"")),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))))?" active":""))].join('');
});
horizon_alpha.view.player.info_view = (function horizon_alpha$view$player$info_view(app_state){

return (function (p__16269,owner){
var vec__16270 = p__16269;
var _ = cljs.core.nth.call(null,vec__16270,(0),null);
var player = cljs.core.nth.call(null,vec__16270,(1),null);
if(typeof horizon_alpha.view.player.t_horizon_alpha$view$player16271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
horizon_alpha.view.player.t_horizon_alpha$view$player16271 = (function (info_view,app_state,p__16269,owner,vec__16270,_,player,meta16272){
this.info_view = info_view;
this.app_state = app_state;
this.p__16269 = p__16269;
this.owner = owner;
this.vec__16270 = vec__16270;
this._ = _;
this.player = player;
this.meta16272 = meta16272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
horizon_alpha.view.player.t_horizon_alpha$view$player16271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__16270,_,player){
return (function (_16273,meta16272__$1){
var self__ = this;
var _16273__$1 = this;
return (new horizon_alpha.view.player.t_horizon_alpha$view$player16271(self__.info_view,self__.app_state,self__.p__16269,self__.owner,self__.vec__16270,self__._,self__.player,meta16272__$1));
});})(vec__16270,_,player))
;

horizon_alpha.view.player.t_horizon_alpha$view$player16271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__16270,_,player){
return (function (_16273){
var self__ = this;
var _16273__$1 = this;
return self__.meta16272;
});})(vec__16270,_,player))
;

horizon_alpha.view.player.t_horizon_alpha$view$player16271.prototype.om$core$IRender$ = true;

horizon_alpha.view.player.t_horizon_alpha$view$player16271.prototype.om$core$IRender$render$arity$1 = ((function (vec__16270,_,player){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div(horizon_alpha.view.player.focus_register.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.player),self__.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("player "),cljs.core.str(horizon_alpha.view.player.css_class.call(null,self__.player,self__.app_state))].join('')], null)),React.DOM.svg({"className": "icon"},horizon_alpha.view.logo.player.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),23.5,new cljs.core.Keyword(null,"y","y",-1757859776),23.5], null),self__.player,cljs.core.PersistentArrayMap.EMPTY)),React.DOM.p(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.player)),React.DOM.div({"className": "stats"},horizon_alpha.view.player.stat.call(null,self__.player,new cljs.core.Keyword(null,"hp","hp",-1541237831)),horizon_alpha.view.player.stat.call(null,self__.player,new cljs.core.Keyword(null,"sp","sp",1023349958)),horizon_alpha.view.player.stat.call(null,self__.player,new cljs.core.Keyword(null,"ap","ap",-1072838153))));
});})(vec__16270,_,player))
;

horizon_alpha.view.player.t_horizon_alpha$view$player16271.getBasis = ((function (vec__16270,_,player){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-view","info-view",937158850,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"p__16269","p__16269",1572368271,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__16270","vec__16270",911514198,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"meta16272","meta16272",473763709,null)], null);
});})(vec__16270,_,player))
;

horizon_alpha.view.player.t_horizon_alpha$view$player16271.cljs$lang$type = true;

horizon_alpha.view.player.t_horizon_alpha$view$player16271.cljs$lang$ctorStr = "horizon-alpha.view.player/t_horizon_alpha$view$player16271";

horizon_alpha.view.player.t_horizon_alpha$view$player16271.cljs$lang$ctorPrWriter = ((function (vec__16270,_,player){
return (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"horizon-alpha.view.player/t_horizon_alpha$view$player16271");
});})(vec__16270,_,player))
;

horizon_alpha.view.player.__GT_t_horizon_alpha$view$player16271 = ((function (vec__16270,_,player){
return (function horizon_alpha$view$player$info_view_$___GT_t_horizon_alpha$view$player16271(info_view__$1,app_state__$1,p__16269__$1,owner__$1,vec__16270__$1,___$1,player__$1,meta16272){
return (new horizon_alpha.view.player.t_horizon_alpha$view$player16271(info_view__$1,app_state__$1,p__16269__$1,owner__$1,vec__16270__$1,___$1,player__$1,meta16272));
});})(vec__16270,_,player))
;

}

return (new horizon_alpha.view.player.t_horizon_alpha$view$player16271(horizon_alpha$view$player$info_view,app_state,p__16269,owner,vec__16270,_,player,cljs.core.PersistentArrayMap.EMPTY));
});
});
horizon_alpha.view.player.cell_view = (function horizon_alpha$view$player$cell_view(app_state,interpolate,cell_radius){

return (function (p__16279,owner){
var vec__16280 = p__16279;
var _ = cljs.core.nth.call(null,vec__16280,(0),null);
var player = cljs.core.nth.call(null,vec__16280,(1),null);
if(typeof horizon_alpha.view.player.t_horizon_alpha$view$player16281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
horizon_alpha.view.player.t_horizon_alpha$view$player16281 = (function (cell_view,app_state,interpolate,cell_radius,p__16279,owner,vec__16280,_,player,meta16282){
this.cell_view = cell_view;
this.app_state = app_state;
this.interpolate = interpolate;
this.cell_radius = cell_radius;
this.p__16279 = p__16279;
this.owner = owner;
this.vec__16280 = vec__16280;
this._ = _;
this.player = player;
this.meta16282 = meta16282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
horizon_alpha.view.player.t_horizon_alpha$view$player16281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__16280,_,player){
return (function (_16283,meta16282__$1){
var self__ = this;
var _16283__$1 = this;
return (new horizon_alpha.view.player.t_horizon_alpha$view$player16281(self__.cell_view,self__.app_state,self__.interpolate,self__.cell_radius,self__.p__16279,self__.owner,self__.vec__16280,self__._,self__.player,meta16282__$1));
});})(vec__16280,_,player))
;

horizon_alpha.view.player.t_horizon_alpha$view$player16281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__16280,_,player){
return (function (_16283){
var self__ = this;
var _16283__$1 = this;
return self__.meta16282;
});})(vec__16280,_,player))
;

horizon_alpha.view.player.t_horizon_alpha$view$player16281.prototype.om$core$IRender$ = true;

horizon_alpha.view.player.t_horizon_alpha$view$player16281.prototype.om$core$IRender$render$arity$1 = ((function (vec__16280,_,player){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var ipos = self__.interpolate.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.player));
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.player);
return React.DOM.g(horizon_alpha.view.player.focus_register.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.player),self__.app_state,cljs.core.PersistentArrayMap.EMPTY),horizon_alpha.view.svg.circle.call(null,ipos,self__.cell_radius,horizon_alpha.view.player.css_class.call(null,self__.player,self__.app_state),cljs.core.PersistentArrayMap.EMPTY),horizon_alpha.view.logo.player.call(null,ipos,self__.player,cljs.core.PersistentArrayMap.EMPTY));
});})(vec__16280,_,player))
;

horizon_alpha.view.player.t_horizon_alpha$view$player16281.getBasis = ((function (vec__16280,_,player){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cell-view","cell-view",-1816461302,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"interpolate","interpolate",-1855863276,null),new cljs.core.Symbol(null,"cell-radius","cell-radius",-859533565,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"interpolate","interpolate",-1855863276,null),new cljs.core.Symbol(null,"cell-radius","cell-radius",-859533565,null),new cljs.core.Symbol(null,"p__16279","p__16279",24115322,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__16280","vec__16280",345070395,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"meta16282","meta16282",-1775097429,null)], null);
});})(vec__16280,_,player))
;

horizon_alpha.view.player.t_horizon_alpha$view$player16281.cljs$lang$type = true;

horizon_alpha.view.player.t_horizon_alpha$view$player16281.cljs$lang$ctorStr = "horizon-alpha.view.player/t_horizon_alpha$view$player16281";

horizon_alpha.view.player.t_horizon_alpha$view$player16281.cljs$lang$ctorPrWriter = ((function (vec__16280,_,player){
return (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"horizon-alpha.view.player/t_horizon_alpha$view$player16281");
});})(vec__16280,_,player))
;

horizon_alpha.view.player.__GT_t_horizon_alpha$view$player16281 = ((function (vec__16280,_,player){
return (function horizon_alpha$view$player$cell_view_$___GT_t_horizon_alpha$view$player16281(cell_view__$1,app_state__$1,interpolate__$1,cell_radius__$1,p__16279__$1,owner__$1,vec__16280__$1,___$1,player__$1,meta16282){
return (new horizon_alpha.view.player.t_horizon_alpha$view$player16281(cell_view__$1,app_state__$1,interpolate__$1,cell_radius__$1,p__16279__$1,owner__$1,vec__16280__$1,___$1,player__$1,meta16282));
});})(vec__16280,_,player))
;

}

return (new horizon_alpha.view.player.t_horizon_alpha$view$player16281(horizon_alpha$view$player$cell_view,app_state,interpolate,cell_radius,p__16279,owner,vec__16280,_,player,cljs.core.PersistentArrayMap.EMPTY));
});
});
horizon_alpha.view.player.target_view = (function horizon_alpha$view$player$target_view(app_state,interpolate,cell_radius){

return (function (target,owner){
if(typeof horizon_alpha.view.player.t_horizon_alpha$view$player16289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
horizon_alpha.view.player.t_horizon_alpha$view$player16289 = (function (target_view,app_state,interpolate,cell_radius,target,owner,meta16290){
this.target_view = target_view;
this.app_state = app_state;
this.interpolate = interpolate;
this.cell_radius = cell_radius;
this.target = target;
this.owner = owner;
this.meta16290 = meta16290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
horizon_alpha.view.player.t_horizon_alpha$view$player16289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16291,meta16290__$1){
var self__ = this;
var _16291__$1 = this;
return (new horizon_alpha.view.player.t_horizon_alpha$view$player16289(self__.target_view,self__.app_state,self__.interpolate,self__.cell_radius,self__.target,self__.owner,meta16290__$1));
});

horizon_alpha.view.player.t_horizon_alpha$view$player16289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16291){
var self__ = this;
var _16291__$1 = this;
return self__.meta16290;
});

horizon_alpha.view.player.t_horizon_alpha$view$player16289.prototype.om$core$IRender$ = true;

horizon_alpha.view.player.t_horizon_alpha$view$player16289.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__16292 = self__.target;
var map__16292__$1 = ((((!((map__16292 == null)))?((((map__16292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16292):map__16292);
var action = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var pos = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var from = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var ipos = self__.interpolate.call(null,pos);
var ifrom = self__.interpolate.call(null,from);
return React.DOM.g(horizon_alpha.view.player.focus_register.call(null,pos,self__.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("target "),cljs.core.str(cljs.core.name.call(null,action))].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__16292,map__16292__$1,action,pos,from,ipos,ifrom,___$1){
return (function (e){
return horizon_alpha.model.game.pc_action_BANG_.call(null,self__.target,self__.app_state);
});})(map__16292,map__16292__$1,action,pos,from,ipos,ifrom,___$1))
], null)),horizon_alpha.view.svg.circle.call(null,ipos,(self__.cell_radius - (8)),"target",cljs.core.PersistentArrayMap.EMPTY),horizon_alpha.view.logo.target.call(null,ipos,ifrom,action,cljs.core.PersistentArrayMap.EMPTY));
});

horizon_alpha.view.player.t_horizon_alpha$view$player16289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"target-view","target-view",-392355399,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"interpolate","interpolate",-1855863276,null),new cljs.core.Symbol(null,"cell-radius","cell-radius",-859533565,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"interpolate","interpolate",-1855863276,null),new cljs.core.Symbol(null,"cell-radius","cell-radius",-859533565,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta16290","meta16290",1458848976,null)], null);
});

horizon_alpha.view.player.t_horizon_alpha$view$player16289.cljs$lang$type = true;

horizon_alpha.view.player.t_horizon_alpha$view$player16289.cljs$lang$ctorStr = "horizon-alpha.view.player/t_horizon_alpha$view$player16289";

horizon_alpha.view.player.t_horizon_alpha$view$player16289.cljs$lang$ctorPrWriter = (function (this__5095__auto__,writer__5096__auto__,opt__5097__auto__){
return cljs.core._write.call(null,writer__5096__auto__,"horizon-alpha.view.player/t_horizon_alpha$view$player16289");
});

horizon_alpha.view.player.__GT_t_horizon_alpha$view$player16289 = (function horizon_alpha$view$player$target_view_$___GT_t_horizon_alpha$view$player16289(target_view__$1,app_state__$1,interpolate__$1,cell_radius__$1,target__$1,owner__$1,meta16290){
return (new horizon_alpha.view.player.t_horizon_alpha$view$player16289(target_view__$1,app_state__$1,interpolate__$1,cell_radius__$1,target__$1,owner__$1,meta16290));
});

}

return (new horizon_alpha.view.player.t_horizon_alpha$view$player16289(horizon_alpha$view$player$target_view,app_state,interpolate,cell_radius,target,owner,cljs.core.PersistentArrayMap.EMPTY));
});
});

//# sourceMappingURL=player.js.map