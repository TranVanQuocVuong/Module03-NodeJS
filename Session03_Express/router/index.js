var express = require("express");
var router = express.Router();

// lấy dữ liệu
router.get("/", (req, res) => {
    res.send('lấy tất cả user')
})

// gửi dữ liệu
router.post("/", (req, res) => {
    // console.log("req", req.body);
    /* console.log("req", req);
    let userId = req.params.idUser
    console.log("userID", userId); */
    // có thể dùng destructoring để lấy giá trị
    /* const { idUser } = req.params
    console.log("idUser", idUser); */
    res.send('trả về 1 user')
})

// Xóa dữ liệu
router.delete("/:id", (req, res) => {
    res.send('xóa')
})

// update put update hết các trường dữ liệu
router.put("/:id", (req, res) => {
    res.send('update Put')
})

// update patch update trường dữ liệu mà mình muốn
// Nếu đối tượng cần update có 5 trường mình đi update 1 trường thì 4 trường còn lại vẫn giữ nguyên
router.patch("/:id", (req, res) => {
    res.send('update patch')
})
module.exports = router
/* 
    export defaut router
*/