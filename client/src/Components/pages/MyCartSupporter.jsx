import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import MyCart from './MyCart'
import Header from './Header'
import "../style/mycart.css"
import {searchedproductdata,emptypaymentcart} from "./Redux/ProductSlice"
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

const MyCartSupporter = () => {
  const MycartItems= useSelector((state)=>state.prductredux)
   const Product=MycartItems.mycart
   const totalPrice=Product.reduce((acc,curr)=>acc+parseInt(curr.total),0)
   const totalQty=Product.reduce((acc,curr)=>acc+parseInt(curr.qty),0)
  //  console.log(Product.length);

   //  [start] search function part
   const query=useSelector((state)=>state.prductredux)   
   let filterqueryproduct=query.filterquery
  
   const Navigate=useNavigate()
   const dispatch=useDispatch()

   const FetchFilterdProduct=async()=>{
     const res=await axios.get(`http://localhost:5000/filterproduct?productcategory=${filterqueryproduct.toLocaleLowerCase()}`).catch((err)=>console.log(err))
         const Data=await res.data
         //   console.log(Data);
         return Data
        }

   const FilterproductFunction=()=>{
     FetchFilterdProduct()
     .then((data)=>dispatch(searchedproductdata(data)))
     .then(()=>Navigate("/searchproducts"))
 }
 // [end] serach function part end
  return (
    <>
    
    <div className='container-mycart'>
        <Header fun={FilterproductFunction}/>

        <div className='total-section'>
       <span className='subtotal'> <span >Subtotal ({totalQty} items):</span> <span className='total-price'><i class="fa-solid fa-indian-rupee-sign"></i> {totalPrice}</span></span><br />

       <span> <input type="checkbox" /><span style={{fontSize:"14px",fontWeight:"400"}}>This order contains a gift</span></span><br />

       <Link to={totalPrice?"/payment":""}><button onClick={()=>dispatch(emptypaymentcart())}>Proceed to Checkout</button></Link>
      </div>

       <div className="mycartinfo">
        { Product && Product.length>0?

       <h1>Shopping Cart</h1>: <h1>Your Shopping cart is empty.</h1>
        }
       <hr className='heading-hr'/>

      {
        Product && Product.map((product)=>{
          
          return(
           
            <MyCart product={product}/>
          )
        })
      }
      <div className="bottom-total">
        <span>Subtotal ({totalQty} items):<i class="fa-solid fa-indian-rupee-sign"></i></span><span style={{fontWeight:"600"}}>{totalPrice}</span>
      </div>

      </div>

      
    </div>
   
    </>
  )
}

export default MyCartSupporter
