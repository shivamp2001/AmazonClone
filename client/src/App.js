import './App.css';
import Home from "./Components/pages/Home"
import React from 'react';
import {Route,Routes} from "react-router-dom"
import Signup from './Components/pages/Signup';
import Signin from './Components/pages/Signin';
import AddProduct from './Components/pages/AddProduct';
import FullViewproduct from './Components/pages/FullViewproduct';
import MyCart from './Components/pages/MyCart';
import {Toaster}from "react-hot-toast"
import MyCartSupporter from './Components/pages/MyCartSupporter';
import SearchProducts from './Components/pages/SearchProducts';
import Payment from './Components/pages/Payment';
import PaymentSuccess from './Components/pages/PaymentSuccess';
// import Header from './Components/pages/Header';
function App() {
  return (
    <React.Fragment>
      <Toaster toastOptions={{
      style:{background:"rgb(255, 221, 0)",width:"200px",height:"30px",transition:"10"}
    }}/>
      <Routes>
        {/* <Route   exact path='/' element={<Header/>}/> */}


        <Route   exact path='/' element={<Home/>}/>
        <Route   exact path='/signup' element={<Signup/>}/>
        <Route   exact path='/signin' element={<Signin/>}/>
        {/* <Route   exact path='/mycart' element={<MyCart/>}/> */}
        <Route   exact path='/mycart' element={<MyCartSupporter/>}/>

        {/* product pages */}
        <Route   exact path='/addproduct' element={<AddProduct/>}/>
        <Route   exact path='/fullviewpro' element={<FullViewproduct/>}/>
        <Route   exact path='/searchproducts' element={<SearchProducts/>}/>
        
        <Route   exact path='/payment' element={<Payment/>}/>
        <Route   exact path='/paymentsuccess' element={<PaymentSuccess/>}/>
      </Routes>

    </React.Fragment>
   
  );
}

export default App;
