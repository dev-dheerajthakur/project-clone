import { Schema, model } from "mongoose";
const battleSchema = new Schema({
    battleId: {
        type: Number,
        required: true,
        unique: true,
    },
    settings: {
        gameMode: {
            type: String,
            required: true,
            default: "Battle Royal"
        },
        map: {
            type: String,
            required: true,
            default: "BERMUDA"
        },
        teamMode: {
            type: String,
            required: true,
            default: "2v2"
        },
        slots: {
            type: Number,
            required: true,
            default: 24
        },
        ammo: {
            type: String,
            required: true,
            default: "Limited"
        },
        gunAttributes: {
            type: String,
            required: true,
            default: "No"
        },
        characterSkill: {
            type: String,
            required: true,
            default: "Yes"
        },
        loadout: {
            type: String,
            required: true,
            default: "Yes"
        }
    },
    expire: {
        id: { type: Number, required: true },
        year: { type: Number, required: true },
        month: { type: Number, required: true },
        date: { type: Number, required: true },
        hour: { type: Number, required: true },
        minute: { type: Number, required: true },
        second: { type: Number, required: true, default: 0 }
    },
    entry: {
        type: Number,
        required: true,
    },
    winning: {
        _1: {
            type: Number,
            required: true,
        },
        _2: {
            type: Number,
        },
        _3: {
            type: Number,
        },
    },
    teams: [
        {
            teamId: Schema.ObjectId,
            participants: [
                { type: Schema.ObjectId }
            ]
        }
    ]
}, { timestamps: true });
const battleModel = model("battles", battleSchema);
export default battleModel;
//# sourceMappingURL=battle.models.js.map