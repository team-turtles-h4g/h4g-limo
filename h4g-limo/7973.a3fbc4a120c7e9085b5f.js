(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[7973],{67973:(e,t,n)=>{"use strict";n.d(t,{C:()=>le,c:()=>me,d:()=>ge,u:()=>he});var r=n(16304),o=n(87538),i="top",a="bottom",s="right",f="left",c="auto",p=[i,a,s,f],u="start",l="end",d="viewport",m="popper",h=p.reduce(function(e,t){return e.concat([t+"-"+u,t+"-"+l])},[]),v=[].concat(p,[c]).reduce(function(e,t){return e.concat([t,t+"-"+u,t+"-"+l])},[]),g=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function y(e){return e?(e.nodeName||"").toLowerCase():null}function b(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function w(e){return e instanceof b(e).Element||e instanceof Element}function x(e){return e instanceof b(e).HTMLElement||e instanceof HTMLElement}function O(e){return"undefined"!=typeof ShadowRoot&&(e instanceof b(e).ShadowRoot||e instanceof ShadowRoot)}function j(e){return e.split("-")[0]}function E(e,t){var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function D(e){var t=E(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&O(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function M(e){return b(e).getComputedStyle(e)}function L(e){return["table","td","th"].indexOf(y(e))>=0}function P(e){return((w(e)?e.ownerDocument:e.document)||window.document).documentElement}function A(e){return"html"===y(e)?e:e.assignedSlot||e.parentNode||(O(e)?e.host:null)||P(e)}function B(e){return x(e)&&"fixed"!==M(e).position?e.offsetParent:null}function W(e){for(var t=b(e),n=B(e);n&&L(n)&&"static"===M(n).position;)n=B(n);return n&&("html"===y(n)||"body"===y(n)&&"static"===M(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&x(e)&&"fixed"===M(e).position)return null;for(var n=A(e);x(n)&&["html","body"].indexOf(y(n))<0;){var r=M(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function R(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var C=Math.max,H=Math.min,T=Math.round;function S(e,t,n){return C(e,H(t,n))}function q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function N(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function V(e){return e.split("-")[1]}var I={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _(e){var t,n=e.popper,r=e.popperRect,o=e.placement,c=e.variation,p=e.offsets,u=e.position,d=e.gpuAcceleration,m=e.adaptive,h=e.roundOffsets,v=!0===h?function(e){var t=e.y,n=window.devicePixelRatio||1;return{x:T(T(e.x*n)/n)||0,y:T(T(t*n)/n)||0}}(p):"function"==typeof h?h(p):p,g=v.x,y=void 0===g?0:g,w=v.y,x=void 0===w?0:w,O=p.hasOwnProperty("x"),j=p.hasOwnProperty("y"),E=f,D=i,k=window;if(m){var L=W(n),A="clientHeight",B="clientWidth";L===b(n)&&"static"!==M(L=P(n)).position&&"absolute"===u&&(A="scrollHeight",B="scrollWidth"),L=L,o!==i&&(o!==f&&o!==s||c!==l)||(D=a,x-=L[A]-r.height,x*=d?1:-1),o!==f&&(o!==i&&o!==a||c!==l)||(E=s,y-=L[B]-r.width,y*=d?1:-1)}var R,C=Object.assign({position:u},m&&I);return Object.assign({},C,d?((R={})[D]=j?"0":"",R[E]=O?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",R):((t={})[D]=j?x+"px":"",t[E]=O?y+"px":"",t.transform="",t))}var U={passive:!0},z={left:"right",right:"left",bottom:"top",top:"bottom"};function F(e){return e.replace(/left|right|bottom|top/g,function(e){return z[e]})}var X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,function(e){return X[e]})}function $(e){var t=b(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Z(e){return E(P(e)).left+$(e).scrollLeft}function G(e){var t=M(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function J(e){return["html","body","#document"].indexOf(y(e))>=0?e.ownerDocument.body:x(e)&&G(e)?e:J(A(e))}function K(e,t){var n;void 0===t&&(t=[]);var r=J(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=b(r),a=o?[i].concat(i.visualViewport||[],G(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(K(A(a)))}function Q(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ee(e,t){return t===d?Q(function(e){var t=b(e),n=P(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+Z(e),y:s}}(e)):x(t)?function(e){var t=E(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Q(function(e){var t,n=P(e),r=$(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=C(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=C(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Z(e),f=-r.scrollTop;return"rtl"===M(o||n).direction&&(s+=C(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(P(e)))}function te(e){var t,n=e.reference,r=e.element,o=e.placement,c=o?j(o):null,p=o?V(o):null,d=n.x+n.width/2-r.width/2,m=n.y+n.height/2-r.height/2;switch(c){case i:t={x:d,y:n.y-r.height};break;case a:t={x:d,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:m};break;case f:t={x:n.x-r.width,y:m};break;default:t={x:n.x,y:n.y}}var h=c?R(c):null;if(null!=h){var v="y"===h?"height":"width";switch(p){case u:t[h]=t[h]-(n[v]/2-r[v]/2);break;case l:t[h]=t[h]+(n[v]/2-r[v]/2)}}return t}function ne(e,t){void 0===t&&(t={});var n=t.placement,r=void 0===n?e.placement:n,o=t.boundary,f=void 0===o?"clippingParents":o,c=t.rootBoundary,u=void 0===c?d:c,l=t.elementContext,h=void 0===l?m:l,v=t.altBoundary,g=void 0!==v&&v,b=t.padding,O=void 0===b?0:b,j=q("number"!=typeof O?O:N(O,p)),D=e.rects.popper,L=e.elements[g?h===m?"reference":m:h],B=function(e,t,n){var r="clippingParents"===t?function(e){var t=K(A(e)),n=["absolute","fixed"].indexOf(M(e).position)>=0&&x(e)?W(e):e;return w(n)?t.filter(function(e){return w(e)&&k(e,n)&&"body"!==y(e)}):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o.reduce(function(t,n){var r=ee(e,n);return t.top=C(r.top,t.top),t.right=H(r.right,t.right),t.bottom=H(r.bottom,t.bottom),t.left=C(r.left,t.left),t},ee(e,o[0]));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}(w(L)?L:L.contextElement||P(e.elements.popper),f,u),R=E(e.elements.reference),T=te({reference:R,element:D,strategy:"absolute",placement:r}),S=Q(Object.assign({},D,T)),V=h===m?S:R,I={top:B.top-V.top+j.top,bottom:V.bottom-B.bottom+j.bottom,left:B.left-V.left+j.left,right:V.right-B.right+j.right},_=e.modifiersData.offset;if(h===m&&_){var U=_[r];Object.keys(I).forEach(function(e){var t=[s,a].indexOf(e)>=0?1:-1,n=[i,a].indexOf(e)>=0?"y":"x";I[e]+=U[n]*t})}return I}function re(e,t){void 0===t&&(t={});var n=t.boundary,r=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,s=void 0===a?v:a,f=V(t.placement),c=f?i?h:h.filter(function(e){return V(e)===f}):p,u=c.filter(function(e){return s.indexOf(e)>=0});0===u.length&&(u=c);var l=u.reduce(function(t,i){return t[i]=ne(e,{placement:i,boundary:n,rootBoundary:r,padding:o})[j(i)],t},{});return Object.keys(l).sort(function(e,t){return l[e]-l[t]})}function oe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ie(e){return[i,s,a,f].some(function(t){return e[t]>=0})}function ae(e,t,n){void 0===n&&(n=!1);var r=x(t);x(t)&&function(e){e.getBoundingClientRect()}(t);var o,i,a=P(t),s=E(e),f={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==y(t)||G(a))&&(f=(o=t)!==b(o)&&x(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:$(o)),x(t)?((c=E(t)).x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=Z(a))),{x:s.left+f.scrollLeft-c.x,y:s.top+f.scrollTop-c.y,width:s.width,height:s.height}}function se(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||o(e)}),r}var fe={placement:"bottom",modifiers:[],strategy:"absolute"};function ce(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function pe(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,r=e.defaultOptions,o=void 0===r?fe:r;return function(e,t,r){void 0===r&&(r=o);var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},fe,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(r){var i="function"==typeof r?r(s.options):r;u(),s.options=Object.assign({},o,s.options,i),s.scrollParents={reference:w(e)?K(e):e.contextElement?K(e.contextElement):[],popper:K(t)};var a,c,l=function(e){var t=se(e);return g.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}((a=[].concat(n,s.options.modifiers),c=a.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{}),Object.keys(c).map(function(e){return c[e]})));return s.orderedModifiers=l.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.options,n=e.effect;if("function"==typeof n){var r=n({state:s,name:e.name,instance:p,options:void 0===t?{}:t});f.push(r||function(){})}}),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(ce(t,n)){s.rects={reference:ae(t,W(n),"fixed"===s.options.strategy),popper:D(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options;"function"==typeof i&&(s=i({state:s,options:void 0===a?{}:a,name:o.name,instance:p})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise(function(e){p.forceUpdate(),e(s)})},function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(i())})})),a}),destroy:function(){u(),c=!0}};if(!ce(e,t))return p;function u(){f.forEach(function(e){return e()}),f=[]}return p.setOptions(r).then(function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)}),p}}var ue=pe({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=b(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,U)}),s&&f.addEventListener("resize",n.update,U),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,U)}),s&&f.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:j(t.placement),variation:V(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,_(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,_(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];x(o)&&y(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});x(r)&&y(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,r=e.options.offset,o=void 0===r?[0,0]:r,a=v.reduce(function(e,n){return e[n]=function(e,t,n){var r=j(e),o=[f,i].indexOf(r)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=a[0],p=a[1];return c=c||0,p=(p||0)*o,[f,s].indexOf(r)>=0?{x:p,y:c}:{x:c,y:p}}(n,t.rects,o),e},{}),c=a[t.placement],p=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c.x,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,p=void 0===o||o,l=n.altAxis,d=void 0===l||l,m=n.fallbackPlacements,h=n.padding,v=n.boundary,g=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,O=t.options.placement,E=j(O),D=m||(E!==O&&w?function(e){if(j(e)===c)return[];var t=F(e);return[Y(e),t,Y(t)]}(O):[F(O)]),k=[O].concat(D).reduce(function(e,n){return e.concat(j(n)===c?re(t,{placement:n,boundary:v,rootBoundary:g,padding:h,flipVariations:w,allowedAutoPlacements:x}):n)},[]),M=t.rects.reference,L=t.rects.popper,P=new Map,A=!0,B=k[0],W=0;W<k.length;W++){var R=k[W],C=j(R),H=V(R)===u,T=[i,a].indexOf(C)>=0,S=T?"width":"height",q=ne(t,{placement:R,boundary:v,rootBoundary:g,altBoundary:y,padding:h}),N=T?H?s:f:H?a:i;M[S]>L[S]&&(N=F(N));var I=F(N),_=[];if(p&&_.push(q[C]<=0),d&&_.push(q[N]<=0,q[I]<=0),_.every(function(e){return e})){B=R,A=!1;break}P.set(R,_)}if(A)for(var U=function(e){var t=k.find(function(t){var n=P.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return B=t,"break"},z=w?3:1;z>0&&"break"!==U(z);z--);t.placement!==B&&(t.modifiersData[r]._skip=!0,t.placement=B,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,c=void 0===o||o,p=n.altAxis,l=void 0!==p&&p,d=n.tether,m=void 0===d||d,h=n.tetherOffset,v=void 0===h?0:h,g=ne(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),y=j(t.placement),b=V(t.placement),w=!b,x=R(y),O="x"===x?"y":"x",E=t.modifiersData.popperOffsets,k=t.rects.reference,M=t.rects.popper,L="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,P={x:0,y:0};if(E){if(c||l){var A="y"===x?i:f,B="y"===x?a:s,T="y"===x?"height":"width",q=E[x],N=E[x]+g[A],I=E[x]-g[B],_=m?-M[T]/2:0,U=b===u?k[T]:M[T],z=b===u?-M[T]:-k[T],F=t.elements.arrow,X=m&&F?D(F):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},$=Y[A],Z=Y[B],G=S(0,k[T],X[T]),J=w?k[T]/2-_-G-$-L:U-G-$-L,K=w?-k[T]/2+_+G+Z+L:z+G+Z+L,Q=t.elements.arrow&&W(t.elements.arrow),ee=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,te=E[x]+J-ee-(Q?"y"===x?Q.clientTop||0:Q.clientLeft||0:0),re=E[x]+K-ee;if(c){var oe=S(m?H(N,te):N,q,m?C(I,re):I);E[x]=oe,P[x]=oe-q}if(l){var ie=E[O],ae=ie+g["x"===x?i:f],se=ie-g["x"===x?a:s],fe=S(m?H(ae,te):ae,ie,m?C(se,re):se);E[O]=fe,P[O]=fe-ie}}t.modifiersData[r]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,c=n.elements.arrow,u=n.modifiersData.popperOffsets,l=j(n.placement),d=R(l),m=[f,s].indexOf(l)>=0?"height":"width";if(c&&u){var h=function(e,t){return q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:N(e,p))}(o.padding,n),v=D(c),g="y"===d?i:f,y="y"===d?a:s,b=n.rects.reference[m]+n.rects.reference[d]-u[d]-n.rects.popper[m],w=u[d]-n.rects.reference[d],x=W(c),O=x?"y"===d?x.clientHeight||0:x.clientWidth||0:0,E=O/2-v[m]/2+(b/2-w/2),k=S(h[g],E,O-v[m]-h[y]);n.modifiersData[r]=((t={})[d]=k,t.centerOffset=k-E,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&k(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ne(t,{elementContext:"reference"}),s=ne(t,{altBoundary:!0}),f=oe(a,r),c=oe(s,o,i),p=ie(f),u=ie(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]});const le={animation:"calcite-popper-anim",animationActive:"calcite-popper-anim--active"};function de(e,t){const n=["left","right"],r=["start","end"];return"rtl"===(0,o.a)(e)&&(n.reverse(),r.reverse()),t.replace(/-leading/gi,`-${r[0]}`).replace(/-trailing/gi,`-${r[1]}`).replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}function me({referenceEl:e,el:t,placement:n,overlayPositioning:r="absolute",modifiers:o}){return e?ue(e,t,{strategy:r,placement:de(t,n),modifiers:o}):null}function he(e){return ve.apply(this,arguments)}function ve(){return(ve=(0,r.Z)(function*({el:e,modifiers:t,placement:n,popper:r}){const o=de(e,n);yield r.setOptions({modifiers:t,placement:o})})).apply(this,arguments)}const ge=Math.ceil(Math.sqrt(Math.pow(4,2)+Math.pow(4,2)))}}]);