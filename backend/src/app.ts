import { config } from 'dotenv';
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { userRouter } from './app/users/user.routes.js';
import battleRouter from './app/battles/battle.routes.js';
config();
import cors from 'cors'
import notificatonRouter from './app/notification/notification.routes.js';
import teamRouter from './app/team/team.routes.js';
import { orderRouter } from './app/orders/order.routes.js';
import { authRouter } from './app/auth/auth.routes.js';

const app = express();
app.use(cors())

app.use(express.json({
  limit: 5000000
}), (error:any, req:Request, res:Response, next:NextFunction)=>{
  if (error) {
    return res.status(400).json({ 
      success: false,
      error
    });
  }
  next();
});

app.use("/user", userRouter );
app.use("/battle", battleRouter)
app.use("/notification", notificatonRouter)
app.use("/team", teamRouter)
app.use("/order", orderRouter)
app.use("/auth", authRouter)

app.all('*', (req, res)=>{
  res.status(404).json({
    success: false,
    message: "route not found!"
  })
});

app.use((err:any, req:any, res:any, next:any)=>{
  if(err){
    return res.status(500).json({
      success: false,
      message: "internal server error!"
    })
  }
});



export default app;