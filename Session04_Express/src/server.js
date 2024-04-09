var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()

port = 8080

// Xác định định dạng dữ liệu dạng application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Xác định định dạng dữ liệu dạng application/json
app.use(bodyParser.json())

// Lấy tất cả user
const server = app.get('/api/v1/users', (req, res) => {
    let getData = fs.readFileSync('./data/db.json', "utf-8")
    // getData vẫn là định dạng JSON
    // tiến hành parse dữ liệu về dạng object
    res.send(JSON.parse(getData))
})

app.get('/api/v1/users/:id', (req, res) => {
    const {id} = req.params
    var getData = JSON.parse(fs.readFileSync('./data/db.json', "utf-8"))
    const response = getData.users.find((user)=>{
        return user.id == id
    })
    res.send(response)
})

// thêm mới
app.post('/api/v1/users', (req, res) => {
    const dataUser = req.body
    var getData = JSON.parse(fs.readFileSync('./data/db.json', "utf-8"))
    getData.push(dataUser)
    fs.writeFileSync('./data/db.json', JSON.stringify(getData))
    return res.status(201).json({
        message:"Thêm dữ liệu thành công!"
    })
})

// Xóa
app.delete('/api/v1/users/:id', (req, res) => {
    const {id} = req.params
    const getData = JSON.parse(fs.readFileSync('./data/db.json', "utf-8"))
    const response = getData.users.filter((user) => {
        return user.id != id;
    })

    fs.writeFileSync('./data/db.json', JSON.stringify(response))
    return res.status(200).json({
        message:"Xóa dữ liệu thành công!"
    })
})
server.listen(port, () => {
    console.log("đang gọi server");

})