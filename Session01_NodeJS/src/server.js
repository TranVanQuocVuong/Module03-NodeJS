console.log("Hello NodeJS");
// alert("xin chào nodeJS")
var http = require('http');
var fs = require('fs')

http.createServer(function (req, res) {
    let file = fs.readFileSync("test.html")
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(file);
}).listen(8080);