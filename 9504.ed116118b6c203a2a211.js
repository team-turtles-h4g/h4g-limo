(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[9504],{19504:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ElevationQuery:()=>Z,GeometryDescriptor:()=>A,default:()=>Z,getFinestLodIndex:()=>M});var n=i(16304),l=i(91278),o=i(2747),s=i(54704),a=i(98154),r=i(43899),c=i(89635),u=i(38975),h=i(92268),p=i(90626),f=i(35718),d=(i(42851),i(12131),i(18419)),m=i(61182),y=i(37e3);const x=d.Z.getLogger("esri.layers.support.ElevationSampler");class v{queryElevation(e){return function(e,t){const i=R(e,t.spatialReference);if(!i)return null;switch(e.type){case"point":!function(e,t,i){e.z=(0,s.Pt)(i.elevationAt(t),0)}(e,i,t);break;case"polyline":!function(e,t,i){_.spatialReference=t.spatialReference;const n=e.hasM&&!e.hasZ;for(let l=0;l<e.paths.length;l++){const o=e.paths[l],a=t.paths[l];for(let e=0;e<o.length;e++){const t=o[e],l=a[e];_.x=l[0],_.y=l[1],n&&(t[3]=t[2]),t[2]=(0,s.Pt)(i.elevationAt(_),0)}}e.hasZ=!0}(e,i,t);break;case"multipoint":!function(e,t,i){_.spatialReference=t.spatialReference;const n=e.hasM&&!e.hasZ;for(let l=0;l<e.points.length;l++){const o=e.points[l],a=t.points[l];_.x=a[0],_.y=a[1],n&&(o[3]=o[2]),o[2]=(0,s.Pt)(i.elevationAt(_),0)}e.hasZ=!0}(e,i,t)}return e}(e.clone(),this)}on(){return w}projectIfRequired(e,t){return R(e,t)}}class T extends v{constructor(e,t,i){super(),this.tile=e,this.noDataValue=i,this.extent=(0,f.HH)(e.tile.extent,t.spatialReference);const n=(0,r.c9)(t.spatialReference),l=t.lodAt(e.tile.level).resolution*n;this.demResolution={min:l,max:l}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return(0,m.aV)(this.extent,t)}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if((0,s.Wi)(t))return null;if(!this.contains(e)){const t=this.extent;x.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax})`)}return this.tile.sample(t.x,t.y)}}class g extends v{constructor(e,t,i){let n;super(),"number"==typeof t?(this.noDataValue=t,n=null):(n=t,this.noDataValue=i),this.samplers=n?e.map(e=>new T(e,n,this.noDataValue)):e;const l=this.samplers[0];if(l){this.extent=l.extent.clone();const{min:e,max:t}=l.demResolution;this.demResolution={min:e,max:t};for(let i=1;i<this.samplers.length;i++){const e=this.samplers[i];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max)}}else this.extent=(0,f.HH)((0,f.Ue)(),n.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const i of this.samplers)if(i.contains(t))return i.elevationAt(t);return x.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),null}}function R(e,t){if((0,s.Wi)(e))return null;const i=e.spatialReference;if(i.equals(t))return e;const n=(0,y.iV)(e,t);return n||x.error(`Cannot project geometry spatial reference (wkid:${i.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),n}const _=new u.Z,w={remove(){}};class E{constructor(e,t=null){if(this.tile=e,(0,s.pC)(t)){const i=e.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}}sample(e,t){if((0,s.Wi)(this.samplerData))return;const{safeWidth:i,width:n,pixelData:l,noDataValue:o,dx:a,dy:r,y1:c,x0:u}=this.samplerData,h=q(r*(c-t),0,i),p=q(a*(e-u),0,i),f=Math.floor(h),d=Math.floor(p),m=f*n+d,y=m+n,x=l[m],v=l[y],T=l[m+1],g=l[y+1];if(x!==o&&v!==o&&T!==o&&g!==o){const e=p-d,t=x+(T-x)*e;return t+(v+(g-v)*e-t)*(h-f)}}}function q(e,t,i){return e<t?t:e>i?i:e}class Z{queryAll(e,t,i){var l=this;return(0,n.Z)(function*(){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(e=>e.visible):e.slice()).length)throw new o.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const n=A.fromGeometry(t);let s=!1;i&&i.returnSampleInfo||(s=!0);const a={...F,...i,returnSampleInfo:!0},r=yield l.query(e[e.length-1],n,a),c=yield l._queryAllContinue(e,r,a);return c.geometry=c.geometry.export(),s&&delete c.sampleInfo,c})()}query(e,t,i){var l=this;return(0,n.Z)(function*(){if(!e)throw new o.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof A)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new o.Z("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const n={...F,...i},s=new C(e,t.spatialReference,n),a=n.signal;return yield e.load({signal:a}),yield l._createGeometryDescriptor(s,t,a),yield l._selectTiles(s,a),yield l._populateElevationTiles(s,a),l._sampleGeometryWithElevation(s),l._createQueryResult(s,a)})()}createSampler(e,t,i){var l=this;return(0,n.Z)(function*(){if(!e)throw new o.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new o.Z("elevation-query:invalid-extent","Invalid or undefined extent");const n={...F,...i};return l._createSampler(e,t,n)})()}createSamplerAll(e,t,i){var l=this;return(0,n.Z)(function*(){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(e=>e.visible):e.slice()).length)throw new o.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new o.Z("elevation-query:invalid-extent","Invalid or undefined extent");const n={...F,...i,returnSampleInfo:!0},s=yield l._createSampler(e[e.length-1],t,n);return l._createSamplerAllContinue(e,t,s,n)})()}_createSampler(e,t,i,l){var o=this;return(0,n.Z)(function*(){const n=i.signal;yield e.load({signal:n});const s=t.spatialReference,a=e.tileInfo.spatialReference;s.equals(a)||(yield(0,p.iQ)([{source:s,dest:a}],{signal:n}),t=(0,p.iV)(t,a));const r=new D(e,t,i,l);return yield o._selectTiles(r,n),yield o._populateElevationTiles(r,n),new g(r.elevationTiles,r.layer.tileInfo,r.options.noDataValue)})()}_createSamplerAllContinue(e,t,i,l){var o=this;return(0,n.Z)(function*(){if(e.pop(),!e.length)return i;const n=i.samplers.map(e=>(0,f.oJ)(e.extent)),s=yield o._createSampler(e[e.length-1],t,l,n);if(0===s.samplers.length)return i;const a=i.samplers.concat(s.samplers),r=new g(a,l.noDataValue);return o._createSamplerAllContinue(e,t,r,l)})()}_queryAllContinue(e,t,i){var l=this;return(0,n.Z)(function*(){const n=e.pop(),o=t.geometry.coordinates,s=[],a=[];for(let i=0;i<o.length;i++){const l=t.sampleInfo[i];l.demResolution>=0?l.source||(l.source=n):e.length&&(s.push(o[i]),a.push(i))}if(!e.length||0===s.length)return t;const r=t.geometry.clone(s),c=yield l.query(e[e.length-1],r,i);return a.forEach((e,i)=>{o[e].z=c.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=c.sampleInfo[i].demResolution}),l._queryAllContinue(e,t,i)})()}_createQueryResult(e,t){var i=this;return(0,n.Z)(function*(){const n={geometry:(yield e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=i._extractSampleInfo(e)),e.geometry.coordinates.forEach(e=>{e.tile=null,e.elevationTile=null}),n})()}_createGeometryDescriptor(e,t,i){return(0,n.Z)(function*(){let n;const l=e.layer.tileInfo.spatialReference;if(t instanceof A?n=yield t.project(l,i):(yield(0,p.iQ)([{source:t.spatialReference,dest:l}],{signal:i}),n=(0,p.iV)(t,l)),!n)throw new o.Z("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=A.fromGeometry(n)})()}_selectTiles(e,t){var i=this;return(0,n.Z)(function*(){const n=e.options.demResolution;if("geometry"===e.type&&i._preselectOutsideLayerExtent(e),"number"==typeof n)i._selectTilesClosestResolution(e);else if("finest-contiguous"===n)yield i._selectTilesFinestContiguous(e,t);else{if("auto"!==n)throw new o.Z("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${n}', expected a number, "finest-contiguous" or "auto"`);yield i._selectTilesAuto(e,t)}})()}_preselectOutsideLayerExtent(e){const t=new E(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach(e=>{const n=e.x,l=e.y;(n<i.xmin||n>i.xmax||l<i.ymin||l>i.ymax)&&(e.elevationTile=t)})}_selectTilesClosestResolution(e){const t=this._findNearestDemResolutionLODIndex(e.layer.tileInfo,e.options.demResolution);e.selectTilesAtLOD(t)}_findNearestDemResolutionLODIndex(e,t){const i=t/(0,r.c9)(e.spatialReference);let n=e.lods[0],l=0;for(let o=1;o<e.lods.length;o++){const t=e.lods[o];Math.abs(t.resolution-i)<Math.abs(n.resolution-i)&&(n=t,l=o)}return l}_selectTilesFinestContiguous(e,t){var i=this;return(0,n.Z)(function*(){const n=M(e.layer.tileInfo,e.options.minDemResolution);yield i._selectTilesFinestContiguousAt(e,n,t)})()}_selectTilesFinestContiguousAt(e,t,i){var l=this;return(0,n.Z)(function*(){const n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=n.tilemapCache,r=e.getTilesToFetch();try{if(s)yield(0,a.Hl)(Promise.all(r.map(e=>s.fetchAvailability(e.level,e.row,e.col,{signal:i}))),i);else if(yield l._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new o.Z("elevation-query:has-unavailable-tiles")}catch(x){(0,a.r9)(x),yield l._selectTilesFinestContiguousAt(e,t-1,i)}})()}_populateElevationTiles(e,t){return(0,n.Z)(function*(){const i=e.getTilesToFetch(),l={},o=e.options.cache,r=e.options.noDataValue,c=i.map(function(){var i=(0,n.Z)(function*(i){const n=`${e.layer.uid}:${i.id}:${r}`,a=(0,s.pC)(o)?o.get(n):null,c=(0,s.pC)(a)?a:yield e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:r,signal:t});(0,s.pC)(o)&&o.put(n,c),l[i.id]=new E(i,c)});return function(e){return i.apply(this,arguments)}}());yield(0,a.Hl)((0,a.as)(c),t),e.populateElevationTiles(l)})()}_selectTilesAuto(e,t){var i=this;return(0,n.Z)(function*(){i._selectTilesAutoFinest(e),i._reduceTilesForMaximumRequests(e);const o=e.layer.tilemapCache;if(!o)return i._selectTilesAutoPrefetchUpsample(e,t);const s=e.getTilesToFetch(),r={},c=s.map(function(){var e=(0,n.Z)(function*(e){const i={id:null,level:0,row:0,col:0,extent:(0,f.Ue)()},n=yield(0,l.q6)(o.fetchAvailabilityUpsample(e.level,e.row,e.col,i,{signal:t}));!1===n.ok?(0,a.r9)(n.error):r[e.id]=i});return function(t){return e.apply(this,arguments)}}());yield(0,a.Hl)(Promise.all(c),t),e.remapTiles(r)})()}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const n={},l=e=>{e.id in n?n[e.id]++:(n[e.id]=1,i++)},o=e=>{const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1};e.forEachTileToFetch(l,o);let s=!0;for(;s&&(s=!1,e.forEachTileToFetch(n=>{i<=e.options.maximumAutoTileRequests||(o(n),t.upsampleTile(n)&&(s=!0),l(n))},o),s););}_selectTilesAutoFinest(e){const t=M(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}_selectTilesAutoPrefetchUpsample(e,t){var i=this;return(0,n.Z)(function*(){const n=e.layer.tileInfo;yield i._populateElevationTiles(e,t);let l=!1;e.forEachTileToFetch((e,t)=>{n.upsampleTile(e)?l=!0:t()}),l&&(yield i._selectTilesAutoPrefetchUpsample(e,t))})()}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);(0,s.pC)(e)?n=e:t.elevationTile=null}t.z=n})}_extractSampleInfo(e){const t=e.layer.tileInfo,i=(0,r.c9)(t.spatialReference);return e.geometry.coordinates.map(n=>{let l=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(l=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:l}})}}class A{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new A;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(e=>this._cloneCoordinate(e)),t._exporter=this._exporter,t}project(e,t){var i=this;return(0,n.Z)(function*(){if(i.spatialReference.equals(e))return i.clone();yield(0,p.iQ)([{source:i.spatialReference,dest:e}],{signal:t});const n=new c.Z({spatialReference:i.spatialReference,points:i.coordinates.map(e=>[e.x,e.y])}),l=(0,p.iV)(n,e);if(!l)return null;const o=i.coordinates.map((e,t)=>{const n=i._cloneCoordinate(e),o=l.points[t];return n.x=o[0],n.y=o[1],n}),s=i.clone(o);return s.spatialReference=e,s})()}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new A;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof A)t.coordinates=e.coordinates.map(e=>t._cloneCoordinate(e)),t._exporter=(t,i)=>{const n=e.clone(t);return n.spatialReference=i,n};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:l}=i;t.coordinates=n&&l?[{x:i.x,y:i.y,z:i.z,m:i.m}]:n?[{x:i.x,y:i.y,z:i.z}]:l?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new u.Z(t[0].x,t[0].y,t[0].z,t[0].m,i):new u.Z(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:n,hasM:l}=i;t.coordinates=i.points.map(n&&l?e=>({x:e[0],y:e[1],z:e[2],m:e[3]}):n?e=>({x:e[0],y:e[1],z:e[2]}):l?e=>({x:e[0],y:e[1],m:e[2]}):e=>({x:e[0],y:e[1]})),t._exporter=(t,i)=>e.hasM?new c.Z({points:t.map(e=>[e.x,e.y,e.z,e.m]),hasZ:!0,hasM:!0,spatiaReference:i}):new c.Z(t.map(e=>[e.x,e.y,e.z]),i);break}case"polyline":{const i=e,n=[],l=[],{hasZ:o,hasM:s}=e;let a=0;for(const e of i.paths)if(l.push([a,a+e.length]),a+=e.length,o&&s)for(const t of e)n.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(o)for(const t of e)n.push({x:t[0],y:t[1],z:t[2]});else if(s)for(const t of e)n.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)n.push({x:t[0],y:t[1]});t.coordinates=n,t._exporter=(t,i)=>{const n=t.map(e.hasM?e=>[e.x,e.y,e.z,e.m]:e=>[e.x,e.y,e.z]),o=l.map(e=>n.slice(e[0],e[1]));return new h.Z({paths:o,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class I{constructor(e,t){this.layer=e,this.options=t}}class C extends I{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(e=>e.tile=null);else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach(e=>{e.tile=t.tileAt(i,e.x,e.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const n=i.tile;i.elevationTile||!i.tile||e[n.id]||(e[n.id]=n,t.push(n))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>t.tile=null)}}class D extends I{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=n}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if((0,s.Wi)(i))return-1;for(let n=t.lods.length-1;n>=0;n--){const l=t.lods[n],o=l.resolution*t.size[1];if(Math.ceil(i.width/(l.resolution*t.size[0]))*Math.ceil(i.height/o)<=e)return n}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach(i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,()=>n=!0),n?t&&t(i):this.candidateTiles.push(i)}),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},n=[];for(const o of e)i[o.id]?t&&t(o):(i[o.id]=o,n.push(o));const l=n.sort((e,t)=>e.level-t.level);return l.filter((e,i)=>{for(let n=0;n<i;n++)if((0,f.r3)(l[n].extent,e.extent))return t&&t(e),!1;return!0})}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if((0,s.Wi)(t))return;const i=this.layer.tileInfo,n=i.lods[e],l=i.tileAt(n.level,t.xmin,t.ymin),o=n.resolution*i.size[1],a=Math.ceil((t.xmax-l.extent[0])/(n.resolution*i.size[0])),r=Math.ceil((t.ymax-l.extent[1])/o);for(let s=0;s<r;s++)for(let e=0;e<a;e++){const t={id:null,level:l.level,row:l.row-s,col:l.col+e};i.updateTileInfo(t),this._tileIsMasked(t)||this.candidateTiles.push(t)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>(0,f.r3)(t,e.extent))}}function M(e,t){let i=e.lods.length-1;if(t>0){const n=e.lods.findIndex(e=>e.resolution<t);0===n?i=0:n>0&&(i=n-1)}return i}const F={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}}}]);