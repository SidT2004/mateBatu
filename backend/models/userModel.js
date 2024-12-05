const mongoose =require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
        required: true
    },
    mates: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
    mateRequests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
    isAdmin: {
        type: Boolean,
        default: false
    },
    contributions:{
        type:Number,
        default:0
    }
}, { timestamps: true })


const User = mongoose.model('User', userSchema)
module.exports=User