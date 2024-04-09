var express = require("express");
var router = express.Router();
var fs = require('fs');
var checkExistId = require("../middleware/checkExistId.js");
var checkExistTitle = require("../middleware/checkExistTitle.js");


router.get('/', (req, res) => {
    var data = fs.readFileSync('./dev-data/questions.json', 'utf8')
    console.log(data);
    res.send(JSON.parse(data))
})

router.get('/:id', checkExistId, (req, res) => {
    // console.log(req);
    const idUser = req.params.id;
    var data = JSON.parse(fs.readFileSync('./dev-data/questions.json', 'utf8'))
    const index = data.findIndex((item) => {
        return item.id == idUser;
    })
    res.send(data[index].content)
})

router.post('/', checkExistTitle, (req, res) => {
    const user = req.body;
    var data = JSON.parse(fs.readFileSync('./dev-data/questions.json', 'utf8'))
    const index = data.findIndex((item) => {
        return item.content == user.content;
    })
    if (index == -1) {
        data.push(user)
        fs.writeFileSync('./dev-data/questions.json', JSON.stringify(data))
        res.status(201).json({message:"Create successfully"})
    }
})

router.put('/:id',checkExistId, (req, res) => {
    const idUser = req.params.id
    const newUser = req.body
    const data = JSON.parse(fs.readFileSync('./dev-data/questions.json', 'utf8'))
    const index = data.findIndex((item)=>{
        return item.id == idUser
    })
    if (index != -1) {
        data.splice(index, 1, newUser)
        fs.writeFileSync('./dev-data/questions.json', JSON.stringify(data))
        res.status(201).json({message:"Update successfully"})
    }
})

router.delete('/:id', checkExistId, (req, res) => {
    const idUser = req.params.id
    var data = JSON.parse(fs.readFileSync('./dev-data/questions.json', 'utf-8'))
    const index = data.findIndex((item) => {
        return item.id == idUser;
    })
    if (index != -1) {
        data.splice(index, 1)
        fs.writeFileSync('./dev-data/questions.json', JSON.stringify(data))
        res.status(201).json({message:"Delete successfully"})
    }
})

// router.get('*', (req, res) => {
//     res.status(404).send('PAGE NOT FOUND')
// })

module.exports = router