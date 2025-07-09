import express from 'express'
import 'dotenv/config'
import { createServer } from 'http';
import { Server } from 'socket.io';
const app = express()
const httpServer = createServer(app);
let port:number | string = process.env.PORT || 3001
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/')
.then(e=>console.log("Connected to mongodb"))
.catch((error:any)=>console.log("Error connecting"))

import { userRouter } from './routes/userRouter';
import bodyParser from 'body-parser';

app.use(bodyParser.json())
app.use('/user', userRouter)
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  transports: ['websocket'] 
});
import './socket/socket';

httpServer.listen(port, ()=>{
    console.log("Message service running on port ", port)
})
