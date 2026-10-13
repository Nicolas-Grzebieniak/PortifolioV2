import { sections } from '../data/sections.js'

// Comportamento: ruler
export default function ruler() {
var d=document,r=d.documentElement,R=d.querySelector('.ruler');
if(!R)return;
r.classList.add('rl');
var win=R.querySelector('.win'),mk=R.querySelector('.mark'),lb=mk.querySelector('b'),i,e;
var T=[],N=[],red=matchMedia('(prefers-reduced-motion: reduce)').matches,a,ty;
for(i=0;i<=100;i++){a=i%10===0?.5:i%5===0?.7:2;e=d.createElement('i');e.className='t';e.style.top=i+'%';e.style.width=(i%10===0?20:i%5===0?14:5)+'px';R.appendChild(e);T.push({el:e,x:i,a:a})}
for(i=0;i<=100;i+=5){e=d.createElement('span');e.className='n';e.textContent=i;e.style.top=i+'%';ty=i===0?'0':i===100?'-100%':'-50%';e.style.transformOrigin='100% '+(i===0?'0':i===100?'100%':'50%');R.appendChild(e);N.push({el:e,x:i,ty:ty})}
var S=sections.map(function(sec){var a=[sec.label,sec.id,sec.rulerPos];
var s=d.createElement('span');s.className='l';s.textContent=a[0];
s.addEventListener('pointerdown',function(ev){ev.stopPropagation();d.getElementById(a[1]).scrollIntoView()});
R.appendChild(s);return{el:s,id:a[1],pos:a[2]}});
function u(){
var h=r.scrollHeight,v=innerHeight,m=Math.max(h-v,1),y=scrollY,p=Math.min(y/m,1),cur=null;
win.style.top=(y/h*100)+'%';win.style.height=(v/h*100)+'%';
mk.style.top=(p*100)+'%';
lb.textContent=('00'+Math.round(p*100)).slice(-3)+'%';
S.forEach(function(o){var t=d.getElementById(o.id).getBoundingClientRect().top+y;o.x=(o.pos!==undefined?o.pos:Math.min(Math.max(t/m*100,3),97));o.el.style.top=o.x+'%';if(t<=y+v*.4)cur=o});
if(p>.98)cur=S[S.length-1];
S.forEach(function(o){o.el.classList.toggle('on',o===cur)});
var P=p*100;
function k(x,W){var q=Math.abs(x-P);return red||q>=W?0:(1+Math.cos(Math.PI*q/W))/2}
T.forEach(function(o){var s=k(o.x,11);o.el.style.transform='scaleX('+(1+o.a*s)+')';o.el.style.opacity=.6+.4*s});
N.forEach(function(o){var s=k(o.x,11);o.el.style.transform='translateY('+o.ty+') scale('+(1+1*s)+')';o.el.style.color='color-mix(in srgb,var(--ink) '+Math.round(s*100)+'%,var(--sub))'});
S.forEach(function(o){o.el.style.transform='translateY(-50%) scale('+(1+.8*k(o.x,10))+')'});
}
function go(ev){var b=R.getBoundingClientRect();scrollTo({top:Math.min(Math.max((ev.clientY-b.top)/b.height,0),1)*Math.max(r.scrollHeight-innerHeight,0),behavior:'instant'})}
var drag=false;
R.addEventListener('pointerdown',function(ev){drag=true;R.setPointerCapture(ev.pointerId);go(ev)});
R.addEventListener('pointermove',function(ev){if(drag)go(ev)});
R.addEventListener('pointerup',function(){drag=false});
addEventListener('scroll',u,{passive:true});addEventListener('resize',u);addEventListener('load',u);u();
}
