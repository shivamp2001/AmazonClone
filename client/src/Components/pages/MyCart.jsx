import React, { useState } from 'react'

import "../style/mycart.css"
import image from"../pages/assets/popular-pro5.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {deletecartitem,increaseqty,setDataproduct} from "./Redux/ProductSlice"

const MyCart = ({product}) => {
  // const [select,setseletect]=useState(0)
  const dispatch=useDispatch()
  const Navigate=useNavigate()
let Editquantity=(e)=>{
  let select=e.target.value
  dispatch(increaseqty({product,select}))
}

const Saveproductonredux=()=>{
  dispatch(setDataproduct(product))
  Navigate("/fullviewpro")
}
  // console.log(product.total+product.total);
 
//  console.log(product);
          
          const DeleteItem=()=>{
            dispatch(deletecartitem(product._id))
          }
  //  console.log(product);
  return (
    <div>
      {/* <div className="container-mycart"> */}
        {/* <div className="mycartinfo"> */}
            
            
           

              <div className="img-and-proinfo">
            <div className="item-box" onClick={Saveproductonredux}>
                <img src={product.productimage} alt="" />
            </div>
            <div className="mycart-product-info">
                <p className='mycart-pro-name'>{product? product.productname.slice(0,128):""}... </p>

                <p className='mycart-price'><i class="fa-solid fa-indian-rupee-sign"></i> {product.productprice}</p>

                <p className='instack-p'>In Stock</p>

                <input type="checkbox" /> <span className='checkbox-text'>This is a gift <span><Link>Learn more</Link></span> </span>

                <div className="mycart-function">
                    <select name="" id="selectoption" className='mycart-select'onChange={Editquantity} >
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
        <span> |  <span onClick={DeleteItem}>Delete</span> | <span>Save for later</span>|<span>Compare with similar item</span>|<span>Share</span>|</span>
                </div>
            </div>
                 
            </div>
            <hr className='bottom-hr'/>
        {/* </div> */}
      </div>
    // </div>
  )
}

export default MyCart
