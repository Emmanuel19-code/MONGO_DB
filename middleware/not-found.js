const notfound=(req,res)=>{
    res.status(404).send("page cannot be found")
}

module.exports=notfound