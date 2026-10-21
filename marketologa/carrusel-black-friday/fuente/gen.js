const fs=require('fs'); const path=require('path');
const {chromium}=require('/opt/node22/lib/node_modules/playwright');
const D=__dirname, F='/tmp/claude-0/gfonts/ofl/';
const cats=JSON.parse(fs.readFileSync(D+'/data.json','utf8'));
// degradados entre tonos cercanos de la marca
const PAL=[
 {a:'#FF6BAA',b:'#FFA3CB',ink:'#fff',deep:'#E2448A'}, // moda · rosa
 {a:'#8B5CFF',b:'#BCA0FF',ink:'#fff',deep:'#6D3FF0'}, // belleza · lila
 {a:'#FFB23B',b:'#FFD93B',ink:'#1B1B22',deep:'#E08A00'}, // gastro · amarillo
 {a:'#8FDB3A',b:'#C6FF3A',ink:'#1B1B22',deep:'#4E9A10'}, // hogar · lima
 {a:'#2F7BFF',b:'#00C9FF',ink:'#fff',deep:'#1D5FE0'}, // tech · azul
 {a:'#5B5CFF',b:'#8B5CFF',ink:'#fff',deep:'#4A3FE0'}, // b2b · índigo
 {a:'#B5EE3A',b:'#FFE14D',ink:'#1B1B22',deep:'#6E9A00'}, // educación · lima-amarillo
 {a:'#00B4F0',b:'#6FE3FF',ink:'#1B1B22',deep:'#0089C7'}, // viajes · celeste
 {a:'#FF6BAA',b:'#FF9A8B',ink:'#fff',deep:'#E2448A'}, // cualquier negocio · rosa-coral
];
const slides=[];
cats.forEach((c,ci)=>{
  const n=c.items.length, half=Math.ceil(n/2);
  [c.items.slice(0,half),c.items.slice(half)].forEach((items,pi)=>slides.push({c,ci,pi,items}));
});
const TOTAL=slides.length+2;
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const css=`
@font-face{font-family:P;src:url(file://${F}poppins/Poppins-Medium.ttf);font-weight:500}
@font-face{font-family:P;src:url(file://${F}poppins/Poppins-SemiBold.ttf);font-weight:600}
@font-face{font-family:P;src:url(file://${F}poppins/Poppins-Bold.ttf);font-weight:700}
@font-face{font-family:P;src:url(file://${F}poppins/Poppins-ExtraBold.ttf);font-weight:800}
@font-face{font-family:P;src:url(file://${F}poppins/Poppins-Black.ttf);font-weight:900}
@font-face{font-family:S;src:url(file://${F}pacifico/Pacifico-Regular.ttf)}
@font-face{font-family:H;src:url("file://${F}caveat/Caveat[wght].ttf");font-weight:400 700}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;font-family:P,'Noto Color Emoji';color:#1B1B22;-webkit-font-smoothing:antialiased}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;background:#FCFCFD}
.grid{position:absolute;inset:0;width:100%;height:100%}
.blob{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55}
.orb{position:absolute;border-radius:50%;background:radial-gradient(circle at 32% 28%,#fff 0 12%,rgba(255,255,255,.35) 30%,transparent 62%),linear-gradient(140deg,var(--b),var(--a));box-shadow:inset -10px -16px 30px rgba(0,0,0,.12),0 20px 40px -12px var(--a);opacity:.95}
.glass{background:linear-gradient(150deg,rgba(255,255,255,.78),rgba(255,255,255,.48));backdrop-filter:blur(26px) saturate(170%);-webkit-backdrop-filter:blur(26px) saturate(170%);border:1.5px solid rgba(255,255,255,.95);box-shadow:0 1px 0 rgba(255,255,255,.9) inset,0 24px 60px -20px rgba(40,30,80,.22),0 2px 6px rgba(40,30,80,.05)}
.top{position:absolute;left:44px;right:44px;top:40px;height:84px;border-radius:42px;display:flex;align-items:center;padding:0 14px 0 12px;gap:14px}
.av{width:60px;height:60px;border-radius:50%;border:2.5px solid #1B1B22;overflow:hidden}.av img{width:100%;height:100%}
.who b{font-size:24px;font-weight:700;display:flex;align-items:center;gap:7px}.who small{font-size:14px;color:#6b6b78;font-weight:500}
.vf{width:20px;height:20px;border-radius:50%;background:#3797F0;display:inline-grid;place-items:center;color:#fff;font-size:12px}
.pg{margin-left:auto;font-weight:700;font-size:18px;padding:12px 20px;border-radius:30px;background:linear-gradient(120deg,var(--a),var(--b));color:var(--ink)}
.chip{font-weight:600;font-size:16px;padding:10px 18px;border-radius:30px;color:#1B1B22;background:rgba(255,255,255,.6);border:1px solid rgba(27,27,34,.08)}
.hero{position:absolute;left:44px;right:44px;top:150px;height:170px;display:flex;align-items:center;gap:26px}
.tile{width:150px;height:150px;border-radius:40px;display:grid;place-items:center;font-size:88px;position:relative;flex:none}
.tile:before{content:'';position:absolute;inset:-2px;border-radius:42px;padding:3px;background:linear-gradient(140deg,var(--a),var(--b));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
.kick{font-size:19px;font-weight:600;color:var(--deep);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;display:flex;gap:10px;align-items:center}
.kick i{font-style:normal;padding:4px 12px;border-radius:20px;background:linear-gradient(120deg,var(--a),var(--b));color:var(--ink);letter-spacing:.02em}
h1{max-width:600px;font-size:50px;line-height:1.04;font-weight:800;letter-spacing:-.02em}
h1 span{background:linear-gradient(100deg,var(--deep),var(--a) 60%,var(--b));-webkit-background-clip:text;color:transparent}
.bignum{position:absolute;right:26px;top:132px;font-size:200px;font-weight:900;letter-spacing:-.06em;line-height:1;color:transparent;-webkit-text-stroke:3px var(--a);opacity:.28}
.list{position:absolute;left:44px;right:44px;top:344px;bottom:122px;border-radius:38px;padding:18px 22px;display:flex;flex-direction:column;justify-content:space-between}
.row{display:flex;align-items:center;gap:14px;padding:calc(var(--fs)*.26) 10px;border-radius:18px}
.row:nth-child(odd){background:rgba(255,255,255,.55)}
.num{flex:none;min-width:62px;height:calc(var(--fs)*1.55);border-radius:14px;display:grid;place-items:center;font-weight:800;font-size:calc(var(--fs)*.86);color:var(--ink);background:linear-gradient(135deg,var(--a),var(--b));box-shadow:0 6px 14px -6px var(--a),inset 0 1px 0 rgba(255,255,255,.5)}
.emo{flex:none;font-size:calc(var(--fs)*1.45);width:calc(var(--fs)*1.8);text-align:center;font-family:'Noto Color Emoji';filter:drop-shadow(0 4px 5px rgba(0,0,0,.14))}
.row p{font-size:var(--fs);line-height:1.28;font-weight:500;color:#26262f}
.foot{position:absolute;left:44px;right:44px;bottom:38px;height:64px;display:flex;align-items:center;gap:12px}
.pill{height:64px;border-radius:32px;padding:0 24px;display:flex;align-items:center;gap:10px;font-weight:600;font-size:19px}
.swipe{margin-left:auto;background:#1B1B22;color:#fff;border:none}
.swipe em{font-style:normal;display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;background:linear-gradient(120deg,var(--a),var(--b));color:var(--ink);font-size:20px}
.sig{font-size:15px;font-weight:600;color:#6b6b78;letter-spacing:.04em}
.stk{position:absolute;font-family:'Noto Color Emoji';filter:drop-shadow(0 10px 12px rgba(0,0,0,.18))}
`;
function shell(body,vars){return `<!doctype html><html><head><meta charset=utf-8><style>${css}</style></head><body><div class=slide style="${vars}">${body}</div></body></html>`}
function bg(fish,p){
  return `<img class=grid src="file://${D}/${fish?'grid_fish':'grid'}.png">
  <div class=blob style="width:520px;height:520px;left:-140px;top:${fish?260:120}px;background:${p.a}"></div>
  <div class=blob style="width:600px;height:600px;right:-200px;bottom:${fish?-120:80}px;background:${p.b}"></div>
  <div class=blob style="width:380px;height:380px;left:420px;top:${fish?820:600}px;background:${p.a};opacity:.35"></div>`;
}
function top(i,p){return `<div class="glass top"><div class=av><img src="file://${D}/logo.png"></div><div class=who><b>marketologa <span class=vf>✓</span></b><small>Especialista en IA | Empresaria | Marketera</small></div><span class=chip style="margin-left:auto">🖤 300 ideas · Black Friday</span><span class=pg style="margin-left:0">${i}/${TOTAL}</span></div>`}
function slideHTML(s,idx){
  const p=PAL[s.ci], fish=idx%2==1;
  const vars=`--a:${p.a};--b:${p.b};--ink:${p.ink};--deep:${p.deep}`;
  const words=s.c.name.split(' '); const last=words.pop();
  const first=s.items[0].n, lastn=s.items[s.items.length-1].n;
  const rows=s.items.map(it=>`<div class=row><span class=num>${String(it.n).padStart(2,'0')}</span><span class=emo>${it.e}</span><p>${esc(it.t)}</p></div>`).join('');
  const total=s.c.items.length;
  const orbs=fish?`<div class=orb style="width:90px;height:90px;right:70px;top:300px"></div><div class=orb style="width:46px;height:46px;left:30px;bottom:150px"></div>`
                 :`<div class=orb style="width:70px;height:70px;left:24px;top:318px"></div><div class=orb style="width:54px;height:54px;right:38px;bottom:140px"></div>`;
  return shell(`${bg(fish,p)}<div class=bignum>${String(s.ci+1).padStart(2,'0')}</div>
   ${top(idx+2,p)}
   <div class=hero><div class="glass tile">${s.c.emoji}</div><div><div class=kick><i>Categoría ${String(s.ci+1).padStart(2,'0')}</i> ideas ${first}–${lastn} · ${s.pi?'parte 2':'parte 1'}</div><h1>${words.join(' ')} <span>${last}</span></h1></div></div>
   <div class="glass list" style="--fs:24px">${rows}</div>
   <div class=foot><div class="glass pill">📌 Guárdalo para tu campaña</div><span class=sig>MARKETOLOGA · IMPULSANDO IDEAS</span><div class="pill swipe">Desliza <em>→</em></div></div>`,vars);
}
function ctaHTML(){
  const p={a:'#FF6BAA',b:'#B99BFF',ink:'#fff',deep:'#C2479A'};
  const vars=`--a:${p.a};--b:${p.b};--ink:${p.ink};--deep:${p.deep}`;
  const cards=[['📌','Guárdalo','para planear tu Black Friday con calma.'],['📤','Compártelo','con esa emprendedora que lo necesita.'],['💬','Coméntame','cuál es tu categoría y qué idea usarás primero.'],['✨','Sígueme','para más ideas, prompts y marketing con IA.']];
  return shell(`${bg(true,p)}<div class=orb style="width:110px;height:110px;right:70px;top:190px"></div><div class=orb style="width:60px;height:60px;left:60px;top:560px"></div>
  ${top(TOTAL,p)}
  <div style="position:absolute;left:60px;right:60px;top:200px;text-align:center">
   <div style="font-family:H;font-weight:700;font-size:58px;color:${p.a}">¡y ahora sí!</div>
   <h1 style="font-size:84px;line-height:1;margin-top:8px">¿Cuál vas a<br><span>probar primero?</span></h1>
   <p style="font-size:26px;font-weight:500;color:#555562;margin-top:22px">300 ideas, 9 categorías, cero bloqueos creativos 💗</p>
  </div>
  <div style="position:absolute;left:60px;right:60px;top:610px;display:grid;grid-template-columns:1fr 1fr;gap:22px">
   ${cards.map(c=>`<div class=glass style="border-radius:34px;padding:30px 28px;height:250px"><div style="font-size:64px;font-family:'Noto Color Emoji';filter:drop-shadow(0 8px 10px rgba(0,0,0,.15))">${c[0]}</div><div style="font-size:34px;font-weight:800;margin-top:10px">${c[1]}</div><div style="font-size:21px;font-weight:500;color:#555562;margin-top:4px;line-height:1.3">${c[2]}</div></div>`).join('')}
  </div>
  <div class=glass style="position:absolute;left:180px;right:180px;bottom:60px;height:96px;border-radius:48px;display:flex;align-items:center;gap:16px;padding:0 18px">
   <div class=av style="width:64px;height:64px"><img src="file://${D}/logo.png"></div>
   <div><div style="font-weight:800;font-size:26px">marketologa <span class=vf>✓</span></div><div style="font-size:15px;color:#6b6b78;font-weight:600;letter-spacing:.05em">IMPULSANDO IDEAS, CREANDO IMPACTO 💙</div></div>
   <div class="pg" style="margin-left:auto;background:#3797F0;color:#fff">Seguir</div>
  </div>`,vars);
}
(async()=>{
  const out=process.argv[2]; fs.mkdirSync(out,{recursive:true});
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'}).catch(()=>chromium.launch());
  const pg=await b.newPage({viewport:{width:1080,height:1350}});
  fs.copyFileSync(D+'/cover.png',path.join(out,'01-portada.png'));
  const only=process.argv[3]?process.argv[3].split(',').map(Number):null;
  const jobs=slides.map((s,i)=>[i+2,()=>slideHTML(s,i)]).concat([[TOTAL,ctaHTML]]);
  for(const [n,fn] of jobs){
    if(only&&!only.includes(n))continue;
    fs.writeFileSync(D+'/tmp.html',fn()); await pg.goto('file://'+D+'/tmp.html'); await pg.evaluate(()=>document.fonts.ready);
    // ajustar tamaño de letra para que la lista quepa
    await pg.evaluate(()=>{const l=document.querySelector('.list'); if(!l)return; let fs=26; l.style.setProperty('--fs',fs+'px');
      l.style.justifyContent='flex-start'; while(l.scrollHeight>l.clientHeight+1&&fs>15){fs-=.5;l.style.setProperty('--fs',fs+'px')} l.style.justifyContent='space-between';});
    await pg.screenshot({path:path.join(out,String(n).padStart(2,'0')+'.png')});
  }
  await b.close();
})();
