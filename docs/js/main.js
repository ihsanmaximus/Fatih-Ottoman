const toggle=document.getElementById('toggle'),links=document.getElementById('links');
toggle.addEventListener('click',()=>{let open=links.classList.toggle('open');toggle.textContent=open?'×':'☰';toggle.setAttribute('aria-expanded',open)});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.textContent='☰';toggle.setAttribute('aria-expanded','false')}));

const translations = {
 id: {
  nav:['Beranda','Warisan Kami','Menu','Galeri','Testimoni','Reservasi Meja ↗'],
  heroEyebrow:'Kuliner Istana Utsmaniyah', heroTitle:'Harmoni rempah,<br><span class="gold">tradisi Fatih.</span>',
  heroText:'Sajian istana Ottoman yang diracik dengan rempah autentik, api arang, dan keramahan Istanbul di jantung Jakarta.',
  heroButtons:['Reservasi Meja Sekarang →','Jelajahi Menu ↗'],
  proof:['100% halal certified','Master chef Istanbul','Resep warisan 1845'],
  features:[['Api & Tradisi','Dipanggang perlahan di atas arang'],['Rempah Pilihan','Didatangkan dari Anatolia'],['Ritual Tembaga','Kopi dan teh diseduh perlahan'],['Hangat di Hati','Keramahan yang tinggal di ingatan']],
  storyEyebrow:'Warisan & Dedikasi',storyTitle:'Satu meja.<br><span class="gold">Seribu cerita.</span>',
  storyP:['Fatih lahir dari kecintaan pada dapur istana Ottoman—tempat resep diwariskan melalui tangan, bukan sekadar buku. Kami membawa semangat itu ke Jakarta lewat api kayu, panci tembaga, dan bahan terbaik yang diperlakukan dengan hormat.','Setiap kunjungan adalah perjalanan kecil menuju Istanbul: lambat, penuh aroma, dan selalu meninggalkan kehangatan.'],
  storyLink:'TEMUKAN CERITA KAMI',stats:['Resep otentik','Bahan segar','Rasa berkarakter'],
  menuEyebrow:'Dari dapur Fatih',menuTitle:'Jamuan pilihan <span class="gold">Sultan.</span>',menuIntro:'Sajian yang dibuat untuk dinikmati perlahan, bersama orang-orang yang berarti.',
  filters:['Semua','Kebab','Meze','Hidangan utama','Dessert'],
  dishes:[
   ['Sedang rempah','Adana Kebab','Arang & rempah Anatolia','Daging domba cincang berbumbu isot dan paprika, dibakar di atas arang.'],
   ['Hangat rempah','Sultan Platter','Jamuan utama Fatih','Koleksi kebab panggang, nasi saffron, dan sayuran musiman untuk berbagi.'],
   ['Ringan rempah','Meze Mosaic','Pembuka meja Sultan','Hummus, muhammara, ezme, dan yoghurt domba dalam satu sajian berwarna.'],
   ['Hangat rempah','Kuzu Tandir','Domba panggang perlahan','Paha domba lembut yang dimasak perlahan bersama quince dan saus delima.'],
   ['Manis berlapis','Baklava Altın','Manis berlapis emas','Pastry filo tipis, pistachio Gaziantep, dan sirup madu bunga jeruk.'],
   ['Ritual tembaga','Kahve-i Fatih','Kopi Turki klasik','Kopi digiling halus, diseduh dalam cezve tembaga, disajikan bersama lokum.']
  ],
  details:'LIHAT DETAIL', experienceEyebrow:'Lebih dari sekadar makan malam',experienceTitle:'Ruang untuk <span class="gold">merasakan waktu.</span>',
  experienceText:'Di antara lengkung arsitektur, kilau lampu kuningan, dan alunan musik yang lembut, Fatih mengajak Anda untuk melambat—dan benar-benar hadir di meja.',
  experienceButton:'Jelajahi suasana →',galleryEyebrow:'Galeri Fatih',galleryTitle:'Setiap sudut punya <span class="gold">cerita.</span>',
  reviewEyebrow:'Dari mereka yang telah singgah',reviewTitle:'Kata mereka tentang <span class="gold">Fatih.</span>',
  reviews:[
   'Rasanya seperti menemukan Istanbul di tengah Jakarta. Kuzu tandir-nya lembut sekali, dan pelayanannya membuat kami ingin kembali.',
   'Suasana yang sangat istimewa untuk merayakan ulang tahun. Detailnya terasa: dari musik, lampu, sampai teh Turki setelah makan.',
   'Meze-nya segar dan penuh rasa, bukan sekadar cantik. Fatih sekarang jadi tempat favorit keluarga kami untuk makan bersama.'
  ],
  bookingEyebrow:'Simpan tempat Anda',bookingTitle:'Malam Anda,<br><span class="gold">meja kami.</span>',
  bookingIntro:'Pilih waktu terbaik Anda. Kami akan menyiapkan pengalaman Fatih yang hangat untuk Anda dan orang-orang terkasih.',
  labels:['Nama lengkap','WhatsApp','Email','Tanggal','Waktu','Jumlah tamu','Permintaan khusus (opsional)'],
  placeholders:['Nama Anda','+62 812...','nama@email.com','Alergi, perayaan, atau permintaan khusus Anda'],
  chooseTime:'Pilih waktu',guestOptions:['2 orang','3 orang','4 orang','5 orang','6 orang','7+ orang'],
  submit:'Kirim permintaan reservasi ↗',formNote:'Demo tampilan — sesuaikan nomor WhatsApp sebelum digunakan.',
  chefEyebrow:'Dari tangan sang maestro',chefTitle:'Setiap sajian punya <span class="gold">jiwa.</span>',
  chefText:'Tim dapur kami menjaga resep dan teknik tradisi, lalu menyajikannya dengan keramahan khas Fatih.',
  footerAbout:'Membawa kehangatan dapur Ottoman ke Jakarta, satu hidangan dan satu cerita pada satu waktu.',
  footerHeadings:['Navigasi','Kunjungi kami','Surat dari Fatih'],
  footerLinks:['Beranda','Tentang kami','Menu utama','Galeri','Reservasi'],
  footerAddress:'Jl. Senopati No. 88<br>Jakarta Selatan',footerHours:'Setiap hari<br>11.00 — 23.00 WIB',
  footerNewsletter:'Dapatkan kabar meja baru dan menu musiman.',emailPlaceholder:'Alamat email Anda',
  footerLegal:'Kebijakan Privasi　 Syarat & Ketentuan',footerCopyright:'© 2026 FATİH OTTOMAN DINING. DIBUAT DENGAN RASA.',
  waIntro:'Assalamu’alaikum, saya ingin reservasi meja di Fatih.'
 },
 tr: {
  nav:['Ana Sayfa','Mirasımız','Menü','Galeri','Misafir Yorumları','Masa Rezervasyonu ↗'],
  heroEyebrow:'Osmanlı Saray Mutfağı',heroTitle:'Baharatın uyumu,<br><span class="gold">Fatih’in geleneği.</span>',
  heroText:'Otantik baharatlar, köz ateşi ve İstanbul misafirperverliğiyle hazırlanan Osmanlı saray lezzetleri, Jakarta’nın kalbinde.',
  heroButtons:['Hemen Masa Ayırtın →','Menüyü Keşfedin ↗'],
  proof:['%100 helal sertifikalı','İstanbul’dan usta şef','1845’ten gelen tarifler'],
  features:[['Ateş & Gelenek','Köz ateşinde ağır ağır pişirilir'],['Özenle Seçilmiş Baharatlar','Anadolu’dan getirilir'],['Bakırda Sunum Ritüeli','Kahve ve çay özenle demlenir'],['Gönülden Misafirperverlik','Hatırda kalan sıcak bir karşılama']],
  storyEyebrow:'Miras & Adanmışlık',storyTitle:'Bir masa.<br><span class="gold">Binlerce hikâye.</span>',
  storyP:['Fatih, Osmanlı saray mutfağına duyulan sevgiden doğdu. Tariflerin yalnızca kitaplarda değil, ustaların ellerinde kuşaktan kuşağa aktarıldığı o mutfaktan ilham aldık. Bu ruhu odun ateşi, bakır tencereler ve özenle seçilmiş malzemelerle Jakarta’ya taşıyoruz.','Her ziyaret; kokularla dolu, yavaş ve sıcak bir İstanbul yolculuğudur.'],
  storyLink:'HİKÂYEMİZİ KEŞFEDİN',stats:['Özgün tarifler','Taze malzemeler','Karakterli lezzetler'],
  menuEyebrow:'Fatih’in mutfağından',menuTitle:'Sultanlara layık <span class="gold">ziyafet.</span>',menuIntro:'Sevdiklerinizle birlikte, acele etmeden tadını çıkarmanız için hazırlandı.',
  filters:['Tümü','Kebap','Meze','Ana yemek','Tatlı'],
  dishes:[
   ['Baharatlı','Adana Kebabı','Anadolu baharatları & köz ateşi','İsot ve kırmızı biberle harmanlanmış kuzu kıyması, köz ateşinde pişirilir.'],
   ['Aromatik','Sultan Tabağı','Fatih’in ana ziyafeti','Paylaşmak için ızgara kebap çeşitleri, safranlı pilav ve mevsim sebzeleri.'],
   ['Hafif ve taze','Meze Mozaiği','Sultan sofrasının başlangıcı','Humus, muhammara, ezme ve kuzu yoğurdundan oluşan renkli bir seçki.'],
   ['Aromatik','Kuzu Tandır','Ağır ateşte kuzu tandır','Ayva ve nar sosuyla ağır ağır pişirilmiş yumuşacık kuzu budu.'],
   ['Kat kat tatlı','Baklava Altın','Altın dokunuşlu tatlı','İnce filo hamuru, Gaziantep fıstığı ve çiçek ballı şerbet.'],
   ['Bakır cezve ritüeli','Kahve-i Fatih','Klasik Türk kahvesi','Bakır cezvede ağır ağır pişirilen Türk kahvesi, lokum eşliğinde sunulur.']
  ],
  details:'DETAYLARI GÖR',experienceEyebrow:'Akşam yemeğinden çok daha fazlası',experienceTitle:'Zamanı <span class="gold">hissetmek için bir mekân.</span>',
  experienceText:'Mimari kemerler, pirinç lambaların sıcak ışığı ve hafif müzik eşliğinde Fatih sizi yavaşlamaya ve sofranın keyfini gerçekten yaşamaya davet ediyor.',
  experienceButton:'Mekânı keşfedin →',galleryEyebrow:'Fatih Galerisi',galleryTitle:'Her köşenin bir <span class="gold">hikâyesi var.</span>',
  reviewEyebrow:'Bizi ziyaret edenlerden',reviewTitle:'Fatih hakkında <span class="gold">ne dediler?</span>',
  reviews:[
   'Jakarta’nın ortasında İstanbul’u bulmuş gibiydik. Kuzu tandır inanılmaz yumuşaktı; hizmetleri bizi yeniden gelmek istetti.',
   'Doğum günü kutlaması için harika bir atmosfer. Müzikten ışıklara, yemek sonrası Türk çayına kadar her ayrıntı çok güzeldi.',
   'Mezeler sadece güzel görünmüyor, gerçekten taze ve lezzetli. Fatih artık ailece yemek yemek için favori mekânımız.'
  ],
  bookingEyebrow:'Masanızı ayırtın',bookingTitle:'Bu akşam sizin,<br><span class="gold">masa bizim.</span>',
  bookingIntro:'Size en uygun zamanı seçin. Fatih’in sıcak atmosferini sizin ve sevdikleriniz için hazırlayalım.',
  labels:['Ad Soyad','WhatsApp / Telefon','E-posta','Tarih','Saat','Kişi sayısı','Özel istekler (isteğe bağlı)'],
  placeholders:['Adınız Soyadınız','+62 812...','adiniz@eposta.com','Alerji, kutlama veya özel isteğiniz'],
  chooseTime:'Saat seçin',guestOptions:['2 kişi','3 kişi','4 kişi','5 kişi','6 kişi','7+ kişi'],
  submit:'Rezervasyon talebi gönder ↗',formNote:'Demo sayfası — kullanmadan önce WhatsApp numarasını güncelleyin.',
  chefEyebrow:'Usta şefimizin ellerinden',chefTitle:'Her tabağın bir <span class="gold">ruhu var.</span>',
  chefText:'Mutfağımız, geleneksel tarifleri ve pişirme tekniklerini koruyarak Fatih’e özgü misafirperverlikle sunar.',
  footerAbout:'Osmanlı mutfağının sıcaklığını Jakarta’ya taşıyoruz; her tabakta, her hikâyede.',
  footerHeadings:['Navigasyon','Bizi ziyaret edin','Fatih’ten haberler'],
  footerLinks:['Ana Sayfa','Hakkımızda','Ana Menü','Galeri','Rezervasyon'],
  footerAddress:'Jl. Senopati No. 88<br>Jakarta Selatan',footerHours:'Her gün<br>11.00 — 23.00 WIB',
  footerNewsletter:'Yeni masa haberleri ve mevsimlik menülerden haberdar olun.',emailPlaceholder:'E-posta adresiniz',
  footerLegal:'Gizlilik Politikası　 Şartlar & Koşullar',footerCopyright:'© 2026 FATİH OTTOMAN DINING. LEZZETLE HAZIRLANDI.',
  waIntro:'Merhaba, Fatih için masa rezervasyonu yapmak istiyorum.'
 }
};

function setText(selector,value){const el=document.querySelector(selector);if(el)el.innerHTML=value}
function setLanguage(lang){
 const t=translations[lang];document.documentElement.lang=lang==='tr'?'tr':'id';
 document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
 const navItems=links.querySelectorAll('a');t.nav.forEach((v,i)=>{if(navItems[i])navItems[i].textContent=v});
 setText('.hero .eyebrow',t.heroEyebrow);setText('.hero h1',t.heroTitle);setText('.hero .content>p',t.heroText);
 const heroBtns=document.querySelectorAll('.hero .actions a');t.heroButtons.forEach((v,i)=>{if(heroBtns[i])heroBtns[i].textContent=v});
 document.querySelectorAll('.proof span').forEach((e,i)=>e.textContent=t.proof[i]);
 document.querySelectorAll('.feature').forEach((e,i)=>{e.querySelector('strong').textContent=t.features[i][0];e.querySelector('small').textContent=t.features[i][1]});
 setText('.storycopy .eyebrow',t.storyEyebrow);setText('.storycopy h2',t.storyTitle);
 document.querySelectorAll('.storycopy>p').forEach((e,i)=>e.textContent=t.storyP[i]);
 document.querySelector('.storycopy>.detail').textContent=t.storyLink+' →';
 document.querySelectorAll('.stats small').forEach((e,i)=>e.textContent=t.stats[i]);
 setText('.menu .eyebrow',t.menuEyebrow);setText('.menu h2',t.menuTitle);document.querySelector('.sectionhead p').textContent=t.menuIntro;
 document.querySelectorAll('.filter').forEach((e,i)=>e.textContent=t.filters[i]);
 document.querySelectorAll('.dish').forEach((e,i)=>{const d=t.dishes[i];e.querySelector('.tag').textContent=d[0];e.querySelector('h3').textContent=d[1];e.querySelector('.kicker').textContent=d[2];e.querySelector('p').textContent=d[3];e.querySelector('.detail').innerHTML=t.details+' <span>→</span>'});
 setText('.expcopy .eyebrow',t.experienceEyebrow);setText('.expcopy h2',t.experienceTitle);document.querySelector('.expcopy p').textContent=t.experienceText;document.querySelector('.expcopy .btn').textContent=t.experienceButton;
 setText('.gallery .eyebrow',t.galleryEyebrow);setText('.gallery h2',t.galleryTitle);
 setText('.reviewhead .eyebrow',t.reviewEyebrow);setText('.reviewhead h2',t.reviewTitle);document.querySelectorAll('.quote blockquote').forEach((e,i)=>e.textContent=t.reviews[i]);
 setText('.formpanel .eyebrow',t.bookingEyebrow);setText('.formpanel h2',t.bookingTitle);document.querySelector('.intro').textContent=t.bookingIntro;
 document.querySelectorAll('.formpanel .field label').forEach((e,i)=>e.textContent=t.labels[i]);
 const ph=document.querySelectorAll('#reserve input,#reserve textarea');ph.forEach((e,i)=>{if(t.placeholders[i])e.placeholder=t.placeholders[i]});
 document.querySelector('#time option[value=""]').textContent=t.chooseTime;
 document.querySelectorAll('#guests option').forEach((e,i)=>e.textContent=t.guestOptions[i]);
 document.querySelector('#reserve .btn').textContent=t.submit;document.querySelector('.note').textContent=t.formNote;
 setText('.chefcaption .eyebrow',t.chefEyebrow);setText('.chefcaption h3',t.chefTitle);document.querySelector('.chefcaption p').textContent=t.chefText;
 document.querySelector('.footgrid>div:first-child>p').textContent=t.footerAbout;
 document.querySelectorAll('.footgrid h4').forEach((e,i)=>e.textContent=t.footerHeadings[i]);
 document.querySelectorAll('.footgrid>div:nth-child(2) .footlinks a').forEach((e,i)=>e.textContent=t.footerLinks[i]);
 document.querySelector('.footgrid>div:nth-child(3) .footlinks span:first-child').innerHTML=t.footerAddress;
 document.querySelector('.footgrid>div:nth-child(3) .footlinks span:last-child').innerHTML=t.footerHours;
 document.querySelector('.footgrid>div:nth-child(4)>p').textContent=t.footerNewsletter;
 document.querySelector('.footgrid input').placeholder=t.emailPlaceholder;
 document.querySelector('.bottom span:first-child').textContent=t.footerCopyright;
 document.querySelector('.bottom span:last-child').textContent=t.footerLegal;
 document.querySelector('.chef img').alt=lang==='tr'?'Şef yemek hazırlarken':'Chef sedang menyiapkan hidangan';
 document.querySelector('.gallerygrid').setAttribute('aria-label',lang==='tr'?'Fatih fotoğraf galerisi':'Galeri foto Fatih');
 document.querySelector('.formpanel').setAttribute('aria-label',lang==='tr'?'Masa rezervasyon formu':'Form reservasi meja');
}
document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
setLanguage('tr');

const date=document.getElementById('date');date.min=new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,10);
document.getElementById('reserve').addEventListener('submit',e=>{
 e.preventDefault();const d=new FormData(e.target),lang=document.documentElement.lang;
 const intro=translations[lang].waIntro;
 const msg=`${intro}%0A${lang==='tr'?'Ad Soyad':'Nama'}: ${encodeURIComponent(d.get('name'))}%0A${lang==='tr'?'Telefon':'WhatsApp'}: ${encodeURIComponent(d.get('phone'))}%0A${lang==='tr'?'Tarih':'Tanggal'}: ${encodeURIComponent(d.get('date'))}%0A${lang==='tr'?'Saat':'Waktu'}: ${encodeURIComponent(d.get('time'))}%0A${lang==='tr'?'Kişi sayısı':'Jumlah tamu'}: ${encodeURIComponent(d.get('guests'))}%0A${lang==='tr'?'Not':'Catatan'}: ${encodeURIComponent(d.get('note')||'-')}`;
 window.open('https://wa.me/62215551234?text='+msg,'_blank');
});


/* Mobile testimonial carousel: auto-advance, pause while interacting. */
(()=>{
 const rail=document.querySelector('.reviewgrid');
 if(!rail) return;
 const cards=[...rail.querySelectorAll('.quote')];
 if(cards.length<2) return;
 const mobile=window.matchMedia('(max-width: 600px)');
 let timer=null,index=0,paused=false;
 const step=()=>{
   if(!mobile.matches || paused) return;
   index=(index+1)%cards.length;
   rail.scrollTo({left:cards[index].offsetLeft-rail.offsetLeft,behavior:'smooth'});
 };
 const start=()=>{stop();if(mobile.matches&&!paused)timer=setInterval(step,4500)};
 const stop=()=>{if(timer){clearInterval(timer);timer=null}};
 const pause=()=>{paused=true;stop()};
 const resume=()=>{paused=false;start()};
 rail.addEventListener('pointerenter',pause);
 rail.addEventListener('pointerleave',resume);
 rail.addEventListener('focusin',pause);
 rail.addEventListener('focusout',resume);
 rail.addEventListener('touchstart',pause,{passive:true});
 rail.addEventListener('touchend',()=>{const nearest=cards.reduce((best,c,i)=>Math.abs(c.offsetLeft-rail.offsetLeft-rail.scrollLeft)<Math.abs(cards[best].offsetLeft-rail.offsetLeft-rail.scrollLeft)?i:best,0);index=nearest;setTimeout(resume,1800)},{passive:true});
 if(mobile.addEventListener) mobile.addEventListener('change',()=>{index=0;rail.scrollTo({left:0});start()});
 start();
})();
