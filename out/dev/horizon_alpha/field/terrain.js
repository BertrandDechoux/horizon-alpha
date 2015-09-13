// Compiled by ClojureScript 1.7.122 {}
goog.provide('horizon_alpha.field.terrain');
goog.require('cljs.core');
horizon_alpha.field.terrain.transparent_QMARK_ = (function horizon_alpha$field$terrain$transparent_QMARK_(t){

return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lava","lava",131379369),null,new cljs.core.Keyword(null,"grass","grass",1213050421),null], null), null),t);
});
horizon_alpha.field.terrain.walkable_QMARK_ = (function horizon_alpha$field$terrain$walkable_QMARK_(t){

return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grass","grass",1213050421),null], null), null),t);
});
horizon_alpha.field.terrain.rand_terrain = (function horizon_alpha$field$terrain$rand_terrain(){

if((cljs.core.rand.call(null) < 0.9)){
return new cljs.core.Keyword(null,"grass","grass",1213050421);
} else {
if((cljs.core.rand.call(null) < 0.9)){
return new cljs.core.Keyword(null,"rock","rock",946709275);
} else {
return new cljs.core.Keyword(null,"lava","lava",131379369);
}
}
});

//# sourceMappingURL=terrain.js.map