import React, { useState } from 'react'
import "../style/addproduct.css"
import {Imagebase64} from "../pages/ImageConverter"
import axios from "axios"
const AddProduct = () => {
  
  const [inputs,setInputs]=useState({
    productname:"",
    productcategory:"",
    productimage:"",
    productprice:"",
    productdescription:""
  })

// console.log(inputs);
const handlechange=(e)=>{
  const { name, value } = e.target;
  setInputs((preve) => {
    return {
      ...preve,
      [name]: value,
    };
  });
}

const handleUploadImage = async (e) => {
  const data = await Imagebase64(e.target.files[0]);
  setInputs((preve) => {
    return {
      ...preve,
      productimage: data,
    };
  });
  //  console.log(data);
};
// console.log(inputs);
const AddproductOnserver=async()=>{
const res=await axios.post("http://localhost:5000/addproduct",{
  productname:String(inputs.productname),
  productcategory:String(inputs.productcategory),
  productimage:String(inputs.productimage),
  productprice:String(inputs.productprice),
  productdescription:String(inputs.productdescription),
}).catch((err)=>console.log(err))

const Data=await res.data
// console.log(Data);
return Data
}

const handlesubmit = (e) => {
  // console.log(inputs);
  e.preventDefault();
  AddproductOnserver()
};

  return (
    <div className='addpro-container'>
      <div className="signin-logo" style={{marginBottom:"100px"}}>

</div>
<form onSubmit={handlesubmit}>
      <div className="addpro-box">
        <h1>Add product</h1>
        <label htmlFor="productname">Product name</label>
        <input type="text" placeholder='Name' name='productname'onChange={handlechange} />

        <label htmlFor="productcategory">Product category</label>
        <input type="text" placeholder='Category'name='productcategory'onChange={handlechange} />
         
         {/* <label htmlFor="">Choose file</label> */}
        <input style={{height:"60px", }} type="file" accept='image/*' name='productimage'onChange={handleUploadImage} />

        <label htmlFor="productprice">Product price</label>
        <input type="number" placeholder='price'name='productprice' onChange={handlechange} />
         
         <textarea name="productdescription" id="" cols="30" rows="10"onChange={handlechange}></textarea>
        <button>Add product</button>

      </div>
        </form>
    </div>
  )
}

export default AddProduct
