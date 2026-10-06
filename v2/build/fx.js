/* ===== FX library (Guia de Design DTS) ===== */
const FX={};
/* fx 40 · Animated Shader / Hero — fbm navy + fio laranja (isolinha) */
FX.shader=function(canvas,opt){opt=opt||{};let amp=opt.amp||1,wire=opt.wire==null?1:opt.wire,run=false,raf=0,t0=performance.now(),tAcc=0,last=0;
  const mouse={x:.5,y:.5,tx:.5,ty:.5};let gl=null,u={};
  const VS='attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}';
  const FS=['precision mediump float;','uniform vec2 u_res;uniform float u_time;uniform float u_amp;uniform float u_wire;uniform vec2 u_mouse;',
  'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
  'float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);float a=hash(i);float b=hash(i+vec2(1.0,0.0));float c=hash(i+vec2(0.0,1.0));float d=hash(i+vec2(1.0,1.0));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}',
  'float fbm(vec2 p){float v=0.0;float a=0.5;for(int i=0;i<4;i++){v+=a*noise(p);p=mat2(1.6,1.2,-1.2,1.6)*p;a*=0.5;}return v;}',
  'void main(){vec2 uv=gl_FragCoord.xy/u_res;vec2 p=vec2(uv.x*u_res.x/u_res.y,uv.y);float t=u_time;p+=(u_mouse-0.5)*0.08*u_amp;',
  'vec2 q=vec2(fbm(p*1.3+vec2(0.0,t*0.07)),fbm(p*1.3+vec2(5.2,1.3)-t*0.05));float n=fbm(p*1.7+(1.1+1.4*u_amp)*q+vec2(t*0.04,0.0));',
  'vec3 c0=vec3(0.016,0.063,0.122);vec3 c1=vec3(0.043,0.145,0.271);vec3 c2=vec3(0.106,0.267,0.474);vec3 c3=vec3(0.290,0.435,0.647);',
  'vec3 col=mix(c0,c1,smoothstep(0.25,0.55,n));col=mix(col,c2,smoothstep(0.50,0.78,n));col=mix(col,c3,0.5*smoothstep(0.74,0.95,n));',
  'float band=sin((uv.y*2.5+n*1.5*u_amp-t*0.25)*6.2832);col+=0.03*band*u_amp;',
  'float iso=abs(n-(0.56+0.04*sin(t*0.35)));float core=1.0-smoothstep(0.0,0.006,iso);float halo=1.0-smoothstep(0.0,0.022,iso);float glow=1.0-smoothstep(0.0,0.07,iso);',
  'col+=vec3(0.949,0.420,0.129)*(core*1.0+halo*halo*0.42+glow*glow*0.14)*u_wire;',
  'float iso2=abs(n-0.41);col+=vec3(0.79,0.84,0.91)*0.26*(1.0-smoothstep(0.0,0.005,iso2))*u_wire;',
  'float vig=smoothstep(1.25,0.35,length((uv-0.5)*vec2(1.2,1.0)));col*=mix(0.7,1.0,vig);gl_FragColor=vec4(col,1.0);}'].join('\n');
  try{gl=canvas.getContext('webgl',{antialias:false,alpha:false,depth:false,powerPreference:'low-power'})}catch(e){gl=null}
  if(gl){const sh=(ty,src)=>{const s=gl.createShader(ty);gl.shaderSource(s,src);gl.compileShader(s);return gl.getShaderParameter(s,gl.COMPILE_STATUS)?s:null};
    const v=sh(gl.VERTEX_SHADER,VS),f=sh(gl.FRAGMENT_SHADER,FS);if(!v||!f)gl=null;else{const pr=gl.createProgram();gl.attachShader(pr,v);gl.attachShader(pr,f);gl.linkProgram(pr);gl.useProgram(pr);
      const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const loc=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
      ['u_res','u_time','u_amp','u_wire','u_mouse'].forEach(k=>u[k]=gl.getUniformLocation(pr,k))}}
  if(!gl){canvas.style.display='none';const fb=document.createElement('div');fb.className='shader-fallback';canvas.parentNode.insertBefore(fb,canvas);return{start(){},stop(){},set(){}}}
  const W=1600*.6,Hh=900*.6;canvas.width=W;canvas.height=Hh;
  const host=canvas.closest('.slide');host.addEventListener('pointermove',e=>{const r=host.getBoundingClientRect();mouse.tx=(e.clientX-r.left)/r.width;mouse.ty=1-(e.clientY-r.top)/r.height});
  function frame(now){if(!run)return;const dt=Math.min(.05,(now-last)/1000);last=now;tAcc+=dt*(REDMO?.25:1);mouse.x+=(mouse.tx-mouse.x)*.04;mouse.y+=(mouse.ty-mouse.y)*.04;
    gl.viewport(0,0,W,Hh);gl.uniform2f(u.u_res,W,Hh);gl.uniform1f(u.u_time,tAcc+3);gl.uniform1f(u.u_amp,amp);gl.uniform1f(u.u_wire,wire);gl.uniform2f(u.u_mouse,mouse.x,mouse.y);gl.drawArrays(gl.TRIANGLES,0,6);raf=requestAnimationFrame(frame)}
  frame.first=true;
  return{start(){if(run)return;run=true;last=performance.now();raf=requestAnimationFrame(frame)},stop(){run=false;cancelAnimationFrame(raf)},set(a){amp=a}}};

/* fx 03 · Hologram 3D Cards */
FX.holo=function(el,max){max=max||9;if(REDMO)return;const scene=el.parentElement;el.querySelectorAll('[data-depth]').forEach(d=>d.style.setProperty('--z',d.dataset.depth+'px'));
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;el.classList.remove('out');el.classList.add('hover');el.style.transform=`rotateX(${(.5-py)*max}deg) rotateY(${(px-.5)*max}deg)`;el.style.setProperty('--mx',px*100+'%');el.style.setProperty('--my',py*100+'%')});
  el.addEventListener('pointerleave',()=>{el.classList.add('out');el.classList.remove('hover');el.style.transform=''})};

/* fx 21 · Flip Card */
FX.flip=function(root){root.querySelectorAll('.flip').forEach(f=>f.addEventListener('click',()=>f.classList.toggle('on')))};

/* fx 37 · Before/After Slider */
FX.ba=function(el){const set=x=>{el.style.setProperty('--x',clamp(x,4,96)+'%');el.dataset.x=clamp(x,4,96)};let drag=false;
  const pos=e=>{const r=el.getBoundingClientRect();return (e.clientX-r.left)/r.width*100};
  el.addEventListener('pointerdown',e=>{drag=true;el.setPointerCapture(e.pointerId);set(pos(e))});el.addEventListener('pointermove',e=>{if(drag)set(pos(e))});el.addEventListener('pointerup',()=>drag=false);el.addEventListener('pointercancel',()=>drag=false);
  el.addEventListener('keydown',e=>{const x=+el.dataset.x||50;if(e.key==='ArrowLeft'){set(x-5);e.preventDefault()}if(e.key==='ArrowRight'){set(x+5);e.preventDefault()}});
  return{tween(to,dur){const from=+el.dataset.x||50,t0=performance.now();const st=t=>{const k=clamp((t-t0)/(dur||1200),0,1),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;set(from+(to-from)*e);if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)},set}};

/* fx 33 · Card Stack */
FX.stack=function(root,onTop){const cards=[...root.querySelectorAll('.sc')];let order=cards.map((c,i)=>i);
  const lay=()=>{order.forEach((ci,k)=>{const c=cards[ci];c.style.zIndex=cards.length-k;c.style.transform=`translate(${k*28}px,${k*-22}px) scale(${1-k*.05})`;c.style.filter=k?`brightness(${1-k*.12})`:'none';c.classList.toggle('front',k===0)});if(onTop)onTop(cards[order[0]],order[0])};
  const next=()=>{order.push(order.shift());lay()};cards.forEach(c=>c.addEventListener('click',e=>{if(e.target.closest('[data-goto]'))return;if(c.classList.contains('front'))next();else{const i=cards.indexOf(c);while(order[0]!==i)order.push(order.shift());lay()}}));lay();return{next,to(i){while(order[0]!==i)order.push(order.shift());lay()}}};

/* fx 04 · 3D Tilt / Perspective (layers) */
FX.tilt=function(scene,wrap){if(REDMO)return;scene.addEventListener('pointermove',e=>{const r=scene.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;wrap.style.transform=`rotateX(${52-py*10}deg) rotateZ(${-32+px*12}deg)`});scene.addEventListener('pointerleave',()=>{wrap.style.transform=''})};

/* layout helper: center of element relative to container (layout coords, sem escala) */
function rel(el,box){let x=0,y=0,n=el;while(n&&n!==box){x+=n.offsetLeft;y+=n.offsetTop;n=n.offsetParent}return{x,y,w:el.offsetWidth,h:el.offsetHeight,cx:x+el.offsetWidth/2,cy:y+el.offsetHeight/2}}

/* registro de produtos (preenchido pelos slides de produto) */
window.PRODS={
 p_play:{name:"Tech M&A Playbook",slide:"prod-playbook"},
 p_dd:{name:"IT Due Diligence",slide:"prod-itdd"},
 p_code:{name:"Software Product & Technology Diligence",slide:"prod-lentes"},
 p_ai:{name:"AI Due Diligence",slide:"prod-lentes"},
 p_cyber:{name:"Cyber & Data Due Diligence",slide:"prod-lentes"},
 p_sep:{name:"IT Separation & TSA Design",slide:"prod-dayone"},
 p_day1:{name:"Day One Blueprint",slide:"prod-dayone"},
 p_office:{name:"Integration & Separation Office",slide:"prod-office"},
 p_value:{name:"Tech Value Creation",slide:"prod-valor"},
 p_exit:{name:"Exit Tech Readiness",slide:"prod-valor"},
 p_twin:{name:"A&M Deal Twin",slide:"prod-twin"}};
/* ===== ícones de linha (desenham na entrada) ===== */
const ICONS={
doc:'<path d="M7 3h7l5 5v13H7z"/><polyline points="14 3 14 8 19 8"/><line x1="10" y1="13" x2="16" y2="13"/><line x1="10" y1="17" x2="16" y2="17"/>',
check:'<rect x="4" y="4" width="16" height="16" rx="3"/><polyline points="8.5 12 11 14.5 15.5 9.5"/>',
shield:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><polyline points="9 12 11 14 15 10"/>',
graph:'<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="7" r="2.5"/><circle cx="12" cy="18" r="2.5"/><line x1="8.3" y1="7" x2="15.6" y2="7"/><line x1="7.3" y1="8.2" x2="10.8" y2="15.8"/><line x1="16.8" y1="9.2" x2="13.2" y2="15.8"/>',
code:'<polyline points="8 8 4 12 8 16"/><polyline points="16 8 20 12 16 16"/><line x1="13.5" y1="5" x2="10.5" y2="19"/>',
cloud:'<path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.4 1.5A3.3 3.3 0 0 0 7 18z"/>',
ai:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><line x1="9" y1="3" x2="9" y2="6"/><line x1="15" y1="3" x2="15" y2="6"/><line x1="9" y1="18" x2="9" y2="21"/><line x1="15" y1="18" x2="15" y2="21"/><line x1="3" y1="9" x2="6" y2="9"/><line x1="3" y1="15" x2="6" y2="15"/><line x1="18" y1="9" x2="21" y2="9"/><line x1="18" y1="15" x2="21" y2="15"/>',
people:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 11a3 3 0 1 0 0-6"/><path d="M18 20c0-2.4-1.1-4.5-3-5.6"/>',
contract:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 16c1.5-2 2.5-2 3.5 0s2 2 3 0"/><line x1="9" y1="9" x2="15" y2="9"/>',
chart:'<polyline points="3.5 17 9 11.5 13 15 20.5 7.5"/><polyline points="15 7.5 20.5 7.5 20.5 13"/>',
flag:'<line x1="5" y1="21" x2="5" y2="4"/><path d="M5 4h12l-2.5 4L17 12H5"/>',
search:'<circle cx="11" cy="11" r="6.5"/><line x1="16" y1="16" x2="21" y2="21"/>',
link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
layers:'<polygon points="12 3 21 8 12 13 3 8"/><polyline points="3 12.5 12 17.5 21 12.5"/><polyline points="3 17 12 22 21 17"/>',
target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
gauge:'<path d="M4 17a8 8 0 1 1 16 0"/><line x1="12" y1="17" x2="16" y2="11"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
route:'<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
rocket:'<path d="M12 3c3 2 5 5.5 5 9.5L14.5 15h-5L7 12.5C7 8.5 9 5 12 3z"/><circle cx="12" cy="9.5" r="1.6"/><path d="M9.5 15L8 19l2.5-1.2M14.5 15l1.5 4-2.5-1.2"/>',
hand:'<path d="M3 12l4-4 4 3 3-2 7 5"/><path d="M7 8l-4 4 6 6 3-2 3 2 3-3"/>',
spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>',
eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
split:'<path d="M12 21V12"/><path d="M12 12L5 5"/><path d="M12 12l7-7"/><polyline points="5 9 5 5 9 5"/><polyline points="15 5 19 5 19 9"/>',
calendar:'<rect x="3.5" y="5" width="17" height="15" rx="2"/><line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/><line x1="8" y1="3" x2="8" y2="6.5"/><line x1="16" y1="3" x2="16" y2="6.5"/>',
book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><line x1="9" y1="8" x2="15" y2="8"/>',
pulse:'<path d="M3 12h4l2-5 4 10 2-5h6"/>',
coin:'<circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/>'
};
function icoSvg(n,d){return `<svg class="ico" viewBox="0 0 24 24" style="--d:${d||0}" aria-hidden="true">${ICONS[n]||ICONS.spark}</svg>`}
