import { Request, Response } from "express";
import { teamModel } from "./team.model.js";

export const createTeam_C = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const { teamMembers, teamName } = req.body;

  try {
    const team = await teamModel.create({
      admin: authorization,
      members: teamMembers,
      teamName
    });
    res.status(200).json({
      success: true,
      data: team
    })
  } catch (err :any) {
    if(err?.keyValue?.admin){
      return res.status(404).json({
        success: false,
        error: "you already have a team"
      })
    }
    res.status(404).json({
      success: false,
      error: err
    })
  }
};

export const getTeams_C = async (req :Request, res :Response) => {
  const { authorization } = req.headers;

  try {
    const teams = await teamModel.aggregate([
      {
        '$match': {
          '$or': [
            {
              'admin': authorization
            }, {
              'members': authorization
            }
          ]
        }
      }, {
        '$lookup': {
          'from': 'users', 
          'localField': 'admin', 
          'foreignField': 'userName', 
          'as': 'admin'
        }
      }, {
        '$lookup': {
          'from': 'users', 
          'localField': 'members', 
          'foreignField': 'userName', 
          'as': 'members'
        }
      }, {
        '$project': {
          '_id': 1, 
          'teamName': 1, 
          'admin.userName': 1, 
          'admin.ffUid': 1, 
          'admin.profile': 1, 
          'members.userName': 1, 
          'members.profile': 1, 
          'members.ffUid': 1
        }
      }
    ]);
    res.status(200).json({
      success: true,
      data: teams
    })
  } catch (err :any) {
    res.status(404).json({
      success: false,
      error: err
    })
  }
  
}