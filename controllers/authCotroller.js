const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");
const express = require("express");
const app = express();
app.set("view engine","ejs");
const Product = require('../models/product-model');

module.exports.registerUser = async function(req,res){
    try{
        let {email,password,fullname} = req.body;
        let user = await userModel.findOne({email:email});
        if(user){
            //return res.status(401).send("You already have an account, Please login.");
            req.flash("error","You already have an account, Please login.");
            return res.redirect("/");
        }
        bcrypt.genSalt(10,function(err,salt){
           bcrypt.hash(password,salt,async function(err,hash){
                if(err){
                    return res.send(err.message);
                }else{
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname
                    });
                    //res.send(user);
                    let token = generateToken(user);
                    res.cookie("token",token);
                    req.flash("error","user created successfully");
                    res.redirect("/");
                }
           }); 
        });
       
    }
    catch(err){
        res.send(err.message);
    }
};

module.exports.loginUser = async function(req,res){
    let {email,password} = req.body;
    let user = await userModel.findOne({email:email});
    if(!user){
        return res.send("Email or Password incorrect");
    }
    bcrypt.compare(password,user.password,async function(err,result){
        //res.send(result);
        if(result){
            let token = generateToken(user);
            res.cookie("token",token);
            const products = await Product.find(); // Assuming you're fetching products from a database
            res.render('shop', { products });
        }else{
            res.redirect("/");
        }
    })
};