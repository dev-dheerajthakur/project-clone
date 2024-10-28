import { Router } from "express";
import { getSingleUser, loginUser, registerUser, resetPass, updateUserData } from "./userController.js";
import { validateLogin, validateRegistration } from "./userValidator.js";
const userRouter = Router();
userRouter.post("/auth/register", validateRegistration, registerUser);
userRouter.post("/auth/login", validateLogin, loginUser);
userRouter.get("/auth/get/:user", getSingleUser);
userRouter.put("/auth/recover", resetPass);
userRouter.put("/auth/update/:user", updateUserData);
export { userRouter };
//# sourceMappingURL=userRouter.js.map