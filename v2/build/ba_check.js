const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox']});
  const page = await browser.newPage({viewport:{width:1640,height:960}, reducedMotion:'reduce'});
  await page.goto('file://'+require('path').resolve('out.html')+'#5'); await page.waitForTimeout(800);
  const r = await page.evaluate(()=>{const ba=document.getElementById('dpBA');ba.style.setProperty('--x','2%');
    const out=[];ba.querySelectorAll('.dp-col').forEach((c,i)=>{const last=c.lastElementChild.getBoundingClientRect();const base=c.closest('.pane').querySelector('.dp-base').getBoundingClientRect();out.push(i+':'+Math.round(base.top-last.bottom))});return out});
  await page.screenshot({path:'shots/s05_after.png'}); console.log(r.join(' ')); await browser.close();
})();
