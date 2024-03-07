const fs = require('fs');

function writeSVGFile(content) {
  fs.writeFileSync('logo.svg', content);
  console.log('Generated logo.svg');
}

module.exports = { writeSVGFile };