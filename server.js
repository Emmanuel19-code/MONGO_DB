const express=require("express")
const app=express()
const router=require("./routes/info")
const connection=require("./db/connect")
require("dotenv").config()
const notfound=require("./middleware/not-found")





app.use(express.json())
app.use("/details",router)


app.use(notfound)



const port=process.env.PORT||5000

const start= async()=>{
    try {
        await connection(process.env.MONGO_URI)
        app.listen(port,()=>{ console.log(`listening to port ${port}`)})
        
    } catch (error) {
        console.log(error)
    }
}

start()