const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
    Overs:{
        type:Number,
    },
    Mdns:{
        type:Number,
    },
    Runs:{
        type:Number,
    },
    Wkts:{
        type:Number,
    },
    Econ:{
        type:Number,
    },
    Pos:{
        type:Number,
    },
    Inns:{
        type:Number,
    },
    DismisalMade:{
        type:String,
    },
    CatchTaken:{
        type:Number,
    },
    Opposition:{
        type:String,
    },
    Ground:{
        type:String,
    },
    date:{
        type:Date,
    },
    MatchNumber:{
        type:String,
    },
    Result:{
        type:String,
    },

})

const FieldStats = new mongoose.model("FieldStats",fieldSchema)

module.exports = FieldStats;