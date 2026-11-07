const https = require('https');
const fs = require('fs');

const url = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900&auto=format&fit=crop&q=80';
const dest = 'public/images/services/ecommerce-solutions.jpg';

function download(u, d) {
  https.get(u, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      download(res.headers.location, d);
    } else {
      const file = fs.createWriteStream(d);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Successfully downloaded', d, fs.statSync(d).size, 'bytes');
      });
    }
  });
}
download(url, dest);

