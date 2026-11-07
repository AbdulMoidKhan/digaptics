const https = require('https');
const fs = require('fs');

async function fetchSitemap(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const sitemapIndex = await fetchSitemap('https://digaptics.io/sitemap_index.xml');
  if (sitemapIndex) {
    fs.writeFileSync('remote_sitemap_index.xml', sitemapIndex);
    console.log('Got sitemap index, length:', sitemapIndex.length);
    // Find sub sitemaps
    const subMaps = sitemapIndex.match(/https?:\/\/[^\s<>"]+\.xml/g) || [];
    console.log('Sub sitemaps:', subMaps);
    
    const pageUrls = [];
    for (const sm of subMaps) {
      if (sm.includes('page') || sm.includes('post') || sm.includes('service')) {
        const smData = await fetchSitemap(sm);
        if (smData) {
          const locs = smData.match(/<loc>(https?:\/\/[^<]+)<\/loc>/g) || [];
          locs.forEach(l => {
            const u = l.replace('<loc>', '').replace('</loc>', '');
            pageUrls.push(u);
          });
        }
      }
    }
    fs.writeFileSync('remote_all_urls.json', JSON.stringify(pageUrls, null, 2));
    console.log('Total URLs fetched from sitemaps:', pageUrls.length);
  } else {
    console.log('Could not fetch sitemap index');
  }
}
run();

