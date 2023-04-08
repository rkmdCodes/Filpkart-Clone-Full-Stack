import Product from "../model/product_schema.js";

export const getProducts = async (req, res) => {
  console.log(req.params, "is the parameter");

  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({id:id});
    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({message:error.message});
  }
};
