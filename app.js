// *******all requirements*******

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

//--------------------------------------------------------------------------------------------------------------------------

// *******Add Middlewares*******

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

//--------------------------------------------------------------------------------------------------------------------------

// *******Routes*******

app.get("/",(req,res) =>{
    res.send("Hello World");
});

//--------------------------------------------------------------------------------------------------------------------------

// *******Server*******

app.listen(3000,(req,res)=>{
    console.log("Server Start...");
});

//--------------------------------------------------------------------------------------------------------------------------