const express = require("express");
//const app = express();
const router = express.Router();
//app.set("view engine","ejs");
const isLoggedIn = require("../middlewares/isLoggedIn")


router.get('/', (req, res) => {
    // Assuming error is fetched from some logic or validation
    const error = req.flash("error"); // Default empty array if no error
    res.render('index', { error });
});

router.get("/shop",isLoggedIn,function(req,res){
    res.render('shop');
});



module.exports = router;