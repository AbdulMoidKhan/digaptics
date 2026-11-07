const fs = require('fs');
const html = fs.readFileSync('digaptics_home.html', 'utf8');

// Find navigation menus or dropdown structures
// Let's find all <nav> or header elements or mega menus
const navMatches = html.match(/<nav[\s\S]*?<\/nav>/gi) || [];
console.log('Nav tags count:', navMatches.length);

// Also look for <ul> or menu with service categories
const menuItems = [];
const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;

// Let's search for header / menu specifically
const headerMatch = html.match(/<header[\s\S]*?<\/header>/gi);
if (headerMatch) {
  fs.writeFileSync('header_extracted.html', headerMatch.join('\n'));
  console.log('Saved header_extracted.html, length:', headerMatch[0].length);
} else {
  console.log('No <header> found, searching for main-menu or elementor-nav');
}

// Check for elementor nav or wp menus
const navs = html.match(/class="[^"]*(?:menu|nav)[^"]*"[^>]*>[\s\S]*?<\/(?:ul|nav|div)>/gi);
console.log('Nav classes found:', navs ? navs.length : 0);

