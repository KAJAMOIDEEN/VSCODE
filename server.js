var http = require('http');

var dt = require('./dateFunction');

const maths = require('./math');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("The date and time are currently: \n" + dt.myDateTime());
  res.write("\nSum:" + dt.sum(8,9));
  res.write(req.url);
  res.end('\nHello World!');
}).listen(8088);

console.log('Server Started...');
console.log("Local Module");
const sum = maths.add(10, 5);
console.log("Sum: " + sum);
