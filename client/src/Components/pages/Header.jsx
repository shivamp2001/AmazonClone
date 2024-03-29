import React, { useState } from 'react'
import "../style/home.css"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { searchproductbyquery } from './Redux/ProductSlice'
import { logout } from './Redux/Userslice'
import { toast } from 'react-hot-toast'

const Header = ({fun}) => {
    // console.log(fun);
    const MycartItems= useSelector((state)=>state.prductredux)
    const UserInfo=useSelector((state)=>state.userredux)
    const[showModal,setShowModal]=useState(false)
    const dispatch=useDispatch();
   const Product=MycartItems.mycart


   const [filterproduct,setFilterproduct]=useState({
    productname:""
   });


   const Handlechange=(e)=>{
    const { name, value } = e.target;
    setFilterproduct((preve) => {
      return {
        ...preve,
        [name]: value.toLowerCase(),
      };
    });
   }

   const HandleLogout=()=>{
    dispatch(logout());
    toast("Logout successfully");
    setShowModal(false)
   }
   
   const Modal=()=>{
    return<>
    <div style={{position:"relative",
    top:50,left:-25,
    height:50,width:110,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    display:"flex"}} className='modal'  onClick={()=>setShowModal(false)}>
    <button style={{width:80,height:25,backgroundColor:"rgb(255, 221, 0)"}} onClick={HandleLogout}>Logout</button>
    </div>
    </>
   }
   

   dispatch(searchproductbyquery(filterproduct))
  return (
    <>
    <div ></div>
    <div >
      <header>
      <div className="navbar">
      <div className="nav-logo border">
        <Link to={"/"}><div className="logo">
                </div></Link>
                
            </div>

            <div className="nav-location border">
                <p style={{color: "#cccccc", fontSize: "0.85rem",marginLeft: "10px"}}>Deliver to</p>
                <div className="location-ico">
                    <i className="fa-solid fa-location-dot head-loca" ></i>
                    <p style={{color:" #ffffff", fontsize:" 1rem", marginLeft:" 3px"}}>india</p>
                </div>
            </div>

            <div className="nav-searchbar">
                <select className="seletect-search">
                    <option value="">All</option>
                    {/* <option value="book">book</option>
                    <option value="shoes">shoes</option> */}
                </select>
                {/* Search bar */}
                    <input className="searchbar"   placeholder="Search Amazon" name='productname' onChange={Handlechange}/>
                    <div className="search-ico" onClick={fun}>
                        <i className="fa-solid fa-magnifying-glass" ></i> 
                    </div>
            </div>
                <Link to={UserInfo._id?"": "/signin"}>
            <div className="signin border" style={{position:"absolute",top:7,left:1100}}
             onClick={()=>setShowModal(true)}>
                <p><span style={{fontSize: "0.7rem",color:"white"}}>Hello,{ UserInfo.name?UserInfo.name:"sign in"}
                </span></p>
                <p style={{fontSize: "0.85rem", fontWeight: 700,color:"white"}}>Account & Lists</p>
            </div>
           
            </Link>
            {showModal && <Modal/> }
            {/* <div className="logout" >
              <button>Logout</button>
            </div> */}

            <div className="nav-return-ord border" >
            {/* style={{position:"absolute",left:"1200px"}} */}
                <p><span style={{fontSize: "0.7rem"}} >Return</span></p>
                <p style={{fontSize: "0.85rem", fontWeight:700}} onClick={()=>setShowModal(true)}>& Order</p>
            </div>
             <Link to={"/mycart"} >
            <div className="nav-cart border" style={{color:"white"}}>
                <i className="fa-solid fa-cart-shopping"></i>
                {showModal?"":

             <div className='mycart-product-length'style={{position:"relative",left:17,top:3}} >{ Product.length}</div>
                }
                <p style={{color:"transparent"}}>Cart</p>
            </div>
            </Link>
            
            
     </div>

        {/* panel  */}
     {/* <div className="panel">
            <div className="panel-all border">
                <i className="fa-solid fa-bars"></i>
                All
            </div>

            <div className="panel-opstion">
                <p className="border">Today's Deals </p>
                <p className="border">Customer Service</p>
                <p className="border">Registry</p>
                <p className="border">Gift Cards</p>
                <p className="border">Sell</p>
            </div>

            <div className="panel-deals border">
                Shop great deals now
            </div>
        </div> */}
      </header>
    </div>
    
    </>
  )
}

export default Header
