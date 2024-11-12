var fs = require('fs');

fs.unlink('NodeJS/deleteFile', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});