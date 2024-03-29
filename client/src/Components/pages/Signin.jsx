import React, { useState } from "react";
import "../style/signin.css";
import {Link, useNavigate}  from"react-router-dom"
import axios from "axios";
import { useDispatch } from "react-redux";
import {login} from "./Redux/Userslice"
import {toast} from "react-hot-toast"
const Signin = () => {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
   const [inputs,setInputs]=useState({
    phoneno:"",
    password:""
   })
// console.log(inputs);
   const HandleChange=(e)=>{
    const { name, value } = e.target;
  setInputs((preve) => {
    return {
      ...preve,
      [name]: value,
    };
  });
  }

  const UserCheckingOnserver=async()=>{
    const res=await axios.post("http://localhost:5000/login",{
      phoneno:String(inputs.phoneno),
      password:String(inputs.password),
    })
    .catch((err)=>toast(err.response.data.messgae))

    if(res){
    const Data=await res.data
    if(Data){
      dispatch(login(Data))
      toast("Login Successfully")
    }
    return Data
    // console.log(Data);
    }
    }
     
    const handlesubmit = (e) => {
      // console.log(inputs);
      e.preventDefault();
      UserCheckingOnserver().then((data)=>data?Navigate("/"):"").then((data)=>localStorage.setItem("userid",data?data.data._id:""))
    };
  return (
    <>
      <div className="signin-container">
        {/* <div className="signin-logo">

        </div> */}
        <form onSubmit={handlesubmit}>
        <div className="signin-box">
          <h1>Sign in</h1>

          <p>Email or mobile phone number</p>
          <input type="text" name="phoneno" onChange={HandleChange} />

          <p>Password</p>
          <input type="text" name="password" onChange={HandleChange} />
          <button>Continue</button>

        <div className="signin-text">
           <p>By continuing, you agree to Shopping cart <Link>Conditions of</Link> <br /><Link>Use</Link> and <Link>Privacy Notice.</Link></p>
           <span>Need help?</span>
        </div>
        </div>
        </form>


        <div className="hr-hr">
            <hr />
            New to Shopping cart?
            <hr />
            <Link to={"/signup"}> <button>Create your Shopping cart account</button></Link>
           
        </div>

        <div className="last-hr">
            <hr />
            <div className="footer-text signin-foot">

        <span>Conditions of Use</span> <span> Privacy Notice</span> <span>Help </span>
        <p>© 1996-2023, Shopping cart, Inc. or its affiliates</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
