import bcrypt from "bcrypt";
import { userModel } from "./userModel.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const jwt_secret = process.env.JWT_SECRET_STR || "MAI_HU_DON_MAI_HU_DON....MUJHE_ROKEGA_KON>?SKLDFJ2934N23MNR09DNMIUAE90UNDAKFIH9OA8U90U9&*_+_89JH898'ASDF";
export const registerUser = async (req, res) => {
    const { name, userName, phone, email, ffUid, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await userModel.create({
            ffUid, name, userName, phone, email, password: hashedPassword
        });
        const { _id, createAt } = user;
        const token = jwt.sign({ name, userName, ffUid, _id, createAt }, jwt_secret);
        res.status(200).json({
            success: true,
            userToken: token
        });
    }
    catch (err) {
        const key = Object.keys(err.keyValue)[0];
        res.status(400).json({
            success: false,
            message: `${key} already exist!`,
        });
    }
};
export const loginUser = async (req, res) => {
    const { phone, email, password } = req.body;
    try {
        const credentialToFind = phone && { phone } || email && { email };
        const user = await userModel.findOne(credentialToFind);
        if (!user) {
            return res.status(404).json({ success: false, message: "please sign up first." });
        }
        ;
        const { _id, name, ffUid, userName, createAt } = user;
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            return res.status(404).json({ success: false, message: "password does not matched !" });
        }
        const token = jwt.sign({ name, _id, ffUid, userName, createAt }, jwt_secret);
        res.status(200).json({
            success: true,
            user: token
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
export const getSingleUser = async (req, res) => {
    const { user } = req.params;
    const { authorizaton: authToken } = req.headers;
    if (!user || !authToken) {
        return res.status(404).json({ success: false, message: "please enter all required fields." });
    }
    try {
        const verifiedToken = jwt.verify(authToken, jwt_secret);
        const verifiedUser = await userModel.findById(verifiedToken._id);
        if (!verifiedUser) {
            return res.status(404).json({ success: false, message: "user not found...." });
        }
        if (verifiedToken._id !== user) {
            return res.status(401).json({ success: false, message: "unauthorized...." });
        }
        res.status(200).json({ success: true, user: verifiedUser });
    }
    catch (err) {
        res.status(403).json({ success: false, message: "invalid user" });
    }
};
export const resetPass = async (req, res) => {
    const { phone, email, newPassword } = req.body;
    if (!phone && !email || !newPassword) {
        return res.status(404).json({ success: false, message: "please provide all fields." });
    }
    ;
    try {
        const field = phone && { phone } || email && { email };
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        const updatedUser = await userModel.updateOne(field, { $set: { password: hashedPassword } });
        if (updatedUser.matchedCount !== 1) {
            return res.status(404).json({ success: false, message: "please sign up first." });
        }
        if (updatedUser.modifiedCount !== 1) {
            return res.status(500).json({ success: false, message: "please try again." });
        }
        res.status(200).json({
            success: true,
            user: "password reset successfully, you can proceed with login."
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
export const updateUserData = async (req, res) => {
    const { user } = req.params;
    const { authorization: authToken } = req.headers;
    let { newName, newUserName, newffUid } = req.body;
    if (!newName && !newUserName && !newffUid) {
        return res.status(422).json({ success: false, message: "please provide atleast one field." });
    }
    try {
        const verifiedToken = jwt.verify(authToken, jwt_secret);
        const verifiedUser = await userModel.findById(verifiedToken._id);
        if (!verifiedUser || user !== verifiedUser?._id.toHexString()) {
            return res.status(404).json({ success: false, message: "invalid user" });
        }
        ;
        newName = newName ? newName : verifiedUser?.name;
        newUserName = newUserName ? newUserName : verifiedUser.userName;
        newffUid = newffUid ? newffUid : verifiedUser?.ffUid;
        const updatedUser = await userModel.updateOne({ _id: verifiedUser._id }, { $set: { name: newName, ffUid: newffUid, userName: newUserName } });
        if (updatedUser.modifiedCount !== 1) {
            return res.status(203).json({ success: false, message: "rest to default..." });
        }
        ;
        res.status(200).json({ success: true, message: "changed successfully." });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "invalid user"
        });
    }
};
//# sourceMappingURL=userController.js.map