var http = require("http");
// import http from "http"
let server = http.createServer(function (req, res) {
    // request: yêu cầu
    // response: trả về
    console.log("Đang gọi vào server");
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("<h1>Hello NodeJS1</h1>") 
    res.write("<h1>Hello 7777</h1>") 
    res.end("<h1>Hello NodeJS3</h1>") //Dừng việc gọi server
})

server.listen(8080, function () {
    console.log("Đang gọi server:http://localhost:8080");
})