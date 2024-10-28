const welcome = (socket) => {
    return (payload) => {
        socket.join(payload.auth);
        socket.emit("welcome", { message: "welcome to battleroya.com" });
    };
};
export { welcome };
//# sourceMappingURL=join.js.map