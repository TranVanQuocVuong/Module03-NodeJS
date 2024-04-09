const fs = require("fs")

const checkExistId = (req, res, next) =>{
    const id = req.params.id
    // console.log("req", req.params);
    const data = JSON.parse(fs.readFileSync('./dev-data/questions.json', 'utf-8'))
    const index = data.findIndex((item) => {
        return item.id == id
    })
    if (index == -1) {
        res.status(201).json({message:"Todo not found"})
    }
    else{
        next()
    }
}

module.exports = checkExistId
