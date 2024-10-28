import { io } from "../../server.js";
const joinToRoom = (socket) => {
    return (payload) => {
        socket.join(payload.members);
        io.to(payload.members).emit("message", {
            message: " ki re babu kuch to chl rha hai ....."
        });
    };
};
export { joinToRoom };
//# sourceMappingURL=joinToRoom.js.map