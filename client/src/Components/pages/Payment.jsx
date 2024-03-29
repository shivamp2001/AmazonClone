import React from 'react'
import { Link } from 'react-router-dom'
import amazonlogo from "../pages/assets/cart_img4.jpg"
import "../style/payment.css"
import debit1 from "../pages/assets/debit-1.jpeg"
import debit2 from "../pages/assets/debit-2.jpeg"
import debit3 from "../pages/assets/debit-3.jpeg"
import debit4 from "../pages/assets/debit-4.jpeg"
import debit5 from "../pages/assets/debit-5.jpeg"
import debit6 from "../pages/assets/debit-6.jpeg"
import debit7 from "../pages/assets/debit-7.jpeg"
import debit8 from "../pages/assets/debit-8.jpeg"
import primeadd from "../pages/assets/primeadd-img.jpg"
import productimg from "../pages/assets/mobile2.jpg"
import amazondistributeimg from "../pages/assets/payment-distribute-img.png"
import { useSelector } from 'react-redux'
import PaymentSupporter from './PaymentSupporter'
import axios from "axios"


const Payment = () => {
  const MycartItems= useSelector((state)=>state.prductredux)
  const Product=MycartItems.mycart

  const UserInfo=useSelector((state)=>state.userredux)
  console.log(UserInfo.name);

  // geting live date
  let mydate= new Date('2023-06-26');
  let month=mydate.getMonth();
  let date=mydate.getDate();
  let year=mydate.getFullYear();

  let months=["jan","feb","march","april","may","jun","july","ags","sep","oct","nov","dec"]
  let FullDate=`${date} ${months[month]} ${year}`

  // paymentHandler final
  const PaymentHandler =async()=>{
     const {data:{key}}=await axios.get("http://localhost:5000/getkey");

  const {data:{order}}=await axios.post("http://localhost:5000/payment",{
    amount:(Buyproduct?Buyproduct.productprice:totalPrice)
  })
  // console.log(order.id);
  // console.log(order);

  const options = {
    key, 
    amount: order.amount,
    currency: "INR",
    name: "amazon",
    description: "Test Transaction",
    image: "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png",
    order_id: order.id, 
    callback_url: "http://localhost:5000/paymentvarification",
    prefill: {
        name: UserInfo.name,
        email: UserInfo.name+"@gmail.com",
        contact: UserInfo.phoneno
    },
    notes: {
        address: "Razorpay Corporate Office"
    },
    theme: {
        color: "#3399cc"
    }
  };
  const razor = new window.Razorpay(options);
razor.open();
  }
 

  // single payment product direct to payment page
  const Buyproduct=useSelector((state)=>state.prductredux.paymentcart);
    // console.log();
  const totalPrice=Product.reduce((acc,curr)=>acc+parseInt(curr.total),0)

  return (
    <div className='payment-container'>
     <div className="payment-header">
     <Link to={"/"}>
        <div className="payment-logo">
             <img src={amazonlogo} alt="" />
        </div>
     </Link>

     <div className="payment-heading">
     <h1>Checkout</h1>
     </div>

     <div className="lock-icon">
     <i class="fa-solid fa-lock" ></i>
     </div>

     {/* second part */}
     </div>

     <div className="second-part">
        <div className="payment-address">
          <h3>1   Select a delivery address</h3>

           {/* First div */}
          <div className="payment-div1" >
             <p style={{margin:"15px 0px 0px 15px",fontSize:"20px",fontWeight:"700"}}>Your addresses</p>
             <hr className='div1-hr'/>

             <div className='radio-btn'>
              <input type="radio" /> <span>Sunanda penshanwar Jay Bhavani Nagar nanded, Nanded, MAHARASHTRA, 431605, India, Phone number: 9022633068 Edit address | Add delivery instructions</span>
             </div>

              <p className='add-address-btn'> <i class="fa-solid fa-plus"></i><span style={{color:"#007185"}}> Add a new address</span></p>

              <div className="div1-end">
               
               <button>Use this address</button>

              </div>
          </div>

          {/* Second div */}
           
           <h3 style={{marginTop:"10px"}}>2 Select a payment method</h3>
          <div className="payment-div2">
          <p style={{margin:"15px 0px 0px 15px",fontSize:"20px",fontWeight:"700"}}>Your available balance</p>
          <hr className='div1-hr'/>
          <i class="fa-solid fa-plus add-address-btn" style={{margin:"25px",fontSize:"20px"}}></i>
          <input type="text" placeholder='Enter Code' />
          <button className='apply'>Apply</button>
          <h3 style={{color:"black",marginLeft:"17px"}}>Another payment method</h3>
          <hr className='div1-hr'/>

          <div className="payment-options">
            <div className="debitcart-div">
              <input type="radio" /><span className='radio-span'>Credit or debit card</span>

              <div className="debit-cards">
                <img src={debit1} alt="" className='debit-img' />
                <img src={debit2} alt="" className='debit-img' />
                <img src={debit3} alt="" className='debit-img' />
                <img src={debit4} alt="" className='debit-img' />
                <img src={debit5} alt="" className='debit-img' />
                <img src={debit6} alt="" className='debit-img' />
                <img src={debit7} alt="" className='debit-img' />
              </div>
              <span><i class="fa-solid fa-plus add-address-btn" style={{marginLeft:"50px",fontSize:"20px"}}></i></span><img src={debit8} alt="" className='debit-img1'  /><span style={{fontSize:"15px",marginLeft:"5px",color:"#007185"}}>Enter card details <i style={{fontSize:"8px",lineHeight:"10px"}} class="fa-regular fa-greater-than"></i></span> <span className='info'>Amazon accepts all major credit & cards</span>
            </div>
            
             {/* thrid div */}
            <div className="debitcart-div2">
            <input type="radio" /><span className='radio-span-div2'>Net Banking</span>

            <select name="" id="" >
              <option value="">Choose an Option</option>
              <option value="">Axis Bank</option>
              <option value="">HDFC Bank</option>
              <option value="">ICIC Bank</option>
              <option value="">Kotak Bank</option>
              <option value="">State Bank of India</option>
              <option value="">Choose an Option</option>
            </select>

            </div>
             
             {/* fourth div */}
            <div className="debitcard-div3">
            <input type="radio" /><span className='radio-span'>Other UPI Apps</span>
            <p>Please enter your UPI ID</p>
            <input type="text" style={{width:"149px",height:"23px",left:"44px",padding:"2px 7px",backgroundColor:"white"}} placeholder='Ex.MobileNumber@upi'/>
            <button>Verify</button>
            </div>

            {/* fifth div */}
            <div className="debitcard-div4">
              <input type="radio" /><span className='radio-span' style={{top:"7px"}}>EMI</span>

              <select name="" id="" >
              <option value="">Select EMI options</option>
              <option value="">Add a new cart</option>
            </select>

            {/* <div className="debit-cards" style={{marginTop:"50px"}}>
                <img src={debit1} alt="" className='debit-img' />
                <img src={debit2} alt="" className='debit-img' />
                <img src={debit3} alt="" className='debit-img' />
                <img src={debit4} alt="" className='debit-img' />
                <img src={debit5} alt="" className='debit-img' />
                <img src={debit6} alt="" className='debit-img' />
                <img src={debit7} alt="" className='debit-img' /><br />
                <span><i class="fa-solid fa-plus add-address-btn" style={{marginLeft:"50px",fontSize:"20px"}}></i></span><img src={debit8} alt="" className='debit-img1'  /><span style={{fontSize:"15px",marginLeft:"5px",color:"#007185"}}>Enter card details <i style={{fontSize:"8px",lineHeight:"10px"}} class="fa-regular fa-greater-than"></i></span> <span className='info'>Amazon accepts all major credit & cards</span>
              </div> */}

            </div>

            {/* sixth div */}
            <div className="debitcard-div5">
            <input type="radio" /><span className='radio-span' style={{top:"7px"}}>Cash on Delivery/Pay on Delivery</span> <span className='cash-delivery'>Unavailable for this payment</span>
            </div>

              {/* seventh and last footel div */}
                  <div className='debitcard-div6'>
                       <button>Use this payment method</button>
                     </div>
          </div>
          </div>


          {/* third part-payment */}
          <h3 style={{marginTop:"18px"}}>3 Review items and delivery</h3>
          <div className=' Review-items-and-delivery'>
                  <div className='prime-advatice'>
                         <img src={primeadd} alt="" />

                         <div> <span><span style={{color:"#c45500"}}>shivam, get FREE delivery by Wednesday on this order.</span><span style={{color:"#007600"}}>With Shopping cart, you can enjoy unlimited free, fast delivery, exclusive access to deals & more for 1 year.</span> <br /><span><i class="fa-solid fa-angles-right" style={{fontSize:"8px"}}></i> <Link style={{borderBottom:"1px solid #007185"}}> Join Prime for just ₹1,499 per year</Link></span> </span></div>
                        
                  </div>
                    <span style={{position:"relative",bottom:"27px",marginLeft:"10px",fontWeight:"700",fontSize:"18px"}}>Delivery date: <span style={{color:"#007600"}}> {FullDate}</span> </span><br />
              <span style={{position:"relative",bottom:"25px",left:"10px",fontSize:"14px"}}>If you order in the next 20 hours and 11 minutes ( <Link>Details</Link> ) <br /> Items dispatched by Amazon</span> 

              {/* <div className="product-img-info">
                <div>
                <img src={productimg} alt="" />
                </div>

                <div className='product-informaion'>
                  <p className='information-p'>Tecno Spark 8 Pro (Interstellar Black, 4GB RAM,64GB Storage) | 48MP Triple Camera | 33W Fast Charger</p>
                  <p style={{color:"#B12704",fontWeight:"700",fontSize:"15px",marginTop:"3px"}}>₹8,199.00</p>
                  <img src={amazondistributeimg} alt="" />

                  <select name="" id="" className='mycart-select' style={{top:"20px",right:"65px",backgroundColor:"white"}}>
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

                </div>      */}
                
                {Buyproduct? <PaymentSupporter product={Buyproduct}/>:
                Product && Product.map((product)=>{
                  // console.log(product);
                    return(
                        <PaymentSupporter product={product}/>
                           )
                       })
                    }
          </div>
         
        </div>

       


        <div className="grandtotal">
          <button onClick={PaymentHandler}>Process to Buy</button>
           <hr className='payment-hr1' />

           <p style={{marginTop:"50px",marginLeft:"15px",fontSize:"19px",fontWeight:"600"}}>Order Summary</p>
           <p className='p-tag' style={{marginTop:"20px"}}> Items: <span style={{marginLeft:"140px"}}>₹{Buyproduct?Buyproduct.productprice:totalPrice}</span></p>
           <p className='p-tag'>Delivery: <span className='value2'>₹40</span></p>
           <p className='p-tag'>Total: <span style={{marginLeft:"141px"}} >₹{Buyproduct?Buyproduct.productprice+40:totalPrice+40}</span></p>
           <p className='p-tag'>Promotion Applied: <span style={{marginLeft:"69px"}}>-₹80</span></p>

           <hr className='payment-hr2'/>

           <p className='total-price'>Order Total: <span style={{marginLeft:"25px"}}>₹{Buyproduct?Buyproduct.productprice-40:totalPrice-40}.00</span></p>
            
            <hr className='payment-hr1' style={{top:"10px"}}/>
           <div className="cost-calculate">
            <span><Link>How are delivery costs calculated?</Link></span>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Payment
