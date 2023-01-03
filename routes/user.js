const express =require('express')
const {UserModel}=require("../model/user.model")
const login=express.Router()

login.post("/",async(req,res)=>{
    try{
        const {UserName}=req.body
        const login=new UserModel({UserName})
        await login.save()
        res.status(201).send(" logged in successfully")
    }
    catch(error){
        res.sendStatus(401).send('error')
    }


})
module.exports = {
    login
}
