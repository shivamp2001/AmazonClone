import {createSlice}from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"


let initialState={
    productinfo:{},
    mycart:[],
    filterquery:{},
    searchedproducts:[],
    searchfunction:{},
    paymentcart:[]
}

export let productslice=createSlice({
     name:"product",
     initialState,
     reducers:{
        setDataproduct:(state,action)=>{
              state.productinfo=action.payload
            // console.log(action.payload);
        },
        addmycartitem:(state,action)=>{
            // console.log(action.payload);
            let ckeckitemincart=state.mycart.some(pro=>pro._id===action.payload._id)
            if(ckeckitemincart){
                toast("Item Already in Cart")
            }else{
                // toast("Item Add in Cart")
                let total=action.payload.productprice
                state.mycart=[...state.mycart,{...action.payload,qty:1,total:total}]
            }
            // console.log(state.mycart);
        },
        deletecartitem:(state,action)=>{
            // toast("Item is Deleted")
            let index=state.mycart.findIndex((pro)=>pro._id===action.payload)
            state.mycart.splice(index,1)
            // console.log(index);
            // console.log(action.payload);
        },

        increaseqty:(state,action)=>{
            // console.log(action.payload.product);
            let index=state.mycart.findIndex((pro)=>pro._id===action.payload.product._id)
            let qty=state.mycart[index].qty
            let qtyInc=parseInt(action.payload.select)+qty
            state.mycart[index].qty=qtyInc
            
            let price=state.mycart[index].productprice
            let total=price*qtyInc
            state.mycart[index].total=total
            // console.log(state.mycart[index]);
            
        },
        searchproductbyquery:(state,action)=>{
            state.filterquery=action.payload.productname
        //   console.log(action.payload.productname);
        },

        searchedproductdata:(state,action)=>{
           state.searchedproducts=action.payload.data
        },
        paymentcart:(state,action)=>{
        //   console.log(action.payload);
        state.paymentcart=action.payload
        },
        emptypaymentcart:(state,action)=>{
    state.paymentcart=""
        }
     }

})

export const {setDataproduct,addmycartitem,deletecartitem,increaseqty,searchproductbyquery,searchedproductdata,paymentcart,emptypaymentcart}=productslice.actions

export default productslice.reducer