(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[2248],{72248:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Colorize:()=>a}),s(98248),s(8485),s(12131),s(6532),s(86712),s(17757),s(40766);var i=s(28989),r=(s(13811),s(66618));class a{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){const{width:i,height:r}=t;this._createOrResizeResources(e,i,r);const{context:a,painter:n}=e,{materialManager:o}=n,l=this._programDesc,h=this._quad,c=s.colorMatrix;h.bind();const u=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,i,r,0,0,u),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);const d=o.getProgram(e,l);a.useProgram(d),a.bindTexture(u,2),d.setUniformMatrix4fv("u_coefficients",c),d.setUniform1i("u_colorTexture",2),h.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),h.unbind()}_createOrResizeResources(e,t,s){const{context:a}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===s||(this._size[0]=t,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(t,s):this._layerFBOTexture=new i.Z(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:s}),this._quad||(this._quad=new r.Z(a,[-1,-1,1,-1,-1,1,1,1])))}}}}]);