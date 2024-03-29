const UserModel = require("../model/userModel");

exports.Signup=async(req,res)=>{
    try{
        const Data=req.body
        const {name,phoneno,password}=Data
        const UserData=await UserModel.create(Data)
        return res.status(201).json({data:UserData})
    }catch(err){
       return res.status(500).json({Error:err.message})
    }
}


exports.Login=async(req,res)=>{
try{
    const Data=req.body
    const {phoneno,password}=Data
    const ValidUser= await UserModel.findOne({phoneno,password})
    if(!ValidUser) return res.status(401).json({messgae:"Mobile NO/password is not correct"})
    return res.status(200).json({data:ValidUser,messgae:"Login Successfull",status:true})
        
}catch(err){
    return res.status(200).json({Error:err.message})
}
}
