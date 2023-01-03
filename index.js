const express=require("express")
const cors = require("cors")
const {login}=require("./routes/user")
const{FeedRoute}=require("./routes/feed")
const {connection}= require("./config/db")
require('dotenv').config()


const PORT=process.env.PORT ||8080;
const app=express()
app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("welcome to homepage")
})

 app.use("/login",login)
 app.use('/post',FeedRoute)

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Error connnecting to DB")
        console.log(err)
    }
    console.log(`listning on ${PORT}`)
})

