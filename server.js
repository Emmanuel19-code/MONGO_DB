const express=require("express")
const app=express()
require("dotenv").config()
const not_found=require("./midddleware/not_found")
const connection=require("./db/connect")
const router=require("./routes/product")
require("express-async-errors")





app.use(express.json())

app.use("/api/products",router)


app.use(not_found)



const port=process.env.PORT || 5000
const start= async ()=>{
    try {
     await connection(process.env.MONGO_URI)
       return app.listen(port,()=>{console.log("working")})
    } catch (error) {
        console.log(error)
    }
}

start()