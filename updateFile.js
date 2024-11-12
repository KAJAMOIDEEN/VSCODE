var fs = require('fs');

fs.appendFile('mynewfile2.txt', ' This Is new file', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

