module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e){t.exports=flarum.core.compat["common/extend"]},,function(t,e){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["forum/components/WelcomeHero"]},function(t,e){t.exports=flarum.core.compat["forum/components/HeaderSecondary"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["tags/models/Tag"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),i=r(0),s=r(3),a=r.n(s),u=r(5),c=r.n(u),l=r(6),f=r.n(l),d=r(2),p=r.n(d),b=r(7),v=r.n(b),h=r(8),x=r.n(h),y=r(9),O=r.n(y);o.a.initializers.add("lawaxi-harmony",(function(t){Object(i.override)(a.a.prototype,"view",(function(e){if(!t.session.user){if(this.attrs.discussion.user().username()!==(t.forum.attribute("lawaxi-harmony.allown")||"delay"))return null;if(-1!==this.attrs.discussion.title().indexOf("习")||-1!==this.attrs.discussion.title().indexOf("江")||-1!==this.attrs.discussion.title().indexOf("彭")||-1!==this.attrs.discussion.title().indexOf("台")||-1!==this.attrs.discussion.title().indexOf("北京")||-1!==this.attrs.discussion.title().indexOf("扬州")||-1!==this.attrs.discussion.title().indexOf("续")||-1!==this.attrs.discussion.title().indexOf("论坛")||-1!==this.attrs.discussion.title().indexOf("社区"))return null;if(this.attrs.discussion.replyCount()>0)return null}return e()})),Object(i.override)(a.a.prototype,"replyCountItem",(function(e){if(!t.session.user)return null})),Object(i.override)(c.a.prototype,"view",(function(e){var r=this;if(e()&&!t.session.user){return m("header",{class:"Hero WelcomeHero"},m("div",{class:"container"},m(v.a,{icon:"fas fa-times",onclick:function(){r.$().slideUp(r.hide.bind(r))},className:"Hero-close Button Button--icon Button--link","aria-label":t.translator.trans("core.forum.welcome_hero.hide")}),m("div",{class:"containerNarrow"},m("h2",{class:"Hero-title"},t.forum.attribute("lawaxi-harmony.blogtitle")),m("div",{class:"Hero-subtitle"},m.trust(t.forum.attribute("lawaxi-harmony.blogsubtitle"))))))}return e()})),Object(i.override)(f.a.prototype,"items",(function(e){var r=e();return t.session.user||r.remove("signUp"),r})),t.initializers.has("flarum-tags")&&t.initializers.has("fof/best-answer")&&(x.a.prototype.isQnA=O.a.attribute("isQnA")),Object(i.override)(p.a.prototype,"sidebarItems",(function(e){var r,n=e();if(t.initializers.has("flarum-tags")&&t.initializers.has("fof/best-answer")&&(null!=(r=this.currentTag())&&null!=r.isQnA&&r.isQnA()))return n;return t.session.user||n.remove("newDiscussion"),n})),Object(i.override)(p.a.prototype,"viewItems",(function(e){var r=e();return t.session.user||r.remove("sort"),r})),t.initializers.has("flarum-tags")&&t.initializers.has("fof/best-answer")&&Object(i.override)(p.a.prototype,"navItems",(function(e){var r=e();return t.session.user||t.store.all("tags").forEach((function(t,e,n){null!=t&&null!=t.isQnA&&t.isQnA()&&r.remove("tag"+t.id())})),r}))}))}]);
//# sourceMappingURL=forum.js.map