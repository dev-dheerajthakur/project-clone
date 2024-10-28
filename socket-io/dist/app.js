import { io } from "./server.js";
import { welcome } from "./app/events/welcome.js";
import { joinToRoom } from "./app/events/joinToRoom.js";
io.on("connection", (socket) => {
    socket.on("dis", async (payload) => {
        await socket.leave(payload);
    });
    socket.on("welcome", welcome(socket));
    socket.on("joinToRoom", joinToRoom(socket));
});
//# sourceMappingURL=app.js.map