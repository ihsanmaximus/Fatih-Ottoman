(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
/* ---- Config: edit demo values here ---- */
const CFG={reservationEmail:'info@example.com',videoUrl:''};
const DISHES=[['Adana Kebap','₺450','Özel baharatlarla marine edilmiş, mangalda pişirilen acılı kuzu kebabı.'],['Pide Çeşitleri','₺380','Taş fırında pişen kuşbaşılı, kaşarlı veya sucuklu pide seçenekleri.'],['Kuzu Tandır','₺520','Saatlerce yavaş pişirilen, kemikten ayrılan yumuşaklıkta kuzu.'],['Baklava','₺380','Antep fıstıklı, ince yufkalı geleneksel Osmanlı tatlısı.']];
/* ---- Nav ---- */
const nav=$('#nav'),bur=$('.burger');
const setNav=o=>{nav.classList.toggle('open',o);bur.setAttribute('aria-expanded',o);bur.setAttribute('aria-label',o?'Menüyü kapat':'Menüyü aç')};
bur.onclick=()=>setNav(!nav.classList.contains('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setNav(false)});
$$('nav a').forEach(a=>a.addEventListener('click',()=>setNav(false)));
const links=$$('nav>a'),secs=links.map(a=>$(a.getAttribute('href')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach((a,i)=>a.classList.toggle('active',secs[i]===e.target))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>s&&io.observe(s));
/* ---- Back to top ---- */
const fab=$('.top.fixed');addEventListener('scroll',()=>fab.hidden=scrollY<600,{passive:true});
$$('.top').forEach(b=>b.onclick=()=>scrollTo({top:0,behavior:'smooth'}));
/* ---- Placeholder links ---- */
$$('[data-todo]').forEach(a=>a.onclick=e=>{e.preventDefault();alert('Demo bağlantı: gerçek URL ekleyin (README).')});
$('[data-video]').onclick=()=>CFG.videoUrl?open(CFG.videoUrl,'_blank','noopener'):alert('Tanıtım videosu henüz eklenmedi. js/main.js içindeki CFG.videoUrl alanını doldurun.');
$('[data-all]').onclick=e=>{e.preventDefault();alert('Tam menü sayfası henüz yok. Şimdilik dört imza lezzet gösteriliyor.')};
/* ---- Dish modal ---- */
const dish=$('#dish');
$$('.card').forEach(c=>{const open=()=>{const d=DISHES[c.dataset.dish];$('h3',dish).textContent=d[0];$('b',dish).textContent=d[1];$('p',dish).textContent=d[2];dish.showModal()};c.onclick=open;c.tabIndex=0;c.onkeydown=e=>{if(e.key==='Enter')open()}});
/* ---- Gallery lightbox ---- */
const lb=$('#lb'),lbi=$('.lb-img'),gis=$$('.gi');let cur=0;
const show=i=>{cur=(i+gis.length)%gis.length;lbi.className='lb-img '+[...gis[cur].classList].find(c=>c.startsWith('img-'));lbi.setAttribute('role','img');lbi.setAttribute('aria-label',gis[cur].getAttribute('aria-label'))};
gis.forEach((g,i)=>g.onclick=()=>{show(i);lb.showModal()});
$('.arr.l',lb).onclick=()=>show(cur-1);$('.arr.r',lb).onclick=()=>show(cur+1);
lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
let sx=0;lb.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
/* ---- Testimonials carousel ---- */
const tr=$('.track');$$('.testi .arr').forEach(b=>b.onclick=()=>tr.scrollBy({left:+b.dataset.dir*(tr.firstElementChild.offsetWidth+18),behavior:'smooth'}));
/* ---- Reservation ---- */
const res=$('#res'),rf=$('#rf'),st=$('#rf-s');
$$('[data-open-res]').forEach(b=>b.onclick=()=>{dish.close();res.showModal()});
for(let h=11;h<=22;h++)['00','30'].forEach(m=>{if(h===22&&m==='30')return;rf.time.add(new Option(`${h}:${m}`,`${h}:${m}`))});
rf.date.min=new Date().toISOString().slice(0,10);
rf.onsubmit=e=>{e.preventDefault();const err=[];
const bad=(el,m)=>{el.setAttribute('aria-invalid',true);err.push(m)};$$('[aria-invalid]',rf).forEach(x=>x.removeAttribute('aria-invalid'));
if(rf.name.value.trim().length<2)bad(rf.name,'Ad soyad girin.');
if(!/^\S+@\S+\.\S+$/.test(rf.email.value))bad(rf.email,'Geçerli bir e-posta girin.');
if(rf.phone.value.replace(/\D/g,'').length<10)bad(rf.phone,'Geçerli bir telefon girin.');
if(!rf.date.value||rf.date.value<rf.date.min)bad(rf.date,'Bugün veya sonrası bir tarih seçin.');
if(!rf.time.value)bad(rf.time,'Saat seçin.');
const g=+rf.guests.value;if(!(g>=1&&g<=20))bad(rf.guests,'Kişi sayısı 1–20 olmalı.');
st.className='full '+(err.length?'err':'ok');
if(err.length){st.textContent=err.join(' ');return}
const body=`Ad: ${rf.name.value}\nE-posta: ${rf.email.value}\nTelefon: ${rf.phone.value}\nTarih: ${rf.date.value} ${rf.time.value}\nKişi: ${g}\nNot: ${rf.notes.value}`;
st.textContent='E-posta uygulamanız açılıyor. Rezervasyon, e-postayı gönderene kadar tamamlanmış sayılmaz.';
location.href=`mailto:${CFG.reservationEmail}?subject=${encodeURIComponent('Rezervasyon talebi')}&body=${encodeURIComponent(body)}`};
/* ---- Newsletter (no backend) ---- */
$('#news').onsubmit=e=>{e.preventDefault();const s=$('#news-s'),v=$('#ne').value;
s.textContent=/^\S+@\S+\.\S+$/.test(v)?'Demo: adres geçerli ama kaydedilmedi, bağlı bir bülten servisi yok.':'Geçerli bir e-posta adresi girin.'};
})();