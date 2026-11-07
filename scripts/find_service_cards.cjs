const fs = require('fs');
const html = fs.readFileSync('digaptics_home.html', 'utf8');

const lines = html.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('Our-Service-Img')) {
    console.log('Line ' + idx + ':');
    console.log(lines.slice(Math.max(0, idx - 8), Math.min(lines.length, idx + 20)).join('\n').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  }
});

