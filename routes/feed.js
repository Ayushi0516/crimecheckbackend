const express =require('express')
const {FeedModel}=require("../model/feed.model")
const FeedRoute=express.Router()

FeedRoute.post('/feed',async(req,res)=>{
    try{
    const {Message, UserName}=req.body;
    const post=new FeedModel({Message, UserName})
    await post.save()
    res.status(201).send(post)
 }
        catch(err){
            res.send('feed added successfully')
        }
    })

    FeedRoute.get('/data',async(req,res)=>{
   
        try{
            
              const data=await FeedModel.find().sort({"createdAt":-1})
      
              res.send(data)
          
        }
        catch(err){
          res.send('invalid')
        }
      })
      module.exports = {
        FeedRoute
    }