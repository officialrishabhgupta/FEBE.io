const mongoose = require("mongoose");

const batSchema = new mongoose.Schema({
    Runs:{
        type:Number,
    },
    Mins:{
        type:Number,
    },
    BF:{
        type:Number,
    },
    fours:{
        type:Number,
    },
    sixes:{
        type:Number,
    },
    SR:{
        type:Number,
    },
    Pos:{
        type:Number,
    },
    Dismissal:{
        type:String,
    },
    Inns:{
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
    }
})

const BatStats = new mongoose.model("BatStats",batSchema)

module.exports = BatStats;