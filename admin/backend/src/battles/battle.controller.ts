import { Request, Response } from "express";
import battleModel from "./battle.models";

export const createBattle = async (req: Request, res: Response)=>{
  console.log(req.body)
  try {
    const battle = await battleModel.create(req.body)
    res.json(battle)
  } catch (err:any) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
};