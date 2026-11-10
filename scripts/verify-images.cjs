const fs = require('fs');
const path = require('path');
const https = require('https');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(getFiles(file));
    else if (file.endsWith('.jsx')) results.push(file);
  });
  return results;
}

const files = getFiles('src');
const urlRegex = /https:\/\/images\.unsplash\.com\/[^\s'"`]+/g;
const foundUrls = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(urlRegex) || [];
  matches.forEach(m => foundUrls.add(m));
});

console.log(`Auditing ${foundUrls.size} unique Unsplash URLs across components...\n`);

async function verifyAll() {
  let allPass = true;
  for (const url of foundUrls) {
    await new Promise(resolve => {
      https.get(url, res => {
        if (res.statusCode !== 200) {
          console.error(`❌ FAILED [${res.statusCode}]: ${url}`);
          allPass = false;
        } else {
          console.log(`✅ 200 OK: ${url.split('?')[0].split('/').pop()} (${res.headers['content-type']})`);
        }
        resolve();
      }).on('error', err => {
        console.error(`❌ ERROR: ${err.message} ${url}`);
        allPass = false;
        resolve();
      });
    });
  }
  if (allPass) {
    console.log(`\n🎉 SUCCESS: All ${foundUrls.size} images verified 200 OK!`);
    process.exit(0);
  } else {
    console.error('\n⚠️ AUDIT FAILED: Some images returned errors!');
    process.exit(1);
  }
}

verifyAll();
