const ProductModel = require("../model/productModel");
const PopularProduct=require("../model/popularproModel")
exports.Addproduct = async (req, res) => {
  try {
    const bodyData = req.body;
    // console.log(bodyData);
    const InsertProduct = await ProductModel.create(bodyData);
    return res.status(201).json({ data: InsertProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.FetchallProduct = async (req, res) => {
  try {
    const ProductData = await ProductModel.find();
    return res.status(200).json({ data: ProductData });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// PopularProduct Api
exports.PopularProduct = async (req, res) => {
  try {
    const bodyData = req.body;
    console.log(bodyData);
    const InsertPopularProduct = await PopularProduct.create(bodyData);
    return res.status(201).json({ data: InsertPopularProduct });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Fetching popular products
exports.FetchPopularproduct = async (req, res) => {
  try {
    const ProductData = await PopularProduct.find();
    return res.status(200).json({ data: ProductData });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};



// Filter product
exports.FilterProduct=async(req,res)=>{
   try{
    let query=req.query
    // console.log(query);
    let FilterData=await ProductModel.find(query)
    return res.status(200).json({data:FilterData})

   }catch(err){
    return res.status(500).json({ error: err.message });
   }
}