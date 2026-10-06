const { chromium } = require('playwright');
(async () => {
  const file = process.argv[2]; const idx = (process.argv[3]||'1').split(',').map(Number); const outdir = process.argv[4]||'shots';
  require('fs').mkdirSync(outdir,{recursive:true});
  const browser = await chromium.launch({executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox','--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
  const page = await browser.newPage({viewport:{width:1640,height:960}, reducedMotion:(process.env.RM||'reduce')});
  const errors=[]; page.on('pageerror',e=>errors.push(String(e))); page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  await page.goto('file://'+require('path').resolve(file)+'#'+idx[0], {waitUntil:'load'}); await page.waitForTimeout(+(process.env.WAIT||900));
  for (const i of idx){ await page.evaluate(k=>go(k-1,true), i); await page.waitForTimeout(+(process.env.WAIT||500));
    // overflow check inside .body
    const ov = await page.evaluate(()=>{const s=document.querySelector('.slide.active');const r=[];s.querySelectorAll('.body, .body *').forEach(el=>{if(el.scrollHeight>el.clientHeight+2&&getComputedStyle(el).overflow!=='visible'&&el.clientHeight>0)r.push(el.className+'|'+el.scrollHeight+'>'+el.clientHeight)});const b=s.querySelector('.body');let out=[];if(b){const br=b.getBoundingClientRect();b.querySelectorAll('*').forEach(el=>{const er=el.getBoundingClientRect();if(er.width>0&&er.height>0&&(er.bottom>br.bottom+1||er.right>br.right+1))out.push((el.className||el.tagName)+'|b'+Math.round(er.bottom-br.bottom)+'|r'+Math.round(er.right-br.right))})}return {clipped:r.slice(0,8),outside:out.slice(0,12)}});
    await page.screenshot({path:`${outdir}/s${String(i).padStart(2,'0')}.png`});
    console.log('slide',i,JSON.stringify(ov));
  }
  console.log('errors:',JSON.stringify(errors)); await browser.close();
})();
