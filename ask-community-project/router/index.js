var express = require("express");
var router = express.Router();
var fs = require('fs');

router.get('/', (req, res) => {
    var data = fs.readFileSync('./dev-data/questions.json', 'utf8')
    console.log(data);
    res.send(JSON.parse(data))
})

router.get('/:id', (req, res) => {
    // console.log(req);
    const idUser = req.params.id;
    var data = fs.readFileSync('./dev-data/questions.json', 'utf8')
    const database = JSON.parse(data)
    const index = database.findIndex((item) => {
        return item.id == idUser;
    })
    res.send(database[index].content)
})

router.post('/', (req, res) => {
    const user = req.body;
    var data = fs.readFileSync('./dev-data/questions.json', 'utf8')
    const database = JSON.parse(data)
    const index = database.findIndex((item) => {
        return item.content == user.content;
    })
    if (index == -1) {
        database.push(user)
        fs.writeFileSync('./dev-data/questions.json', JSON.stringify(database))
        res.status(201).json({message:"Create successfully"})
    }
    else{
        res.status(201).json({message:"Question already exists"})
    }
})

router.put('/:id', (req, res) => {
    const idUser = req.params.id
    const newUser = req.body
    const data = fs.readFileSync('./dev-data/questions.json', 'utf8')
    const database = JSON.parse(data)
    const indexPut = database.findIndex((item)=>{
        return item.id == idUser
    })
    if (indexPut == -1) {
        res.status(201).json({message:"Question not found"})
    }
    else{
        database.splice(indexPut, 1, newUser)
        fs.writeFileSync('./dev-data/questions.json', JSON.stringify(database))
        res.status(201).json({message:"Update successfully"})
    }
})

router.delete('/:id', (req, res) => {
    const idUser = req.params.id
    var data = fs.readFileSync('./dev-data/questions.json', 'utf-8')
    const database = JSON.parse(data)
    const indexDelete = database.findIndex((item) => {
        return item.id == idUser;
    })
    if (indexDelete == -1) {
        res.status(201).json({message:"Question not found"})
    }
    else{
        database.splice(indexDelete, 1)
        fs.writeFileSync('./dev-data/questions.json', JSON.stringify(database))
        res.status(201).json({message:"Delete successfully"})
    }
})

// router.get('*', (req, res) => {
//     res.status(404).send('PAGE NOT FOUND')
// })

module.exports = router