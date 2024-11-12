var fs = require('fs');

var readStream = fs.createReadStream('./demo.txt');

/*Write to the console when the file is opened:*/
readStream.on('data', function (dataa) {
  console.log(dataa.toString());
});
