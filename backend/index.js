import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './Config/connetToDB.js';
import userRouter from './Routes/UserRoutes.js';
import { postRouter } from './Routes/postRoutes.js';
dotenv.config();







const app = express();
connectDB();
const PORT  = process.env.PORT || 5000;
// Middlewares:
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
// Server:
app.use('/api/user',userRouter);
app.use('/api/post',postRouter);




app.listen(PORT,console.log(`Server has been connected on ${PORT}`));