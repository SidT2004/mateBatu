
const  College =require ("../models/collegeModel.js")
const Meet =require("../models/meetModel.js")
 const addCollege = async (req, res) => {
    try {

        
        const { name } = req.body
        const college = new College({ name })
        await college.save()

        res.status(200).json(college)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const addMeet = async (req, res) => {
    try {
        
        const { name, link } = req.body

        const meet = new Meet({ name, link })

        res.status(200).json(meet)
        await meet.save()
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

const addEvent = async (req, res) => {
    try {
        
        const { name, link } = req.body

        const meet = new Meet({ name, link })

        res.status(200).json(meet)
        await meet.save()
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const getColleges = async (req, res) => {
    try {
        const colleges = await College.find()
        res.status(200).json(colleges)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={addCollege,addMeet,getColleges}