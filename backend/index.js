import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import connectDB from './Config/connetToDB.js';
import userRouter from './Routes/UserRoutes.js';
import { postRouter } from './Routes/postRoutes.js';
import { PaymentRouter } from './Routes/PaymentRoute.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const My_Server = http.createServer(app);

// Setup Socket.IO with proper CORS
const io = new Server(My_Server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Socket.IO events
io.on('connection', (socket) => {
socket.on('Messenger',(data)=>{

socket.broadcast.emit('received-message',data);





})

socket.on('calling',(data)=>{
  socket.broadcast.emit("calling-received",data)
  console.log(data)
})


socket.on('Accept-calling',(data)=>{

  console.log(data)
  socket.broadcast.emit('calling-accept',data);
})

});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/payment',PaymentRouter);
// Start Server
My_Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
