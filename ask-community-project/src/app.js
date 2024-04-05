const express = require('express')
var bodyParser = require('body-parser')
var router = require('../router/index')
const app = express()

// phân tích các yêu cầu có dạng parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// phân tích các yêu cầu có dạng parse application/json
app.use(bodyParser.json())

const port = 3000

app.use('/api/v1/questions', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})