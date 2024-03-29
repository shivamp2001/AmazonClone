import {createSlice}from "@reduxjs/toolkit";

let initialState={
    phoneno: "",
    name: "",
    password: "",
    _id:""
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            // console.log(action.payload.data);
            state._id=action.payload.data._id
            state.phoneno=action.payload.data.phoneno
            state.name=action.payload.data.name
            state.password=action.payload.data.password
            console.log(action.payload.data);
        },

        logout:(state,action)=>{
            state._id=""
            state.phoneno=""
            state.name=""
            state.password=""
            // state.image=""
        }
    }
})
export const {login,logout} =userSlice.actions
export default userSlice.reducer