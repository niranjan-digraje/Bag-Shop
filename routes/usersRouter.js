const express = require("express")
const router = express.Router();
const {registerUser,loginUser} = require("../controllers/authCotroller");

router.get("/",function(req,res){
    res.send("Hello User");
});

router.post("/register",registerUser);

router.post("/login",loginUser);

module.exports = router;