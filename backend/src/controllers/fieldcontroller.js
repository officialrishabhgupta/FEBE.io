const FieldStats = require("../models/field");

const getField = async (_req,res)=>{
    try{
        const getField = await FieldStats.find({});
        res.send(getField);
    }catch(e){
        res.status(400).send(e);
    }
}

module.exports = {
    getField
}