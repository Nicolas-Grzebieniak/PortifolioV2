// Comportamento: glow
export default function glow() {
var r=document.documentElement,red=matchMedia('(prefers-reduced-motion: reduce)').matches,tx=0,ty=0,cx=0,cy=0,on=false,raf=0;
function put(){r.style.setProperty('--mx',cx+'px');r.style.setProperty('--my',cy+'px')}
function tick(){var k=red?1:.14;cx+=(tx-cx)*k;cy+=(ty-cy)*k;put();raf=(Math.abs(tx-cx)>.5||Math.abs(ty-cy)>.5)?requestAnimationFrame(tick):0}
addEventListener('pointermove',function(e){
if(e.pointerType==='touch')return;
tx=e.clientX;ty=e.clientY;
if(!on){on=true;cx=tx;cy=ty;put();r.classList.add('mouse')}
if(!raf)raf=requestAnimationFrame(tick)},{passive:true});
}
