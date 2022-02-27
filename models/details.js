const mongoose=require("mongoose")


const Profile=new mongoose.Schema({
   Name:{
      type:String,
      required:[true,"It must contain your name"],
      trim:true
   },
   Age:{
  type:Number,
  required:[true,"please enter your age"],
  trim:true,
   },
   Programme:{
      type:String,
      required:[true,"please enter your programme"]
   }
})

module.exports=mongoose.model("Details",Profile)