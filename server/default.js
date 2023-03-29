import { products } from "./constants/data.js";
import Product from "./model/product_schema.js";

const DefaultData = async ()=>{
  try
  {

    // await Product.insertMany(products);
    //console.log("Data imported successfully!")
  }
  catch(error)
  {
    console.log(`error is ${error.message}`);
  }
}

export default DefaultData;

