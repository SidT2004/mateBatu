const mongoose =require("mongoose")

const newsSchema=new mongoose.Schema({
    college:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"College",
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    },
    isForAll:{
        type:Boolean,
        default:false
    }
})


const News= mongoose.model("News",newsSchema)
module.exports=News