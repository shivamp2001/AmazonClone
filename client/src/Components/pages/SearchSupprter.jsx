import React from 'react'
import "../style/searchproduct.css"
import ratingstarimg from"../pages/assets/serach-star.jpeg"
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import {setDataproduct} from "./Redux/ProductSlice"
const SearchSupprter = ({product}) => {
 
    const dispatch=useDispatch()
    const Navigate=useNavigate()

    const Saveproductonredux=()=>{
        dispatch(setDataproduct(product))
        Navigate("/fullviewpro")
      }
     
    // console.log(product);
  return (
    <div className='search-cart'>
        <div className="search-cart-product" onClick={Saveproductonredux}>
        <div className="search-img">
            <img src={product.productimage} alt="" />
        </div>
        
        <div className="search-pro-info">
            <span style={{fontSize:"16px",lineHeight:"20px"}}>{product.productname.slice(0,45)}</span><br />
            
           <img src={ratingstarimg} alt="" className='ratingstar-img' /> <span style={{fontSize:"13px",color:"#007185",position:"relative",bottom:"2px"}}>3518</span><br />
           <i class="fa-solid fa-indian-rupee-sign"></i> <span className='search-price'>{product.productprice}</span><br />
           <span style={{fontSize:"12px",position:"relative",top:"8px"}}>Ships to India</span>
        </div>
 


        
      </div>
    </div>
  )
}

export default SearchSupprter
