require("dotenv").config()

const connection=require("./db/connect")
const Product=require("./models/product")

const jsonProduct=require("./product.json")


const start=async ()=>{
    try {
        await connection(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log("success")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}
start()