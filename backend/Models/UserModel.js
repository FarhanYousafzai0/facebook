import moongoose from "moongoose";

const userSchema = moongoose.userSchema({

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
    type:Boolean,
    required:true
},
otp:{
    type:Number,
    default:null
}


},{timestamps:true})

const user = moongoose.model('User',userSchema);

export default user