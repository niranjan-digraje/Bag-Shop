const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/bagshop`)   //monogdb chya url pekshya aapan any dynamic db chi url paste karu shakato e.g.cloud
.then(function(){
    dbgr("DB-Connected...");
    //console.log("DB Connected...");
})
.catch(function(err){
    dbgr(err);
});

module.exports = mongoose.connection;