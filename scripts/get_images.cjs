const fs = require('fs');
const html = fs.readFileSync('digaptics_home.html', 'utf8');

const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let m;
const imgs = new Set();
while ((m = imgRegex.exec(html)) !== null) {
  imgs.add(m[1]);
}
const list = Array.from(imgs);
console.log('Total images found on digaptics.io home:', list.length);
console.log(list.slice(0, 30));
fs.writeFileSync('home_images.json', JSON.stringify(list, null, 2));

