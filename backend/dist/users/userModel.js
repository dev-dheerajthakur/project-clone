import { Schema, model } from "mongoose";
const friendsLimit = (val) => {
    return val.length <= 200;
};
const closeFriendsLimit = (val) => {
    return val.length <= 10;
};
const userSchema = new Schema({
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    name: {
        type: String,
        required: [true, "please enter your name...."],
    },
    ffUid: {
        type: Number,
        required: [true, "please enter your free fire uid...."]
    },
    profile: {
        type: String,
        default: "./default/profile.png"
    },
    userName: {
        type: String,
        required: [true, "please choose a username for your account...."],
        unique: true
    },
    phone: {
        type: Number,
        unique: true,
        required: [true, "Please enter your phone number...."],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "please enter your email...."]
    },
    friends: {
        closeFriends: {
            type: [{ type: Schema.ObjectId, ref: "users" }],
            validate: [closeFriendsLimit, "max no. of close friends reached"]
        },
        allFriends: {
            type: [{ type: Schema.ObjectId, ref: "users" }],
            validate: [friendsLimit, "max no. of friends reached."]
        }
    },
    upcomingBattles: [{ type: Schema.ObjectId, ref: "battles" }],
    password: {
        type: String,
        required: [true, "please choose a password...."]
    }
}, { timestamps: true });
export const userModel = model("users", userSchema);
//# sourceMappingURL=userModel.js.map