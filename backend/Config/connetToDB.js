import mongoose from "mongoose"
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config()


const connectDB = async(req,res)=>{
    await mongoose.connect(process.env.DB)
    console.log(`Database has been connected on ${process.env.DB.bgMagenta}`)
}

export default connectDB