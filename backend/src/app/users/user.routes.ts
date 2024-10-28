import { Router } from "express";
import { findUser_C, getAllFriends_C, getPersonalInfo_C, getSampleUsers_C, getSingleUser, loginUser, registerUser, resetPass, updateUserData } from "./userController.js";
import { findUser_V, getAllFriends_V, getPersonalInfo_V, validateLogin, validateRegistration } from "./userValidator.js";

const userRouter = Router();

userRouter.post("/auth/register" , validateRegistration, registerUser)
userRouter.post("/auth/login",validateLogin, loginUser)
userRouter.post("/auth/get/:user", findUser_V, findUser_C)
userRouter.get("/auth/get", getPersonalInfo_V, getPersonalInfo_C)
userRouter.get("/get-friends/all",getAllFriends_V, getAllFriends_C)
userRouter.get("/get/sample", getSampleUsers_C)
// userRouter.get("/auth/get/:user", getSingleUser)
// userRouter.put("/auth/recover", resetPass)
// userRouter.put("/auth/update/:user", updateUserData)

export { userRouter }