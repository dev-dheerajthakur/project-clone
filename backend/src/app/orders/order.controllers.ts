import { Request, Response } from "express";
import orderModel from "./order.model.js";

export const createOrder_C = async (req: Request, res: Response)=>{
  orderModel.create({
    createBy: "6643327e1681e8e7feb868ed",
    product: "66837ea9f6e890eb311de5b4",
    members: ["mafia", "khusut", "fusut"]
  })
};