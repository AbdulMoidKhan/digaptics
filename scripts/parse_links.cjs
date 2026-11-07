const fs = require('fs');
const html = fs.readFileSync('digaptics_home.html', 'utf8');

// Match menu items, nav links, service links
const regex = /href=["'](https?:\/\/digaptics\.io\/[^"'#]+|\/[^"'#\s>]+)["']/g;
let match;
const links = new Set();
while ((match = regex.exec(html)) !== null) {
  links.add(match[1]);
}

const list = Array.from(links).sort();
fs.writeFileSync('extracted_links.json', JSON.stringify(list, null, 2));
console.log('Found total links:', list.length);
console.log(list.filter(l => l.includes('service') || l.includes('industr') || l.includes('bpo') || l.includes('market') || l.includes('print') || l.includes('photo')).slice(0, 50));

