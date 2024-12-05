"use client"
const Meet =require( "../models/meetModel.js")
const User =require("../models/userModel.js")
 const sendRequest = async (req, res) => {
    try {
        const senderId=req.user
        console.log(req.user);
        const recieverId = req.params.id
        const sender = await User.findById(senderId)
        const reciever = await User.findById(recieverId)

        if(sender.mates.includes(recieverId)){
            throw new Error("already sent a request")
        }
        
        sender.mates.push(recieverId)
        reciever.mateRequests.push(senderId)

        await sender.save()
        await reciever.save()

        res.status(200).json({message:"request sent"})
    } catch (error) {
        res.status(400).json({ error:error.message})
    }
}

 const acceptRequest = async (req, res) => {

    try {
        const senderId=req.params.id
        const reciever = req.user

        const sender = await User.findById(senderId)

        if(!reciever.mateRequests.includes(senderId)){
            throw new Error("request not found")
        }
        if(reciever.mates.includes(senderId)){
            throw new Error("already friends")
        }

        reciever.mates.push(senderId)
        const index = reciever.mateRequests.indexOf(senderId);
        if (index > -1) {
          reciever.mateRequests.splice(index, 1);
        }
        await reciever.save()

        res.status(200).json({message:"request accepted"})
        
        
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
}
const rejectRequest = async (req, res) => {
    try {
        const recieverId = req.user
        const senderId = req.params.id

        const reciever = await User.findById(recieverId)
        const sender = await User.findById(senderId)
        if(!reciever.mateRequests.includes(senderId)){
            throw new Error("request not found")
        }

        reciever.mateRequests.pop(senderId)
        sender.mates.pop(recieverId)
        await reciever.save()
        await sender.save()
        res.status(200).json({message:"request rejected"})
    } catch (error) {
        
    }
}
 const getRequests = async (req, res) => {
    try {
        const userId=req.user

        const user = await User.findById(userId).populate("mateRequests")

        if(user.mateRequests.length===0){
            throw new Error("no requests")
        }
        res.status(200).json({requests:user.mateRequests})

      
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


 const getMeet=async(req,res)=>{
    try {
        const meet=await Meet.find()
        if(!meet){
            throw new Error("Meet Not Found")
        }
        res.status(200).json({meet})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}



module.exports={sendRequest,acceptRequest,rejectRequest,getRequests,getMeet}