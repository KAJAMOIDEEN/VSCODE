var http = require('http');
const add = (a, b) => {
    return a + b;
  };
const sub = (a, b) => {
    return a - b;
  };

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Addition: '+add(8,9));
    res.write('Subtraction:'+sub(9,5));
    res.write(req.url);
    res.end();
  }).listen(8080);


console.log('server started...')