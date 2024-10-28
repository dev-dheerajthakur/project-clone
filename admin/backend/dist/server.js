"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 8000;
const DB_CONN_STR = process.env.ATLAS_CONN_STR || "mongodb://localhost:27017";
mongoose_1.default.connect(DB_CONN_STR).then(() => {
    console.log("db connected successfully....");
});
app_1.default.listen(port, () => {
    console.log("admin backend listing on port " + port);
});
//# sourceMappingURL=server.js.map