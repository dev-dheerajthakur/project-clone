"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const battle_routes_1 = __importDefault(require("./battles/battle.routes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: 5000000 }), (error, req, res, next) => {
    if (error) {
        return res.status(400).json({
            success: false,
            error
        });
    }
});
app.use("/battle", battle_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map