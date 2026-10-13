// Comportamento: warp
export default function warp() {
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var c=document.getElementById('warp');if(!c||!c.getContext)return;
var r=document.documentElement,ctx=c.getContext('2d'),W,H,col='240,84,90',tx=0,ty=0,cx=0,cy=0,str=0,tstr=0,raf=0,on=false,R=230,S=.9,G=56,ST=14;
function size(){var d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;c.width=W*d;c.height=H*d;ctx.setTransform(d,0,0,d,0,0)}
function rgb(){var h=getComputedStyle(r).getPropertyValue('--red').trim().replace('#','');if(h.length===6)col=parseInt(h.slice(0,2),16)+','+parseInt(h.slice(2,4),16)+','+parseInt(h.slice(4,6),16)}
function warp(x,y){var dx=cx-x,dy=cy-y,d=Math.sqrt(dx*dx+dy*dy);if(d>=R||str<.001)return[x,y];var f=1-d/R;f=f*f*S*str;return[x+dx*f,y+dy*f]}
function draw(){
ctx.clearRect(0,0,W,H);
var base=new Path2D(),b=[new Path2D(),new Path2D(),new Path2D()],th=[R*1.1,R*.75,R*.4],i,j,k,p,prev,m,d;
function line(vert,pos){
prev=null;
for(j=0;j<=(vert?H:W)+ST;j+=ST){
p=vert?warp(pos,j):warp(j,pos);
if(prev){
base.lineTo(p[0],p[1]);
if(str>.001){m=[(p[0]+prev[0])/2,(p[1]+prev[1])/2];d=Math.hypot(m[0]-cx,m[1]-cy);
for(k=0;k<3;k++)if(d<th[k]){b[k].moveTo(prev[0],prev[1]);b[k].lineTo(p[0],p[1])}}
}else base.moveTo(p[0],p[1]);
prev=p}
}
for(i=.5;i<=W;i+=G)line(true,i);
for(i=.5;i<=H;i+=G)line(false,i);
ctx.lineWidth=1;
ctx.strokeStyle='rgba('+col+',.15)';ctx.stroke(base);
if(str>.001){ctx.strokeStyle='rgba('+col+',.06)';for(k=0;k<3;k++)ctx.stroke(b[k])}
}
function tick(){
cx+=(tx-cx)*.14;cy+=(ty-cy)*.14;str+=(tstr-str)*.1;
draw();
raf=(Math.abs(tx-cx)>.4||Math.abs(ty-cy)>.4||Math.abs(tstr-str)>.004)?requestAnimationFrame(tick):0}
function kick(){if(!raf){rgb();raf=requestAnimationFrame(tick)}}
addEventListener('pointermove',function(e){
if(e.pointerType==='touch')return;
tx=e.clientX;ty=e.clientY;tstr=1;
if(!on){on=true;cx=tx;cy=ty;size();r.classList.add('warp')}
kick()},{passive:true});
r.addEventListener('mouseleave',function(){tstr=0;kick()});
addEventListener('resize',function(){if(on){size();kick()}});
}
