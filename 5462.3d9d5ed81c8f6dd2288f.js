(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[5462],{75462:(t,e,i)=>{"use strict";i.r(e),i.d(e,{calcite_notice:()=>s});var o=i(16304),n=i(23131),a=i(8398),c=i(87538);const l="actions-end";let s=class{constructor(t){(0,n.r)(this,t),this.calciteNoticeClose=(0,n.c)(this,"calciteNoticeClose",7),this.calciteNoticeOpen=(0,n.c)(this,"calciteNoticeOpen",7),this.active=!1,this.color="blue",this.dismissible=!1,this.intlClose="Close",this.scale="m",this.width="auto",this.close=()=>{this.active=!1,this.calciteNoticeClose.emit()}}updateRequestedIcon(){this.requestedIcon=(0,c.s)(a.S,this.icon,this.color)}componentWillLoad(){this.requestedIcon=(0,c.s)(a.S,this.icon,this.color)}componentDidLoad(){this.noticeLinkEl=this.el.querySelector("calcite-link")}render(){const{el:t}=this,e=(0,c.a)(t),i=(0,n.h)("button",{"aria-label":this.intlClose,class:"notice-close",onClick:this.close,ref:t=>this.closeButton=t},(0,n.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),o=(0,c.g)(t,l);return(0,n.h)("div",{class:{container:!0,[c.C.rtl]:"rtl"===e}},this.requestedIcon?(0,n.h)("div",{class:"notice-icon"},(0,n.h)("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,(0,n.h)("div",{class:"notice-content"},(0,n.h)("slot",{name:"title"}),(0,n.h)("slot",{name:"message"}),(0,n.h)("slot",{name:"link"})),o?(0,n.h)("div",{class:"actions-end"},(0,n.h)("slot",{name:l})):null,this.dismissible?i:null)}setFocus(){var t=this;return(0,o.Z)(function*(){(t.closeButton||t.noticeLinkEl)&&(t.noticeLinkEl?t.noticeLinkEl.setFocus():t.closeButton&&t.closeButton.focus())})()}get el(){return(0,n.g)(this)}static get watchers(){return{icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}};s.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) ::slotted(calcite-link){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) ::slotted(calcite-link){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) ::slotted(calcite-link){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;margin-left:auto;margin-right:auto;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{display:none;text-align:left;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;opacity:0;pointer-events:none;background-color:var(--calcite-ui-foreground-1);max-height:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{display:-ms-flexbox;display:flex;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;border-width:2px;pointer-events:auto}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){display:inline;margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-right:var(--calcite-notice-spacing-token-small)}.calcite--rtl slot[name=message]::slotted(*),.calcite--rtl *::slotted([slot=message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.notice-close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;border-style:none;outline:2px solid transparent;outline-offset:2px;cursor:pointer;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}.calcite--rtl{text-align:right;border-left:none;border-right:0px solid}.calcite--rtl .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}.calcite--rtl .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.calcite--rtl .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}"},87538:(t,e,i)=>{"use strict";i.d(e,{C:()=>a,T:()=>c,a:()=>m,b:()=>r,c:()=>p,d:()=>u,e:()=>l,f:()=>k,g:()=>w,h:()=>f,i:()=>b,j:()=>z,k:()=>y,n:()=>s,q:()=>h,s:()=>v});var o=i(16304),n=i(65260);const a={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},c={loading:"Loading"};function l(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,n.g)()}`:""}function s(t){return Array.isArray(t)?t:Array.from(t)}function r(t){return p(t,`.${a.darkTheme}`)?"dark":"light"}function m(t){const e=p(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function u(t,e,i){const o=t.closest(`[${e}]`);return o?o.getAttribute(e):i}function d(t){return t.getRootNode()}function g(t){return t.host||null}function f(t,e){return function t(i,o){if(!i)return o;i.assignedSlot&&(i=i.assignedSlot);const n=d(i),a=Array.from(n.querySelectorAll(e)).filter(t=>!o.includes(t));o=[...o,...a];const c=g(n);return c?t(c,o):o}(t,[])}function h(t,e){return function t(i){if(!i)return null;i.assignedSlot&&(i=i.assignedSlot);const o=d(i),n=o.querySelector(e),a=g(o);return n||(a?t(a):null)}(t)}function p(t,e){return function t(i){return i?i.closest(e)||t(g(d(i))):null}(t)}function b(t){return"function"==typeof(null==t?void 0:t.setFocus)}function k(t){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)(function*(t){if(t)return b(t)?t.setFocus():t.focus()})).apply(this,arguments)}function w(t,e,i){const o=`[slot="${e}"]`;return(null==i?void 0:i.all)?function(t,e,i){let o=Array.from(t.querySelectorAll(e));o=i&&!1===i.direct?o:o.filter(e=>e.parentElement===t);const n=null==i?void 0:i.selector;return n?o.map(t=>Array.from(t.querySelectorAll(n))).reduce((t,e)=>[...t,...e],[]).filter(t=>!!t):o}(t,o,i):function(t,e,i){let o=t.querySelector(e);o=i&&!1===i.direct||(null==o?void 0:o.parentElement)===t?o:null;const n=null==i?void 0:i.selector;return n?o.querySelector(n):o}(t,o,i)}function y(t,e){return Array.from(t.children).filter(t=>t.matches(e))}function v(t,e,i){return"string"==typeof e&&""!==e?e:""===e?t[i]:void 0}function z(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}},65260:(t,e,i)=>{"use strict";i.d(e,{g:()=>o});const o=()=>[2,1,1,1,3].map(t=>{let e="";for(let i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e}).join("-")}}]);