const fs=require('fs');const {chromium}=require('/opt/node22/lib/node_modules/playwright');
const D=__dirname,F='/tmp/claude-0/gfonts/ofl/';
const cats=JSON.parse(fs.readFileSync(D+'/data.json','utf8'));
const PAL=[['#FF6BAA','#FFA3CB'],['#8B5CFF','#BCA0FF'],['#FFB23B','#FFD93B'],['#8FDB3A','#C6FF3A'],['#2F7BFF','#00C9FF'],['#5B5CFF','#8B5CFF'],['#B5EE3A','#FFE14D'],['#00B4F0','#6FE3FF'],['#FF6BAA','#FF9A8B']];
const SHORT=['Moda y\naccesorios','Belleza y\ncosmética','Gastronomía\ny bebidas','Hogar y\ndecoración','Tecnología\ny gadgets','Servicios\nB2B','Educación y\ncursos','Viajes y\nexperiencias','Cualquier\nnegocio'];
const cx=540,cy=790,R=372;
let lines='',nodes='',start=2;
cats.forEach((c,i)=>{const a=-Math.PI/2+i*2*Math.PI/9, x=cx+R*Math.cos(a), y=cy+R*Math.sin(a);
 const [A,B]=PAL[i]; const n=c.items.length; const sl=`láminas ${start}–${start+1}`; start+=2;
 lines+=`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#1B1B22" stroke-width="1.6"/><circle cx="${x}" cy="${y}" r="104" fill="none" stroke="${A}" stroke-width="1.6" stroke-dasharray="6 7" opacity=".9"/>`;
 nodes+=`<div class="node glass" style="left:${x-86}px;top:${y-86}px;--a:${A};--b:${B}"><div class=e>${c.emoji}</div><b>${SHORT[i].replace('\n','<br>')}</b><i>${n} ideas</i><small>${sl}</small></div>`;});
const html=`<!doctype html><meta charset=utf-8><style>
@font-face{font-family:P;src:url(file://${F}poppins/Poppins-Medium.ttf);font-weight:500}
@font-face{font-family:P;src:url(file://${F}poppins/Poppins-Bold.ttf);font-weight:700}
@font-face{font-family:P;src:url(file://${F}poppins/Poppins-ExtraBold.ttf);font-weight:800}
@font-face{font-family:H;src:url("file://${F}caveat/Caveat[wght].ttf");font-weight:400 700}
*{margin:0;padding:0;box-sizing:border-box}body{width:1080px;height:1350px;font-family:P,'Noto Color Emoji';color:#1B1B22}
.s{position:relative;width:1080px;height:1350px;overflow:hidden;background:#FCFCFD}
.blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.45}
.glass{background:linear-gradient(150deg,rgba(255,255,255,.85),rgba(255,255,255,.55));backdrop-filter:blur(22px) saturate(170%);border:1.5px solid rgba(255,255,255,.95);box-shadow:0 20px 50px -18px rgba(40,30,80,.25)}
.node{position:absolute;width:172px;height:172px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.node:before{content:'';position:absolute;inset:-3px;border-radius:50%;padding:4px;background:linear-gradient(140deg,var(--a),var(--b));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor}
.node .e{font-size:40px;line-height:1;filter:drop-shadow(0 5px 6px rgba(0,0,0,.15))}
.node b{font-size:15px;line-height:1.15;font-weight:700;margin-top:6px}
.node i{font-style:normal;font-size:12.5px;font-weight:700;margin-top:6px;padding:3px 10px;border-radius:12px;background:linear-gradient(120deg,var(--a),var(--b));color:#1B1B22}
.node small{font-size:11px;color:#6b6b78;font-weight:500;margin-top:3px}
.core{position:absolute;left:${cx-128}px;top:${cy-128}px;width:256px;height:256px;border-radius:50%;background:#1B1B22;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-shadow:0 0 0 10px #FCFCFD,0 0 0 13px #1B1B22,0 30px 60px -20px rgba(0,0,0,.5)}
.core b{font-size:64px;font-weight:800;line-height:1}.core span{font-size:20px;font-weight:700;letter-spacing:.08em}.core em{font-family:H;font-style:normal;font-weight:700;font-size:34px;color:#FF8FC4;margin-top:2px}
.hd{position:absolute;top:56px;left:0;right:0;text-align:center}
.kick{font-size:17px;font-weight:700;letter-spacing:.22em;color:#E2448A;display:flex;gap:18px;justify-content:center;align-items:center}.kick:before,.kick:after{content:'';width:44px;height:1.5px;background:#E2448A}
h1{font-size:62px;font-weight:800;letter-spacing:-.02em;margin-top:14px;line-height:1.05}
h1 span{background:linear-gradient(100deg,#E2448A,#FF6BAA 55%,#BCA0FF);-webkit-background-clip:text;color:transparent}
.sub{font-family:H;font-weight:700;font-size:34px;color:#555562;margin-top:6px}
.ft{position:absolute;bottom:40px;left:0;right:0;text-align:center;font-size:15px;font-weight:700;letter-spacing:.2em;color:#9a9aa6}
.corner{position:absolute;width:34px;height:34px;border-color:#1B1B22;border-style:solid}
</style><div class=s>
<div class=blob style="width:520px;height:520px;left:-160px;top:420px;background:#FF8FC4"></div>
<div class=blob style="width:560px;height:560px;right:-180px;top:820px;background:#BCA0FF"></div>
<div class=corner style="left:40px;top:40px;border-width:3px 0 0 3px"></div><div class=corner style="right:40px;top:40px;border-width:3px 3px 0 0"></div>
<div class=corner style="left:40px;bottom:40px;border-width:0 0 3px 3px"></div><div class=corner style="right:40px;bottom:40px;border-width:0 3px 3px 0"></div>
<svg width=1080 height=1350 style="position:absolute;inset:0">
<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#1B1B22" stroke-width="1.4" stroke-dasharray="9 9" opacity=".55"/>
<circle cx="${cx}" cy="${cy}" r="225" fill="none" stroke="#1B1B22" stroke-width="1.2" opacity=".3"/>
<circle cx="-60" cy="250" r="300" fill="none" stroke="#1B1B22" stroke-width="1.2" stroke-dasharray="9 9" opacity=".3"/>
<circle cx="1150" cy="1320" r="300" fill="none" stroke="#1B1B22" stroke-width="1.2" stroke-dasharray="9 9" opacity=".3"/>
${lines}</svg>
<div class=hd><div class=kick>GUARDA · PLANEA · VENDE</div><h1>El mapa de las<br><span>300 ideas</span></h1><div class=sub>9 categorías, elige la tuya y desliza →</div></div>
<div class=core><b>300</b><span>IDEAS PARA</span><em>Black Friday</em></div>
${nodes}
<div class=ft>MARKETOLOGA · IMPULSANDO IDEAS, CREANDO IMPACTO</div></div>`;
(async()=>{fs.writeFileSync(D+'/mapa.html',html);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
await p.goto('file://'+D+'/mapa.html');await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:D+'/mapa.png'});await b.close()})();
