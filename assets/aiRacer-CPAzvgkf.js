const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./kessra-BlyPlOpZ.js","./three.module-DcNjV2DT.js","./three.core-Dp-eO7LC.js","./BufferGeometryUtils-P3SBB2vP.js","./trackSpline-B64FuWtg.js","./vulkar-BWZcn32S.js","./rime-DyPHDBxL.js","./lumen-DOa2lbbP.js","./halo-DHdSqeKU.js","./shatter-C9mzAiBu.js","./tempest-S38MUE9e.js","./horizon-DEoX1KUd.js","./city-BEuKvGlh.js","./angkor-lQSXynyO.js","./giza-J6VgQjLw.js","./petra-JU-xKGEa.js","./machu-DvextLMX.js"])))=>i.map(i=>d[i]);
import{A as e,B as t,Ba as n,Dr as r,Dt as i,Fa as a,Fi as o,Fr as s,G as c,Ir as l,L as u,La as d,Lt as f,Nr as p,O as m,Pt as h,Qi as g,R as _,Rn as v,Tn as y,U as b,Wi as x,Wr as S,Yt as C,_r as w,ar as T,ct as E,do as D,ia as ee,ir as O,j as k,ja as A,jr as te,jt as ne,mr as j,no as M,or as N,pa as P,pr as re,qa as F,qt as ie,ra as I,ro as L,sn as ae,ta as R,tr as z,wr as oe,z as se}from"./three.core-Dp-eO7LC.js";import{n as ce,t as le}from"./bikes-CSCY1BNr.js";import{t as ue}from"./BufferGeometryUtils-P3SBB2vP.js";import{t as B}from"./preload-helper-CRzLMJPS.js";var de={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},V=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},fe=new r(-1,1,1,-1,0,1),H=new class extends k{constructor(){super(),this.setAttribute(`position`,new f([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new f([0,2,0,0,2,0],2))}},pe=class{constructor(e){this._mesh=new T(H,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fe)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},me=class extends V{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof R?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=F.clone(e.uniforms),this.material=new R({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pe(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},he=class extends V{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ge=class extends V{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},_e=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new M);this._width=n.width,this._height=n.height,t=new D(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:C}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new me(de),this.copyPass.material.blending=0,this.timer=new a}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}he!==void 0&&(r instanceof he?n=!0:r instanceof ge&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new M);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},ve=class extends V{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new b}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ye={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new b(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},be=class e extends V{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new M(256,256):new M(e.x,e.y),this.clearColor=new b(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new D(i,a,{type:C,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new D(i,a,{type:C,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new D(i,a,{type:C,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ye;this.highPassUniforms=F.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new R({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new M(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=F.clone(de.uniforms),this.blendMaterial=new R({uniforms:this.copyUniforms,vertexShader:de.vertexShader,fragmentShader:de.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new b,this._oldClearAlpha=1,this._basic=new N,this._fsQuad=new pe(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new M(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new R({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new M(.5,.5)},direction:{value:new M(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new R({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};be.BlurDirectionX=new M(1,0),be.BlurDirectionY=new M(0,1);var xe={name:`SMAAEdgesShader`,defines:{SMAA_THRESHOLD:`0.1`},uniforms:{tDiffuse:{value:null},resolution:{value:new M(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Se={name:`SMAAWeightsShader`,defines:{SMAA_MAX_SEARCH_STEPS:`8`,SMAA_AREATEX_MAX_DISTANCE:`16`,SMAA_AREATEX_PIXEL_SIZE:`( 1.0 / vec2( 160.0, 560.0 ) )`,SMAA_AREATEX_SUBTEX_SIZE:`( 1.0 / 7.0 )`},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new M(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Ce={name:`SMAABlendShader`,uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new M(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`},we=class extends V{constructor(){super(),this._edgesRT=new D(1,1,{depthBuffer:!1,type:C}),this._edgesRT.texture.name=`SMAAPass.edges`,this._weightsRT=new D(1,1,{depthBuffer:!1,type:C}),this._weightsRT.texture.name=`SMAAPass.weights`;let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new A,this._areaTexture.name=`SMAAPass.area`,this._areaTexture.image=t,this._areaTexture.minFilter=v,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new A,this._searchTexture.name=`SMAAPass.search`,this._searchTexture.image=n,this._searchTexture.magFilter=w,this._searchTexture.minFilter=w,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=F.clone(xe.uniforms),this._materialEdges=new R({defines:Object.assign({},xe.defines),uniforms:this._uniformsEdges,vertexShader:xe.vertexShader,fragmentShader:xe.fragmentShader}),this._uniformsWeights=F.clone(Se.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new R({defines:Object.assign({},Se.defines),uniforms:this._uniformsWeights,vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader}),this._uniformsBlend=F.clone(Ce.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new R({uniforms:this._uniformsBlend,vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader}),this._fsQuad=new pe(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return`data:image/png;base64,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`}_getSearchTexture(){return`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=`}},Te={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Ee=class extends V{constructor(){super(),this.isOutputPass=!0,this.uniforms=F.clone(Te.uniforms),this.material=new o({name:Te.name,uniforms:this.uniforms,vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader}),this._fsQuad=new pe(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},c.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},De=`
html.hb-touch,html.hb-touch body{touch-action:manipulation;overscroll-behavior:none;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}
html.hb-touch *:not(input):not(textarea){-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
html.hb-touch #app,html.hb-touch #hud{touch-action:none}
html.hb-touch .hm{touch-action:none}
html.hb-touch .hm .foot{display:none}
html.hb-touch .hm .press{font-size:0}
html.hb-touch .hm .press::after{content:"TAP TO START";font:800 italic clamp(18px,2.2vw,26px) "SF Pro Display",system-ui,sans-serif;letter-spacing:.3em}
html.hb-touch .hm .seg button,html.hb-touch .hm .step button,html.hb-touch .hm .btn{min-height:44px}
html.hb-touch .hm .seg button,html.hb-touch .hm .step button{padding:9px 20px}
html.hb-touch .hm .sw i{width:44px;height:44px}
html.hb-touch .hm .opt{padding-top:1.5vh;padding-bottom:1.5vh}
#tc-rot{display:none;position:fixed;inset:0;z-index:99999;background:rgba(2,5,12,.94);color:#eafcff;align-items:center;justify-content:center;flex-direction:column;gap:22px;
  font:800 italic 22px "SF Pro Display",system-ui,sans-serif;letter-spacing:.3em;text-align:center;padding:24px;text-shadow:0 0 14px #3ef0ff}
#tc-rot i{display:block;width:84px;height:48px;border:4px solid #3ef0ff;border-radius:10px;box-shadow:0 0 18px #3ef0ff;animation:tcRot 2.4s ease-in-out infinite}
@keyframes tcRot{0%,20%{transform:rotate(90deg)}60%,100%{transform:rotate(0)}}
@media (orientation:portrait){#tc-rot{display:flex}}
`,Oe=`
.tc{position:fixed;inset:0;touch-action:none;pointer-events:auto;font-family:"SF Pro Display",system-ui,-apple-system,sans-serif;color:#eafcff;
  --u:clamp(54px,9.6vh,92px);--sl:max(22px,env(safe-area-inset-left));--sr:max(22px,env(safe-area-inset-right));--sb:max(20px,env(safe-area-inset-bottom));--g:14px;
  transition:opacity .25s}
.tc.off{opacity:0;pointer-events:none}
/* ---- buttons ---- */
.tc-b{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-radius:50%;box-sizing:border-box;
  --c:#3ef0ff;color:#fff;border:2px solid color-mix(in srgb,var(--c) 75%,transparent);
  background:radial-gradient(circle at 50% 38%,color-mix(in srgb,var(--c) 26%,rgba(6,14,26,.55)),rgba(5,10,20,.58) 72%);
  box-shadow:0 0 18px color-mix(in srgb,var(--c) 28%,transparent),inset 0 0 20px color-mix(in srgb,var(--c) 18%,transparent);
  -webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);text-shadow:0 0 8px var(--c);
  transition:transform .08s,box-shadow .12s,background .12s,left .3s,right .3s,bottom .3s,width .3s,height .3s;touch-action:none;cursor:pointer}
.tc-b svg{width:44%;height:44%;filter:drop-shadow(0 0 5px var(--c));flex:none}
.tc-b span{font-size:max(9px,calc(var(--u)*.135));font-weight:800;letter-spacing:.2em;text-indent:.2em;line-height:1}
.tc-b.on{transform:scale(.92);background:radial-gradient(circle at 50% 38%,color-mix(in srgb,var(--c) 72%,#fff 8%),color-mix(in srgb,var(--c) 38%,rgba(5,10,20,.7)) 80%);
  box-shadow:0 0 34px var(--c),inset 0 0 26px color-mix(in srgb,var(--c) 55%,transparent);color:#041018;text-shadow:none}
.tc-b.on svg{filter:none}
.tc-b.boost{--c:#ffa63e;width:calc(var(--u)*1.75);height:calc(var(--u)*1.75);right:calc(var(--sr) + 4px);bottom:var(--sb)}
.tc-b.boost::before{content:"";position:absolute;inset:-7px;border-radius:50%;pointer-events:none;
  background:conic-gradient(from -135deg,var(--c) calc(var(--en,1)*.75turn),rgba(255,255,255,.1) 0 .75turn,transparent 0);
  -webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 6px),#000 calc(100% - 5px));mask:radial-gradient(farthest-side,transparent calc(100% - 6px),#000 calc(100% - 5px));filter:drop-shadow(0 0 5px var(--c))}
.tc-b.boost.low::before{background:conic-gradient(from -135deg,#ff3d5a calc(var(--en,1)*.75turn),rgba(255,255,255,.1) 0 .75turn,transparent 0)}
.tc-b.drift{--c:#7e8bff;width:calc(var(--u)*1.2);height:calc(var(--u)*1.2);right:calc(var(--sr) + var(--u)*1.75 + var(--g) + 4px);bottom:var(--sb)}
.tc-b.brake{--c:#ff5470;width:calc(var(--u)*1.05);height:calc(var(--u)*1.05)}
.tc-b.item{--c:#3ef0ff;width:calc(var(--u)*1.2);height:calc(var(--u)*1.2);right:calc(var(--sr) + var(--u)*.275 + 4px);bottom:calc(var(--sb) + var(--u)*1.75 + var(--g))}
.tc-b.item.empty{opacity:.4}
.tc-b.item svg.ic{width:48%;height:48%;stroke:currentColor}
.tc-b.item.got{animation:tcPop .35s ease-out}
.tc-b.dash{--c:#5dffc0;width:calc(var(--u)*.95);height:calc(var(--u)*.95)}
.tc-b.dash::after{content:"";position:absolute;inset:0;border-radius:50%;pointer-events:none;background:conic-gradient(rgba(2,8,16,.7) calc(var(--cd,0)*1turn),transparent 0)}
.tc-b.dash svg{width:50%;height:50%}
.tc-b.dashR{right:calc(var(--sr) + var(--u)*1.75 + var(--g) + var(--u)*.125 + 4px);bottom:calc(var(--sb) + var(--u)*1.2 + var(--g))}
/* touch-steering layout: everything on the right thumb; the left half is the steering pad */
.tc.tm-touch .tc-b.brake{right:calc(var(--sr) + var(--u)*2.95 + var(--g)*2 + 4px + var(--u)*.075);bottom:var(--sb)}
.tc.tm-touch .tc-b.dashL{right:calc(var(--sr) + var(--u)*2.95 + var(--g)*2 + 4px + var(--u)*.125);bottom:calc(var(--sb) + var(--u)*1.2 + var(--g))}
/* tilt layout: the left thumb is free, so brake and dash-left live on the left edge */
.tc.tm-tilt .tc-b.brake{left:var(--sl);bottom:var(--sb);width:calc(var(--u)*1.2);height:calc(var(--u)*1.2)}
.tc.tm-tilt .tc-b.dashL{left:calc(var(--sl) + var(--u)*.125);bottom:calc(var(--sb) + var(--u)*1.2 + var(--g))}
.tc.tm-tilt .tc-b.brake,.tc.tm-tilt .tc-b.dashL{right:auto}
.tc.tm-touch .tc-b.brake,.tc.tm-touch .tc-b.dashL{left:auto}
/* ---- pause ---- */
.tc-b.pause{--c:#bfe9ff;width:calc(var(--u)*.62);height:calc(var(--u)*.62);left:calc(50% + 74px);top:max(26px,env(safe-area-inset-top));bottom:auto;right:auto;border-radius:12px;transform:skewX(-10deg)}
.tc-b.pause svg{width:46%;height:46%;transform:skewX(10deg)}
.tc-b.pause.on{transform:skewX(-10deg) scale(.92)}
/* ---- tilt wheel (also the recentre button) ---- */
.tc-b.wheel{--c:#3ef0ff;left:calc(var(--sl) + var(--u)*.125);bottom:calc(var(--sb) + var(--u)*2.15 + var(--g)*2);width:calc(var(--u)*.95);height:calc(var(--u)*.95)}
.tc-b.wheel svg{width:62%;height:62%;transition:none}
.tc-b.wheel span{font-size:max(8px,calc(var(--u)*.1));letter-spacing:.12em;text-indent:.12em;margin-top:-4px}
.tc.tm-touch .tc-b.wheel{display:none}
/* ---- steering pad (touch mode) ---- */
.tc-pad{position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;opacity:0;transition:opacity .15s}
.tc-pad.on{opacity:1}
.tc-pad i{position:absolute;left:calc(var(--pr,95px)*-1.18);top:-34px;width:calc(var(--pr,95px)*2.36);height:68px;border-radius:34px;border:2px solid rgba(62,240,255,.55);background:rgba(8,20,34,.38);box-shadow:0 0 18px rgba(62,240,255,.25)}
.tc-pad b{position:absolute;left:-30px;top:-30px;width:60px;height:60px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#c9fbff,#3ef0ff 60%,#168aa0);box-shadow:0 0 22px #3ef0ff}
.tc-hint{position:absolute;left:calc(var(--sl) + 4%);bottom:calc(var(--sb) + var(--u)*.25);width:30%;max-width:320px;height:calc(var(--u)*.75);display:none;align-items:center;justify-content:space-between;padding:0 22px;box-sizing:border-box;
  border:1px dashed rgba(62,240,255,.38);border-radius:999px;background:rgba(8,20,34,.18);font-weight:800;letter-spacing:.3em;font-size:max(10px,calc(var(--u)*.14));color:rgba(190,240,255,.7);transition:opacity .6s;pointer-events:none}
.tc.tm-touch .tc-hint{display:flex}.tc-hint.gone{opacity:0}
.tc-hint em{font-style:normal;color:#3ef0ff;font-size:1.5em}
/* ---- messages ---- */
.tc-gate{position:absolute;left:50%;top:calc(max(26px,env(safe-area-inset-top)) + var(--u)*1.5);transform:translateX(-50%);display:none;padding:12px 26px;border-radius:999px;border:2px solid #3ef0ff;background:rgba(6,16,30,.75);
  font-weight:900;letter-spacing:.24em;font-size:max(12px,calc(var(--u)*.18));color:#fff;text-shadow:0 0 12px #3ef0ff;box-shadow:0 0 24px rgba(62,240,255,.5);animation:tcBlink 1s ease-in-out infinite alternate;white-space:nowrap}
.tc.gate .tc-gate{display:block}
.tc-toast{position:absolute;left:50%;top:max(150px,calc(var(--u)*2));transform:translateX(-50%);padding:8px 20px;border-radius:999px;background:rgba(6,16,30,.8);border:1px solid rgba(62,240,255,.5);
  font-weight:800;letter-spacing:.2em;font-size:max(11px,calc(var(--u)*.16));opacity:0;transition:opacity .3s;white-space:nowrap}
.tc-toast.on{opacity:1}
@keyframes tcBlink{from{opacity:1}to{opacity:.45}}
@keyframes tcPop{0%{transform:scale(1.3)}100%{transform:scale(1)}}
/* ---- HUD: move what the thumbs would cover, drop keyboard-only hints ---- */
html.hb-touch .hb .gauge{right:max(22px,env(safe-area-inset-right));bottom:auto;top:178px;scale:.8;transform-origin:100% 0} /* scale, not transform: the wall-hit shake animates transform. Bottom corners are thumbs; bottom centre is the bike. */
html.hb-touch .hb.tt .gauge{top:192px}
html.hb-touch .hb{left:env(safe-area-inset-left);right:env(safe-area-inset-right)} /* iPhone notch: panels are offset from the safe box */
html.hb-touch .hb .map{left:max(26px,env(safe-area-inset-left));top:246px;bottom:auto;width:150px;height:150px}
html.hb-touch .hb.tt .map{top:84px}
html.hb-touch .hb .dash,html.hb-touch .hb .help,html.hb-touch .hb .abil .key{display:none!important}
html.hb-touch .hb .cdhint{font-size:0}
html.hb-touch .hb .cdhint kbd,html.hb-touch .hb .btn kbd,html.hb-touch .hb [data-k="padhint"]{display:none}
html.hb-touch .hb .cdhint::after{content:"TAP BOOST AS THE LIGHTS GO OUT";font-size:15px}
`,ke=Math.PI/180,Ae=`hb.steer`,je=()=>typeof DeviceOrientationEvent<`u`;function Me(){let e=null;try{e=localStorage.getItem(Ae)}catch{}return e===`tilt`||e===`touch`?e:je()?`tilt`:`touch`}async function Ne(){if(!je())return`none`;let e=DeviceOrientationEvent.requestPermission;if(typeof e!=`function`)return`granted`;try{return await e.call(DeviceOrientationEvent)===`granted`?`granted`:`denied`}catch{return`denied`}}var Pe=3;function Fe(){let e=null,t=null,n=null,r=0,i=0,a=0,o=0,s=!1,c=`unknown`;function l(t){if(t.beta==null||t.gamma==null)return;let n=t.beta*ke,i=t.gamma*ke,a=Math.sin(i)*Math.cos(n),o=-Math.sin(n);Math.hypot(a,o)<.3||(e=[a,o],r=performance.now(),s=!0,c===`unknown`&&(c=`granted`))}addEventListener(`deviceorientation`,l);let u=([e,t])=>{let n=Math.hypot(e,t)||1;return[e/n,t/n]};return{get permission(){return c},set permission(e){c=e},get seen(){return s},get live(){return performance.now()-r<700},get roll(){return a},calibrate(){t&&(n=u(t))},read(r){if(!e)return 0;let s=1-Math.exp(-r/.045);t=t?[t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]:e.slice(),n||=u(t);let[c,l]=u(t);a=Math.atan2(n[0]*l-n[1]*c,n[0]*c+n[1]*l)/ke,Math.abs(a)>70?(i+=r)>.6&&(n=[c,l],i=0):i=0;let d=Math.min(1,Math.max(0,(Math.abs(a)-Pe)/22));return o=Math.sign(a)*d**1.3,o}}}var Ie=`
.hb{position:absolute;inset:0;font-family:"SF Pro Display",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#eafcff;
  --c:#3ef0ff;--c2:#ff3d8b;--gold:#ffd23e;text-shadow:0 0 8px rgba(62,240,255,.3);user-select:none;pointer-events:none}
.hb .num{font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;font-variant-numeric:tabular-nums}
.hb .panel{position:absolute;background:linear-gradient(135deg,rgba(6,18,30,.72),rgba(6,12,24,.4));
  border:1px solid rgba(62,240,255,.3);box-shadow:0 0 18px rgba(62,240,255,.1),inset 0 0 20px rgba(62,240,255,.05);
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.hb .lbl{font-size:11px;letter-spacing:.26em;color:rgba(190,240,255,.7);font-weight:700}
/* position */
.hb .pos{left:26px;top:22px;padding:8px 26px 10px 18px;clip-path:polygon(0 0,100% 0,calc(100% - 16px) 100%,0 100%)}
.hb .pos .big{font-size:72px;font-weight:800;line-height:.95;letter-spacing:-2px;color:#fff;text-shadow:0 0 18px var(--c)}
.hb .pos .sfx{font-size:24px;font-weight:800;vertical-align:top;color:var(--c);margin-left:2px}
.hb .pos .of{font-size:24px;font-weight:700;color:rgba(200,245,255,.65);margin-left:6px}
.hb .lap{left:26px;top:134px;padding:6px 22px 6px 16px;font-size:20px;font-weight:800;letter-spacing:.1em;clip-path:polygon(0 0,100% 0,calc(100% - 10px) 100%,0 100%)}
.hb .lap .lbl{font-size:11px;margin-right:6px}
.hb .lap.final{color:var(--c2);border-color:var(--c2);animation:hbBlink .7s ease-in-out infinite alternate}
/* times */
.hb .times{right:26px;top:22px;min-width:230px;padding:8px 18px 10px;text-align:right;clip-path:polygon(14px 0,100% 0,100% 100%,0 100%)}
.hb .times .t{font-size:34px;font-weight:700;color:#fff;line-height:1.1}
.hb .times .row{font-size:14px;margin-top:3px;color:rgba(210,245,255,.8);display:flex;justify-content:space-between;gap:16px}
.hb .times .row b{color:var(--c);font-weight:700}
.hb .times .best b{color:var(--gold)}
.hb .times .split{height:22px;margin-top:5px;font-size:20px;font-weight:800;opacity:0;transition:opacity .3s}
.hb .times .split.show{opacity:1}.hb .split.up{color:#5dff9a;text-shadow:0 0 12px #2bff88}.hb .split.dn{color:#ff5470;text-shadow:0 0 12px #ff2050}
.hb.tt .times .best{font-size:24px;margin-top:6px}.hb.tt .times .best b{font-size:28px}
.hb.tt .pos{display:none}.hb.tt .lap{top:22px}
/* ability */
.hb .abil{position:absolute;left:50%;top:18px;width:104px;height:104px;transform:translateX(-50%)}
.hb .abil .slot{position:absolute;inset:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;
  clip-path:polygon(14px 0,calc(100% - 14px) 0,100% 14px,100% calc(100% - 14px),calc(100% - 14px) 100%,14px 100%,0 calc(100% - 14px),0 14px);
  background:linear-gradient(135deg,rgba(6,18,30,.75),rgba(6,12,24,.45));border:1px solid rgba(62,240,255,.3)}
.hb .abil svg.ic{width:42px;height:42px;filter:drop-shadow(0 0 6px currentColor)}
.hb .abil .nm{font-size:10px;font-weight:800;letter-spacing:.18em;margin-top:3px}
.hb .abil svg.ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.hb .abil .key{position:absolute;left:50%;bottom:-14px;transform:translateX(-50%);font-size:10px;letter-spacing:.2em;padding:1px 8px;border:1px solid rgba(255,255,255,.4);border-radius:3px;background:rgba(0,0,0,.5);white-space:nowrap}
.hb .abil.empty .slot{opacity:.4}.hb .abil.empty .key,.hb .abil.act .key{display:none}
.hb .abil.got .slot{animation:hbPop .35s ease-out}
.hb .abil.act .slot{box-shadow:inset 0 0 18px currentColor}
.hb .dash{left:50%;top:150px;transform:translateX(-50%);padding:0;border:none;background:none;box-shadow:none;backdrop-filter:none;-webkit-backdrop-filter:none;display:flex;align-items:center;gap:8px;white-space:nowrap}
.hb .dash .pip{width:72px;height:6px;background:rgba(255,255,255,.12);border:1px solid rgba(62,240,255,.3);transform:skewX(-20deg);position:relative;overflow:hidden}
.hb .dash .pip i{position:absolute;inset:0;background:var(--c);box-shadow:0 0 8px var(--c);transform-origin:left}
.hb .dash.ready .pip i{background:#7dffb0;box-shadow:0 0 10px #2bff88}
/* gauge */
.hb .gauge{right:22px;bottom:20px;width:260px;height:214px;border:none;background:none;box-shadow:none;backdrop-filter:none;-webkit-backdrop-filter:none}
.hb .gauge>svg{position:absolute;left:0;top:0;width:260px;height:190px;overflow:visible}
.hb .gauge .spd{position:absolute;left:0;right:0;top:58px;text-align:center;font-size:64px;font-weight:800;color:#fff;line-height:1;text-shadow:0 0 16px var(--c)}
.hb .gauge .u{position:absolute;left:0;right:0;top:124px;text-align:center}
.hb .gauge.burn .spd{text-shadow:0 0 20px #ff8a3e,0 0 40px #ff3d8b}
.hb .draft{position:absolute;left:0;right:0;top:-12px;text-align:center;font-size:12px;font-weight:800;letter-spacing:.3em;color:rgba(190,240,255,.28);transition:color .15s,text-shadow .15s}
.hb .draft.on{color:#b6ff5d;text-shadow:0 0 14px #7dff2b}
.hb .meter{position:absolute;left:30px;right:30px;bottom:6px;height:12px;background:rgba(255,255,255,.1);border:1px solid rgba(62,240,255,.35);transform:skewX(-20deg)}
.hb .meter i{position:absolute;left:0;top:0;bottom:0;width:0;background:linear-gradient(90deg,#3ef0ff,#b46bff);box-shadow:0 0 10px #3ef0ff}
.hb .meter.burn i{background:linear-gradient(90deg,#ffb23e,#ff3d8b);box-shadow:0 0 18px #ff8a3e;animation:hbPulse .35s ease-in-out infinite alternate}
.hb .meter.low i{background:linear-gradient(90deg,#ff3d5a,#ff8a3e)}
.hb .meter.pad{animation:hbPad .5s ease-out}
.hb .meter .ml{position:absolute;left:0;top:-17px;transform:skewX(20deg);font-size:10px;letter-spacing:.25em;color:rgba(190,240,255,.75);font-weight:700}
/* map */
.hb .map{left:22px;bottom:22px;width:200px;height:200px;border-radius:50%;padding:0;overflow:hidden}
.hb .map canvas{width:100%;height:100%;display:block}
/* centre */
.hb .center{position:absolute;left:0;right:0;top:34%;text-align:center}
.hb .cd{font-size:170px;font-weight:900;color:#fff;letter-spacing:-4px;text-shadow:0 0 30px var(--c),0 0 70px var(--c);opacity:0}
.hb .cd.go{color:#7dffb0;text-shadow:0 0 30px #2bff88,0 0 80px #2bff88}
.hb .cd.anim{animation:hbCount .9s ease-out forwards}
.hb .msg{position:absolute;left:0;right:0;top:25%;text-align:center;font-size:32px;font-weight:900;letter-spacing:.22em;opacity:0;transition:opacity .25s;color:#fff;text-shadow:0 0 18px var(--c)}
.hb .msg.show{opacity:1;animation:hbMsg .35s ease-out}.hb .msg.bad{color:#ff5470;text-shadow:0 0 18px #ff2050}.hb .msg.good{color:#8dffcf;text-shadow:0 0 18px #2bffa0}
.hb .msg.gold{color:var(--gold);text-shadow:0 0 20px #ff9a1e}.hb .msg.sm{font-size:22px}
.hb .wrong{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);font-size:44px;font-weight:900;letter-spacing:.22em;color:#ff4060;text-shadow:0 0 20px #ff2050;display:none;animation:hbBlink .5s steps(2) infinite}
.hb .help{left:50%;bottom:26px;transform:translateX(-50%);padding:9px 14px 9px 18px;transition:opacity 1.2s;white-space:nowrap;pointer-events:auto}
.hb .help .row{display:flex;gap:18px;font-size:13px;align-items:center}
.hb .help kbd{font:700 11px ui-monospace,Menlo,monospace;border:1px solid rgba(255,255,255,.55);border-bottom-width:2px;border-radius:4px;padding:1px 6px;margin-right:5px;background:rgba(255,255,255,.08)}
.hb .help .x{cursor:pointer;font-size:16px;opacity:.7;padding:0 4px}.hb .help .x:hover{opacity:1}
.hb .help.card{bottom:60px;padding:12px 16px 12px 20px}.hb .help.card .row{font-size:14px}
.hb .flash{position:absolute;inset:0;background:radial-gradient(ellipse at center,transparent 55%,rgba(255,40,70,.36));opacity:0;transition:opacity .4s}
/* results */
.hb .res{left:50%;top:50%;transform:translate(-50%,-50%);min-width:600px;padding:26px 34px 22px;display:none;pointer-events:auto;background:linear-gradient(135deg,rgba(4,12,24,.92),rgba(4,8,18,.85));box-shadow:0 0 0 100vmax rgba(0,0,0,.4),0 0 30px rgba(62,240,255,.2);
  clip-path:polygon(20px 0,100% 0,100% calc(100% - 20px),calc(100% - 20px) 100%,0 100%,0 20px)}
.hb .res h1{margin:0 0 4px;font-size:36px;font-weight:900;letter-spacing:.18em;color:#fff;text-shadow:0 0 20px var(--c)}
.hb .res .sub{margin-bottom:14px}
.hb .res table{width:100%;border-collapse:collapse;font-size:17px}
.hb .res td{padding:6px 8px;border-top:1px solid rgba(62,240,255,.15)}
.hb .res td.p{font-weight:900;width:36px;color:var(--c)}.hb .res td.t{text-align:right;white-space:nowrap}
.hb .res td.bk{font-size:12px;letter-spacing:.14em;color:rgba(190,240,255,.65);text-transform:uppercase}
.hb .res tr.me td{background:rgba(62,240,255,.14);font-weight:800}
.hb .res .dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:10px;box-shadow:0 0 8px currentColor;background:currentColor}
.hb .btns{display:flex;gap:12px;margin-top:20px;justify-content:center}
.hb .btn{pointer-events:auto;cursor:pointer;font:800 15px "SF Pro Display",system-ui,sans-serif;letter-spacing:.18em;color:#dff8ff;padding:11px 20px;
  background:rgba(255,255,255,.06);border:1px solid rgba(62,240,255,.45);transform:skewX(-12deg);transition:all .15s;text-shadow:none}
.hb .btn>span{display:inline-block;transform:skewX(12deg)}
.hb .btn kbd{font:700 11px ui-monospace,Menlo,monospace;border:1px solid rgba(255,255,255,.5);border-radius:3px;padding:0 5px;margin-left:8px;opacity:.8}
.hb .btn:hover,.hb .btn.pri{background:linear-gradient(90deg,#3ef0ff,#b46bff);color:#041018;border-color:transparent;box-shadow:0 0 18px rgba(62,240,255,.5)}
.hb .btn.pri:hover{filter:brightness(1.15)}
.hb .btn:hover kbd,.hb .btn.pri kbd{border-color:rgba(0,0,0,.5)}
.hb .quit{left:50%;top:40%;transform:translate(-50%,-50%);padding:22px 30px;display:none;text-align:center;pointer-events:auto;
  clip-path:polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px)}
.hb .quit h2{margin:0 0 6px;font-size:26px;font-weight:900;letter-spacing:.22em;color:#fff}
.hb .quit .btns{margin-top:16px}
@keyframes hbCount{0%{opacity:0;transform:scale(2.2)}18%{opacity:1;transform:scale(1)}75%{opacity:1;transform:scale(.92)}100%{opacity:0;transform:scale(.8)}}
@keyframes hbPop{0%{transform:scale(1.35)}100%{transform:scale(1)}}
@keyframes hbMsg{0%{transform:scale(1.3);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes hbBlink{from{opacity:1}to{opacity:.35}}
@keyframes hbPulse{from{filter:brightness(1)}to{filter:brightness(1.6)}}
@keyframes hbPad{0%{box-shadow:0 0 30px 6px #b6ff5d;border-color:#b6ff5d}100%{box-shadow:none}}
/* ---- feel pass: drift ring, place punch, gap, edge glow, hit shake, countdown, results side ---- */
.hb .drift{position:absolute;left:50%;top:63%;width:150px;height:150px;margin:-75px 0 0 -75px;opacity:0;transition:opacity .15s;filter:drop-shadow(0 0 6px rgba(0,0,0,.6))}
.hb .drift.on{opacity:1}
.hb .drift .dbg{stroke:rgba(255,255,255,.14)}
.hb .drift circle:not(.dbg){stroke:#5aa8ff}
.hb .drift.t1 circle:not(.dbg){stroke:#4aa8ff;filter:drop-shadow(0 0 5px #4aa8ff)}
.hb .drift.t2 circle:not(.dbg){stroke:#ff9a2e;filter:drop-shadow(0 0 6px #ff7a00)}
.hb .drift.t3 circle:not(.dbg){stroke:#d58bff;filter:drop-shadow(0 0 9px #c04bff)}
.hb .drift.pulse{animation:hbRing .35s ease-out}
.hb .pchg{position:absolute;left:250px;top:26px;font:900 58px/1 ui-monospace,Menlo,monospace;letter-spacing:-1px;opacity:0}
.hb .pchg.up{color:#7dffb0;text-shadow:0 0 22px #2bff88}.hb .pchg.dn{color:#ff5470;text-shadow:0 0 22px #ff2050}
.hb .pchg.go{animation:hbPlace 1.6s cubic-bezier(.2,.9,.3,1) forwards}
.hb .pos .big.punch{animation:hbPunch .45s cubic-bezier(.2,1.6,.4,1)}
.hb .pos .big.dn{color:#ff9aa8}
.hb .gap{left:26px;top:178px;padding:5px 16px 5px 14px;display:flex;flex-direction:column;gap:1px;transition:opacity .3s;clip-path:polygon(0 0,100% 0,calc(100% - 8px) 100%,0 100%)}
.hb .gap.off{opacity:0}
.hb .gap .gr{display:flex;justify-content:space-between;gap:18px;font-size:15px}
.hb .gap .gr .lbl{font-size:10px;line-height:20px}
.hb .gap .gr:first-child b{color:#ffcf6a}.hb .gap .gr:last-child b{color:#8ec8ff}
.hb.tt .gap{display:none}
.hb .edge{position:absolute;inset:0;opacity:0;pointer-events:none;box-shadow:inset 0 0 90px 10px rgba(255,150,60,.0)}
.hb .edge.on{animation:hbEdge .55s ease-out}
.hb .edge[data-kind=drift].on{animation-name:hbEdgeD}
.hb .gofx{position:absolute;inset:0;opacity:0;background:radial-gradient(ellipse at center,rgba(255,255,255,.55),rgba(125,255,176,.25) 35%,transparent 70%)}
.hb .gofx.on{animation:hbGo .5s ease-out}
.hb.hit .pos,.hb.hit .lap,.hb.hit .times,.hb.hit .gauge,.hb.hit .map,.hb.hit .gap{animation:hbHit .3s linear}
.hb.hit .flash{opacity:1}
.hb .gauge.max .spd{animation:hbJit .08s linear infinite}
.hb .gauge.burn svg{filter:drop-shadow(0 0 10px #ff8a3e)}
.hb .cd{font-size:200px;line-height:1.1}
.hb .cd.c3{color:#9fe8ff}.hb .cd.c2{color:#ffe08a;text-shadow:0 0 30px #ffb23e,0 0 70px #ff8a1e}.hb .cd.c1{color:#ff9ab8;text-shadow:0 0 30px #ff3d8b,0 0 70px #ff3d8b}
.hb .cd.go{font-size:230px;letter-spacing:6px}
.hb .cd.anim{animation:hbCount2 .95s cubic-bezier(.15,.9,.3,1) forwards}
.hb .cd.go.anim{animation:hbGoBig 1.1s cubic-bezier(.15,.9,.3,1) forwards}
.hb .cdhint{margin-top:6px;font-size:15px;font-weight:800;letter-spacing:.3em;color:rgba(190,240,255,.85);opacity:0;transition:opacity .3s;text-shadow:0 0 8px #000,0 0 14px rgba(0,0,0,.8)}
.hb .cdhint.on{opacity:1;animation:hbBlink 1s ease-in-out infinite alternate}
.hb .cdhint kbd{font:700 12px ui-monospace,Menlo,monospace;border:1px solid rgba(255,255,255,.6);border-radius:3px;padding:1px 7px;margin:0 4px}
.hb .msg.gold{font-size:40px}
.hb .res.wide{min-width:940px}
.hb .resgrid{display:flex;gap:34px;align-items:flex-start}.hb .resgrid>div:first-child{flex:1.35}.hb .resgrid .side{flex:1;min-width:290px;border-left:1px solid rgba(62,240,255,.25);padding-left:30px}
.hb .res .side h2{margin:0 0 2px;font-size:24px;font-weight:900;letter-spacing:.16em;color:#fff;text-shadow:0 0 14px var(--c)}
.hb .res .side td.sn{font-size:15px;font-weight:700;letter-spacing:.06em}.hb .res .side td.t .u{font-size:10px;margin-left:5px;opacity:.6;letter-spacing:.2em}
.hb .res .side tr.pod1 td.p{color:var(--gold)}.hb .res .side tr.pod2 td.p{color:#dfe8f0}.hb .res .side tr.pod3 td.p{color:#e0955a}
.hb .champ{text-align:center;margin-bottom:12px;padding:10px 6px;border:1px solid var(--gold);background:linear-gradient(135deg,rgba(255,210,62,.2),rgba(255,120,30,.08));box-shadow:0 0 22px rgba(255,210,62,.35);animation:hbPop .5s ease-out}
.hb .champ .lbl{color:var(--gold)}.hb .champ .cn{font-size:30px;font-weight:900;letter-spacing:.1em;color:#fff;text-shadow:0 0 18px var(--gold)}.hb .champ .cp{color:var(--gold);font-weight:800}
@keyframes hbRing{0%{transform:scale(1.28)}100%{transform:scale(1)}}
@keyframes hbPlace{0%{opacity:0;transform:scale(2.4) translateX(-20px)}14%{opacity:1;transform:scale(1)}70%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9) translateY(-14px)}}
@keyframes hbPunch{0%{transform:scale(1.55)}100%{transform:scale(1)}}
@keyframes hbEdge{0%{opacity:1;box-shadow:inset 0 0 100px 4px rgba(255,160,60,.34)}100%{opacity:0;box-shadow:inset 0 0 60px 4px rgba(255,160,60,0)}}
@keyframes hbEdgeD{0%{opacity:1;box-shadow:inset 0 0 100px 4px rgba(120,170,255,.34)}100%{opacity:0;box-shadow:inset 0 0 60px 4px rgba(120,170,255,0)}}
@keyframes hbGo{0%{opacity:1}100%{opacity:0}}
@keyframes hbHit{0%{transform:translate(var(--sh,3px),calc(var(--sh,3px)*-.6))}25%{transform:translate(calc(var(--sh,3px)*-.9),calc(var(--sh,3px)*.7))}50%{transform:translate(calc(var(--sh,3px)*.6),calc(var(--sh,3px)*.4))}75%{transform:translate(calc(var(--sh,3px)*-.3),calc(var(--sh,3px)*-.3))}100%{transform:none}}
@keyframes hbJit{0%{transform:translate(1px,0)}50%{transform:translate(-1px,1px)}100%{transform:translate(0,-1px)}}
@keyframes hbCount2{0%{opacity:0;transform:scale(3);filter:blur(8px)}16%{opacity:1;transform:scale(1);filter:blur(0)}70%{opacity:1;transform:scale(.94)}100%{opacity:0;transform:scale(.7)}}
@keyframes hbGoBig{0%{opacity:0;transform:scale(.5)}12%{opacity:1;transform:scale(1.25)}30%{transform:scale(1)}65%{opacity:1;transform:scale(1.05)}100%{opacity:0;transform:scale(2.2)}}
`,Le=(e,t)=>({color:t,svg:`<svg class="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${e}</svg>`}),Re={boost:{name:`BOOST`,...Le(`<path d="M27 4 10 27h12l-3 17 19-25H26z" fill="currentColor" fill-opacity=".25"/>`,`#ffb23e`)},tether:{name:`TETHER`,...Le(`<circle cx="10" cy="38" r="5" fill="currentColor" fill-opacity=".3"/><circle cx="38" cy="10" r="5" fill="currentColor" fill-opacity=".3"/><path d="M14 34c6-2 4-8 10-10s4-8 10-10" stroke-dasharray="3 4"/>`,`#ff3d8b`)},slipstream:{name:`SLIPSTREAM`,...Le(`<path d="M4 14h26c6 0 6-8 0-8M4 24h36c6 0 6 9 0 9M4 34h20c5 0 5 8 0 8"/>`,`#b6ff5d`)},lift:{name:`GRAV LIFT`,...Le(`<path d="M24 6 10 20h9v10h10V20h9z" fill="currentColor" fill-opacity=".25"/><path d="M12 38h24M16 43h16"/>`,`#6ab8ff`)},overdrive:{name:`OVERDRIVE`,...Le(`<circle cx="24" cy="26" r="16"/><path d="M24 26l9-10" stroke-width="4"/><circle cx="24" cy="26" r="3" fill="currentColor"/><path d="M12 40h24" />`,`#ff5a3e`)},dampener:{name:`DAMPENER`,...Le(`<circle cx="24" cy="24" r="6" fill="currentColor" fill-opacity=".3"/><circle cx="24" cy="24" r="13"/><path d="M24 4v7M24 37v7M4 24h7M37 24h7"/>`,`#3ef0ff`)},phase:{name:`PHASE SHIFT`,...Le(`<path d="M12 40V20a12 12 0 0 1 24 0v20l-6-5-6 5-6-5z" fill="currentColor" fill-opacity=".2" stroke-dasharray="4 3"/><circle cx="19" cy="22" r="2" fill="currentColor"/><circle cx="29" cy="22" r="2" fill="currentColor"/>`,`#b46bff`)}};function ze(){let e=new URLSearchParams(location.search).get(`touch`);return e===`1`||e===`0`?e===`1`:matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent)}var Be=(e,t)=>{if(document.getElementById(e))return;let n=document.createElement(`style`);n.id=e,n.textContent=t,document.head.appendChild(n)};function Ve(){let e=document.documentElement;if(e.classList.contains(`hb-touch`))return;e.classList.add(`hb-touch`),Be(`tc-global`,De);for(let e of[`gesturestart`,`gesturechange`,`gestureend`])document.addEventListener(e,e=>e.preventDefault());document.addEventListener(`contextmenu`,e=>e.preventDefault());let t=document.createElement(`div`);t.id=`tc-rot`,t.innerHTML=`<i></i><div>ROTATE TO LANDSCAPE</div>`,document.body.appendChild(t)}function He(){Me()===`tilt`&&addEventListener(`click`,()=>Ne(),{once:!0,capture:!0})}var Ue=(e,t=3)=>`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linejoin="round" stroke-linecap="round">${e}</svg>`,We={boost:Ue(`<path d="M27 4 10 27h12l-3 17 19-25H26z" fill="currentColor" fill-opacity=".3"/>`),drift:Ue(`<path d="M9 40c0-15 9-24 27-24"/><path d="M30 7l8 9-9 8"/><path d="M14 40h6M24 40h6" stroke-opacity=".5"/>`),brake:Ue(`<path d="M24 7v21M14 20l10 11 10-11M11 40h26"/>`),left:Ue(`<path d="M26 10 12 24l14 14M38 10 24 24l14 14"/>`),right:Ue(`<path d="M22 10l14 14-14 14M10 10l14 14-14 14"/>`),pause:Ue(`<path d="M17 12v24M31 12v24" stroke-width="5"/>`),wheel:Ue(`<circle cx="24" cy="25" r="17"/><circle cx="24" cy="25" r="4.5" fill="currentColor" fill-opacity=".4"/><path d="M7 25h12.5M28.5 25H41M24 29.5V42"/><path d="M24 3.5V8" stroke-width="4"/>`)},Ge=(e,t,n)=>Math.max(t,Math.min(n,e));function Ke(){Ve(),Be(`tc-race`,Oe);let e=Me(),t=Fe(),n=performance.now(),r=typeof globalThis.DeviceOrientationEvent?.requestPermission==`function`&&/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent),i=document.createElement(`div`);i.className=`tc tm-tilt`,i.id=`tc`,i.innerHTML=`
    <div class="tc-hint"><em>◀</em>DRAG TO STEER<em>▶</em></div>
    <div class="tc-pad"><i></i><b></b></div>
    <div class="tc-b boost" data-b="boost" role="button">${We.boost}<span>BOOST</span></div>
    <div class="tc-b drift" data-b="drift" role="button">${We.drift}<span>DRIFT</span></div>
    <div class="tc-b brake" data-b="brake" role="button">${We.brake}<span>BRAKE</span></div>
    <div class="tc-b item empty" data-b="item" role="button"><span>ABILITY</span></div>
    <div class="tc-b dash dashL" data-b="dashL" role="button">${We.left}</div>
    <div class="tc-b dash dashR" data-b="dashR" role="button">${We.right}</div>
    <div class="tc-b pause" data-b="pause" role="button">${We.pause}</div>
    <div class="tc-b wheel" data-b="recentre" role="button">${We.wheel}<span>RECENTRE</span></div>
    <div class="tc-gate">TAP TO ENABLE TILT STEERING</div>
    <div class="tc-toast"></div>`,document.body.insertBefore(i,document.getElementById(`hud`));let a=e=>i.querySelector(e),o={pad:a(`.tc-pad`),knob:a(`.tc-pad b`),ring:a(`.tc-pad i`),hint:a(`.tc-hint`),item:a(`.item`),boost:a(`.boost`),dashL:a(`.dashL`),dashR:a(`.dashR`),wheel:a(`.wheel svg`),toast:a(`.tc-toast`)},s=null,c=`tilt`,l=!1,u=0,d=0,f=performance.now(),p=!1,m=0,h={boost:new Set,drift:new Set,brake:new Set},g={rollLeft:!1,rollRight:!1,useItem:!1},_={id:null,ox:0,oy:0,x:0},v=()=>Ge(innerWidth*.08,64,110);function y(e){o.toast.textContent=e,o.toast.classList.add(`on`),m=2.6}function b(){!r||p||t.seen||t.permission===`denied`||t.permission===`granted`||(p=!0,Ne().then(e=>{p=!1,t.permission=e,e===`denied`&&y(`TILT DENIED · TOUCH STEERING`)}))}function x(e,n,r){if(h[e])h[e].add(n),r.classList.add(`on`);else{if(e===`dashL`)g.rollLeft=!0;else if(e===`dashR`)g.rollRight=!0;else if(e===`item`)g.useItem=!0;else if(e===`recentre`)t.calibrate(),y(`TILT CENTRED`);else if(e===`pause`)for(let e of[`keydown`,`keyup`])dispatchEvent(new KeyboardEvent(e,{code:`Escape`,key:`Escape`,bubbles:!0}));r.classList.add(`on`),setTimeout(()=>r.classList.remove(`on`),140)}}function S(e){for(let t in h)h[t].delete(e)&&!h[t].size&&a(`[data-b="${t}"]`).classList.remove(`on`);_.id===e&&(_.id=null,_.x=0,o.pad.classList.remove(`on`))}let C=()=>{for(let e in h)h[e].clear(),a(`[data-b="${e}"]`).classList.remove(`on`);_.id=null,_.x=0,o.pad.classList.remove(`on`)};i.addEventListener(`pointerdown`,e=>{e.preventDefault();let t=e.target.closest(`[data-b]`);t?(t.setPointerCapture?.(e.pointerId),x(t.dataset.b,e.pointerId,t)):c===`touch`&&_.id===null&&e.clientX<innerWidth*.55&&(_.id=e.pointerId,_.ox=e.clientX,_.oy=e.clientY,_.x=0,i.setPointerCapture?.(e.pointerId),o.pad.style.transform=`translate(${_.ox}px,${_.oy}px)`,o.pad.style.setProperty(`--pr`,v()+`px`),o.knob.style.transform=``,o.pad.classList.add(`on`),o.hint.classList.add(`gone`))}),i.addEventListener(`pointermove`,e=>{if(e.pointerId!==_.id)return;let t=v(),n=e.clientX-_.ox;Math.abs(n)>t&&(_.ox+=n-Math.sign(n)*t,n=Math.sign(n)*t,o.pad.style.transform=`translate(${_.ox}px,${_.oy}px)`),_.x=n/t,o.knob.style.transform=`translateX(${n}px)`});for(let e of[`pointerup`,`pointercancel`,`lostpointercapture`])i.addEventListener(e,e=>S(e.pointerId));i.addEventListener(`click`,b),i.addEventListener(`touchend`,b,{passive:!0}),addEventListener(`blur`,C),document.addEventListener(`pointerup`,e=>{!e.isPrimary&&l&&e.target.closest?.(`.hb .quit [data-act], .hb .res [data-act]`)?.click()},!0);let w=e=>{e!==c&&(c=e,i.classList.toggle(`tm-tilt`,e===`tilt`),i.classList.toggle(`tm-touch`,e===`touch`),e===`tilt`&&C())},T=null,E=-1,D=-1,ee=!1;function O(){let n=s?.player,a=n?.item||``;if(a!==T){T=a;let e=a?Re[a]:null;o.item.innerHTML=(e?e.svg:``)+`<span>${e?e.name:`ABILITY`}</span>`,o.item.style.setProperty(`--c`,e?e.color:`#3ef0ff`),o.item.classList.toggle(`empty`,!e),e&&(o.item.classList.remove(`got`),o.item.offsetWidth,o.item.classList.add(`got`))}let l=Math.round(Ge((n?.rollCd||0)/1.8,0,1)*40)/40;l!==E&&(E=l,o.dashL.style.setProperty(`--cd`,l),o.dashR.style.setProperty(`--cd`,l));let u=Math.round(Ge((n?.energy??1)/(n?.energyMax||1),0,1)*50)/50;u!==D&&(D=u,o.boost.style.setProperty(`--en`,u),o.boost.classList.toggle(`low`,u<.2)),c===`tilt`&&(o.wheel.style.transform=`rotate(${Ge(t.roll,-60,60).toFixed(1)}deg)`);let d=e===`tilt`&&r&&!t.seen&&t.permission!==`denied`&&!(s?.state===`race`&&s.time>6);d!==ee&&(ee=d,i.classList.toggle(`gate`,d))}return{mode:()=>c,bind(e){s=e,e.on(`wall`,t=>{t?.racer===e.player&&navigator.vibrate?.(Math.round(25+55*(t.impact??.5)))}),e.on(`boostStart`,t=>{t?.racer===e.player&&navigator.vibrate?.(14)})},read(){let a=performance.now(),p=Math.min(.1,(a-f)/1e3);f=a;let v=s?.state,y=!s||s.autopilot||s.paused||v===`finished`;y!==l&&(l=y,i.classList.toggle(`off`,y),y&&C()),w(e===`tilt`&&t.permission!==`denied`&&(t.seen||!r&&a-n<1500)?`tilt`:`touch`),O(),m>0&&(m-=p)<=0&&o.toast.classList.remove(`on`);let b={steer:0,throttle:0,brake:0,drift:!1,rollLeft:!1,rollRight:!1,useItem:!1,boost:!1};if(y)return b;if(c===`tilt`)v===`countdown`&&t.calibrate(),d=t.read(p);else{let e=Math.abs(_.x),t=e<.08?0:Math.sign(_.x)*((e-.08)/.92)**1.2;d+=(t-d)*(1-Math.exp(-p/.04))}return b.steer=d,u=v===`race`?u+p:0,b.throttle=v===`countdown`?+!!h.boost.size:(u>.15||h.boost.size)&&!h.brake.size?1:0,b.brake=+!!h.brake.size,b.drift=h.drift.size>0,b.boost=h.boost.size>0,b.rollLeft=g.rollLeft,b.rollRight=g.rollRight,b.useItem=g.useItem,g.rollLeft=g.rollRight=g.useItem=!1,b}}}var U={maxSpeed:92,accel:34,brake:60,drag:.12,boostMul:1.4,boostAccel:70,boostKick:4,turnRate:2.3,turnRateHigh:1.15,driftTurnMul:1.65,driftChargeRate:.9,driftChargeMax:1.65,driftTiers:[.55,1.1,1.65],driftBoost:[.6,1,1.5],headingDamp:2.2,wallSpeedLoss:.35,grindImpact:.2,grindLoss:.1,rollTime:.45,rollDash:9,rollCooldown:1.8,hoverHeight:1.1,energyMax:100,energyBurn:38,energyRegen:2.2,energyBoostMul:1.22,draftRange:38,draftWidth:2.6,draftTop:.08,draftAccel:14};function qe({id:e,name:t,isPlayer:n=!1,s:r=0,x:i=0,color:a=16777215,bike:o=`mantis`}){let s=ce(o);return{id:e,name:t,isPlayer:n,color:a,bike:s.key,mul:{draft:1,drift:1,...s.mul},energy:U.energyMax*s.mul.energy,energyMax:U.energyMax*s.mul.energy,burning:!1,draft:0,draftMul:1,overdriveT:0,gripT:0,phaseT:0,liftT:0,s:r,x:i,speed:0,heading:0,steerVis:0,h:U.hoverHeight,bob:Math.random()*6,lap:0,raceDist:0,place:1,finished:!1,finishTime:0,lastLapTime:0,bestLap:1/0,lapStart:0,boostT:0,driftT:0,driftCharge:0,drifting:!1,driftTier:0,grinding:!1,bogT:0,_wasBoost:!1,_boostKind:`pad`,_grindT:0,_grindSide:0,rollT:0,rollDir:0,rollCd:0,stunT:0,slowT:0,shieldT:0,invulnT:0,wallHitT:0,item:null,mesh:null,events:[]}}var Je=(e,t,n)=>Math.max(t,Math.min(n,e));function Ye(e,t,n,r,i=0){let a=U,o=r.width/2-1;for(let t of[`boostT`,`stunT`,`slowT`,`shieldT`,`invulnT`,`rollCd`,`wallHitT`,`overdriveT`,`gripT`,`phaseT`,`liftT`,`bogT`])e[t]=Math.max(0,(e[t]||0)-n);let s=e.mul||{top:1,accel:1,turn:1,grip:1,mass:1,regen:1,dash:1,boost:1,draft:1,drift:1},c=e.stunT>0,l=c?0:Je(t.steer||0,-1,1),u=c?0:Je(t.throttle??0,0,1),d=c?0:Je(t.brake??0,0,1);t.perfectStart&&(e.boostT=Math.max(e.boostT,.9),e.events.push({type:`perfectStart`})),t.bog&&(e.bogT=.5);let f=e.energyMax??a.energyMax;e.burning=!c&&!!t.boost&&(e.energy??0)>.5&&u>.1,e.energy=e.burning?Math.max(0,e.energy-a.energyBurn/s.boost*n):Math.min(f,(e.energy??f)+a.energyRegen*s.regen*n);let p=(e.draft||0)*s.draft*(e.draftMul||1),m=a.maxSpeed*s.top*(e.slowT>0?.6:1)*(e.boostT>0?a.boostMul:1)*(e.burning?a.energyBoostMul:1)*(e.overdriveT>0?1.15:1)*(1+a.draftTop*p)*(e.topMul??1);c&&(m*=.35);let h=u*a.accel*s.accel*(e.bogT>0?.3:1)*(1-e.speed/(m+.001))+(e.boostT>0||e.burning?a.boostAccel*Math.max(0,1-e.speed/m):0)+a.draftAccel*p*Math.max(0,1-e.speed/m);if(h-=d*a.brake*(e.drifting?.25:1),h-=a.drag*e.speed*.1,e.speed+=h*n,e.speed>m&&(e.speed+=(m-e.speed)*Math.min(1,n*(c?3:1.5))),e.speed=Math.max(0,e.speed),(t.drift||d>.3)&&Math.abs(l)>.3&&e.speed>35){e.drifting||e.events.push({type:`driftStart`,dir:Math.sign(l)}),e.drifting=!0,e.driftT+=n,e.driftCharge=Math.min(a.driftChargeMax,e.driftCharge+a.driftChargeRate*s.drift*n);let t=e.driftCharge>=a.driftTiers[2]?3:e.driftCharge>=a.driftTiers[1]?2:+(e.driftCharge>=a.driftTiers[0]);t>e.driftTier&&(e.driftTier=t,e.events.push({type:`driftTier`,tier:t}))}else if(e.drifting){if(e.drifting=!1,e.driftTier>0){let t=a.driftBoost[e.driftTier-1];e._wasBoost&&e.events.push({type:`boostEnd`}),e.boostT=Math.max(e.boostT,t),e._boostKind=`drift`,e._wasBoost=!0,e.events.push({type:`boostStart`,kind:`drift`,power:t},{type:`driftBoost`,power:t,tier:e.driftTier}),e.speed=Math.min(m,e.speed+a.boostKick)}e.driftT=0,e.driftCharge=0,e.driftTier=0}let g=e.speed/a.maxSpeed,_=e.gripT>0?1.35:1,v=l*(a.turnRate+(a.turnRateHigh-a.turnRate)*Je(g,0,1))*(e.drifting?a.driftTurnMul:1)*s.turn*(e.overdriveT>0?.85:1)*_;c&&(v=7*Math.sign(e.rollDir||1));let y=r.curvatureAt(e.s),b=e.speed*Math.cos(e.heading)*n;e.heading+=v*n-y*b,!l&&!c&&(e.heading-=e.heading*Math.min(1,a.headingDamp*n*.35)),e.heading=Je(e.heading,-1.2,1.2),c&&(e.heading=Math.sin(i*12)*.8),!c&&e.rollCd<=0&&(t.rollLeft||t.rollRight)&&(e.rollDir=t.rollLeft?-1:1,e.rollT=a.rollTime,e.rollCd=a.rollCooldown,e.events.push({type:`roll`,dir:e.rollDir}));let x=0;e.rollT>0&&(e.rollT=Math.max(0,e.rollT-n),x=e.rollDir*(a.rollDash*s.dash/a.rollTime)*n),e.s=r.wrap(e.s+b),e.raceDist+=b;let S=e.drifting?.82+.1*(s.grip-1):1;e.x+=e.speed*Math.sin(e.heading)*n*S+x;let C=!1;if(Math.abs(e.x)>o){let t=Math.sign(e.x),r=Math.abs(Math.sin(e.heading));e.x=t*o;let i=e.gripT>0?.3:1;r<a.grindImpact&&!c?(C=!0,e.grinding||(e.grinding=!0,e.events.push({type:`grind`,side:t,on:!0})),e._grindT=.1,e._grindSide=t,e.heading-=e.heading*Math.min(1,n/.15*.7),e.speed*=1-a.grindLoss*i*n):(e.heading=-e.heading*.45,e.speed*=1-a.wallSpeedLoss*Je(r,0,1)*i,e.wallHitT<=0&&(e.events.push({type:`wall`,side:t,impact:r}),e.wallHitT=.25),e._grindT=0)}C||(e._grindT=Math.max(0,e._grindT-n),e.grinding&&e._grindT<=0&&(e.grinding=!1,e.events.push({type:`grind`,side:e._grindSide,on:!1})));let w=e.boostT>0||e.burning;if(w&&!e._wasBoost){let t=e.burning?`burn`:`pad`;e._boostKind=t,e.events.push({type:`boostStart`,kind:t,power:e.burning?1:e.boostT}),e.speed=Math.min(m,e.speed+a.boostKick)}else!w&&e._wasBoost&&e.events.push({type:`boostEnd`,kind:e._boostKind});e._wasBoost=w;let T=e.lap;e.lap=Math.max(e.lap,Math.floor(e.raceDist/r.length)),e.lap>T&&(e.lastLapTime=i-e.lapStart,e.lapStart=i,e.bestLap=Math.min(e.bestLap,e.lastLapTime),e.events.push({type:`lap`,lap:e.lap})),e.steerVis+=(l-e.steerVis)*Math.min(1,n*6),e.bob+=n*(2+g*4);let E=e.liftT>0?Math.sin(Math.PI*Math.min(1,e.liftT/1.2))*4.5:0;e.h=a.hoverHeight+Math.sin(e.bob)*.12+E}function Xe(e,t){let n=U;for(let r of e){let i=0;for(let a of e){if(a===r||a.away||a.phaseT>0)continue;let e=t.delta(r.s,a.s);e<3||e>n.draftRange||Math.abs(a.x-r.x)>n.draftWidth||(i=Math.max(i,1-(e-3)/(n.draftRange-3)))}r.draft+=(i-r.draft)*.08}}var W=(...e)=>new L(...e),Ze=e=>e.index?e.toNonIndexed():e;function Qe(t){return ue(t.map(t=>{t=Ze(t);for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`].includes(e)||t.deleteAttribute(e);return t.attributes.uv||t.setAttribute(`uv`,new e(new Float32Array(t.attributes.position.count*2),2)),t}))}var $e=e=>(e=Ze(e),e.deleteAttribute(`normal`),e.computeVertexNormals(),e);function G(e,t=[0,0,0],n=[0,0,0],r=[1,1,1]){return e.applyMatrix4(new O().compose(W(...t),new S().setFromEuler(new ne(...n)),W(...r))),e}function et(e){e=Ze(e).clone();for(let t of Object.keys(e.attributes)){let n=e.attributes[t],r=n.itemSize,i=n.array;if(t===`position`||t===`normal`)for(let e=0;e<n.count;e++)i[e*r]=-i[e*r];for(let e=0;e<n.count;e+=3)for(let t=0;t<r;t++){let n=(e+1)*r+t,a=(e+2)*r+t,o=i[n];i[n]=i[a],i[a]=o}}return e}function K(e,t=24){let n=new y(e.map(([e,t])=>new M(e,t)),t);return n.rotateX(Math.PI/2),n}var tt=(e,t,n,r=16,i=!1,a=[0,0,0])=>{let o=new E(e,t,n,r,1,i);return o.rotateX(Math.PI/2),G(o,a)},q=(e,t,n,r=0,i=0,a=0)=>new m(e,t,n).translate(r,i,a),J=(e,t,n=28,r=8,i=[0,0,0],a=[0,0,0])=>G(new d(e,t,r,n),i,a),nt=(e,t=[0,0,0],n=[1,1,1],r=20,i=14)=>G(new P(e,r,i),t,[0,0,0],n);function rt(e,t,n,r=8){let i=W(...t),a=W(...n),o=i.distanceTo(a),s=new _(e,Math.max(.001,o),4,r);return s.applyQuaternion(new S().setFromUnitVectors(W(0,1,0),a.clone().sub(i).normalize())),s.translate((t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2)}var Y=(e,t,r=8,i=24)=>new n(new se(e.map(e=>W(...e))),i,t,r,!1);function it(e,t,n=0,r=.015){let i=new I(e.map(([e,t])=>new M(e,-t))),a=new h(i,{depth:t,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:3});return a.rotateX(-Math.PI/2),a.translate(0,n-t/2,0)}var X=(e,t,n,r)=>it([...e,...e.slice().reverse().map(([e,t])=>[-e,t])].filter((e,t,n)=>t===0||e[0]!==n[t-1][0]||e[1]!==n[t-1][1]),t,n,r);function at(e,t,n=0,r=.01){let i=new I(e.map(([e,t])=>new M(e,t))),a=new h(i,{depth:t,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:1});return a.translate(0,0,-t/2),a.rotateY(-Math.PI/2),a.translate(n,0,0)}function ot(t,n,r,i){t=Ze(t);let a=t.attributes.position.count,o=new Float32Array(a*3);for(let e=0;e<a;e++)o[e*3]=n,o[e*3+1]=r,o[e*3+2]=i;t.setAttribute(`color`,new e(o,3));for(let e of Object.keys(t.attributes))[`position`,`color`].includes(e)||t.deleteAttribute(e);return t}var st;function ct(){if(st)return st;let e=(e,t,n)=>{let r=document.createElement(`canvas`);return r.width=e,r.height=t,n(r.getContext(`2d`)),new u(r)},t=e(64,64,e=>{for(let t=0;t<64;t+=8)for(let n=0;n<64;n+=8){let r=(n+t)/8%2,i=e.createLinearGradient(n,t,n+(r?8:0),t+(r?0:8));i.addColorStop(0,`#1a1c20`),i.addColorStop(.5,`#34373d`),i.addColorStop(1,`#16181b`),e.fillStyle=i,e.fillRect(n,t,8,8)}});t.wrapS=t.wrapT=x,t.repeat.set(4,4),t.colorSpace=g;let n=e(128,128,e=>{let t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,`rgba(255,255,255,1)`),t.addColorStop(.35,`rgba(255,255,255,0.45)`),t.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=t,e.fillRect(0,0,128,128)}),r=e(32,128,e=>{let t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,`rgba(255,255,255,1)`),t.addColorStop(.25,`rgba(255,255,255,0.7)`),t.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=t,e.fillRect(0,0,32,128);let n=e.createLinearGradient(0,0,32,0);n.addColorStop(0,`rgba(0,0,0,1)`),n.addColorStop(.5,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),e.globalCompositeOperation=`destination-out`,e.fillStyle=n,e.fillRect(0,0,32,128)}),i=e(64,64,e=>{e.fillStyle=`#0a1a3c`,e.fillRect(0,0,64,64);let t=e.createLinearGradient(0,0,64,64);t.addColorStop(0,`#2a5fd0`),t.addColorStop(1,`#0c2260`),e.fillStyle=t,e.fillRect(3,3,58,58),e.strokeStyle=`#9fc4ff`,e.lineWidth=1.5,e.beginPath(),e.moveTo(32,3),e.lineTo(32,61),e.moveTo(3,32),e.lineTo(61,32),e.stroke()});i.wrapS=i.wrapT=x,i.colorSpace=g,i.repeat.set(2,4);let a=e(128,128,e=>{e.fillStyle=`#bfc4cc`,e.fillRect(0,0,128,128);for(let t=0;t<700;t++){let t=Math.random()*128,n=150+Math.random()*100|0;e.fillStyle=`rgba(${n},${n},${n+4},0.35)`,e.fillRect(Math.random()*128,t,20+Math.random()*90,1)}});a.wrapS=a.wrapT=x,a.colorSpace=g;let o=e(512,256,e=>{let t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,`#202838`),t.addColorStop(.5,`#6d7a90`),t.addColorStop(.52,`#1c1e24`),t.addColorStop(1,`#0a0b0e`),e.fillStyle=t,e.fillRect(0,0,512,256),e.fillStyle=`#ffffff`;for(let[t,n,r,i]of[[60,40,90,40],[250,20,120,30],[400,50,70,50],[160,90,40,18]])e.fillRect(t,n,r,i);e.fillStyle=`#ffb070`,e.fillRect(330,100,60,10)});return o.mapping=303,o.colorSpace=g,st={carbon:t,radial:n,flame:r,cells:i,brushed:a,env:o}}var lt=class{constructor(e,t,{paint:n={},number:r=7}={}){let i=ct();this.col=new b(e),this.accent=new b(t??e);let a=e=>e.r*.3+e.g*.6+e.b*.1;this.tint=a(this.accent)>a(this.col)?this.accent:this.col,this.M={paint:new re({color:this.col,metalness:.5,roughness:.3,clearcoat:1,clearcoatRoughness:.08,...n}),accent:new re({color:this.accent,metalness:.4,roughness:.32,clearcoat:.8,clearcoatRoughness:.1}),carbon:new j({color:7106680,map:i.carbon,metalness:.4,roughness:.35}),metal:new j({color:12896978,map:i.brushed,roughnessMap:i.brushed,metalness:1,roughness:.55}),visor:new re({color:16777215,metalness:1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2.2}),decal:new j({map:ft(r,this.col,this.accent),transparent:!0,roughness:.45,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),glass:new re({color:661538,metalness:.2,roughness:.05,transparent:!0,opacity:.72,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.5}),suit:new j({color:3817292,metalness:.2,roughness:.5}),glow:new N({vertexColors:!0,color:16777215,toneMapped:!1})},this.M.visor.color.copy(this.tint).multiplyScalar(.85),this.L={}}add(e,...t){(this.L[e]||=[]).push(...t.flat())}glow(e,t,n,r){this.add(`glow`,ot(e,t,n,r))}mount(e){let t={};for(let n of Object.keys(this.L)){let r=new T(Qe(this.L[n]),this.M[n]);r.castShadow=r.receiveShadow=n!==`glass`&&n!==`glow`&&n!==`decal`,n===`decal`&&(r.renderOrder=1),e.add(r),t[n]=r}return t}};function ut(e,t){let{hip:n,sh:r,head:i,hand:a,foot:o,tilt:s=0,pr:c=.17}=t,l=c/.17,u=(e,t,n)=>e.map((e,r)=>e+(t[r]-e)*n);e.add(`suit`,rt(c*.95,n,u(n,r,.8)),rt(c*.5,r,[i[0],i[1]-.04*l,i[2]-.05]));let d=u(n,r,.72);e.add(`paint`,G(new P(c*1.2,16,10),[d[0],d[1]+.02,d[2]+c*.35],[0,0,0],[1.05,.75,.85])),e.add(`carbon`,G(new P(c*1.1,14,8),[d[0],d[1]+.02,d[2]-c*.8],[0,0,0],[1,.75,.7]),G(q(c*2.2,.04*l,c*1.8),u(n,r,.12))),e.add(`accent`,G(q(.05*l,.02,c*1.4),[d[0],d[1]+.12*l,d[2]+c*.45]));for(let i of[-1,1]){let s=[i*.21*l,r[1]-.02,r[2]],u=[i*a[0],a[1],a[2]],d=[i*.11*l,n[1],n[2]],f=[i*o[0],o[1],o[2]],p=[(s[0]+u[0])/2+i*.08,(s[1]+u[1])/2-.04,(s[2]+u[2])/2-.07],m=[(d[0]+f[0])/2+i*.06,(d[1]+f[1])/2+(t.kneeUp??.12),(d[2]+f[2])/2+(t.kneeFwd??.12)];e.add(`suit`,rt(c*.4,s,p),rt(c*.55,d,m)),e.add(`carbon`,rt(c*.36,p,u,6),rt(c*.44,m,f,6)),e.add(`paint`,G(new P(c*.55,12,8),[s[0]+i*.03,s[1]-.04*l,s[2]],[0,0,i*.4],[1.2,.55,1.1])),e.add(`carbon`,G(new P(c*.4,8,6),u,[0,0,0],[1,.85,1.1])),e.add(`accent`,G(new P(c*.38,8,6),m,[0,0,0],[1,1,.7]),G(q(c*.6,c*.3,c*1.2),[f[0],f[1]-.02,f[2]+c*.4]))}let f=new P(.2*l,22,16);if(G(f,i,[s,0,0],[.95,1,1.15]),e.add(`paint`,f),e.add(`accent`,G(q(.025*l,.04*l,.3*l),[0,.18*l,-.02*l]).applyMatrix4(new O().makeRotationX(s).setPosition(...i))),t.visor!==!1){let t=new P(.208*l,20,10,Math.PI/2-Math.PI*.32,Math.PI*.64,Math.PI*.3,Math.PI*.24);G(t,i,[s,0,0],[.97,1,1.17]),e.add(`visor`,t)}}function dt(t,n=10,r=.04){let a=(n+1)*4,o=new Float32Array(t*a*3),s=new Float32Array(t*a*3),c=[];for(let e=0;e<t;e++)for(let t=0;t<2;t++)for(let r=0;r<n;r++){let i=e*a+t*(n+1)*2+r*2;c.push(i,i+1,i+2,i+1,i+3,i+2)}let l=new k;l.setAttribute(`position`,new e(o,3).setUsage(i)),l.setAttribute(`color`,new e(s,3).setUsage(i)),l.setIndex(c);let u=new T(l,new N({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!1}));u.frustumCulled=!1,u.renderOrder=3;let d=W(),f=W(),p=W(),m=W(),h=W(),g=W();return{mesh:u,set(e,t,i,c,l,u=r){d.copy(i).sub(t);let _=d.length()||.001;d.divideScalar(_),f.set(0,1,0).cross(d),f.lengthSq()<1e-4&&f.set(1,0,0).cross(d),f.normalize(),p.crossVectors(d,f).normalize();let v=e*a*3;for(let e=0;e<2;e++){let r=e?p:f;h.set(0,0,0),g.set(0,0,0);for(let e=0;e<=n;e++){let a=e/n,d=Math.sin(Math.PI*a);e===0||e===n?(h.set(0,0,0),g.set(0,0,0)):(h.x=(Math.random()-.5)*2*c*d,g.x=(Math.random()-.5)*2*c*d),m.copy(t).lerp(i,a).addScaledVector(f,h.x).addScaledVector(p,g.x);let _=u*(.4+d*.8),y=.55+.45*d;o[v]=m.x+r.x*_,o[v+1]=m.y+r.y*_,o[v+2]=m.z+r.z*_,o[v+3]=m.x-r.x*_,o[v+4]=m.y-r.y*_,o[v+5]=m.z-r.z*_,s[v]=s[v+3]=l[0]*y,s[v+1]=s[v+4]=l[1]*y,s[v+2]=s[v+5]=l[2]*y,v+=6}}},hide(e){s.fill(0,e*a*3,(e+1)*a*3)},flush(){l.attributes.position.needsUpdate=!0,l.attributes.color.needsUpdate=!0}}}function ft(e,t,n){let r=document.createElement(`canvas`);r.width=256,r.height=128;let i=r.getContext(`2d`),a=e=>`#`+e.getHexString();i.fillStyle=`rgba(0,0,0,0.0)`,i.clearRect(0,0,256,128),i.fillStyle=`#f2f4f8`;for(let e=0;e<3;e++)i.beginPath(),i.moveTo(8+e*22,8),i.lineTo(26+e*22,8),i.lineTo(26+e*22-14,64),i.lineTo(8+e*22-14,64),i.fill();i.fillStyle=a(n.clone().lerp(t,.5)),i.fillRect(0,74,256,10),i.fillStyle=`#10131a`,i.fillRect(0,86,256,4),i.font=`bold 74px sans-serif`,i.textAlign=`right`,i.lineWidth=8,i.strokeStyle=`#10131a`,i.strokeText(String(e),246,62),i.fillStyle=`#ffffff`,i.fillText(String(e),246,62),i.font=`bold 15px sans-serif`,i.textAlign=`left`,i.fillStyle=`#e8eaf0`,i.fillText(`ARC-`+e+`  VELOCITY LABS`,10,112);let o=new u(r);return o.colorSpace=g,o}var pt=(e,t,n,r,i=[0,0,0])=>e.add(`decal`,G(new te(t,n),r,i));function mt(e,t,n=0,r=5,i=.22,a=.045,o){for(let o=0;o<r;o++)e.add(`carbon`,G(q(i,.018,.03),[0,0,(o-(r-1)/2)*a],[0,0,0]).applyMatrix4(new O().makeRotationY(n).setPosition(...t)));o&&e.glow(G(q(i*.9,.01,a*r),[0,-.02,0]).applyMatrix4(new O().makeRotationY(n).setPosition(...t)),...o)}function Z(e,t,n,r,i=.014,a=`metal`){let o=W(...t),s=W(...n),c=[];for(let e=0;e<r;e++){let t=o.clone().lerp(s,r>1?e/(r-1):0);c.push(new P(i,6,4).translate(t.x,t.y,t.z))}e.add(a,c)}function ht(e,t,n,r=.012,i){let a=W(...t),o=W(...n).clone().sub(a),s=o.length(),c=new m(r,r,s);c.applyQuaternion(new S().setFromUnitVectors(W(0,0,1),o.normalize())),c.translate((t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2),i?e.glow(c,...i):e.add(`carbon`,c)}function gt(e,t,n,r,i=0,a=[0,0,0]){let o=new E(e,e,t,14,1,!0,n,r);return o.rotateX(Math.PI/2),G(o,[a[0],a[1],a[2]+i])}function _t(e){e=(e.index?e.toNonIndexed():e).clone();for(let t of Object.keys(e.attributes)){let n=e.attributes[t],r=n.itemSize,i=n.array;if(t===`normal`)for(let e=0;e<i.length;e++)i[e]=-i[e];for(let e=0;e<n.count;e+=3)for(let t=0;t<r;t++){let n=(e+1)*r+t,a=(e+2)*r+t,o=i[n];i[n]=i[a],i[a]=o}}return e}var vt=[-Math.PI/2,0,Math.PI],yt={accent:1842982,engine:[1,.45,.08],trail:[1,.5,.1]};function bt(e,n){let r=1.05,i=.2,a=-2.25,o=[2.4,1,.25],s=K([[.22,-1],[.34,-.88],[.43,-.45],[.47,.2],[.45,.9],[.4,1.35],[.41,1.5]],32),c=_t(K([[.4,1.5],[.37,1.3],[.3,1.05],[.16,.95]],24)),l=_t(K([[.33,-1.25],[.31,-1.05],[.27,-.9],[.22,-.88]],24));for(let n of[-1,1]){let a=e=>G(e,[n*r,i,0]);e.add(`paint`,a(s.clone())),e.add(`carbon`,a(c.clone()),a(l.clone())),e.add(`carbon`,a(gt(.488,.95,Math.PI-.62,1.24,.5)),a(gt(.482,.5,Math.PI/2*(n>0?1:3)-.5,1,-.25))),e.add(`accent`,a(gt(.494,.55,Math.PI-.45,.9,.55)),a(G(new d(.472,.03,8,32),[0,0,.82]))),e.glow(a(J(.476,.007,40,4,[0,0,-.35])),...o),e.glow(a(J(.471,.006,40,4,[0,0,.95])),1.6,.7,.2),e.add(`metal`,a(J(.415,.05,32,8,[0,0,1.52])),a(J(.36,.025,28,6,[0,0,1.38])),a(J(.3,.02,24,6,[0,0,1.2]))),e.add(`accent`,a(J(.445,.012,32,5,[0,0,1.5])));for(let t=0;t<14;t++){let n=t/14*Math.PI*2;e.add(`carbon`,a(G(G(q(.24,.012,.16),[.26,0,0],[.55,0,0]),[0,0,1.42],[0,0,n])))}e.add(`metal`,a(K([[0,1],[.07,1.1],[.1,1.28],[.05,1.5],[0,1.62]],14))),e.glow(a(G(new t(.2,20),[0,0,1])),1.4,.6,.15),e.add(`metal`,a(tt(.3,.35,.2,28,!0,[0,0,-1.13])),a(J(.35,.035,28,6,[0,0,-1.23]))),e.add(`carbon`,a(J(.29,.03,24,6,[0,0,-1.02])),a(J(.24,.025,24,6,[0,0,-.93]))),e.glow(a(J(.275,.014,28,5,[0,0,-1])),1.5,.55,.12),e.glow(a(J(.22,.012,24,5,[0,0,-.9])),1.6,.9,.3),e.glow(a(G(new t(.2,20),[0,0,-.88],[0,Math.PI,0])),1.4,.9,.4);for(let t=0;t<6;t++){let n=t/6*Math.PI*2+.3;e.add(`carbon`,a(G(q(.04,.2,.9),[Math.cos(n)*.47,Math.sin(n)*.47,-.62],[0,0,n-Math.PI/2])))}e.add(`carbon`,a(q(.14,.05,1.8,0,.5,.1))),mt(e,[n*r,.7050000000000001,.55],0,6,.16,.06,[1.3,.5,.1]),Z(e,[n*r-.12,.69,1],[n*r-.12,.69,.1],8),Z(e,[n*r+.12,.69,1],[n*r+.12,.69,.1],8);for(let t of[.7,1.2,-.5]){let a=Math.cos(t)*.5,o=Math.sin(t)*.5;e.add(`carbon`,Y([[n*r+a,i+o,1.3],[n*r+a*1.05,i+o*1.05,.5],[n*r+a*1.04,i+o*1.04,-.5],[n*r+a*.6,i+o*.6,-.95]],.016,5,20))}e.add(`paint`,a(G(new P(.1,10,8),[n*.46,-.1,.55],[0,0,0],[.5,.6,1.7]))),pt(e,1.1,.55,[n*1.522,.22,.28],[0,n*Math.PI/2,0]),e.glow(a(J(.13,.025,16,6,[-n*.2,0,-.95],[0,Math.PI/2,0])),2.2,1.6,.7),e.add(`metal`,a(G(q(.34,.12,.12),[-n*.22,0,-.95])));for(let t of[.04,-.05])e.add(`carbon`,Y([[n*.7000000000000001,i+t,-.98],[n*.6,.05000000000000002+t,-1.5],[n*.12,.06+t,-1.75]],.02,5,14))}e.add(`paint`,G(K([[0,-.5],[.12,-.46],[.24,-.25],[.29,.1],[.23,.4],[.1,.55],[0,.58]],22),[0,.05,a],[0,0,0],[1,.8,1])),e.add(`accent`,at([[-.5,0],[-.25,.55],[-.05,.5],[.2,0]],.04,0).translate(0,.15,a)),e.add(`metal`,J(.1,.02,14,6,[0,.12,-1.73]),G(tt(.07,.09,.2,14,!0),[0,.05,-2.8])),e.add(`carbon`,q(.2,.06,1,0,-.2,a),q(.12,.05,.5,0,.1,-1.75)),e.add(`glass`,nt(.3,[0,.3,-2.23],[.8,.85,1.7])),pt(e,.5,.25,[.236,.04,-2.35],[0,Math.PI/2,0]),pt(e,.5,.25,[-.236,.04,-2.35],[0,-Math.PI/2,0]),ut(e,{hip:[0,.12,-2.43],sh:[0,.4,-2.2],head:[0,.56,-2.07],hand:[.14,.2,-1.87],foot:[.12,.1,-1.7],tilt:.25,pr:.12,kneeUp:.14});let u=[-1,1].map(e=>[W(e*.8500000000000001,i,-.95),W(e*.1,.13,-1.75)]);u.forEach(([t,n])=>e.glow(rt(.016,[t.x,t.y,t.z],[n.x,n.y,n.z],6),2.2,1.3,.5));for(let t of[-1,1])e.glow(J(.06,.012,14,5,[t*.1,.13,-1.75],[0,Math.PI/2,0]),2.5,1.5,.6);let f=[];for(let e=0;e<10;e++)f.push(G(G(q(.3,.012,.09),[.17,0,0],[.7,0,0]),[0,0,0],[0,0,e/10*Math.PI*2]));let p=[-1,1].map(t=>{let a=new T(Qe(f),e.M.metal);return a.position.set(t*r,i,1.28),n.add(a),a}),m=dt(8,10,.07);return n.add(m.mesh),{nozzles:[...[-1,1].map(e=>({p:[e*r,i,-1.25],r:.3,k:1.2})),{p:[0,.05,-2.87],r:.08,k:.5}],trails:[[-1.05,i,-1.4],[r,i,-1.4]],pads:[[-1.05,.9],[r,.9],[-1.05,-.6],[r,-.6],[0,-2.05]],padY:-.3,sparkX:1.05,under:[3.4,5.4],light:[0,1.3,-2.05],decals:[[.5,.25,[0,.31,-2.4],vt]],anim({t:e,sp:t}){p.forEach((e,n)=>{e.rotation.z+=(n?-1:1)*(.5+t*1.2)});let n=.85+Math.sin(e*30)*.15;u.forEach(([e,t],r)=>{m.set(r*4,e,t,.06,[1.5*n,.7*n,.18],.06),m.set(r*4+1,e,t,.17,[1.3,.55,.15],.035),m.set(r*4+2,e,t,.3,Math.random()<.7?[1.8,1,.4]:[0,0,0],.016),m.set(r*4+3,e,t,.28,Math.random()<.5?[1.8,1,.4]:[0,0,0],.016)}),m.flush()}}}var xt={dark:!0,accent:16719920,engine:[1,.08,.1],trail:[1,.1,.15],paint:{metalness:.15,roughness:.5,clearcoat:.3}},St=[2.2,.05,.1];function Ct(e){e.M.carbon.color.setScalar(.28);let t=K([[0,2.2],[.16,1.7],[.42,.55],[.5,-.3],[.4,-1.1],[.16,-1.75],[0,-1.95]],4);e.add(`paint`,$e(G(t,[0,.02,0],[0,0,0],[1.65,.17,1]))),e.add(`paint`,$e(G(K([[0,1],[.2,.2],[.24,-.6],[.1,-1.4],[0,-1.55]],4),[0,.12,0],[0,0,0],[1.1,.14,1]))),e.add(`carbon`,X([[0,1.9],[.3,1.1],[.7,.35],[1.6,-1],[1.5,-1.3],[.8,-1.05],[.5,-1.6],[0,-1.35]],.045,-.02,.01));for(let t of[-1,1]){let n=at([[.3,0],[-.55,0],[-1,.62],[-.45,.14]],.035,0).translate(t*.55,.05,-1.05);e.add(`paint`,$e(G(n,[0,0,0],[0,0,t*-.28])));for(let[n,r]of[[[.32,1.1],[.72,.4]],[[.76,.3],[1.5,-.95]]]){let i=(r[0]-n[0])*t,a=r[1]-n[1],o=Math.hypot(i,a);e.glow(G(q(.04,.025,o*.92),[t*(n[0]+r[0])/2*1,.03,(n[1]+r[1])/2],[0,Math.atan2(i,a)*1,0]),...St)}e.glow(q(.3,.025,.02,t*.3,.06,-1.62),...St),e.glow(G(q(.16,.02,.02),[t*.12,.17,.78],[0,0,t*-.2]),...St)}return e.add(`glass`,nt(.2,[0,.15,-.1],[.9,.55,3.2])),ut(e,{hip:[0,.1,-1],sh:[0,.14,-.2],head:[0,.18,.18],hand:[.2,.08,.4],foot:[.12,.08,-1.45],tilt:.45,pr:.1,kneeUp:.03,kneeFwd:0,visor:!1}),{decals:[[.7,.35,[0,.062,-.75],vt]],nozzles:[{p:[0,.02,-1.95],r:.1,k:.4}],trails:[[-.18,.02,-1.98],[.18,.02,-1.98]],pads:[[-.8,-.3],[.8,-.3],[0,1],[0,-1.2]],padY:-.13,sparkX:.8,under:[2.6,4.6],light:[0,.9,-.2]}}var wt={accent:16761370,engine:[.35,.7,1],trail:[.5,.8,1]},Tt=[.8,1.6,2.6];function Et(e){e.add(`carbon`,X([[0,1.75],[.55,1.6],[.85,1.05],[.88,-1],[.62,-1.65],[0,-1.65]],.34,-.02,.07)),e.add(`paint`,X([[0,1.62],[.5,1.45],[.8,.95],[.82,-.95],[.58,-1.55],[0,-1.55]],.14,.2,.05)),e.add(`paint`,X([[0,1.45],[.45,1.25],[.7,.6],[.7,-.9],[.42,-1.45],[0,-1.45]],.2,.37,.06)),e.add(`carbon`,X([[0,1],[.3,.8],[.4,.2],[.4,-.5],[.25,-.9],[0,-.9]],.06,.52,.03)),e.add(`carbon`,X([[.3,.4],[.62,.2],[.62,-.7],[.3,-.7]],.05,.5,.025)),e.add(`paint`,X([[0,2.25],[.5,1.95],[.95,1.55],[.95,1.2],[0,1.2]],.46,.05,.07),X([[0,2.1],[.4,1.85],[.78,1.5],[0,1.4]],.1,.34,.04)),e.add(`carbon`,q(1.9,.22,.16,0,-.08,1.92));for(let t=-4;t<=4;t++)e.add(`accent`,G(q(.1,.24,.17),[t*.2,-.08,1.92],[0,0,.5]));for(let t of[-.5,-.25,.25,.5])ht(e,[t,.485,-1.3],[t,.485,1.2],.014);for(let t of[-1,-.5,0,.6,1])ht(e,[-.68,.475,t],[.68,.475,t],.014);ht(e,[.4,.56,.8],[.4,.56,-.8],.014,Tt),ht(e,[-.4,.56,.8],[-.4,.56,-.8],.014,Tt);for(let t of[-1,1]){Z(e,[t*.68,.485,1.1],[t*.68,.485,-1.2],20),Z(e,[t*.8,.285,.9],[t*.8,.285,-.9],16),Z(e,[t*.9,.1,1],[t*.9,.1,-1],18),Z(e,[t*.9,.38,1.45],[t*.2,.4,2],8),e.add(`paint`,G(q(.08,.36,1.6),[t*.9,.18,-.15]),G(q(.06,.2,1.3),[t*.95,.12,-.25]));for(let n=0;n<4;n++)e.add(`accent`,G(q(.09,.4,.14),[t*.93,.18,.55+n*.17-0],[.5,0,0]));mt(e,[t*.7,.485,-1.15],Math.PI/2,5,.2,.055,Tt.map(e=>e*.5));for(let[n,r,i]of[[1.15,1,.6],[-.95,1.4,1]]){let i=1.12*t;e.add(`paint`,G(K([[.2,-r/2],[.3,-r/2+.1],[.34,0],[.32,r/2-.15],[.2,r/2],[.06,r/2+.2]],24),[i,0,n])),e.add(`carbon`,J(.345,.03,24,6,[i,0,n+r*.2]),J(.33,.02,24,6,[i,0,n-r*.2]),q(.12,.1,.5,t*.99,0,n+.1)),e.add(`metal`,tt(.24,.27,.22,20,!0,[i,0,n-r/2-.05])),e.add(`accent`,G(q(.08,.3,.3),[i,.28,n-r*.1]),G(q(.3,.05,.3),[i,.34,n+r*.15])),Z(e,[i-.22,.24,n+r*.25],[i+.22,.24,n+r*.25],5,.012),ht(e,[i,.335,n-r*.4],[i,.335,n+r*.4],.012,Tt)}e.add(`carbon`,q(.6,.08,.12,t*.9,0,.3),q(.6,.08,.12,t*.9,0,-.1)),pt(e,1,.4,[t*.978,.1,-.25],[0,t*Math.PI/2,0])}for(let t of[-1,1])e.add(`metal`,Y([[t*.3,.55,-1],[t*.33,1.05,-.5],[t*.2,1.2,.1],[t*.2,.7,.6]],.035,8,20));return e.add(`metal`,Y([[-.33,1.05,-.5],[0,1.18,-.5],[.33,1.05,-.5]],.035,8,10)),e.add(`visor`,G(q(.62,.34,.06),[0,.88,.68],[-.9,0,0])),e.glow(q(.9,.04,.03,0,.18,1.5),...Tt),ut(e,{hip:[0,.65,-.7],sh:[0,1,-.3],head:[0,1.24,-.08],hand:[.22,.85,.35],foot:[.22,.5,.55],tilt:.1,pr:.19}),{decals:[[.9,.45,[0,.482,-1.1],vt]],nozzles:[-1,1].flatMap(e=>[{p:[e*1.12,0,-1.68],r:.22,k:1},{p:[e*1.12,0,.65],r:.2,k:.5}]),trails:[[-1.12,0,-1.8],[1.12,0,-1.8]],pads:[[-1.12,1.15],[1.12,1.15],[-1.12,-.95],[1.12,-.95],[0,0]],padY:-.33,sparkX:1.2,under:[3.2,4.8],light:[0,1.6,-.2]}}var Dt={accent:1778224,engine:[.1,.8,1],trail:[.2,.9,1]};function Ot(e,n){e.add(`metal`,Y([[0,-.05,-1.75],[0,.05,-.6],[0,-.1,.8],[0,-.02,1.75]],.045,8,24));for(let n of[-1,1])e.add(`carbon`,Y([[n*.3,-.12,-1.75],[n*.62,-.22,-.7],[n*.58,-.2,.3],[n*.12,-.05,1.5]],.032,6,28)),e.add(`carbon`,Y([[n*.62,-.22,-.7],[n*.88,.3,.02]],.025,6,6),Y([[n*.58,-.2,.3],[n*.88,.3,.02]],.025,6,6),Y([[n*.1,.1,-.5],[n*.62,-.22,-.7]],.02,6,6),Y([[n*.1,.1,.3],[n*.58,-.2,.3]],.02,6,6)),e.add(`paint`,G(new h(new I([[0,0],[.55,-.02],[.1,.12]].map(e=>new M(...e))),{depth:.02,bevelEnabled:!1}),[n*.1,-.05,1.35],[Math.PI/2,n>0?0:Math.PI,0])),e.add(`metal`,G(tt(.07,.07,.4,14,!0),[n*.3,-.12,-1.8])),e.glow(G(new t(.06,12),[n*.3,-.12,-1.98],[0,Math.PI,0]),.5,2,2.8),e.glow(q(.04,.04,.2,n*.88,.3,.02),.5,2,2.8);e.add(`paint`,K([[0,1.55],[.08,1.7],[.1,1.9],[.03,2.2],[0,2.35]],14),K([[.12,-1.95],[.22,-1.8],[.24,-1.4],[.14,-1.05],[.05,-.9]],20)),e.add(`metal`,tt(.23,.26,.22,24,!0,[0,0,-2.05]),J(.2,.025,20,6,[0,0,-1.2])),e.glow(G(new t(.2,20),[0,0,-1.98],[0,Math.PI,0]),.9,2.6,3.4),e.glow(nt(.07,[0,-.05,1.7]),.6,2.4,3.2),e.add(`carbon`,q(.2,.05,.7,0,.13,-.3)),ut(e,{hip:[0,.2,-.45],sh:[0,.6,-.05],head:[0,.82,.13],hand:[.2,.5,.45],foot:[.2,0,.1],tilt:.2,pr:.15,kneeUp:.2});let r=new ie;r.position.set(0,.38,.05),n.add(r);let i=(t,n,r)=>{let i=new T(Qe(t),e.M.paint),a=new T(Qe(n.map(e=>e)),e.M.glow);i.castShadow=!0,r.add(i,a)},a=new ie,o=new ie;r.add(a,o);let s=(e,t,n)=>Array.from({length:t},(n,r)=>{let i=r/t*Math.PI*2;return ot(G(q(.09,.07,.07),[Math.cos(i)*e,Math.sin(i)*e,0],[0,0,i]),...r%2?[.5,2,2.8]:[.2,.6,.9])});i([new d(.88,.04,8,56)],s(.88,14),a);let c=new ie;c.rotation.y=Math.PI/2,o.add(c),i([new d(.7,.032,8,48)],s(.7,12),c);for(let[t,n]of[[.9,0],[-.9,0],[0,-.5]])e.add(`metal`,q(.09,.09,.14,t,n+.38,.05));return{decals:[[.5,.25,[0,.216,-.3],vt]],nozzles:[{p:[0,0,-2.18],r:.2,k:1.1},...[-1,1].map(e=>({p:[e*.3,-.12,-2],r:.07,k:.6}))],trails:[[0,0,-2.25]],pads:[[-.58,.3],[.58,.3],[-.3,-1.4],[.3,-1.4]],padY:-.22,sparkX:.58,under:[2.2,4.8],light:[0,1.5,0],anim({dt:e,sp:t,steer:n}){a.rotation.z+=e*(5+t*16),o.rotation.x-=e*(3+t*10),r.rotation.y+=(n*.5-r.rotation.y)*Math.min(1,e*8),r.rotation.x+=(-n*.12-r.rotation.x)*Math.min(1,e*8)}}}var kt={accent:1381660,engine:[.55,.35,1],trail:[.6,.4,1]},At=4.7,jt=28;function Mt(n,r,{isPlayer:a}){n.add(`paint`,G(K([[0,-2],[.09,-1.95],[.15,-1.5],[.19,-.6],[.24,.1],[.2,.9],[.12,1.7],[.05,2.3],[0,2.75]],24),[0,0,0],[0,0,0],[1,.9,1])),n.add(`carbon`,X([[.1,-1],[.9,-1.75],[.85,-1.98],[.1,-1.55]],.03,-.02,.008),X([[.08,1.45],[.6,1.2],[.55,1.08],[.08,1.2]],.025,-.02,.006)),n.add(`accent`,at([[-1,.05],[-1.9,.05],[-1.95,.55],[-1.5,.15]],.03,0));for(let e of[-1,1])n.add(`paint`,G(K([[0,-.4],[.07,-.3],[.09,.1],[.04,.4],[0,.5]],14),[e*.88,-.02,-1.8])),n.glow(G(new t(.07,12),[e*.88,-.02,-2.22],[0,Math.PI,0]),1.2,.7,2.6);for(let e of[.7,1.15,1.6,2])n.glow(J(.15-(e-.7)*.05+.08,.02,24,6,[0,0,e]),1.1,.6,2.8);n.add(`metal`,J(.215,.025,24,6,[0,0,-.5]),J(.26,.03,24,6,[0,0,.3])),n.add(`glass`,nt(.24,[0,.38,-.2],[.85,.7,2.6])),n.glow(G(new t(.1,14),[0,0,-2.02],[0,Math.PI,0]),2.4,1.8,3.4),ut(n,{hip:[0,.3,-.85],sh:[0,.36,-.1],head:[0,.42,.28],hand:[.2,.28,.75],foot:[.1,.28,-1.5],tilt:.7,pr:.12,kneeUp:.05,kneeFwd:0});let o=new Float32Array(336),s=new Float32Array(336),c=[];for(let e=0;e<2;e++)for(let t=0;t<27;t++){let n=e*jt*2+t*2;c.push(n,n+1,n+2,n+1,n+3,n+2)}let l=new k;l.setAttribute(`position`,new e(o,3).setUsage(i)),l.setAttribute(`color`,new e(s,3).setUsage(i)),l.setIndex(c);let u=new T(l,new N({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!1}));return u.frustumCulled=!1,u.renderOrder=2,r.add(u),{decals:[[.6,.3,[.03,.22,0],[0,Math.PI/2,0]]],nozzles:[{p:[0,0,-2.02],r:.1,k:.5}],trails:[],pads:[[0,.7],[0,-.9],[-.88,-1.7],[.88,-1.7]],padY:-.26,sparkX:.5,under:[1.8,5.2],light:[0,.9,0],anim({t:e,sp:t,boost:n}){let r=At*3*(.12+.88*Math.min(1,t)+n*.1),i=a?Math.min(r,4.2):r;for(let t=0;t<2;t++)for(let r=0;r<jt;r++){let a=r/27,c=-2.02-a*i,l=(.13*(1-a)+.01)*(t?1:1.4),u=Math.sin(e*14-a*22)*.05*a*(1+a*3),d=Math.cos(e*11-a*17)*.05*a*(1+a*3),f=(t*jt+r)*6,p=d,m=u;o[f]=p+(t?0:l),o[f+1]=m+(t?l:0),o[f+2]=c,o[f+3]=p-(t?0:l),o[f+4]=m-(t?l:0),o[f+5]=c;let h=(1-a)**1.6*(.26+n*.2)*(.9+Math.random()*.2);s[f]=s[f+3]=.8*h+.7*h*(1-a),s[f+1]=s[f+4]=.45*h+.5*h*(1-a)*(1-a),s[f+2]=s[f+5]=1.5*h}l.attributes.position.needsUpdate=!0,l.attributes.color.needsUpdate=!0}}}var Nt={accent:1054746,engine:[.3,1,.35],trail:[.4,1,.4]},Pt=[.5,2.6,.7];function Ft(t,n){t.add(`paint`,$e(G(K([[0,2.45],[.07,2.25],[.18,1.85],[.24,1.5],[.2,1.25]],5),[0,.06,0],[0,0,0],[1.1,.55,1]))),t.add(`visor`,$e(G(K([[0,2],[.12,1.85],[.17,1.6]],5),[0,.15,0],[0,0,0],[1.05,.28,1]))),t.glow(q(.3,.014,.02,0,.21,1.99),...Pt),t.glow(q(.18,.012,.02,0,.17,1.96),.4,1.4,.5);for(let e of[-1,1])t.add(`carbon`,G(at([[1.45,0],[2.55,-.06],[2,.1],[1.6,.12]],.03,0),[e*.2,-.02,0],[0,0,e*-.35]),G(q(.1,.1,.34),[e*.2,-.03,1.72])),t.glow(q(.04,.02,.2,e*.2,0,1.88),.6,2.2,.7),t.add(`metal`,G(at([[1.5,0],[2.3,-.1],[1.8,.05]],.02,0),[e*.12,-.1,0]));[[1.15,.45,.2],[.75,.45,.29],[.35,.45,.34],[-.05,.45,.34],[-.5,.42,.3],[-.9,.42,.27],[-1.3,.4,.23],[-1.7,.4,.19],[-2.1,.38,.14]].forEach(([e,n,r],i)=>{t.add(i%3==2?`accent`:`paint`,$e(G(K([[.6*r,-n/2],[r,-n/2+.07],[r,n/2-.02],[.82*r,n/2]],6),[0,0,e],[0,0,0],[1.05,.62,1]))),t.add(`carbon`,G(J(r*.78,.016,6,4),[0,0,e-n/2],[0,0,Math.PI/6],[1.05,.62,1])),t.glow(q(r*.5,.012,.012,0,r*.62+.004,e-n/2+.02),...Pt.map(e=>e*.5))}),t.add(`paint`,at([[1.1,0],[.2,.1],[-1.2,.03],[-2.3,-.02],[-1.2,0],[.1,0]],.03,0).translate(0,.17,0)),t.add(`accent`,at([[-2.15,0],[-2.7,.55],[-2.35,0]],.035,0).translate(0,.1,0));for(let e of[-1,1])t.add(`metal`,tt(.09,.11,.2,14,!0,[e*.1,0,-2.3]));t.add(`glass`,nt(.3,[0,.4,.45],[.85,.65,1.55])),mt(t,[0,.17,-.7],0,4,.2,.07,[.4,1.8,.5]),Z(t,[.12,.2,1],[.1,.2,-1],12),Z(t,[-.12,.2,1],[-.1,.2,-1],12),ht(t,[0,.19,1.2],[0,.17,-1.9],.012,[.3,1.4,.4]),ut(t,{hip:[0,.34,-.3],sh:[0,.55,.15],head:[0,.68,.45],hand:[.2,.46,.78],foot:[.2,.2,-.15],tilt:.5,pr:.14,kneeUp:.1});let r=[[0,.22],[.45,.3],[1,.18],[1.7,-.12],[1.62,-.3],[1.45,-.15],[1.35,-.33],[1.1,-.14],[.95,-.3],[.7,-.12],[.3,-.12],[0,-.1]],i=()=>{let e=new h(new I(r.map(([e,t])=>new M(e,-t))),{depth:.03,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:1});return e.rotateX(-Math.PI/2),e},a=t=>{let n=t.attributes.position.count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r[e*3]=Pt[0],r[e*3+1]=Pt[1],r[e*3+2]=Pt[2];return t.setAttribute(`color`,new e(r,3)),t},o=[];for(let e of[-1,1])for(let[r,s,c]of[[.75,-.55,1],[-.35,.05,.85]]){let l=new ie;l.position.set(e*.28,.1,r),n.add(l);let u=i();u.scale(c,1,c),e<0&&(u=et(u));let d=new T(u,t.M.carbon);d.castShadow=!0;let f=new T(a(G(q(1.5*c,.012,.02),[e*.85*c,.02,0])),t.M.glow),p=new T(G(q(.9*c,.016,.05),[e*.5*c,.016,.1]),t.M.paint);l.add(d,f,p),o.push({piv:l,sx:e,base:s,front:r>0})}return{decals:[[.5,.25,[0,.215,-1.2],vt]],nozzles:[-1,1].map(e=>({p:[e*.1,0,-2.4],r:.09,k:.8})),trails:[[-.1,0,-2.5],[.1,0,-2.5]],pads:[[-.25,.5],[.25,.5],[0,-1]],padY:-.23,sparkX:.4,under:[2.2,5],light:[0,1.2,0],anim({sp:e,steer:t}){for(let n of o){let r=n.base+(n.front?1.7:1.3)*e+t*.2*n.sx*(n.front?1:-.5);n.piv.rotation.y=n.sx*r,n.piv.rotation.z=n.sx*-.08*(1-e)}}}}var It={gold:!0,engine:[1,.75,.3],trail:[1,.8,.35],paint:{color:16760612,metalness:.95,roughness:.2}},Lt=5;function Rt(e,n){e.add(`paint`,G(K([[0,-1.7],[.16,-1.6],[.3,-1.1],[.4,-.3],[.4,.4],[.3,1],[.14,1.6],[.05,1.95],[0,2.05]],28),[0,0,0],[0,0,0],[1,.62,1])),e.add(`accent`,J(.34,.03,24,6,[0,.05,-.35],[0,0,0]),J(.28,.025,24,6,[0,.05,.9])),e.add(`accent`,G(q(.08,.5,.5),[0,.35,-.95]),G(J(.5,.03,30,6,[0,.5,-.9],[0,0,0]))),e.add(`glass`,nt(.3,[0,.38,.1],[.9,.85,1.9])),e.glow(J(.52,.012,40,4,[0,.5,-.9]),3,2.2,.9),e.glow(q(.04,.03,1.3,0,.2,1.1),3,2.2,.9),ut(e,{hip:[0,.22,-.45],sh:[0,.55,-.05],head:[0,.73,.14],hand:[.2,.42,.45],foot:[.2,.05,.2],tilt:.25,pr:.14,kneeUp:.18});for(let n of[-1,1])e.add(`paint`,K([[.04,-.4],[.1,-.3],[.13,.1],[.08,.4],[0,.5]],14).translate(n*.32,-.05,-1.5)),e.add(`metal`,tt(.1,.12,.14,14,!0,[n*.32,-.05,-1.92])),e.glow(G(new t(.095,14),[n*.32,-.05,-1.88],[0,Math.PI,0]),3,2.2,1),e.add(`metal`,G(q(.3,.05,.1),[n*.25,0,-.3]));let r=(e,t,n)=>new I([[-e,0],[e,0],[t,n],[-t,n]].map(e=>new M(...e))),i=new h(r(.03,.24,1.2),{depth:.02,bevelEnabled:!1}),a=r(.015,.2,1.12),o=new ee(a);o.translate(0,.04,.0215);let s=ct(),c=new j({color:16762938,metalness:.95,roughness:.2}),l=new j({map:s.cells,color:16777215,metalness:.5,roughness:.25,emissive:532554,emissiveIntensity:.9}),u=new ae(i,c,10),d=new ae(o,l,10);u.frustumCulled=d.frustumCulled=!1,u.castShadow=!0,n.add(u,d),e.extraMats=[c,l];let f=new O,p=new S,m=new ne,g=new L(1,1,1),_=new L,v={v:.6},y=e=>{for(let t of[-1,1])for(let n=0;n<Lt;n++){let r=.18+e*.05+n*(.02+e*.34),i=.75+.25*Math.sin((n+.5)/Lt*Math.PI);p.setFromEuler(m.set(0,0,-t*r)),_.set(t*.4,.12,-.3-n*.025*(1-e)-n*.01),f.compose(_,p,g.set(1,i,1));let a=(t>0?0:Lt)+n;u.setMatrixAt(a,f),d.setMatrixAt(a,f)}u.instanceMatrix.needsUpdate=d.instanceMatrix.needsUpdate=!0};return y(.6),{decals:[[.7,.35,[0,.382,.8],vt]],nozzles:[-1,1].map(e=>({p:[e*.32,-.05,-1.95],r:.1,k:.9})),trails:[[-.32,-.05,-2],[.32,-.05,-2]],pads:[[-.3,.7],[.3,.7],[0,-1]],padY:-.26,sparkX:.45,under:[2.6,4.8],light:[0,1.3,0],anim({sp:e,steer:t,dt:n}){let r=Math.max(0,Math.min(1,e*1.25-Math.abs(t)*1.5));v.v+=(r-v.v)*Math.min(1,n*4),y(v.v)}}}var zt={accent:1380383,engine:[.75,.3,1],trail:[.8,.35,1]},Bt=.42,Vt=Bt*Math.sqrt(3)*1.05,Ht=1.3,Ut=.12,Wt=.1,Gt=[1.2,.35,2.6];function Kt(e,n){let r=(e,t,n,r,i)=>$e(new E(e,e,t,6)).translate(n,r,i),i=[[0,0,.5,.1,`paint`]];for(let e=0;e<6;e++){let t=e*Math.PI/3;i.push([Math.cos(t)*Vt,Math.sin(t)*Vt,.26+e%2*.1,-.02+e%2*.05,e%2?`carbon`:`paint`])}i.push([0,1.3,.22,0,`paint`,.3],[0,1.78,.18,0,`carbon`,.2],[-.33,-1.2,.3,0,`carbon`,.3],[.33,-1.2,.3,0,`paint`,.3]),i.slice(1).forEach(([t,n,i,a,o,s])=>{e.add(o,r((s||Bt)*.97,i,t,a,n)),e.glow(r((s||Bt)*.8,.02,t,a+i/2+.012,n),...Gt.map(e=>e*(o===`paint`?.7:.3))),e.add(`metal`,G(J((s||Bt)*.99,.012,6,3,[t,a-i/2+.02,n],[Math.PI/2,0,0])))}),e.glow(r(.24,.5,0,.1,0),1.6,.6,3.2),e.add(`glass`,r(Bt*1,.56,0,.1,0)),e.add(`accent`,r(Bt*1.06,.05,0,-.18,0),r(Bt*1.06,.05,0,.38,0)),e.glow(G(J(Ht,.012,64,4,[0,Ut,Wt],[Math.PI/2,0,0])),...Gt.map(e=>e*.35));for(let t of[-1,1])e.add(`carbon`,q(.06,.05,1,t*.62,0,0),q(.5,.05,.06,t*.3,0,-1.2));e.add(`carbon`,q(.06,.05,1,0,0,.6)),ut(e,{hip:[0,.55,-.35],sh:[0,.9,0],head:[0,1.06,.2],hand:[.2,.75,.5],foot:[.2,.42,.1],tilt:.3,pr:.15,kneeUp:.18});for(let n of[-1,1])e.add(`metal`,tt(.12,.14,.2,6,!0,[n*.33,0,-1.55])),e.glow(G(new t(.11,6),[n*.33,0,-1.5],[0,Math.PI,0]),1.4,.6,3);let a=ot(new d(.2,.04,8,20),1.3,.5,3);new d(.2,.012,6,20);let o=e.M.glow,s=[0,1,2].map(t=>{let r=new ie,i=new T(a,o),s=new T(Qe([G(new d(.2,.052,8,20),[0,0,0],[0,0,0],[1,1,.6])]),e.M.metal);return r.add(s,i),i.scale.set(.85,.85,1.2),n.add(r),r}),c=dt(6,9,.018);n.add(c.mesh);let l=s.map(()=>W()),u=W(0,.4,0);return{decals:[[.5,.25,[0,.355,1.3],vt]],nozzles:[-1,1].map(e=>({p:[e*.33,0,-1.62],r:.12,k:.9})),trails:[[-.33,0,-1.7],[.33,0,-1.7]],pads:[[-Vt,.1],[Vt,.1],[0,1],[0,-1]],padY:-.22,sparkX:.8,under:[2.8,4.4],light:[0,1.5,0],anim({t:e,sp:t,dt:n}){s.forEach((n,r)=>{let i=e*(1.6+t*4.5)+r*Math.PI*2/3;n.position.set(Math.sin(i)*Ht,Ut+Math.sin(e*3+r)*.05,Wt+Math.cos(i)*Ht),n.rotation.y=i+Math.PI/2,l[r].copy(n.position)});for(let e=0;e<3;e++)c.set(e,l[e],l[(e+1)%3],.14,Math.random()<.7?[.7,.25,1.5]:[0,0,0]),c.set(3+e,l[e],u,.16,Math.random()<.5?[.6,.22,1.3]:[0,0,0]);c.flush()}}}var qt={talon:[bt,yt],wraith:[Ct,xt],bulwark:[Et,wt],vesper:[Ot,Dt],lance:[Mt,kt],mantis:[Ft,Nt],solaris:[Rt,It],hex:[Kt,zt]},Jt=U.rollTime,Yt=14,Xt=48,Zt=7,Qt=3.5,$t=96,en=e=>e.driftTier??(e.driftCharge>1.5?3:e.driftCharge>1?2:+(e.driftCharge>.5)),tn=[[4,3,1.6],[.9,2.2,6],[6,2.6,.5],[3.6,.7,6]];function nn(t){let n=new Float32Array(84),r=new Float32Array(84),a=[];for(let e=0;e<13;e++){let t=e*2;a.push(t,t+1,t+2,t+1,t+3,t+2)}let o=new k;o.setAttribute(`position`,new e(n,3).setUsage(i)),o.setAttribute(`color`,new e(r,3).setUsage(i)),o.setIndex(a);let s=new T(o,new N({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!1}));return s.frustumCulled=!1,{mesh:s,origin:new L(...t),pts:Array.from({length:Xt},()=>new L),init:!1}}var rn,an=()=>rn||=(()=>{let e=[];for(let t of[0,Math.PI/2]){let n=new te(1,1);n.translate(0,-.5,0),n.rotateX(Math.PI/2),n.rotateZ(t),e.push(n)}return on(e)})();function on([t,n]){let r=new k,i=r=>{let i=t.attributes[r].array,a=n.attributes[r].array,o=new Float32Array(i.length+a.length);return o.set(i),o.set(a,i.length),new e(o,t.attributes[r].itemSize)};r.setAttribute(`position`,i(`position`)),r.setAttribute(`uv`,i(`uv`));let a=t.attributes.position.count;return r.setIndex([...t.index.array,...Array.from(n.index.array,e=>e+a)]),r}function sn({color:n=1630463,isPlayer:r=!1,bike:a=`mantis`}={}){let o=qt[a]?a:`mantis`,[c,u]=qt[o],d=new b(n),f=ct(),m=new lt(u.dark?460810:u.gold?16760612:n,u.dark||u.gold?n:u.accent,{paint:u.paint,number:le.findIndex(e=>e.key===o)+1}),h=new oe;h.name=`hoverbike`,h.userData.bikeKey=o;let g=new ie;h.add(g);let _=c(m,g,{isPlayer:r}),v=new b(...u.engine);for(let e of _.nozzles){let[n,r,i]=e.p,a=e.r;if(a<.06)continue;m.add(`metal`,J(a*1.08,a*.1,22,6,[n,r,i+.01])),m.add(`carbon`,J(a*.93,a*.07,22,6,[n,r,i-.005])),m.glow(J(a*.78,a*.05,22,6,[n,r,i-.015]),v.r*1.4,v.g*1.4,v.b*1.4);let o=new t(a*.55,18);o.rotateY(Math.PI),o.translate(n,r,i-.02),m.glow(o,1.3,1.1,.9)}for(let e of _.decals||[])pt(m,...e);m.mount(g);let y=new b(...u.trail),x=[];for(let[e,n]of _.pads){let r=new t(.13,16);r.rotateX(Math.PI/2),r.translate(e,_.padY,n),x.push(r)}let S=new N({color:new b(.25,.6,1).lerp(v,.7).multiplyScalar(2.2),toneMapped:!1}),C=new T(cn(x),S);g.add(C);let w=new N({map:f.flame,color:v.clone().multiplyScalar(1.1),transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!1}),E=_.nozzles.map(e=>{let t=new T(an(),w);return t.position.set(...e.p),t.renderOrder=2,t.userData=e,g.add(t),t}),D=w.clone();D.color.copy(v).multiplyScalar(.16),D.opacity=.5;let ee=_.nozzles.slice(0,3).map(e=>{let t=new T(an(),D);return t.position.set(...e.p),t.renderOrder=1,t.userData=e,g.add(t),t}),O=new N({map:f.radial,color:new b(.2,.55,1).lerp(v,.7).multiplyScalar(.55),transparent:!0,blending:2,depthWrite:!1,toneMapped:!1}),A=new T(new te(..._.under),O);A.rotation.x=-Math.PI/2,A.renderOrder=1,h.add(A);let ne=_.trails.map(nn),j=new Float32Array(288),M=new Float32Array(288),P=new k;P.setAttribute(`position`,new e(j,3).setUsage(i)),P.setAttribute(`color`,new e(M,3).setUsage(i));let re=new s(P,new l({size:.16,vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,toneMapped:!1}));re.frustumCulled=!1;let F=null;r&&(F=new p(v,.8,5,2),F.position.set(..._.light),h.add(F));let I=[...new Set([...Object.values(m.M),...m.extraMats||[]])];return h.traverse(e=>{e.material&&!I.includes(e.material)&&I.push(e.material)}),h.userData.bike={body:g,flames:E,shims:ee,shimMat:D,flameMat:w,glowMat:m.M.glow,padMat:S,ugMat:O,under:A,light:F,trails:ne,sparks:re,col:d,trailCol:y,spec:_,materials:I,isPlayer:r,sparkVel:new Float32Array(288),sparkLife:new Float32Array($t),sparkNext:0,lastSpeed:0,pitch:0,spin:0,boostK:0,t:Math.random()*10,shimBase:D.color.clone(),padBase:S.color.clone(),flameBase:w.color.clone(),ugBase:O.color.clone()},h}function cn(t){t.length;let n=0,r=new Float32Array(t.reduce((e,t)=>e+t.attributes.position.count*3,0)),i=[];t.forEach(e=>{let t=e.attributes.position.count;r.set(e.attributes.position.array,n*3),e.index.array.forEach(e=>i.push(e+n)),n+=t});let a=new k;return a.setAttribute(`position`,new e(r,3)),a.setIndex(i),a}var ln=new L,un=new L,dn=new L,fn=new O,pn=new L,mn=new L,hn=new b(1,.55,.15),gn=new b,_n=new L;function vn(e,t,n,r){let i=e.userData.bike;if(!i)return;n=Math.max(n,1e-4),i.t+=n;let a=r.frameAt(t.s);if(r.toWorld(t.s,t.x,t.h,e.position),ln.copy(a.tangent).applyAxisAngle(a.up,-t.heading).normalize(),dn.crossVectors(a.up,ln).normalize(),un.crossVectors(ln,dn).normalize(),fn.makeBasis(dn,un,ln),e.quaternion.setFromRotationMatrix(fn),!i.envDone&&e.parent){i.envDone=!0;let t=e.parent;for(;t.parent;)t=t.parent;if(!t.environment)for(let e of i.materials)e.isMeshStandardMaterial&&(e.envMap=ct().env,e.envMapIntensity=e.envMapIntensity>1?e.envMapIntensity:1.1)}if(!i.sparks.parent&&e.parent){for(let t of i.trails)e.parent.add(t.mesh);e.parent.add(i.sparks)}let o=Math.min(1.4,t.speed/U.maxSpeed),s=t.steerVis||0,c=t.boostT>0||t.burning?1:0;i.boostK+=(c-i.boostK)*Math.min(1,n*8);let l=c>0;l&&!i.wasBoost&&(i.kick=1),i.wasBoost=l,i.kick=Math.max(0,(i.kick||0)-n*5);let u=(t.speed-i.lastSpeed)/n;i.lastSpeed=t.speed,i.pitch+=(z.clamp(-u*.004,-.12,.1)-i.pitch)*Math.min(1,n*4);let d=s*(.42+.2*o)+(t.drifting?Math.sign(s)*.15:0);t.rollT>0&&(d+=(t.rollDir||1)*.5*Math.sin(Math.PI*(1-t.rollT/Jt))),t.stunT>0?i.spin+=n*14:i.spin*=Math.max(0,1-n*8),i.body.rotation.set(i.pitch+Math.sin(i.t*3.1)*.012,i.spin+(t.drifting?-s*.35:0),d,`YXZ`),i.body.position.y=Math.sin(i.t*5.3)*.02,i.spec.anim?.({t:i.t,dt:n,sp:o,steer:s,boost:i.boostK,r:t,isPlayer:i.isPlayer});let f=.85+Math.sin(i.t*40)*.08+Math.random()*.07;for(let e of i.flames){let t=e.userData,n=(.25+o*.9+i.boostK*.6)*(1+i.kick)*f*(t.k??1),r=t.r*2*(1+i.boostK*.15+i.kick*.3);e.scale.set(r,r,n)}for(let e of i.shims){let t=e.userData,n=t.r*4.2,r=(.6+o*2.4+i.boostK)*(t.k??1);e.scale.set(n,n,r)}i.shimMat.color.copy(i.shimBase).multiplyScalar(.5+o*.8),i.flameMat.color.copy(i.flameBase).lerp(gn.copy(hn).multiplyScalar(1.2),i.boostK*.55).multiplyScalar(.5+o*.3),i.glowMat.color.setScalar(.8+o*.25+i.boostK*.15);let p=.8+Math.sin(i.t*9)*.2;i.padMat.color.copy(i.padBase).multiplyScalar(p),i.ugMat.color.copy(i.ugBase).multiplyScalar(.75+.25*p+i.boostK*.15),i.under.position.y=-t.h+.06,i.light&&(i.light.intensity=.7+o*.25+i.boostK*.15);let m=.12+o*.2+i.boostK*.12,h=i.trailCol,g=Math.min(i.light?Qt:Zt,1.5+o*5+i.boostK),_=mn.set(0,1,0).applyQuaternion(e.quaternion);for(let t of i.trails){let n=t.pts,r=pn.copy(t.origin).applyQuaternion(e.quaternion).add(e.position);if(!t.init){for(let e of n)e.copy(r);t.init=!0}if(n[0].distanceToSquared(n[1])>.09){let e=n.pop();n.splice(1,0,e.copy(n[0]))}n[0].copy(r);let a=t.mesh.geometry.attributes.position.array,o=t.mesh.geometry.attributes.color.array,s=0,c=0,l=n[0].distanceTo(n[1]);for(let e=0;e<Yt;e++){let t=e/13*g;for(;c+l<t&&s<46;)c+=l,s++,l=n[s].distanceTo(n[s+1]);let r=_n.copy(n[s]).lerp(n[s+1],l>1e-5?Math.min(1,(t-c)/l):0),u=1-e/13,d=.05*u+.008,f=e*6;a[f]=r.x+_.x*d,a[f+1]=r.y+_.y*d,a[f+2]=r.z+_.z*d,a[f+3]=r.x-_.x*d,a[f+4]=r.y-_.y*d,a[f+5]=r.z-_.z*d;let p=u*u*u*m;o[f]=o[f+3]=h.r*p+i.boostK*p*.4,o[f+1]=o[f+4]=h.g*p+i.boostK*p*.2,o[f+2]=o[f+5]=h.b*p}t.mesh.geometry.attributes.position.needsUpdate=!0,t.mesh.geometry.attributes.color.needsUpdate=!0}let v=i.sparks.geometry.attributes.position.array,y=i.sparks.geometry.attributes.color.array;if(t.drifting&&t.speed>20){let n=3+Math.floor(o*3)+en(t)*2;for(let r=0;r<n;r++){let n=i.sparkNext;i.sparkNext=(i.sparkNext+1)%$t;let r=(Math.random()<.5?-1:1)*i.spec.sparkX;un.set(r,-t.h+.15,-.9+Math.random()*1.2).applyQuaternion(e.quaternion).add(e.position),v[n*3]=un.x,v[n*3+1]=un.y,v[n*3+2]=un.z;let a=i.sparkVel;a[n*3]=-ln.x*t.speed*.25+(Math.random()-.5)*6+dn.x*r*8,a[n*3+1]=Math.random()*4+1,a[n*3+2]=-ln.z*t.speed*.25+(Math.random()-.5)*6+dn.z*r*8,i.sparkLife[n]=.35+Math.random()*.25}}let b=tn[t.drifting?en(t):i.lastTier??0];t.drifting&&(i.lastTier=en(t));for(let e=0;e<$t;e++){let t=i.sparkLife[e]=Math.max(0,i.sparkLife[e]-n),r=i.sparkVel;t>0&&(r[e*3+1]-=18*n,v[e*3]+=r[e*3]*n,v[e*3+1]+=r[e*3+1]*n,v[e*3+2]+=r[e*3+2]*n);let a=Math.min(1,t*3);y[e*3]=b[0]*a,y[e*3+1]=b[1]*a,y[e*3+2]=b[2]*a}i.sparks.geometry.attributes.position.needsUpdate=!0,i.sparks.geometry.attributes.color.needsUpdate=!0}var yn=[{key:`frontier`,title:`Frontier Cup`,blurb:`Four wild worlds on the edge of the map`},{key:`deep`,title:`Deep Space Cup`,blurb:`Stations, storms and the black hole`},{key:`earth`,title:`Earth Heritage Cup`,blurb:`Where hover racing began`}],bn=[{key:`kessra`,cup:`frontier`,title:`Kessra Dune Sea`,blurb:`Twin suns over the slot canyons`,load:()=>B(()=>import(`./kessra-BlyPlOpZ.js`).then(e=>e.createKessraLevel),__vite__mapDeps([0,1,2,3,4]),import.meta.url)},{key:`vulkar`,cup:`frontier`,title:`Vulkar Magma Forge`,blurb:`Obsidian bridges over rivers of fire`,load:()=>B(()=>import(`./vulkar-BWZcn32S.js`).then(e=>e.createVulkarLevel),__vite__mapDeps([5,1,2,3,4]),import.meta.url)},{key:`rime`,cup:`frontier`,title:`Rime Rift`,blurb:`Glacier canyon under the aurora`,load:()=>B(()=>import(`./rime-DyPHDBxL.js`).then(e=>e.createRimeLevel),__vite__mapDeps([6,1,2,3,4]),import.meta.url)},{key:`lumen`,cup:`frontier`,title:`Lumen Caverns`,blurb:`A living crystal world, lit by the race`,load:()=>B(()=>import(`./lumen-DOa2lbbP.js`).then(e=>e.createLumenLevel),__vite__mapDeps([7,2,3,4]),import.meta.url)},{key:`halo`,cup:`deep`,title:`Halo Orbital Ring`,blurb:`Around the station, a planet underfoot`,load:()=>B(()=>import(`./halo-DHdSqeKU.js`).then(e=>e.createHaloLevel),__vite__mapDeps([8,1,2,3,4]),import.meta.url)},{key:`shatter`,cup:`deep`,title:`Shatterfield`,blurb:`Through the tumbling mining belt`,load:()=>B(()=>import(`./shatter-C9mzAiBu.js`).then(e=>e.createShatterLevel),__vite__mapDeps([9,1,2,3,4]),import.meta.url)},{key:`tempest`,cup:`deep`,title:`Tempest Giant`,blurb:`Sky platforms inside a gas-giant storm`,load:()=>B(()=>import(`./tempest-S38MUE9e.js`).then(e=>e.createTempestLevel),__vite__mapDeps([10,1,2,3,4]),import.meta.url)},{key:`horizon`,cup:`deep`,title:`Event Horizon`,blurb:`One lap around a black hole`,load:()=>B(()=>import(`./horizon-DEoX1KUd.js`).then(e=>e.createHorizonLevel),__vite__mapDeps([11,1,2,4]),import.meta.url)},{key:`city`,cup:`earth`,title:`Neon Megacity`,blurb:`Rain-soaked skyways at night`,load:()=>B(()=>import(`./city-BEuKvGlh.js`).then(e=>e.createCityLevel),__vite__mapDeps([12,1,2,3,4]),import.meta.url)},{key:`angkor`,cup:`earth`,title:`Angkor Wat`,blurb:`Golden hour over the temple moat`,load:()=>B(()=>import(`./angkor-lQSXynyO.js`).then(e=>e.createAngkorLevel),__vite__mapDeps([13,1,2,3,4]),import.meta.url)},{key:`giza`,cup:`earth`,title:`Giza`,blurb:`Across the plateau, under the pyramids`,load:()=>B(()=>import(`./giza-J6VgQjLw.js`).then(e=>e.createGizaLevel),__vite__mapDeps([14,1,2,3,4]),import.meta.url)},{key:`petra`,cup:`earth`,title:`Petra`,blurb:`Through the Siq to the Treasury`,load:()=>B(()=>import(`./petra-JU-xKGEa.js`).then(e=>e.createPetraLevel),__vite__mapDeps([15,1,2,3,4]),import.meta.url)},{key:`machu`,cup:`earth`,title:`Machu Picchu`,blurb:`Cloud-forest ridge above the ruins`,load:()=>B(()=>import(`./machu-DvextLMX.js`).then(e=>e.createMachuLevel),__vite__mapDeps([16,1,2,3,4]),import.meta.url)}],xn=e=>bn.find(t=>t.key===e),Q=(e,t,n)=>Math.max(t,Math.min(n,e)),Sn=new WeakMap;function Cn(e){let t=Sn.get(e);return t||(t={tx:e.x,itemHeld:0,itemDelay:.4+Math.random()*1.2,phase:Math.random()*100,stuckT:0,rollCd:0,lastItem:null,boostOn:!1},Sn.set(e,t)),t}var wn=(e,t,n=1)=>(U.turnRate+(U.turnRateHigh-U.turnRate)*Q(e/U.maxSpeed,0,1))*(t?U.driftTurnMul:1)*n,Tn=(e,t)=>U.turnRate*t/(Math.abs(e)+(U.turnRate-U.turnRateHigh)*t/U.maxSpeed),En=new WeakMap,Dn=2;function On(e){let t=En.get(e);if(!t){let n=Math.ceil(e.length/Dn);t=new Float32Array(n+1);for(let r=0;r<=n;r++)t[r]=e.curvatureAt(r*Dn);En.set(e,t)}return t}function kn(e,t,n){let r=e.wrap(n)/Dn,i=Math.min(Math.floor(r),t.length-2),a=r-i;return t[i]+(t[i+1]-t[i])*a}var $=[];function An(e,t,n=1/60){let r=t.track,i=Cn(e),a=e.skill??.9,o=e.mul||{},s=(o.turn??1)*(e.gripT>0?1.35:1)*(e.overdriveT>0?.85:1),c=r.width/2-1,l=c-1.6,u=e.speed,d=On(r),f=t.state===`race`&&!e.finished;i.rollCd=Math.max(0,i.rollCd-n);let p=Q((a-.55)/.45,0,1),m=.6+.34*a,h=U.brake*(.4+.35*a),g=260,_=1/0;for(let t=10;t<=260;t+=10){let n=kn(r,d,e.s+t);g===260&&Math.abs(n)>.004&&(g=t),t<=90&&_===1/0&&Tn(n,m*s)*1.25<u*.88&&(_=t)}let v=0,y=0;for(let t=8;t<=32;t+=8)v+=kn(r,d,e.s+t)/4;for(let t=45;t<=105;t+=15)y+=kn(r,d,e.s+t)/5;let b=Q(Math.abs(v)*90,0,1),x=(520*v-380*y*(1-b))*(.35+.65*p*p);x+=(1-a)*18*Math.sin(t.time*.37+i.phase),x=Q(x,-l*.8,l*.8);let S=null,C=null,w=null,T=null;for(let n of t.racers){if(n===e||n.finished)continue;let t=r.delta(e.s,n.s);t>3&&(C==null||t<C)&&(C=t,w=n),t>7&&t<40&&Math.abs(n.x-e.x)<5&&n.speed>u-12&&(!S||t<S.ds)&&(S={o:n,ds:t}),Math.abs(t)<3&&Math.abs(n.x-e.x)>1.2&&Math.abs(n.x-e.x)<4.5&&(T=n)}let E=!!S&&g<130,D=!!S&&!E&&g>50&&a>.7,ee=25+u*1.7,O=t.level?.obstacles||[];$.length=0;for(let t of O){if(t.dead)continue;let n=r.delta(e.s,t.s),i=t.r??1.5;n>-(i+2)&&n<ee&&$.push(n,t.x,i)}let k=$.length>0,A=.42,te=3+u*.12,ne=(e.energy??100)<(e.energyMax??100)*.6,j=[...t.items?.pickups||[],...ne&&t.items?.pads||[]],M=x,N=1/0,P=!1,re=Math.sin(e.heading);for(let n=0;n<=20;n++){let a=-l+2*l*n/20,o=Math.abs(a-x)*.25+Math.abs(a-i.tx)*.15,s=!1;for(let t=0;t<$.length;t+=3){let n=$[t],r=$[t+1],i=$[t+2],c=e.x+re*Math.min(Math.max(n,0),te),l=A*Math.max(0,n-te),u=c+Q(a-c,-l,l),d=i+1.5,f=i+3.4,p=Math.abs(u-r),m=Math.abs(a-r),h=1.3-n/ee;p<d?(o+=220*h*(1-p/d*.5),s=!0):p<f&&(o+=28*h*(1-(p-d)/(f-d))),m<f&&(o+=10*(1-m/f))}for(let n of t.racers){if(n===e||n.finished)continue;let t=r.delta(e.s,n.s);if(t<1||t>30)continue;let i=Math.abs(a-n.x);if(n===S?.o){if(D&&t>6){i<.9&&(o-=3.5*p);continue}E&&i<2.8?o+=8*(1-t/40):E&&i<4.6&&(o-=1.5)}n.speed<u-3&&i<2.6?o+=6*(1-t/30):t<5&&i<2.2&&(o+=4)}for(let t of j){if(t.active===!1)continue;let n=r.delta(e.s,t.s);n<4||n>ee||Math.abs(a-t.x)<(t.w?t.w/2:1.6)&&Math.abs(a-e.x)<A*n&&(o-=4.5)}o<N&&(N=o,M=a,P=s)}k?i.tx+=(M-i.tx)*Math.min(1,n*(14+6*a)):i.tx+=(M-i.tx)*Math.min(1,n*(2.5+4*a));let F=Q(i.tx,-l,l),ie=k?Math.max(9,u*.32):Math.max(14,u*.75),I=k?.6:.45,L=Q(Math.atan2(F-e.x,ie),-I,I),ae=kn(r,d,e.s+u*.12)*u*Math.cos(e.heading)+(L-e.heading)*(k?5+2*a:3.2+1.5*a);ae+=(1-a)*.4*Math.sin(t.time*1.9+i.phase*3),Math.abs(e.x)>c-2.5&&Math.sign(e.heading)===Math.sign(e.x)&&(ae-=Math.sign(e.x)*3);let R=0,z=1,oe=!1;for(let t=5;t<=40+u*2.2;t+=10){let n=Tn(kn(r,d,e.s+t),m*s)*1.25,i=Math.sqrt(n*n+2*h*t);u>i&&(R=Math.max(R,Q((u-i)/8,.35,1)),z=0)}P&&(z=0,R=Math.max(R,.3));let se=wn(u,!1,s);Math.abs(ae)>se*.85&&u>38&&(oe=!0);let ce=oe||e.drifting&&Math.abs(ae)>se*.6,le=Q(ae/wn(u,ce,s),-1,1);if(R>.3&&Math.abs(le)>.3&&!ce&&(R=.3),ce&&(z=Math.max(z,.6)),!e.isPlayer){let n=.87+.13*Math.min(a,1);if(t.diff===`elite`||!t.player)e.topMul=1;else{let r=Q((.8-a)/.2,0,1),i=Q((t.player.raceDist-e.raceDist)/(250-90*r),-1,1);e.topMul=n*(1+i*(i>0?.07+.1*r:.05))}}u<8&&t.state!==`countdown`?i.stuckT+=n:i.stuckT=0,i.stuckT>.6&&(z=1,R=0,le=Q(-e.x*.3-e.heading*3,-1,1));let ue=e.energy??0,B=e.energyMax||100,de=a>.95?.22:a>.8?.5:.92,V=g>=(a>.95?60:a>.8?100:180)&&_===1/0&&R===0&&!P&&!ce&&Math.abs(le)<.35;i.boostOn?(ue<B*.04||!V)&&(i.boostOn=!1):V&&ue>B*de&&(i.boostOn=!0);let fe=f&&i.boostOn&&z>.5,H=!1,pe=!1,me=!1;e.item!==i.lastItem&&(i.lastItem=e.item,i.itemHeld=0,i.itemDelay=(.3+Math.random()*1.3)/a),e.item&&(i.itemHeld+=n);let he=1/0;for(let t=0;t<$.length;t+=3)$[t]>0&&Math.abs($[t+1]-e.x)<$[t+2]+2&&(he=Math.min(he,$[t]));w&&C<14&&Math.abs(w.x-e.x)<2.4&&u>w.speed+3&&(he=Math.min(he,C));let ge=he<8+u*.3&&P;if(f&&e.item&&i.itemHeld>Math.min(i.itemDelay,.4)){let t=e.item,n=i.itemHeld,r=n>i.itemDelay,a=g>90&&_===1/0;switch(t){case`boost`:H=r&&(a||n>8);break;case`overdrive`:H=r&&(g>150&&_===1/0||n>10);break;case`dampener`:H=_<70&&_>15||n>14;break;case`tether`:H=r&&C!=null&&C>40&&C<150||n>14;break;case`slipstream`:H=r&&(e.draft>.2||!!S)||n>12;break;case`lift`:case`phase`:H=ge||n>12;break;default:H=r&&n>3}}if(f&&e.rollCd<=0&&i.rollCd<=0&&u>30){let t=Math.sign(M-e.x),r=U.rollDash*(o.dash??1),s=t=>Math.abs(e.x+t*r)<l;he<16&&Math.abs(M-e.x)>.6*r&&t&&s(t)&&Math.random()<.08+.12*a?(t<0?pe=!0:me=!0,i.rollCd=2.5):T&&a>.9&&s(Math.sign(T.x-e.x))&&Math.random()<n*.25&&(T.x<e.x?pe=!0:me=!0,i.rollCd=4)}return{steer:le,throttle:z,brake:R,drift:ce&&u>36&&Math.abs(le)>.3,rollLeft:pe,rollRight:me,useItem:H,boost:fe}}export{we as C,me as D,_e as E,Ee as S,ve as T,Re as _,tn as a,Ne as b,vn as c,qe as d,Ye as f,He as g,ze as h,xn as i,U as l,Ve as m,yn as n,sn as o,Ke as p,bn as r,en as s,An as t,Xe as u,Ie as v,be as w,Me as x,Ae as y};