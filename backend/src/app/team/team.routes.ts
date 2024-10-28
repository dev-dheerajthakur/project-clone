import { Router } from "express";
import { createTeam_V, getTeams_V } from "./team.validator.js";
import { createTeam_C, getTeams_C } from "./team.controller.js";

const teamRouter = Router();

teamRouter.post("/create", createTeam_V, createTeam_C)
teamRouter.get("/get", getTeams_V, getTeams_C)

export default teamRouter;