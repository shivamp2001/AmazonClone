import React from 'react'
import "../style/fullviewproduct.css"
import Header from "../pages/Header"
import { Link, useNavigate } from 'react-router-dom'
import starimg from "../pages/assets/star_rating.jpg"
import { useDispatch, useSelector } from 'react-redux'
import {addmycartitem} from "./Redux/ProductSlice"
import {searchedproductdata,paymentcart} from "./Redux/ProductSlice"
import axios from 'axios'

const FullViewproduct = () => {
    const dispatch=useDispatch();
    const Navigate=useNavigate()
         const data=useSelector((state)=>state.prductredux)
         const UserInfo=useSelector((state)=>state.userredux)
        //  console.log(UserInfo);
        //  console.log(data.productinfo);
        const product=data.productinfo
        
        const ItemaddingOnmycart=()=>{
            UserInfo._id?
            dispatch(addmycartitem(product)):Navigate("/signin")
        }

        const PaymentOrder=()=>{
            dispatch(paymentcart(data.productinfo))
            UserInfo._id?Navigate("/payment"):Navigate("/signin")
           }
   
 //  [start] search function part
   const query=useSelector((state)=>state.prductredux)   
   let filterqueryproduct=query.filterquery
  
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
    <div className='main-container'>
          <Header fun={FilterproductFunction}/>
      <div className='container-fullviewproduct'>
                <div className="imageviwe">
                  <img src={product.productimage} alt="" />
                </div>

                <div className='product-information'>

                    <div className="pro-name">
                    <span>{product.productname}</span>
                    </div>

                   <Link><p> Visit the Amazon Basics Store</p></Link>
                   <img src={starimg} alt="" />
                    <hr />
                    {/* description section */}
                    
                   {product.productdescription.length>0?
                    <i class="fa-solid fa-circle dot-des" ></i>:""
                   }
                    <p style={{paddingLeft:"10px"}}>{product.productdescription? 
                     product.productdescription.slice(0,300):""}</p>

                    

                     {product.productdescription.length>300?
                    <i class="fa-solid fa-circle dot-des" ></i>:""
                     }
                     <p style={{paddingLeft:"10px"}}>{product.productdescription? 
                     product.productdescription.slice(300,600):""}</p>


                     {product.productdescription.length>600?
                    <i class="fa-solid fa-circle dot-des" ></i>:""
                     }
                     <p style={{paddingLeft:"10px"}}>{product.productdescription? 
                     product.productdescription.slice(600,900):""}</p>

                     {product.productdescription.length>900?
                    <i class="fa-solid fa-circle dot-des" ></i>:""
                     }
                     <p style={{paddingLeft:"10px"}}>{product.productdescription? 
                     product.productdescription.slice(900,1200):""}</p>

                     {product.productdescription.length>1200?
                    <i class="fa-solid fa-circle dot-des" ></i>:""
                     }
                     <p style={{paddingLeft:"10px"}}>{product.productdescription? 
                     product.productdescription.slice(1200):""}</p>
                </div>
                
                <div className="payment-info">
                    <div>
                    <div className="price">
                <i class="fa-solid fa-indian-rupee-sign rupay-sym"></i>
                <p>{product.productprice}</p>
                    </div>
                    <div className="delivery-info">
                        <p style={{color:"#565959"}}>₹ 22.43 Shipping & Import Fees Deposit to India <Link style={{color:"#007185"}}>Details</Link>  <br />
                     Delivery June 29 - July 7</p>
                     <i className="fa-solid fa-location-dot loca"></i>
                     <p className='delivery'>  Deliver to India</p>
                     <p className='in-stock'>In Stock</p>
                     <select className='fullview-select' value="">
                        <option value="">Qty:1</option>
                        <option value="2">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                     </select>
                    </div>

                    <div className="payment-btn">
                        <button  className='btn-addcart'  onClick={ ItemaddingOnmycart}>Add to Cart</button>
                        <button  className='btn-buynow' onClick={PaymentOrder}>Buy Now</button>
                    </div>

                    <div className="extra-info">
                        <p> <span>Payment</span><span style={{marginLeft:"30px",color:"#007185"}} >Secure transaction</span></p>
                        <p> <span>Ships from</span><span style={{marginLeft:"20px"}}>Amazon.com</span></p>
                        <p> <span>Sold by</span><span style={{marginLeft:"37px"}}>Amazon.com</span></p>
                        <p> <span>Returns</span></p> <div className="return-p"> Eligible for Return, Refund or Replacement within 30 days of receipt</div>
                        <p style={{color:"#007185"}}>See more</p>
                    </div>

                    <div className="check-box">
                        <input type="checkbox" /> <p> Add a gift receipt for easy <br style={{marginLeft:"10px"}} /> 
                    returns</p>
                    <hr />
                    <button className='addtolist'>Add to List</button>
                    </div>
                    </div>

                </div>
    </div>
    </div>
  )
}

export default FullViewproduct
