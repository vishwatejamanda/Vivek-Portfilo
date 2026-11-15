import{r as v,j as _}from"./vendor-CUM6pZK6.js";import{s as mr,u as Pe,W as qo,H as vo,C as Qo,S as pr,M as Ct,a as gr,B as vr,b as wr,P as yr,V as z,c as F,D as et,d as xr,e as P,f as nt,F as sa,g as Re,h as ia,i as st,j as ht,k as ie,l as Sr,R as Mr,L as ca,m as la,n as ua,o as ha,p as te,q as X,r as Q,t as Fo,Q as Se,v as br,A as Rr,w as Ve,x as wo,y as ge,z as I,E as Tr,G as Ar,I as Er,J as _r,K as Cr,N as It,O as zr,T as Pr}from"./three-scene-qOb_56Vx.js";import{B as Yt,H as kr,u as q,G as Fr,E as ze,F as Lr,w as Or,x as Dr,M as Nr,y as Ir,z as Yr}from"./main-HKqPyxAo.js";import{a as Hr,f as Jo,c as en,m as Kt}from"./motion-DEa3jZ1l.js";const Gr="Clock: This module has been deprecated";mr((e,t,...o)=>{if(e==="warn"&&String(t).includes(Gr))return;const n=e==="error"?console.error:e==="warn"?console.warn:console.log,[r]=o;r?.isStackTrace?n(r.getError(t)):n(t,...o)});function Wr(){return null}const Lo={turbidity:3.8,rayleigh:3.4,mieCoefficient:.007,mieDirectionalG:.7,elevation:2.9,azimuth:151,exposure:.375,cloudCoverage:.4,cloudDensity:.45,cloudElevation:.925,ambientIntensity:.4,sunLightIntensity:3},Xr={positionX:-22.6,positionY:.5,positionZ:-20,rotationX:1.55,rotationY:3.15,rotationZ:-.64,scale:40.2,visible:!0,animationSpeed:1.3};function jr(e,t){return e?1e4:t?7500:6e3}function Br(e,t){return e?420:t?300:250}const zt={bladeWidth:.2,bladeHeight:3,bladeJoints:4,grassWidth:420,grassDepth:40,instances:1e4,wireframe:!1,groundColor:"#0a1f0a",windSpeed:.2};Pe.setDecoderPath("draco/");const Vr=[5804542996261093e-21,13562911419845635e-21,30265902468824876e-21],Ur=[18399918514433978e-2,27798023919660528e-2,40790479543861094e-2],Zr=1.6110731556870734,$r=1.5,Kr=1e3,qr=8400,Qr=1250,Jr=.999956676946448,es=19e3,fa=.04,ts=[0,3e-4,75e-5],os=2*Math.PI*(1-Jr),ns=[.07,.1,.04],tn=(e,t,o)=>Math.min(Math.max(e,t),o);function da(e){return 1/(Math.cos(e)+.15*Math.pow(93.885-e*180/Math.PI,-1.253))}function as({sunDirection:e,turbidity:t,rayleigh:o,mieCoefficient:n,mieDirectionalG:r,ozoneDepth:a}){const[s,i,c]=e,l=Kr*Math.max(0,1-Math.exp(-(Zr-Math.acos(tn(i,-1,1)))/$r)),u=Vr.map(g=>g*o),h=.2*t*1e-17,d=Ur.map(g=>.434*h*g*n),p=Math.acos(Math.max(0,i)),m=a.map(g=>Math.exp(-g*da(p)));return{sun:[s,i,c],sunE:l,betaR:u,betaM:d,g:r,ozone:m,horizonTint:tn(Math.pow(1-i,5),0,1)}}function ma(e,t){const o=da(t);return e.betaR.map((n,r)=>Math.exp(-(n*qr*o+e.betaM[r]*Qr*o)))}function pa(e,[t,o,n],r=[0,0,0]){const a=Math.acos(Math.max(0,o)),s=ma(e,a),[i,c,l]=e.sun,u=t*i+o*c+n*l,h=.5*u+.5,d=3/(16*Math.PI)*(1+h*h),p=e.g*e.g,m=1/(4*Math.PI)*((1-p)/Math.pow(1-2*e.g*u+p,1.5));for(let g=0;g<3;g++){const f=(e.betaR[g]*d+e.betaM[g]*m)/(e.betaR[g]+e.betaM[g]);let w=Math.pow(e.sunE*f*(1-s[g]),1.5);w*=1+(Math.sqrt(e.sunE*f*s[g])-1)*e.horizonTint,w*=e.ozone[g],r[g]=(w+.1*s[g])*fa+ts[g]}return r}function ga(e){return ma(e,Math.acos(Math.max(0,e.sun[1]))).map((o,n)=>e.sunE*es*o*e.ozone[n]*fa*os)}function rs(e,t,o=48){const n=[0,0,0],r=[0,0,0],a=Math.PI/2/o,s=2*Math.PI/(o*4);for(let i=0;i<o;i++){const c=(i+.5)*a,l=Math.sin(c),u=Math.cos(c);for(let h=0;h<o*4;h++){const d=(h+.5)*s,p=[l*Math.cos(d),u,l*Math.sin(d)],m=p[0]*t[0]+p[1]*t[1]+p[2]*t[2];if(m<=0)continue;e(p,r);const g=m*l*a*s;for(let f=0;f<3;f++)n[f]+=r[f]*g}}return n}function ss(e,t,o=48){return rs((n,r)=>pa(e,n,r),t,o)}function is(e,{sky:t=ss(e,[0,1,0]),sun:o=ga(e)}={},n=ns){const r=Math.max(0,e.sun[1]);return t.map((a,s)=>n[s]*(a+o[s]*r)/Math.PI)}const Oo={uSunIrradiance:{value:new F(0,0,0)},uSunDirection:{value:new z(0,0,-1)}},cs=128,ls=32,ft=50,We={texture:null,listeners:new Set};function on(e){if(We.texture!==e){We.texture=e;for(const t of We.listeners)t()}}function us(){return v.useSyncExternalStore(e=>(We.listeners.add(e),()=>We.listeners.delete(e)),()=>We.texture,()=>null)}const qe=new z;function hs(e,t,o,n){const r=t.width,a=new Uint16Array(r*r*4),s=[0,0,0],i=[0,0,0];let c={cos:-2,drawn:null,modelled:null};for(let h=0;h<6;h++){const d=o.children[h];e.readRenderTargetPixels(t,0,0,r,r,a,h);for(let p=0;p<r;p++)for(let m=0;m<r;m++){const g=(m+.5)/r*2-1,f=(p+.5)/r*2-1;if(qe.set(g,f,.5).unproject(d).sub(d.position).normalize(),qe.y<=0)continue;const w=(p*r+m)*4,b=[0,1,2].map(T=>et.fromHalfFloat(a[w+T])),S=(2/r)**2/(1+g*g+f*f)**1.5;for(let T=0;T<3;T++)s[T]+=b[T]*qe.y*S;const A=qe.dot(n.sunVector);A>c.cos&&(c={cos:A,drawn:b,modelled:pa(n,qe.toArray(),i).slice()})}}const l=([h,d,p])=>.2126*h+.7152*d+.0722*p,u=Math.min(1,l(c.drawn)/Math.max(l(c.modelled),1e-6));return{irradiance:s,sunThroughCloud:u}}function fs(e,t,o){const n=new qo(cs,{type:vo}),r=new Qo(.1,ft*4,n),a=new pr,s=new Ct(o,t);s.scale.setScalar(ft),s.renderOrder=-1,s.frustumCulled=!1;const i=new gr({side:vr,toneMapped:!1}),c=new Ct(new wr(ft,32,8,0,Math.PI*2,Math.PI/2),i);a.add(s,c);const l=new qo(ls,{type:vo}),u=new Qo(.1,ft*4,l),h=new yr(e);let d=null;return{update(p){c.visible=!1,u.update(e,a),c.visible=!0;const m=hs(e,l,u,{...p,sunVector:new z(...p.sun)}),g=ga(p).map(f=>f*m.sunThroughCloud);Oo.uSunIrradiance.value.setRGB(...g),i.color.setRGB(...is(p,{sky:m.irradiance,sun:g})),r.update(e,a),d=h.fromCubemap(n.texture,d),on(d.texture)},dispose(){on(null),d?.dispose(),h.dispose(),n.dispose(),l.dispose(),c.geometry.dispose(),i.dispose()}}}function yo(e,t,o){if(!e.includes(t))throw new Error(`three's lighting changed; cannot patch: ${t}`);return e.replace(t,o)}const ds=(()=>{const e=xr.lights_fragment_begin,t=e.indexOf("IncidentLight directLight;"),o=e.indexOf("#if defined( RE_IndirectDiffuse )");if(t<0||o<t)throw new Error("three's lighting changed; cannot patch the light loop");return yo(e.slice(0,t)+`
IncidentLight directLight;
directLight.color = uSunIrradiance;
directLight.direction = uSunDirection;
directLight.visible = true;
#if defined( RE_Direct )
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
`+e.slice(o),"vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );","vec3 irradiance = vec3( 0.0 );")})();function ms(e){const t=e.clone();return t.onBeforeCompile=o=>{Object.assign(o.uniforms,Oo),o.fragmentShader=yo(yo(o.fragmentShader,"#include <common>",`#include <common>
uniform vec3 uSunIrradiance;
uniform vec3 uSunDirection;`),"#include <lights_fragment_begin>",ds)},t.customProgramCacheKey=()=>"hero-sky-lit",t}function ps(e,t){for(const o of e)o.envMap!==t&&(o.envMap=t,o.needsUpdate=!0)}function va(e){const t=v.useMemo(()=>{const n=new Map;for(const r of e)n.has(r)||n.set(r,ms(r));return n},[e]);v.useEffect(()=>()=>t.forEach(n=>n.dispose()),[t]);const o=us();return v.useEffect(()=>{ps(t.values(),o)},[t,o]),t}const wa=Math.sqrt(3),gs=.5*(wa-1),Qe=(3-wa)/6,nn=e=>Math.floor(e)|0,an=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Do(e=Math.random){const t=vs(e),o=new Float64Array(t).map(r=>an[r%12*2]),n=new Float64Array(t).map(r=>an[r%12*2+1]);return function(a,s){let i=0,c=0,l=0;const u=(a+s)*gs,h=nn(a+u),d=nn(s+u),p=(h+d)*Qe,m=h-p,g=d-p,f=a-m,w=s-g;let b,S;f>w?(b=1,S=0):(b=0,S=1);const A=f-b+Qe,T=w-S+Qe,y=f-1+2*Qe,E=w-1+2*Qe,C=h&255,x=d&255;let k=.5-f*f-w*w;if(k>=0){const L=C+t[x],Y=o[L],N=n[L];k*=k,i=k*k*(Y*f+N*w)}let M=.5-A*A-T*T;if(M>=0){const L=C+b+t[x+S],Y=o[L],N=n[L];M*=M,c=M*M*(Y*A+N*T)}let D=.5-y*y-E*E;if(D>=0){const L=C+1+t[x+1],Y=o[L],N=n[L];D*=D,l=D*D*(Y*y+N*E)}return 70*(i+c+l)}}function vs(e){const o=new Uint8Array(512);for(let n=0;n<512/2;n++)o[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(e()*(256-n)),a=o[n];o[n]=o[r],o[r]=a}for(let n=256;n<512;n++)o[n]=o[n-256];return o}function _e(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}const qt=Do(_e(7)),dt={x:-12,reach:40,flat:18,fade:42};function Oe(e){const t=dt.reach*(1-P.smoothstep(Math.abs(e-dt.x),dt.flat,dt.fade));return-24+5*Math.sin(e/85+.6)+2.5*Math.sin(e/31+2.1)-t}const ws=5;function ys(e){const t=ws*P.smoothstep(e,-180,-60)*(1-P.smoothstep(e,115,220)),o=-9*P.smoothstep(Math.abs(e-10),140,360);return t+o}const rn=36,xs=.08,Ss=.6;function ve(e,t){const o=Oe(e);let n=ys(e);if(t>o+rn){const a=t-o-rn;n-=xs*(a*a)/(a+60)}else if(t<o){const a=o-t;n-=Ss*a*(1+a/40)}let r=.5*qt(e/100,t/100);return r+=1*qt(e/200,t/200),r+=.1*qt(e/20,t/20),n+r*.5}const xo={x:47.4,z:.1,rotationY:.16,scale:.16,lift:17.7};function Ms(e=!0){const t=e?0:-12;return{bike:{...xo,x:xo.x+t},avatarOffsetX:t}}function No(e,{grow:t=.25,precise:o=!1,localBox:n=null,paused:r=!1}={}){const a=v.useRef({box:null,source:null,frames:0,frustum:new sa,matrix:new nt});Re(({camera:s})=>{const i=e.current;if(!i||r)return;const c=a.current;if(c.source!==n&&(c.source=n,c.box=null),!c.box){if(++c.frames<3)return;i.updateWorldMatrix(!0,!0);const l=n?n.clone().applyMatrix4(i.matrixWorld):new ia().setFromObject(i,o);if(l.isEmpty())return;l.expandByVector(l.getSize(new z).multiplyScalar(t/2)),c.box=l}s.updateMatrixWorld(),c.matrix.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),c.frustum.setFromProjectionMatrix(c.matrix),i.visible=c.frustum.intersectsBox(c.box)})}function bs(e,t,o){e.compile(t,o);const n=new Set;t.traverse(r=>{const a=Array.isArray(r.material)?r.material:[r.material];for(const s of a){if(!s)continue;const i=[...Object.values(s),...Object.values(s.uniforms??{}).map(c=>c?.value)];for(const c of i)c?.isTexture&&c.image&&!c.isRenderTargetTexture&&n.add(c)}});for(const r of n)e.initTexture(r)}const ya=Yt.bike,Rs=({placement:e=xo,onReady:t,pauseCulling:o=!1})=>{const{scene:n}=Pe(ya),r=v.useRef(),a=v.useRef(!1);No(r,{paused:o});const s={positionX:e.x,positionY:ve(e.x,e.z)+e.lift,positionZ:e.z,rotationY:e.rotationY,scale:e.scale},i=v.useMemo(()=>{const l=[];return n?.traverse(u=>{u.isMesh&&(u.userData.sourceMaterial??=u.material,l.push(u.userData.sourceMaterial))}),l},[n]),c=va(i);return v.useEffect(()=>{a.current||n&&(a.current=!0,t?.())},[n,t]),v.useEffect(()=>{n?.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material=c.get(l.userData.sourceMaterial))})},[n,c]),v.useLayoutEffect(()=>{const l=r.current;l&&(l.position.set(s.positionX,s.positionY,s.positionZ),l.rotation.y=s.rotationY,l.scale.setScalar(s.scale))},[s.positionX,s.positionY,s.positionZ,s.rotationY,s.scale]),_.jsx("primitive",{ref:r,object:n})};Pe.preload(ya);const Ts=900;function As(e){return P.clamp(e/Ts,.5,2.5)}const xa="(max-width: 639px), (orientation: landscape) and (max-height: 520px)",Pt={y:14,z:40},sn={tall:.55,wide:.9},So={tall:10,wide:6.5};function Io(e){return P.smoothstep(e,.6,4/3)}function cn(e=16/10){return P.lerp(So.tall,So.wide,Io(e))}const at=e=>Math.min(Math.max(e,0),1);function Sa(e=16/10){return P.lerp(sn.tall,sn.wide,Io(e))}function Ma(e,t,o=16/10){return at(e/Math.max(1,t*Sa(o)))}function ln(e,t,o,n=So.wide){const r=at(t),a=Math.min(Math.max(o,0),.1),s=e.progress-r,i=(e.velocity+n*s)*a,c=Math.exp(-n*a),l=r+(s+i)*c,u=(e.velocity-n*i)*c;e.progress=at(l),e.velocity=e.progress!==l&&Math.sign(u)===Math.sign(l-e.progress)?0:u,Math.abs(e.progress-r)<1e-4&&Math.abs(e.velocity)<.001&&(e.progress=r,e.velocity=0)}const Es=768;function Ee(e,t){return e>=1||t!==void 0&&t>=Es}const Xe=50,Mo=16/10,un=21/9;function _s(e){if(e>=Mo&&e<=un)return Xe;const t=Math.tan(P.degToRad(Xe/2))*P.clamp(e,Mo,un);return P.radToDeg(2*Math.atan(t/Math.max(e,.1)))}const Qt={aspect:390/844,cameraX:4,cameraY:34,cameraZ:215,targetX:2,pitch:P.degToRad(12.5),fov:66},hn={cameraY:30,cameraZ:150,targetX:12,targetY:30+Math.hypot(12,150)*Math.tan(P.degToRad(8)),wideAnchorY:42},Cs={aspect:390/844,cameraX:40,cameraY:3,cameraZ:360,targetX:30,pitch:Math.atan(.2307),fov:Xe},zs={cameraY:3,cameraZ:150,targetX:12,targetY:50,wideAnchorY:10},Ps=10;function ks(e,t){if(e===Xe)return t.targetY;const o=Math.hypot(t.targetX,t.cameraZ),n=Math.atan((t.targetY-t.cameraY)/o),r=e<Xe?t.wideAnchorY:Ps,a=Math.atan((r-t.cameraY)/o),s=Math.tan(a-n)/Math.tan(P.degToRad(Xe/2)),i=a-Math.atan(s*Math.tan(P.degToRad(e/2)));return t.cameraY+o*Math.tan(i)}function Jt(e,t,o,n,r=!1){if(e){const l=_s(t);return{targetX:o.targetX,targetY:ks(l,o),targetZ:0,cameraX:0,cameraY:o.cameraY,cameraZ:o.cameraZ,fov:l}}const a=r?P.clamp(n.aspect/Math.max(t,.1),.45,1.1):1,s=n.targetX+(n.cameraX-n.targetX)*a,i=n.cameraZ*a,c=Math.hypot(n.targetX-s,i);return{targetX:n.targetX,targetY:n.cameraY+c*Math.tan(n.pitch),targetZ:0,cameraX:s,cameraY:n.cameraY,cameraZ:i,fov:n.fov}}function be(e,t=e?Mo:Qt.aspect){const o=Jt(e,t,hn,Qt),n=Ee(t),r=Jt(n,t,zs,Cs,!0),a=n===e?o:Jt(n,t,hn,Qt),s=n?rt.desktop:rt.mobile;return{...o,endPitch:js(r,n),endYaw:n?Ta({...r},s):Math.atan2(a.targetX-a.cameraX,a.targetZ-a.cameraZ),endFov:n?r.fov+s.zoomOut:a.fov}}const rt={desktop:{tilt:27,zoomOut:8,push:16,crane:20,drift:-10,roll:2.2,arc:-6},mobile:{tilt:15,zoomOut:6,push:22,crane:14,drift:-6}},Fs=.4;function kt(e,t,o){return{position:e,height:t,rotationY:o,halfWidth:282/899*t*.75+1.5,halfDepth:261/899*t*.75+1.5}}const Ls=1024,Et=78,mt=.6,Os=.02,fn=4,dn=new Map;function ba(e){const t=Math.round(e*1e3)/1e3,o=dn.get(t);if(o)return o;const n=new st(50,t);Ze(n,be(!0,t),!0,0);const r=new z,a=Math.cos(mt),s=Math.sin(mt),i=d=>{const p=Oe(d)+fn,{halfWidth:m,halfDepth:g}=kt([d,0,p],Et,mt),f=ve(d,p)-.5;let w=1/0;for(const b of Ra)for(let S=0;S<16;S++){const A=S/16*Math.PI*2,T=Math.cos(A)*m,y=Math.sin(A)*g;r.set(d+T*a+y*s,f+b*Et,p-T*s+y*a).project(n),w=Math.min(w,(r.x+1)/2)}return w};let c=-600,l=-30;for(let d=0;d<40;d++){const p=(c+l)/2;i(p)<Os?c=p:l=p}const u=(c+l)/2,h=kt([u,-.5,Oe(u)+fn],Et,mt);return dn.set(t,h),h}const Ds=kt([98,-.5,-14],78,.6),Ns=kt([85,-.5,-40],78,.6),Is=-420,mn=.8;function pn(e,t){const o=P.degToRad(e),n=P.degToRad(t);return new z(Math.cos(o)*Math.sin(n),Math.sin(o),Math.cos(o)*Math.cos(n))}function Ys(e,t,o,n){if(t)return n;const r=be(!0),a=pn(o,n),s=(Is-r.cameraZ)/a.z,i=r.cameraX+a.x*s,c=r.cameraZ+a.z*s,l=be(!1,e),u=new st(50,e);Ze(u,l,!1,0);const h=f=>pn(o,f).multiplyScalar(1e3).add(u.position).project(u).x,d=P.radToDeg(Math.atan2(l.targetX-l.cameraX,l.targetZ-l.cameraZ));let p=P.radToDeg(Math.atan2(i-l.cameraX,c-l.cameraZ));if(p=d+P.euclideanModulo(p-d+180,360)-180,h(p)<=mn)return p;let m=d,g=p;for(let f=0;f<40;f++){const w=(m+g)/2;h(w)<=mn?m=w:g=w}return m}let pt=null;function gn(){if(pt)return pt;const[e,t]=[-90,-24],o=ve(e,t)+Et;return pt=[[-22.6,46,-20],[47.4,50,0],[e,o+2,t],[e-24,o-8,t],[e+24,o-8,t]],pt}const Hs=.01,Ra=[.45,.65,.85];function Gs(e){const t=new st(50,e);Ze(t,be(!0,e),!0,0);const o=ba(e),[n,r,a]=o.position,s=r+ve(n,a),i=Math.cos(o.rotationY),c=Math.sin(o.rotationY),l=1-Hs,u=new z,h=(d,p,m)=>(u.set(d,p,m).project(t),Math.abs(u.x)<=l&&Math.abs(u.y)<=l);if(!h(n,s,a)||!h(n,s+o.height,a))return!1;for(const d of Ra)for(let p=0;p<16;p++){const m=p/16*Math.PI*2,g=Math.cos(m)*o.halfWidth,f=Math.sin(m)*o.halfDepth;if(!h(n+g*i+f*c,s+d*o.height,a-g*c+f*i))return!1}return!0}const Ws=3;function bo(e,t,o){const n=e.targetX-e.cameraX,r=e.targetZ-e.cameraZ,a=Math.hypot(n,r);let s=-1/0;for(const[i,c,l]of o){const u=((i-e.cameraX)*n+(l-e.cameraZ)*r)/a;s=Math.max(s,Math.atan2(c-e.cameraY,u))}return s+P.degToRad(t/2+Ws)}function Ue(e){const t=at(e);return t*t*t*(t*(t*6-15)+10)}const gt=(e,t,o)=>Ue((e-t)/(o-t));function Ft(e,t,o,n,r){return{cameraX:e.cameraX+t.drift*r,cameraY:e.cameraY+t.crane*n,cameraZ:e.cameraZ-t.push*o,targetX:e.targetX+t.drift*Fs*r,targetZ:e.targetZ}}const Xs=e=>{const[t,,o]=e.position;return[[-17,30,1],[30,42,2],[t,e.height+2,o],[t-24,e.height-8,o],[t+24,e.height-8,o]]};function js(e,t){const o=t?rt.desktop:rt.mobile,n={...e},r=Math.atan2(n.targetY-n.cameraY,Math.hypot(n.targetX-n.cameraX,n.targetZ-n.cameraZ)),a=Math.max(P.degToRad(o.tilt),bo(Ft(n,o,1,1,1),n.fov+o.zoomOut,Xs(t?Ds:Ns))-r);return r+a}function Ta(e,t){const o=Ft(e,t,1,1,1);return Math.atan2(o.targetX-o.cameraX,o.targetZ-o.cameraZ)}function Ht(e,t,o){if(!t){const w=Math.hypot(e.targetX-e.cameraX,e.targetZ-e.cameraZ),b=Math.atan2(e.targetY-e.cameraY,w),S=Math.max(e.endPitch,bo(e,e.fov,gn())),A=gt(o,0,.7);return{...e,targetY:e.cameraY+w*Math.tan(b+(S-b)*A),roll:0}}const n=rt.desktop,r=at(o),a=Ue(r),s=gt(r,0,.7),i=gt(r,.1,1),c=gt(r,.04,1),l=Math.hypot(e.targetX-e.cameraX,e.targetZ-e.cameraZ),u=Math.atan2(e.targetY-e.cameraY,l),h=e.endFov,d=Math.max(e.endPitch-u,bo(Ft(e,n,1,1,1),h,gn())-u),p=Ft(e,n,s,i,a);p.cameraX+=n.arc*Math.sin(Math.PI*a);const m=e.endYaw-Ta(e,n),g=Math.atan2(Math.sin(m),Math.cos(m))*a;if(g!==0){const w=p.targetX-p.cameraX,b=p.targetZ-p.cameraZ;p.targetX=p.cameraX+w*Math.cos(g)+b*Math.sin(g),p.targetZ=p.cameraZ-w*Math.sin(g)+b*Math.cos(g)}const f=Math.hypot(p.targetX-p.cameraX,p.targetZ-p.cameraZ);return{...e,...p,targetY:e.targetY+(p.cameraY-e.cameraY)+(f*Math.tan(u+d*c)-l*Math.tan(u)),fov:P.lerp(e.fov,e.endFov,a),roll:P.degToRad(n.roll)*Math.sin(Math.PI*a)}}const vn={lower:6,zoom:.06};function Bs(e,t){if(t<=0)return e;const o=vn.lower*t;return e.cameraY-=o,e.targetY-=o,e.fov*=1-vn.zoom*t,e}function Vs(e){return new z(e.targetX,e.targetY+Pt.y,e.targetZ+Pt.z)}function Aa(e,t){const o=Vs(t);return e.position.set(t.cameraX,t.cameraY,t.cameraZ),e.fov=t.fov,e.lookAt(o),e.updateProjectionMatrix(),e.updateMatrixWorld(!0),o}function Ze(e,t,o,n){const r=Ht(t,o,n),a=new z(r.targetX,r.targetY,r.targetZ);return e.position.set(r.cameraX,r.cameraY,r.cameraZ),e.fov=r.fov,e.lookAt(a),e.rotateZ(r.roll),e.updateProjectionMatrix(),e.updateMatrixWorld(!0),a}const Us=2,Ro=-2,Ea=12,wn=Array.from({length:1201},(e,t)=>Oe(t-600)),Zs=[Math.min(...wn)+Ro,Math.max(...wn)+Ea];function To(e,t){return Oe(e)+Ro+(Ea-Ro)*t**1.3}function $s(e,t,o,n=[-o/2,o/2],r=[-1,8]){const a=Math.min(Us,Math.max(.1,e)),s=new st(50,a),i=be(t,a),c=new sa,l=new nt,u=[new ht(new z(0,1,0),-r[0]),new ht(new z(0,-1,0),r[1]),new ht(new z(0,0,1),-n[0]),new ht(new z(0,0,-1),n[1])],h=new z,d=new z,p=new z,m=new z;let g=1/0,f=-1/0;for(const b of[-1,0,.25,.5,.75,1]){b<0?Aa(s,i):Ze(s,i,t,b),c.setFromProjectionMatrix(l.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse));const S=[...c.planes,...u];for(let A=0;A<S.length-2;A++)for(let T=A+1;T<S.length-1;T++)for(let y=T+1;y<S.length;y++){const E=S[A],C=S[T],x=S[y];d.crossVectors(C.normal,x.normal);const k=E.normal.dot(d);Math.abs(k)<1e-8||(p.crossVectors(x.normal,E.normal),h.crossVectors(E.normal,C.normal),m.copy(d).multiplyScalar(-E.constant).addScaledVector(p,-C.constant).addScaledVector(h,-x.constant).divideScalar(k),!S.some(M=>M.distanceToPoint(m)<-1e-5)&&(g=Math.min(g,m.x),f=Math.max(f,m.x)))}}return!Number.isFinite(g)||!Number.isFinite(f)?{width:12,centre:i.targetX}:{width:Math.ceil((f-g)*1.08+12),centre:(g+f)/2}}const j=64,pe=36,de=j*pe,vt=.1,Ks=9,qs=14,yn=.35,Qs=.18,Js=1.3,eo=3,xn=.55,ei=.9,_a=.002,to=.11,ti=6,oi=14,ni=5,ai=.6,ri=.7,si=1.4,oo=5,Sn=2,Ca=5e-4,R={vx:new Float32Array(de),vy:new Float32Array(de),nextX:new Float32Array(de),nextY:new Float32Array(de),wishX:new Float32Array(de),wishY:new Float32Array(de),bendX:new Float32Array(de),bendY:new Float32Array(de),bendVelocityX:new Float32Array(de),bendVelocityY:new Float32Array(de),data:new Uint16Array(de*4),texture:null,pointer:{x:0,y:0,previousX:0,previousY:0,velocityX:0,velocityY:0},cursor:{x:.5,y:.5,velocityX:0,velocityY:0,fresh:!0},inside:!1,aspect:16/9,steppedAt:-1,active:!1,users:0};R.texture=new Sr(R.data,j,pe,Mr,vo);R.texture.minFilter=ca;R.texture.magFilter=ca;R.texture.wrapS=la;R.texture.wrapT=la;R.texture.needsUpdate=!0;const za=R.texture;function Lt(e,t,o){const n=Math.min(Math.max(t*j-.5,0),j-1),r=Math.min(Math.max(o*pe-.5,0),pe-1),a=Math.floor(n),s=Math.floor(r),i=Math.min(a+1,j-1),c=Math.min(s+1,pe-1),l=n-a,u=r-s,h=e[s*j+a]*(1-l)+e[s*j+i]*l,d=e[c*j+a]*(1-l)+e[c*j+i]*l;return h*(1-u)+d*u}function ii(e,t,o){return o.x=Lt(R.vx,e,t),o.y=Lt(R.vy,e,t),o}function ci(e,t,o,n,r,a,s){const i=Math.hypot((o-e)*R.aspect,n-t),c=Math.max(1,Math.ceil(i/(vt*.5))),l=vt*vt,u=1-Math.exp(-(s*Ks+i/vt*ei));for(let h=1;h<=c;h++){const d=e+(o-e)*h/c,p=t+(n-t)*h/c;for(let m=0;m<pe;m++){const g=(m+.5)/pe-p;if(!(g*g>l*9))for(let f=0;f<j;f++){const w=((f+.5)/j-d)*R.aspect,b=Math.exp(-(w*w+g*g)/l)*u/c;if(b<5e-4)continue;const S=m*j+f;R.vx[S]+=(r-R.vx[S])*b,R.vy[S]+=(a-R.vy[S])*b}}}}function li(e,t,o,n,r,a,s){const i=Math.hypot((o-e)*R.aspect,n-t),c=Math.max(1,Math.ceil(i/(to*.5))),l=to*to,u=1-Math.exp(-s*ti);for(let h=1;h<=c;h++){const d=e+(o-e)*h/c,p=t+(n-t)*h/c;for(let m=0;m<pe;m++){const g=(m+.5)/pe-p;if(!(g*g>l*9))for(let f=0;f<j;f++){const w=((f+.5)/j-d)*R.aspect,b=Math.exp(-(w*w+g*g)/l)*u;if(b<5e-4)continue;const S=m*j+f;R.wishX[S]+=(r-R.wishX[S])*b,R.wishY[S]+=(a-R.wishY[S])*b}}}}function ui(e){const{pointer:t}=R;let o=(t.x-t.previousX)/e,n=(t.y-t.previousY)/e;const r=Math.hypot(o,n);r>eo&&(o*=eo/r,n*=eo/r);const a=1-Math.exp(-e*qs);t.velocityX+=(o-t.velocityX)*a,t.velocityY+=(n-t.velocityY)*a;const s=Math.hypot(t.velocityX,t.velocityY);if(s>_a){const i=xn*Math.tanh(s/xn)/s;ci(t.previousX,t.previousY,t.x,t.y,t.velocityX*i,t.velocityY*i,e),R.active=!0}t.previousX=t.x,t.previousY=t.y}function hi(e){const{pointer:t,cursor:o}=R;o.fresh&&(o.x=t.x,o.y=t.y,o.velocityX=0,o.velocityY=0,o.fresh=!1);const n=o.x,r=o.y,a=1-Math.exp(-e*oi);o.x+=(t.x-o.x)*a,o.y+=(t.y-o.y)*a;const s=1-Math.exp(-e*ni);o.velocityX+=((o.x-n)/e-o.velocityX)*s,o.velocityY+=((o.y-r)/e-o.velocityY)*s;const i=Math.hypot(o.velocityX,o.velocityY);if(i>Ca){const c=ri*Math.tanh(i/ai)/i;li(n,r,o.x,o.y,o.velocityX*c,o.velocityY*c,e),R.active=!0}}function fi(e){const t=Math.exp(-e*Js),o=1-Math.exp(-e*Qs*60);let n=0;for(let r=0;r<pe;r++)for(let a=0;a<j;a++){const s=r*j+a,i=(a+.5)/j-R.vx[s]*e*yn,c=(r+.5)/pe-R.vy[s]*e*yn;let l=Lt(R.vx,i,c),u=Lt(R.vy,i,c);const h=s-(a>0?1:0),d=s+(a<j-1?1:0),p=s-(r>0?j:0),m=s+(r<pe-1?j:0),g=(R.vx[h]+R.vx[d]+R.vx[p]+R.vx[m])/4,f=(R.vy[h]+R.vy[d]+R.vy[p]+R.vy[m])/4;l=(l+(g-l)*o*.25)*t,u=(u+(f-u)*o*.25)*t,R.nextX[s]=l,R.nextY[s]=u,n=Math.max(n,Math.abs(l),Math.abs(u))}return R.vx.set(R.nextX),R.vy.set(R.nextY),n}function di(e){const t=Math.exp(-e*si),o=e/Sn,n=oo*oo,r=2*oo;let a=0;for(let s=0;s<de;s++){R.wishX[s]*=t,R.wishY[s]*=t;let i=R.bendX[s],c=R.bendY[s],l=R.bendVelocityX[s],u=R.bendVelocityY[s];for(let h=0;h<Sn;h++)l+=(n*(R.wishX[s]-i)-r*l)*o,u+=(n*(R.wishY[s]-c)-r*u)*o,i+=l*o,c+=u*o;R.bendX[s]=i,R.bendY[s]=c,R.bendVelocityX[s]=l,R.bendVelocityY[s]=u,a=Math.max(a,Math.abs(i),Math.abs(c),Math.abs(R.wishX[s]),Math.abs(R.wishY[s]))}return a}function Pa(e,t){if(R.steppedAt===e)return;R.steppedAt=e;const o=Math.min(Math.max(t,0),.05);if(o<=0||(R.inside?(ui(o),hi(o)):(R.pointer.velocityX=0,R.pointer.velocityY=0,R.cursor.fresh=!0),!R.active))return;const n=fi(o),r=di(o);if(n<_a&&r<Ca&&!R.inside){ka();return}for(let a=0;a<de;a++)R.data[a*4]=et.toHalfFloat(R.vx[a]),R.data[a*4+1]=et.toHalfFloat(R.vy[a]),R.data[a*4+2]=et.toHalfFloat(R.bendX[a]),R.data[a*4+3]=et.toHalfFloat(R.bendY[a]);R.texture.needsUpdate=!0}function ka(){R.vx.fill(0),R.vy.fill(0),R.wishX.fill(0),R.wishY.fill(0),R.bendX.fill(0),R.bendY.fill(0),R.bendVelocityX.fill(0),R.bendVelocityY.fill(0),R.data.fill(0),R.texture.needsUpdate=!0,R.active=!1}function mi(e){const t=r=>{const a=e.getBoundingClientRect(),s=(r.clientX-a.left)/a.width,i=1-(r.clientY-a.top)/a.height,c=s>=0&&s<=1&&i>=0&&i<=1,{pointer:l}=R;if(!c){R.inside=!1;return}R.aspect=a.width/Math.max(1,a.height),R.inside||(l.previousX=s,l.previousY=i),l.x=s,l.y=i,R.inside=!0},o=r=>{r.relatedTarget==null&&(R.inside=!1)},n=()=>{R.inside=!1};return window.addEventListener("pointermove",t,{capture:!0,passive:!0}),window.addEventListener("pointerout",o,{capture:!0}),window.addEventListener("blur",n),()=>{window.removeEventListener("pointermove",t,{capture:!0}),window.removeEventListener("pointerout",o,{capture:!0}),window.removeEventListener("blur",n)}}let no=null;function Fa(e){const t=ie(o=>o.gl.domElement);v.useEffect(()=>{if(e)return R.users+=1,R.users===1&&(no=mi(t)),()=>{R.users-=1,R.users===0&&(no?.(),no=null,R.inside=!1,ka())}},[t,e])}const Yo=kr,La=3.2,Mn={x:4,y:1.8},bn={x:1.4,y:.75},pi=P.degToRad(.4),gi=1.6,vi=.45,Rn={x:9,y:5},Ye=1e-4;function wi(){return{x:0,y:0,velocityX:0,velocityY:0}}function Tn(e,t,o,n,r,a){const s=e[t]-n,i=(e[o]+a*s)*r,c=Math.exp(-a*r);e[t]=n+(s+i)*c,e[o]=(e[o]-a*i)*c}function yi(e,t,o,n,r=La){const a=Math.min(Math.max(n,0),.1),s=P.clamp(t,-1,1),i=P.clamp(o,-1,1);Tn(e,"x","velocityX",s,a,r),Tn(e,"y","velocityY",i,a,r),Math.abs(e.x-s)<Ye&&Math.abs(e.y-i)<Ye&&Math.abs(e.velocityX)<Ye&&Math.abs(e.velocityY)<Ye&&(e.x=s,e.y=i,e.velocityX=0,e.velocityY=0)}function xi(e){const t=P.clamp(e/vi,0,1);return 1-t*t*t*(t*(t*6-15)+10)}const ao=new z,wt=new z,ro=new z,An=new z,Si=new z(0,1,0);function En(e,t,o,n){const r=o.x*n,a=o.y*n;return Math.abs(r)<Ye&&Math.abs(a)<Ye?(e.lookAt(t),0):(ao.subVectors(t,e.position).normalize(),wt.crossVectors(ao,Si).normalize(),ro.crossVectors(wt,ao),e.position.addScaledVector(wt,r*Mn.x).addScaledVector(ro,a*Mn.y),An.copy(t).addScaledVector(wt,r*bn.x).addScaledVector(ro,a*bn.y),e.lookAt(An),-pi*Math.tanh(o.velocityX*n/gi))}function Mi(e){const t=v.useRef({x:0,y:0,inside:!1});return v.useEffect(()=>{const o=t.current;if(!e){o.inside=!1;return}const n=s=>{s.pointerType!=="mouse"&&s.pointerType!=="pen"||(o.x=s.clientX/Math.max(1,window.innerWidth)*2-1,o.y=1-s.clientY/Math.max(1,window.innerHeight)*2,o.inside=!0)},r=s=>{s.relatedTarget==null&&(o.inside=!1)},a=()=>{o.inside=!1};return window.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerout",r,{passive:!0}),window.addEventListener("blur",a),()=>{window.removeEventListener("pointermove",n),document.removeEventListener("pointerout",r),window.removeEventListener("blur",a),o.inside=!1}},[e]),t}function Ho(e){return Ue((e-.18)/.82)}function bi(e,t){const o=e/Math.max(1,t);return .6+.18*Ue((o-1)/3.5)}const Oa=Fr,Ri=zt.groundColor,_t=new z(.55,.72,1.35),so={r:.2126,g:.7152,b:.0722};function Ti(e){const t=e.r*so.r+e.g*so.g+e.b*so.b;return new F(t*_t.x,t*_t.y,t*_t.z)}const io=new F(Ri).multiplyScalar(.7),Ai=1.4,Ei=.65,_n=[{base:new F("#0a1f0a"),middle:new F("#102810"),tip:new F("#1a3a1a")},{base:new F("#091809"),middle:new F("#0e280e"),tip:new F("black")}],_i=[-16,19],Cn=[8,30],Ci=.25,zi=.6,Pi=.4;function Da(e,t,o){const n=Oe(e),r=P.smoothstep(t,n+Cn[0],n+Cn[1]);return P.smoothstep(-e,40,110)*P.lerp(o,1,r)}function ki(){const e=[];for(let t=-136;t<-12;t+=4)e.push(t);for(let t=-12;t<48;t+=1)e.push(t);for(let t=48;t<=420;t+=4)e.push(t);return e}const Na=(e,t)=>P.lerp(1,Ci,Da(e,t,zi));function Fi(e,t){let o=0;for(let n=0;n<48;n++){const r=t-e/2+(n+.5)/48*e;for(let a=0;a<16;a++)o+=Na(r,To(r,(a+.5)/16))}return o/768}function Li(e,t){for(let o=0;o<16;o++){const n=Math.random()*e-e/2+t,r=To(n,Math.random());if(Math.random()<Na(n,r))return[n,r]}return[t,To(t,Math.random())]}const Oi=(e,t,o)=>{const n=[],r=[],a=[],s=[],i=[],c=[],l=[],u=[],h=new F,d=new Se,p=new Se,m=-.25,g=.25;for(let w=0;w<e;w++){const[b,S]=Li(t,o),A=ve(b,S),T=1-P.smoothstep(Math.abs(b-o),t*.42,t*.5);s.push(b,A,S);let y=Math.PI-Math.random()*(2*Math.PI);l.push(Math.sin(.5*y)),u.push(Math.cos(.5*y));let E=new z(0,1,0),C=E.x*Math.sin(y/2),x=E.y*Math.sin(y/2),k=E.z*Math.sin(y/2),M=Math.cos(y/2);d.set(C,x,k,M).normalize(),y=Math.random()*(g-m)+m,E=new z(1,0,0),C=E.x*Math.sin(y/2),x=E.y*Math.sin(y/2),k=E.z*Math.sin(y/2),M=Math.cos(y/2),p.set(C,x,k,M).normalize(),d.multiplyQuaternions(d,p),y=Math.random()*(g-m)+m,E=new z(0,0,1),C=E.x*Math.sin(y/2),x=E.y*Math.sin(y/2),k=E.z*Math.sin(y/2),M=Math.cos(y/2),p.set(C,x,k,M).normalize(),d.multiplyQuaternions(d,p),i.push(d.x,d.y,d.z,d.w),w<e/3?c.push((1+Math.random()*1.8)*T-1):c.push((1+Math.random())*T-1);const D=_n[Math.floor(Math.random()*_n.length)],L=Da(b,S,Pi),Y=h.copy(D.base).lerp(io,L);a.push(Y.r,Y.g,Y.b);const N=h.copy(D.middle).lerp(io,L);r.push(N.r,N.g,N.b);const H=h.copy(D.tip).lerp(io,L*.9);n.push(H.r,H.g,H.b)}return{offsets:new Float32Array(s),orientations:new Float32Array(i),stretches:new Float32Array(c),halfRootAngleCos:new Float32Array(u),halfRootAngleSin:new Float32Array(l),baseColor:new Float32Array(a),middleColor:new Float32Array(r),tipColor:new Float32Array(n)}},Di=`
    // https://en.wikipedia.org/wiki/Slerp
    vec4 slerp(vec4 v0, vec4 v1, float t) {
        // Only unit quaternions are valid rotations.
        // Normalize to avoid undefined behavior.
        normalize(v0);
        normalize(v1);
        
        // Compute the cosine of the angle between the two vectors.
        float dot_ = dot(v0, v1);
        
        // If the dot product is negative, slerp won't take
        // the shorter path. Fix by reversing one quaternion.
        if (dot_ < 0.0) {
            v1 = -v1;
            dot_ = -dot_;
        }  
        
        const float DOT_THRESHOLD = 0.9995;
        if (dot_ > DOT_THRESHOLD) {
            // If the inputs are too close for comfort, linearly interpolate
            vec4 result = t*(v1 - v0) + v0;
            normalize(result);
            return result;
        }
        
        // Since dot is in range [0, DOT_THRESHOLD], acos is safe
        float theta_0 = acos(dot_);       // theta_0 = angle between input vectors
        float theta = theta_0*t;          // theta = angle between v0 and result
        float sin_theta = sin(theta);     // compute this value only once
        float sin_theta_0 = sin(theta_0); // compute this value only once
        float s0 = cos(theta) - dot_ * sin_theta / sin_theta_0;
        float s1 = sin_theta / sin_theta_0;
        return (s0 * v0) + (s1 * v1);
    }
    `,Ni=`
    // WEBGL-NOISE FROM https://github.com/stegu/webgl-noise
    // Optimized version
    vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    vec2 mod289(vec2 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    vec3 permute(vec3 x) {
        return mod289(((x*34.0)+1.0)*x);
    }
    float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }
`,Ii=`
    // https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/
    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){
        return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;
    }
`,Yi=`
    precision mediump float; // lowered precision for performance

    attribute vec3 baseColor;
    attribute vec3 middleColor;
    attribute vec3 tipColor;
    attribute vec3 offset;
    attribute vec4 orientation;
    attribute float halfRootAngleSin;
    attribute float halfRootAngleCos;
    attribute float stretch;

    uniform float uTime;
    uniform float uBladeHeight;
    uniform float uWindSpeed;
    uniform sampler2D uWindField;

    varying vec2 vUv;
    varying vec3 vPosition;
    varying float vRelativeY;
    varying vec3 vBaseColor;
    varying vec3 vMiddleColor;
    varying vec3 vTipColor;
    
    ${Ni}
    
    ${Ii}
    
    ${Di}
    
    void main() {
        // Relative position of vertex along the mesh Y direction
        vRelativeY = position.y / float(uBladeHeight);
        
        // Get wind data from simplex noise - optimized
        float adjustedTime = uTime * uWindSpeed;
        float worldX = adjustedTime - offset.x / 50.0;
        float worldZ = adjustedTime - offset.z / 50.0;
        float noise = 1.0 - snoise(vec2(worldX, worldZ));
        
        // Define the direction of an unbent blade of grass rotated around the Y axis
        vec4 direction = vec4(0.0, halfRootAngleSin, 0.0, halfRootAngleCos);
        
        // Interpolate between the unbent direction and the direction of growth calculated on the CPU
        direction = slerp(direction, orientation, vRelativeY);
        vec3 localBentPosition = vec3(position.x, position.y + position.y * stretch, position.z);
        localBentPosition = rotateVectorByQuaternion(localBentPosition, direction);
        
        // Apply wind
        float halfAngle = noise * 0.3;  // Increased wind effect
        vec4 windQuat = normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle)));
        localBentPosition = rotateVectorByQuaternion(localBentPosition, windQuat);

        // The cursor's breeze, read where this blade's root sits on screen so
        // the whole blade moves as one: the lean its patch has been eased to.
        // Screen-right is world +x and screen-up is away from the camera.
        vec4 rootClip = projectionMatrix * modelViewMatrix * vec4(offset, 1.0);
        vec2 fieldUv = clamp(rootClip.xy / rootClip.w * 0.5 + 0.5, 0.0, 1.0);
        vec4 wind = texture2D(uWindField, fieldUv);
        vec2 push = vec2(wind.z, -wind.w) * ${Ai.toFixed(2)};
        // Soft cap: gentle passes bend in proportion, brisk ones lean further
        // but never fold a blade flat.
        push /= 1.0 + length(push);
        float bladeTipWeight = vRelativeY * vRelativeY;
        vec2 lean = push * bladeTipWeight * uBladeHeight * ${Ei.toFixed(2)};
        // A leaning blade keeps its length, so it sinks as it bends.
        float height = max(localBentPosition.y, 0.0001);
        localBentPosition.xz += lean;
        localBentPosition.y = sqrt(max(height * height - dot(lean, lean), height * height * 0.2));
        
        // Calculate final position
        vec3 offsetPosition = offset + localBentPosition;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(offsetPosition, 1.0);

        // Varyings
        vUv = uv;
        vPosition = offsetPosition;
        vBaseColor = baseColor;
        vMiddleColor = middleColor;
        vTipColor = tipColor;
    }
`,Hi=`
    precision mediump float; // lowered precision for performance

    uniform sampler2D alphaMap;
    uniform float uNight;
    uniform vec3 uNightTint;

    varying vec3 vBaseColor;
    varying vec3 vMiddleColor;
    varying vec3 vTipColor;
    varying vec3 vPosition;
    varying vec2 vUv;
    varying float vRelativeY;
    
    void main() {
        // Optimized color mixing
        vec3 bladeColor = mix(
            mix(vBaseColor, vMiddleColor, vRelativeY),
            vTipColor, 
            vRelativeY * vRelativeY // Squared for better gradation
        );
        // At night the meadow loses its green: each blade keeps its own
        // light and dark but takes the navy of the night sky over it, so the
        // grass reads as part of the same night as the valley beyond.
        float bladeLight = dot(bladeColor, vec3(0.2126, 0.7152, 0.0722));
        bladeColor = mix(bladeColor, bladeLight * uNightTint, uNight);

        // Early discard for transparent pixels
        float alpha = texture2D(alphaMap, vUv).r;
        if (alpha < 0.15) discard;

        gl_FragColor = vec4(bladeColor, 1.0);

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
`,Ia=v.memo(({onReady:e,motion:t=null})=>{const{size:o}=ie(),n=ua(Oa),r=q("(min-width: 1024px)",!0),a=q("(min-width: 768px)",!0),s=q(Yo,!0),i=v.useRef({value:0}),c=v.useRef({value:0}),l=v.useRef(!1),u=Wr();v.useEffect(()=>{l.current||(l.current=!0,e?.())},[e]),Fa(s);const h=v.useMemo(()=>$s(o.width/Math.max(1,o.height),Ee(o.width/Math.max(1,o.height),o.width),zt.grassDepth,Zs,_i),[o.width,o.height,u?.grass.grassDepth]),d=jr(r,a),p=Math.round(Math.min(d,d*h.width/Br(r,a))*Fi(h.width,h.centre)),{bladeWidth:m,bladeHeight:g,bladeJoints:f,wireframe:w,groundColor:b,grassWidth:S,grassDepth:A,instances:T,windSpeed:y}={...zt,grassWidth:h.width,instances:p},E=h.centre,C=v.useMemo(()=>Oi(T,S,E),[T,S,E]),x=v.useMemo(()=>{const H=new ia,B=new z;for(let G=0;G<C.offsets.length;G+=3)H.expandByPoint(B.fromArray(C.offsets,G));return H.max.y+=g*3.5,H.expandByScalar(g*1.5)},[C,g]),k=v.useRef(null);No(k,{grow:0,localBox:x});const M=v.useMemo(()=>new ha(m,g,1,f).translate(0,g/2,0),[m,g,f]),D=v.useMemo(()=>{const H=Math.max(1e3,S+Math.abs(E)*2),B=240,G=ki(),oe=new Float32Array((B+1)*G.length*3);let J=0;for(let ae=0;ae<=B;ae++){const ce=E-H/2+ae/B*H,le=Oe(ce);for(const re of G){const U=le+re;oe[J++]=ce,oe[J++]=ve(ce,U),oe[J++]=U}}const V=[];for(let ae=0;ae<B;ae++)for(let ce=0;ce<G.length-1;ce++){const le=ae*G.length+ce,re=le+G.length;V.push(le,le+1,re,re,le+1,re+1)}const ne=new te;return ne.setAttribute("position",new X(oe,3)),ne.setIndex(V),ne.computeVertexNormals(),ne},[S,E]);v.useEffect(()=>()=>M.dispose(),[M]),v.useEffect(()=>()=>D.dispose(),[D]);const L=v.useMemo(()=>{const H=new F(b);return{day:H,night:Ti(H)}},[b]),Y=v.useRef(null);Re(({clock:{elapsedTime:H}},B)=>{i.current.value=H,s&&Pa(H,B);const G=Ho(t?.current.night??0);G!==c.current.value&&(c.current.value=G,Y.current?.color.lerpColors(L.day,L.night,G))});const N=v.useMemo(()=>new Q({uniforms:{uTime:i.current,uNight:c.current,uNightTint:{value:_t},uBladeHeight:{value:g},alphaMap:{value:n},uWindSpeed:{value:y},uWindField:{value:za}},vertexShader:Yi,fragmentShader:Hi,side:Fo,wireframe:w}),[g,n,y,w]);return v.useEffect(()=>()=>N.dispose(),[N]),_.jsx(_.Fragment,{children:_.jsxs("group",{children:[_.jsx("mesh",{geometry:D,children:_.jsx("meshBasicMaterial",{ref:Y,color:b})}),_.jsx("group",{children:_.jsxs("mesh",{ref:k,frustumCulled:!1,children:[_.jsxs("instancedBufferGeometry",{index:M.index,"attributes-position":M.attributes.position,"attributes-uv":M.attributes.uv,children:[_.jsx("instancedBufferAttribute",{attach:"attributes-offset",args:[C.offsets,3]}),_.jsx("instancedBufferAttribute",{attach:"attributes-orientation",args:[C.orientations,4]}),_.jsx("instancedBufferAttribute",{attach:"attributes-stretch",args:[C.stretches,1]}),_.jsx("instancedBufferAttribute",{attach:"attributes-halfRootAngleSin",args:[C.halfRootAngleSin,1]}),_.jsx("instancedBufferAttribute",{attach:"attributes-halfRootAngleCos",args:[C.halfRootAngleCos,1]}),_.jsx("instancedBufferAttribute",{attach:"attributes-baseColor",args:[C.baseColor,3]}),_.jsx("instancedBufferAttribute",{attach:"attributes-middleColor",args:[C.middleColor,3]}),_.jsx("instancedBufferAttribute",{attach:"attributes-tipColor",args:[C.tipColor,3]})]},[m,g,f,S,A,T].join("-")),_.jsx("primitive",{object:N})]})})]})})});Ia.displayName="Grass";ua.preload(Oa);let co={key:"",direction:new z(0,1,0)};function Go(){const{width:e,height:t}=ie(r=>r.size),{elevation:o,azimuth:n}=Lo;return v.useMemo(()=>{const r=e/Math.max(1,t),a=Ee(r,e),s=[r,a,o,n].join();if(co.key!==s){const i=Ys(r,a,o,n);co={key:s,direction:new z().setFromSphericalCoords(1,P.degToRad(90-o),P.degToRad(i))}}return co.direction},[e,t,o,n])}const Gi=[["uniform vec3 up;",`uniform vec3 up;
		uniform vec2 sunDiscEdge;
		uniform float sunVisible;
		uniform float sunDiscIntensity;
		uniform float skySaturation;
		uniform float highSkySaturation;
		uniform float highSkyLevel;
		uniform vec3 ozoneDepth;`],["float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );",`float sunEdge = clamp( ( sunDiscEdge.y - cosTheta ) / ( sunDiscEdge.y - sunDiscEdge.x ), 0.0, 1.0 );
			float sundisk = max( exp2( -17.0 * sunEdge ) - exp2( -17.0 ), 0.0 ) * sunVisible * sunDiscIntensity;`],["// nightsky",`float ozoneSunZenith = acos( max( 0.0, dot( up, vSunDirection ) ) );
			float ozoneAirmass = 1.0 / ( cos( ozoneSunZenith ) + 0.15 * pow( 93.885 - ( ( ozoneSunZenith * 180.0 ) / pi ), -1.253 ) );
			Lin *= exp( -ozoneDepth * ozoneAirmass );

			// nightsky`],["#include <tonemapping_fragment>",`#include <tonemapping_fragment>
			float highSky = smoothstep( 0.07, 0.21, direction.y );
			float skyChroma = skySaturation * mix( 1.0, highSkySaturation, highSky );
			gl_FragColor.rgb = max( mix( vec3( dot( gl_FragColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) ), gl_FragColor.rgb, skyChroma ), 0.0 ) * mix( 1.0, highSkyLevel, highSky );`]],zn={skySaturation:1.1,highSkySaturation:.85,highSkyLevel:.85},Wi=[.018,.027,8e-4],Xi=400,ji=.72,Bi=.035,Pn=Math.acos(.999956676946448),kn={phone:[1.5,.7],desktop:[1.08,.97]};function Fn(e){const[t,o]=e?kn.phone:kn.desktop;return new Ve(Math.cos(Pn*t),Math.cos(Pn*o))}const Ya=v.memo(({showSun:e=!0,motion:t=null})=>{const{scene:o,gl:n}=ie(),r=v.useRef(null),a=v.useRef(null),s=q(xa,!0),i=Go(),{turbidity:c,rayleigh:l,mieCoefficient:u,mieDirectionalG:h,exposure:d,cloudCoverage:p,cloudDensity:m,cloudElevation:g}=Lo;return v.useLayoutEffect(()=>{const f=new br;f.scale.setScalar(45e4),f.material.uniforms.sunDiscEdge={value:Fn(!1)},f.material.uniforms.sunVisible={value:1},f.material.uniforms.sunDiscIntensity={value:Bi};for(const w of Object.keys(zn))f.material.uniforms[w]={value:zn[w]};return f.material.uniforms.ozoneDepth={value:new z(...Wi).multiplyScalar(Xi/300*ji)},f.material.fragmentShader=Gi.reduce((w,[b,S])=>{if(!(typeof b=="string"?w.includes(b):b.test(w)))throw new Error(`Sky shader changed; cannot patch: ${b}`);return w.replace(b,S)},f.material.fragmentShader),o.add(f),r.current=f,a.current=fs(n,f.material,f.geometry),n.toneMapping=Rr,()=>{a.current.dispose(),a.current=null,r.current=null,o.remove(f),f.geometry.dispose(),f.material.dispose()}},[n,o]),v.useLayoutEffect(()=>{r.current.material.uniforms.sunVisible.value=e?1:0},[e]),Re((f,w)=>{const b=r.current;if(!b)return;b.material.uniforms.time.value+=w;const S=t?.current.night??0;b.material.uniforms.sunVisible.value=(e?1:0)*(1-P.smoothstep(S,.75,.9))}),v.useLayoutEffect(()=>{r.current?.material.uniforms.sunDiscEdge.value.copy(Fn(s))},[s]),v.useLayoutEffect(()=>{const f=r.current;if(!f)return;n.toneMappingExposure=d;const w=f.material.uniforms;w.turbidity.value=c,w.rayleigh.value=l,w.mieCoefficient.value=u,w.mieDirectionalG.value=h,w.cloudCoverage.value=p,w.cloudDensity.value=m,w.cloudElevation.value=g,w.sunPosition.value.copy(i);const b=as({sunDirection:i.toArray(),turbidity:c,rayleigh:l,mieCoefficient:u,mieDirectionalG:h,ozoneDepth:w.ozoneDepth.value.toArray()}),{sunVisible:S,skySaturation:A,highSkySaturation:T,highSkyLevel:y}=w,E=[S.value,A.value,T.value,y.value];S.value=0,A.value=1,T.value=1,y.value=1,a.current.update(b),[S.value,A.value,T.value,y.value]=E},[p,m,g,d,n,u,h,l,i,c]),null});Ya.displayName="Sky";const Vi=305,Ui=394,Ln=140,Zi=4600,ee=-25,ke=`
  // Pulls a virtual point in along its line of sight, keeping its direction
  // and its order in depth.
  vec3 remapToBackdrop( vec3 p ) {
    float d = max( length( p ), 1.0 );
    float t = clamp( log( d / ${Ln.toFixed(1)} ) / ${Math.log(Zi/Ln).toFixed(6)}, 0.0, 1.0 );
    return p / d * mix( ${Vi.toFixed(1)}, ${Ui.toFixed(1)}, t );
  }
`,Wo=`
  uniform vec3 uSunDir;
  uniform vec3 uHazeCool;
  uniform vec3 uHazeWarm;
  uniform vec3 uHazeGlow;
  vec3 hazeColor( vec3 dir ) {
    vec2 flat2 = normalize( dir.xz );
    vec2 sun = normalize( uSunDir.xz );
    float toward = max( dot( flat2, sun ), 0.0 );
    vec3 haze = mix( uHazeCool, uHazeWarm, pow( toward, 6.0 ) );
    return mix( haze, uHazeGlow, pow( toward, 28.0 ) );
  }
  float aerial( float d, float reach ) {
    return 1.0 - exp( -d / reach );
  }
`,Xo=`
  vec3 mod289v3( vec3 x ) { return x - floor( x * ( 1.0 / 289.0 ) ) * 289.0; }
  vec2 mod289v2( vec2 x ) { return x - floor( x * ( 1.0 / 289.0 ) ) * 289.0; }
  vec3 permute3( vec3 x ) { return mod289v3( ( ( x * 34.0 ) + 1.0 ) * x ); }
  float snoise2( vec2 v ) {
    const vec4 C = vec4( 0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439 );
    vec2 i = floor( v + dot( v, C.yy ) );
    vec2 x0 = v - i + dot( i, C.xx );
    vec2 i1 = ( x0.x > x0.y ) ? vec2( 1.0, 0.0 ) : vec2( 0.0, 1.0 );
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289v2( i );
    vec3 p = permute3( permute3( i.y + vec3( 0.0, i1.y, 1.0 ) ) + i.x + vec3( 0.0, i1.x, 1.0 ) );
    vec3 m = max( 0.5 - vec3( dot( x0, x0 ), dot( x12.xy, x12.xy ), dot( x12.zw, x12.zw ) ), 0.0 );
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract( p * C.www ) - 1.0;
    vec3 h = abs( x ) - 0.5;
    vec3 ox = floor( x + 0.5 );
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0 * a0 + h * h );
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot( m, g );
  }
  float fbm2( vec2 p ) {
    float f = 0.0;
    float a = 0.5;
    for ( int i = 0; i < 4; i++ ) {
      f += a * snoise2( p );
      p = p * 2.03 + vec2( 17.1, 9.2 );
      a *= 0.5;
    }
    return f;
  }
`,He={side:[.05,-.4],near:[240,470]};function $i(e,t){const o=Math.hypot(e,t),n=(r,[a,s])=>{const i=Math.min(Math.max((r-a)/(s-a),0),1);return i*i*(3-2*i)};return n(e/Math.max(o,1),He.side)*(1-n(o,He.near))}const Gt=`
  float nearLeftShade( vec3 p ) {
    float d = length( p.xz );
    float side = smoothstep( ${He.side[0].toFixed(2)}, ${He.side[1].toFixed(2)}, p.x / max( d, 1.0 ) );
    return side * ( 1.0 - smoothstep( ${He.near[0].toFixed(1)}, ${He.near[1].toFixed(1)}, d ) );
  }
`,Ha=`
  uniform vec4 uTowns[ TOWN_COUNT ];
  uniform vec3 uTownGlow;
  vec3 townGlow( vec2 p, float reach ) {
    float glow = 0.0;
    for ( int i = 0; i < TOWN_COUNT; i++ ) {
      vec2 d = ( p - uTowns[ i ].xy ) / ( uTowns[ i ].z * reach );
      glow += exp( -dot( d, d ) ) * uTowns[ i ].w;
    }
    return uTownGlow * glow;
  }
`,On=Do(_e(91));function Te(e,t){const o=Math.hypot(e,t);let n=ee;n+=5.5*(On(e/260,t/260)*.5+.5),n+=2.2*On(e/90,t/90);const r=Math.abs(e)/Math.max(o,1);return n+=13*Math.pow(Math.max(r-.5,0)/.5,1.6),n-=6*Math.exp(-(((o-140)/120)**2)),Math.min(n,-8)}function Ki(){const a=[],s=[];for(let c=0;c<=150;c++){const l=40*Math.pow(90,c/150);for(let u=0;u<=200;u++){const h=(u/200-.5)*2*3.2*l,d=-l;a.push(h,Te(h,d),d)}}for(let c=0;c<150;c++)for(let l=0;l<200;l++){const u=c*201+l,h=u+200+1;s.push(u,u+1,h,u+1,h+1,h)}const i=new te;return i.setAttribute("position",new I(a,3)),i.setIndex(s),i.computeVertexNormals(),i}const Dn=`
  ${ke}
  varying vec3 vVirtual;
  varying vec3 vNormalV;
  void main() {
    vVirtual = position;
    vNormalV = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( remapToBackdrop( position ), 1.0 );
  }
`,qi=`
  ${Wo}
  ${Xo}
  ${Ha}
  ${Gt}
  uniform vec3 uFloorDark;
  uniform vec3 uFloorField;
  uniform vec3 uFloorRim;
  uniform float uTime;
  // The lake's centre and radii, and a box around it, so most of the floor
  // skips the test.
  uniform vec4 uLake;
  uniform vec4 uWaterBox;
  uniform vec3 uSunGlint;
  uniform vec3 uWaterSky;
  varying vec3 vVirtual;
  varying vec3 vNormalV;
  // How far inside the water a point is (negative) or outside it, with a
  // shore that wanders a little rather than running round a clean ellipse.
  float waterDistance( vec2 p ) {
    if ( p.x < uWaterBox.x || p.y < uWaterBox.y || p.x > uWaterBox.z || p.y > uWaterBox.w ) return 1e4;
    float wobble = snoise2( p / 38.0 ) * 3.5 + snoise2( p / 11.0 ) * 1.2;
    return ( length( ( p - uLake.xy ) / uLake.zw ) - 1.0 ) * uLake.w + wobble * 2.0;
  }
  void main() {
    float d = length( vVirtual );
    vec3 dir = vVirtual / d;
    vec3 n = normalize( vNormalV );
    // Fields and woods: open fields catch the light of the sky above and
    // read paler than the woods between them. Fields are laid out in plots
    // along the valley, each a little different, with hedgerows between,
    // and the woods are irregular clumps with soft edges.
    vec2 plotUv = vVirtual.xz / vec2( 26.0, 15.0 );
    vec2 plot = floor( plotUv );
    vec2 inPlot = fract( plotUv );
    float plotShade = fract( sin( dot( plot, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
    vec2 edge = min( inPlot, 1.0 - inPlot );
    float hedge = 1.0 - smoothstep( 0.0, 0.08, min( edge.x, edge.y ) );
    vec3 field = uFloorField * ( 0.7 + 0.6 * plotShade );
    field = mix( field, uFloorDark, hedge * 0.7 );
    float clumps = fbm2( vVirtual.xz / 34.0 ) + 0.35 * snoise2( vVirtual.xz / 9.0 );
    float woods = smoothstep( 0.02, 0.2, clumps );
    vec3 ground = mix( field, uFloorDark, woods );
    // Slopes turned to the low sun catch a little of its glow; the faces
    // toward the eye are in shade.
    vec2 sunFlat = normalize( uSunDir.xz );
    float facing = max( dot( normalize( n.xz + 1e-4 ), sunFlat ), 0.0 ) * ( 1.0 - n.y );
    ground += uFloorRim * facing * 1.4;
    vec3 sky = hazeColor( dir );
    float shade = nearLeftShade( vVirtual );
    ground += townGlow( vVirtual.xz, 1.1 ) * 0.5 * ( 1.0 - shade );
    // Water mirrors the sky above it: at these grazing angles it reflects
    // nearly all of it, so the lake reads as a pale sliver of the sunset's
    // glow beyond the dark fields, rippled by the breeze and tinted by the
    // towns on its shore. Anti-aliasing keeps so thin a sliver steady.
    vec2 p = vVirtual.xz;
    float water = waterDistance( p );
    float wet = clamp( 0.5 - water / max( fwidth( water ), 1e-3 ), 0.0, 1.0 );
    float toward = max( dot( normalize( dir.xz ), normalize( uSunDir.xz ) ), 0.0 );
    float glitter = 0.0;
    if ( wet > 0.0 ) {
      // What it mirrors is the band of sky just above the horizon, brighter
      // than the haze over the land: dusky lavender away from the sun,
      // burning salmon toward it.
      float ripple = fbm2( p / vec2( 9.0, 3.0 ) + vec2( 0.0, uTime * 0.12 ) );
      vec3 horizon = mix( uWaterSky, uHazeGlow * 1.7, pow( toward, 8.0 ) );
      vec3 mirror = horizon * ( 0.85 + 0.3 * ripple );
      mirror += townGlow( p, 1.3 ) * 0.9;
      ground = mix( ground, mirror, wet );
      // The sun's glitter: a path of sparks on the water straight below it,
      // brightest where the slope of the waves turns the low sun to the eye.
      float across = atan( dir.x, -dir.z ) - atan( uSunDir.x, -uSunDir.z );
      float spark = smoothstep( 0.3, 0.95, snoise2( p / vec2( 1.7, 0.6 ) + vec2( uTime * 0.5, -uTime * 1.2 ) ) );
      glitter = exp( -across * across / 0.003 ) * ( 0.5 + 2.2 * spark ) * wet;
    }
    // Distance washes it into the dusk air, most of all low in the hollows;
    // water keeps more of its light, being lit by the sky itself.
    float mist = aerial( d, 900.0 );
    vec3 color = mix( ground, sky, clamp( mist * 0.92 * ( 1.0 - wet * 0.7 ), 0.0, 1.0 ) );
    color += uSunGlint * glitter;
    // The near left falls into shade, blending with the grass in front.
    color = mix( color, uFloorDark * 0.8, shade * 0.75 );
    gl_FragColor = vec4( color, 1.0 );
    #include <colorspace_fragment>
  }
`;function Qi({distance:e,height:t,seed:o,sharpness:n,width:r,massifs:a=[]}){const s=Do(_e(o)),i=Math.round(r/6),c=[],l=[],u=[],h=[],d=[],p=g=>{let f=0,w=1,b=1/1100;for(let S=0;S<5;S++){const A=s(g*b,S*7.3)*.5+.5,T=s(g*b*1.3,S*3.1+40),y=1-Math.sqrt(T*T+.04);f+=(A*(1-n)+y*n)*w,w*=S===0?.6:.36,b*=2.2}for(const[S,A,T]of a)f+=T*Math.exp(-(((g-S)/A)**2));return ee+t*Math.max(.12,(f-.25)/1.15)};for(let g=0;g<=i;g++){const f=(g/i-.5)*r,w=p(f),b=(p(f-4)-p(f+4))/8;if(c.push(f,ee-40,-e,f,w,-e),l.push(0,1),u.push(w,w),h.push(b,b),g<i){const S=g*2;d.push(S,S+2,S+1,S+1,S+2,S+3)}}const m=new te;return m.setAttribute("position",new I(c,3)),m.setAttribute("aTop",new I(l,1)),m.setAttribute("aSlope",new I(h,1)),m.setAttribute("aCrest",new I(u,1)),m.userData.crestAt=p,m.setIndex(d),m}const Ji=`
  ${ke}
  attribute float aTop;
  attribute float aSlope;
  attribute float aCrest;
  uniform vec3 uSunDir;
  varying vec3 vVirtual;
  varying float vTop;
  varying float vSlope;
  varying float vCrest;
  void main() {
    vec3 p = position;
    // A low pass in the ranges where the sun goes down, so its disc shows
    // between the peaks.
    float across = abs( atan( p.x, -p.z ) - atan( uSunDir.x, -uSunDir.z ) );
    float pass = exp( -across * across / 0.0035 );
    p.y = mix( p.y, ${ee.toFixed(1)} + ( p.y - ${ee.toFixed(1)} ) * 0.25, pass * aTop );
    vCrest = mix( aCrest, ${ee.toFixed(1)} + ( aCrest - ${ee.toFixed(1)} ) * 0.25, pass );
    vVirtual = p;
    vTop = aTop;
    vSlope = aSlope;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( remapToBackdrop( p ), 1.0 );
  }
`,ec=`
  ${Wo}
  ${Xo}
  uniform vec3 uBody;
  uniform float uReach;
  uniform float uRim;
  uniform float uCrestY;
  uniform float uFoot;
  varying vec3 vVirtual;
  varying float vTop;
  varying float vSlope;
  varying float vCrest;
  void main() {
    float d = length( vVirtual );
    vec3 dir = vVirtual / d;
    vec3 sky = hazeColor( dir );
    float toward = max( dot( normalize( dir.xz ), normalize( uSunDir.xz ) ), 0.0 );
    // Spurs and gullies running down the slopes, faint through miles of air:
    // the pattern is stretched downhill, as water and rock wear it.
    float folds = fbm2( vec2( vVirtual.x / 48.0, vVirtual.y / 13.0 ) );
    vec3 body = uBody * ( 0.82 + 0.36 * folds );
    float haze = aerial( d, uReach );
    // Mist pools at the foot of each range, thick just above the floor and
    // thinning by halfway up, so each ridge stands out from the one behind.
    float h = clamp( ( vVirtual.y - ${ee.toFixed(1)} ) / ( uCrestY - ${ee.toFixed(1)} ), 0.0, 1.0 );
    float foot = pow( 1.0 - smoothstep( 0.0, 0.7, h ), 1.6 );
    vec3 color = mix( body, sky, clamp( haze + foot * uFoot, 0.0, 0.97 ) );
    // That mist is lit by the sunset, brightest on the side toward the sun.
    color += uHazeGlow * foot * uFoot * 0.22 * ( 0.25 + 0.75 * pow( toward, 3.0 ) );
    // The sun low behind lines the crests facing it: a thin edge of light of
    // the same width on screen at any distance, brightest on the slopes
    // that fall away toward the sun.
    float below = max( vCrest - vVirtual.y, 0.0 ) / ( d * 0.0011 );
    float rim = exp( -below ) * pow( toward, 18.0 ) * ( 0.35 + 0.65 * clamp( vSlope * 4.0 + 0.5, 0.0, 1.0 ) );
    color += uHazeGlow * rim * uRim * 0.55;
    gl_FragColor = vec4( color, 1.0 );
    #include <colorspace_fragment>
  }
`;function tc(){const r=[],a=[];for(let i=0;i<=60;i++){const c=170*Math.pow(15.294117647058824,i/60);for(let l=0;l<=80;l++){const u=(l/80-.5)*2*3*c;r.push(u,ee+3.5,-c)}}for(let i=0;i<60;i++)for(let c=0;c<80;c++){const l=i*81+c,u=l+80+1;a.push(l,l+1,u,l+1,u+1,u)}const s=new te;return s.setAttribute("position",new I(r,3)),s.setIndex(a),s}const oc=`
  ${Wo}
  ${Xo}
  ${Ha}
  ${Gt}
  uniform float uTime;
  uniform float uOpacity;
  varying vec3 vVirtual;
  varying vec3 vNormalV;
  void main() {
    float d = length( vVirtual );
    vec3 dir = vVirtual / d;
    vec2 drift = vec2( uTime * 0.9, uTime * 0.25 );
    float n = fbm2( ( vVirtual.xz + drift ) / vec2( 160.0, 60.0 ) );
    float body = smoothstep( -0.15, 0.55, n );
    // Thinner close by, where the eye looks down through it, and fading out
    // before the horizon so it never draws a hard line.
    float reach = smoothstep( 180.0, 520.0, d ) * ( 1.0 - smoothstep( 1600.0, 2600.0, d ) );
    // Lit from below where it drifts over the towns.
    vec3 lit = townGlow( vVirtual.xz, 1.6 );
    float alpha = ( body * reach * uOpacity + length( lit ) * ( 0.35 + body ) * 0.75 ) *
      ( 1.0 - nearLeftShade( vVirtual ) * 0.85 );
    vec3 color = hazeColor( dir ) * 1.08 + lit * 1.5;
    gl_FragColor = vec4( color, alpha );
    #include <colorspace_fragment>
  }
`,Ao=[[new F("#ffb46a"),.5],[new F("#ffd9a0"),.32],[new F("#fff2dc"),.1],[new F("#bcd2ff"),.08]];function Eo(e){let t=e();for(const[o,n]of Ao)if((t-=n)<=0)return o;return Ao[0][0]}const Ga=[{x:-250,z:-530,spread:80,count:440,angle:.4},{x:-470,z:-420,spread:90,count:520,angle:-.3},{x:160,z:-520,spread:70,count:380,angle:.9},{x:25,z:-860,spread:120,count:150,angle:-.2},{x:-880,z:-800,spread:110,count:380,angle:.2},{x:540,z:-950,spread:120,count:420,angle:-.6},{x:-120,z:-1250,spread:150,count:420,angle:.1},{x:950,z:-1600,spread:160,count:300,angle:.5},{x:-1300,z:-1500,spread:170,count:260,angle:-.2},{x:260,z:-2e3,spread:200,count:300,angle:.3}],Wa=[{x:370,z:-600,spread:80,count:240,angle:-.5},{x:650,z:-880,spread:95,count:220,angle:-.8},{x:1250,z:-1550,spread:150,count:260,angle:.3},{x:980,z:-800,spread:80,count:160,angle:-.4}],nc=[[160,-520],[370,-600],[650,-880],[980,-800]],_o=[...Ga,...Wa],K={x:817,z:-1125,rx:230,rz:70},tt={x:640,z:-1080,along:[.939,.345],half:35},ac=[K.x-K.rx-40,K.z-K.rz-40,K.x+K.rx+40,K.z+K.rz+40],ot=[[-1150,-1180],[-750,-1140],[-380,-1165],[-20,-1130],[250,-1070],[400,-1e3],[470,-940]],Co=new F("#e8f0ff");function Nn(e,t,o=3){return(Math.hypot((e-K.x)/K.rx,(t-K.z)/K.rz)-1)*K.rz<o}const zo=[[[-250,-530],[-470,-420],[-880,-800],[-1300,-1500]],[[-250,-530],[160,-520],[540,-950],[950,-1600]],[[-470,-420],[-120,-1250],[260,-2e3]],[[160,-520],[25,-860],[-120,-1250]]],Xa=[[-195,-440],[-250,-610],[-205,-820],[-245,-1030],[-190,-1260]],rc=4,sc=new F("#ffa64a");function ja(e,t){const o=[];for(let a=0;a<e.length-1;a++){const s=e[Math.max(a-1,0)],i=e[a],c=e[a+1],l=e[Math.min(a+2,e.length-1)];for(let u=0;u<40;u++){const h=u/40,d=h*h,p=d*h;o.push([0,1].map(m=>.5*(2*i[m]+(-s[m]+c[m])*h+(2*s[m]-5*i[m]+4*c[m]-l[m])*d+(-s[m]+3*i[m]-3*c[m]+l[m])*p)))}}o.push(e[e.length-1]);const n=[o[0]];let r=0;for(let a=1;a<o.length;a++){const[s,i]=o[a-1],[c,l]=o[a],u=Math.hypot(c-s,l-i);let h=t-r;for(;h<=u;){const d=h/u;n.push([s+(c-s)*d,i+(l-i)*d]),h+=t}r=u-(h-t)}return n}function ic(e=1){const t=_e(2024),o=[],n=[],r=[],a=[],s=[],i=(f,w,b,S,A,T)=>{o.push(f,w,b),n.push(A.r*T,A.g*T,A.b*T),r.push(S*(.7+t()*.6)),a.push(t()*Math.PI*2),s.push(t())},c=(f,w,b,S)=>{if($i(f,w)>.97||!S&&Nn(f,w))return;const A=Te(f,w)+.4,T=S??Eo(t),y=S?.75+t()*.1:.55+t()*.6;i(f,A,w,b,T,y)},l=(f,w,b,S,A,T)=>{const y=Te(f,b),E=2*y-w,C=y/E*.985;Nn(f*C,b*C,-2)&&i(f*C,E*C,b*C,S*1.15,A,T*.4)},u=(f,w,b,S,A,T)=>{const y=Te(f,w)+b;i(f,y,w,S,A,T),l(f,y,w,S,A,T)},h=f=>{const w=Math.round(f.count*e),b=Math.cos(f.angle),S=Math.sin(f.angle);for(let A=0;A<w;A++){const T=f.spread*Math.pow(t(),1.6),y=t()*Math.PI*2;let E=Math.cos(y)*T,C=Math.sin(y)*T*.75;const x=f.spread/9;t()<.7&&(t()<.5?E=Math.round(E/x)*x:C=Math.round(C/x)*x),c(f.x+E*b-C*S,f.z+E*S+C*b,1)}},d=f=>{for(let w=0;w<f.length-1;w++){const[b,S]=f[w],[A,T]=f[w+1],y=Math.hypot(A-b,T-S),E=Math.round(y/11*e);for(let C=0;C<E;C++){const x=(C+t()*.3)/E,k=Math.sin(x*Math.PI)*y*.06;c(b+(A-b)*x+k*((T-S)/y),S+(T-S)*x-k*((A-b)/y),.8)}}};Ga.forEach(h),zo.forEach(d);for(const[f,w]of ja(Xa,rc))t()<.08||c(f,w,.75,sc);const p=Math.round(90*e);for(let f=0;f<p;f++){const w=200*Math.pow(12,t()),b=(t()-.5)*2*1.6*w,S=3+Math.floor(t()*14),A=3+w*.006;for(let T=0;T<S;T++){const y=A*Math.sqrt(t()),E=t()*Math.PI*2;c(b+Math.cos(E)*y,-w+Math.sin(E)*y*.7,.85)}}const m=Math.round(260*e);for(let f=0;f<m;f++){const w=190*Math.pow(12.631578947368421,t());c((t()-.5)*2*1.6*w,-w,.8)}Wa.forEach(h),d(nc);{const{x:f,z:w,along:b,half:S}=tt;for(let A=-S;A<=S;A+=2)u(f+b[0]*A,w+b[1]*A,3.5,.8,Co,.95)}{const[f,w]=ot[ot.length-1],[b,S]=ot[ot.length-2],A=Math.hypot(f-b,w-S),T=[(f-b)/A,(w-S)/A];for(let y=0;y<26;y+=2.6)for(const E of[-1.4,1.4]){const C=f-T[0]*y-T[1]*E,x=w-T[1]*y+T[0]*E;i(C,Te(C,x)+.8,x,.8,Co,1.1)}}const g=new te;return g.setAttribute("position",new I(o,3)),g.setAttribute("aColor",new I(n,3)),g.setAttribute("aSize",new I(r,1)),g.setAttribute("aPhase",new I(a,1)),g.setAttribute("aOnAt",new I(s,1)),g}const cc=`
  ${ke}
  ${Gt}
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aPhase;
  attribute float aOnAt;
  uniform float uTime;
  uniform float uPixelScale;
  uniform vec2 uSwitchOn;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length( position );
    // Lights come on one by one as the dusk deepens.
    float on = smoothstep( 0.0, 0.6, uTime - mix( uSwitchOn.x, uSwitchOn.y, aOnAt ) );
    // Warm air rising off the valley makes the farther lights shimmer.
    float shimmer = 1.0 + 0.22 * smoothstep( 300.0, 1500.0, d ) *
      sin( uTime * ( 2.0 + aPhase ) + aPhase * 7.0 ) * sin( uTime * 1.3 + aPhase * 3.0 );
    // Distance dims them through the haze.
    float haze = exp( -d / 1700.0 );
    vColor = aColor;
    vAlpha = on * shimmer * mix( 0.35, 1.0, haze ) * ( 1.0 - nearLeftShade( position ) );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( remapToBackdrop( position ), 1.0 );
    gl_PointSize = clamp( 700.0 / d, 1.4, 4.5 ) * aSize * uPixelScale;
  }
`,Je=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float r2 = dot( c, c );
    if ( r2 > 1.0 ) discard;
    // A bright core inside a soft halo.
    float core = exp( -r2 * 9.0 );
    float halo = exp( -r2 * 2.5 ) * 0.35;
    gl_FragColor = vec4( vColor * ( core * 1.6 + halo ) * vAlpha, 1.0 );
    #include <colorspace_fragment>
  }
`,Ae=64,Ba=[{path:()=>Xa,speed:2.4,gap:45},{path:()=>zo[1].slice(0,3),speed:1.6,gap:80},{path:()=>zo[2].slice(0,2),speed:1.6,gap:80}],Va=new F("#ffeacc"),jo=new F("#ff2412");function Ua(e){const t=ja(e,2);let o=0;const n=[0];for(let s=1;s<t.length;s++)o+=Math.hypot(t[s][0]-t[s-1][0],t[s][1]-t[s-1][1]),n.push(o);const r=[];let a=0;for(let s=0;s<Ae;s++){const i=s/(Ae-1)*o;for(;a<t.length-2&&n[a+1]<i;)a++;const c=(i-n[a])/Math.max(n[a+1]-n[a],1e-6),l=t[a][0]+(t[a+1][0]-t[a][0])*c,u=t[a][1]+(t[a+1][1]-t[a][1])*c;r.push(new z(l,Te(l,u)+.5,u))}return{points:r,length:o}}function lc(e){const t=_e(7),o=[],n={position:[],aPath:[],aOffset:[],aSpeed:[],aDir:[],aLane:[],aColor:[]};Ba.forEach((a,s)=>{const{points:i,length:c}=Ua(a.path());o.push(...i);for(const l of[1,-1]){const u=Math.max(2,Math.round(c/a.gap*e)),h=l>0?jo:Va,d=l>0?.75:.8;for(let p=0;p<u;p++)n.position.push(0,0,0),n.aPath.push(s),n.aOffset.push((p+t()*.8)/u),n.aSpeed.push(a.speed*(.85+t()*.3)/c),n.aDir.push(l),n.aLane.push(l>0?-.6:.6),n.aColor.push(h.r*d,h.g*d,h.b*d)}});const r=new te;r.setAttribute("position",new I(n.position,3));for(const a of["aPath","aOffset","aSpeed","aDir","aLane"])r.setAttribute(a,new I(n[a],1));return r.setAttribute("aColor",new I(n.aColor,3)),{geometry:r,paths:o}}const uc=`
  ${ke}
  ${Gt}
  uniform vec3 uPaths[ ${Ae*Ba.length} ];
  uniform float uTime;
  uniform float uPixelScale;
  attribute float aPath;
  attribute float aOffset;
  attribute float aSpeed;
  attribute float aDir;
  attribute float aLane;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    // How far along its road the car is now, wrapping round at the end.
    float f = fract( aOffset + aDir * uTime * aSpeed );
    float s = f * ${(Ae-1).toFixed(1)};
    float i = min( floor( s ), ${(Ae-2).toFixed(1)} );
    int base = int( aPath + 0.5 ) * ${Ae} + int( i );
    vec3 a = uPaths[ base ];
    vec3 b = uPaths[ base + 1 ];
    vec3 p = mix( a, b, s - i );
    vec2 along = normalize( b.xz - a.xz + 1e-4 );
    p.xz += vec2( -along.y, along.x ) * aLane;
    float d = length( p );
    // Cars fade in and out at the ends of the road rather than popping.
    float ends = smoothstep( 0.0, 0.04, f ) * ( 1.0 - smoothstep( 0.96, 1.0, f ) );
    float haze = exp( -d / 1700.0 );
    vColor = aColor;
    vAlpha = ends * mix( 0.35, 1.0, haze ) * ( 1.0 - nearLeftShade( p ) );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( remapToBackdrop( p ), 1.0 );
    gl_PointSize = clamp( 700.0 / d, 1.4, 4.5 ) * 0.7 * uPixelScale;
  }
`,hc=[{range:5,bearing:-16,mast:3,period:2.4,phase:.1},{range:4,bearing:3,mast:3,period:2.1,phase:.55}],fc=[{x:548,z:-942,height:6,period:2.6,phase:.3},{x:532,z:-958,height:4.5,period:2.6,phase:.8}],Za=new F("#ff2a14");function dc(e){const t=[],o=[],n=[];for(const a of hc){const{distance:s}=Bo[a.range],i=s*Math.tan(a.bearing*Math.PI/180),c=e[a.range].userData.crestAt;t.push(i,c(i)+a.mast,-s),o.push(a.period),n.push(a.phase)}for(const a of fc)t.push(a.x,Te(a.x,a.z)+a.height,a.z),o.push(a.period),n.push(a.phase);const r=new te;return r.setAttribute("position",new I(t,3)),r.setAttribute("aPeriod",new I(o,1)),r.setAttribute("aPhase",new I(n,1)),r}const mc=`
  ${ke}
  uniform float uTime;
  uniform float uPixelScale;
  uniform vec3 uColor;
  attribute float aPeriod;
  attribute float aPhase;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length( position );
    // A short, soft-edged flash once a period.
    float beat = fract( uTime / aPeriod + aPhase );
    float flash = smoothstep( 0.0, 0.08, beat ) * ( 1.0 - smoothstep( 0.22, 0.4, beat ) );
    vColor = uColor;
    vAlpha = flash * mix( 0.35, 1.0, exp( -d / 1700.0 ) );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( remapToBackdrop( position ), 1.0 );
    gl_PointSize = clamp( 700.0 / d, 1.4, 4.5 ) * uPixelScale;
  }
`,Ge={coaches:14,gap:2.4,speed:3.2,start:.52,stand:.3},pc=new F("#ffd49a");function gc(){const{points:e,length:t}=Ua(ot),o=[],n=[];for(let a=0;a<=Ge.coaches+1;a++){const[s,i]=a===0?[Co,1.3]:a===Ge.coaches+1?[jo,.7]:[pc,.75];o.push(a),n.push(s.r*i,s.g*i,s.b*i)}const r=new te;return r.setAttribute("position",new I(new Array(o.length*3).fill(0),3)),r.setAttribute("aSlot",new I(o,1)),r.setAttribute("aColor",new I(n,3)),{geometry:r,points:e,length:t}}const vc=`
  ${ke}
  uniform vec3 uPath[ ${Ae} ];
  uniform float uTime;
  uniform float uPixelScale;
  uniform float uLength;
  attribute float aSlot;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    // The engine runs the line, waits at its end, and the next one starts.
    float run = 1.0 + ${Ge.stand.toFixed(2)};
    float cycle = fract( uTime * ${Ge.speed.toFixed(2)} / ( uLength * run ) + ${Ge.start.toFixed(2)} ) * run;
    float f = min( cycle, 1.0 ) - aSlot * ${Ge.gap.toFixed(2)} / uLength;
    float s = clamp( f, 0.0, 1.0 ) * ${(Ae-1).toFixed(1)};
    float i = min( floor( s ), ${(Ae-2).toFixed(1)} );
    vec3 p = mix( uPath[ int( i ) ], uPath[ int( i ) + 1 ], s - i );
    p.y += 0.3;
    float d = length( p );
    float present = step( 0.0, f ) * smoothstep( 0.0, 0.03, f );
    float standing = 1.0 - smoothstep( run - 0.12, run, cycle );
    vColor = aColor;
    vAlpha = present * standing * mix( 0.35, 1.0, exp( -d / 1700.0 ) );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( remapToBackdrop( p ), 1.0 );
    gl_PointSize = clamp( 700.0 / d, 1.4, 4.5 ) * 0.8 * uPixelScale;
  }
`,wc=`
  ${ke}
  attribute vec3 aColor;
  attribute float aRadius;
  uniform float uTime;
  uniform float uPixelScale;
  uniform vec2 uSwitchOn;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length( position );
    vColor = aColor;
    vAlpha = smoothstep( uSwitchOn.x + 0.5, uSwitchOn.x + 3.0, uTime ) * mix( 0.4, 1.0, exp( -d / 1700.0 ) );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( remapToBackdrop( position ), 1.0 );
    gl_PointSize = clamp( 1400.0 * aRadius / d, 2.0, 160.0 ) * uPixelScale;
  }
`,yc=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float r2 = dot( c, c );
    if ( r2 > 1.0 ) discard;
    gl_FragColor = vec4( vColor * exp( -r2 * 4.0 ) * ( 1.0 - r2 ) * vAlpha, 1.0 );
    #include <colorspace_fragment>
  }
`,xc=[[5,-38,.35,8],[5,-27,.5,6],[5,-8,.3,7],[5,9,.45,5],[5,16,.3,10],[5,23,.55,6],[5,41,.35,9],[5,47,.5,6],[4,-33,.7,7],[4,-23,.65,9],[4,-3,.75,5],[4,13,.7,8],[4,20,.8,5],[4,44,.7,8],[3,-40,.8,6],[3,18,.75,7],[3,46,.85,6]],Ot={range:4,bearing:-17},$a={range:5,bearing:-11,width:9,legs:6,from:.12,to:.85,cars:4,speed:.012},Sc={range:3,from:-18,to:8,turbines:11,mast:8},Mc=2,Ka=new F("#ffbf6a"),bc=30;function Le(e,t,o,n){const{distance:r}=Bo[t],a=r*Math.tan(o*Math.PI/180),s=e[t].userData.crestAt(a),i=Te(a,-r);return{x:a,y:i+(s-i)*n,z:-r+bc,crest:s,foot:i}}function Rc(e,t){const o=_e(77),n={position:[],aColor:[],aSize:[],aPhase:[],aOnAt:[],aKind:[],aCrest:[],aRoad:[],aMove:[]},r=(i,c,l,u,h,d,p,m=0)=>{n.position.push(i,c,l),n.aColor.push(h.r*d,h.g*d,h.b*d),n.aSize.push(p),n.aPhase.push(o()*Math.PI*2),n.aOnAt.push(o()),n.aKind.push(m),n.aCrest.push(u),n.aRoad.push(0,0,0,0),n.aMove.push(0,0)};for(const[i,c,l,u]of xc){const h=Le(e,i,c,l),d=Math.max(3,Math.round(u*t));for(let p=0;p<d;p++)r(h.x+(o()-.5)*(3+u*.8),h.y+(o()-.5)*2,h.z,h.crest,Eo(o),.5+o()*.4,.8)}const a=Math.round(70*t);for(let i=0;i<a;i++){const c=[5,5,4,3][Math.floor(o()*4)],l=c===5?.2:.62,u=Le(e,c,-48+o()*100,l+o()*(.9-l));r(u.x,u.y,u.z,u.crest,Eo(o),.45+o()*.35,.75)}{const i=Le(e,Ot.range,Ot.bearing,1);for(let c=0;c<12;c++)r(i.x+(o()-.5)*3,i.y-1.2+o()*1.8,i.z,i.crest,Ka,.9+o()*.4,.85)}{const{range:i,bearing:c,width:l,legs:u,from:h,to:d,cars:p,speed:m}=$a,g=Le(e,i,c,h),f=Le(e,i,c,d);for(let w=1;w<u;w+=2)r(g.x+(w%2?.5:-.5)*l,g.y+(f.y-g.y)*w/u,g.z,g.crest,Ao[0][0],.8,.8);for(let w=0;w<p;w++){const b=w%2?-1:1;r(0,0,g.z,g.crest,b>0?jo:Va,.8,.7,2),n.aRoad.splice(-4,4,g.x,l,g.y,f.y-g.y),n.aMove.splice(-2,2,(w+o()*.5)/p,b*m)}}{const{range:i,from:c,to:l,turbines:u,mast:h}=Sc;for(let d=0;d<u;d++){const p=c+(l-c)*d/(u-1),m=Le(e,i,p,1);r(m.x,m.crest+h,m.z,m.crest,Za,1.2,1.3,1)}}const s=new te;s.setAttribute("position",new I(n.position,3)),s.setAttribute("aColor",new I(n.aColor,3)),s.setAttribute("aRoad",new I(n.aRoad,4)),s.setAttribute("aMove",new I(n.aMove,2));for(const i of["aSize","aPhase","aOnAt","aKind","aCrest"])s.setAttribute(i,new I(n[i],1));return s}const Tc=`
  ${ke}
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aPhase;
  attribute float aOnAt;
  // 0 a lamp, 1 a wind turbine's warning light, 2 a car on the switchback.
  attribute float aKind;
  attribute float aCrest;
  // A car's road (its middle, width, foot and climb) and its place and pace.
  attribute vec4 aRoad;
  attribute vec2 aMove;
  uniform float uTime;
  uniform float uPixelScale;
  uniform vec2 uSwitchOn;
  uniform vec3 uSunDir;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    float alpha = smoothstep( 0.0, 0.6, uTime - mix( uSwitchOn.x, uSwitchOn.y, aOnAt ) );
    if ( aKind > 1.5 ) {
      // Back and forth across the face on each hairpin, climbing or coming
      // down, fading in and out at the road's ends.
      float s = fract( aMove.x + aMove.y * uTime );
      float zig = abs( fract( s * ${($a.legs/2).toFixed(1)} ) * 2.0 - 1.0 );
      p.x = aRoad.x + ( zig - 0.5 ) * aRoad.y;
      p.y = aRoad.z + s * aRoad.w;
      alpha *= smoothstep( 0.0, 0.05, s ) * ( 1.0 - smoothstep( 0.95, 1.0, s ) );
    } else if ( aKind > 0.5 ) {
      float beat = fract( uTime / ${Mc.toFixed(1)} );
      alpha *= smoothstep( 0.0, 0.06, beat ) * ( 1.0 - smoothstep( 0.3, 0.45, beat ) );
    }
    // The mist at a range's foot veils the lights low on its face.
    float h = clamp( ( p.y - ${ee.toFixed(1)} ) / max( aCrest - ${ee.toFixed(1)}, 1.0 ), 0.0, 1.0 );
    alpha *= 1.0 - pow( 1.0 - smoothstep( 0.0, 0.7, h ), 1.6 ) * 0.6;
    // The ranges dip where the sun goes down (see RANGE_VERTEX); lights on
    // them follow.
    float across = abs( atan( p.x, -p.z ) - atan( uSunDir.x, -uSunDir.z ) );
    float pass = exp( -across * across / 0.0035 );
    p.y = mix( p.y, ${ee.toFixed(1)} + ( p.y - ${ee.toFixed(1)} ) * 0.25, pass );
    float d = length( p );
    vColor = aColor;
    vAlpha = alpha * mix( 0.35, 1.0, exp( -d / 1700.0 ) );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( remapToBackdrop( p ), 1.0 );
    gl_PointSize = clamp( 700.0 / d, 1.4, 4.5 ) * aSize * uPixelScale;
  }
`;function Ac(e){const t=[],o=[],n=[],a=(c,l,u,h,d,p)=>{t.push(c*.8,l*.8,u*.8),o.push(d.r*p,d.g*p,d.b*p),n.push(h*.8)};a(tt.x,Te(tt.x,tt.z)+1.5,tt.z,7,new F("#ffe0b4"),.2);const s=Le(e,Ot.range,Ot.bearing,1);a(s.x,s.y,s.z,4.5,Ka,.28);const i=new te;return i.setAttribute("position",new I(t,3)),i.setAttribute("aColor",new I(o,3)),i.setAttribute("aRadius",new I(n,1)),i}const Bo=[{distance:4e3,height:170,seed:5,sharpness:.12,reach:2100,width:16e3,rim:1},{distance:3450,height:135,seed:34,sharpness:.1,reach:2200,width:14e3,rim:.9,massifs:[[900,700,.25]]},{distance:2900,height:105,seed:8,sharpness:.1,reach:2300,width:12e3,rim:.8},{distance:1950,height:62,seed:13,sharpness:.08,reach:2400,width:8e3,rim:.6},{distance:1600,height:46,seed:55,sharpness:.07,reach:2500,width:7e3,rim:.5,massifs:[[1300,450,.3]]},{distance:1250,height:34,seed:21,sharpness:.05,reach:2600,width:5600,rim:.4}],me={hazeCool:new F("#1d1a28"),hazeWarm:new F("#4a2c32"),hazeGlow:new F("#9a5442"),floorDark:new F("#05060a"),floorField:new F("#1a1318"),floorRim:new F("#21140f"),rangeBody:new F("#0b0d16"),townGlow:new F("#5a3018"),sunGlint:new F("#ffc890"),waterSky:new F("#625575")},Ec={hazeCool:new F("#1a232e"),hazeWarm:new F("#1c222b"),hazeGlow:new F("#25221e"),floorDark:new F("#04070b"),floorField:new F("#0c1118"),floorRim:new F("#000000"),rangeBody:new F("#070b11"),townGlow:new F("#5c3e1c"),sunGlint:new F("#000000"),waterSky:new F("#1d2a3a")},_c=Object.fromEntries(Object.entries(me).map(([e,t])=>[e,t.clone()]));function Cc(e){for(const t of Object.keys(me))me[t].lerpColors(_c[t],Ec[t],e)}const zc=_o.map(e=>new wo(e.x,e.z,e.spread,Math.min(1,e.count/420)));function Pc({sunDirection:e,lightScale:t=1}){const o={value:e??new z(.55,.05,-.83)},n={uTowns:{value:zc},uTownGlow:{value:me.townGlow},uSunDir:o,uHazeCool:{value:me.hazeCool},uHazeWarm:{value:me.hazeWarm},uHazeGlow:{value:me.hazeGlow}},r={value:0},a=[],s=Bo.map(m=>{const g=new Q({uniforms:{...n,uBody:{value:me.rangeBody},uReach:{value:m.reach},uRim:{value:m.rim},uCrestY:{value:ee+m.height},uFoot:{value:.35}},vertexShader:Ji,fragmentShader:ec});return{geometry:Qi(m),material:g}});a.push(...s.map((m,g)=>({...m,kind:"mesh",renderOrder:g-s.length}))),a.push({kind:"mesh",renderOrder:-s.length-1,geometry:Ki(),material:new Q({uniforms:{...n,uTime:r,uFloorDark:{value:me.floorDark},uFloorField:{value:me.floorField},uFloorRim:{value:me.floorRim},uLake:{value:new wo(K.x,K.z,K.rx,K.rz)},uWaterBox:{value:new wo(...ac)},uSunGlint:{value:me.sunGlint},uWaterSky:{value:me.waterSky}},vertexShader:Dn,fragmentShader:qi,defines:{TOWN_COUNT:_o.length},side:Fo})});const i={value:1},c=new Q({uniforms:{uTime:r,uPixelScale:i,uSwitchOn:{value:[.8,7]}},vertexShader:cc,fragmentShader:Je,transparent:!0,depthWrite:!1,blending:ge});a.push({kind:"points",geometry:ic(t),material:c}),a.push({kind:"points",geometry:dc(s.map(m=>m.geometry)),material:new Q({uniforms:{uTime:r,uPixelScale:i,uColor:{value:Za.clone().multiplyScalar(.9)}},vertexShader:mc,fragmentShader:Je,transparent:!0,depthWrite:!1,blending:ge})});const l=lc(t);a.push({kind:"points",geometry:l.geometry,material:new Q({uniforms:{uTime:r,uPixelScale:i,uPaths:{value:l.paths}},vertexShader:uc,fragmentShader:Je,transparent:!0,depthWrite:!1,blending:ge})});const u=gc();a.push({kind:"points",geometry:u.geometry,material:new Q({uniforms:{uTime:r,uPixelScale:i,uPath:{value:u.points},uLength:{value:u.length}},vertexShader:vc,fragmentShader:Je,transparent:!0,depthWrite:!1,blending:ge})});const h=s.map(m=>m.geometry);a.push({kind:"points",geometry:Rc(h,t),material:new Q({uniforms:{uTime:r,uPixelScale:i,uSwitchOn:c.uniforms.uSwitchOn,uSunDir:o},vertexShader:Tc,fragmentShader:Je,transparent:!0,depthWrite:!1,blending:ge})}),a.push({kind:"points",geometry:Ac(h),material:new Q({uniforms:{uTime:r,uPixelScale:i,uSwitchOn:c.uniforms.uSwitchOn},vertexShader:wc,fragmentShader:yc,transparent:!0,depthWrite:!1,blending:ge})});const d=new Q({uniforms:{...n,uTime:r,uOpacity:{value:.32}},vertexShader:Dn,fragmentShader:oc,defines:{TOWN_COUNT:_o.length},transparent:!0,depthWrite:!1}),p=tc();return p.computeVertexNormals(),a.push({kind:"mesh",geometry:p,material:d}),{meshes:a,time:r,sunDir:o,lightsMaterial:c,dispose(){for(const{geometry:m,material:g}of a)m.dispose(),g.dispose()}}}const qa=v.memo(({motion:e=null})=>{const t=ie(l=>l.camera),o=ie(l=>l.size.height),n=ie(l=>l.viewport.dpr),r=q(xa,!0),a=Go(),s=v.useRef(null),i=v.useMemo(()=>Pc({lightScale:r?.55:1}),[r]);v.useEffect(()=>()=>i.dispose(),[i]),v.useLayoutEffect(()=>{i.sunDir.value.copy(a)},[i,a]),v.useLayoutEffect(()=>{i.lightsMaterial.uniforms.uPixelScale.value=n*As(o)},[i,n,o]);const c=v.useRef(-1);return Re(({clock:l})=>{i.time.value=l.elapsedTime;const u=Ho(e?.current.night??0);u!==c.current&&(c.current=u,Cc(u)),s.current?.position.copy(t.position)}),_.jsx("group",{ref:s,children:i.meshes.map(({kind:l,geometry:u,material:h,renderOrder:d},p)=>l==="points"?_.jsx("points",{geometry:u,material:h,frustumCulled:!1},p):_.jsx("mesh",{geometry:u,material:h,renderOrder:d??0,frustumCulled:!1},p))})});qa.displayName="Valley";const yt=120,kc=.35,Fc=32,In=[.03,.3],Yn=new z(1.4,0,.4),Lc=.3,Oc=2.2,Hn=[1.5,3.5],Dc=1.2,Gn=["#26341c","#2d391e","#383a1d","#33291a","#2a3020"].map(e=>new F(e));function Nc(){const e=new Er;return e.moveTo(0,-.5),e.quadraticCurveTo(.34,-.12,0,.5),e.quadraticCurveTo(-.34,-.12,0,-.5),new _r(e,5)}function Ic(){return{active:!1,resting:!1,position:new z,velocity:new z,spinAxis:new z,rotation:new Se,swingDirection:new Ve,spin:0,spinSpeed:0,swingPhase:0,swingRate:0,swingReach:0,fallSpeed:0,size:1,groundY:0,age:0,restLeft:0,sink:0}}function Yc(e,t,o){const[n,r,a]=o.position,s=t()*Math.PI*2,i=.65+t()*.35,c=Math.cos(s)*o.halfWidth*i,l=Math.sin(s)*o.halfDepth*i,u=Math.cos(o.rotationY),h=Math.sin(o.rotationY);return e.set(n+c*u+l*h,r+ve(n,a)+o.height*(.45+t()*.45),a-c*h+l*u)}function Hc(e){const[t,o,n]=e.position;return[[0,.7],[-.8,.6],[.8,.6],[0,.92],[0,.48]].map(([r,a])=>new z(t+r*e.halfWidth,o+ve(t,n)+a*e.height,n))}const Qa=v.memo(({tree:e,cursorWind:t=!1})=>{const o=v.useMemo(()=>Hc(e),[e]),n=v.useRef(null),r=ie(m=>m.camera),a=q("(prefers-reduced-motion: reduce)",!0),s=v.useMemo(Nc,[]),i=v.useMemo(()=>new Tr({color:"#ffffff",roughness:.95,metalness:0,side:Fo}),[]),c=v.useMemo(()=>Array.from({length:yt},Ic),[]),l=v.useRef(0),u=v.useMemo(()=>({matrix:new nt,tilt:new Se,flat:new Ar,scale:new z,screen:new z,wind:new Ve,gust:new z,tiltAxis:new z,hidden:new nt().makeScale(0,0,0)}),[]);v.useEffect(()=>{const m=n.current;if(m){for(let g=0;g<yt;g++)m.setMatrixAt(g,u.hidden),m.setColorAt(g,Gn[g%Gn.length]);m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0)}},[u]),v.useEffect(()=>()=>{s.dispose(),i.dispose()},[s,i]);const h=m=>{const{screen:g,wind:f}=u;return g.copy(m).project(r),Math.abs(g.x)>1.2||Math.abs(g.y)>1.2?f.set(0,0):ii(g.x*.5+.5,g.y*.5+.5,f)},d=(m,g)=>{const f=h(m),b=2*Math.max(1,r.position.distanceTo(m))*Math.tan(P.degToRad(r.fov/2));return g.set(f.x*b*r.aspect,f.y*b,0)},p=()=>{const m=c.find(w=>!w.active);if(!m)return;const g=Math.random;m.active=!0,m.resting=!1,Yc(m.position,g,e),m.velocity.copy(Yn),m.spinAxis.set(g()-.5,g()-.5,g()-.5).normalize();const f=g()*Math.PI*2;m.swingDirection.set(Math.cos(f),Math.sin(f)),m.spin=g()*Math.PI*2,m.spinSpeed=1.6+g()*2.6,m.swingPhase=g()*Math.PI*2,m.swingRate=1.4+g()*1.2,m.swingReach=1.6+g()*2.2,m.fallSpeed=3.2+g()*1.8,m.size=1.6+g()*1,m.groundY=.2+g()*.8,m.age=0,m.restLeft=P.lerp(Hn[0],Hn[1],g()),m.sink=0};return Re((m,g)=>{const f=n.current;if(!f)return;const w=Math.min(g,.05),{matrix:b,tilt:S,flat:A,scale:T,gust:y,tiltAxis:E}=u;if(!a){let C=0;if(t)for(const k of o){const M=h(k);C=Math.max(C,Math.hypot(M.x,M.y))}const x=P.smoothstep(C,In[0],In[1]);for(l.current+=(kc+Fc*x)*w;l.current>=1;)l.current-=1,p()}for(let C=0;C<yt;C++){const x=c[C];if(!x.active)continue;if(x.resting){if(x.restLeft>0?x.restLeft-=w:x.sink+=w/Dc,x.sink>=1){x.active=!1,f.setMatrixAt(C,u.hidden);continue}}else{x.age+=w,t?d(x.position,y):y.set(0,0,0),y.multiplyScalar(Lc).add(Yn);const M=1-Math.exp(-w*Oc);x.velocity.x+=(y.x-x.velocity.x)*M,x.velocity.y+=(y.y-x.velocity.y)*M,x.velocity.z+=(y.z-x.velocity.z)*M;const D=x.swingPhase+x.age*x.swingRate,L=Math.cos(D)*x.swingReach*x.swingRate,Y=x.fallSpeed*(.55+.45*Math.abs(Math.sin(D)));x.position.x+=(x.velocity.x+x.swingDirection.x*L)*w,x.position.z+=(x.velocity.z+x.swingDirection.y*L)*w,x.position.y+=(x.velocity.y-Y)*w,x.spin+=x.spinSpeed*w;const N=ve(x.position.x,x.position.z)+x.groundY;x.position.y<=N?(x.position.y=N,x.resting=!0,x.rotation.setFromEuler(A.set(-Math.PI/2,0,x.spin))):(x.rotation.setFromAxisAngle(x.spinAxis,x.spin),E.set(-x.swingDirection.y,0,x.swingDirection.x).normalize(),S.setFromAxisAngle(E,Math.sin(D)*.7),x.rotation.premultiply(S))}const k=x.size*(1-x.sink);T.set(k,k,k),b.compose(x.position,x.rotation,T),f.setMatrixAt(C,b)}f.instanceMatrix.needsUpdate=!0}),_.jsx("instancedMesh",{ref:n,args:[s,i,yt],frustumCulled:!1})});Qa.displayName="FallingLeaves";const Gc=Yt.tree,Ja=899,Wn=26,Wc=6,Xc=45,jc=14,Bc=`
  float rise = clamp( position.y / ${Ja.toFixed(1)}, 0.0, 1.0 );
  float bend = rise * rise;
  float wind = uTime * uWindSpeed - uTreeX / 50.0;
  float gust = 0.6 + 0.4 * sin( wind * 2.1 ) * sin( wind * 0.7 + 1.3 );
  float sway = ( 0.7 * sin( uTime * 0.9 ) + 0.3 * sin( uTime * 1.7 + 0.8 ) ) * gust;
  transformed.x += sway * bend * ${Wn.toFixed(1)};
  transformed.z -= sway * bend * ${(Wn*.6).toFixed(1)};
  float flutter = sin( uTime * 4.0 + position.x * 0.03 + position.z * 0.05 ) *
    sin( uTime * 2.3 + position.y * 0.02 );
  transformed.xz += flutter * rise * gust * ${Wc.toFixed(1)};
  // The cursor's wind, read from the flowing field where this part of the
  // tree sits on screen: it leans the crown along the air's motion and sets
  // the leaves trembling. Screen-right is the world's +x and screen-up is
  // away from the camera; uTreeYaw turns that into the tree's own frame.
  vec4 fieldClip = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  vec2 flow = texture2D( uWindField, clamp( fieldClip.xy / fieldClip.w * 0.5 + 0.5, 0.0, 1.0 ) ).xy;
  float flowSpeed = length( flow );
  if ( flowSpeed > 0.001 ) {
    float stir = 1.0 - exp( -flowSpeed * 2.5 );
    vec2 push = vec2( flow.x, -flow.y ) / flowSpeed;
    vec2 localPush = vec2(
      push.x * cos( uTreeYaw ) - push.y * sin( uTreeYaw ),
      push.x * sin( uTreeYaw ) + push.y * cos( uTreeYaw )
    );
    transformed.xz += localPush * stir * bend * ${Xc.toFixed(1)};
    float tremble = sin( uTime * 9.0 + position.x * 0.07 + position.y * 0.05 ) *
      sin( uTime * 6.3 + position.z * 0.06 );
    transformed.xz += tremble * rise * stir * ${jc.toFixed(1)};
  }
`,er=v.memo(({tree:e,onReady:t})=>{const{position:o,height:n,rotationY:r=0}=e,{scene:a}=Pe(Gc),s=q(Yo,!0);Fa(s);const i=v.useMemo(()=>({uTime:{value:0},uWindSpeed:{value:zt.windSpeed},uTreeX:{value:0},uTreeYaw:{value:0},uWindField:{value:za}}),[]),{geometry:c,material:l}=v.useMemo(()=>{let d=null;a.traverse(m=>{!d&&m.isMesh&&(d=m)});const p=d.material.clone();return p.transparent=!1,p.opacity=1,p.alphaTest=.5,p.depthWrite=!0,p.color.set("#0b0d10"),"emissive"in p&&p.emissive.set("#000000"),p.onBeforeCompile=m=>{Object.assign(m.uniforms,i),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uWindSpeed;
uniform float uTreeX;
uniform float uTreeYaw;
uniform sampler2D uWindField;`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Bc}`)},p.customProgramCacheKey=()=>"hero-tree-wind",{geometry:d.geometry,material:p}},[a,i]);Re(({clock:d},p)=>{i.uTime.value=d.elapsedTime,i.uTreeX.value=o[0],i.uTreeYaw.value=r,s&&Pa(d.elapsedTime,p)}),v.useEffect(()=>()=>l.dispose(),[l]),v.useEffect(()=>{t?.()},[t]);const u=n/Ja,h=[o[0],o[1]+ve(o[0],o[2]),o[2]];return _.jsxs(_.Fragment,{children:[_.jsx("mesh",{geometry:c,material:l,position:h,"rotation-y":r,scale:u}),_.jsx(Qa,{tree:e,cursorWind:s})]})});er.displayName="Tree";const tr=Yt.character,or=Yt.sittingIdle;function Vc({name:e,node:t,material:o}){return!t||!t.geometry||!t.skeleton?null:_.jsx("skinnedMesh",{name:e,geometry:t.geometry,material:o,skeleton:t.skeleton,morphTargetDictionary:t.morphTargetDictionary,morphTargetInfluences:t.morphTargetInfluences,frustumCulled:!1,castShadow:!0,receiveShadow:!1})}const Uc=({onReady:e,offsetX:t=0})=>{const o=v.useRef(),n=v.useRef();No(n,{precise:!0});const r=v.useRef(!1),{nodes:a,materials:s}=Pe(tr),i=v.useMemo(()=>Object.values(s),[s]),c=va(i),[l]=v.useState(()=>new Cr),{animations:u}=Pe(or),{positionX:h,positionY:d,positionZ:p,rotationX:m,rotationY:g,rotationZ:f,scale:w,visible:b,animationSpeed:S}=Xr;v.useEffect(()=>{r.current||(r.current=!0,e?.())},[e]),v.useEffect(()=>{const T=u?.[0];if(!T)return;const y=l.clipAction(T,o.current);return y.reset().play(),l.update(0),()=>{y.stop()}},[u,l]),Re((T,y)=>{l&&l.update(y*S)});const A=v.useMemo(()=>{if(!a||!s)return null;const T=[{name:"Wolf3D_Body",node:a.Wolf3D_Body,material:s.Wolf3D_Body},{name:"Wolf3D_Outfit_Bottom",node:a.Wolf3D_Outfit_Bottom,material:s.Wolf3D_Outfit_Bottom},{name:"Wolf3D_Outfit_Footwear",node:a.Wolf3D_Outfit_Footwear,material:s.Wolf3D_Outfit_Footwear},{name:"Wolf3D_Outfit_Top",node:a.Wolf3D_Outfit_Top,material:s.Wolf3D_Outfit_Top},{name:"EyeLeft",node:a.EyeLeft,material:s.Wolf3D_Eye},{name:"EyeRight",node:a.EyeRight,material:s.Wolf3D_Eye},{name:"Wolf3D_Head",node:a.Wolf3D_Head,material:s.Wolf3D_Skin},{name:"Wolf3D_Teeth",node:a.Wolf3D_Teeth,material:s.Wolf3D_Teeth},{name:"Wolf3D_Beard",node:a.Wolf3D_Beard,material:s.Wolf3D_Beard},{name:"Wolf3D_Glasses",node:a.Wolf3D_Glasses,material:s.Wolf3D_Glasses},{name:"Wolf3D_Headwear",node:a.Wolf3D_Headwear,material:s.Wolf3D_Headwear}];return _.jsxs(_.Fragment,{children:[a.Hips&&_.jsx("primitive",{object:a.Hips}),T.map(y=>_.jsx(Vc,{name:y.name,node:y.node,material:c.get(y.material)??y.material},y.name))]})},[a,s,c]);return _.jsx("group",{ref:o,position:[h+t,d+ve(h+t,p),p],rotation:[m,g,f],scale:w,visible:b,children:_.jsx("group",{ref:n,children:A})})};Pe.preload(tr);Pe.preload(or);const Zc=1,Xn={tall:4,wide:2.2},$c=.6;function nr(e=16/10){return Sa(e)*P.lerp(Xn.tall,Xn.wide,Io(e))}function Kc(e,t,o,n,r=16/10){if(!Number.isFinite(o))return 0;const a=n-t,s=a-t*nr(r);return Math.min(Math.max((e-s)/(a-s),0),1)}function ar(e){return Ue(e)}const je={footerTop:1/0,documentHeight:0};let xt=0,lo=null;function St(){const e=document.getElementById("contact");je.footerTop=e?e.getBoundingClientRect().top+window.scrollY:1/0,je.documentHeight=document.documentElement.scrollHeight}function rr(e,t,o){return Kc(e,t,je.footerTop,je.documentHeight,o)}function qc(e,t,o,n,r=16/10){if(!Number.isFinite(o))return 0;const a=t,s=n-t-t*nr(r);return s<=a?e>=s?1:0:Ue((e-a)/(s-a))}function Qc(e,t,o){return qc(e,t,je.footerTop,je.documentHeight,o)}function Jc(){v.useEffect(()=>{if(xt+=1,xt===1){St();const e=new ResizeObserver(St);e.observe(document.body),window.addEventListener("resize",St),lo=()=>{e.disconnect(),window.removeEventListener("resize",St)}}return()=>{xt-=1,xt===0&&(lo?.(),lo=null)}},[])}function el(e){let t=!1,o=!1,n=!1,r=0,a=!1,s=!1,i=!1;return{markAssetsReady(){t=!0},markCameraInitialized(){o=!0},requestForcedReveal(){n=!0},recordFrame(){o&&t&&r<e&&(r+=1);const c=o&&t&&r>=e,u=o&&(c||n)&&!a;u&&(a=!0);const h=s&&!i&&o;return h&&(i=!0),a&&(s=!0),{shouldStartIntro:u,shouldReveal:h}}}}class tl extends v.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(t){console.warn("Night sky unavailable:",t),this.props.onError?.()}render(){return this.state.failed?null:this.props.children}}const jn=-1.05068821,Dt=new z(0,Math.cos(jn),Math.sin(jn)).normalize(),ol=new z(-.011,.821,.571).projectOnPlane(Dt).normalize(),Wt=`
  uniform float uNight;
  uniform float uStrength;

  // The altitude, as the sine of the elevation, above which the sky is dark
  // enough for light to begin to show: a little over 25 degrees at dusk, below
  // the horizon by full night.
  float twilightBoundary() {
    return mix(0.44, -0.3, uNight);
  }

  // How much of a light of this brightness (0 faint, 1 brightest) shows at
  // this altitude.
  float twilight(float altitude, float brightness) {
    // The brightest come out first, a little lower in the dusk sky.
    float dusk = 1.0 - smoothstep(0.0, 0.5, uNight);
    float boundary = twilightBoundary() - 0.3 * brightness * dusk;
    float dark = smoothstep(boundary, boundary + 0.5, altitude);
    float shown = pow(dark, mix(2.4, 0.7, brightness));
    // At dusk even the darkest sky shows only the faintest trace.
    return shown * (mix(0.28, 1.0, uNight) + 0.45 * brightness * dusk) *
      uStrength;
  }

  vec3 horizonTint(float altitude) {
    return mix(vec3(1.0, 0.6, 0.38), vec3(1.0), smoothstep(0.0, 0.3, altitude)) *
      smoothstep(-0.04, 0.2, altitude);
  }
`;function Xt(){return{uNight:{value:0},uStrength:{value:0}}}const Me=400;function xe(e,t){return e.setRGB((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)}const $e=`
  float starHaloRadius(float light) {
    return 1.0 + 0.5 * sqrt(light);
  }

  float starProfile(float r, float light) {
    float sigma = 0.5 + 0.06 * sqrt(light);
    float area = 6.2832 * sigma * sigma;
    float core = min(0.8 * light, 2.0 * area);
    float halo = starHaloRadius(light);
    // Faded out before the edge of the sprite (4 halo radii; see sprite
    // sizes), so no star shows a square.
    float glow = (light - core) / (6.2832 * halo * halo) * exp(-r / halo) *
      (1.0 - smoothstep(3.0 * halo, 4.0 * halo, r));
    return core / area * exp(-0.5 * r * r / (sigma * sigma)) + glow;
  }
`;function sr(e,{plane:t,clumped:o,clumps:n,gaps:r}){const a=l=>{let u,h,d;do u=e()*2-1,h=e()*Math.PI*2,d=Math.sqrt(1-u*u),l.set(d*Math.cos(h),u,d*Math.sin(h));while(t>0&&e()>.25+.75*Math.exp(-((l.dot(Dt)/t)**2)));return l},s=Array.from({length:n},()=>({at:a(new z).clone(),spread:.015+.05*e()})),i=Array.from({length:r},()=>({at:a(new z).clone(),radius:.07+.14*e()})),c=new z;return l=>{for(;;){if(e()<o){const h=s[Math.floor(e()*s.length)],d=h.spread*Math.sqrt(-2*Math.log(1-e()));c.set(e()-.5,e()-.5,e()-.5),c.projectOnPlane(h.at).normalize().multiplyScalar(d),l.copy(h.at).add(c).normalize()}else a(l);if(!i.some(h=>l.angleTo(h.at)<h.radius)||e()<.3)return l}}}const Be=[{hex:13624575,weight:.45},{hex:16777215,weight:.3},{hex:16773590,weight:.15},{hex:16763034,weight:.1}],nl=`
  attribute vec3 color;
  attribute float size;
  attribute float phase;
  attribute float rate;
  attribute float spike;
  attribute float flare;
  attribute float presence;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uBoost;
  uniform vec2 uResolution;
  varying vec3 vColor;
  varying float vAlpha;
  varying vec2 vScreenCentre;
  varying float vLight;
  varying float vTwilight;
  ${Wt}
  ${$e}

  void main() {
    // Each star shows by its own altitude and brightness: the brightest
    // first, high up, the faint ones once the sky around them is dark.
    vec3 worldDirection = normalize(
      (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition
    );
    float brightness = clamp(
      (size - 1.1) / 1.8 + spike * 0.5 + flare * 0.3, 0.0, 1.0
    );
    vTwilight = twilight(worldDirection.y, brightness);
    float low = 1.0 - smoothstep(0.0, 0.5, worldDirection.y);
    // Scintillation: a slow swell with a gentler flicker on top, staggered so
    // the sky never pulses in step. High up, where the air above is thin,
    // stars hold nearly steady (about 70 to 110 percent); low down they
    // twinkle hard, as through the thick air near the horizon. The few
    // flaring stars flicker more and shift colour, as bright stars do.
    float swell = 0.5 + 0.5 * sin(uTime * rate + phase);
    float flicker = 0.5 + 0.5 * sin(uTime * rate * 3.2 + phase * 2.3) *
      sin(uTime * rate * 1.9 + phase * 1.3);
    float steady = 0.25 + 1.05 * swell * swell * mix(0.55, 1.0, flicker);
    float flaring = 0.35 + 1.65 * pow(swell, 1.5) * pow(flicker, 1.5);
    float calm = mix(0.3, 1.0, low);
    vAlpha = max(0.0, 1.0 + (mix(steady, flaring, flare) - 1.0) * calm * (1.0 + 0.8 * low)) *
      presence;
    float hue = sin(uTime * rate * 2.4 + phase * 4.0) * 0.18 * (flare + low) * calm;
    vColor = color * vec3(1.0 + hue, 1.0, 1.0 - hue) * horizonTint(worldDirection.y);
    float coreSize = size * uPixelRatio;
    // The light of a Gaussian of this size, as the former square sprite
    // held about 79% of it.
    vLight = 0.7853 * 6.2832 * coreSize * coreSize / 10.0 * uBoost;
    gl_PointSize = ceil(starHaloRadius(vLight) * 8.0) + 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vScreenCentre = (gl_Position.xy / gl_Position.w * 0.5 + 0.5) * uResolution;
    gl_Position.z = gl_Position.w * 0.99999;
  }
`,al=`
  varying float vTwilight;
  varying vec3 vColor;
  varying float vAlpha;
  varying vec2 vScreenCentre;
  varying float vLight;
  ${$e}

  // The brightest of these are crisp points too: their light is held in a
  // sharp core and a tight glow, with no soft disc around them. Only the
  // anchor stars (see createAnchorStars) carry rays.
  void main() {
    vec2 pixelOffset = gl_FragCoord.xy - vScreenCentre;
    float alpha = starProfile(length(pixelOffset), vLight);
    gl_FragColor = vec4(vColor, alpha * vAlpha * vTwilight);
  }
`;function rl(e,t){const o=_e(41),n=new Float32Array(e*3),r=new Float32Array(e*3),a=new Float32Array(e),s=new Float32Array(e),i=new Float32Array(e),c=new Float32Array(e),l=new Float32Array(e),u=new Float32Array(e),h=new F,d=new z,p=sr(o,{plane:.3,clumped:.18,clumps:70,gaps:40});for(let f=0;f<e;f++){p(d),n[f*3]=Me*d.x,n[f*3+1]=Me*d.y,n[f*3+2]=Me*d.z;let w=o(),b=Be[0].hex;for(const T of Be)if(w-=T.weight,w<=0){b=T.hex;break}xe(h,b),r.set([h.r,h.g,h.b],f*3);const S=f<t,A=S||o()<.03;a[f]=S?2.6+o()*1.4:A?1.9+o()*1.1:.9+o()**7*3,s[f]=o()*Math.PI*2,i[f]=A?.8+o()*.9:.45+o()*.8,c[f]=S?1:0,l[f]=A?1:0,u[f]=S?1:.3+.7*o()**.8}const m=new te;m.setAttribute("position",new X(n,3)),m.setAttribute("color",new X(r,3)),m.setAttribute("size",new X(a,1)),m.setAttribute("phase",new X(s,1)),m.setAttribute("rate",new X(i,1)),m.setAttribute("spike",new X(c,1)),m.setAttribute("flare",new X(l,1)),m.setAttribute("presence",new X(u,1));const g=new It(m,new Q({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uBoost:{value:1},uResolution:{value:new Ve(1,1)},...Xt()},vertexShader:nl,fragmentShader:al,transparent:!0,depthTest:!0,depthWrite:!1,blending:ge}));return g.renderOrder=-16,g.frustumCulled=!1,g}const sl=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.99999, 1.0);
  }
`,il=`
  uniform vec3 uDuskZenith;
  uniform vec3 uDuskHorizon;
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uAirglow;
  uniform vec3 uTownGlow;
  uniform float uHorizonY;
  uniform float uNight;
  uniform float uOpacity;
  varying vec2 vUv;

  void main() {
    float h = vUv.y;
    vec3 dusk = mix(uDuskHorizon, uDuskZenith, smoothstep(0.0, 0.7, h));
    vec3 night = mix(uHorizon, uZenith, smoothstep(0.0, 0.85, h));
    float above = max(h - uHorizonY, 0.0);
    night += uAirglow * exp(-above * 9.0) + uTownGlow * exp(-above * 24.0);
    vec3 col = mix(dusk, night, uNight);
    // Dither so the dark gradient does not band.
    float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    col += (n - 0.5) / 255.0;
    gl_FragColor = vec4(col, uOpacity);
  }
`;function cl(){const e=new Ct(new ha(2,2),new Q({uniforms:{uDuskZenith:{value:xe(new F,530218)},uDuskHorizon:{value:xe(new F,4865840)},uZenith:{value:xe(new F,132364)},uHorizon:{value:xe(new F,661032)},uAirglow:{value:xe(new F,731692)},uTownGlow:{value:xe(new F,4007446)},uHorizonY:{value:0},uNight:{value:0},uOpacity:{value:0}},vertexShader:sl,fragmentShader:il,transparent:!0,depthTest:!0,depthWrite:!1}));return e.renderOrder=-21,e.frustumCulled=!1,e}const ll=`
  attribute float along;
  attribute float side;
  uniform vec3 uFrom;
  uniform vec3 uTo;
  uniform float uProgress;
  uniform float uTrail;
  uniform float uWidth;
  uniform vec2 uResolution;
  varying float vAlong;
  varying float vSide;

  vec4 onSky(float t) {
    vec3 direction = normalize(mix(uFrom, uTo, clamp(t, 0.0, 1.0)));
    return projectionMatrix * modelViewMatrix * vec4(direction * ${(Me*.8).toFixed(1)}, 1.0);
  }

  void main() {
    vec4 tail = onSky(uProgress - uTrail);
    vec4 head = onSky(uProgress);
    vec2 run = (head.xy / head.w - tail.xy / tail.w) * uResolution;
    vec2 across = normalize(vec2(-run.y, run.x) + 1e-6);
    gl_Position = mix(tail, head, along);
    gl_Position.xy += across * side * uWidth * mix(0.3, 1.0, along) / uResolution * 2.0 * gl_Position.w;
    gl_Position.z = gl_Position.w * 0.99998;
    vAlong = along;
    vSide = side;
  }
`,ul=`
  uniform float uOpacity;
  varying float vAlong;
  varying float vSide;

  void main() {
    float glow = pow(vAlong, 2.2) * exp(-vSide * vSide * 4.0);
    vec3 colour = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 0.97, 0.92), vAlong);
    gl_FragColor = vec4(colour * glow * uOpacity, 1.0);
  }
`;function hl(){const e=new te;e.setAttribute("position",new X(new Float32Array(12),3)),e.setAttribute("along",new X(new Float32Array([0,0,1,1]),1)),e.setAttribute("side",new X(new Float32Array([-1,1,-1,1]),1)),e.setIndex([0,2,1,1,2,3]);const t=new Ct(e,new Q({uniforms:{uFrom:{value:new z(0,0,-1)},uTo:{value:new z(0,0,-1)},uProgress:{value:0},uTrail:{value:.35},uWidth:{value:1.6},uResolution:{value:new Ve(1,1)},uOpacity:{value:0}},vertexShader:ll,fragmentShader:ul,transparent:!0,depthTest:!0,depthWrite:!1,blending:ge}));return t.renderOrder=-10,t.frustumCulled=!1,t.visible=!1,t}const Bn=[{hex:16763284,light:1.35},{hex:13229311,light:1.2},{hex:16054015,light:1},{hex:12177663,light:.9},{hex:16773336,light:.85}],fl=`
  attribute vec3 color;
  attribute float light;
  attribute float phase;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uBoost;
  uniform vec2 uResolution;
  varying vec3 vColor;
  varying float vShown;
  varying float vLight;
  varying float vRay;
  varying float vHalf;
  varying vec2 vCentre;
  ${Wt}

  void main() {
    vec3 direction = normalize(
      (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition
    );
    vShown = twilight(direction.y, 1.0) *
      (0.95 + 0.05 * sin(uTime * 0.5 + phase));
    vColor = color * horizonTint(direction.y);
    vLight = light * uBoost;
    vRay = (4.0 + 3.0 * light) * uPixelRatio;
    vHalf = ceil(vRay * 2.6);
    gl_PointSize = vShown > 0.003 ? vHalf * 2.0 : 0.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vCentre = (gl_Position.xy / gl_Position.w * 0.5 + 0.5) * uResolution;
    gl_Position.z = gl_Position.w * 0.99999;
  }
`,dl=`
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vShown;
  varying float vLight;
  varying float vRay;
  varying float vHalf;
  varying vec2 vCentre;

  void main() {
    vec2 o = gl_FragCoord.xy - vCentre;
    float r = length(o);
    float px = uPixelRatio;
    float sigma = 0.85 * px;
    float core = 1.6 * exp(-0.5 * r * r / (sigma * sigma));
    float bloom = 0.32 * exp(-r / (2.0 * px)) + 0.06 * exp(-r / (6.5 * px));
    vec2 ray = abs(mat2(0.966, 0.259, -0.259, 0.966) * o);
    float thin = 0.45 * px;
    float rays = exp(-ray.y / thin - ray.x / vRay) +
      exp(-ray.x / thin - ray.y / vRay);
    float edge = 1.0 - smoothstep(0.7, 1.0, max(abs(o.x), abs(o.y)) / vHalf);
    float alpha = (core + bloom + 0.3 * rays) * vLight * edge * vShown;
    gl_FragColor = vec4(vColor, alpha);
  }
`;function ml(){const e=Bn.length,t=new Float32Array(e*3),o=new Float32Array(e),n=new Float32Array(e),r=new F;Bn.forEach((i,c)=>{xe(r,i.hex),t.set([r.r,r.g,r.b],c*3),o[c]=i.light,n[c]=c*2.4});const a=new te;a.setAttribute("position",new X(new Float32Array(e*3),3)),a.setAttribute("color",new X(t,3)),a.setAttribute("light",new X(o,1)),a.setAttribute("phase",new X(n,1));const s=new It(a,new Q({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uBoost:{value:1},uResolution:{value:new Ve(1,1)},...Xt()},vertexShader:fl,fragmentShader:dl,transparent:!0,depthTest:!0,depthWrite:!1,blending:ge}));return s.renderOrder=-14,s.frustumCulled=!1,s}function pl(e,t){const o=e.geometry.attributes.position;t.slice(0,o.count).forEach((n,r)=>{o.setXYZ(r,n.x*Me,n.y*Me,n.z*Me)}),o.needsUpdate=!0}const gl=`
  attribute vec3 color;
  attribute float light;
  uniform float uPixelRatio;
  uniform float uBoost;
  varying vec3 vColor;
  varying float vShown;
  varying float vLight;
  varying float vRadius;
  ${Wt}
  ${$e}

  void main() {
    vec3 direction = normalize(
      (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition
    );
    vShown = twilight(direction.y, clamp(light * 0.3, 0.0, 0.5));
    vColor = color * horizonTint(direction.y);
    vLight = light * uPixelRatio * uPixelRatio * uBoost;
    vRadius = ceil(starHaloRadius(vLight) * 4.0) + 1.0;
    gl_PointSize = vShown > 0.003 ? vRadius * 2.0 : 0.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w * 0.99999;
  }
`,vl=`
  varying vec3 vColor;
  varying float vShown;
  varying float vLight;
  varying float vRadius;
  ${$e}

  void main() {
    float d = length(gl_PointCoord - 0.5) * vRadius * 2.0;
    gl_FragColor = vec4(vColor, starProfile(d, vLight) * vShown);
  }
`;function wl(e){const t=_e(131),o=new Float32Array(e*3),n=new Float32Array(e*3),r=new Float32Array(e),a=new F,s=new z,i=sr(t,{plane:.24,clumped:.28,clumps:120,gaps:60});for(let u=0;u<e;u++){i(s),o.set([Me*s.x,Me*s.y,Me*s.z],u*3);let h=t(),d=Be[0].hex;for(const p of Be)if(h-=p.weight,h<=0){d=p.hex;break}xe(a,d),n.set([a.r,a.g,a.b],u*3),r[u]=.25+1.8*t()**3.5}const c=new te;c.setAttribute("position",new X(o,3)),c.setAttribute("color",new X(n,3)),c.setAttribute("light",new X(r,1));const l=new It(c,new Q({uniforms:{uPixelRatio:{value:1},uBoost:{value:1},...Xt()},vertexShader:gl,fragmentShader:vl,transparent:!0,depthTest:!0,depthWrite:!1,blending:ge}));return l.renderOrder=-17,l.frustumCulled=!1,l}const yl=`
  attribute vec3 color;
  attribute float size;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vTwilight;
  varying float vLight;
  varying float vRadius;
  ${Wt}
  ${$e}

  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vec3 toStar = world.xyz - cameraPosition;
    float distance = length(toStar);
    vec3 direction = toStar / distance;
    float brightness = clamp((size - 1.0) / 2.4, 0.0, 1.0);
    vTwilight = twilight(direction.y, brightness);
    vColor = color * horizonTint(direction.y);
    float apparent = size * uPixelRatio * clamp(240.0 / distance, 0.7, 1.8);
    // The light of the former soft disc of this size and of the part of its
    // glare its sprite showed, held now in a sharp core and its glow.
    float sigma = max(apparent * 0.32, 0.6);
    float glare = max(apparent * 1.4, 1.0);
    vLight = 6.2832 * (sigma * sigma + 0.06 * glare * glare);
    vRadius = ceil(starHaloRadius(vLight) * 4.0) + 1.0;
    gl_PointSize = vRadius * 2.0;
    gl_Position = projectionMatrix * viewMatrix * world;
    gl_Position.z = gl_Position.w * 0.99998;
  }
`,xl=`
  varying vec3 vColor;
  varying float vTwilight;
  varying float vLight;
  varying float vRadius;
  ${$e}

  void main() {
    float d = length(gl_PointCoord - 0.5) * vRadius * 2.0;
    gl_FragColor = vec4(vColor, starProfile(d, vLight) * vTwilight);
  }
`;function Sl(e){const t=_e(97),o=new Float32Array(e*3),n=new Float32Array(e*3),r=new Float32Array(e),a=new F,s=new z;for(let l=0;l<e;l++){const u=t()*2-1,h=t()*Math.PI*2,d=Math.sqrt(1-u*u);s.set(d*Math.cos(h),u,d*Math.sin(h));const p=70+320*t()**.75;o.set([s.x*p,s.y*p,s.z*p],l*3);let m=t(),g=Be[0].hex;for(const f of Be)if(m-=f.weight,m<=0){g=f.hex;break}xe(a,g),n.set([a.r,a.g,a.b],l*3),r[l]=.7+t()**4*3.2}const i=new te;i.setAttribute("position",new X(o,3)),i.setAttribute("color",new X(n,3)),i.setAttribute("size",new X(r,1));const c=new It(i,new Q({uniforms:{uPixelRatio:{value:1},...Xt()},vertexShader:yl,fragmentShader:xl,transparent:!0,depthTest:!0,depthWrite:!1,blending:ge}));return c.renderOrder=-15,c.frustumCulled=!1,c}function Ml(e,t,o,n){const r=Math.min(o,n?2:1),a=Math.min(o,2,Math.sqrt(6e6/Math.max(1,e*t)));return{hero:r,max:a,min:Math.min(1,a)}}const bl=1e3/29,Rl=3e3,Tl=1e3/45;function Vn(e,t,o=t){let n=Math.min(t,Math.max(e,o)),r=0,a=0,s=0,i=3e3,c=0;function l(){r=0,a=0,s=0,i=3e3,c=0}function u(h,d){if(!Number.isFinite(h)||h<=0||h>250)return l(),n;if(d!==c&&(l(),c=d),r+=h,i+=h,a++,r<Rl)return n;const p=r/a;return p>bl&&i>=3e3?(n=Math.max(e,n-.25),i=0,s=0):p<Tl?(s+=r,s>=8e3&&i>=3e3&&(n=Math.min(t,n+.25),i=0,s=0)):s=0,r=0,a=0,n}return{sample:u,reset:l,get dpr(){return n}}}const Un={portrait:{enter:.72,leave:.68},landscape:{enter:.95,leave:.9}};function Zn(e,t,o){return(e.footerReturn??(e.atFooter?1:0))>0||e.progress>=(o?t.leave:t.enter)}let Po=null;const ko=new Set;function uo(e){if(e!==Po){Po=e;for(const t of ko)t()}}function Al(e){return ko.add(e),()=>ko.delete(e)}function El(){return v.useSyncExternalStore(Al,()=>Po,()=>null)}function _l(e,t){const{gl:o,setDpr:n,size:r}=ie(),a=v.useRef(null);v.useLayoutEffect(()=>{const s=Ml(r.width,r.height,window.devicePixelRatio||1,t),i=t?Math.min(s.hero,s.max):s.hero,c=Ee(r.width/Math.max(1,r.height),r.width)?Un.landscape:Un.portrait,l=Zn(e.current,c,!1);a.current={rest:i,limits:s,controller:Vn(s.min,s.max),ceiling:s.max,active:l,night:c,lastScroll:window.scrollY,scrollingUntil:0};const u=l?s.max:i;uo(u),n(u)},[t,e,n,r.width,r.height]),v.useLayoutEffect(()=>()=>uo(null),[]),Re((s,i)=>{const c=a.current;if(!c)return;const l=Zn(e.current,c.night,c.active);if(l!==c.active&&(c.active=l,c.controller=Vn(c.limits.min,c.limits.max,c.ceiling)),document.hidden){c.controller.reset();return}const u=performance.now();window.scrollY!==c.lastScroll&&(c.lastScroll=window.scrollY,c.scrollingUntil=u+700);const h=t||u<c.scrollingUntil?1e3/60:1e3/30,d=c.controller.sample(i*1e3,h);c.ceiling=l?d:Math.max(c.ceiling,d);const p=l?c.ceiling:Math.min(c.rest,c.ceiling);Math.abs(o.getPixelRatio()-p)>.001&&(uo(p),n(p))},-.5)}const $n=-.32;function Cl(e,t){const o=Ht(be(e,t),e,1),n=new z,r=new z(o.targetX-o.cameraX,o.targetY-o.cameraY,o.targetZ-o.cameraZ).normalize(),a=new nt,s=new Se().setFromRotationMatrix(a.lookAt(n,r,new z(0,1,0))),i=ol.clone().normalize(),c=new z,l=new z,u=new z,h=new Se,d=new Se,p=Math.atan2(1,t);function m(g,f=0,w=0){return c.copy(i).applyAxisAngle(Dt,g),l.copy(Dt).applyAxisAngle(c,p),u.crossVectors(c,l).normalize(),c.applyAxisAngle(l,f).applyAxisAngle(u,w),h.setFromRotationMatrix(a.lookAt(n,c,l)).invert(),d.copy(s).multiply(h)}return{update:m}}function Mt(e=0){return{value:e,velocity:0}}const Kn=1e-5;function bt(e,t,o,n,r=1){const a=Math.min(Math.max(o,0),.1);if(a===0)return e;const s=e.value-t,i=e.velocity;if(r>=1){const c=(i+n*s)*a,l=Math.exp(-n*a);e.value=t+(s+c)*l,e.velocity=(i-n*c)*l}else{const c=n*Math.sqrt(1-r*r),l=Math.exp(-r*n*a),u=Math.cos(c*a),h=Math.sin(c*a),d=(i+r*n*s)/c,p=s*u+d*h;e.value=t+l*p,e.velocity=l*(-r*n*p+c*(d*u-s*h))}return Math.abs(e.value-t)<Kn&&Math.abs(e.velocity)<Kn&&(e.value=t,e.velocity=0),e}function zl(e){const t=v.useRef({x:0,y:0,inside:!1});return v.useEffect(()=>{const o=t.current;if(!e){o.inside=!1;return}const n=s=>{if(s.pointerType!=="mouse"&&s.pointerType!=="pen")return;const i=s.clientX/Math.max(1,window.innerWidth)*2-1,c=s.clientY/Math.max(1,window.innerHeight)*2-1;o.x=Math.min(Math.max(i,-1),1),o.y=Math.min(Math.max(c,-1),1),o.inside=!0},r=s=>{s.relatedTarget==null&&(o.inside=!1)},a=()=>{o.inside=!1};return window.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerout",r,{passive:!0}),window.addEventListener("blur",a),()=>{window.removeEventListener("pointermove",n),document.removeEventListener("pointerout",r),window.removeEventListener("blur",a),o.inside=!1}},[e]),t}const Rt={dust:6500,twinkle:4200,spiked:12,depth:700},ho={follow:.65,pointerShift:10,shell:.35},fo=La,Pl="(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",Tt={hover:.35,touch:.7,periods:[61,41]},Ie={speed:3,reach:1.6,smoothing:10,stiffness:6,damping:.72,jump:.9},qn=new z,mo=new z,kl=new z,po=new Se,Fl=new z(0,Math.sin(P.degToRad(40)),Math.cos(P.degToRad(40))),ir=P.degToRad(-.12),go=Math.PI/Math.abs(ir),Qn={from:.25,by:.05},Jn=new Se,ea=new z,ta=1.5,Ll=.3,Ol=.6,Dl=.55,Nl=.85,Il=.3,Yl=.75,At={delay:1.1,seconds:.85,from:[.94,.86],to:[.62,.6]};let oa=!1;const na=new Se,aa=new z,Hl={wide:[[.84,.66],[-.86,.58],[.94,-.14],[-.62,.86],[.56,.88]],tall:[[.66,.72],[-.72,.5],[.8,-.3],[-.46,.88],[.28,.92]]},Gl=.25,cr=v.memo(({scrollMotion:e,onReady:t,fadesIn:o=!1})=>{const{camera:n,viewport:r,size:a,gl:s,scene:i}=ie(),c=q("(min-width: 1024px)",!0),l=q("(prefers-reduced-motion: reduce)",!0),u=q("(hover: hover) and (pointer: fine)",!0),h=q(Pl,!0);_l(e,c);const d=v.useRef(null),p=zl(h),m=v.useRef({time:0,turnTime:0,skyTurn:0,turning:!1,spin:0,rewindSpin:0,pitch:Mt(),leanX:Mt(),leanY:Mt(),scrollY:null,scrollSpeed:0,scrollLean:Mt(),arrival:0,duskArrival:0,clarity:.6,meteorAt:-1}),g=v.useRef(!1),f=v.useRef(!1),w=v.useRef(0),b=v.useRef({layers:null,materials:[]}),S=v.useRef(o);S.current=o;const A=v.useMemo(()=>{const E=a.width/Math.max(1,a.height);return Cl(Ee(E,a.width),E)},[a.width,a.height]),T=v.useMemo(()=>{const E=a.width/Math.max(1,a.height),C=Ee(E,a.width),x=Ht(be(C,E),C,1);return new z(x.cameraX,x.cameraY,x.cameraZ)},[a.width,a.height]),y=v.useMemo(()=>({gradient:cl(),dust:wl(Rt.dust),twinkle:rl(Rt.twinkle,Rt.spiked),depth:Sl(Rt.depth),anchors:ml(),meteor:hl()}),[]);return v.useEffect(()=>()=>{for(const E of Object.values(y))E.geometry.dispose(),E.material.dispose()},[y]),v.useLayoutEffect(()=>{const E=a.width/Math.max(1,a.height),C=1+Gl*P.smoothstep(E,1,1.7);for(const L of[y.dust,y.twinkle,y.depth,y.anchors])L.material.uniforms.uPixelRatio.value=r.dpr;for(const L of[y.dust,y.twinkle,y.anchors])L.material.uniforms.uBoost.value=C;for(const L of[y.twinkle,y.meteor,y.anchors])L.material.uniforms.uResolution.value.set(Math.floor(a.width*r.dpr),Math.floor(a.height*r.dpr));y.meteor.material.uniforms.uWidth.value=1.6*r.dpr;const x=Ee(E,a.width),k=new st(50,E);Ze(k,be(x,E),x,1);const M=Math.tan(P.degToRad(k.fov/2)),D=A.update($n,0,0).clone().invert();pl(y.anchors,Hl[E>=1?"wide":"tall"].map(([L,Y])=>new z(L*M*E,Y*M,-1).normalize().applyQuaternion(k.quaternion).applyQuaternion(D)))},[y,A,a.width,a.height,r.dpr]),Re((E,C)=>{if(b.current.layers!==y&&(f.current=!1),!f.current){const W=b.current;if(W.layers!==y){W.layers=y,W.materials=[...s.compile(d.current,n,i)];return}if(!W.materials.every(Ce=>{const De=s.properties.get(Ce).currentProgram;return!De||De.isReady()}))return;f.current=!0}w.current+=1;const x=Ho(e.current.night??e.current.progress),k=Math.min(C,.1),M=m.current;M.duskArrival=S.current?Math.min(1,M.duskArrival+k/1.2):1,x<=0?M.arrival=M.duskArrival:M.arrival=Math.min(1,M.arrival+k/.7),d.current.visible=M.arrival>0,M.time+=k,M.clarity=P.damp(M.clarity,bi(e.current.atFooter?1/0:window.scrollY,ze()),2.2,k);const D=P.smoothstep(x,.1,.6),L=1-Nl*(e.current.footerReturn??0),Y=h&&p.current.inside,N=Y?p.current.x:0,H=Y?p.current.y:0;bt(M.pitch,-H*.022*D*L,k,fo),x>.98?M.turning=!0:x<.5&&(M.turning=!1),M.spin=P.damp(M.spin,!l&&M.turning?1:0,ta,k),M.turnTime+=k*M.spin,M.skyTurn+=k*M.spin,M.skyTurn=P.euclideanModulo(M.skyTurn+go,2*go)-go,M.rewindSpin=P.damp(M.rewindSpin,1-P.smoothstep(x,Qn.by,Qn.from),ta,k);const B=Math.min(M.rewindSpin*k,Math.abs(M.skyTurn)*(1-Math.exp(-.5*M.rewindSpin*k)));M.skyTurn-=Math.sign(M.skyTurn)*B,d.current.position.copy(n.position),Jn.setFromAxisAngle(Fl,l?0:ir*M.skyTurn),d.current.quaternion.copy(Jn).multiply(A.update($n,0,M.pitch.value));const G=l?0:1,oe=(u?Tt.hover:Tt.touch)*M.spin,J=oe*Math.sin(M.turnTime*Math.PI*2/Tt.periods[0]),V=oe*.7*Math.sin(M.turnTime*Math.PI*2/Tt.periods[1]+1.3);bt(M.leanX,(N*L+J)*D*G,k,fo),bt(M.leanY,(-H*L+V)*D*G,k,fo);const ne=ze(),ae=M.scrollY===null?0:window.scrollY-M.scrollY;M.scrollY=window.scrollY;const ce=Math.abs(ae)>ne*Ie.jump||k<=0?0:ae/k/Math.max(1,ne);M.scrollSpeed=P.damp(M.scrollSpeed,ce,Ie.smoothing,k);const le=Math.abs(M.scrollSpeed)/Ie.speed,re=-Math.sign(M.scrollSpeed)*Math.tanh(le*le*Math.atanh(.75))*Ie.reach*D*G;bt(M.scrollLean,re,k,Ie.stiffness,Ie.damping);const U=M.leanY.value+M.scrollLean.value;mo.set(-M.leanX.value,-U,0).multiplyScalar(ho.pointerShift).applyQuaternion(n.quaternion),po.copy(d.current.quaternion).invert(),qn.copy(T).sub(n.position).multiplyScalar(ho.follow*G).add(mo),y.depth.position.copy(qn).applyQuaternion(po),y.twinkle.position.copy(kl.copy(mo).multiplyScalar(ho.shell)).applyQuaternion(po),l||(y.twinkle.material.uniforms.uTime.value=M.time,y.anchors.material.uniforms.uTime.value=M.time),!oa&&!l&&M.meteorAt<0&&x>.98&&(M.meteorAt=M.time+At.delay);const O=y.meteor;if(M.meteorAt>=0&&M.time>=M.meteorAt){const W=O.material.uniforms;if(!O.visible)if(x<.9)M.meteorAt=-1;else{oa=!0,O.visible=!0,na.copy(d.current.quaternion).invert();const ye=Math.tan(P.degToRad(n.fov/2));for(const[Ce,[De,Vt]]of[[W.uFrom,At.from],[W.uTo,At.to]])aa.set(De*ye*n.aspect,Vt*ye,-1),Ce.value.copy(aa).normalize().applyQuaternion(n.quaternion).applyQuaternion(na)}if(O.visible){const ye=(M.time-M.meteorAt)/At.seconds,Ce=1+W.uTrail.value;W.uProgress.value=ye,W.uOpacity.value=P.smoothstep(ye,0,.12)*(1-P.smoothstep(ye,.75,Ce)),ye>=Ce&&(O.visible=!1,M.meteorAt=-1)}}const Z=P.smoothstep(M.arrival,0,1);ea.set(0,0,-1).applyQuaternion(n.quaternion).setY(0).normalize().multiplyScalar(1e3).add(n.position).project(n),y.gradient.material.uniforms.uHorizonY.value=ea.y*.5+.5,y.gradient.material.uniforms.uNight.value=x;const ue=e.current.atFooter?1:Qc(window.scrollY,ze(),a.width/Math.max(1,a.height)),he=e.current.footerReturn??0,we=Dl*ue,it=we+(1-we)*he;y.gradient.material.uniforms.uOpacity.value=x*Z*(Ll+Ol*it);const jt=e.current.footerReturn??0,ct=1+Il*jt,Bt=P.smoothstep(x,.05,.35);for(const W of[y.dust,y.twinkle,y.depth,y.anchors])W.material.uniforms.uNight.value=Math.min(x,Yl),W.material.uniforms.uStrength.value=Z*M.clarity*ct*Bt;(x>0?M.arrival>=1:w.current>2)&&!g.current&&(g.current=!0,t?.())}),_.jsx("group",{ref:d,visible:!1,children:Object.entries(y).map(([E,C])=>_.jsx("primitive",{object:C},E))})});cr.displayName="NightSky";const Wl=e=>e===1?1:1-Math.pow(2,-10*e),Xl=10,jl=1/.18,Bl=1/.14,Vl=.1,lr=v.memo(({onAnimationEnd:e=()=>{},onRevealReady:t=()=>{},onGalaxyReady:o=()=>{},introAnimating:n=!0,forceReveal:r=!1,reducedMotion:a=!1,sectionArrival:s=!1,showGalaxy:i=!1,galaxyFadesIn:c=!1,revealed:l=!1,textParallax:u=null,onCameraFrame:h=null,atFooter:d=!1})=>{const p=q("(min-width: 768px)",!0),m=q("(min-width: 1024px)",!0),g=q(Yo,!0),f=Mi(g),[w]=v.useState(wi),{ambientIntensity:b,sunLightIntensity:S}=Lo,A=Go(),T=v.useRef(null),y=v.useRef(l);y.current=l;const E=v.useRef(),[C]=v.useState(()=>new z),[x]=v.useState(()=>new z),[k]=v.useState(()=>new z),[M]=v.useState(()=>new z),D=v.useRef(0),L=v.useRef({progress:s||d?1:0,velocity:0}),Y=v.useRef({progress:d?1:0,velocity:0}),N=v.useRef({progress:d?0:L.current.progress,night:L.current.progress,velocity:0,atFooter:d}),H=v.useRef(!s),B=v.useRef(!1),G=v.useRef(s||a||d),oe=v.useRef(!1),J=v.useRef({bike:!1,grass:!1,avatar:!1,tree:!1}),[V]=v.useState(()=>el(Xl)),{width:ne,height:ae}=ie($=>$.size),ce=ie($=>$.gl),le=ie($=>$.scene),re=v.useRef({objects:0,nextCheck:0}),U=ne/Math.max(1,ae),O=Ee(U,ne),Z=v.useMemo(()=>typeof window>"u"?16/10:window.innerWidth/Math.max(1,ze()),[]),ue=Ee(Z,typeof window>"u"?void 0:window.innerWidth),he=v.useMemo(()=>be(ue,Z),[ue,Z]),we=v.useMemo(()=>be(O,U),[O,U]),it=Ms(p),jt=v.useMemo(()=>ba(U),[U]),ct=v.useMemo(()=>O&&ne>=Ls&&Gs(U),[O,ne,U]),Bt=v.useRef(ct),Vo=v.useCallback($=>{if(T.current=$,!$)return;const Ne=s||a||d?Ze($,he,ue,s&&!d?1:0):Aa($,he);x.copy($.position),C.copy($.position),M.copy(Ne),k.copy(Ne),V.markCameraInitialized()},[d,M,x,he,ue,V,a,s,k,C]),W=v.useCallback($=>{if(oe.current)return;J.current[$]=!0;const{bike:Ne,grass:se,avatar:Ut,tree:Zt}=J.current;!Ne||!se||!Ut||Bt.current&&!Zt||(oe.current=!0,V.markAssetsReady())},[V]),ye=v.useCallback(()=>W("bike"),[W]),Ce=v.useCallback(()=>W("grass"),[W]),De=v.useCallback(()=>W("avatar"),[W]),Vt=v.useCallback(()=>W("tree"),[W]);return v.useEffect(()=>{r&&V.requestForcedReveal()},[r,V]),Re(($,Ne)=>{const se=T.current;if(!se)return;if($.clock.elapsedTime>=re.current.nextCheck){re.current.nextCheck=$.clock.elapsedTime+1;let Fe=0;le.traverse(()=>Fe++),Fe!==re.current.objects&&(re.current.objects=Fe,bs(ce,le,se))}const{shouldStartIntro:Ut,shouldReveal:Zt}=V.recordFrame();Ut&&!G.current&&(G.current=!0,B.current=!0,D.current=0);const lt=Math.min(Ne,Vl);let Ke=Ma(window.scrollY,ze(),U);d?Ke=1:H.current||(Ke>0||window.scrollY>0?H.current=!0:Ke=1),a||d?(L.current.progress=Ke,L.current.velocity=0):ln(L.current,Ke,lt,cn(U));const Uo=d?1:rr(window.scrollY,ze(),U);a||d||!y.current?(Y.current.progress=Uo,Y.current.velocity=0):ln(Y.current,Uo,lt,cn(16/10)*$c),N.current.progress=L.current.progress*(1-Zc*Y.current.progress),N.current.night=L.current.progress,N.current.velocity=L.current.velocity;const $t=ar(Y.current.progress);N.current.footerReturn=$t,h?.(L.current.progress,$t);const fe=Bs(Ht(we,O,N.current.progress),$t),Zo=g&&f.current.inside&&G.current&&y.current;yi(w,Zo?f.current.x:0,Zo?f.current.y:0,lt);const ut=xi(N.current.progress);if(C.set(fe.cameraX,fe.cameraY,fe.cameraZ),x.copy(C),se.position.copy(x),B.current){const Fe=O?jl:Bl;D.current+=lt;const $o=Math.min(1,D.current/Fe),Ko=Wl($o),hr=P.lerp(we.targetZ+Pt.z,we.targetZ,Ko),fr=P.lerp(we.targetY+Pt.y,we.targetY,Ko);M.set(fe.targetX,fr+(fe.targetY-we.targetY),hr+(fe.targetZ-we.targetZ));const dr=En(se,M,w,ut);se.rotateZ(fe.roll+dr),$o>=1&&(B.current=!1,e())}else if(G.current){k.set(fe.targetX,fe.targetY,fe.targetZ),M.copy(k);const Fe=En(se,M,w,ut);se.rotateZ(fe.roll+Fe)}se.fov!==fe.fov&&(se.fov=fe.fov,se.updateProjectionMatrix()),u&&(u.x.set(-w.x*ut*Rn.x),u.y.set(w.y*ut*Rn.y)),E.current?.position.copy(A).multiplyScalar(100),se.updateMatrixWorld(),Oo.uSunDirection.value.copy(A).transformDirection(se.matrixWorldInverse),Zt&&t()},-1),_.jsxs(_.Fragment,{children:[_.jsx("ambientLight",{intensity:b}),_.jsx("directionalLight",{ref:E,position:[0,100,0],intensity:S}),_.jsx(Ya,{motion:N}),i&&_.jsx(tl,{onError:o,children:_.jsx(v.Suspense,{fallback:null,children:_.jsx(cr,{scrollMotion:N,onReady:o,fadesIn:c})})}),_.jsxs("group",{children:[_.jsx(qa,{motion:N}),ct&&_.jsx(v.Suspense,{fallback:null,children:_.jsx(er,{tree:jt,onReady:Vt})}),_.jsx(v.Suspense,{fallback:null,children:_.jsx(Rs,{placement:it.bike,onReady:ye,pauseCulling:!m&&n})}),_.jsx(v.Suspense,{fallback:null,children:_.jsx(Ia,{onReady:Ce,motion:N})}),_.jsx(v.Suspense,{fallback:null,children:_.jsx(Uc,{offsetX:it.avatarOffsetX,onReady:De})})]}),_.jsx(zr,{makeDefault:!0,ref:Vo,position:[he.cameraX,he.cameraY,he.cameraZ],fov:he.fov})]})});lr.displayName="Scene";function Ul(e=120){const t=v.useRef(e);return v.useEffect(()=>{const o=()=>{t.current=Math.max(1,ze()*.1)};return o(),Lr(o)},[]),t}const Zl=_.jsxs(_.Fragment,{children:[_.jsx("span",{className:"block md:whitespace-nowrap",children:"Aspiring Business Analyst & Master's Candidate"})," ",_.jsx("span",{className:"block md:whitespace-nowrap",children:"Turning operational data into decisions & preparing for graduate studies."})]}),$l=250,Kl=1e3,ql=60,Ql=30,Jl=60,eu=700,ra=.1,tu={debounce:{scroll:0,resize:0}};function ou(e){const t=Nt(e,[0,.3,.75],[ra,ra,0]),o=Nt(e,[0,.3,.75],[1,.96,1]);return`blur(${t.toFixed(3)}px) saturate(${o.toFixed(3)})`}function nu(e,t,o){return(o?Nt(e,[0,.16,.65,1],[0,.04,.85,.4]):Nt(e,[0,.08,.38,1],[0,.14,1,.25]))*(1-t)}function Nt(e,t,o){if(e<=t[0])return o[0];for(let n=1;n<t.length;n++)if(e<=t[n]){const r=(e-t[n-1])/(t[n]-t[n-1]);return o[n-1]+(o[n]-o[n-1])*r}return o[o.length-1]}function au({active:e,fps:t}){const{invalidate:o}=ie(),n=v.useRef(null),r=v.useRef(0);return v.useEffect(()=>{if(!e)return;const a=t>0?1e3/t:0,s=Math.min(a,1e3/Jl);let i=!1,c=0,l=1e3/60,u=window.scrollY,h=0;const d=p=>{if(i)return;c&&(l=Math.min(p-c,50)),c=p,window.scrollY!==u&&(u=window.scrollY,h=p+eu);const m=p<h?s:a;(m===0||p-r.current>=m-l/2)&&(r.current=p,o()),n.current=requestAnimationFrame(d)};return n.current=requestAnimationFrame(d),()=>{i=!0,n.current!=null&&cancelAnimationFrame(n.current)}},[e,t,o]),null}const ur=v.memo(e=>{const{forceReveal:t=!1,onReady:o,sectionArrival:n=!1,skipSceneFade:r=!1,showTitleImmediately:a=!1,titleReady:s=!1,atFooter:i=!1}=e,{scrollY:c}=Hr(),l=v.useRef(null),u=v.useRef(!1),h=Ul(),d=q("(min-width: 1024px)",!0),p=q("(orientation: portrait)",!0),m=q("(prefers-reduced-motion: reduce)",!0),g=v.useMemo(()=>typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(min-width: 1024px)").matches?"high-performance":"low-power",[]),[f,w]=v.useState(!0),[b,S]=v.useState(!n&&!m&&!i),[A,T]=v.useState(!1);v.useLayoutEffect(()=>{c.set(window.scrollY)},[c]);const y=Jo(c,O=>{const Z=h.current||120;return Math.min(Math.max(O/Z,0),1)});Jc();const E=v.useRef(null),C=v.useRef(null),x=v.useRef(null),k=v.useRef({progress:-1,back:-1,filter:""}),M=v.useRef(p);M.current=p;const D=v.useCallback((O,Z)=>{const ue=k.current;if(Math.abs(O-ue.progress)<5e-4&&Math.abs(Z-ue.back)<5e-4)return;ue.progress=O,ue.back=Z;const he=ou(O);he!==ue.filter&&E.current&&(ue.filter=he,E.current.style.filter=he),C.current&&(C.current.style.opacity=String(nu(O,Z,M.current))),x.current&&(x.current.style.opacity=String(Z),x.current.style.visibility=Z>.001?"visible":"hidden")},[]);v.useLayoutEffect(()=>{if(i){D(1,1);return}const O=ze(),Z=window.innerWidth/Math.max(1,O);D(Ma(window.scrollY,O,Z),ar(rr(window.scrollY,O,Z)))},[D,i]);const L=Jo(y,O=>1-O*O*(3-2*O)),[Y,N]=v.useState(a),H=en(0),B=en(0),G=v.useMemo(()=>({x:H,y:B}),[H,B]),oe=v.useRef(o);oe.current=o;const J=v.useRef({ready:!1,waiting:!1,timeoutId:0}),V=v.useCallback(()=>{const O=J.current;O.waiting&&(O.waiting=!1,window.clearTimeout(O.timeoutId),oe.current?.())},[]),ne=v.useCallback(()=>{J.current.ready=!0,V()},[V]),ae=v.useCallback(()=>{if(!u.current){if(u.current=!0,T(!0),J.current.ready){oe.current?.();return}J.current.waiting=!0,J.current.timeoutId=window.setTimeout(V,Kl)}},[V]);v.useEffect(()=>{if(!s)return;const O=window.setTimeout(()=>N(!0),m?0:$l);return()=>window.clearTimeout(O)},[s,m]),v.useEffect(()=>()=>window.clearTimeout(J.current.timeoutId),[]),v.useEffect(()=>{const O=()=>w(!document.hidden);return O(),document.addEventListener("visibilitychange",O),()=>document.removeEventListener("visibilitychange",O)},[]);const ce=v.useCallback(()=>{S(!1)},[]),re=El()??(d?[1,2]:1),U=d?ql:Ql;return _.jsxs(Kt.div,{id:i?void 0:"heroWrapper","aria-hidden":i||void 0,ref:l,className:i?"hero-footer-scene absolute inset-0 z-0 overflow-hidden":`app-viewport sticky top-0 left-0 z-0 overflow-hidden${n?" home-section-arrival":""}`,children:[_.jsxs(Kt.div,{role:i?void 0:"img","aria-label":i?void 0:"Dusk on a hilltop: a rider sits in the grass beside his motorcycle, looking out over a valley of town lights as the sun sets behind low hills.",className:`absolute inset-0 hero-scene-layer${A?" hero-scene-layer--ready":""}`,ref:E,style:{transitionDuration:r?"0ms":void 0,willChange:f?"filter":"auto"},children:[_.jsxs(Pr,{frameloop:"demand",resize:tu,dpr:re,gl:{antialias:!0,powerPreference:g},children:[_.jsx(au,{active:f,fps:U}),_.jsx(lr,{forceReveal:t,introAnimating:b,onAnimationEnd:ce,onRevealReady:ae,onGalaxyReady:ne,galaxyFadesIn:s,revealed:s,reducedMotion:m,sectionArrival:n,showGalaxy:!0,textParallax:d&&!i?G:null,onCameraFrame:D,atFooter:i})]}),_.jsx("div",{ref:x,"aria-hidden":!0,className:"absolute inset-0 pointer-events-none hero-footer-shade"}),_.jsx("div",{ref:C,"aria-hidden":!0,className:"absolute inset-0 pointer-events-none hero-scroll-dimmer",style:{willChange:f?"opacity":"auto"}})]}),_.jsx("div",{"aria-hidden":!0,className:"ultrawide-side-blur"}),i?null:_.jsx(Kt.div,{className:Or,style:d?{opacity:L,x:H,y:B}:{opacity:L},children:_.jsxs("div",{className:"flex flex-col","data-scroll-reveal":Y?"visible":"pending",children:[_.jsxs("h1",{className:Dr,children:[_.jsx(Nr,{children:"Hello, I'm"})," ",_.jsx("span",{className:Ir,children:"Vivek"})]}),_.jsx("p",{className:`${Yr} motion-lift`,style:{"--motion-at":"var(--motion-copy-at)"},children:Zl})]})})]})});ur.displayName="Hero";const lu=Object.freeze(Object.defineProperty({__proto__:null,default:ur},Symbol.toStringTag,{value:"Module"}));export{ur as H,Zl as a,lu as b};
