const express = require("express")
const router = express.Router();
require("dotenv").config();
const ownerModel = require("../models/owner-moodel");

if(process.env.NODE_ENV === "development"){
    router.post("/create",async (req,res)=>{
        //res.send("Hello Owner1");
        let owners = await ownerModel.find();
        if(owners.length > 0){
            return res.staus(503).send("You dont have permission to create a new owner");
        }

        let {fullname,email,password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        });

        res.status(201).send(createdOwner);
    });
}

router.get("/",(req,res)=>{
    res.send("Hello Owner");
});




module.exports = router;