(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[8347],{98347:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Opacity:()=>i}),s(98248),s(8485),s(12131),s(6532),s(86712),s(17757),s(40766);var r=s(28989);s(13811);class i{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){const{width:r,height:i}=t;this._createOrResizeResources(e,r,i);const{context:a,painter:l}=e,{amount:h}=s,n=a.gl,o=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,r,i,0,0,o),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(n.COLOR_BUFFER_BIT),l.blitTexture(a,o,9728,h)}_createOrResizeResources(e,t,s){const{context:i}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===s||(this._size[0]=t,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(t,s):this._layerFBOTexture=new r.Z(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:t,height:s}))}}}}]);