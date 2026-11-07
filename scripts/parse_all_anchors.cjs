const fs = require('fs');
const html = fs.readFileSync('digaptics_home.html', 'utf8');

// Match any <a ...> ... </a>
const regex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
let match;
const links = [];
while ((match = regex.exec(html)) !== null) {
  const url = match[1].trim();
  // strip tags from text
  const text = match[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (url && (url.startsWith('https://digaptics.io') || url.startsWith('/')) && text.length > 0 && text.length < 80) {
    if (!url.includes('wp-content') && !url.includes('#') && !url.includes('elementor') && !url.includes('feed')) {
      links.push({ url, text });
    }
  }
}

const seen = new Set();
const unique = [];
for (const l of links) {
  const cleanUrl = l.url.replace('https://digaptics.io', '') || '/';
  const key = cleanUrl + '::' + l.text;
  if (!seen.has(key)) {
    seen.add(key);
    unique.push({ path: cleanUrl, text: l.text });
  }
}

fs.writeFileSync('all_page_links.json', JSON.stringify(unique, null, 2));
console.log('Total valid links with anchor text:', unique.length);
console.log('Sample:');
console.log(unique.slice(0, 40));

