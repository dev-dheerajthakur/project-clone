import { Router } from "express";
import { createOrder_C } from "./order.controllers.js";
import { createOrder_V } from "./order.validator.js";

const orderRouter = Router();

orderRouter.post("/create", createOrder_V, createOrder_C)

export { orderRouter }