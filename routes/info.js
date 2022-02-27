const express=require("express")
const app=express()
const router=express.Router()
const {
    getProfile,
    inputProfile,
    profile_byName,
    deleteProfile,
    updateProfile,
}=require("../controllers/info")


app.use(express.json())


router.get("/",getProfile)
router.post("/",inputProfile)
router.get("/:Name",profile_byName)
router.delete("/:Name",deleteProfile)
router.patch("/:Name",updateProfile)



module.exports=router