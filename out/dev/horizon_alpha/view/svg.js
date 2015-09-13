// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.view.svg');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('horizon_alpha.utils');
horizon_alpha.view.svg.circle = (function horizon_alpha$view$svg$circle(pos,r,className,extra){
var options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"className","className",-1983287057),className], null);
return React.DOM.circle(horizon_alpha.utils.to_js.call(null,cljs.core.merge.call(null,options,extra)),null);
});
horizon_alpha.view.svg.text = (function horizon_alpha$view$svg$text(pos,className,text__$1){
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) - (8)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) + (10)),new cljs.core.Keyword(null,"className","className",-1983287057),className], null);
return React.DOM.text(horizon_alpha.utils.to_js.call(null,options),text__$1);
});

//# sourceMappingURL=svg.js.map