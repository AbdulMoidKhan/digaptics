const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Services
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/software-development.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/website-development.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/mobile-app-development.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/automation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/video-production.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/graphic-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/digital-marketing.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/ecommerce-solutions.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/printing-collateral.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/photography-videography.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/services/bpo-solutions.jpg'
  },
  // Home & About & Industries
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/home/collaboration.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/about/chicago-studio.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80',
    dest: 'public/images/home/engineering-team.jpg'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    https.get(item.url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, res2 => {
          const file = fs.createWriteStream(item.dest);
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('Downloaded:', item.dest);
            resolve();
          });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(item.dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded:', item.dest);
          resolve();
        });
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const img of images) {
    try {
      await download(img);
    } catch (e) {
      console.error('Failed to download', img.dest, e.message);
    }
  }
  console.log('All downloads completed!');
}
run();

