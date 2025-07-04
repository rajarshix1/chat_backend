import express from 'express'
import 'dotenv/config'
import { createServer } from 'http';
import { Server } from 'socket.io';
const app = express()
const httpServer = createServer(app);
let port:number | string = process.env.PORT || 3001
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
