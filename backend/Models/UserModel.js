import mongoose from "mongoose";

const userSchema = mongoose.Schema({

name:{
    type:String,
    required:true,
},
username:{
    type:String,
    required:true,
    uique:true,
},
email:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
},
gender:{
    type:String,
    required:true
},
otp:{
    type:Number,
    default:null
},
profilePic:{
    type:String,
    default:true,
}


},{timestamps:true})

const user = mongoose.model('User',userSchema);

export default user