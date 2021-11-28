(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[1816],{36683:(e,t,r)=>{"use strict";r.d(t,{D:()=>I,b:()=>O});var i=r(34863),o=r(78586),a=r(67790),n=r(13747),s=r(97430),l=r(10610),c=r(70488),d=r(98654),u=r(96028),p=r(44245),m=r(75617),h=r(4185),f=r(27307),v=r(30068),g=r(35048),x=r(53046),b=r(20613),_=r(30807),T=r(95610),y=r(9480),w=r(47505),S=r(62321),C=r(19871),M=r(8788),A=r(78440),P=r(169),F=r(12188),E=r(39057);function O(e){const t=new E.kG,r=t.vertex.code,O=t.fragment.code;return t.include(A.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(c.f),t.varyings.add("vpos","vec3"),t.include(C.kl,e),t.include(s.f,e),t.include(h.LC,e),0!==e.output&&7!==e.output||(t.include(l.O,e),t.include(n.w,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(o.w),t.include(g.Q,e),t.include(m.B,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u.D,e),t.include(i.q,e),t.include(d.R,e),t.include(p.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(F.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${F.H.float(M.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?F.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(a.p2,e),t.include(M.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(v.S),t.include(_.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(P.y),O.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?F.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.p2,e),t.include(b.X,e),t.include(x.K,e),t.include(M.sj,e),e.receiveShadows&&t.include(S.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(v.S),t.include(_.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(w.jV,e),t.include(y.T,e),t.fragment.include(P.y),t.include(T.k,e),O.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?F.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:F.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?F.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?F.H`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?F.H`vec3 normalGround = normalize(vpos + localOrigin);`:F.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:F.H``}
        ${1===e.pbrMode||2===e.pbrMode?F.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(f.s,e),t}var I=Object.freeze({__proto__:null,build:O})},46646:(e,t,r)=>{"use strict";r.d(t,{R:()=>P,b:()=>A});var i=r(34863),o=r(78586),a=r(67790),n=r(13747),s=r(97430),l=r(10610),c=r(70488),d=r(98654),u=r(96028),p=r(44245),m=r(4185),h=r(27307),f=r(30068),v=r(53046),g=r(20613),x=r(30807),b=r(9480),_=r(47505),T=r(62321),y=r(19871),w=r(8788),S=r(169),C=r(12188),M=r(39057);function A(e){const t=new M.kG,r=t.vertex.code,A=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(c.f),t.varyings.add("vpos","vec3"),t.include(y.kl,e),t.include(s.f,e),t.include(m.LC,e),0!==e.output&&7!==e.output||(t.include(l.O,e),t.include(n.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u.D,e),t.include(i.q,e),t.include(d.R,e),t.include(p.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(C.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${C.H.float(w.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?C.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(a.p2,e),t.include(w.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(f.S),t.include(x.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(S.y),A.add(C.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?C.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?C.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:C.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?C.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:C.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.p2,e),t.include(g.X,e),t.include(v.K,e),t.include(w.sj,e),e.receiveShadows&&t.include(T.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(f.S),t.include(x.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(_.jV,e),t.include(b.T,e),t.fragment.include(S.y),A.add(C.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?C.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?C.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:C.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?C.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:C.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${C.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?C.H`vec3 normalGround = normalize(vpos + localOrigin);`:C.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:C.H``}
        ${1===e.pbrMode||2===e.pbrMode?C.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(h.s,e),t}var P=Object.freeze({__proto__:null,build:A})},61816:(e,t,r)=>{"use strict";r.r(t),r.d(t,{fetch:()=>ir,gltfToEngineResources:()=>nr,parseUrl:()=>ar});var i=r(16304),o=r(66234),a=r(54704),n=r(93883),s=r(56682),l=r(2424),c=r(953),d=r(32589),u=r(61001),p=r(288),m=r(48626),h=r(27300),f=r(81279),v=r(13528),g=r(42431),x=r(74297),b=r(34534),_=r(93668),T=r(91278),y=r(2747),w=r(18419),S=r(98154),C=r(69130),M=r(95637),A=r(74115),P=r(61470);class F{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,u.c)(),(0,P.hu)(e.length>=1),(0,P.hu)(r.length%this._numIndexPerPrimitive==0),(0,P.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,P.hu)(3===i.size||4===i.size);const{data:o,size:a}=i,n=e.length;let s=a*r[this._numIndexPerPrimitive*e[0]];E.clear(),E.push(s),this.bbMin=(0,u.f)(o[s],o[s+1],o[s+2]),this.bbMax=(0,u.a)(this.bbMin);for(let c=0;c<n;++c){const t=this._numIndexPerPrimitive*e[c];for(let e=0;e<this._numIndexPerPrimitive;++e){s=a*r[t+e],E.push(s);let i=o[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=o[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=o[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}(0,d.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let c=0;c<E.length;++c){s=E.getItemAt(c);const e=o[s]-this.center[0],t=o[s+1]-this.center[1],r=o[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=l)continue;const a=Math.sqrt(i),n=.5*(a-this.radius);this.radius=this.radius+n,l=this.radius*this.radius;const d=n/a;this.center[0]+=e*d,this.center[1]+=t*d,this.center[2]+=r*d}E.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,d.h)(this.bbMin,this.bbMax)>1){const e=(0,d.e)((0,u.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let l=0;l<8;++l)i[l]=0;const{data:o,size:a}=this.position;for(let l=0;l<t;++l){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[l];let s=a*this.indices[n],c=o[s],d=o[s+1],u=o[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=a*this.indices[n+e];const t=o[s],r=o[s+1],i=o[s+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[l]=t,++i[t]}let n=0;for(let l=0;l<8;++l)i[l]>0&&++n;if(n<2)return;const s=new Array(8);for(let l=0;l<8;++l)s[l]=i[l]>0?new Uint32Array(i[l]):void 0;for(let l=0;l<8;++l)i[l]=0;for(let l=0;l<t;++l){const e=r[l];s[e][i[e]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)void 0!==s[l]&&(this._children[l]=new F(s[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){E.prune()}}const E=new A.Z({deallocator:null});var O=r(51945);class I{constructor(){this.id=(0,O.D)()}unload(){}}var L=r(33344);class D extends I{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[o,a]of e)a&&this._vertexAttributes.set(o,{...a});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,L.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[o,a]of t)a&&(this._indices.set(o,R(a)),"position"===o&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(o).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,a.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return(0,L.cM)(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return(0,L.NO)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;(0,P.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,L.p)(e.length/t),i=this.vertexAttributes.get("position");return new F(r,t,e,i)}}function R(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var H=r(57302),z=r(70222),N=r(53934),B=r(68575),V=r(57319),U=r(14993),G=r(91691);function W(){if((0,a.Wi)(k)){const e=e=>(0,G.V)(`esri/libs/basisu/${e}`);k=r.e(6663).then(r.bind(r,6663)).then(function(e){return e.b}).then(({default:t})=>t({locateFile:e}).then(e=>(e.initializeBasis(),delete e.then,e)))}return k}let k;var q=r(28989),$=r(24836);let j=null,X=null;function Z(){return K.apply(this,arguments)}function K(){return(K=(0,i.Z)(function*(){return(0,a.Wi)(X)&&(X=W(),j=yield X),X})).apply(this,arguments)}function Y(e,t,r,i,o){const a=(0,$.RG)(t?37496:37492);return Math.ceil(r*i*a*(o&&e>1?(4**e-1)/(3*4**(e-1)):1))}function Q(e){return e.getNumImages()>=1&&!e.isUASTC()}function J(e){return e.getFaces()>=1&&e.isETC1S()}function ee(){return(ee=(0,i.Z)(function*(e,t,r){(0,a.Wi)(j)&&(j=yield Z());const i=new j.BasisFile(new Uint8Array(r));if(!Q(i))return null;i.startTranscoding();const o=re(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(e,t)=>i.getImageTranscodedSizeInBytes(0,e,t),(e,t,r)=>i.transcodeImage(r,0,e,t,0,0));return i.close(),i.delete(),o})).apply(this,arguments)}function te(){return(te=(0,i.Z)(function*(e,t,r){(0,a.Wi)(j)&&(j=yield Z());const i=new j.KTX2File(new Uint8Array(r));if(!J(i))return null;i.startTranscoding();const o=re(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t),(e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1));return i.close(),i.delete(),o})).apply(this,arguments)}function re(e,t,r,i,o,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[1,37496]:[0,37492]:c?i?[3,33779]:[2,33776]:[13,6408],p=t.hasMipmap?r:Math.min(1,r),m=[];for(let g=0;g<p;g++)m.push(new Uint8Array(n(g,d))),s(g,d,m[g]);const h=m.length>1,f=h?9987:9729,v={...t,samplingMode:f,hasMipmap:h,internalFormat:u,width:o,height:a};return new q.Z(e,v,{type:"compressed",levels:m})}const ie=w.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function oe(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const ae=oe("DXT1"),ne=oe("DXT3"),se=oe("DXT5"),le=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),ce=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],de=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var ue=r(98248),pe=r(13811),me=r(8485),he=r(79410);class fe extends I{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new z.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=fe.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;(0,a.Wi)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){(0,V.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){(0,V.HK)(e.src)||(0,V.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if((0,a.Wi)(e))return 0;if((0,B.eP)(e)||(0,B.lq)(e))return t.encoding===fe.KTX2_ENCODING?function(e,t){if((0,a.Wi)(j))return e.byteLength;const r=new j.KTX2File(new Uint8Array(e)),i=J(r)?Y(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===fe.BASIS_ENCODING?function(e,t){if((0,a.Wi)(j))return e.byteLength;const r=new j.BasisFile(new Uint8Array(e)),i=Q(r)?Y(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?fe.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}load(e,t){if((0,a.pC)(this.glTexture))return this.glTexture;if((0,a.pC)(this.loadingPromise))return this.loadingPromise;const r=this.data;return(0,a.Wi)(r)?(this.glTexture=new q.Z(e,this.createDescriptor(e),null),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):((0,B.eP)(r)||(0,B.lq)(r))&&this.params.encoding===fe.DDS_ENCODING?this.loadFromDDSData(e,r):((0,B.eP)(r)||(0,B.lq)(r))&&this.params.encoding===fe.KTX2_ENCODING?this.loadFromKTX2(e,r):((0,B.eP)(r)||(0,B.lq)(r))&&this.params.encoding===fe.BASIS_ENCODING?this.loadFromBasis(e,r):(0,B.lq)(r)?this.loadFromPixelData(e,r):(0,B.eP)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,a.Wi)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if((0,a.pC)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this.powerOfTwoStretchInfo;o.setData(this.data),this.drawStretchedTexture(e,t,r,i,o,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=function(e,t,r){const{textureData:i,internalFormat:o,width:a,height:n}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return ie.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return ie.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,a;switch(i){case ae:o=8,a=33776;break;case ne:o=16,a=33778;break;case se:o=16,a=33779;break;default:return ie.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let n=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(ie.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,p;131072&r[2]&&!1!==t&&(n=Math.max(1,r[7])),1===n||(0,N.wt)(s)&&(0,N.wt)(l)||(ie.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let m=r[1]+4;const h=[];for(let f=0;f<n;++f)p=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,m,p),h.push(u),m+=p,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:h},internalFormat:a,width:c,height:d}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=a,t.height=n,new q.Z(e,t,i)}(e,this.createDescriptor(e),t),this.glTexture}loadFromKTX2(e,t){return this.loadAsync(()=>function(e,t,r){return te.apply(this,arguments)}(e,this.createDescriptor(e),t).then(e=>(this.glTexture=e,e)))}loadFromBasis(e,t){return this.loadAsync(()=>function(e,t,r){return ee.apply(this,arguments)}(e,this.createDescriptor(e),t).then(e=>(this.glTexture=e,e)))}loadFromPixelData(e,t){(0,P.hu)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new q.Z(e,r,t),this.glTexture}loadAsync(e){const t=(0,S.yi)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){var o=this;return this.loadAsync(function(){var a=(0,i.Z)(function*(i){const a=yield(0,M.t)(r,{signal:i});return o.loadFromImage(e,a,t)});return function(e){return a.apply(this,arguments)}}())}loadFromImageElement(e,t,r){var o=this;return r.complete?this.loadFromImage(e,r,t):this.loadAsync(function(){var a=(0,i.Z)(function*(i){const a=yield(0,U.f)(r,r.src,!1,i);return o.loadFromImage(e,a,t)});return function(e){return a.apply(this,arguments)}}())}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync(i=>new Promise((o,n)=>{const s=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),(0,a.pC)(d)&&d.remove()},l=()=>{r.readyState>=2&&(s(),o(this.loadFromImage(e,r,t)))},c=e=>{s(),n(e||new y.Z("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const d=(0,S.fu)(i,()=>c((0,S.zE)()))}))}loadFromImage(e,t,r){const i=fe.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this.createDescriptor(e);return o.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,o)||(0,N.wt)(i.width)&&(0,N.wt)(i.height)?(o.width=i.width,o.height=i.height,this.glTexture=new q.Z(e,o,t),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,o,r),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,he.Z)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,o){const{width:a,height:n}=r,s=(0,N.Sf)(a),l=(0,N.Sf)(n);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[a/s,n/l],c=new q.Z(e,i),c.updateData(0,0,0,a,n,t);break;case 1:case null:case void 0:c=this.stretchToPowerOfTwo(e,t,i,o);break;default:(0,H.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}stretchToPowerOfTwo(e,t,r,i){const o=new q.Z(e,r),a=new me.Z(e,{colorTarget:0,depthStencilTarget:0},o),n=new q.Z(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=ce,r=le,i=-1,o=1){let a=null;return a=t===de?new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):new Float32Array([i,i,o,i,i,o,o,o]),new pe.Z(e,r,{geometry:t},{geometry:ue.Z.createVertex(e,35044,a)})}(e);return this.drawStretchedTexture(e,i,a,s,n,o),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),o}drawStretchedTexture(e,t,r,i,o,a){e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(o,"tex"),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,(0,$._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if((0,a.pC)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if((0,a.pC)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),(0,a.pC)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}fe.DDS_ENCODING="image/vnd-ms.dds",fe.KTX2_ENCODING="image/ktx2",fe.BASIS_ENCODING="image/x.basis";var ve=r(75735),ge=r(8788);const xe=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class be extends(xe(class{})){}class _e extends be{constructor(e){super(),this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}get technique(){return this._technique}getPipelineState(e,t){return this.technique.pipeline}ensureResources(e){return 2}ensureParameters(e){}}class Te extends _e{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquire(this._textureId),this._textureNormal=this._acquire(e.normalTextureId),this._textureEmissive=this._acquire(e.emissiveTextureId),this._textureOcclusion=this._acquire(e.occlusionTextureId),this._textureMetallicRoughness=this._acquire(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach(e=>this._textureRepository.release(e)),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._release(this._textureId),this._textureId=e,this._texture=this._acquire(this._textureId))}bindTextures(e){(0,a.pC)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),(0,a.pC)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,a.pC)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,a.pC)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,a.pC)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=(0,a.pC)(this._texture)&&this._texture.glTexture;t&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){if(!(0,a.Wi)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_release(e){(0,a.Wi)(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}var ye=r(67138);class we extends I{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=le,this._params=(0,ye.Uf)(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){(0,ye.LO)(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,a.pC)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}var Se=r(55229),Ce=r(38359),Me=r(65948),Ae=r(57295),Pe=r(44879),Fe=(r(12131),r(10538)),Ee=r(7558),Oe=r(33091);new Ee.x(function(){return{origin:null,direction:null}}),(0,u.c)(),(0,u.c)();const Ie=w.Z.getLogger("esri.geometry.support.sphere");function Le(){return(0,Pe.c)()}function De(e,t=Le()){return(0,Fe.c)(t,e)}function Re(e){return Array.isArray(e)?e[3]:e}function He(e){return Array.isArray(e)?e:ke}function ze(e,t,r){if((0,a.Wi)(t))return!1;const i=(0,d.f)(Oe.WM.get(),t.origin,He(e)),o=(0,d.d)(t.direction,t.direction),n=2*(0,d.d)(t.direction,i),s=n*n-4*o*((0,d.d)(i,i)-e[3]*e[3]);if(s<0)return!1;const l=Math.sqrt(s);let c=(-n-l)/(2*o);const u=(-n+l)/(2*o);return(c<0||u<c&&u>0)&&(c=u),!(c<0||(r&&(0,d.b)(r,t.origin,(0,d.a)(Oe.WM.get(),t.direction,c)),0))}function Ne(e,t,r){const i=Oe.WM.get(),o=Oe.MP.get();(0,d.c)(i,t.origin,t.direction);const a=Re(e);(0,d.c)(r,i,t.origin),(0,d.a)(r,r,1/(0,d.l)(r)*a);const n=Ve(e,t.origin),s=function(e,t){const r=(0,d.d)(e,t)/((0,d.l)(e)*(0,d.l)(t));return-(0,N.ZF)(r)}(t.origin,r);return(0,l.i)(o),(0,l.d)(o,o,s+n,i),(0,d.m)(r,r,o),r}function Be(e,t,r){const i=(0,d.f)(Oe.WM.get(),t,He(e)),o=(0,d.a)(Oe.WM.get(),i,e[3]/(0,d.l)(i));return(0,d.b)(r,o,He(e))}function Ve(e,t){const r=(0,d.f)(Oe.WM.get(),t,He(e)),i=(0,d.l)(r),o=Re(e),a=o+Math.abs(o-i);return(0,N.ZF)(o/a)}const Ue=(0,u.c)();function Ge(e,t,r,i){const o=(0,d.f)(Ue,t,He(e));switch(r){case 0:{const e=(0,N.jE)(o,Ue)[2];return(0,d.s)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=(0,N.jE)(o,Ue),t=e[1],r=e[2],a=Math.sin(t);return(0,d.s)(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return(0,d.n)(i,o);default:return}}function We(e,t){const r=(0,d.f)(qe,t,He(e));return(0,d.l)(r)-e[3]}const ke=(0,u.c)(),qe=(0,u.c)();Object.freeze({__proto__:null,create:Le,copy:De,fromCenterAndRadius:function(e,t){return(0,Pe.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:Re,getCenter:He,fromValues:function(e,t,r,i){return(0,Pe.f)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&(0,d.g)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Ie.error("sphere.setExtent is not yet supported"),e===r?r:De(e,r)},intersectRay:ze,intersectsRay:function(e,t){return ze(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(ze(e,t,r))return r;const i=Ne(e,t,Oe.WM.get());return(0,d.b)(r,t.origin,(0,d.a)(Oe.WM.get(),t.direction,(0,d.i)(t.origin,i)/(0,d.l)(t.direction))),r},closestPointOnSilhouette:Ne,closestPoint:function(e,t,r){return ze(e,t,r)?r:(function(e,t,r){const i=(0,d.d)(e.direction,(0,d.f)(r,t,e.origin));(0,d.b)(r,e.origin,(0,d.a)(r,e.direction,i))}(t,He(e),r),Be(e,r,r))},projectPoint:Be,distanceToSilhouette:function(e,t){const r=(0,d.f)(Oe.WM.get(),t,He(e)),i=(0,d.p)(r);return Math.sqrt(Math.abs(i-e[3]*e[3]))},angleToSilhouette:Ve,axisAt:Ge,altitudeAt:We,setAltitudeAt:function(e,t,r,i){const o=We(e,t),a=Ge(e,t,2,qe),n=(0,d.a)(qe,a,r-o);return(0,d.b)(i,t,n)}});const $e=new class{constructor(e=0){this.offset=e,this.sphere=Le(),this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],a=i[1]*e+i[5]*t+i[9]*r+i[13],n=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+a*a+n*n);o+=o*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*o+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*o+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=(0,u.c)(),this.mbs=(0,Pe.c)(),this.obb={center:(0,u.c)(),halfSize:(0,Ae.c)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,a=r+this.componentLocalOriginLength,n=this.offset/Math.sqrt(i*i+o*o+a*a);return this.tmpVertex[0]=e+i*n,this.tmpVertex[1]=t+o*n,this.tmpVertex[2]=r+a*n,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],a=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(o*o+a*a+n*n);return e[3]+=o*l,e[4]+=a*l,e[5]+=n*l,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,(0,d.q)(this.obb.halfSize,e.halfSize,e.quaternion),(0,d.b)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,(0,d.f)(this.obb.halfSize,this.obb.halfSize,e.center),(0,Ce.c)(je,e.quaternion),(0,d.q)(this.obb.halfSize,this.obb.halfSize,je),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],a=r+this.localOrigin[2],n=this.offset/Math.sqrt(i*i+o*o+a*a);return this.tmpVertex[0]=e+i*n,this.tmpVertex[1]=t+o*n,this.tmpVertex[2]=r+a*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],o=e[3]+this.localOrigin[0],a=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(o*o+a*a+n*n);return e[3]+=o*l,e[4]+=a*l,e[5]+=n*l,e}};const je=(0,Me.a)();function Xe(e,t,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=e.length;i*=a;for(let s=0;s<n;++s){const r=2*e[s];o[i]=t[r],o[i+1]=t[r+1],i+=a}}function Ze(e,t,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,null==o||1===o)for(let l=0;l<s;++l){const r=3*e[l];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=n}else for(let l=0;l<s;++l){const r=3*e[l];for(let e=0;e<o;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=n}}function Ke(e,t,r,i,o,a=1){if(!r)return void Ze(e,t,i,o,a);const n=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],d=r[1],u=r[2],p=r[4],m=r[5],h=r[6],f=r[8],v=r[9],g=r[10],x=r[12],b=r[13],_=r[14];if(o*=s,1===a)for(let T=0;T<l;++T){const r=3*e[T],i=t[r],a=t[r+1],l=t[r+2];n[o]=c*i+p*a+f*l+x,n[o+1]=d*i+m*a+v*l+b,n[o+2]=u*i+h*a+g*l+_,o+=s}else for(let T=0;T<l;++T){const r=3*e[T],i=t[r],l=t[r+1],y=t[r+2],w=c*i+p*l+f*y+x,S=d*i+m*l+v*y+b,C=u*i+h*l+g*y+_;for(let e=0;e<a;++e)n[o]=w,n[o+1]=S,n[o+2]=C,o+=s}}function Ye(e,t,r,i,o,a=1){if(!r)return void Ze(e,t,i,o,a);const n=i.typedBuffer,s=i.typedBufferStride,c=e.length,d=r[0],u=r[1],p=r[2],m=r[4],h=r[5],f=r[6],v=r[8],g=r[9],x=r[10],b=!(0,l.q)(r),_=1e-6,T=1-_;if(o*=s,1===a)for(let l=0;l<c;++l){const r=3*e[l],i=t[r],a=t[r+1],c=t[r+2];let y=d*i+m*a+v*c,w=u*i+h*a+g*c,S=p*i+f*a+x*c;if(b){const e=y*y+w*w+S*S;if(e<T&&e>_){const t=1/Math.sqrt(e);y*=t,w*=t,S*=t}}n[o+0]=y,n[o+1]=w,n[o+2]=S,o+=s}else for(let l=0;l<c;++l){const r=3*e[l],i=t[r],c=t[r+1],y=t[r+2];let w=d*i+m*c+v*y,S=u*i+h*c+g*y,C=p*i+f*c+x*y;if(b){const e=w*w+S*S+C*C;if(e<T&&e>_){const t=1/Math.sqrt(e);w*=t,S*=t,C*=t}}for(let e=0;e<a;++e)n[o+0]=w,n[o+1]=S,n[o+2]=C,o+=s}}function Qe(e,t,r,i,o,a=1){if(!r)return void function(e,t,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,1===o)for(let l=0;l<s;++l){const r=4*e[l];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=n}else for(let l=0;l<s;++l){const r=4*e[l];for(let e=0;e<o;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=n}}(e,t,i,o,a);const n=i.typedBuffer,s=i.typedBufferStride,c=e.length,d=r[0],u=r[1],p=r[2],m=r[4],h=r[5],f=r[6],v=r[8],g=r[9],x=r[10],b=!(0,l.q)(r),_=1e-6,T=1-_;if(o*=s,1===a)for(let l=0;l<c;++l){const r=4*e[l],i=t[r],a=t[r+1],c=t[r+2],y=t[r+3];let w=d*i+m*a+v*c,S=u*i+h*a+g*c,C=p*i+f*a+x*c;if(b){const e=w*w+S*S+C*C;if(e<T&&e>_){const t=1/Math.sqrt(e);w*=t,S*=t,C*=t}}n[o+0]=w,n[o+1]=S,n[o+2]=C,n[o+3]=y,o+=s}else for(let l=0;l<c;++l){const r=4*e[l],i=t[r],c=t[r+1],y=t[r+2],w=t[r+3];let S=d*i+m*c+v*y,C=u*i+h*c+g*y,M=p*i+f*c+x*y;if(b){const e=S*S+C*C+M*M;if(e<T&&e>_){const t=1/Math.sqrt(e);S*=t,C*=t,M*=t}}for(let e=0;e<a;++e)n[o+0]=S,n[o+1]=C,n[o+2]=M,n[o+3]=w,o+=s}}function Je(e,t,r,i,o,a=1){const n=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,1===a){if(4===r)for(let c=0;c<l;++c){const r=4*e[c];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=255,o+=s}}else if(4===r)for(let c=0;c<l;++c){const r=4*e[c];for(let e=0;e<a;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];for(let e=0;e<a;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=255,o+=s}}var et=r(8651),tt=r(67790),rt=r(97430),it=r(4185),ot=r(68574),at=r(30807),nt=r(47505),st=r(62321),lt=r(19871),ct=r(48725);const dt=(0,r(54226).c)();class ut{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}reload(){var e=this;return(0,i.Z)(function*(){return e._module=yield e._loadModule(),e._module})()}}function pt(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const a=t._parameterNames.length-1,n=Math.ceil((0,N.k3)(e.count||2)),s=null!=(o=t._parameterBits)?o:[0];let l=0;for(;s[l]+n>16;)l++,l>=s.length&&s.push(0);t._parameterBits=s;const c=s[l],d=(1<<n)-1<<c;s[l]+=n,Object.defineProperty(t,r,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+e<<c&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}var mt=r(6532),ht=r(65175);class ft extends ht.${constructor(e,t,r){super(e,t.generateSource("vertex"),t.generateSource("fragment"),r),this._textures=new Map,this._freeTextureUnits=new A.Z({deallocator:null}),this._fragmentUniforms=(0,mt.hZ)()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,a.Wi)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),(0,a.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const vt={mask:255},gt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},xt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var bt=r(36683),_t=r(40766);class Tt extends class{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=(0,a.O3)(this._program),this._pipeline=this._config=null}reload(e){(0,a.O3)(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=Tt.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,ct.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new ft(e.rctx,i,le)}bindPass(e,t){var r,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),(0,at.p)(this.program,t)),7===o&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",ye.FZ[e.colorMixMode])),0===o?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",ye.FZ[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&(0,nt.nW)(this.program,e,this.configuration.isSchematic)):4===o&&(0,ot.wW)(this.program,t),(0,lt.uj)(this.program,e),(0,it.Mo)(this.program,e,t),(0,ye.bj)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,u.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(function(e,t,r){(0,l.t)(dt,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",dt)})(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&rt.f.bindCustomOrigin(this.program,t),(0,tt.Vv)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&(0,st.vL)(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return(0,_t.sm)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?Se.wu:(0,Se.$L)(e),culling:yt(r)&&(0,_t.zp)(r.cullFace),depthTest:{func:(0,Se.$x)(e)},depthWrite:i||o?r.writeDepth&&_t.LZ:null,colorWrite:_t.BK,stencilWrite:r.sceneHasOcludees?vt:null,stencilTest:r.sceneHasOcludees?t?xt:gt:null,polygonOffset:i||o?null:(0,Se.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function yt(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}Tt.shader=new ut(bt.D,()=>r.e(9664).then(r.bind(r,89664)));class wt extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map(()=>0)}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,et._)([pt({count:8})],wt.prototype,"output",void 0),(0,et._)([pt({count:4})],wt.prototype,"alphaDiscardMode",void 0),(0,et._)([pt({count:3})],wt.prototype,"doubleSidedMode",void 0),(0,et._)([pt()],wt.prototype,"isSchematic",void 0),(0,et._)([pt()],wt.prototype,"vertexColors",void 0),(0,et._)([pt()],wt.prototype,"offsetBackfaces",void 0),(0,et._)([pt()],wt.prototype,"symbolColors",void 0),(0,et._)([pt()],wt.prototype,"vvSize",void 0),(0,et._)([pt()],wt.prototype,"vvColor",void 0),(0,et._)([pt()],wt.prototype,"verticalOffset",void 0),(0,et._)([pt()],wt.prototype,"receiveShadows",void 0),(0,et._)([pt()],wt.prototype,"slicePlaneEnabled",void 0),(0,et._)([pt()],wt.prototype,"sliceHighlightDisabled",void 0),(0,et._)([pt()],wt.prototype,"receiveAmbientOcclusion",void 0),(0,et._)([pt()],wt.prototype,"screenSizePerspective",void 0),(0,et._)([pt()],wt.prototype,"textureAlphaPremultiplied",void 0),(0,et._)([pt()],wt.prototype,"hasColorTexture",void 0),(0,et._)([pt()],wt.prototype,"usePBR",void 0),(0,et._)([pt()],wt.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,et._)([pt()],wt.prototype,"hasEmissionTexture",void 0),(0,et._)([pt()],wt.prototype,"hasOcclusionTexture",void 0),(0,et._)([pt()],wt.prototype,"hasNormalTexture",void 0),(0,et._)([pt()],wt.prototype,"instanced",void 0),(0,et._)([pt()],wt.prototype,"instancedColor",void 0),(0,et._)([pt()],wt.prototype,"instancedDoublePrecision",void 0),(0,et._)([pt()],wt.prototype,"vertexTangents",void 0),(0,et._)([pt()],wt.prototype,"normalsTypeDerivate",void 0),(0,et._)([pt()],wt.prototype,"writeDepth",void 0),(0,et._)([pt()],wt.prototype,"sceneHasOcludees",void 0),(0,et._)([pt()],wt.prototype,"transparent",void 0),(0,et._)([pt()],wt.prototype,"enableOffset",void 0),(0,et._)([pt({count:3})],wt.prototype,"cullFace",void 0),(0,et._)([pt({count:4})],wt.prototype,"transparencyPassType",void 0),(0,et._)([pt()],wt.prototype,"multipassTerrainEnabled",void 0),(0,et._)([pt()],wt.prototype,"cullAboveGround",void 0);var St=r(46646);class Ct extends Tt{initializeProgram(e){const t=Ct.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,ct.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new ft(e.rctx,i,le)}}Ct.shader=new ut(St.R,()=>r.e(7925).then(r.bind(r,27925)));class Mt extends we{constructor(e){super(e,Pt),this.supportsEdges=!0,this.techniqueConfig=new wt,this.vertexBufferLayout=Mt.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?Mt.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,o=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(o||a||i)?!!n||s:r?n?l:s:o||a||i?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.techniqueConfig.doubleSidedMode=this.params.treeRendering?2:this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<Se.ve),this.techniqueConfig}intersect(e,t,r,i,o,n,s){if(null!==this.params.verticalOffset){const e=i.camera;(0,d.s)(Rt,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=(0,d.n)(Lt,Rt);break;case 2:t=(0,d.g)(Lt,It)}let a=0;if(null!==this.params.verticalOffset){const r=(0,d.f)(Ht,Rt,e.eye),i=(0,d.l)(r),o=(0,d.a)(r,r,1/i);let n=null;this.params.screenSizePerspective&&(n=(0,d.d)(t,o)),a+=(0,ye.Hx)(e,i,this.params.verticalOffset,n,this.params.screenSizePerspective)}(0,d.a)(t,t,a),(0,d.t)(Dt,t,i.transform.inverseRotation),o=(0,d.f)(Et,o,Dt),n=(0,d.f)(Ot,n,Dt)}var l;(0,ye.Bw)(e,t,i,o,n,(0,a.pC)(l=i.verticalOffset)?($e.offset=l,$e):null,s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new At(e)}createBufferWriter(){return new Ft(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,ve.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=(0,ve.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class At extends Te{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?Ct:Tt,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)||23===e}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const Pt={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,s.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:ge.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class Ft{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){!function(e,t,r,i,o,a){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case"position":{(0,P.hu)(3===t.size);const e=o.getField(n,m.ct);e&&Ke(s,t.data,r,e,a);break}case"normal":{(0,P.hu)(3===t.size);const e=o.getField(n,m.ct);e&&Ye(s,t.data,i,e,a);break}case"uv0":{(0,P.hu)(2===t.size);const e=o.getField(n,m.Eu);e&&Xe(s,t.data,e,a);break}case"color":{(0,P.hu)(3===t.size||4===t.size);const e=o.getField(n,m.mc);e&&Je(s,t.data,t.size,e,a);break}case"symbolColor":{(0,P.hu)(3===t.size||4===t.size);const e=o.getField(n,m.mc);e&&Je(s,t.data,t.size,e,a);break}case"tangent":{(0,P.hu)(4===t.size);const e=o.getField(n,m.ek);e&&Qe(s,t.data,i,e,a);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const Et=(0,u.c)(),Ot=(0,u.c)(),It=(0,u.f)(0,0,1),Lt=(0,u.c)(),Dt=(0,u.c)(),Rt=(0,u.c)(),Ht=(0,u.c)(),zt=w.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Nt(e,t){return Bt.apply(this,arguments)}function Bt(){return(Bt=(0,i.Z)(function*(e,t){const r=yield Vt(e,t);return{resource:r,textures:yield Xt(r.textureDefinitions,t)}})).apply(this,arguments)}function Vt(e,t){return Ut.apply(this,arguments)}function Ut(){return(Ut=(0,i.Z)(function*(e,t){const r=(0,a.pC)(t)&&t.streamDataRequester;if(r)return Gt(e,r,t);const i=yield(0,T.q6)((0,_.default)(e,(0,a.Wg)(t)));if(!0===i.ok)return i.value.data;(0,S.r9)(i.error),kt(i.error)})).apply(this,arguments)}function Gt(e,t,r){return Wt.apply(this,arguments)}function Wt(){return(Wt=(0,i.Z)(function*(e,t,r){const i=yield(0,T.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,S.r9)(i.error),kt(i.error.details.url)})).apply(this,arguments)}function kt(e){throw new y.Z("",`Request for object resource failed: ${e}`)}function qt(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(zt.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(zt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(zt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(zt.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else zt.warn("Indexed geometries must specify faces"),i=!1;break}default:zt.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(zt.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const a in o)o[a].values||(zt.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function $t(e,t){const r=[],i=[],o=[],n=[],s=e.resource,l=C.G.parse(s.version||"1.0","wosr");Qt.validate(l);const c=s.model.name,d=s.model.geometries,p=s.materialDefinitions,m=e.textures;let h=0;const f=new Map;for(let v=0;v<d.length;v++){const e=d[v];if(!qt(e))continue;const s=Yt(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t];c.push([t,{data:e.values,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const x=m&&m[s.texture];if(x&&!f.has(s.texture)){const{image:e,params:t}=x,r=new fe(e,t);n.push(r),f.set(s.texture,r)}const b=f.get(s.texture),_=b?b.id:void 0;let T=o[s.material]?o[s.material][s.texture]:null;if(!T){const e=p[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=x?Kt(x.alphaChannelUsage):void 0,l={ambient:(0,u.d)(e.diffuse),diffuse:(0,u.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,a.pC)(t)&&t.materialParamsMixin&&Object.assign(l,t.materialParamsMixin),T=new Mt(l),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=T}i.push(T);const y=new D(c,g);h+=g.position?g.position.length:0,r.push(y)}return{name:c,stageResources:{textures:n,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:jt(r),numberOfVertices:h,lodThreshold:null}}function jt(e){const t=(0,p.cS)();return e.forEach(e=>{const r=e.boundingInfo;(0,a.pC)(r)&&((0,p.pp)(t,r.getBBMin()),(0,p.pp)(t,r.getBBMax()))}),t}function Xt(e,t){return Zt.apply(this,arguments)}function Zt(){return(Zt=(0,i.Z)(function*(e,t){const r=[];for(const n in e){const i=e[n],o=i.images[0].data;if(!o){zt.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+o,l="/textureDefinitions/"+n,c="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==Kt(c)},u=(0,a.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,M.t)(s,t);r.push(u.then(e=>({refId:l,image:e,params:d,alphaChannelUsage:c})))}const i=yield Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o})).apply(this,arguments)}function Kt(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function Yt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Qt=new C.G(1,2,"wosr");var Jt=r(83038),er=r(5116),tr=r(62848),rr=r(61144);function ir(e,t){return or.apply(this,arguments)}function or(){return(or=(0,i.Z)(function*(e,t){const r=ar((0,o.pJ)(e));if("wosr"===r.fileType){const e=yield t.cache?t.cache.loadWOSR(r.url,t):Nt(r.url,t),i=$t(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=yield t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,x.z)(new g.C(t.streamDataRequester),r.url,t,t.usePBR),n=(0,a.U2)(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&(0,a.pC)(n)&&-1!==i.meta.uri.indexOf("/RealisticTrees/")&&sr(i,n);const s=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...t.materialParamsMixin,treeRendering:i.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=nr(i,s,l,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=nr(i,s,l,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const c=nr(i,s,l);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}})).apply(this,arguments)}function ar(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function nr(e,t,r,i){const o=e.model,l=(0,s.c)(),c=new Array,d=new Map,u=new Map;return o.lods.forEach((e,s)=>{if(void 0!==i&&s!==i)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,a.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,p.cS)()};c.push(g),e.parts.forEach(e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=o.materials.get(e.material),c=(0,a.pC)(e.attributes.texCoord0),x=(0,a.pC)(e.attributes.normal),_=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(s.alphaMode);if(!d.has(i)){if(c){if((0,a.pC)(s.textureColor)&&!u.has(s.textureColor)){const e=o.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:1!==_};u.set(s.textureColor,new fe(e.data,t))}if((0,a.pC)(s.textureNormal)&&!u.has(s.textureNormal)){const e=o.textures.get(s.textureNormal);u.set(s.textureNormal,new fe(e.data,e.parameters))}if((0,a.pC)(s.textureOcclusion)&&!u.has(s.textureOcclusion)){const e=o.textures.get(s.textureOcclusion);u.set(s.textureOcclusion,new fe(e.data,e.parameters))}if((0,a.pC)(s.textureEmissive)&&!u.has(s.textureEmissive)){const e=o.textures.get(s.textureEmissive);u.set(s.textureEmissive,new fe(e.data,e.parameters))}if((0,a.pC)(s.textureMetallicRoughness)&&!u.has(s.textureMetallicRoughness)){const e=o.textures.get(s.textureMetallicRoughness);u.set(s.textureMetallicRoughness,new fe(e.data,e.parameters))}}const n=s.color[0]**(1/Jt.K),l=s.color[1]**(1/Jt.K),p=s.color[2]**(1/Jt.K),m=s.emissiveFactor[0]**(1/Jt.K),h=s.emissiveFactor[1]**(1/Jt.K),f=s.emissiveFactor[2]**(1/Jt.K),v=(0,a.pC)(s.textureColor)&&c?u.get(s.textureColor):null;d.set(i,new Mt({...t,transparent:0===_,textureAlphaMode:_,textureAlphaCutoff:s.alphaCutoff,diffuse:[n,l,p],ambient:[n,l,p],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,a.pC)(v)?v.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:(0,a.pC)(s.textureNormal)&&c?u.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:(0,a.pC)(v)&&!!v.params.preMultiplyAlpha,occlusionTextureId:(0,a.pC)(s.textureOcclusion)&&c?u.get(s.textureOcclusion).id:void 0,emissiveTextureId:(0,a.pC)(s.textureEmissive)&&c?u.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,a.pC)(s.textureMetallicRoughness)&&c?u.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[m,h,f],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const T=function(e,t){switch(t){case 4:return(0,b.nh)(e);case 5:return(0,b.DA)(e);case 6:return(0,b.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),y=e.attributes.position.count,w=(0,v.gS)(m.ct,y);(0,h.t)(w,e.attributes.position,e.transform);const S=[["position",{data:w.typedBuffer,size:w.elementCount,exclusive:!0}]],C=[["position",T]];if((0,a.pC)(e.attributes.normal)){const t=(0,v.gS)(m.ct,y);(0,n.a)(l,e.transform),(0,h.a)(t,e.attributes.normal,l),S.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push(["normal",T])}if((0,a.pC)(e.attributes.tangent)){const t=(0,v.gS)(m.ek,y);(0,n.a)(l,e.transform),(0,f.t)(t,e.attributes.tangent,l),S.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push(["tangent",T])}if((0,a.pC)(e.attributes.texCoord0)){const t=(0,v.gS)(m.Eu,y);(0,er.n)(t,e.attributes.texCoord0),S.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push(["uv0",T])}if((0,a.pC)(e.attributes.color)){const t=(0,v.gS)(m.mc,y);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.ek?(0,f.s)(t,e.attributes.color,255):e.attributes.color instanceof m.mc?(0,tr.c)(t,e.attributes.color):e.attributes.color instanceof m.v6&&(0,f.s)(t,e.attributes.color,1/256);else{(0,tr.f)(t,255,255,255,255);const r=new m.ne(t.buffer,0,4);e.attributes.color instanceof m.ct?(0,h.s)(r,e.attributes.color,255):e.attributes.color instanceof m.ne?(0,rr.c)(r,e.attributes.color):e.attributes.color instanceof m.mw&&(0,h.s)(r,e.attributes.color,1/256)}S.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push(["color",T])}const M=new D(S,C);g.stageResources.geometries.push(M),g.stageResources.materials.push(d.get(i)),c&&((0,a.pC)(s.textureColor)&&g.stageResources.textures.push(u.get(s.textureColor)),(0,a.pC)(s.textureNormal)&&g.stageResources.textures.push(u.get(s.textureNormal)),(0,a.pC)(s.textureOcclusion)&&g.stageResources.textures.push(u.get(s.textureOcclusion)),(0,a.pC)(s.textureEmissive)&&g.stageResources.textures.push(u.get(s.textureEmissive)),(0,a.pC)(s.textureMetallicRoughness)&&g.stageResources.textures.push(u.get(s.textureMetallicRoughness))),g.numberOfVertices+=y;const A=M.boundingInfo;(0,a.pC)(A)&&((0,p.pp)(g.boundingBox,A.getBBMin()),(0,p.pp)(g.boundingBox,A.getBBMax()))})}),c}function sr(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const o of i.parts){const i=o.attributes.normal;if((0,a.Wi)(i))return;const n=o.attributes.position,s=n.count,p=(0,u.c)(),h=(0,u.c)(),f=(0,u.c)(),g=(0,v.gS)(m.mc,s),x=(0,v.gS)(m.ct,s),b=(0,l.b)((0,c.c)(),o.transform);for(let a=0;a<s;a++){n.getVec(a,h),i.getVec(a,p),(0,d.m)(h,h,o.transform),(0,d.f)(f,h,t.center),(0,d.E)(f,f,t.radius);const s=f[2],l=(0,d.l)(f),c=Math.min(.45+.55*l*l,1);(0,d.E)(f,f,t.radius),(0,d.m)(f,f,b),(0,d.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.e)(f,f,p,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(a,f),g.set(a,0,255*c),g.set(a,1,255*c),g.set(a,2,255*c),g.set(a,3,255)}o.attributes.normal=x,o.attributes.color=g}}}},34863:(e,t,r)=>{"use strict";r.d(t,{q:()=>o});var i=r(12188);function o(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(i.H`void forwardLinearDepth() {}`)}},78586:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var i=r(12188);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},67790:(e,t,r)=>{"use strict";r.d(t,{p2:()=>s,Vv:()=>l});var i=r(54704),o=r(32589),a=r(61001),n=r(12188);function s(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=n.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=n.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.sliceHighlightDisabled?n.H`#define highlightSlice(_color_, _pos_) (_color_)`:n.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}else{const r=n.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}function l(e,t,r,n){t.slicePlaneEnabled&&((0,i.pC)(r)?(n?((0,o.f)(c,r.origin,n),e.setUniform3fv("slicePlaneOrigin",c)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",a.Z),e.setUniform3fv("slicePlaneBasis2",a.Z),e.setUniform3fv("slicePlaneOrigin",a.Z)))}const c=(0,a.c)()},13747:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var i=r(12188);function o(e,t){e.vertex.code.add(t.linearDepth?i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`:i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},97430:(e,t,r)=>{"use strict";r.d(t,{f:()=>l});var i,o=r(61001),a=r(48725),n=r(12188),s=r(69797);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(a.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[n.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.H``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(i=l||(l={})).Uniforms=class{},i.bindCustomOrigin=function(e,t){(0,s.po)(t,c,d,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",d)};const c=(0,o.c)(),d=(0,o.c)()},10610:(e,t,r)=>{"use strict";r.d(t,{O:()=>a});var i=r(12188);function o(e){const t=i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function a(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(o),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},70488:(e,t,r)=>{"use strict";r.d(t,{f:()=>o});var i=r(12188);function o(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},98654:(e,t,r)=>{"use strict";r.d(t,{R:()=>a});var i=r(12188);function o(e){e.vertex.code.add(i.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function a(e,t){t.symbolColor?(e.include(o),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),e.vertex.code.add(t.symbolColor?i.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`:i.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},96028:(e,t,r)=>{"use strict";r.d(t,{D:()=>o});var i=r(12188);function o(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.H`void forwardTextureCoordinates() {}`)}},44245:(e,t,r)=>{"use strict";r.d(t,{c:()=>o});var i=r(12188);function o(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},75617:(e,t,r)=>{"use strict";r.d(t,{B:()=>p});var i,o=r(10610),a=r(56682),n=r(953),s=r(61001),l=r(70488),c=r(48725),d=r(12188);function u(e,t){e.include(l.f),e.vertex.include(c.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(d.H`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function p(e,t){0===t.normalType||1===t.normalType?(e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(d.H`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(d.H`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?d.H`normalize(vPositionWorldCameraRelative);`:d.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(d.H`void forwardNormal() {}`)}(i=u||(u={})).ModelTransform=class{constructor(){this.worldFromModel_RS=(0,a.c)(),this.worldFromModel_TH=(0,s.c)(),this.worldFromModel_TL=(0,s.c)()}},i.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,s.c)(),this.worldFromView_TL=(0,s.c)(),this.viewFromCameraRelative_RS=(0,a.c)(),this.projFromView=(0,n.c)()}},i.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},i.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)},(p||(p={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},52590:(e,t,r)=>{"use strict";r.d(t,{i:()=>n});var i=r(96028),o=r(12188);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function n(e,t){e.include(i.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(a),e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},4185:(e,t,r)=>{"use strict";r.d(t,{LC:()=>a,Mo:()=>n});var i=r(12188);function o(e){e.vertex.code.add(i.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(i.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(i.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(i.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(i.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(i.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(i.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(o),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(i.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?i.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:i.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?i.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:i.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(i.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function n(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=s){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]);e.setUniform4f("verticalOffset",i.screenLength*(r.camera.pixelRatio||1),i.perDistance,i.minWorldLength,i.maxWorldLength)}r(67138);const s={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},27307:(e,t,r)=>{"use strict";r.d(t,{s:()=>h});var i=r(67790),o=r(13747),a=r(10610),n=r(96028),s=r(75617),l=r(32431),c=r(12188);function d(e,t){e.fragment.include(l.n),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(c.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(c.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var u=r(68574),p=r(19871),m=r(8788);function h(e,t){const r=e.vertex.code,l=e.fragment.code;1!==t.output&&3!==t.output||(e.include(o.w,{linearDepth:!0}),e.include(n.D,t),e.include(p.kl,t),e.include(d,t),e.include(i.p2,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(c.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(m.sj,t),l.add(c.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?c.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(o.w,{linearDepth:!1}),e.include(a.O,t),e.include(s.B,t),e.include(n.D,t),e.include(p.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(c.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?c.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.p2,t),e.include(m.sj,t),l.add(c.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?c.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?c.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:c.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(o.w,{linearDepth:!1}),e.include(n.D,t),e.include(p.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(c.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(i.p2,t),e.include(m.sj,t),e.include(u.bA),l.add(c.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?c.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},68574:(e,t,r)=>{"use strict";r.d(t,{bA:()=>s,wW:()=>l});var i=r(44879),o=r(12188);const a=(0,i.f)(1,1,0,1),n=(0,i.f)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",a).add("unoccludedHighlightFlag","vec4",n),e.fragment.code.add(o.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function l(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},30068:(e,t,r)=>{"use strict";r.d(t,{S:()=>a});var i=r(32431),o=r(12188);function a(e){e.include(i.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},35048:(e,t,r)=>{"use strict";r.d(t,{Q:()=>a});var i=r(52590),o=r(12188);function a(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),r.code.add(2===t.doubleSidedMode?o.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:o.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(o.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(i.i,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(o.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},53046:(e,t,r)=>{"use strict";r.d(t,{K:()=>o});var i=r(12188);function o(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(i.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},20613:(e,t,r)=>{"use strict";r.d(t,{X:()=>d});var i=r(12188);function o(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var a=r(53046);function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=r(9480),l=r(73885),c=r(62321);function d(e,t){const r=e.fragment;e.include(n),e.include(a.K,t),0!==t.pbrMode&&e.include(s.T,t),e.include(o,t),t.receiveShadows&&e.include(c.hX,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(l.e),r.code.add(i.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(i.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?i.H`normalize(vPosWorld)`:i.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(i.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(i.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(i.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(i.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(i.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(i.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},30807:(e,t,r)=>{"use strict";r.d(t,{p:()=>a,l:()=>o});var i=r(12188);function o(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function a(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},95610:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var i=r(12188);function o(e,t){const r=e.fragment;r.code.add(i.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),r.code.add(1===t.doubleSidedMode?i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`:2===t.doubleSidedMode?i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`:i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},9480:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});var i=r(12188);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var a=r(73885);function n(e,t){const r=e.fragment.code;e.include(a.e),3===t.pbrMode||4===t.pbrMode?(r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(o),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},47505:(e,t,r)=>{"use strict";r.d(t,{jV:()=>n,nW:()=>s});var i=r(57295),o=r(52590),a=r(12188);function n(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(o.i,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(a.H`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(a.H`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(a.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(a.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(a.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(a.H`float getBakedOcclusion() { return 1.0; }`),r.code.add(a.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(a.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(0,i.f)(0,.6,.2)},73885:(e,t,r)=>{"use strict";r.d(t,{e:()=>o});var i=r(12188);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},62321:(e,t,r)=>{"use strict";r.d(t,{hX:()=>a,vL:()=>n});var i=r(32431),o=r(12188);function a(e){e.fragment.include(i.n),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(o.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function n(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}},19871:(e,t,r)=>{"use strict";r.d(t,{kl:()=>o,uj:()=>a});var i=r(12188);function o(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(i.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.H`vec4 vvColor() { return vec4(1.0); }`)}function a(e,t){(function(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))})(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},8788:(e,t,r)=>{"use strict";r.d(t,{sj:()=>n,F:()=>o,bf:()=>a});var i=r(12188);const o=.1,a=.001;function n(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(a)}) { discard; } }
      `);break;case 1:r.code.add(i.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},48725:(e,t,r)=>{"use strict";r.d(t,{$:()=>w,I:()=>S});var i,o,a,n=r(12131),s=r(12188),l=r(54704),c=r(61001),d=r(98248),u=r(8485),p=r(65175),m=(r(86712),r(6532),r(40766)),h=(r(28989),r(13811)),f=r(69797),v=r(61470),g=r(55229),x={exports:{}};i=x,o=function(){var e={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},t=null,r=null;function i(e){if(null==t)for(var i in t={},r={},e)"number"==typeof e[i]&&(t[e[i]]=i,r[i]=e[i])}function o(){if(null==t)throw"WebGLDebugUtils.init(ctx) not called"}function a(e){o();var r=t[e];return void 0!==r?"gl."+r:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function n(t,i,o,n){var s;if(void 0!==(s=e[t])&&void 0!==(s=s[i])&&s[o]){if("object"==typeof s[o]&&void 0!==s[o].enumBitwiseOr){for(var l=s[o].enumBitwiseOr,c=0,d=[],u=0;u<l.length;++u){var p=r[l[u]];0!=(n&p)&&(c|=p,d.push(a(p)))}return c===n?d.join(" | "):a(n)}return a(n)}return null===n?"null":void 0===n?"undefined":n.toString()}function s(e,t,r){e.__defineGetter__(r,function(){return t[r]}),e.__defineSetter__(r,function(e){t[r]=e})}function l(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);for(var i=0;i<t;++i)e.disableVertexAttribArray(i),e.vertexAttribPointer(i,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(i,0);e.deleteBuffer(r);var o=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(i=0;i<o;++i)e.activeTexture(e.TEXTURE0+i),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}return{init:i,mightBeEnum:function(e){return o(),void 0!==t[e]},glEnumToString:a,glFunctionArgToString:n,glFunctionArgsToString:function(e,t){for(var r="",i=t.length,o=0;o<i;++o)r+=(0==o?"":", ")+n(e,i,o,t[o]);return r},makeDebugContext:function e(t,r,o,l){l=l||t,i(t),r=r||function(e,t,r){for(var i="",o=r.length,s=0;s<o;++s)i+=(0==s?"":", ")+n(t,o,s,r[s]);var l;l="WebGL error "+a(e)+" in "+t+"("+i+")",window.console&&window.console.error?window.console.error(l):window.console&&window.console.log&&window.console.log(l)};var c={};function d(e,t){return function(){o&&o(t,arguments);var i=e[t].apply(e,arguments),a=l.getError();return 0!=a&&(c[a]=!0,r(a,t,arguments)),i}}var u={};for(var p in t)if("function"==typeof t[p])if("getExtension"!=p)u[p]=d(t,p);else{var m=d(t,p);u[p]=function(){return e(m.apply(t,arguments),r,o,l)}}else s(u,t,p);return u.getError=function(){for(var e in c)if(c.hasOwnProperty(e)&&c[e])return c[e]=!1,e;return t.NO_ERROR},u},makeLostContextSimulatingCanvas:function(e){var t,r,i=[],o=[],a={},n=1,c=!1,d=[],u=0,p=0,m=!1,h=0,f={};function v(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(r=e.getContext,function(){var i=r.apply(e,arguments);if(i instanceof WebGLRenderingContext){if(i!=t){if(t)throw"got different context";a=y(t=i)}return a}return i});var g=function(e){i.push(v(e))},x=function(e){o.push(v(e))};function b(){++p,c||u==p&&e.loseContext()}function _(e,t){var r=e[t];return function(){if(b(),!c)return r.apply(e,arguments)}}function T(e){return{statusMessage:e,preventDefault:function(){m=!0}}}return function(e){var t=e.addEventListener;e.addEventListener=function(r,i,o){switch(r){case"webglcontextlost":g(i);break;case"webglcontextrestored":x(i);break;default:t.apply(e,arguments)}}}(e),e.loseContext=function(){if(!c){for(c=!0,u=0,++n;t.getError(););(function(){for(var e=Object.keys(f),t=0;t<e.length;++t)delete f[e]})(),f[t.CONTEXT_LOST_WEBGL]=!0;var r=T("context lost"),o=i.slice();setTimeout(function(){for(var t=0;t<o.length;++t)o[t](r);h>=0&&setTimeout(function(){e.restoreContext()},h)},0)}},e.restoreContext=function(){c&&o.length&&setTimeout(function(){if(!m)throw"can not restore. webglcontestlost listener did not call event.preventDefault";(function(){for(var e=0;e<d.length;++e){var r=d[e];r instanceof WebGLBuffer?t.deleteBuffer(r):r instanceof WebGLFramebuffer?t.deleteFramebuffer(r):r instanceof WebGLProgram?t.deleteProgram(r):r instanceof WebGLRenderbuffer?t.deleteRenderbuffer(r):r instanceof WebGLShader?t.deleteShader(r):r instanceof WebGLTexture&&t.deleteTexture(r)}})(),l(t),c=!1,p=0,m=!1;for(var e=o.slice(),r=T("context restored"),i=0;i<e.length;++i)e[i](r)},0)},e.loseContextInNCalls=function(e){if(c)throw"You can not ask a lost contet to be lost";u=p+e},e.getNumCalls=function(){return p},e.setRestoreTimeout=function(e){h=e},e;function y(e){for(var r in e)"function"==typeof e[r]?a[r]=_(e,r):s(a,e,r);a.getError=function(){if(b(),!c)for(;e=t.getError();)f[e]=!0;for(var e in f)if(f[e])return delete f[e],e;return a.NO_ERROR};for(var i=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],o=0;o<i.length;++o){var l=i[o];a[l]=function(t){return function(){if(b(),c)return null;var r=t.apply(e,arguments);return r.__webglDebugContextLostId__=n,d.push(r),r}}(e[l])}var u=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(o=0;o<u.length;++o)a[l=u[o]]=function(t){return function(){return b(),c?null:t.apply(e,arguments)}}(a[l]);var p=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(o=0;o<p.length;++o)a[l=p[o]]=function(t){return function(){return b(),!c&&t.apply(e,arguments)}}(a[l]);return a.checkFramebufferStatus=function(t){return function(){return b(),c?a.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(a.checkFramebufferStatus),a.getAttribLocation=function(t){return function(){return b(),c?-1:t.apply(e,arguments)}}(a.getAttribLocation),a.getVertexAttribOffset=function(t){return function(){return b(),c?0:t.apply(e,arguments)}}(a.getVertexAttribOffset),a.isContextLost=function(){return c},a}},resetToInitialState:l}},void 0!==(a=o())&&(i.exports=a);var b=r(56372);class _{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this.floatBufferBlendWorking=!1,this._doublePrecisionRequiresObfuscation=null,this.floatBufferBlendWorking=function(e){var t,r,i,o,a;if(!e.gl)return!1;if("webgl"===e.webglVersion)return(null==(o=e.capabilities.textureFloat)?void 0:o.textureFloat)&&(null==(a=e.capabilities.colorBufferFloat)?void 0:a.textureFloat);if(!((null==(t=e.capabilities.textureFloat)?void 0:t.textureFloat)&&(null==(r=e.capabilities.colorBufferFloat)?void 0:r.textureFloat)&&(null==(i=e.capabilities.colorBufferFloat)?void 0:i.floatBlend)))return!1;const n=new u.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5126,internalFormat:34836,samplingMode:9728,width:1,height:1}),s=d.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new h.Z(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:s}),c=new p.$(e,"\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n   precision highp float;\n\n   void main() {\n    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",new Map([["a_pos",0]]));e.useProgram(c);const f=e.getBoundFramebufferObject(),{x:v,y:b,width:_,height:T}=e.getViewport();e.bindFramebuffer(n),e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4);const y=(0,m.sm)({blending:g.IB});e.setPipelineState(y),e.drawArrays(5,0,4),x.exports.init(e);const w=e.gl.getError();return e.setViewport(v,b,_,T),e.bindFramebuffer(f),c.dispose(),l.dispose(!1),s.dispose(),n.dispose(),1282!==w||(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1)}(e),(0,b.M)(e).then(e=>this.svgAlwaysPremultipliesAlpha=!e)}get doublePrecisionRequiresObfuscation(){if((0,l.Wi)(this._doublePrecisionRequiresObfuscation)){const e=y(this.context,!1),t=y(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let T=null;function y(e,t){const r=new u.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),i=d.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),o=new h.Z(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),a=(0,c.f)(5633261.287538229,2626832.878767164,1434988.0495278358),n=(0,c.f)(5633271.46742708,2626873.6381334523,1434963.231608387),s=function(r,i){const o=new p.$(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),a=new Float32Array(6);(0,f.LF)(r,a,3);const n=new Float32Array(6);return(0,f.LF)(i,n,3),e.useProgram(o),o.setUniform3f("u_highA",a[0],a[2],a[4]),o.setUniform3f("u_lowA",a[1],a[3],a[5]),o.setUniform3f("u_highB",n[0],n[2],n[4]),o.setUniform3f("u_lowB",n[1],n[3],n[5]),o}(a,n),l=e.getBoundFramebufferObject(),{x:m,y:g,width:x,height:b}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(o),e.drawArrays(5,0,4);const _=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,_),s.dispose(),o.dispose(!1),i.dispose(),r.dispose(),e.setViewport(m,g,x,b),e.bindFramebuffer(l);const T=(a[2]-n[2])/25,y=(0,v.vP)(_);return Math.abs(T-y)}function w({code:e},t){e.add(t.doublePrecisionRequiresObfuscation?s.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:s.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function S(e){return!!(0,n.Z)("force-double-precision-obfuscation")||(t=e,((0,l.Wi)(T)||T.context!==t)&&(T=new _(t)),T).doublePrecisionRequiresObfuscation;var t}},78440:(e,t,r)=>{"use strict";r.d(t,{a:()=>a});var i=r(12188),o=r(6532);function a(e,t){const r=i.H`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;(0,o.CG)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},169:(e,t,r)=>{"use strict";r.d(t,{y:()=>a});var i=r(12188);function o(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(o),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},32431:(e,t,r)=>{"use strict";r.d(t,{n:()=>o});var i=r(12188);function o(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},39057:(e,t,r)=>{"use strict";r.d(t,{kG:()=>a});const i=r(18419).Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class o{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class a extends o{constructor(){super(...arguments),this.vertex=new l,this.fragment=new l,this.attributes=new c,this.varyings=new d,this.extensions=new u,this.constants=new p}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,a=o.uniforms.generateSource(),n=o.code.generateSource(),s="vertex"===e?h:m,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}}class n{constructor(){this._entries=new Map}add(e,t,r){return this._entries.set(`${e}_${t}_${r}`,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map(e=>{return`uniform ${e.type} ${e.name}${t=e.arraySize,t?`[${t}]`:""};`;var t})}get entries(){return Array.from(this._entries.values())}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class l extends o{constructor(){super(...arguments),this.uniforms=new n,this.code=new s,this.constants=new p}get builder(){return this}}class c{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=p.numberToFloatStr(r);break;case"int":i=p.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${p.numberToFloatStr(r[0])},                            ${p.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${p.numberToFloatStr(r[0])},                            ${p.numberToFloatStr(r[1])},                            ${p.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${p.numberToFloatStr(r[0])},                            ${p.numberToFloatStr(r[1])},                            ${p.numberToFloatStr(r[2])},                            ${p.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${p.numberToIntStr(r[0])},                             ${p.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${p.numberToIntStr(r[0])},                             ${p.numberToIntStr(r[1])},                             ${p.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${p.numberToIntStr(r[0])},                             ${p.numberToIntStr(r[1])},                             ${p.numberToIntStr(r[2])},                             ${p.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,e=>p.numberToFloatStr(e)).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",h="precision highp float;\nprecision highp sampler2D;"},12188:(e,t,r)=>{"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,{H:()=>i}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))},55229:(e,t,r)=>{"use strict";r.d(t,{$L:()=>s,$x:()=>u,ve:()=>l,IB:()=>n,wu:()=>o,je:()=>d});var i=r(40766);const o=(0,i.wK)(770,1,771,771),a=(0,i.if)(1,1),n=(0,i.if)(0,771);function s(e){return 2===e?null:1===e?n:a}const l=5e5,c={factor:-1,units:-2};function d(e){return e?c:null}function u(e){return 3===e||2===e?513:515}},61470:(e,t,r)=>{"use strict";r.d(t,{hu:()=>o,vP:()=>a}),r(53934),r(2424),r(49882),r(98737),r(61001),r(10538),(0,r(44879).c)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new i(t)}}function a(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*n[i];return r}const n=[1/256,1/65536,1/16777216,1/4294967296];a(new Uint8ClampedArray([255,255,255,255]))},69797:(e,t,r)=>{"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function o(e,t,r,o){for(let s=0;s<o;++s)a[0]=e[s],i(a,n,1),t[s]=n[0],r[s]=n[1]}r.d(t,{LF:()=>i,po:()=>o});const a=new Float64Array(1),n=new Float32Array(2)},67138:(e,t,r)=>{"use strict";r.d(t,{bj:()=>T,FZ:()=>C,Uf:()=>y,Bw:()=>p,LO:()=>w,Hx:()=>_});var i=r(53934),o=r(54704),a=r(32589),n=r(61001),s=r(288);(0,i.Vl)(10),(0,i.Vl)(12),(0,i.Vl)(70),(0,i.Vl)(40);const l={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var c=r(61470),d=(r(2424),r(953));r(69797),new Float64Array(3),new Float32Array(6),(0,d.c)();const u=(0,s.Ue)();function p(e,t,r,i,a,n,s){if(!function(e){return!!(0,o.pC)(e)&&!e.visible}(t))if(e.boundingInfo)(0,c.hu)(0===e.primitiveType),h(e.boundingInfo,i,a,r.tolerance,n,s);else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");v(i,a,0,t.length/3,t,r,void 0,n,s)}}const m=(0,n.c)();function h(e,t,r,i,n,l){if((0,o.Wi)(e))return;const c=function(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,m);if((0,s.op)(u,e.getBBMin()),(0,s.Tn)(u,e.getBBMax()),(0,o.pC)(n)&&n.applyToAabb(u),function(e,t,r,i){return function(e,t,r,i,o){const a=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],p=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,p)),!(l<0)&&(s=Math.max(s,Math.min(u,p)),!(s>l)&&s<1/0)}(e,t,r,i)}(u,t,c,i)){const{primitiveIndices:o,indices:a,position:s}=e,c=o?o.length:a.length/3;if(c>M){const o=e.getChildren();if(void 0!==o){for(let e=0;e<8;++e)void 0!==o[e]&&h(o[e],t,r,i,n,l);return}}v(t,r,0,c,a,s,o,n,l)}}const f=(0,n.c)();function v(e,t,r,i,a,n,s,l,c){if(s)return function(e,t,r,i,a,n,s,l,c){const d=n.data,u=n.stride||n.size,p=e[0],m=e[1],h=e[2],v=t[0]-p,g=t[1]-m,x=t[2]-h;for(let _=r;_<i;++_){const e=s[_];let t=3*e,r=u*a[t++],i=d[r++],n=d[r++],T=d[r];r=u*a[t++];let y=d[r++],w=d[r++],S=d[r];r=u*a[t];let C=d[r++],M=d[r++],A=d[r];(0,o.pC)(l)&&([i,n,T]=l.applyToVertex(i,n,T,_),[y,w,S]=l.applyToVertex(y,w,S,_),[C,M,A]=l.applyToVertex(C,M,A,_));const P=y-i,F=w-n,E=S-T,O=C-i,I=M-n,L=A-T,D=g*L-I*x,R=x*O-L*v,H=v*I-O*g,z=P*D+F*R+E*H;if(Math.abs(z)<=Number.EPSILON)continue;const N=p-i,B=m-n,V=h-T,U=N*D+B*R+V*H;if(z>0){if(U<0||U>z)continue}else if(U>0||U<z)continue;const G=B*E-F*V,W=V*P-E*N,k=N*F-P*B,q=v*G+g*W+x*k;if(z>0){if(q<0||U+q>z)continue}else if(q>0||U+q<z)continue;const $=(O*G+I*W+L*k)/z;$>=0&&c($,b(P,F,E,O,I,L,f),e)}}(e,t,r,i,a,n,s,l,c);const d=n.data,u=n.stride||n.size,p=e[0],m=e[1],h=e[2],v=t[0]-p,g=t[1]-m,x=t[2]-h;for(let _=r,T=3*r;_<i;++_){let e=u*a[T++],t=d[e++],r=d[e++],i=d[e];e=u*a[T++];let n=d[e++],s=d[e++],y=d[e];e=u*a[T++];let w=d[e++],S=d[e++],C=d[e];(0,o.pC)(l)&&([t,r,i]=l.applyToVertex(t,r,i,_),[n,s,y]=l.applyToVertex(n,s,y,_),[w,S,C]=l.applyToVertex(w,S,C,_));const M=n-t,A=s-r,P=y-i,F=w-t,E=S-r,O=C-i,I=g*O-E*x,L=x*F-O*v,D=v*E-F*g,R=M*I+A*L+P*D;if(Math.abs(R)<=Number.EPSILON)continue;const H=p-t,z=m-r,N=h-i,B=H*I+z*L+N*D;if(R>0){if(B<0||B>R)continue}else if(B>0||B<R)continue;const V=z*P-A*N,U=N*M-P*H,G=H*A-M*z,W=v*V+g*U+x*G;if(R>0){if(W<0||B+W>R)continue}else if(W>0||B+W<R)continue;const k=(F*V+E*U+O*G)/R;k>=0&&c(k,b(M,A,P,F,E,O,f),_)}}const g=(0,n.c)(),x=(0,n.c)();function b(e,t,r,i,o,n,s){return(0,a.s)(g,e,t,r),(0,a.s)(x,i,o,n),(0,a.c)(s,g,x),(0,a.n)(s,s),s}function _(e,t,r,o,a){let n=(r.screenLength||0)*e.pixelRatio;a&&(n=function(e,t,r,o){return function(e,t){return Math.max((0,i.t7)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return l.scale=Math.min(i.divisor/(t-i.offset),1),l.factor=function(e){return Math.abs(e*e*e)}(e),l.minPixelSize=i.minPixelSize,l.paddingPixels=o,l}(t,r,o))}(n,o,t,a));const s=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,i.uZ)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function T(e,t,r){if(!e)return;const i=e.parameters;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,e.paddingPixelsOverride)}function y(e,t){const r=t?y(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=S(t)),null==t&&i in r||(r[i]=t)}return r}function w(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(r=!0,e[i]=Array.isArray(o)?o.slice():o)}return r}function S(e){const t=[];return e.forEach(e=>t.push(e)),t}const C={multiply:1,ignore:2,replace:3,tint:4},M=1e3},28989:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var i=r(53934),o=r(54704),a=r(6532),n=r(86712),s=r(79410);class l{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(n._g.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(n._g.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const i=this._context.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES),n=this._descriptor;l._validateTexture(this._context,n),r.pixelStorei(r.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);const s=n.pixelFormat;let c=n.internalFormat?n.internalFormat:this._deriveInternalFormat(s,n.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,o=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,o=e.videoHeight),r.texImage2D(t,0,c,s,n.dataType,e),(0,a.zu)(r),n.hasMipmap&&this.generateMipmap(),void 0===n.width&&(n.width=i),void 0===n.height&&(n.height=o)}else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&c===r.DEPTH_STENCIL&&(c=r.DEPTH24_STENCIL8);let i=n.width,l=n.height;if(function(e){return(0,o.pC)(e)&&"type"in e&&"compressed"===e.type}(e)){const o=Math.round(Math.log(Math.max(i,l))/Math.LN2)+1;n.hasMipmap=n.hasMipmap&&o===e.levels.length;for(let a=0;;++a){const o=e.levels[Math.min(a,e.levels.length-1)];if(r.compressedTexImage2D(t,a,c,i,l,0,o),1===i&&1===l||!n.hasMipmap)break;i=Math.max(1,i>>1),l=Math.max(1,l>>1)}}else if((0,o.pC)(e))r.texImage2D(t,0,c,i,l,0,s,n.dataType,e),(0,a.zu)(r),n.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,c,i,l,0,s,n.dataType,null),(0,a.zu)(r),(1!==i||1!==l)&&n.hasMipmap;++e)i=Math.max(1,i>>1),l=Math.max(1,l>>1)}l._applySamplingMode(r,this._descriptor),l._applyWrapMode(r,this._descriptor),l._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,a.zu)(r),this._context.bindTexture(i,l.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,o,a,n=3553){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,c=this._descriptor,d=this._context.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>c.width||o>c.height||t+i>c.width||r+o>c.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,c.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,c.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.preMultiplyAlpha?1:0),a instanceof ImageData||a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement?s.texSubImage2D(n,e,t,r,c.pixelFormat,c.dataType,a):s.texSubImage2D(n,e,t,r,i,o,c.pixelFormat,c.dataType,a),this._context.bindTexture(d,l.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,l._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,l.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,l._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(l._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(l._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=(0,i.wt)(t.width)&&(0,i.wt)(t.height);(0,s.Z)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}l.TEXTURE_UNIT_FOR_UPDATES=0},79410:(e,t,r)=>{"use strict";function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,{Z:()=>i})},6532:(e,t,r)=>{"use strict";r.d(t,{zu:()=>c,hZ:()=>s,CG:()=>l});var i=r(2747),o=r(12131);const a=r(18419).Z.getLogger("esri/views/webgl"),n=!!(0,o.Z)("enable-feature:webgl-debug");function s(){return n}function l(){return n}function c(e){if(s()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),o=(new Error).stack;a.error(new i.Z("webgl-error","WebGL error occured",{message:r,stack:o}))}}}},86712:(e,t,r)=>{"use strict";r.d(t,{Ld:()=>i,Lu:()=>a,_g:()=>o});const i=33984;var o;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Program=3]="Program",e[e.Framebuffer=4]="Framebuffer",e[e.Renderbuffer=5]="Renderbuffer",e[e.COUNT=6]="COUNT"}(o||(o={}));const a=33306}}]);