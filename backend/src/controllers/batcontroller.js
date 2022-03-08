const BatStats = require("../models/bat");

const getBat = async (_req,res)=>{
    try{
        const getBat = await BatStats.find({});
        res.send(getBat);
    }catch(e){
        res.status(400).send(e);
    }
}

module.exports = {
    getBat
}