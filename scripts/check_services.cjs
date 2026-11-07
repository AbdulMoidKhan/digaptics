const https = require('https');

const paths = [
  '/our-service/software-development/',
  '/our-service/web-development/',
  '/our-service/app-development/',
  '/our-service/digital-marketing/',
  '/bpo-back-office/',
  '/bpo-customer-service/',
  '/photography-corporate-photography/',
  '/design-print-business-cards/',
  '/ecommerce-shopify-store-development/'
];

async function check(p) {
  return new Promise((resolve) => {
    https.get('https://digaptics.io' + p, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        const h1Match = d.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        const title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';
        const metaMatch = d.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/i);
        const meta = metaMatch ? metaMatch[1] : '';
        resolve({ path: p, title, meta });
      });
    }).on('error', () => resolve({ path: p, error: true }));
  });
}

async function run() {
  for (const p of paths) {
    const res = await check(p);
    console.log(res);
  }
}
run();

