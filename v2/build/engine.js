"use strict";
const $=id=>document.getElementById(id);
const NS="http://www.w3.org/2000/svg";
function H(t,a,p,x){const e=document.createElement(t);if(a)for(const k in a){if(k==="class")e.className=a[k];else if(k==="style")e.style.cssText=a[k];else if(k==="html")e.innerHTML=a[k];else e.setAttribute(k,a[k])}if(x!=null)e.textContent=x;if(p)p.appendChild(e);return e}
function S(t,a,p){const e=document.createElementNS(NS,t);if(a)for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const REDMO=matchMedia("(prefers-reduced-motion: reduce)").matches;
const slides=[...document.querySelectorAll(".slide")],N=slides.length;let cur=0,busy=false;
const ENTER={},LEAVE={};
const DOSE={sutil:1,moderada:2,intensa:3};

/* chrome */
function kin(el){let k=0;const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const parts=c.textContent.split(/(\s+)/),f=document.createDocumentFragment();parts.forEach(p=>{if(!p)return;if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(p));return}const w=document.createElement("span");w.className="kw";const i=document.createElement("span");i.style.setProperty("--k",k++);i.textContent=p;w.appendChild(i);f.appendChild(w)});c.replaceWith(f)}else if(c.nodeType===1&&!c.classList.contains("kw")&&!c.classList.contains("hl"))walk(c);else if(c.nodeType===1&&c.classList.contains("hl")){const w=document.createElement("span");w.className="kw";const i=document.createElement("span");i.style.setProperty("--k",k++);c.replaceWith(w);i.appendChild(c);w.appendChild(i)}})};walk(el)}
const BRAND=`<div class="brand"><div class="brand-am"><b>ALVAREZ <i>&amp;</i> MARSAL</b><small>PERFORMANCE IMPROVEMENT</small></div><span class="brand-div"></span><div class="brand-dts"><b>DTS</b><small>Digital &amp; Technology Services</small></div></div>`;
slides.forEach((s,i)=>{
  if(!s.hasAttribute("data-bare")){
    const top=H("div",{class:"top"});top.innerHTML=`${BRAND}<div class="top-title"><span>${s.dataset.chap||""}</span><b>${s.dataset.t}</b></div><div class="top-right"><span class="pg"><b>${String(i+1).padStart(2,"0")}</b> / ${String(N).padStart(2,"0")}</span></div>`;s.prepend(top);
    const f=H("div",{class:"foot"},s);const src=H("span",{class:"src"},f);src.innerHTML=s.dataset.src?`<b>FONTE</b>${s.dataset.src}`:`<b>A&amp;M · DTS</b>IT M&amp;A · portfólio de produtos`;
    if(s.dataset.fx){const [num,name,dose]=s.dataset.fx.split("|");const c=H("span",{class:"fxchip",title:`Efeito do Guia de Design DTS: ${name} · dose ${dose}`},f);const d=DOSE[dose]||1;c.innerHTML=`<span>fx ${num} · ${name}</span><span class="dose"><i class="${d>=1?"on":""}"></i><i class="${d>=2?"on":""}"></i><i class="${d>=3?"on":""}"></i></span>`}
  }
});
document.querySelectorAll(".kin").forEach(kin);

/* dots + fit */
slides.forEach((s,i)=>{const b=H("button",{title:s.dataset.t,"aria-label":s.dataset.t},$("dots"));b.addEventListener("click",()=>go(i))});
function fit(){const vw=innerWidth,vh=innerHeight,sm=vw<760,pad=sm?6:18,bar=sm?56:62,sc=Math.min((vw-pad*2)/1600,(vh-pad-bar)/900),st=$("stage");st.style.left=vw/2+"px";st.style.top=(pad+(vh-pad-bar)/2)+"px";st.style.transform=`translate(-50%,-50%) scale(${sc})`}
addEventListener("resize",fit);
const SC=()=>$("stage").getBoundingClientRect().width/1600;

function activate(i,inst,back){const prev=cur;const n=slides[i];slides.forEach((s,k)=>{if(k!==i)s.classList.remove("active","entering","play","back")});
  if(prev!==i&&LEAVE[slides[prev].id])LEAVE[slides[prev].id]();
  n.classList.remove("play","entering","back");void n.offsetWidth;n.classList.add("active","play");if(!inst){n.classList.add("entering");if(back)n.classList.add("back")}cur=i;
  $("cnt").textContent=`${String(i+1).padStart(2,"0")} / ${String(N).padStart(2,"0")}`;$("progress").style.width=((i+1)/N*100)+"%";$("bPrev").disabled=i===0;$("bNext").disabled=i===N-1;
  document.querySelectorAll("#dots button").forEach((b,k)=>b.classList.toggle("on",k===i));try{history.replaceState(null,"","#"+(i+1))}catch(e){}
  if(ENTER[n.id])ENTER[n.id](n);infoFill()}

/* chapter interstitial */
const CH={};document.querySelectorAll("[data-chapter]").forEach(s=>{const [n,t,d]=s.dataset.chapter.split("|");CH[s.id]=[n,t,d]});
let CHAPEND=null;
function chapter(meta,done){const c=$("chap");c.innerHTML=`<div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div><div class="cn">${meta[0]}</div><div class="cey">CAPÍTULO ${meta[0]}</div><h1>${meta[1]}</h1><p>${meta[2]}</p><div class="cln"></div><div class="csk">clique para continuar ›</div>`;kin(c.querySelector("h1"));c.classList.add("on","play");
  c.querySelector(".cln").animate([{width:"0px"},{width:"420px"}],{duration:900,delay:250,easing:"cubic-bezier(.22,.61,.36,1)",fill:"forwards"});
  let ended=false;const end=()=>{if(ended)return;ended=true;CHAPEND=null;c.animate([{opacity:1},{opacity:0}],{duration:420}).onfinish=()=>{c.classList.remove("on","play");c.innerHTML=""};done()};c.onclick=end;CHAPEND=end;setTimeout(end,2300)}
function go(i,inst){if(CHAPEND&&!inst){CHAPEND();return}i=clamp(i,0,N-1);if(i===cur&&!inst)return;if(busy)return;const back=i<cur;
  if(inst||REDMO){activate(i,true,back);return}
  const chap=!back&&CH[slides[i].id];busy=true;const w=$("wipe");w.style.visibility="visible";const bars=[...w.querySelectorAll("i")],dir=back?-1:1;
  bars.forEach((b,k)=>b.animate([{transform:`translateX(${-110*dir}%) skewX(-10deg)`},{transform:"translateX(0) skewX(-10deg)"}],{duration:380,delay:k*60,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"}));
  setTimeout(()=>{const after=()=>{bars.forEach((b,k)=>b.animate([{transform:"translateX(0) skewX(-10deg)"},{transform:`translateX(${110*dir}%) skewX(-10deg)`}],{duration:420,delay:(2-k)*60,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"}));setTimeout(()=>{w.style.visibility="hidden";busy=false},600)};
    if(chap){activate(i,true,back);slides[i].classList.remove("play");chapter(chap,()=>{const n=slides[i];void n.offsetWidth;n.classList.add("play");if(ENTER[n.id])ENTER[n.id](n)});after()}else{activate(i,false,back);after()}},500)}
function goId(id){const k=slides.findIndex(s=>s.id===id);if(k>=0)go(k)}
document.addEventListener("click",e=>{const el=e.target.closest("[data-goto]");if(el){e.preventDefault();goId(el.dataset.goto)}});
$("bNext").onclick=()=>go(cur+1);$("bPrev").onclick=()=>go(cur-1);
addEventListener("keydown",e=>{if(e.target.tagName==="INPUT")return;if(["ArrowRight","PageDown"," "].includes(e.key)){e.preventDefault();go(cur+1)}else if(["ArrowLeft","PageUp"].includes(e.key)){e.preventDefault();go(cur-1)}else if(e.key==="Home")go(0);else if(e.key==="End")go(N-1);else if(e.key==="f"||e.key==="F"){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch(err){}}});
let tx=null;addEventListener("touchstart",e=>{tx=e.touches[0].clientX},{passive:true});addEventListener("touchend",e=>{if(tx==null)return;const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>70&&!e.target.closest(".noswipe"))dx<0?go(cur+1):go(cur-1);tx=null},{passive:true});
/* tooltip */
const tp=$("tip");addEventListener("pointermove",e=>{const el=e.target.closest&&e.target.closest("[data-tv]");if(el){tp.innerHTML=`<b>${el.dataset.tv}</b>${el.dataset.tl||""}`;tp.classList.add("on");tp.style.left=Math.min(e.clientX+16,innerWidth-340)+"px";tp.style.top=(e.clientY+16)+"px"}else tp.classList.remove("on")});
/* ripple */
document.addEventListener("pointerdown",e=>{if(REDMO)return;const el=e.target.closest("button,.clk");if(!el||el.closest("#chap"))return;if(getComputedStyle(el).position==="static")el.style.position="relative";el.style.overflow="hidden";const r=el.getBoundingClientRect(),sc=$("stage").contains(el)?SC():1,x=(e.clientX-r.left)/sc,y=(e.clientY-r.top)/sc,size=Math.max(r.width,r.height)/sc*1.15;const sp=H("span",{class:"rp",style:`width:${size}px;height:${size}px;left:${x-size/2}px;top:${y-size/2}px`},el);setTimeout(()=>sp.remove(),620)});
/* índice */
let idxOpen=false;(function(){const c=$("cnt");c.title="Índice (tecla G)";const ix=$("idxP");const hd=H("div",{class:"xh"},ix);H("span",null,hd,"Índice");const xb=H("button",{class:"ix","aria-label":"Fechar"},hd,"×");const ls=H("div",null,ix);
  let last=null;const items=[];slides.forEach((s,i)=>{const p=s.dataset.chap||"Abertura";if(p!==last){H("div",{class:"xg"},ls,p);last=p}const b=H("button",{class:"xi"},ls);H("b",null,b,String(i+1).padStart(2,"0"));H("span",null,b,s.dataset.t);b.addEventListener("click",()=>{set(false);go(i)});items.push(b)});
  const set=v=>{idxOpen=v;ix.classList.toggle("on",v);if(v){items.forEach((b,k)=>b.classList.toggle("cur",k===cur));items[cur].scrollIntoView({block:"center"})}};
  c.addEventListener("click",e=>{e.stopPropagation();set(!idxOpen)});xb.addEventListener("click",()=>set(false));ix.addEventListener("click",e=>e.stopPropagation());addEventListener("click",()=>{if(idxOpen)set(false)});addEventListener("keydown",e=>{if(e.key==="g"||e.key==="G")set(!idxOpen);if(e.key==="Escape")set(false)})})();
/* sobre este slide */
let infoOpen=false;function infoFill(){if(!infoOpen)return;const s=slides[cur],p=$("infoP");p.querySelector(".it").textContent=s.dataset.t;p.querySelector(".id").textContent=s.dataset.desc||"";const fx=s.dataset.fx?s.dataset.fx.split("|"):null;p.querySelector(".ifx").innerHTML=fx?`<b>Efeito (Guia DTS):</b> fx ${fx[0]} · ${fx[1]} · dose ${fx[2]}. ${s.dataset.fxwhy||""}`:"";p.querySelector(".isrc").textContent=s.dataset.srcfull||s.dataset.src||""}
(function(){const bt=H("button",{class:"g",id:"bInfo",title:"Sobre este slide (tecla I)"});bt.innerHTML='<span style="display:inline-grid;place-items:center;width:18px;height:18px;border-radius:50%;border:2px solid currentColor;font:800 10px/1 var(--font-sans)">i</span><span class="lb">Sobre este slide</span>';$("controls").insertBefore(bt,$("bPrev"));
  const p=$("infoP");p.innerHTML='<div class="ih"><span class="ie">Sobre este slide</span><button class="ix" aria-label="Fechar">×</button></div><div class="it"></div><div class="id"></div><div class="ifx"></div><div class="isrc"></div>';
  const set=v=>{infoOpen=v;p.classList.toggle("on",v);infoFill()};bt.addEventListener("click",()=>set(!infoOpen));p.querySelector(".ix").addEventListener("click",()=>set(false));addEventListener("keydown",e=>{if(e.key==="i"||e.key==="I")set(!infoOpen);if(e.key==="Escape")set(false)})})();
