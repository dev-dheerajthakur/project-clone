import mongoose, { model, Schema } from "mongoose";
const teamSchema = new Schema({
    admin: {
        type: String,
        ref: "users",
        required: true,
        unique: true
    },
    teamName: {
        type: String,
        required: true,
        unique: true
    },
    members: [
        {
            type: String,
            ref: "users",
            required: true
        }
    ],
    upcomingContest: [
        {
            battle: mongoose.Schema.ObjectId,
            leader: {
                type: String,
                required: true,
            },
            members: [
                {
                    type: String,
                    ref: "users",
                    required: true
                }
            ],
            _id: false
        }
    ]
});
export const teamModel = model("teams", teamSchema);
//# sourceMappingURL=team.model.js.map