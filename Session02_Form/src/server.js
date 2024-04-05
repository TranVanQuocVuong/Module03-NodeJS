var http = require("http")
var url = require("url")
// Tải thư viện http có sẵn trong nodeJS
var port = 8080
/* var domain =  `http://localhost:8080/document`
var q = url.parse(domain, true)
console.log("qqqqqqq",q); */
// Lấy tên
// var pathName = q.pathname
// console.log("userName", pathName);
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    var domain =  `http://localhost:8080${req.url}`
    var q = url.parse(domain, true)
    var name = q.pathname
    var result = name.split('/')

    res.write(`<h1>Đây là trang: ${result[1]}</h1>`)

    res.end(); //Kết thúc việc gọi server
}).listen(port, function (params) {
    console.log(`Đang gọi vào server: http://localhost:${port}`);
})