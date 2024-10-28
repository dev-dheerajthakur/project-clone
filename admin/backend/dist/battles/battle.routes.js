"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const battle_controller_1 = require("./battle.controller");
const battleRouter = (0, express_1.Router)();
battleRouter.post("/create", battle_controller_1.createBattle);
exports.default = battleRouter;
//# sourceMappingURL=battle.routes.js.map