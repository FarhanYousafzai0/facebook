import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()







const app = express();
const PORT  = process.env.PORT || 5000;
// Middlewares:
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())
// Server:
app.listen(PORT,console.log(`Server has been connected on ${PORT}`))