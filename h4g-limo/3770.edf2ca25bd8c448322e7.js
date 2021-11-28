(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[3770],{49527:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>F});var r=o(16304),i=o(8651),n=(o(42851),o(46942)),s=o(12131),l=(o(47648),o(18419),o(41460)),a=o(8680),u=o(76468),d=o(45581),p=o(54704),c=o(42314),y=o(41586),h=o(95046);let f=class extends d.Z{constructor(e){super(e),this.type="csv"}load(e){const t=(0,p.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(e=>y.default.fromJSON(e))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(e=>({count:e.count,extent:h.Z.fromJSON(e.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_startWorker(e){var t=this;return(0,r.Z)(function*(){t._connection=yield(0,c.bA)("CSVSourceWorker",{strategy:(0,s.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const o=yield t._connection.invoke("load",{url:t.url,parsing:{columnDelimiter:t.delimiter,fields:t.fields&&t.fields.map(e=>e.toJSON()),latitudeField:t.latitudeField,longitudeField:t.longitudeField,spatialReference:t.spatialReference&&t.spatialReference.toJSON(),timeInfo:t.timeInfo&&t.timeInfo.toJSON()}},{signal:e});t.locationInfo=o.locationInfo,t.sourceJSON=o.layerDefinition,t.columnDelimiter=o.columnDelimiter})()}};(0,i._)([(0,n.Cb)()],f.prototype,"type",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"url",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"delimiter",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"fields",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"latitudeField",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"longitudeField",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"spatialReference",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"timeInfo",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"locationInfo",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"sourceJSON",void 0),(0,i._)([(0,n.Cb)()],f.prototype,"columnDelimiter",void 0),f=(0,i._)([(0,a.j)("esri.layers.graphics.sources.CSVSource")],f);var m=f,b=o(33569),g=o(65669),v=o(9614),_=o(2379);let C=class extends u.default{constructor(...e){super(...e),this.capabilities=(0,b.MS)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.customParameters=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=_.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}createGraphicsSource(e){var t=this;return(0,r.Z)(function*(){const o=new m({delimiter:t.delimiter,fields:t.fields,latitudeField:t.latitudeField,longitudeField:t.longitudeField,spatialReference:t.spatialReference,timeInfo:t.timeInfo,url:t.url});return t._set("source",o),yield o.load({signal:e}),t.read({locationInfo:o.locationInfo,columnDelimiter:o.columnDelimiter},{origin:"service",url:t.parsedUrl}),o})()}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(g.Z.from(e)||this.createQuery())).then(e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(g.Z.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(g.Z.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(g.Z.from(e)||this.createQuery()))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,i._)([(0,n.Cb)({readOnly:!0,json:{read:!1,write:!1}})],C.prototype,"capabilities",void 0),(0,i._)([(0,n.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],C.prototype,"delimiter",void 0),(0,i._)([(0,n.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],C.prototype,"editingEnabled",void 0),(0,i._)([(0,n.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],C.prototype,"fields",void 0),(0,i._)([(0,n.Cb)({type:Boolean,readOnly:!0})],C.prototype,"isTable",null),(0,i._)([(0,l.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],C.prototype,"readWebMapLabelsVisible",null),(0,i._)([(0,n.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],C.prototype,"latitudeField",void 0),(0,i._)([(0,n.Cb)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],C.prototype,"customParameters",void 0),(0,i._)([(0,n.Cb)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,i._)([(0,n.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],C.prototype,"locationType",void 0),(0,i._)([(0,n.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],C.prototype,"longitudeField",void 0),(0,i._)([(0,n.Cb)({type:["CSV"]})],C.prototype,"operationalLayerType",void 0),(0,i._)([(0,n.Cb)()],C.prototype,"outFields",void 0),(0,i._)([(0,n.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],C.prototype,"path",void 0),(0,i._)([(0,n.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],C.prototype,"portalItem",void 0),(0,i._)([(0,n.Cb)({json:{read:!1},cast:null,type:m,readOnly:!0})],C.prototype,"source",void 0),(0,i._)([(0,n.Cb)({json:{read:!1},value:"csv",readOnly:!0})],C.prototype,"type",void 0),(0,i._)([(0,n.Cb)({json:{read:v.r,write:{isRequired:!0,ignoreOrigin:!0,writer:v.w}}})],C.prototype,"url",null),C=(0,i._)([(0,a.j)("esri.layers.CSVLayer")],C);var F=C},90495:(e,t,o)=>{"use strict";o.d(t,{g:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);