(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[1562],{1562:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var i=s(16304),r=s(8651),o=(s(12131),s(54704)),n=(s(46942),s(47648),s(18419),s(8680)),a=s(16678),d=s(17662),l=s(10075),c=s(75990),h=s(68576);class u{constructor(e,t){this.offset=e,this.extent=t}}let p=class extends c.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}update(e,t){var s=this;return(0,i.Z)(function*(){const i=t.schema.processors[0];"heatmap"===i.type&&(0,a.Hg)(s._schema,i)&&(e.mesh=!0,s._schema=i)})()}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}onTileMessage(e,t,s){var r=this;return(0,i.Z)(function*(){r._tileKeyToFeatureSets.has(e.key.id)||r._tileKeyToFeatureSets.set(e.key.id,new Map);const i=r._tileKeyToFeatureSets.get(e.key.id);if((0,o.pC)(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&i.set(t.addOrUpdate.instance,t),t.end){const t=[],i=function(e){const t=e.key,s=new Map,i=256,r=l.I_,o=e.tileInfoView.tileInfo.isWrappable;return s.set((0,h.M)(t,-1,-1,o).id,new u([-r,-r],[r-i,r-i,r,r])),s.set((0,h.M)(t,0,-1,o).id,new u([0,-r],[0,r-i,r,r])),s.set((0,h.M)(t,1,-1,o).id,new u([r,-r],[0,r-i,i,r])),s.set((0,h.M)(t,-1,0,o).id,new u([-r,0],[r-i,0,r,r])),s.set((0,h.M)(t,1,0,o).id,new u([r,0],[0,0,i,r])),s.set((0,h.M)(t,-1,1,o).id,new u([-r,r],[r-i,0,r,i])),s.set((0,h.M)(t,0,1,o).id,new u([0,r],[0,0,r,i])),s.set((0,h.M)(t,1,1,o).id,new u([r,r],[0,0,i,i])),s}(e);r._tileKeyToFeatureSets.forEach((s,r)=>{if(r===e.key.id)s.forEach(e=>(0,o.Po)(e.addOrUpdate,e=>t.push(e)));else if(i.has(r)){const e=i.get(r),[n,a]=e.offset;s.forEach(e=>(0,o.Po)(e.addOrUpdate,e=>{const s=e.transform(n,a,1,1);t.push(s)}))}});const n=(0,d.QM)(t,r._schema.mesh,512,512);return r.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:n},{...s,transferList:[n.matrix]})}})()}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};p=(0,r._)([(0,n.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],p);var f=p},68576:(e,t,s)=>{"use strict";function i(e,t,s,i){const r=e.clone(),o=1<<r.level,n=r.col+t,a=r.row+s;return i&&n<0?(r.col=n+o,r.world-=1):n>=o?(r.col=n-o,r.world+=1):r.col=n,r.row=a,r}s.d(t,{M:()=>i}),s(97382)}}]);