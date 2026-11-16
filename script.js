const TEAM=[{p:"201225320285",c:[0,1]},{p:"201225320419",c:[2,3,4]}]; /* الشعارات والتصاميم، ثم الكتابة والتنسيق والمواقع */
const $=id=>document.getElementById(id);
const I={
logo:'<circle cx="26" cy="32" r="16" fill="currentColor"/><rect x="30" y="16" width="26" height="26" rx="4" fill="currentColor" opacity=".55"/>',
design:'<rect x="10" y="8" width="44" height="48" rx="4" fill="none" stroke="currentColor" stroke-width="4"/><path d="M10 40l14-14 12 12 8-8 10 10" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="42" cy="22" r="5" fill="currentColor" opacity=".55"/>',
write:'<path d="M12 18h40M12 30h40M12 42h26" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M44 52l12-12" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".55"/>',
format:'<rect x="8" y="8" width="20" height="48" rx="3" fill="currentColor"/><rect x="34" y="8" width="22" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="4"/><rect x="34" y="34" width="22" height="22" rx="3" fill="currentColor" opacity=".55"/>',
web:'<rect x="6" y="10" width="52" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="4"/><path d="M6 24h52" stroke="currentColor" stroke-width="4"/><rect x="14" y="32" width="18" height="14" rx="2" fill="currentColor" opacity=".55"/><path d="M38 34h12M38 42h8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>'};
const svg=k=>`<svg viewBox="0 0 64 64" aria-hidden="true">${I[k]}</svg>`;
const D=[
{k:"logo",t:"الشعارات",d:"هوية بصرية كاملة تميّز نشاطك من أول نظرة.",g:[
 ["أنواع الشعارات",["شعار نصي (اسم مكتوب بخط مصمم)","شعار رمزي (أيقونة)","شعار مركّب (رمز مع نص)","شعار حرفي من الحروف الأولى","شعار بالخط العربي","شعار ثنائي اللغة عربي وإنجليزي","إعادة تصميم شعار قديم"]],
 ["الهوية البصرية",["لوحة ألوان الهوية","اختيار خطوط الهوية","دليل استخدام الشعار (Brand Guidelines)","نسخ أفقية وعمودية ومصغرة","نسخ بخلفية فاتحة وداكنة وأحادية اللون","أنماط وعناصر مساعدة للهوية"]],
 ["تطبيقات الهوية",["كارت شخصي","ورق رسمي وظرف","ختم وتوقيع بريدي","تغليف وملصقات","صورة البروفايل وغلاف الصفحات"]],
 ["ملفات التسليم",["ملف فيكتور (AI وSVG)","PNG بخلفية شفافة","PDF جاهز للطباعة","أيقونة التطبيق (Favicon)"]]]},
{k:"design",t:"التصاميم",d:"تصاميم للنشر الرقمي والطباعة بنفس الطابع البصري.",g:[
 ["السوشيال ميديا",["بوستات","ستوريز وأغلفة ريلز","أغلفة فيسبوك ويوتيوب ولينكدإن","أيقونات الهايلايتس","قوالب قابلة للتعديل","حملة إعلانية متكاملة"]],
 ["المطبوعات",["بروشور وفلاير","بوستر ولوحات إعلانية","منيو مطاعم وكافيهات","رول أب وبنرات ولافتات","عبوات وملصقات المنتجات","شهادات ودعوات وتذاكر"]],
 ["تصاميم أخرى",["إنفوجرافيك","غلاف كتاب أو مجلة","ملف تعريفي للشركة (Company Profile)","تصميم عرض بوربوينت","واجهات تطبيقات ومواقع (UI)","مونتاج بسيط وموشن جرافيك"]]]},
{k:"write",t:"الكتابة",d:"نصوص واضحة ومقنعة بأسلوب يناسب جمهورك.",g:[
 ["المحتوى التسويقي",["نصوص إعلانية","كابشن ومحتوى سوشيال","شعار ترويجي (Tagline)","وصف منتجات","نشرات بريدية ورسائل ترويجية","سيناريو فيديو قصير"]],
 ["محتوى المواقع",["نصوص الصفحة الرئيسية","صفحة من نحن","مقالات ومدونات","كتابة متوافقة مع محركات البحث (SEO)","أسئلة شائعة وشروط وأحكام"]],
 ["الكتابة المهنية والشخصية",["سيرة ذاتية (CV)","خطاب تقديم","بيانات صحفية","تدقيق لغوي وتحرير","ترجمة عربي وإنجليزي","إعادة صياغة نصوص"]]]},
{k:"format",t:"التنسيق",d:"ملفات مرتبة ومتناسقة جاهزة للتسليم والنشر.",g:[
 ["المستندات",["تنسيق تقارير وأبحاث","رسائل جامعية (ترقيم وفهارس ومراجع)","عقود ومستندات رسمية","تحويل PDF إلى Word قابل للتعديل","تنسيق سيرة ذاتية"]],
 ["العروض والجداول",["تنسيق عروض PowerPoint","تنسيق جداول Excel","قوالب Word وPowerPoint جاهزة","توحيد الخطوط والألوان بين الملفات"]],
 ["الكتب والنشر",["تنسيق كتاب للطباعة","كتاب إلكتروني (ePub)","صفحات الغلاف والفهرس","إخراج جاهز للنشر على أمازون ونيل وفرات"]]]},
{k:"web",t:"المواقع",d:"مواقع سريعة وجذابة تعمل على كل الأجهزة.",g:[
 ["أنواع المواقع",["صفحة هبوط (Landing Page)","موقع تعريفي لنشاطك","موقع معرض أعمال (Portfolio)","موقع شخصي","مدونة","متجر إلكتروني بسيط"]],
 ["المزايا",["متجاوب مع الموبايل والتابلت","يدعم العربية والإنجليزية","فورم تواصل وزر واتساب","تهيئة محركات البحث (SEO)","سرعة تحميل عالية","وضع داكن وفاتح","معرض صور وفيديو","خريطة الموقع وروابط السوشيال"]],
 ["بعد التسليم",["ربط الدومين والاستضافة","تدريب على تعديل المحتوى","صيانة ودعم فني","تعديلات شهرية"]]]}];
const sel=new Set();let cur=0;
const total=D.reduce((a,c)=>a+c.g.reduce((b,g)=>b+g[1].length,0),0);
$("hp").textContent=`${total} خدمة في ${D.length} مجالات. اختر ما يناسبك وأرسل طلبك في دقيقة.`;
$("tabs").innerHTML=D.map((c,i)=>`<button class="tab" data-i="${i}" aria-pressed="${i===0}">${svg(c.k)}${c.t}</button>`).join("");
const key=(i,j,n)=>`${i}|${j}|${n}`;
function panel(){const c=D[cur];
 $("panel").innerHTML=`<div class="top"><h2>${c.t}</h2><button class="all" id="all">تحديد الكل</button></div><p>${c.d}</p>`+
 c.g.map((g,j)=>`<div class="grp"><h3>${g[0]}</h3><div class="fs">${g[1].map((x,n)=>`<label class="f"><input type="checkbox" data-k="${key(cur,j,n)}" ${sel.has(key(cur,j,n))?"checked":""}>${x}</label>`).join("")}</div></div>`).join("");
 document.querySelectorAll(".tab").forEach((t,i)=>t.setAttribute("aria-pressed",i===cur))}
function upd(){$("cnt").textContent=sel.size?`${sel.size} خدمة مختارة`:"";$("bar").classList.toggle("on",sel.size>0);
 const by=D.map((c,i)=>[c.t,[...sel].filter(k=>+k.split("|")[0]===i).sort().map(k=>{const[a,j,n]=k.split("|");return D[a].g[j][1][n]})]).filter(x=>x[1].length);
 $("sum").innerHTML=by.length?by.map(x=>`<li><b>${x[0]}:</b> ${x[1].join("، ")}</li>`).join(""):'<li class="empty">لم تختر خدمات بعد. اختر من الأقسام أعلاه أو اكتب طلبك في التفاصيل.</li>';return by}
$("tabs").addEventListener("click",e=>{const t=e.target.closest(".tab");if(t){cur=+t.dataset.i;panel()}});
$("panel").addEventListener("change",e=>{const k=e.target.dataset.k;if(!k)return;e.target.checked?sel.add(k):sel.delete(k);upd()});
$("panel").addEventListener("click",e=>{if(e.target.id!=="all")return;const boxes=[...document.querySelectorAll("#panel input")],all=boxes.every(b=>b.checked);
 boxes.forEach(b=>{b.checked=!all;all?sel.delete(b.dataset.k):sel.add(b.dataset.k)});upd()});
panel();upd();
function send(ti){const by=upd().filter(x=>TEAM[ti].c.includes(D.findIndex(c=>c.t===x[0])));
 const t=`مرحبًا، أنا ${$("n").value.trim()}.\n`+(by.length?"الخدمات المطلوبة:\n"+by.map(x=>`• ${x[0]}: ${x[1].join("، ")}`).join("\n")+"\n":"")+$("d").value.trim();
 const a=document.createElement("a");a.href=`https://wa.me/${TEAM[ti].p}?text=${encodeURIComponent(t)}`;a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove()}
document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{if(!$("n").value.trim()){$("n").focus();$("f").reportValidity();return}send(+b.dataset.t)});$("f").addEventListener("submit",e=>e.preventDefault());
