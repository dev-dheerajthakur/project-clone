import { config } from 'dotenv';
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import battleRouter from './battles/battle.routes';

config();

const app = express();

app.use(express.json({limit: 5000000}), (error: any, req: Request, res:Response, next: NextFunction)=>{
  if(error){
    return res.status(400).json({
      success: false,
      error
    });
  }
})


app.use("/battle", battleRouter)

export default app;