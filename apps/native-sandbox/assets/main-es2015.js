!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,(function(t){return e[t]}).bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("zUnb")},"0S4P":function(e,t){e.exports=ng.common},"g/Wr":function(e,t){e.exports=ng.elements},"vG+p":function(e,t){e.exports=ng.platformBrowser},vOrQ:function(e,t){e.exports=ng.core},zUnb:function(e,t,n){"use strict";n.r(t);var o=n("vOrQ"),r=n("vG+p"),c=n("0S4P"),i=n("g/Wr");let l=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.CommonModule]]}),e})();function a(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"i",4),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](e.icon)}}function s(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"span"),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](e.label)}}let u=(()=>{class e{constructor(){this.action=null,this.icon=null,this.disabled=!1}ngOnInit(){}executeAction(){this.action&&this.action()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["wcp-button"]],inputs:{label:"label",class:"class",action:"action",icon:"icon",disabled:"disabled"},decls:4,vars:6,consts:[["type","button",3,"disabled","click"],[1,"btn-content"],["class","material-icons",4,"ngIf"],[4,"ngIf"],[1,"material-icons"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"button",0),o["\u0275\u0275listener"]("click",(function(){return t.executeAction()})),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275template"](2,a,2,1,"i",2),o["\u0275\u0275template"](3,s,2,1,"span",3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275classMapInterpolate1"]("btn btn-",t.disabled?"disabled":t.class,""),o["\u0275\u0275property"]("disabled",t.disabled),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.icon),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.label))},directives:[c.NgIf],styles:[".btn[_ngcontent-%COMP%]{min-width:120px;height:40px;border-radius:0;outline:none;box-shadow:none;border-color:#000}.btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle;align-items:center}.btn-primary[_ngcontent-%COMP%]{background:#ffe600}.btn-secondary[_ngcontent-%COMP%]{background:silver}"]}),e})(),d=(()=>{class e extends class{constructor(e,t,n){const o=Object(i.createCustomElement)(t,{injector:e});customElements.define(`wc-${n}`,o)}ngDoBootstrap(){}}{constructor(e){super(e,u,"button")}}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(o["\u0275\u0275inject"](o.Injector))},imports:[[r.BrowserModule,l]]}),e})();Object(o.enableProdMode)(),r.platformBrowser().bootstrapModule(d).catch(e=>console.error(e))}});