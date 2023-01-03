 const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    UserName : {type : String, required : true, min:2 ,max:9 },
   
    
})

const UserModel = mongoose.model("user", userSchema)


module.exports = {
    UserModel
}