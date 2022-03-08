const OdiStats = require("../models/odi");

const getOdi = async (_req,res)=>{
    try{
        const getOdi = await OdiStats.find({});
        res.send(getOdi);
    }catch(e){
        res.status(400).send(e);
    }
}

module.exports = {
    getOdi
}