"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBattle = void 0;
const zod_1 = __importDefault(require("zod"));
const validateBattle = (req, res, next) => {
    const schema = zod_1.default.object({
        battleId: zod_1.default.number({ message: "battleId Required!" }).optional(),
        settings: zod_1.default.object({
            gameMode: zod_1.default.literal("Battle Royal" || "Clash Squad", { message: "gameMode needs specific value!" }).optional(),
            map: zod_1.default.literal("BERMUDA" || "PURGATORY" || "KALAHARI" || "ALPINE" || "NEXTERA" || "BERMUDA REMASTER", { message: "map needs specific value!" }).optional(),
            teamMode: zod_1.default.literal("1v1" || "2v2" || "4v4", { message: "teamMode needs specific value!" }).optional(),
            slot: zod_1.default.number(),
            ammo: zod_1.default.literal("Limited" || "UN-Limited", { message: "ammo needs specific value!" }).optional(),
            gunAttributes: zod_1.default.literal("Yes" || "No", { message: "gunAttributes needs specific value!" }).optional(),
            characterSkill: zod_1.default.literal("Yes" || "No", { message: "characterSkill needs specific value!" }).optional(),
            loadout: zod_1.default.literal("Yes" || "No", { message: "loadout needs specific value!" }).optional(),
        }).optional(),
        expire: zod_1.default.object({
            id: zod_1.default.number(),
            year: zod_1.default.number(),
            month: zod_1.default.number(),
            date: zod_1.default.number(),
            hour: zod_1.default.number(),
            minute: zod_1.default.number(),
            second: zod_1.default.number()
        }),
        entry: zod_1.default.number(),
        winning: zod_1.default.object({
            _1: zod_1.default.number(),
            _2: zod_1.default.number(),
            _3: zod_1.default.number()
        }),
        teams: zod_1.default.array(zod_1.default.object({
            teamId: zod_1.default.string(),
            participants: zod_1.default.array(zod_1.default.string())
        })).optional()
    }, { message: "fields required!" });
    const validSchema = schema.safeParse(req.body);
    if (!validSchema.error) {
        return next();
    }
    ;
    res.status(400).json({
        success: false,
        message: validSchema.error
    });
};
exports.validateBattle = validateBattle;
//# sourceMappingURL=battle.validator.js.map