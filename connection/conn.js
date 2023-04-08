const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/frndProj").then(() => {
    console.log("Data base Connected!");
}).catch((err)=>{
    console.log(err);
})