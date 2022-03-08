const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/csv", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})