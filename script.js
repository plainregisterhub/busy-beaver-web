const navToggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav-links');
navToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const coin=document.getElementById('coin'); document.getElementById('flipCoin')?.addEventListener('click',()=>coin.classList.toggle('flipped'));
const copy=document.getElementById('copyContract');
copy?.addEventListener('click',async()=>{const v=document.getElementById('contract').textContent.trim(); if(v && !v.includes('ADD CONTRACT')){await navigator.clipboard.writeText(v);copy.textContent='COPIED ✓';setTimeout(()=>copy.textContent='COPY',1400)}});
window.addEventListener('scroll',()=>{document.documentElement.style.setProperty('--scroll',window.scrollY)});
