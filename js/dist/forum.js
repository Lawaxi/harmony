module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([,function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["tags/models/Tag"]},function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["forum/states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["forum/components/WelcomeHero"]},function(t,e){t.exports=flarum.core.compat["forum/components/HeaderSecondary"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,e,r){"use strict";r.r(e);var o=r(6),n=r.n(o),i=r(1),s=r(4),a=r.n(s),u=r(7),c=r.n(u),l=r(8),f=r.n(l),p=r(9),d=r.n(p),b=r(2),y=r.n(b),h=r(10),v=r.n(h),x=r(3),g=r.n(x),w=r(11),O=r.n(w),j=r(5),z=r.n(j);n.a.initializers.add("lawaxi-harmony",(function(t){t.initializers.has("flarum-tags")&&(O.a.prototype.tags=g.a.hasMany("tags"),z.a.prototype.slug=g.a.attribute("slug"),t.initializers.has("fof/best-answer")&&(z.a.prototype.isQnA=g.a.attribute("isQnA"))),Object(i.override)(a.a.prototype,"view",(function(e){var r=this;if(!t.session.user){if(this.attrs.discussion.user().username()!==(t.forum.attribute("lawaxi-harmony.allown")||"delay"))return null;if(this.attrs.discussion.replyCount()>0)return null;try{t.initializers.has("flarum-tags")&&this.attrs.discussion.tags().forEach((function(e){if(-1!==t.forum.attribute("lawaxi-harmony.bantags").indexOf(e))throw new Error("a")})),t.forum.attribute("lawaxi-harmony.ban").split(",").forEach((function(t){if(-1!==r.attrs.discussion.title().indexOf(t))throw new Error("b")}))}catch(t){return null}}return e()})),Object(i.extend)(c.a.prototype,"constructor",(function(e){t.session.user||(this.pageSize=114514)})),Object(i.override)(a.a.prototype,"replyCountItem",(function(e){if(!t.session.user)return null})),Object(i.override)(f.a.prototype,"view",(function(e){var r=this;if(e()&&!t.session.user){return m("header",{class:"Hero WelcomeHero"},m("div",{class:"container"},m(v.a,{icon:"fas fa-times",onclick:function(){r.$().slideUp(r.hide.bind(r))},className:"Hero-close Button Button--icon Button--link","aria-label":t.translator.trans("core.forum.welcome_hero.hide")}),m("div",{class:"containerNarrow"},m("h2",{class:"Hero-title"},t.forum.attribute("lawaxi-harmony.blogtitle")),m("div",{class:"Hero-subtitle"},m.trust(t.forum.attribute("lawaxi-harmony.blogsubtitle"))))))}return e()})),Object(i.override)(d.a.prototype,"items",(function(e){var r=e();return t.session.user||r.remove("signUp"),r})),Object(i.override)(y.a.prototype,"sidebarItems",(function(e){var r,o=e();if(t.initializers.has("flarum-tags")&&t.initializers.has("fof/best-answer")&&(null!=(r=this.currentTag())&&null!=r.isQnA&&r.isQnA()))return o;return t.session.user||o.remove("newDiscussion"),o})),Object(i.override)(y.a.prototype,"viewItems",(function(e){var r=e();return t.session.user||r.remove("sort"),r})),t.initializers.has("flarum-tags")&&Object(i.override)(y.a.prototype,"navItems",(function(e){var r=e();return t.session.user||t.store.all("tags").forEach((function(e,o,n){t.initializers.has("fof/best-answer")&&null!=e&&null!=e.isQnA&&e.isQnA()&&r.remove("tag"+e.id()),-1!==t.forum.attribute("lawaxi-harmony.bantags").indexOf(e.slug())&&r.remove("tag"+e.id())})),r}))}))}]);
//# sourceMappingURL=forum.js.map