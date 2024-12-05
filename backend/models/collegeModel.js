const mongoose =require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    leadboard:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
})  

const College=mongoose.model('College', collegeSchema) 
module.exports=College