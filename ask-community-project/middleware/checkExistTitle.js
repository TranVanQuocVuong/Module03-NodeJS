const fs = require("fs")

const checkExistTitle = (req, res, next) => {
    const title = req.body
    // console.log(req.body);
    const data = JSON.parse(fs.readFileSync('./dev-data/questions.json', 'utf-8'))
    const index = data.findIndex((item) => {
        return item.content == title.content
    })
    if (index != -1) {
        res.status(201).json({message:"Todo already exists"})
    }
    else{
        next()
    }
}

module.exports = checkExistTitle