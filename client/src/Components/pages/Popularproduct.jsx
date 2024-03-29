import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setDataproduct} from "./Redux/ProductSlice"

const Popularproduct = ({productimage,productdata}) => {
  const dispatch=useDispatch()
    const Navigate=useNavigate()

    const Saveproductonredux=()=>{
      dispatch(setDataproduct(productdata))
      Navigate("/fullviewpro")
    }
  return (
    <div className="product-cart">
    <img src={productimage} alt="" onClick={Saveproductonredux} />
 </div>
  )
}

export default Popularproduct
