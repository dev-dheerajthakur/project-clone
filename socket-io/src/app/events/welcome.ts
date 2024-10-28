import { Socket } from "socket.io";
import { PayloadType } from "../../server.js";

const welcome = (socket: Socket) => {
  return (payload: PayloadType) => {
    socket.join(payload.auth);
    socket.emit("welcome", { message: "welcome to battleroya.com" });
  };
};

export { welcome };
