"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBattle = void 0;
const battle_models_1 = __importDefault(require("./battle.models"));
const createBattle = async (req, res) => {
    console.log(req.body);
    try {
        const battle = await battle_models_1.default.create(req.body);
        res.json(battle);
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};
exports.createBattle = createBattle;
//# sourceMappingURL=battle.controller.js.map