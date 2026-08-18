const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

// Background images are kept as separate assets so production positioning remains modular.
$$('.section-bg').forEach(section=>section.style.setProperty('--bg',`url("${section.dataset.bg}")`));

const progress=$('.scroll-progress span');
const updateProgress=()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?(scrollY/h)*100:0)+'%'};
addEventListener('scroll',updateProgress,{passive:true}); updateProgress();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));

const menu=$('.menu-toggle'), header=$('.site-header');
menu?.addEventListener('click',()=>{const open=header.classList.toggle('menu-open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close menu':'Open menu')});
$$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('menu-open')));

// Highlight the closest major section in navigation.
const navLinks=$$('.desktop-nav a');
const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const id='#'+entry.target.id;navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===id))}}),{rootMargin:'-35% 0px -55% 0px',threshold:0});
['memecoin','home-base','token','builders','faq'].forEach(id=>{const el=document.getElementById(id);if(el)navObserver.observe(el)});

const coin=$('#coinWrap'), flip=$('#flipToken');
flip?.addEventListener('click',()=>{coin.classList.toggle('flipped');flip.innerHTML=coin.classList.contains('flipped')?'FLIP BACK <span>↻</span>':'FLIP COIN <span>↻</span>'});
coin?.addEventListener('click',()=>{coin.classList.toggle('flipped');});

const copyBtn=$('#copyContract');
copyBtn?.addEventListener('click',async()=>{
  const address=$('#contractAddress')?.textContent.trim();
  if(!address || address==='ADD CONTRACT ADDRESS'){copyBtn.textContent='ADD ADDRESS FIRST';setTimeout(()=>copyBtn.textContent='COPY',1400);return}
  try{await navigator.clipboard.writeText(address);copyBtn.textContent='COPIED ✓'}catch{copyBtn.textContent='COPY FAILED'}
  setTimeout(()=>copyBtn.textContent='COPY',1400);
});

// Subtle parallax on the hero only; disabled for reduced-motion users.
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const hero=$('#hero'), builders=$('.hero-builders');
  addEventListener('scroll',()=>{if(scrollY<innerHeight*1.2) builders.style.transform=`translate3d(0,${scrollY*.045}px,0)`},{passive:true});
}

// Smoothly close any native details sibling state is intentionally left independent.
$$('.faq-list details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open) $$('.faq-list details').forEach(o=>{if(o!==d)o.removeAttribute('open')})}));
