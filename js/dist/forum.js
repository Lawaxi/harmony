module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([,function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(e,t){e.exports=flarum.core.compat["forum/app"]},function(e,t){e.exports=flarum.core.compat["forum/states/DiscussionListState"]},function(e,t){e.exports=flarum.core.compat["forum/components/WelcomeHero"]},function(e,t){e.exports=flarum.core.compat["forum/components/HeaderSecondary"]},function(e,t){e.exports=flarum.core.compat["common/components/Button"]},function(e,t){e.exports=flarum.core.compat["tags/models/Tag"]},function(e,t){e.exports=flarum.core.compat["common/Model"]},function(e,t,r){"use strict";r.r(t);var o=r(4),n=r.n(o),i=r(1),s=r(3),a=r.n(s),u=r(5),c=r.n(u),l=r(6),f=r.n(l),p=r(7),d=r.n(p),b=r(2),v=r.n(b),y=r(8),h=r.n(y),x=r(9),g=r.n(x),w=r(10),O=r.n(w);n.a.initializers.add("lawaxi-harmony",(function(e){Object(i.override)(a.a.prototype,"view",(function(t){var r=this;if(!e.session.user){if(this.attrs.discussion.user().username()!==(e.forum.attribute("lawaxi-harmony.allown")||"delay"))return null;if(this.attrs.discussion.replyCount()>0)return null;try{e.forum.attribute("lawaxi-harmony.ban").split(",").forEach((function(e){if(-1!==r.attrs.discussion.title().indexOf(e))throw new Error("c")}))}catch(e){return null}}return t()})),Object(i.extend)(c.a.prototype,"constructor",(function(t){e.session.user||(this.pageSize=114514)})),Object(i.override)(a.a.prototype,"replyCountItem",(function(t){if(!e.session.user)return null})),Object(i.override)(f.a.prototype,"view",(function(t){var r=this;if(t()&&!e.session.user){return m("header",{class:"Hero WelcomeHero"},m("div",{class:"container"},m(h.a,{icon:"fas fa-times",onclick:function(){r.$().slideUp(r.hide.bind(r))},className:"Hero-close Button Button--icon Button--link","aria-label":e.translator.trans("core.forum.welcome_hero.hide")}),m("div",{class:"containerNarrow"},m("h2",{class:"Hero-title"},e.forum.attribute("lawaxi-harmony.blogtitle")),m("div",{class:"Hero-subtitle"},m.trust(e.forum.attribute("lawaxi-harmony.blogsubtitle"))))))}return t()})),Object(i.override)(d.a.prototype,"items",(function(t){var r=t();return e.session.user||r.remove("signUp"),r})),e.initializers.has("flarum-tags")&&e.initializers.has("fof/best-answer")&&(g.a.prototype.isQnA=O.a.attribute("isQnA")),Object(i.override)(v.a.prototype,"sidebarItems",(function(t){var r,o=t();if(e.initializers.has("flarum-tags")&&e.initializers.has("fof/best-answer")&&(null!=(r=this.currentTag())&&null!=r.isQnA&&r.isQnA()))return o;return e.session.user||o.remove("newDiscussion"),o})),Object(i.override)(v.a.prototype,"viewItems",(function(t){var r=t();return e.session.user||r.remove("sort"),r})),e.initializers.has("flarum-tags")&&e.initializers.has("fof/best-answer")&&Object(i.override)(v.a.prototype,"navItems",(function(t){var r=t();return e.session.user||e.store.all("tags").forEach((function(e,t,o){null!=e&&null!=e.isQnA&&e.isQnA()&&r.remove("tag"+e.id())})),r}))}))}]);
//# sourceMappingURL=forum.js.map