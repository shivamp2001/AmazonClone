import {configureStore}from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice"
import  userSlice  from "./Userslice";
export  default configureStore({
    reducer:{
        prductredux:ProductSlice,
        userredux:userSlice
    }
});