const fs = require('fs');
const header = fs.readFileSync('header_extracted.html', 'utf8');

// In Elementor / WordPress, menu items are usually <li> with <a> tags and sub-menus
// Let's find top-level categories and their sub-items
const regex = /<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>/gi;
let match;
const linksWithText = [];
while ((match = regex.exec(header)) !== null) {
  const url = match[1].trim();
  const text = match[2].trim().replace(/&amp;/g, '&').replace(/&#8217;/g, "'");
  if (text && !url.includes('#') && !url.includes('tel:') && !url.includes('mailto:')) {
    linksWithText.push({ url, text });
  }
}

// Remove duplicates while preserving order
const seen = new Set();
const unique = [];
for (const item of linksWithText) {
  const key = item.url + '::' + item.text;
  if (!seen.has(key)) {
    seen.add(key);
    unique.push(item);
  }
}

fs.writeFileSync('nav_items.json', JSON.stringify(unique, null, 2));
console.log('Unique menu links:', unique.length);
console.log('Sample menu links:', unique.slice(0, 30));

