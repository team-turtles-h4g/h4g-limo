(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[9366],{20694:(e,t,r)=>{"use strict";function n(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:()=>n}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],u+=o,c+=i},makeDense:n})},5116:(e,t,r)=>{"use strict";r.d(t,{f:()=>i,n:()=>s});var n=r(61863);function o(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],n[u+1]=s[c+1],u+=o,c+=i}function s(e,t,r){const s=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,u=t.typedBufferStride,c=r?r.count:t.count;let f=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*u;if((0,n.U)(t.elementType)){const e=(0,n.Op)(t.elementType);if((0,n.B3)(t.elementType))for(let t=0;t<c;++t)s[f]=Math.max(a[l]/e,-1),s[f+1]=Math.max(a[l+1]/e,-1),f+=i,l+=u;else for(let t=0;t<c;++t)s[f]=a[l]/e,s[f+1]=a[l+1]/e,f+=i,l+=u}else o(e,t,r);return e}function i(e,t,r,n){var o,s;const i=e.typedBuffer,a=e.typedBufferStride,u=null!=(o=null==n?void 0:n.count)?o:e.count;let c=(null!=(s=null==n?void 0:n.dstIndex)?s:0)*a;for(let f=0;f<u;++f)i[c]=t,i[c+1]=r,c+=a}Object.freeze({__proto__:null,copy:o,normalizeIntegerBuffer:s,fill:i})},81279:(e,t,r)=>{"use strict";r.d(t,{a:()=>i,s:()=>s,t:()=>o});var n=r(77192);function o(e,t,r){if(e.count!==t.count)return void n.k.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,y=t.typedBuffer,b=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*m,t=n*b,r=y[t],o=y[t+1],x=y[t+2],w=y[t+3];h[e]=s*r+u*o+l*x,h[e+1]=i*r+c*o+d*x,h[e+2]=a*r+f*o+p*x,h[e+3]=w}}function s(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*a;o[e]=r*i[t],o[e+1]=r*i[t+1],o[e+2]=r*i[t+2],o[e+3]=r*i[t+3]}}function i(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*a;o[e]=i[t]>>r,o[e+1]=i[t+1]>>r,o[e+2]=i[t+2]>>r,o[e+3]=i[t+3]>>r}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void n.k.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=r[9],m=r[10],y=r[11],b=r[12],x=r[13],w=r[14],g=r[15],T=e.typedBuffer,v=e.typedBufferStride,S=t.typedBuffer,I=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*v,t=n*I,r=S[t],o=S[t+1],B=S[t+2],O=S[t+3];T[e]=s*r+c*o+p*B+b*O,T[e+1]=i*r+f*o+h*B+x*O,T[e+2]=a*r+l*o+m*B+w*O,T[e+3]=u*r+d*o+y*B+g*O}},transformMat3:o,scale:s,shiftRight:i})},62848:(e,t,r)=>{"use strict";function n(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],n[u+1]=s[c+1],n[u+2]=s[c+2],n[u+3]=s[c+3],u+=o,c+=i}function o(e,t,r,n,o,s){var i,a;const u=e.typedBuffer,c=e.typedBufferStride,f=null!=(i=null==s?void 0:s.count)?i:e.count;let l=(null!=(a=null==s?void 0:s.dstIndex)?a:0)*c;for(let d=0;d<f;++d)u[l]=t,u[l+1]=r,u[l+2]=n,u[l+3]=o,l+=c}r.d(t,{c:()=>n,f:()=>o}),Object.freeze({__proto__:null,copy:n,fill:o})},44879:(e,t,r)=>{"use strict";function n(){return[0,0,0,0]}function o(e,t,r,n){return[e,t,r,n]}function s(e,t){return new Float64Array(e,t,4)}function i(){return o(1,1,1,1)}function a(){return o(1,0,0,0)}function u(){return o(0,1,0,0)}function c(){return o(0,0,1,0)}function f(){return o(0,0,0,1)}r.d(t,{a:()=>s,c:()=>n,f:()=>o});const l=i(),d=a(),p=u(),h=c(),m=f();Object.freeze({__proto__:null,create:n,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:o,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t},createView:s,zeros:function(){return[0,0,0,0]},ones:i,unitX:a,unitY:u,unitZ:c,unitW:f,ZEROS:[0,0,0,0],ONES:l,UNIT_X:d,UNIT_Y:p,UNIT_Z:h,UNIT_W:m})},7558:(e,t,r)=>{"use strict";r.d(t,{x:()=>s});var n=r(54704),o=r(50566);class s{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=o.Z.before(()=>this.reset()),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,n.Bd)(this.tickHandle)),this.items=(0,n.Bd)(this.items)}get(){return 0===this.itemsPtr&&(0,o.Z)(()=>{}),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*i);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,i));e++)this.items.push(this.allocator())}}const i=1024},69130:(e,t,r)=>{"use strict";r.d(t,{G:()=>o});var n=r(2747);class o{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major)throw new n.Z((this._context&&this._context+":")+"unsupported-version",`Required major ${this._context&&this._context+" "}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}clone(){return new o(this.major,this.minor,this._context)}static parse(e,t=""){const[r,s]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!s||!s.match||!s.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const a=parseInt(r,10),u=parseInt(s,10);return new o(a,u,t)}}},61863:(e,t,r)=>{"use strict";function n(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function o(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}r.d(t,{n1:()=>n,U:()=>s,B3:()=>o,Op:()=>i}),r(12131)},13528:(e,t,r)=>{"use strict";r.d(t,{gS:()=>o});var n=r(61863);function o(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,n.n1)(e.ElementType)))}Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<9;++e)n[u+e]=s[c+e];u+=o,c+=i}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<16;++e)n[u+e]=s[c+e];u+=o,c+=i}}}),r(20694),r(5116),r(61144),r(62848)},33091:(e,t,r)=>{"use strict";r.d(t,{MP:()=>h,WM:()=>p});var n=r(54704),o=r(50566),s=r(56682),i=r(953),a=r(65948),u=r(98737),c=r(61001),f=r(44879);class l{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=o.Z.before(()=>this.reset())}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,n.Bd)(this.tickHandle)),this.itemsPtr=0,this.items=(0,n.Bd)(this.items),this.buffers=(0,n.Bd)(this.buffers)}get(){0===this.itemsPtr&&(0,o.Z)(()=>{});const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=d){return new l(16,u.c,e)}static createVec3f64(e=d){return new l(24,c.b,e)}static createVec4f64(e=d){return new l(32,f.a,e)}static createMat3f64(e=d){return new l(72,s.a,e)}static createMat4f64(e=d){return new l(128,i.a,e)}static createQuatf64(e=d){return new l(32,a.c,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const d=4096,p=(l.createVec2f64(),l.createVec3f64()),h=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},42431:(e,t,r)=>{"use strict";r.d(t,{C:()=>f});var n=r(16304),o=r(93668),s=r(91278),i=r(2747),a=r(54704),u=r(98154),c=r(57319);class f{constructor(e){this.streamDataRequester=e}loadJSON(e,t){var r=this;return(0,n.Z)(function*(){return r.load("json",e,t)})()}loadBinary(e,t){var r=this;return(0,n.Z)(function*(){return(0,c.HK)(e)?((0,u.k_)(t),(0,c.AH)(e)):r.load("binary",e,t)})()}loadImage(e,t){var r=this;return(0,n.Z)(function*(){return r.load("image",e,t)})()}load(e,t,r){var c=this;return(0,n.Z)(function*(){if((0,a.Wi)(c.streamDataRequester))return(yield(0,o.default)(t,{responseType:l[e]})).data;const n=yield(0,s.q6)(c.streamDataRequester.request(t,e,r));if(!0===n.ok)return n.value;throw(0,u.r9)(n.error),new i.Z("",`Request for resource failed: ${n.error}`)})()}}const l={image:"image",binary:"array-buffer",json:"json"}},34534:(e,t,r)=>{"use strict";r.d(t,{jX:()=>a,DA:()=>i,nh:()=>s});var n=r(68575),o=r(33344);function s(e,t=o.p){return"number"==typeof e?t(e):(0,n.Uc)(e)||(0,n.lq)(e)?new Uint32Array(e):e}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=e[o+1],s=e[o+2];n[t++]=e[o],n[t++]=r,n[t++]=s}else{const r=e[o],s=e[o+2];n[t++]=e[o+1],n[t++]=r,n[t++]=s}}return n}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let o=e[1],s=0;for(let i=0;i<r;++i){const r=e[i+2];n[s++]=t,n[s++]=o,n[s++]=r,o=r}return n}}},74297:(e,t,r)=>{"use strict";r.d(t,{z:()=>P});var n=r(16304),o=r(54704),s=r(953),i=r(2747);const a=r(18419).Z.getLogger("esri.views.3d.glTF");var u=r(57302),c=r(61008),f=r(57319),l=r(69130),d=r(2424),p=r(38359),h=r(65948),m=r(48626),y=r(20694);class b{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const x={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},w={pbrMetallicRoughness:x,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},g={ESRI_externalColorMixMode:"tint"},T=(e={})=>{const t={...x,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,u.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...g,...e.extras});return{...w,...e,pbrMetallicRoughness:t,extras:r}},v={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},S=e=>({...v,...e}),I=1179937895;class B{constructor(e,t,r,n,o){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,(e,n,o)=>(t=n||"",r=o||"","")),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static load(e,t,r,o){var s=this;return(0,n.Z)(function*(){if((0,f.HK)(r)){const n=(0,f.sJ)(r);if("model/gltf-binary"!==n.mediaType)try{const o=JSON.parse(n.isBase64?atob(n.data):n.data);return new B(e,t,r,o)}catch{}const o=(0,f.AH)(r);if(B.isGLBData(o))return s.fromGLBData(e,t,r,o)}if(r.endsWith(".gltf")){const n=yield e.loadJSON(r,o);return new B(e,t,r,n)}const n=yield e.loadBinary(r,o);if(B.isGLBData(n))return s.fromGLBData(e,t,r,n);const i=yield e.loadJSON(r,o);return new B(e,t,r,i)})()}static isGLBData(e){const t=new b(e);return t.remainingBytes()>=4&&t.readUint32()===I}static fromGLBData(e,t,r,o){return(0,n.Z)(function*(){const n=yield B.parseGLBData(t,o);return new B(e,t,r,n.json,n.binaryData)})()}static parseGLBData(e,t){return(0,n.Z)(function*(){const r=new b(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();e.assert(n===I,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=s,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(1313821514===n,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=yield _(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(5130562!==n,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}})()}getBuffer(e,t){var r=this;return(0,n.Z)(function*(){const n=r.json.buffers[e],o=r.errorContext;if(null==n.uri)return o.assert(null!=r.glbBuffer,"GLB buffer not present"),r.glbBuffer;const s=yield r.getBufferLoader(e,t);return o.assert(s.byteLength===n.byteLength,"Buffer byte lengths should match."),s})()}getBufferLoader(e,t){var r=this;return(0,n.Z)(function*(){const n=r.bufferLoaders.get(e);if(n)return n;const o=r.context.loadBinary(r.resolveUri(r.json.buffers[e].uri),t).then(e=>new Uint8Array(e));return r.bufferLoaders.set(e,o),o})()}getAccessor(e,t){var r=this;return(0,n.Z)(function*(){const n=r.errorContext;n.errorUnsupportedIf(!r.json.accessors,"Accessors missing.");const o=r.json.accessors[e];n.errorUnsupportedIf(null==(null==o?void 0:o.bufferView),"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(o.type in["MAT2","MAT3","MAT4"],`AttributeType ${o.type} is not supported`);const s=r.json.bufferViews[o.bufferView],i=yield r.getBuffer(s.buffer,t),a=A[o.type],u=M[o.componentType],c=a*u,f=s.byteStride||c;return{raw:i.buffer,byteStride:f,byteOffset:i.byteOffset+(s.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:f===c,componentCount:a,componentByteSize:u,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}})()}getIndexData(e,t){var r=this;return(0,n.Z)(function*(){if(null==e.indices)return null;const n=yield r.getAccessor(e.indices,t);if(n.isDenselyPacked)switch(n.componentType){case 5121:return new Uint8Array(n.raw,n.byteOffset,n.entryCount);case 5123:return new Uint16Array(n.raw,n.byteOffset,n.entryCount);case 5125:return new Uint32Array(n.raw,n.byteOffset,n.entryCount)}else switch(n.componentType){case 5121:return(0,y.m)(r.wrapAccessor(m.D_,n));case 5123:return(0,y.m)(r.wrapAccessor(m.av,n));case 5125:return(0,y.m)(r.wrapAccessor(m.Nu,n))}})()}getPositionData(e,t){var r=this;return(0,n.Z)(function*(){const n=r.errorContext;n.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=yield r.getAccessor(e.attributes.POSITION,t);return n.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+E[o.componentType]),n.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),r.wrapAccessor(m.ct,o)})()}getNormalData(e,t){var r=this;return(0,n.Z)(function*(){const n=r.errorContext;n.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=yield r.getAccessor(e.attributes.NORMAL,t);return n.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+E[o.componentType]),n.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),r.wrapAccessor(m.ct,o)})()}getTangentData(e,t){var r=this;return(0,n.Z)(function*(){const n=r.errorContext;n.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=yield r.getAccessor(e.attributes.TANGENT,t);return n.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+E[o.componentType]),n.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new m.ek(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)})()}getTextureCoordinates(e,t){var r=this;return(0,n.Z)(function*(){const n=r.errorContext;n.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=yield r.getAccessor(e.attributes.TEXCOORD_0,t);return n.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?r.wrapAccessor(m.Eu,o):(n.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new m.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new m.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new m.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new m.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new m.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new m.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,u.Bg)(e.componentType)}}(o))})()}getVertexColors(e,t){var r=this;return(0,n.Z)(function*(){const n=r.errorContext;n.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=yield r.getAccessor(e.attributes.COLOR_0,t);if(n.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return r.wrapAccessor(m.ek,o);if(5121===o.componentType)return r.wrapAccessor(m.mc,o);if(5123===o.componentType)return r.wrapAccessor(m.v6,o)}else if(3===o.componentCount){if(5126===o.componentType)return r.wrapAccessor(m.ct,o);if(5121===o.componentType)return r.wrapAccessor(m.ne,o);if(5123===o.componentType)return r.wrapAccessor(m.mw,o)}n.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+E[o.componentType])})()}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}getMaterial(e,t,r){var o=this;return(0,n.Z)(function*(){let n=o.materialCache.get(e.material);if(!n){const s=null!=e.material?T(o.json.materials[e.material]):T(),i=s.pbrMetallicRoughness,a=o.hasVertexColors(e),u=o.getTexture(i.baseColorTexture,t),c=o.getTexture(s.normalTexture,t),f=r?o.getTexture(s.occlusionTexture,t):null,l=r?o.getTexture(s.emissiveTexture,t):null,d=r?o.getTexture(i.metallicRoughnessTexture,t):null,p=null!=e.material?e.material:-1;n={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:i.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:yield u,normalTexture:yield c,name:s.name,id:p,occlusionTexture:yield f,emissiveTexture:yield l,emissiveFactor:s.emissiveFactor,metallicFactor:i.metallicFactor,roughnessFactor:i.roughnessFactor,metallicRoughnessTexture:yield d,vertexColors:a,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode}}return n})()}getTexture(e,t){var r=this;return(0,n.Z)(function*(){if(!e)return null;r.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const n=e.index,o=r.errorContext,s=r.json.textures[n],i=S(null!=s.sampler?r.json.samplers[s.sampler]:{});o.errorUnsupportedIf(null==s.source,"Source is expected to be defined for a texture.");const a=r.json.images[s.source],u=yield r.loadTextureImageData(n,s,t);return(0,c.s1)(r.textureCache,n,()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(o.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:u,wrapS:e(i.wrapS)?i.wrapS:t(i.wrapS),wrapT:e(i.wrapT)?i.wrapT:t(i.wrapT),minFilter:i.minFilter,name:a.name,id:n}})})()}getNodeTransform(e){if(void 0===e)return C;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,d.m)((0,s.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,s.b)(r),n.translation&&(0,d.t)(t,t,n.translation),n.rotation&&(U[3]=(0,p.g)(U,n.rotation),(0,d.d)(t,t,U[3],U)),n.scale&&(0,d.f)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,f.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=l.G.parse(this.json.asset.version,"glTF");O.validate(e)}checkRequiredExtensionsSupported(){const e=this.json;e.extensionsRequired&&0!==e.extensionsRequired.length&&this.errorContext.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this.nodeParentMap.set(e,t)})})}loadTextureImageData(e,t,r){var o=this;return(0,n.Z)(function*(){const n=o.textureLoaders.get(e);if(n)return n;const s=o.createTextureLoader(t,r);return o.textureLoaders.set(e,s),s})()}createTextureLoader(e,t){var r=this;return(0,n.Z)(function*(){const n=r.json.images[e.source];if(n.uri)return r.context.loadImage(r.resolveUri(n.uri),t);const o=r.errorContext;o.errorUnsupportedIf(null==n.bufferView,"Image bufferView must be defined."),o.errorUnsupportedIf(null==n.mimeType,"Image mimeType must be defined.");const s=r.json.bufferViews[n.bufferView],i=yield r.getBuffer(s.buffer,t);return o.errorUnsupportedIf(null!=s.byteStride,"byteStride not supported for image buffer"),function(e,t){return R.apply(this,arguments)}(new Uint8Array(i.buffer,i.byteOffset+(s.byteOffset||0),s.byteLength),n.mimeType)})()}}const O=new l.G(2,0,"glTF"),C=(0,d.o)((0,s.c)(),Math.PI/2),U=(0,h.a)(),A={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},M={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function _(e){return N.apply(this,arguments)}function N(){return(N=(0,n.Z)(function*(e){return new Promise((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{t(JSON.parse(o.result))},o.onerror=e=>{r(e)},o.readAsText(n)})})).apply(this,arguments)}function R(){return(R=(0,n.Z)(function*(e,t){return new Promise((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),i=new Image;i.addEventListener("load",()=>{URL.revokeObjectURL(s),"decode"in i?i.decode().then(()=>r(i),()=>r(i)):r(i)}),i.addEventListener("error",e=>{URL.revokeObjectURL(s),n(e)}),i.src=s})})).apply(this,arguments)}const E={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let L=0;function P(e,t){return F.apply(this,arguments)}function F(){return(F=(0,n.Z)(function*(e,t,r={},i=!0){const a=yield B.load(e,V,t,r),u="gltf_"+L++,c={lods:[],materials:new Map,textures:new Map,meta:j(a)},f=!(!a.json.asset.extras||"symbolResource"!==a.json.asset.extras.ESRI_type),l=new Map;yield Z(a,function(){var e=(0,n.Z)(function*(e,t,n,f){var d;const p=null!=(d=l.get(n))?d:0;l.set(n,p+1);const h=void 0!==e.mode?e.mode:4,m=4===h||5===h||6===h?h:null;if((0,o.Wi)(m))return void V.warnUnsupported("Unsupported primitive mode ("+$[h]+"). Skipping primitive.");if(!a.hasPositions(e))return void V.warn("Skipping primitive without POSITION vertex attribute.");const y=a.getPositionData(e,r),b=a.getMaterial(e,r,i),x=a.hasNormals(e)?a.getNormalData(e,r):null,w=a.hasTangents(e)?a.getTangentData(e,r):null,g=a.hasTextureCoordinates(e)?a.getTextureCoordinates(e,r):null,T=a.hasVertexColors(e)?a.getVertexColors(e,r):null,v=a.getIndexData(e,r),S={transform:(0,s.b)(t),attributes:{position:yield y,normal:x?yield x:null,texCoord0:g?yield g:null,color:T?yield T:null,tangent:w?yield w:null},indices:yield v,primitiveType:m,material:G(c,yield b,u)};let I=null;(0,o.pC)(c.meta)&&(0,o.pC)(c.meta.ESRI_lod)&&"screenSpaceRadius"===c.meta.ESRI_lod.metric&&(I=c.meta.ESRI_lod.thresholds[n]),c.lods[n]=c.lods[n]||{parts:[],name:f,lodThreshold:I},c.lods[n].parts[p]=S});return function(t,r,n,o){return e.apply(this,arguments)}}());for(const n of c.lods)n.parts=n.parts.filter(e=>!!e);return{model:c,meta:{isEsriSymbolResource:f,uri:a.uri},customMeta:{}}})).apply(this,arguments)}function j(e){let t=null;return e.json.nodes.forEach(e=>{const r=e.extras;(0,o.pC)(r)&&(r.ESRI_proxyEllipsoid||r.ESRI_lod)&&(t=r)}),t}function Z(e,t){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(function*(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,s=o.length>1,i=[];for(const n of o){const e=r.nodes[n];i.push(a(n,0)),D(e)&&!s&&e.extensions.MSFT_lod.ids.forEach((e,t)=>a(e,t+1))}function a(e,t){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(function*(n,o){const s=r.nodes[n],u=e.getNodeTransform(n);if(V.warnUnsupportedIf(null!=s.weights,"Morph targets are not supported."),null!=s.mesh){const e=r.meshes[s.mesh];for(const r of e.primitives)i.push(t(r,u,o,e.name))}for(const e of s.children||[])i.push(a(e,o))})).apply(this,arguments)}yield Promise.all(i)})).apply(this,arguments)}function D(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function G(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:z.some(e=>e===t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}const V=new class{error(e){throw new i.Z("gltf-loader-error",e)}errorUnsupported(e){throw new i.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){a.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},z=[9987,9985],$=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},33344:(e,t,r)=>{"use strict";r.d(t,{NO:()=>h,cM:()=>p,p:()=>l,DX:()=>d});var n=r(32589),o=r(61001),s=r(7558);r(49882),r(53934),r(33091),(0,o.c)(),(0,o.c)(),new s.x(()=>({origin:null,vector:null})),new s.x(function(e){return e?{origin:(0,o.a)(e.origin),vector:(0,o.a)(e.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}),new s.x(()=>({p0:null,p1:null,p2:null}));const i=(0,o.c)(),a=(0,o.c)();let u=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const c=new Uint16Array([0]),f=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function l(e){if(1===e)return c;if(e<f.length)return new Uint16Array(f.buffer,0,e);if(e>u.length){const t=Math.max(2*u.length,e);u=new Uint32Array(t);for(let e=0;e<u.length;e++)u[e]=e}return new Uint32Array(u.buffer,0,e)}function d(e){if(1===e)return new Uint16Array(c);if(e<f.length)return new Uint16Array(f.slice(0,e));if(e>u.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(u.slice(0,e))}function p(e,t,r){if(!e)return!1;const{size:o,data:s}=e;(0,n.s)(r,0,0,0),(0,n.s)(x,0,0,0);let u=0,c=0;for(let d=0;d<t.length-2;d+=3){const e=t[d+0]*o,p=t[d+1]*o,h=t[d+2]*o;(0,n.s)(m,s[e+0],s[e+1],s[e+2]),(0,n.s)(y,s[p+0],s[p+1],s[p+2]),(0,n.s)(b,s[h+0],s[h+1],s[h+2]);const w=(l=b,(0,n.f)(i,y,f=m),(0,n.f)(a,l,f),(0,n.l)((0,n.c)(i,i,a))/2);w?((0,n.b)(m,m,y),(0,n.b)(m,m,b),(0,n.a)(m,m,1/3*w),(0,n.b)(r,r,m),u+=w):((0,n.b)(x,x,m),(0,n.b)(x,x,y),(0,n.b)(x,x,b),c+=3)}var f,l;return!(0===c&&0===u||(0!==u?((0,n.a)(r,r,1/u),0):0===c||((0,n.a)(r,x,1/c),0)))}function h(e,t,r){if(!e||!t)return!1;const{size:o,data:s}=e;(0,n.s)(r,0,0,0);let i=-1,a=0;for(let n=0;n<t.length;n++){const e=t[n]*o;i!==e&&(r[0]+=s[e+0],r[1]+=s[e+1],r[2]+=s[e+2],a++),i=e}return a>1&&(0,n.a)(r,r,1/a),a>0}const m=(0,o.c)(),y=(0,o.c)(),b=(0,o.c)(),x=(0,o.c)()},83038:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});const n=2.1}}]);