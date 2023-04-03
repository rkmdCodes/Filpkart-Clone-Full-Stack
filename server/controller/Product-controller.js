import Product from "../model/product_schema.js";

export const getProducts = async (req,res)=>
{
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    }catch(error)
    {
      res.status(500).json({"message":error.message})
    }

}