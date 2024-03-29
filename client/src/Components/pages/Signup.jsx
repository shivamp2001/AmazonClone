import React, { useState } from 'react'
import "../style/signup.css"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
const Signup = () => {
  const Navigate=useNavigate()
 const[inputs,setInputs]=useState({
  name:"",
  phoneno:"",
  password:"",
  repassword:""
 })
  const HandleChange=(e)=>{
    const { name, value } = e.target;
  setInputs((preve) => {
    return {
      ...preve,
      [name]: value,
    };
  });
  }

  const AdduserOnserver=async()=>{
    const res=await axios.post("http://localhost:5000/signup",{
      name:String(inputs.name),
      phoneno:String(inputs.phoneno),
      password:String(inputs.password),
      repassword:String(inputs.repassword),
    }).catch((err)=>console.log(err))
    
    const Data=await res.data
    // console.log(Data);
    return Data
    }

  const handlesubmit = (e) => {
    // console.log(inputs);
    e.preventDefault();
    AdduserOnserver().then(()=>Navigate("/signin"))
  };
  return (
    <>
    <div className='container'>
      {/* <div className="ame-logo">
      </div> */}
      <form onSubmit={handlesubmit}>
      <div className="signup-box">
       <h1>Create account</h1>
        <label htmlFor="">Your name</label>
        <input type="text" placeholder='First and last name' name='name' onChange={HandleChange} />

        <label htmlFor="">Mobile number or email</label>
        <input type="text" name='phoneno'onChange={HandleChange} />

        <label htmlFor="">Password</label>
        <input type="text"placeholder='At least 6 characters' name='password' onChange={HandleChange} />
        <div className="i-con">
        <i class="fa-solid fa-info"></i>
        <p>Passwords must be at least 6 characters.</p>
        </div>
        {/* <i class="a-icon a-icon-alert"></i> */}
        <label htmlFor="">Re-enter password</label>
        <input type="text" name='repassword' onChange={HandleChange}/>
            <button>Continue</button>

            <div className="text">
                <p>By creating an account, you agree to Shopping cart</p>
                <p> <samp><Link>Conditions of Use</Link> </samp>and <samp><Link>Privacy Notice</Link></samp> </p>
            </div>

            <div className="text2">
                <p>Already have an account?  <samp><Link to={"/signin"}>Sign in</Link> </samp></p>
                <p>Buying for work? <Link>Create a free business account</Link></p>
            </div>
      </div>
      </form>

    </div>

      <div className="signup-foot">
        <hr />
        <div className="footer-text">

        <span>Conditions of Use</span> <span> Privacy Notice</span> <span>Help </span>
        <p>© 1996-2023, Shopping cart, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  )
}

export default Signup
