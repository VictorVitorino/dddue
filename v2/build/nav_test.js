const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox','--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
  const page = await browser.newPage({viewport:{width:1640,height:960}});
  const errors=[]; page.on('pageerror',e=>errors.push(String(e))); page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  await page.goto('file://'+require('path').resolve('out.html')); await page.waitForTimeout(1500);
  const act=()=>page.evaluate(()=>document.querySelector('.slide.active').id);
  const res=[];
  // walk all slides with keyboard (chapter cards may appear)
  for(let i=0;i<20;i++){await page.keyboard.press('ArrowRight');await page.waitForTimeout(1300);const chap=await page.evaluate(()=>document.getElementById('chap').classList.contains('on'));if(chap){await page.keyboard.press('ArrowRight');await page.waitForTimeout(1300)}res.push(await act())}
  console.log('walk:',[...new Set(res)].join(' > '));
  // data-goto from system map
  await page.evaluate(()=>go([...document.querySelectorAll('.slide')].findIndex(s=>s.id==='sistema'),true));await page.waitForTimeout(600);
  await page.click('#sistema .sy-t[data-goto="prod-dayone"]');await page.waitForTimeout(1500);
  if(await page.evaluate(()=>document.getElementById('chap').classList.contains('on'))){await page.keyboard.press('ArrowRight');await page.waitForTimeout(1200)}
  console.log('goto from sistema ->',await act());
  // risks panel chip
  await page.evaluate(()=>go([...document.querySelectorAll('.slide')].findIndex(s=>s.id==='riscos'),true));await page.waitForTimeout(800);
  await page.click('#riscos .r-node.new');await page.waitForTimeout(300);
  await page.click('#rpP .r-pchip');await page.waitForTimeout(1500);
  if(await page.evaluate(()=>document.getElementById('chap').classList.contains('on'))){await page.keyboard.press('ArrowRight');await page.waitForTimeout(1200)}
  console.log('goto from riscos ->',await act());
  // results journey link
  await page.evaluate(()=>go([...document.querySelectorAll('.slide')].findIndex(s=>s.id==='resultados'),true));await page.waitForTimeout(800);
  await page.click('#rsStack .sc.front [data-goto="prod-office"]').catch(e=>console.log('no office link on front'));
  await page.click('#rsStack .sc.front [data-goto]');await page.waitForTimeout(1500);
  console.log('goto from resultados ->',await act());
  // stack rotation
  await page.evaluate(()=>go([...document.querySelectorAll('.slide')].findIndex(s=>s.id==='resultados'),true));await page.waitForTimeout(800);
  await page.click('#rsTabs button[data-i="2"]');await page.waitForTimeout(900);
  console.log('front persona:',await page.evaluate(()=>document.querySelector('#rsStack .sc.front b').textContent));
  // panels
  await page.keyboard.press('g');await page.waitForTimeout(400);console.log('index open:',await page.evaluate(()=>getComputedStyle(document.getElementById('idxP')).display!=='none'&&document.getElementById('idxP').className));
  await page.keyboard.press('Escape');await page.keyboard.press('i');await page.waitForTimeout(400);console.log('info:',await page.evaluate(()=>document.getElementById('infoP').className+' | '+document.getElementById('infoP').innerText.slice(0,120).replace(/\n/g,' / ')));
  console.log('errors:',JSON.stringify(errors));await browser.close();
})();
