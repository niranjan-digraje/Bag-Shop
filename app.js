// *******all requirements*******

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection"); //database connected
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

//--------------------------------------------------------------------------------------------------------------------------

// *******Add Middlewares*******

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

//--------------------------------------------------------------------------------------------------------------------------

// *******Routes*******

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

//--------------------------------------------------------------------------------------------------------------------------

// *******Server*******

app.listen(3000,(req,res)=>{
    console.log("Server Start...");
});

//--------------------------------------------------------------------------------------------------------------------------