import { NextFunction, Request, Response } from 'express';
import mongoose, { Schema } from 'mongoose';
import z from 'zod';


export const createTeam_V = async (req :Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const { teamMembers, teamName } = req.body;

  if(!teamName){
    return res.status(400).json({
      success: false,
      error: "teamName required !!"
    })
  }

  const schema = z.object({
    admin: z.instanceof(Schema.Types.ObjectId, {message: "invalid user"}),
    members: z.array(z.string()), 
    teamName: z.string().min(3).max(20)
  });

  if(!authorization){
    return res.status(404).json({
    success: false,
    error: "not authorized!"
  })};

  try {
    const validSchema = schema.safeParse({
      admin: new mongoose.Schema.ObjectId(authorization),
      members: teamMembers,
      teamName: teamName
    });
    if(validSchema.success){
      return next();
    }else{
      res.status(404).json({
        success: false,
        error: validSchema.error
      })
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      error: "invalid user, login again !!"
    })
  }
};

export const getTeams_V = async (req :Request, res :Response, next :NextFunction) => {
  const { authorization } = req.headers;
  if(!authorization){
    return res.status(400).json({
      success: false,
      error : "not authorized !"
    })
  }
  if(typeof authorization === 'string'){
    return next();
  }
  res.status(404).json({
    success: false,
    error: "try again !"
  })
}