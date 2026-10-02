const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  await page.goto('http://localhost:5173/discover/salt-mining', { waitUntil: 'networkidle' });
  await page.waitForSelector('text=Traditional Salt Mining');
  await page.screenshot({ path: 'C:/Users/USER/AppData/Local/Temp/claude/c--Users-USER-Desktop-Haven-Hub/fd4fe0d6-36a2-43fe-bfcd-92e7580ca93c/scratchpad/salt-mining-full.png', fullPage: true });
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  console.log('done', errors);
  await browser.close();
})();
