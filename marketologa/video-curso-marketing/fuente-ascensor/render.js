const {chromium}=require('/opt/node22/lib/node_modules/playwright');const fs=require('fs');
(async()=>{const [a,b,out]=[+process.argv[2],+process.argv[3],process.argv[4]];fs.mkdirSync(out,{recursive:true});
const br=await chromium.launch();const p=await br.newPage({viewport:{width:1080,height:1350}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file:///tmp/claude-0/v2/index.html');await p.evaluate(()=>document.fonts.ready);
const t0=Date.now();
for(let f=a;f<b;f++){await p.evaluate(t=>seek(t),f/30);await p.screenshot({path:`${out}/${String(f).padStart(5,'0')}.jpg`,type:'jpeg',quality:92})}
console.log('done',a,b,(Date.now()-t0)/(b-a),'ms/frame');await br.close()})();
