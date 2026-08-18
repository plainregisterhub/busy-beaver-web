(()=>{const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
const head=q('.header'),menu=q('[data-menu]'),mb=q('[data-menu-btn]');let last=scrollY;
mb?.addEventListener('click',()=>{const open=menu.classList.toggle('open');mb.setAttribute('aria-expanded',open);mb.setAttribute('aria-label',open?'Close menu':'Open menu')});qa('.links a').forEach(a=>a.onclick=()=>{menu?.classList.remove('open');mb?.setAttribute('aria-expanded','false')});
addEventListener('scroll',()=>{const y=scrollY;if(head){if(y>140&&y>last+8)head.classList.add('hide');if(y<last-8||y<80)head.classList.remove('hide')}last=y},{passive:true});
const coin=q('[data-coin]');coin?.addEventListener('click',()=>{if(!coin.classList.contains('flip')){coin.classList.add('flip')}else{coin.classList.remove('flip')}});
qa('.faq button').forEach(btn=>btn.addEventListener('click',()=>{const box=document.getElementById(btn.getAttribute('aria-controls')),item=btn.closest('article'),open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',!open);item.classList.toggle('open',!open);box.hidden=open}));
const copy=q('[data-copy]');copy?.addEventListener('click',async()=>{const text='';if(!text)return;try{await navigator.clipboard.writeText(text);copy.textContent='COPIED';setTimeout(()=>copy.textContent='COPY',1400)}catch{copy.textContent='COPY FAILED';setTimeout(()=>copy.textContent='COPY',1400)}});
const rev=qa('.reveal');if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});rev.forEach(x=>io.observe(x))}else rev.forEach(x=>x.classList.add('show'));
})();
