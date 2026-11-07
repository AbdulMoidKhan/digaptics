const fs = require('fs');
const cat = JSON.parse(fs.readFileSync('categorized_services.json', 'utf8'));

console.log('=== SUMMARY OF FOUND SERVICES BY CATEGORY ===');
for (const [k, v] of Object.entries(cat)) {
  console.log(`\n--- Category: ${k} (${v.length} items) ---`);
  // Deduplicate by path
  const uniqueByPath = [];
  const seen = new Set();
  for (const item of v) {
    if (!seen.has(item.path)) {
      seen.add(item.path);
      uniqueByPath.push(item);
    }
  }
  console.log(uniqueByPath.map(i => `  • ${i.text}: ${i.path}`).join('\n'));
}

