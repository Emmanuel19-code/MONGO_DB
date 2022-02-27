const Details=require("../models/details")

const getProfile= async (req,res)=>{
    try {
      const task= await Details.find({})
      res.status(200).json({task})
    } catch (error) {
      res.status(500).json({msg:error})
    }
}

const inputProfile= async(req,res)=>{
  try {
    const task= await Details.create(req.body)
  res.status(201).json(task)
  } catch (error) {
    res.status(500).json({msg:error})
  }
  
}

const profile_byName= async(req,res)=>{
       try {
         const {Name}=req.params
         const task= await Details.findOne({Name:Name})
           if(!task){
             return res.status(404).json({msg:`oops there is no student with this ${Name}`})
           }
         res.status(200).json({task})
       } catch (error) {
         res.status(500).json({msg:error})
       }
}


const deleteProfile= async (req,res)=>{
  try {
    const {Name}=req.params
    const task=await Details.findOneAndDelete(Name)
    if(!task){
      return res.status(404).json({msg:`this ${Name} does not exist`})
    }
    res.status(200).json({msg:`${Name} has been deleted`})
  } catch (error) {
res.status(500).json({msg:error})
  }
}


const updateProfile= async (req,res)=>{
  try {
    const {Name:Name}=req.params
   const task =await Details.findOneAndUpdate({Name:Name},req.body,{
     new:true,
     runValidators:true
   })
   if(!task){
    return res.status(404).json({msg:`this ${Name} does not exist`})
  }
  res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}







module.exports={
    getProfile,
    inputProfile,
    profile_byName,
    deleteProfile,
    updateProfile,
}