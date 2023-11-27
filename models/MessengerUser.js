const mongoose = require('mongoose')
const Schema = mongoose.Schema



const MessngerUserSchema = new Schema({
    fullName : {
        required : true,
        type : String,
        min : 5
    },
    email : {
        required : true,
        type : String,        
    },
    password : {
        required : true,
        type : String,
        min : 6
    },
    imageUrl : String,

})


const mesUsers = mongoose.model("messengerUsers" , MessngerUserSchema)
module.exports = mesUsers