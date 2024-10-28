import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

// Use environment variables for flexibility
const PORT = 5500;
const CORS_ORIGIN = "*";

// Simplified CORS configuration
app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

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

// Consistent TypeScript interface
export interface PayloadType {
  auth: string;
  data: any;
}

// Improved error handling
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
}).on("error", (err) => {
  console.error("Server error:", err);
});



// import express from "express";
// import { createServer } from "node:http";
// import { Server } from "socket.io";
// import cors from "cors";

// const app = express();
// app.use(
//   cors({
//     origin: "*", // Allow requests from any origin
//     methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
//   })
// );

// app.get("/", (req, res) => {
//   res.json({
//     id: 121,
//   });
// });
// const server = createServer(app);

// export const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// export interface PayloadType {
//   auth: string;
//   data: any;
// }

// io.on("connection", (socket) => {
//   console.log("connected one !");
//   socket.on("helo", () => {
//     console.log("helo emited from some origin....");
//   });

//   socket.on("join", (payload:PayloadType) => {
//     socket.join(payload.auth);
//     console.log("joined to room");
//   });
// });

// const port = 5500;

// server.listen(port, () => {
//   console.log("listing on port " + port);
// });