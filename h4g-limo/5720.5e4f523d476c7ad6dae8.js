(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[5720],{15720:(t,i,e)=>{"use strict";e.r(i),e.d(i,{calcite_split_button:()=>n});var a=e(23131),r=e(87538);let n=class{constructor(t){(0,a.r)(this,t),this.calciteSplitButtonPrimaryClick=(0,a.c)(this,"calciteSplitButtonPrimaryClick",7),this.calciteSplitButtonSecondaryClick=(0,a.c)(this,"calciteSplitButtonSecondaryClick",7),this.appearance="solid",this.color="blue",this.disabled=!1,this.active=!1,this.dropdownIconType="chevron",this.loading=!1,this.scale="m",this.width="auto",this.calciteSplitButtonPrimaryClickHandler=t=>this.calciteSplitButtonPrimaryClick.emit(t),this.calciteSplitButtonSecondaryClickHandler=t=>this.calciteSplitButtonSecondaryClick.emit(t)}render(){const t=(0,r.a)(this.el);return(0,a.h)("div",{class:{"split-button__container":!0,"width-auto":"auto"===this.width,"width-half":"half"===this.width,"width-full":"full"===this.width},dir:t},(0,a.h)("calcite-button",{appearance:this.appearance,color:this.color,dir:t,disabled:this.disabled,"icon-end":this.primaryIconEnd?this.primaryIconEnd:null,"icon-start":this.primaryIconStart?this.primaryIconStart:null,iconFlipRtl:this.primaryIconFlipRtl?this.primaryIconFlipRtl:null,label:this.primaryLabel,loading:this.loading,onClick:this.calciteSplitButtonPrimaryClickHandler,scale:this.scale,splitChild:"primary",width:"auto"===this.width?"auto":"full"},this.primaryText),(0,a.h)("div",{class:"split-button__divider-container"},(0,a.h)("div",{class:"split-button__divider"})),(0,a.h)("calcite-dropdown",{active:this.active,dir:t,onClick:this.calciteSplitButtonSecondaryClickHandler,placement:"bottom-trailing",scale:this.scale,width:this.scale},(0,a.h)("calcite-button",{appearance:this.appearance,color:this.color,dir:t,disabled:this.disabled,"icon-start":this.dropdownIcon,label:this.dropdownLabel,scale:this.scale,slot:"dropdown-trigger",splitChild:"secondary"}),(0,a.h)("slot",null)))}get dropdownIcon(){return"chevron"===this.dropdownIconType?"chevronDown":"caret"===this.dropdownIconType?"caretDown":"ellipsis"===this.dropdownIconType?"ellipsis":"handle-vertical"}get el(){return(0,a.g)(this)}};n.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host .split-button__container{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}:host .split-button__container>calcite-dropdown>calcite-button{height:100%;vertical-align:top}:host([appearance=solid]):host([color=blue]){--calcite-split-button-background:var(--calcite-ui-brand);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=solid]):host([color=red]){--calcite-split-button-background:var(--calcite-ui-danger);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=solid]):host([color=neutral]){--calcite-split-button-background:var(--calcite-ui-foreground-3);--calcite-split-button-divider:var(--calcite-ui-text-1)}:host([appearance=solid]):host([color=inverse]){--calcite-split-button-background:var(--calcite-ui-inverse);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=transparent]):host([color=blue]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=transparent]):host([color=red]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=transparent]):host([color=neutral]){--calcite-split-button-divider:var(--calcite-ui-text-1)}:host([appearance=transparent]):host([color=inverse]){--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=clear]),:host([appearance=transparent]){--calcite-split-button-background:transparent}:host([appearance=outline]){--calcite-split-button-background:var(--calcite-ui-foreground-1)}:host([appearance=clear]):host([color=blue]),:host([appearance=outline]):host([color=blue]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=clear]):host([color=red]),:host([appearance=outline]):host([color=red]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=clear]):host([color=neutral]),:host([appearance=outline]):host([color=neutral]){--calcite-split-button-divider:var(--calcite-ui-foreground-3)}:host([appearance=clear]):host([color=inverse]),:host([appearance=outline]):host([color=inverse]){--calcite-split-button-divider:var(--calcite-ui-inverse)}.width-auto{width:auto}.width-half{width:50%}.width-full{width:100%}.split-button__divider-container{width:1px;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-webkit-transition:0.15s ease-in-out;transition:0.15s ease-in-out;background-color:var(--calcite-split-button-background)}.split-button__divider{width:1px;margin-top:0.25rem;margin-bottom:0.25rem;display:inline-block;background-color:var(--calcite-split-button-divider)}:host([appearance=outline]) .split-button__divider-container,:host([appearance=clear]) .split-button__divider-container{border-top:1px solid var(--calcite-split-button-divider);border-bottom:1px solid var(--calcite-split-button-divider)}:host([appearance=outline]):hover .split-button__divider-container,:host([appearance=clear]):hover .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline]:hover) .split-button__divider-container,:host([appearance=clear]:hover) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline]:focus-within):host([color=blue]),:host([appearance=clear]:focus-within):host([color=blue]){--calcite-split-button-divider:var(--calcite-ui-brand-press)}:host([appearance=outline]:focus-within):host([color=red]),:host([appearance=clear]:focus-within):host([color=red]){--calcite-split-button-divider:var(--calcite-ui-danger-press)}:host([appearance=outline]:focus-within) .split-button__divider-container,:host([appearance=clear]:focus-within) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([disabled]) .split-button__divider-container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}"},87538:(t,i,e)=>{"use strict";e.d(i,{C:()=>n,T:()=>o,a:()=>d,b:()=>s,c:()=>f,d:()=>u,e:()=>c,f:()=>y,g:()=>g,h:()=>b,i:()=>v,j:()=>S,k:()=>k,n:()=>l,q:()=>m,s:()=>_});var a=e(16304),r=e(65260);const n={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},o={loading:"Loading"};function c(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function l(t){return Array.isArray(t)?t:Array.from(t)}function s(t){return f(t,`.${n.darkTheme}`)?"dark":"light"}function d(t){const i=f(t,"[dir]");return i?i.getAttribute("dir"):"ltr"}function u(t,i,e){const a=t.closest(`[${i}]`);return a?a.getAttribute(i):e}function p(t){return t.getRootNode()}function h(t){return t.host||null}function b(t,i){return function t(e,a){if(!e)return a;e.assignedSlot&&(e=e.assignedSlot);const r=p(e),n=Array.from(r.querySelectorAll(i)).filter(t=>!a.includes(t));a=[...a,...n];const o=h(r);return o?t(o,a):a}(t,[])}function m(t,i){return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);const a=p(e),r=a.querySelector(i),n=h(a);return r||(n?t(n):null)}(t)}function f(t,i){return function t(e){return e?e.closest(i)||t(h(p(e))):null}(t)}function v(t){return"function"==typeof(null==t?void 0:t.setFocus)}function y(t){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(function*(t){if(t)return v(t)?t.setFocus():t.focus()})).apply(this,arguments)}function g(t,i,e){const a=`[slot="${i}"]`;return(null==e?void 0:e.all)?function(t,i,e){let a=Array.from(t.querySelectorAll(i));a=e&&!1===e.direct?a:a.filter(i=>i.parentElement===t);const r=null==e?void 0:e.selector;return r?a.map(t=>Array.from(t.querySelectorAll(r))).reduce((t,i)=>[...t,...i],[]).filter(t=>!!t):a}(t,a,e):function(t,i,e){let a=t.querySelector(i);a=e&&!1===e.direct||(null==a?void 0:a.parentElement)===t?a:null;const r=null==e?void 0:e.selector;return r?a.querySelector(r):a}(t,a,e)}function k(t,i){return Array.from(t.children).filter(t=>t.matches(i))}function _(t,i,e){return"string"==typeof i&&""!==i?i:""===i?t[e]:void 0}function S(t,i){return!(i.left>t.right||i.right<t.left||i.top>t.bottom||i.bottom<t.top)}},65260:(t,i,e)=>{"use strict";e.d(i,{g:()=>a});const a=()=>[2,1,1,1,3].map(t=>{let i="";for(let e=0;e<t;e++)i+=(65536*(1+Math.random())|0).toString(16).substring(1);return i}).join("-")}}]);