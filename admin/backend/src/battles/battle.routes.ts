import { Router } from "express";
import { validateBattle } from "./battle.validator";
import { createBattle } from "./battle.controller";

const battleRouter = Router();

battleRouter.post("/create", createBattle)

export default battleRouter;