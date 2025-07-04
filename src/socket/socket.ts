import { io } from "..";

io.on("connection", (socket) => {
    console.log("client connected", socket.id); 
    socket.on("message", (message) => {
        console.log(message)
    })
    socket.on("disconnect", () => {
        console.log(socket.id, ' disconnected')
    })

});
