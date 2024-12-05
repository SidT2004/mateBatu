const mongoose =require("mongoose")

const eventSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    poster:{
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
    },
    isForAll:{
        type: Boolean,
        default: false
    }

})  

const Event=mongoose.model('Event', eventSchema)
module.exports=Event