const mongoose = require("mongoose")

const feedSchema = new mongoose.Schema({
    Message : {type : String, required : true},
    UserName : {type : String, required : true},
   
    
},{timestamps:true})

const FeedModel = mongoose.model("feed", feedSchema)


module.exports = {
    FeedModel
}