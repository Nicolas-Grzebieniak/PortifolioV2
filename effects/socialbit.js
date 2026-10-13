// Comportamento: socialbit
export default function socialbit() {
var box=document.querySelector('.sb'),el=document.querySelector('.sbtext'),v=document.querySelector('.sbvote'),toast=document.querySelector('.sbtoast');
if(!box||!el||!v||!toast||!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var n=v.querySelector('b'),txt=el.textContent,run=0;
function wait(ms,id){return new Promise(function(r){setTimeout(function(){r(id===run)},ms)})}
function vote(c,k){v.className='sbvote '+c;n.textContent=k;n.classList.remove('pop');void n.offsetWidth;n.classList.add('pop')}
async function cycle(id){
while(id===run){
el.textContent='';el.classList.add('typing');toast.classList.remove('show');v.className='sbvote';n.textContent='0';
if(!await wait(900,id))return;
for(var i=1;i<=txt.length;i++){el.textContent=txt.slice(0,i);if(!await wait(45+Math.random()*60,id))return}
if(!await wait(500,id))return;
el.classList.remove('typing');toast.classList.add('show');
if(!await wait(900,id))return;vote('up',1);
if(!await wait(1300,id))return;vote('dn',-1);
if(!await wait(1300,id))return;vote('up',1);
if(!await wait(2600,id))return;
toast.classList.remove('show');
if(!await wait(900,id))return;
}}
new IntersectionObserver(function(es){run++;if(es[0].isIntersecting)cycle(run)},{threshold:.3}).observe(box);
}
