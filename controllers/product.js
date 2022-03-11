const Products=require("../models/product")
const { options } = require("../routes/product")
  

const getAllProducts= async (req,res)=>{
     const name=await Products.find({price:{$gt:150}}).sort('Name price').select('Name price').limit(5)
     res.status(200).json({name})
     //.select=>is used to display some aspect of the information
     //.limit=>is used to check for the number of information to be displayed
     //.skip=>is used to skip certains details and move to the next detail
     /*sort=>is used to sort a the items in the order you want
        the syntax is variable.sort('sort items')
     */
    /*
      $gt means greater than
    */
}

const getOneProduct= async (req,res)=>{
   const {company,sort,numericFilters}=req.query
    const name={}
     if(company){
       name.company=company;
     }
   let result= Products.find(name);
   if(!result){
     return res.json({msg:`product not available`})
   }
    if(numericFilters){
      operators={
        '<':'$lt',
        '<=':'$lte',
        '>':'$gt',
        '>=':'$gte',
        '=':'e'
      }
      const regEx=/\b(<|<=|>|>=|=)\b/g
      let filters=numericFilters.replace(regEx,(match)=>`-${operators[match]}-`);
      const option=['price','rating'];
      filters=filters.split('-').forEach((item)=>{
        const [field,operator,value]=item.split('-');
        if(option.includes(field)){
          name[field]={[operator]:Number(value)}
          console.log(name)
        }
      })
      
    }
   if(sort){
    const shortlist=sort.split(',').join('');
     result=result.sort(shortlist);
   }
   else{
     result=result.sort('Name');
   }
   const page=Number(req.query.page)|| 1;
   const limit=Number(req.query.limit);
   const skip=(page-1)*5;
   result=result.skip(skip).limit(limit);
  const product=await result;
   res.json(product)
}










module.exports={
    getAllProducts,
    getOneProduct,
}