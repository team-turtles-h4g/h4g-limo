(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[181],{90181:(e,t,i)=>{"use strict";i.r(t),i.d(t,{calcite_action_bar:()=>p});var n=i(16304),a=i(23131),o=i(97364),r=i(87538),s=i(74831),l=i(72475);i(11142),i(72364);const c="bottom-actions",d="expand-tooltip";let p=class{constructor(e){(0,a.r)(this,e),this.calciteActionBarToggle=(0,a.c)(this,"calciteActionBarToggle",7),this.expandDisabled=!1,this.expanded=!1,this.overflowActionsDisabled=!1,this.mutationObserver=(0,s.c)("mutation",()=>{const{el:e,expanded:t}=this;(0,o.t)({parent:e,expanded:t}),this.conditionallyOverflowActions()}),this.resizeObserver=(0,s.c)("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenChangeHandler=e=>{if(e.detail){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(e=>{t.includes(e)||(e.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{height:t}=e.contentRect;this.resize(t)},this.resize=(0,l.d)(e=>{var t;const{el:i,expanded:n,expandDisabled:a}=this;if(!e)return;const s=(0,o.q)(i),l=a?s.length:s.length+1,d=Array.from(i.querySelectorAll("calcite-action-group")),p=(0,r.g)(i,c)||!a?d.length+1:d.length,m=(0,o.g)({actionCount:l,actionHeight:null===(t=s[0])||void 0===t?void 0:t.clientHeight,height:e,groupCount:p});(0,o.a)({actionGroups:d,expanded:n,overflowCount:m})},o.o),this.conditionallyOverflowActions=()=>{this.overflowActionsDisabled||this.overflowActions()},this.toggleExpand=()=>{this.expanded=!this.expanded},this.setExpandToggleRef=e=>{this.expandToggleEl=e}}expandHandler(e){e||(0,o.t)({parent:this.el,expanded:this.expanded}),this.conditionallyOverflowActions()}expandedHandler(e){this.expandDisabled||(0,o.t)({parent:this.el,expanded:e}),this.calciteActionBarToggle.emit()}overflowDisabledHandler(e){e?this.resizeObserver.disconnect():this.resizeObserver.observe(this.el)}componentDidLoad(){this.conditionallyOverflowActions()}connectedCallback(){var e,t;const{el:i,expandDisabled:n,expanded:a}=this;n||(0,o.t)({parent:i,expanded:a}),null===(e=this.mutationObserver)||void 0===e||e.observe(i,{childList:!0,subtree:!0}),this.overflowActionsDisabled||null===(t=this.resizeObserver)||void 0===t||t.observe(i),this.conditionallyOverflowActions()}disconnectedCallback(){var e,t;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),null===(t=this.resizeObserver)||void 0===t||t.disconnect()}overflowActions(){var e=this;return(0,n.Z)(function*(){e.resize(e.el.clientHeight)})()}setFocus(e){var t=this;return(0,n.Z)(function*(){"expand-toggle"!==e?t.el.focus():yield(0,r.f)(t.expandToggleEl)})()}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,intlExpand:i,intlCollapse:n,el:s,position:l,toggleExpand:p,scale:m}=this,h=(0,r.g)(s,d),b=t?null:(0,a.h)(o.C,{el:s,expanded:e,intlCollapse:n||"Collapse",intlExpand:i||"Expand",position:l,ref:this.setExpandToggleRef,scale:m,toggle:p,tooltip:h});return(0,r.g)(s,c)||b?(0,a.h)("calcite-action-group",{class:"action-group--bottom",scale:m},(0,a.h)("slot",{name:c}),(0,a.h)("slot",{name:d}),b):null}render(){return(0,a.h)(a.H,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},(0,a.h)("slot",null),this.renderBottomActionGroup())}get el(){return(0,a.g)(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],overflowActionsDisabled:["overflowDisabledHandler"]}}};p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;pointer-events:auto;max-width:15vw}:host([overflow-actions-disabled]){overflow-y:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2)}::slotted(calcite-action-group:last-child){border-bottom-width:0}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}"},74831:(e,t,i)=>{"use strict";function n(e,t,i){return new(function(e){return"intersection"===e?IntersectionObserver:"mutation"===e?MutationObserver:ResizeObserver}(e))(t,i)}i.d(t,{c:()=>n})}}]);