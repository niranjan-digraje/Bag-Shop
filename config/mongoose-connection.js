const mongoose = require("mongoose");

mongoose
.connect("mongodb://127.0.0.1:27017/bagshop")   //monogdb chya url pekshya aapan any dynamic db chi url paste karu shakato e.g.cloud
.then(function(){
    console.log("DB-Connected...");
})
.catch(function(err){
    console.log(err);
});

module.exports = mongoose.connection;