const fs = require('fs');

try {
  const data = fs.readFileSync('read.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}