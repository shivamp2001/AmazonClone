import React from 'react'
import productimg from "../pages/assets/mobile2.jpg"
import amazondistributeimg from "../pages/assets/payment-distribute-img.png"
import "../style/payment.css"
import { useSelector } from 'react-redux'
const PaymentSupporter = ({product}) => {
    
    // console.log(product);
  return (
    <div className="product-img-info">
                <div>
                <img src={product.productimage} alt="" />
                </div>

                <div className='product-informaion'>
                  <p className='information-p'>{product.productname.slice(0,110)}</p>
                  <p style={{color:"#B12704",fontWeight:"700",fontSize:"15px",marginTop:"7px"}}>₹{product.productprice}</p>
                  {/* <img src={amazondistributeimg} alt="" /> */}

                  <select name="" id="" className='mycart-select' style={{top:"20px",right:"2px",backgroundColor:"white"}}>
                  <option value="1">Qty: 1</option>
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
                  <button><i class="fa-solid fa-gift"></i> Add gift options</button>
                </div>

                </div>
  )
}

export default PaymentSupporter
