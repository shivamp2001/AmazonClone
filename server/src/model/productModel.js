const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
productname:{type:String},
productcategory:{type:String},
productimage:{type:String},
productprice:{type:Number},
productdescription:{type:String}
},{timestamps:true})

module.exports=mongoose.model("Product",ProductSchema)