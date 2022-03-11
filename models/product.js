const mongoose=require("mongoose")


const Products =new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"product name must be provide"]
    },
    price:{
        type:Number,
        required:[true,"price must be given"]
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAT:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['nike','adidas','puma','fila','calvin'],
            message:'{VALUE} cannot be found'
        }
     }
})


module.exports=mongoose.model('Product',Products)