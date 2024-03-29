import React, { useEffect, useState } from 'react'
import "../style/home.css"
import {Link, useNavigate} from "react-router-dom"
// import dummy from "../pages/assets/box6_image.jpg"
import axios from 'axios'
import Bookproduct from './Bookproduct'
import Popularproduct from './Popularproduct'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import heroimg from "../pages/assets/hero_image.jpg"
import heroimg2 from "../pages/assets/hero_img2.jpg"
import heroimg3 from "../pages/assets/hero_img3.jpg"
import heroimg4 from "../pages/assets/hero_img4.jpg"
import heroimg5 from "../pages/assets/hero_img5.jpg"
import heroimg6 from "../pages/assets/hero_img6.jpg"
import Header from './Header'
import { useSelector ,useDispatch} from 'react-redux'
import { searchedproductdata ,searchproductbyquery} from './Redux/ProductSlice'
const Home = () => {
    const query=useSelector((state)=>state.prductredux)
    const navigate=useNavigate()
    const dispatch=useDispatch()
      let filterqueryproduct=query.filterquery
    //   console.log(typeof filterqueryproduct);
    const [inputs,setInputs]=useState([])
    const [popularproduct,setPopularproduct]=useState([])
   const heroarry=[heroimg,heroimg2,heroimg3,heroimg4,heroimg5,heroimg6]
     const scrollright=()=>{
        var right=document.querySelector(".horizontal-main")
        right.scrollBy(-350,0)
     }
     const scrollleft=()=>{
        var left=document.querySelector(".horizontal-main")
        left.scrollBy(350,0)
     }
     const scrollup=()=>{
       window.scrollTo(0,0)
     }
     const FetchBooks=async()=>{
         const res=await axios.get("http://localhost:5000/fetchallproduct").catch((err)=>console.log(err))
         const Data=await res.data
        //    console.log(Data);
         return Data
        }

        const FetchFilterdProduct=async()=>{
        const res=await axios.get(`http://localhost:5000/filterproduct?productcategory=${filterqueryproduct}`).catch((err)=>console.log(err))
            const Data=await res.data
              console.log(Data);
            return Data
           }



        const FetchPopularproducts=async()=>{
            const res=await axios.get("http://localhost:5000/fetchpopularproducts").catch((err)=>console.log(err))
            const Data=await res.data
            //   console.log(Data);
            return Data
           }

        useEffect(()=>{
            FetchBooks().then((data)=>{setInputs(data.data)})
            FetchPopularproducts().then((data)=>{setPopularproduct(data.data)})
        },[])

        const Books=inputs.filter((pro)=>pro.productcategory==="book")
         

        const FilterproductFunction=()=>{
            FetchFilterdProduct()
            .then((data)=>dispatch(searchedproductdata(data)))
            .then(()=>navigate("/searchproducts"))
        }
    const popscrollright=()=>{
        var right=document.querySelector(".horizontal-popularproduct")
        right.scrollBy(-350,0)
     }
     
     const popscrollleft=()=>{
        var left=document.querySelector(".horizontal-popularproduct")
        left.scrollBy(350,0)
     }

     const HomeCartsProduct=(val)=>{
        console.log(val);
        filterqueryproduct="health"
        FilterproductFunction()
     }

  return (
    <div>
      {/* <header>
      <div className="navbar">
      <div className="nav-logo border">
        <Link to={"/"}><div className="logo">
                </div></Link>
                
            </div>

            <div className="nav-location border">
                <p style={{color: "#cccccc", fontSize: "0.85rem",marginLeft: "15px"}}>Deliver to</p>
                <div className="location-ico">
                    <i className="fa-solid fa-location-dot"></i>
                    <p style={{color:" #ffffff", fontsize:" 1rem", marginLeft:" 3px"}}>india</p>
                </div>
            </div>

            <div className="nav-searchbar">
                <select className="seletect-search">
                    <option value="">All</option>
                </select>
                    <input className="searchbar"  placeholder="Search Amazon"/>
                    <div className="search-ico">
                        <i className="fa-solid fa-magnifying-glass"></i> 
                    </div>
            </div>
                <Link to={"/signup"}>
            <div className="signin border">
                <p><span style={{fontSize: "0.7rem"}}>Hello, sign in</span></p>
                <p style={{fontSize: "0.85rem", fontWeight: 700}}>Account & Lists</p>
            </div></Link>

            <div className="nav-return-ord border">
                <p><span style={{fontSize: "0.7rem"}}>Return</span></p>
                <p style={{fontSize: "0.85rem", fontWeight:700}}>& Order</p>
            </div>

            <div className="nav-cart border">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
            </div>

     </div>

        panel 
     <div className="panel">
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
        </div>
      </header> */}
      <Header fun={FilterproductFunction}/>

      <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={2}
      infiniteLoop={true}
      showStatus={false}
      >
        {heroarry && heroarry.map(photo=>(
            // console.log(photo)
      <div className="hero-section">
        <img src={photo} alt="" />
        {/* <img src={heroimg2} alt="" /> */}
        
        
    </div>))}
    </Carousel>
        <div className="hero-msg">
            <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <Link > Click here to go to Shopping cart</Link></p>
        </div>
      {/** Cards 8 pic **/}
    <div className="shop-section">
    <div className="box1 box">
            <div className="box-content" onClick={()=>{ 
                filterqueryproduct="health" 
                FilterproductFunction()}
                }>
                <h2>Health & Personal Care</h2>
                <div className="box-img box-img1" >
                </div>
                <p  className='seen-more'>See More</p>
            </div>
        </div>

        <div class="box2 box"><div class="box-content"  onClick={()=>{ 
                filterqueryproduct="mobile" 
                FilterproductFunction()}
                }>
             <h2>Mobile</h2>
              <div className="box-img box-img2" >
              </div>
              <p className='seen-more'>See More</p>
            </div>
        </div>

        <div className="box3 box"><div className="box-content" onClick={()=>{ 
                filterqueryproduct="toy" 
                FilterproductFunction()}
                }>
            <h2>New arrivals in Toys</h2>
            <div className="box-img box-img3">
            </div>

            <p  className='seen-more'>See More</p>
        </div></div>

        <div className="box4 box"><div className="box-content" onClick={()=>{ 
                filterqueryproduct="women dress" 
                FilterproductFunction()}
                }>
            <h2>Discover fashion trends</h2>
            <div className="box-img box-img4" >
          </div>
          <p  className='seen-more'>See More</p>
        </div>
        </div>

        <div className="box3 box"><div className="box-content"  onClick={()=>{ 
                filterqueryproduct="shoes" 
                FilterproductFunction()}
                }>
            <h2>New Shoes</h2>
            <div className="box-img box-img5">
            </div>
            <p className='seen-more'>See More</p>
        </div></div>


        <div className="box1 box" onClick={()=>{ 
                filterqueryproduct="book" 
                FilterproductFunction()}
                }>
            <div className="box-content">
                <h2>Books</h2>
                <div className="box-img box-img6" >
                </div>
                <p  className='seen-more'>See More</p>
            </div>
        </div>

        <div className="box2 box"><div className="box-content" onClick={()=>{ 
                filterqueryproduct="health" 
                FilterproductFunction()}
                }>
             <h2>Health & Personal Care</h2>
              <div className="box-img box-img2" >
              </div>
              <p  className='seen-more'>See More</p>
            </div>
        </div>

        <div className="box3 box"><div className="box-content"  onClick={()=>{ 
                filterqueryproduct="health" 
                FilterproductFunction()}
                }>
            <h2>New arrivals in Toys</h2>
            <div className="box-img box-img3">
            </div>
            <p className='seen-more'>See More</p>
        </div></div>
    <p className='p-head'>Top Sellers in Books for you </p>
    </div>


      {/* Horizontal product Line */}
 <div className="horizontal-main">
    
     <div className="horizontal-product" >
     <button className='right-flow' onClick={scrollright}><i class="fa-solid fa-chevron-left"></i></button>
    <button className='left-flow' onClick={scrollleft}><i class="fa-solid fa-chevron-right"></i></button>
         {/* <div className="product-cart"> */}
            {
                Books && Books.map((book)=>{
                    // console.log(book);
                    return(
                        <Bookproduct image={book.productimage} bookdata={book}/>
                    )
                })
            }
          {/* <img src={dummy} alt="" />
          <img src={dummy} alt="" /> */}
         {/* </div> */}
         
     </div>
</div>


{/* popular-products */}
<div className="horizontal-popularproduct">
        <p className='popularpro-heading'>Popular items this season</p>
    <div className="popularproduct-inner">
    <button className='popular-right-flow' onClick={popscrollright}><i class="fa-solid fa-chevron-left"></i></button>
    <button className='popular-left-flow' onClick={popscrollleft}><i class="fa-solid fa-chevron-right"></i></button>
    { popularproduct && popularproduct.map((product)=>{
        // console.log(product);
       return(

           <Popularproduct productimage={product.productimage} productdata={product}/>
       )
    })

    }

    </div>

</div>

    
    {/* footer part */}
    <footer>
        <div className="foot-panel1" onClick={scrollup}>
            <p>Back to Top</p>
        </div>


        <div className="foot-panel2">
            <ul>
                <p>Get to Know Us</p>
                <Link>Blog</Link>
                {/* <Link>About Shopping cart</Link>
                <Link>Investor Relations</Link>
                <Link>Shopping cart Devices</Link>
                <Link>Amazon Science</Link> */}
            </ul>
            <ul>
                <p>Make Money with Us</p>
                <Link>Sell products on Shopping cart</Link>
                <Link>Sell on Shopping cart Business</Link>
                {/* <Link>Sell apps on Amazon</Link>
                <Link>Become an Affiliate</Link>
                <Link>Advertise Your Products</Link>
                <Link>Self-Publish with Us</Link>
                <Link>Host an Amazon Hub</Link>
                <Link>Host an Amazon Hub</Link> */}
            </ul>
            <ul>
                <p>Amazon Payment Products</p>
                <Link>Shopping cart Business Card</Link>
                {/* <Link>Shop with Points</Link>
                <Link>Reload Your Balance</Link>
                <Link>Amazon Currency Converter</Link> */}
            </ul>
            <ul>
                <p>Let Us Help You</p>
                {/* <Link>Amazon and COVID-19</Link> */}
                <Link>Your Account</Link>
                <Link>Your Orders</Link>
                <Link>Shipping Rates & Policies</Link>
                <Link>Shipping Rates & Policies</Link>
                <Link>Manage Your Content and Devices</Link>
                {/* <Link >Amazon Assistant</Link>
                <Link >help</Link> */}
            </ul>
        </div>

        <div className="foot-panel3">
            <div class="logo"></div>
        </div>

        <div className="foot-panel4">
            <div className="pages">
                <p>Conditions of Use</p>
                <p>Privacy Notice</p>
                <p>Your Ads Privacy Choices</p>
            </div>
            <div className="copyright">
                © 1996-2023, Shopping cart, Inc. or its affiliates
            </div>
        </div>
    </footer>


    </div>
  )
}

export default Home
