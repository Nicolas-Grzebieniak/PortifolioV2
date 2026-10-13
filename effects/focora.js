// Comportamento: focora
export default function focora() {
var box=document.querySelector('.shot.quest');
if(!box||!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var lv=box.querySelector('.lv'),xv=box.querySelector('.xv'),bar=box.querySelector('.track span'),tasks=box.querySelectorAll('.task[data-xp]'),cur=620,run=0;
function wait(ms,id){return new Promise(function(r){setTimeout(function(){r(id===run)},ms)})}
function pop(e){e.classList.remove('pop');void e.offsetWidth;e.classList.add('pop')}
function setXP(to){var from=cur,t0=performance.now();cur=to;(function f(t){var k=Math.min((t-t0)/700,1);xv.textContent=Math.round(from+(to-from)*k)+' / 1000 XP';if(k<1)requestAnimationFrame(f)})(t0)}
function reset(){bar.style.transition='none';bar.style.width='62%';void bar.offsetWidth;bar.style.transition='';bar.classList.remove('full');tasks.forEach(function(t){t.classList.remove('done','pop')});lv.textContent='Level 4';xv.textContent='620 / 1000 XP';cur=620}
function finish(t,total){t.classList.add('done');pop(t);setXP(total);bar.style.width=(total/10)+'%'}
async function cycle(id){
while(id===run){
reset();
if(!await wait(1600,id))return;
finish(tasks[0],800);
if(!await wait(1700,id))return;
finish(tasks[1],1000);
if(!await wait(1000,id))return;
bar.classList.add('full');lv.textContent='Level 5';pop(lv);
if(!await wait(3000,id))return;
}}
new IntersectionObserver(function(es){run++;if(es[0].isIntersecting)cycle(run)},{threshold:.3}).observe(box);
}
