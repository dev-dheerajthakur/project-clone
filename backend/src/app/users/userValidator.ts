import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import z from 'zod';

const validateRegistration = (req:Request, res:Response, next:NextFunction)=>{
  
  const schema = z.object({
    name: z.string({message: "name required!"}).min(3, {message: "name must be min 3 character long."}).max(20, {message: "name must be less then 20 character."}),
    userName: z.string({message: "userName required!"}).min(3).max(24),
    // phone: z.number({message: "Invalid phone"}).min(999999999, {message: "Invalid Phone"}).max(9999999999, {message: "Invalid phone!"}),
    email: z.string({message: "email required!"}).email({message: "invaild email"}),
    ffUid: z.number({message: "Invalid ffUid!"}),
    otp: z.number({message: "Invalid Otp!"}),
    ffUserName: z.string({message: "Invalid ffUserName!"}),
    password: z.string({message: "password required!"}).min(8, {message: "password must be greater than 8 character"}).max(24, {message: "password must be smaller then 24 digits"}),
    confirmPassword: z.string({message: "password required!"}).min(8, {message: "password must be greater than 8 character"}).max(24, {message: "password must be smaller then 24 digits"})
  });
  const validReq = schema.safeParse(req.body);
  if(!validReq.error){
    return next();
  };
  res.status(400).json({
    success: false,
    message: validReq.error?.issues[0].message
  })
  
};

const validateLogin = (req: Request, res: Response, next: NextFunction)=>{

  const { phone, email } = req.body;

  if(!email&&!phone){
    return res.status(400).json({
      sucess: false,
      message:"phone or email required!"
    })
  };
  const schema = z.object({
    phone: z.number().min(999999999, {message: "Invalid phone !"}).max(9999999999, {message: "Invalid phone !"}).optional(),
    email: z.string().email({message:"Invalid email"}).optional(),
    password: z.string({message: "password required!"})
  });
  const validReq = schema.safeParse(req.body);
  if(!validReq.error){
    return next();
  };
  
  res.status(400).json({
    success: false,
    message: validReq.error?.issues[0].message
  })
};

export const getPersonalInfo_V = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers; 
  if(!authorization){
    return res.status(400).json({
      success: false,
      error: "not authorized !"
    })
  };
  const schema = z.instanceof(mongoose.Types.ObjectId, {message: "invalid User !"});
  try {
    const validSchema = schema.safeParse(new mongoose.Types.ObjectId(authorization));
    if(validSchema.success){
      return next();
    };
    res.status(400).json({
      success: false,
      error: validSchema.error
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "invalid user !"
    })
  }
}
export const findUser_V = async (req: Request, res: Response, next: NextFunction) => {
  next()
};

export const getAllFriends_V = async (req: Request, res: Response, next: NextFunction) => {
  const { auth } = req.headers;
  const schema = z.instanceof(mongoose.Types.ObjectId, {message: "not authorized"});
  try {
    
    const verified = schema.safeParse(new mongoose.Types.ObjectId(`${auth}`));
    if(verified.success){
      return next();
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      error: "not authorized !"
    })
  }
}

export { validateRegistration, validateLogin }