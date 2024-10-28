import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();
const PORT = 5500;
const CORS_ORIGIN = "*";
app.use(cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.get("/", (req, res) => {
    res.json({
        id: 121,
    });
});
const server = createServer(app);
export const io = new Server(server, {
    cors: {
        origin: CORS_ORIGIN,
        methods: ["GET", "POST"],
    },
});
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}).on("error", (err) => {
    console.error("Server error:", err);
});
//# sourceMappingURL=server.js.map