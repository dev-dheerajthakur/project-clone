import { Socket } from "socket.io";
import { io } from "../../server.js";

const joinToRoom = (socket: Socket) => {
  
  return (payload: any) => {
    
    socket.join(payload.members);
    io.to(payload.members).emit("message", {
      message: " ki re babu kuch to chl rha hai ....."
    })
  };
};

export { joinToRoom };