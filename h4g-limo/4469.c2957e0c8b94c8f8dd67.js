(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[4469],{4469:(t,a,e)=>{"use strict";e.r(a),e.d(a,{calcite_graph:()=>d,calcite_slider:()=>p});var i=e(16304),s=e(23131),n=e(65260),l=e(35533),r=e(87538),o=e(49561),h=e(86478),c=e(97738);function m(t,a,e){const i=a[0]-t[0];return i?(3*(a[1]-t[1])/i-e)/2:e}function u(t,a,e,i,s){const[n,l]=t,[r,o]=a,h=(r-n)/3;return`C ${s([n+h,l+h*e]).join(",")} ${s([r-h,o-h*i]).join(",")} ${s([r,o]).join(",")}`}let d=class{constructor(t){(0,s.r)(this,t),this.data=[],this.width=300,this.height=100,this.graphId=`calcite-graph-${(0,n.g)()}`}render(){const{data:t,colorStops:a,width:e,height:i,highlightMax:n,highlightMin:l,min:r,max:o}=this,h=this.graphId;if(!t||0===t.length)return(0,s.h)("svg",{class:"svg",height:i,preserveAspectRatio:"none",viewBox:`0 0 ${e} ${i}`,width:e});const{min:c,max:d}=function(t){const[a,e]=t[0];return t.reduce(({min:t,max:a},[e,i])=>({min:[Math.min(t[0],e),Math.min(t[1],i)],max:[Math.max(a[0],e),Math.max(a[1],i)]}),{min:[a,e],max:[a,e]})}(t);let p=c,b=d;(r<c[0]||r>c[0])&&(p=[r,0]),(o>d[0]||o<d[0])&&(b=[o,d[1]]);const g=function({width:t,height:a,min:e,max:i}){const s=i[0]-e[0],n=i[1]-e[1];return i=>[(i[0]-e[0])/s*t,a-i[1]/n*a]}({min:p,max:b,width:e,height:i}),[f]=g([l,b[1]]),[x]=g([n,b[1]]),v=function({data:t,min:a,max:e,t:i}){if(0===t.length)return"";const[s,n]=i(t[0]),[l,r]=i(a),[o]=i(e);let h,c,d;const p=t.reduce((a,e,s)=>{if(c=t[s-2],d=t[s-1],s>1){const t=function(t,a,e){const i=a[0]-t[0],s=e[0]-a[0],n=(a[1]-t[1])/(i||s<0&&0),l=(e[1]-a[1])/(s||i<0&&0),r=(n*s+l*i)/(i+s);return(Math.sign(n)+Math.sign(l))*Math.min(Math.abs(n),Math.abs(l),.5*Math.abs(r))||0}(c,d,e),s=void 0===h?m(c,d,t):h,n=u(c,d,s,t,i);return h=t,`${a} ${n}`}return a},`M ${l},${r} L ${l},${n} L ${s},${n}`),b=t[t.length-1];return`${p} ${u(d,b,h,m(d,b,h),i)} L ${o},${r} Z`}({data:t,min:c,max:d,t:g}),k=a?`url(#linear-gradient-${h})`:void 0;return(0,s.h)("svg",{class:"svg",height:i,preserveAspectRatio:"none",viewBox:`0 0 ${e} ${i}`,width:e},a?(0,s.h)("defs",null,(0,s.h)("linearGradient",{id:`linear-gradient-${h}`,x1:"0",x2:"1",y1:"0",y2:"0"},a.map(({offset:t,color:a,opacity:e})=>(0,s.h)("stop",{offset:100*t+"%","stop-color":a,"stop-opacity":e})))):null,void 0!==l?[(0,s.h)("mask",{height:"100%",id:`${h}1`,width:"100%",x:"0%",y:"0%"},(0,s.h)("path",{d:`\n            M 0,0\n            L ${f-1},0\n            L ${f-1},${i}\n            L 0,${i}\n            Z\n          `,fill:"white"})),(0,s.h)("mask",{height:"100%",id:`${h}2`,width:"100%",x:"0%",y:"0%"},(0,s.h)("path",{d:`\n            M ${f+1},0\n            L ${x-1},0\n            L ${x-1},${i}\n            L ${f+1}, ${i}\n            Z\n          `,fill:"white"})),(0,s.h)("mask",{height:"100%",id:`${h}3`,width:"100%",x:"0%",y:"0%"},(0,s.h)("path",{d:`\n                M ${x+1},0\n                L ${e},0\n                L ${e},${i}\n                L ${x+1}, ${i}\n                Z\n              `,fill:"white"})),(0,s.h)("path",{class:"graph-path",d:v,fill:k,mask:`url(#${h}1)`}),(0,s.h)("path",{class:"graph-path--highlight",d:v,fill:k,mask:`url(#${h}2)`}),(0,s.h)("path",{class:"graph-path",d:v,fill:k,mask:`url(#${h}3)`})]:(0,s.h)("path",{class:"graph-path",d:v,fill:k}))}get el(){return(0,s.g)(this)}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.svg{fill:currentColor;stroke:transparent;margin:0;padding:0;display:block}:host([data-style=slider-histogram]) svg{width:100%}:host([data-style=slider-histogram]) svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}";let p=class{constructor(t){(0,s.r)(this,t),this.calciteSliderInput=(0,s.c)(this,"calciteSliderInput",7),this.calciteSliderChange=(0,s.c)(this,"calciteSliderChange",7),this.calciteSliderUpdate=(0,s.c)(this,"calciteSliderUpdate",7),this.disabled=!1,this.hasHistogram=!1,this.labelHandles=!1,this.labelTicks=!1,this.max=100,this.min=0,this.mirrored=!1,this.precise=!1,this.required=!1,this.snap=!1,this.step=1,this.value=null,this.guid=`calcite-slider-${(0,n.g)()}`,this.isRange=!1,this.activeProp="value",this.minMaxValueRange=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.tickValues=[],this.dragUpdate=t=>{if(t.preventDefault(),this.dragProp){const a=this.translate(t.clientX||t.pageX);if(this.isRange&&"minMaxValue"===this.dragProp)if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){const t=a-this.minValueDragRange,e=a+this.maxValueDragRange;e<=this.max&&t>=this.min&&e-t===this.minMaxValueRange&&(this.minValue=this.clamp(t,"minValue"),this.maxValue=this.clamp(e,"maxValue"))}else this.minValueDragRange=a-this.minValue,this.maxValueDragRange=this.maxValue-a,this.minMaxValueRange=this.maxValue-this.minValue;else this.setValue(this.dragProp,this.clamp(a,this.dragProp))}},this.dragEnd=t=>{document.removeEventListener("pointermove",this.dragUpdate),document.removeEventListener("pointerup",this.dragEnd),document.removeEventListener("pointercancel",this.dragEnd),this.focusActiveHandle(t.clientX),this.lastDragPropValue!=this[this.dragProp]&&this.emitChange(),this.dragProp=null,this.lastDragPropValue=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null},this.storeTrackRef=t=>{this.trackEl=t}}histogramWatcher(t){this.hasHistogram=!!t}connectedCallback(){(0,h.c)(this),(0,c.c)(this)}disconnectedCallback(){(0,h.d)(this),(0,c.d)(this)}componentWillLoad(){this.isRange=!(!this.maxValue&&0!==this.maxValue),this.tickValues=this.generateTickValues(),this.value=this.clamp(this.value),(0,c.a)(this,this.value),this.snap&&(this.value=this.getClosestStep(this.value)),this.histogram&&(this.hasHistogram=!0)}componentDidRender(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),this.isRange&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&this.isRange&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels()}render(){const t=this.el.id||this.guid,a=this.minValue||this.min,e=this.maxValue||this.value,i=this.isRange?"maxValue":"value",n=this[i],l=this.shouldUseMinValue(),r=100*this.getUnitInterval(l?this.minValue:a),o=100*this.getUnitInterval(e),h=this.shouldMirror(),m=`${h?100-r:r}%`,u=`${h?o:100-o}%`,d=(0,s.h)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===i},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:()=>this.dragStart(i),ref:t=>this.maxHandle=t,role:"slider",style:{right:u}},(0,s.h)("div",{class:"handle"})),p=(0,s.h)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===i},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:()=>this.dragStart(i),ref:t=>this.maxHandle=t,role:"slider",style:{right:u}},(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},n?n.toLocaleString():n),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},n?n.toLocaleString():n),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},n?n.toLocaleString():n),(0,s.h)("div",{class:"handle"})),b=(0,s.h)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===i},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:()=>this.dragStart(i),ref:t=>this.maxHandle=t,role:"slider",style:{right:u}},(0,s.h)("div",{class:"handle"}),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},n?n.toLocaleString():n),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},n?n.toLocaleString():n),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},n?n.toLocaleString():n)),g=(0,s.h)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===i,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:()=>this.dragStart(i),ref:t=>this.maxHandle=t,role:"slider",style:{right:u}},(0,s.h)("div",{class:"handle"}),(0,s.h)("div",{class:"handle-extension"})),f=(0,s.h)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===i,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:()=>this.dragStart(i),ref:t=>this.maxHandle=t,role:"slider",style:{right:u}},(0,s.h)("div",{class:"handle-extension"}),(0,s.h)("div",{class:"handle"})),x=(0,s.h)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===i,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:()=>this.dragStart(i),ref:t=>this.maxHandle=t,role:"slider",style:{right:u}},(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},n?n.toLocaleString():n),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},n?n.toLocaleString():n),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},n?n.toLocaleString():n),(0,s.h)("div",{class:"handle"}),(0,s.h)("div",{class:"handle-extension"})),v=(0,s.h)("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===i,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:()=>this.dragStart(i),ref:t=>this.maxHandle=t,role:"slider",style:{right:u}},(0,s.h)("div",{class:"handle-extension"}),(0,s.h)("div",{class:"handle"}),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},n?n.toLocaleString():n),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},n?n.toLocaleString():n),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},n?n.toLocaleString():n)),k=(0,s.h)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:()=>this.dragStart("minValue"),ref:t=>this.minHandle=t,role:"slider",style:{left:m}},(0,s.h)("div",{class:"handle"})),w=(0,s.h)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:()=>this.dragStart("minValue"),ref:t=>this.minHandle=t,role:"slider",style:{left:m}},(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()),(0,s.h)("div",{class:"handle"})),_=(0,s.h)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:()=>this.dragStart("minValue"),ref:t=>this.minHandle=t,role:"slider",style:{left:m}},(0,s.h)("div",{class:"handle"}),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString())),y=(0,s.h)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:()=>this.dragStart("minValue"),ref:t=>this.minHandle=t,role:"slider",style:{left:m}},(0,s.h)("div",{class:"handle-extension"}),(0,s.h)("div",{class:"handle"})),V=(0,s.h)("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:()=>this.dragStart("minValue"),ref:t=>this.minHandle=t,role:"slider",style:{left:m}},(0,s.h)("div",{class:"handle-extension"}),(0,s.h)("div",{class:"handle"}),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),(0,s.h)("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()));return(0,s.h)(s.H,{id:t,onTouchStart:this.handleTouchStart},(0,s.h)("div",{class:{container:!0,"container--range":this.isRange}},this.renderGraph(),(0,s.h)("div",{class:"track",ref:this.storeTrackRef},(0,s.h)("div",{class:"track__range",onPointerDown:()=>this.dragStart("minMaxValue"),style:{left:`${h?100-o:r}%`,right:`${h?r:100-o}%`}}),(0,s.h)("div",{class:"ticks"},this.tickValues.map(t=>{const i=100*this.getUnitInterval(t)+"%";let n=t>=a&&t<=e;return l&&(n=t>=this.minValue&&t<=this.maxValue),(0,s.h)("span",{class:{tick:!0,"tick--active":n},style:{left:h?"":i,right:h?i:""}},this.renderTickLabel(t))}))),!this.precise&&!this.labelHandles&&this.isRange&&k,!this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&w,this.precise&&!this.labelHandles&&this.isRange&&y,this.precise&&this.labelHandles&&this.isRange&&V,this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&_,!this.precise&&!this.labelHandles&&d,!this.hasHistogram&&!this.precise&&this.labelHandles&&p,!this.hasHistogram&&this.precise&&!this.labelHandles&&g,this.hasHistogram&&this.precise&&!this.labelHandles&&f,!this.hasHistogram&&this.precise&&this.labelHandles&&x,this.hasHistogram&&!this.precise&&this.labelHandles&&b,this.hasHistogram&&this.precise&&this.labelHandles&&v,(0,s.h)(c.H,{component:this})))}renderGraph(){return this.histogram?(0,s.h)("div",{class:"graph"},(0,s.h)("calcite-graph",{colorStops:this.histogramStops,data:this.histogram,"data-style":"slider-histogram",height:48,highlightMax:this.isRange?this.maxValue:this.value,highlightMin:this.isRange?this.minValue:this.min,max:this.max,min:this.min,width:300})):null}renderTickLabel(t){const a=t===this.min,e=t===this.max,i=(0,s.h)("span",{class:{tick__label:!0,"tick__label--min":a,"tick__label--max":e}},t.toLocaleString());return this.labelTicks&&!this.hasHistogram&&!this.isRange||this.labelTicks&&!this.hasHistogram&&this.isRange&&!this.precise&&!this.labelHandles||this.labelTicks&&!this.hasHistogram&&this.isRange&&!this.precise&&this.labelHandles||this.labelTicks&&!this.hasHistogram&&this.isRange&&this.precise&&(a||e)||this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles||this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(a||e)||this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(a||e)||this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(a||e)?i:null}keyDownHandler(t){const a=this.shouldMirror(),{activeProp:e,max:i,min:s,pageStep:n,step:r}=this,o=this[e],h=(0,l.g)(t.key);if("Enter"===h||" "===h)return void t.preventDefault();let c;"ArrowUp"===h||"ArrowRight"===h?c=o+r*(a&&"ArrowRight"===h?-1:1):"ArrowDown"===h||"ArrowLeft"===h?c=o-r*(a&&"ArrowLeft"===h?-1:1):"PageUp"===h?n&&(c=o+n):"PageDown"===h?n&&(c=o-n):"Home"===h?c=s:"End"===h&&(c=i),isNaN(c)||(t.preventDefault(),this.setValue(e,this.clamp(c,e)))}clickHandler(t){this.focusActiveHandle(t.clientX)}pointerDownHandler(t){const a=this.translate(t.clientX||t.pageX);let e="value";this.isRange&&(e=a>=this.minValue&&a<=this.maxValue&&"minMaxValue"===this.lastDragProp?"minMaxValue":Math.abs(this.maxValue-a)<Math.abs(this.minValue-a)||a>this.maxValue?"maxValue":"minValue"),this.lastDragPropValue=this[e],this.dragStart(e),this.el.shadowRoot.querySelector(".thumb:active")||this.setValue(e,this.clamp(a,e))}handleTouchStart(t){t.preventDefault()}setFocus(){var t=this;return(0,i.Z)(function*(){(t.minHandle?t.minHandle:t.maxHandle).focus()})()}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){return!!this.isRange&&(this.hasHistogram&&0===this.maxValue||!this.hasHistogram&&0===this.minValue)}generateTickValues(){const t=[];let a=this.min;for(;this.ticks&&a<this.max+this.ticks;)t.push(Math.min(a,this.max)),a+=this.ticks;return t}dragStart(t){this.dragProp=t,this.lastDragProp=this.dragProp,this.activeProp=t,document.addEventListener("pointermove",this.dragUpdate),document.addEventListener("pointerup",this.dragEnd),document.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(t){switch(this.dragProp){case"minValue":this.minHandle.focus();break;case"maxValue":this.maxHandle.focus();break;case"minMaxValue":this.getClosestHandle(t).focus()}}emitInput(){this.calciteSliderInput.emit(),this.calciteSliderUpdate.emit()}emitChange(){this.calciteSliderChange.emit()}setValue(t,a){this[t]!==a&&(this[t]=a,this.dragProp||this.emitChange(),this.emitInput())}clamp(t,a){return t=(0,o.c)(t,this.min,this.max),"maxValue"===a&&(t=Math.max(t,this.minValue)),"minValue"===a&&(t=Math.min(t,this.maxValue)),t}translate(t){const a=this.max-this.min,{left:e,width:i}=this.trackEl.getBoundingClientRect(),s=(t-e)/i,n=this.shouldMirror();let l=this.clamp(this.min+a*(n?1-s:s));return this.snap&&this.step&&(l=this.getClosestStep(l)),l}getClosestStep(t){if(t=this.clamp(t),this.step){const a=Math.round(t/this.step)*this.step;t=this.clamp(a)}return t}getClosestHandle(t){return this.getDistanceX(this.maxHandle,t)>this.getDistanceX(this.minHandle,t)?this.minHandle:this.maxHandle}getDistanceX(t,a){return Math.abs(t.getBoundingClientRect().left-a)}getFontSizeForElement(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(t){return((t=this.clamp(t))-this.min)/(this.max-this.min)}adjustHostObscuredHandleLabel(t){const a=this.el.shadowRoot.querySelector(`.handle__label--${t}`),e=this.el.shadowRoot.querySelector(`.handle__label--${t}.static`),i=this.el.shadowRoot.querySelector(`.handle__label--${t}.transformed`),s=e.getBoundingClientRect(),n=this.getHostOffset(s.left,s.right);a.style.transform=`translateX(${n}px)`,i.style.transform=`translateX(${n}px)`}hyphenateCollidingRangeHandleLabels(){const{shadowRoot:t}=this.el,a=this.shouldMirror(),e=a?"value":"minValue",i=a?"minValue":"value",s=t.querySelector(`.handle__label--${e}`),n=t.querySelector(`.handle__label--${e}.static`),l=t.querySelector(`.handle__label--${e}.transformed`),r=this.getHostOffset(n.getBoundingClientRect().left,n.getBoundingClientRect().right),o=t.querySelector(`.handle__label--${i}`),h=t.querySelector(`.handle__label--${i}.static`),c=t.querySelector(`.handle__label--${i}.transformed`),m=this.getHostOffset(h.getBoundingClientRect().left,h.getBoundingClientRect().right),u=this.getFontSizeForElement(s),d=this.getRangeLabelOverlap(l,c),p=s,b=u/2;if(d>0){if(p.classList.add("hyphen"),0===m&&0===r){let t=d/2-b;t=-1===Math.sign(t)?Math.abs(t):-t;const a=this.getHostOffset(l.getBoundingClientRect().left+t-b,l.getBoundingClientRect().right+t-b);let e=d/2;const i=this.getHostOffset(c.getBoundingClientRect().left+e,c.getBoundingClientRect().right+e);0!==a&&(t+=a,e+=a),0!==i&&(t+=i,e+=i),s.style.transform=`translateX(${t}px)`,l.style.transform=`translateX(${t-b}px)`,o.style.transform=`translateX(${e}px)`,c.style.transform=`translateX(${e}px)`}else if(r>0||m>0)s.style.transform=`translateX(${r+b}px)`,o.style.transform=`translateX(${d+m}px)`,c.style.transform=`translateX(${d+m}px)`;else if(r<0||m<0){let t=Math.abs(r)+d-b;t=-1===Math.sign(t)?Math.abs(t):-t,s.style.transform=`translateX(${t}px)`,l.style.transform=`translateX(${t-b}px)`}}else p.classList.remove("hyphen"),s.style.transform=`translateX(${r}px)`,l.style.transform=`translateX(${r}px)`,o.style.transform=`translateX(${m}px)`,c.style.transform=`translateX(${m}px)`}hideObscuredBoundingTickLabels(){if(!(this.hasHistogram||this.isRange||this.labelHandles||this.precise))return;if(!this.hasHistogram&&!this.isRange&&this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!this.isRange&&!this.labelHandles&&this.precise)return;if(!this.hasHistogram&&!this.isRange&&this.labelHandles&&this.precise)return;if(!this.hasHistogram&&this.isRange&&!this.precise)return;if(this.hasHistogram&&!this.precise&&!this.labelHandles)return;const t=this.el.shadowRoot.querySelector(".thumb--minValue"),a=this.el.shadowRoot.querySelector(".thumb--value"),e=this.el.shadowRoot.querySelector(".tick__label--min"),i=this.el.shadowRoot.querySelector(".tick__label--max");!t&&a&&e&&i&&(e.style.opacity=this.isMinTickLabelObscured(e,a)?"0":"1",i.style.opacity=this.isMaxTickLabelObscured(i,a)?"0":"1"),t&&a&&e&&i&&(e.style.opacity=this.isMinTickLabelObscured(e,t)||this.isMinTickLabelObscured(e,a)?"0":"1",i.style.opacity=this.isMaxTickLabelObscured(i,t)||this.isMaxTickLabelObscured(i,a)&&this.hasHistogram?"0":"1")}getHostOffset(t,a){const e=this.el.getBoundingClientRect();return t+7<e.left?e.left-t-7:a-7>e.right?7-(a-e.right):0}getRangeLabelOverlap(t,a){const e=t.getBoundingClientRect(),i=a.getBoundingClientRect(),s=this.getFontSizeForElement(t);return Math.max(e.right+s-i.left,0)}isMinTickLabelObscured(t,a){const e=t.getBoundingClientRect(),i=a.getBoundingClientRect();return(0,r.j)(e,i)}isMaxTickLabelObscured(t,a){const e=t.getBoundingClientRect(),i=a.getBoundingClientRect();return(0,r.j)(e,i)}get el(){return(0,s.g)(this)}static get watchers(){return{histogram:["histogramWatcher"]}}};p.style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.container{display:block;position:relative;padding:7px 0;margin:7px 0.5rem}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) .graph .graph-path--highlight{fill:var(--calcite-ui-text-3)}:host([label-handles]) .container,:host([precise]:not([precise=false])) .container{margin-top:21px}:host([label-ticks]),:host([precise]:not([precise=false])) .container--range{margin-bottom:21px}:host([precise]:not([precise=false])[label-handles]) .container{margin-top:35px}:host([precise]:not([precise=false])[label-handles]) .container--range{margin-bottom:35px}.thumb{position:absolute;border-style:none;background-color:transparent;cursor:pointer;outline:2px solid transparent;outline-offset:2px;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;font-family:inherit;z-index:2;-webkit-transform:translate(7px, -8px);transform:translate(7px, -8px)}.thumb .handle__label{font-size:var(--calcite-font-size--2);font-weight:500;line-height:1;color:var(--calcite-ui-text-2);margin-bottom:5px}.thumb .handle__label.static,.thumb .handle__label.transformed{opacity:0;position:absolute;top:0;bottom:0}.thumb .handle__label.hyphen::after{content:"\u2014";display:inline-block;width:1em}.thumb .handle{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;height:14px;width:14px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;-webkit-transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, -webkit-box-shadow 0.25s ease}.thumb .handle-extension{width:2px;height:7px;background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{-webkit-box-shadow:0 0 0 3px var(--calcite-ui-brand) inset;box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-brand);outline-offset:2px;outline-offset:2px}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb--minValue{-webkit-transform:translate(-7px, -8px);transform:translate(-7px, -8px)}:host([label-handles]) .thumb{-webkit-transform:translate(50%, -25px);transform:translate(50%, -25px)}:host([label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -25px);transform:translate(-50%, -25px)}:host([has-histogram][label-handles]) .thumb{-webkit-transform:translate(50%, -8px);transform:translate(50%, -8px)}:host([has-histogram][label-handles]) .thumb .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -8px);transform:translate(-50%, -8px)}:host([precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -21px);transform:translate(7px, -21px)}:host([precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -2px);transform:translate(-7px, -2px)}:host([precise]:not([precise=false])) .thumb--minValue .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -2px);transform:translate(7px, -2px)}:host([has-histogram][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -20px);transform:translate(7px, -20px)}:host([ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -3px);transform:translate(-7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -3px);transform:translate(7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -38px);transform:translate(50%, -38px)}:host([label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -2px);transform:translate(50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -37px);transform:translate(50%, -37px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -3px);transform:translate(50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}.thumb:focus,.thumb--active{z-index:3}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{height:2px;border-radius:0;z-index:1;background-color:var(--calcite-ui-border-2);-webkit-transition:all 250ms ease-in;transition:all 250ms ease-in;position:relative}.track__range{position:absolute;top:0;height:2px;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{content:"";position:absolute;top:-5px;width:100%;height:14px}.tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-ui-border-1-offset);margin-left:-2px;border:1px solid var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-border-1);pointer-events:none}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{position:absolute;font-size:var(--calcite-font-size--2);font-weight:500;color:var(--calcite-ui-text-2);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.tick__label--min{left:0;margin:14px -3px;text-align:left;-webkit-transition:opacity 150ms;transition:opacity 150ms}.tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right;-webkit-transition:opacity 50ms;transition:opacity 50ms}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}:host([has-histogram][precise]:not([precise=false])) .tick__label--min,:host([has-histogram][precise]:not([precise=false])) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3)}:host([mirrored]:not([has-histogram])) .tick__label--min{right:0;left:unset;text-align:right}:host([mirrored]:not([has-histogram])) .tick__label--max{right:unset;left:0;text-align:left}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}'},87538:(t,a,e)=>{"use strict";e.d(a,{C:()=>n,T:()=>l,a:()=>c,b:()=>h,c:()=>g,d:()=>m,e:()=>r,f:()=>x,g:()=>k,h:()=>p,i:()=>f,j:()=>y,k:()=>w,n:()=>o,q:()=>b,s:()=>_});var i=e(16304),s=e(65260);const n={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},l={loading:"Loading"};function r(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,s.g)()}`:""}function o(t){return Array.isArray(t)?t:Array.from(t)}function h(t){return g(t,`.${n.darkTheme}`)?"dark":"light"}function c(t){const a=g(t,"[dir]");return a?a.getAttribute("dir"):"ltr"}function m(t,a,e){const i=t.closest(`[${a}]`);return i?i.getAttribute(a):e}function u(t){return t.getRootNode()}function d(t){return t.host||null}function p(t,a){return function t(e,i){if(!e)return i;e.assignedSlot&&(e=e.assignedSlot);const s=u(e),n=Array.from(s.querySelectorAll(a)).filter(t=>!i.includes(t));i=[...i,...n];const l=d(s);return l?t(l,i):i}(t,[])}function b(t,a){return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);const i=u(e),s=i.querySelector(a),n=d(i);return s||(n?t(n):null)}(t)}function g(t,a){return function t(e){return e?e.closest(a)||t(d(u(e))):null}(t)}function f(t){return"function"==typeof(null==t?void 0:t.setFocus)}function x(t){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(function*(t){if(t)return f(t)?t.setFocus():t.focus()})).apply(this,arguments)}function k(t,a,e){const i=`[slot="${a}"]`;return(null==e?void 0:e.all)?function(t,a,e){let i=Array.from(t.querySelectorAll(a));i=e&&!1===e.direct?i:i.filter(a=>a.parentElement===t);const s=null==e?void 0:e.selector;return s?i.map(t=>Array.from(t.querySelectorAll(s))).reduce((t,a)=>[...t,...a],[]).filter(t=>!!t):i}(t,i,e):function(t,a,e){let i=t.querySelector(a);i=e&&!1===e.direct||(null==i?void 0:i.parentElement)===t?i:null;const s=null==e?void 0:e.selector;return s?i.querySelector(s):i}(t,i,e)}function w(t,a){return Array.from(t.children).filter(t=>t.matches(a))}function _(t,a,e){return"string"==typeof a&&""!==a?a:""===a?t[e]:void 0}function y(t,a){return!(a.left>t.right||a.right<t.left||a.top>t.bottom||a.bottom<t.top)}},65260:(t,a,e)=>{"use strict";e.d(a,{g:()=>i});const i=()=>[2,1,1,1,3].map(t=>{let a="";for(let e=0;e<t;e++)a+=(65536*(1+Math.random())|0).toString(16).substring(1);return a}).join("-")}}]);