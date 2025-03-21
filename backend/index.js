import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './Config/connetToDB.js';
dotenv.config()







const app = express();
connectDB()
const PORT  = process.env.PORT || 5000;
// Middlewares:
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())
// Server:
app.listen(PORT,console.log(`Server has been connected on ${PORT}`))