const not_found=(req,res)=>{
      res.status(404).json({msg:`Page cannot be found`})
}




module.exports=not_found