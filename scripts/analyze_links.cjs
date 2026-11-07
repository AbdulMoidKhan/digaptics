const fs = require('fs');
const html = fs.readFileSync('digaptics_home.html', 'utf8');

// Find all elements with classes indicating mega menu or sub-menu
// Elementor often has sub-menus like <ul class="sub-menu"> or <div class="elementor-nav-menu--dropdown">
// Let's find sections or headings around links
const links = JSON.parse(fs.readFileSync('all_page_links.json', 'utf8'));

// Filter out non-service pages like /about/, /contact/, /terms/, etc.
console.log('All links count:', links.length);

const categorized = {
  marketing: [],
  development: [],
  ecommerce: [],
  printCollateral: [],
  photographyVideography: [],
  bpo: [],
  industries: [],
  other: []
};

for (const item of links) {
  const p = item.path.toLowerCase();
  const t = item.text;
  
  if (p.startsWith('/bpo-') || p.includes('bpo')) {
    categorized.bpo.push(item);
  } else if (p.includes('ecommerce') || p.includes('shopify') || p.includes('magento') || p.includes('etsy') || p.includes('amazon') || p.includes('wallmart') || p.includes('big-commerce')) {
    categorized.ecommerce.push(item);
  } else if (p.includes('seo') || p.includes('ppc') || p.includes('social-media') || p.includes('facebook') || p.includes('youtube') || p.includes('linkedin') || p.includes('tiktok') || p.includes('instagram') || p.includes('geofencing') || p.includes('review-management') || p.includes('business-listing')) {
    categorized.marketing.push(item);
  } else if (p.includes('print') || p.includes('card') || p.includes('brochure') || p.includes('banner') || p.includes('sign') || p.includes('flyer') || p.includes('folder') || p.includes('envelope') || p.includes('packaging') || p.includes('label') || p.includes('stickers')) {
    categorized.printCollateral.push(item);
  } else if (p.includes('photo') || p.includes('video') || p.includes('drone') || p.includes('animation') || p.includes('film') || p.includes('shoot') || p.includes('headshot')) {
    categorized.photographyVideography.push(item);
  } else if (p.includes('industry') || p.includes('industries') || p.includes('healthcare') || p.includes('real-estate') || p.includes('education') || p.includes('nonprofit') || p.includes('finance') || p.includes('legal') || p.includes('restaurant') || p.includes('hospitality')) {
    categorized.industries.push(item);
  } else if (p.includes('web') || p.includes('app') || p.includes('software') || p.includes('wordpress') || p.includes('speed-optimization') || p.includes('development')) {
    categorized.development.push(item);
  } else {
    categorized.other.push(item);
  }
}

for (const [cat, arr] of Object.entries(categorized)) {
  console.log(`=== ${cat} (${arr.length}) ===`);
  console.log(arr.map(a => `${a.text} -> ${a.path}`).slice(0, 15).join('\n'));
}

fs.writeFileSync('categorized_services.json', JSON.stringify(categorized, null, 2));

