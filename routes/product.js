const express=require("express")
const router=express.Router()
const {
    getAllProducts, getOneProduct,
}=require("../controllers/product")


router.get("/",getAllProducts)
router.get("/?item",getOneProduct)









module.exports=router