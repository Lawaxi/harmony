module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}({1:function(t,e){t.exports=flarum.core.compat["admin/app"]},9:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r);a.a.initializers.add("lawaxi-harmony",(function(){a.a.extensionData.for("lawaxi-harmony").registerSetting({label:a.a.translator.trans("lawaxi-harmony.admin.settings.allown"),setting:"lawaxi-harmony.allown",type:"string"}),a.a.extensionData.for("lawaxi-harmony").registerSetting({label:a.a.translator.trans("lawaxi-harmony.admin.settings.blogtitle"),setting:"lawaxi-harmony.blogtitle",type:"string"}),a.a.extensionData.for("lawaxi-harmony").registerSetting({label:a.a.translator.trans("lawaxi-harmony.admin.settings.blogsubtitle"),setting:"lawaxi-harmony.blogsubtitle",type:"string"})}))}});
//# sourceMappingURL=admin.js.map