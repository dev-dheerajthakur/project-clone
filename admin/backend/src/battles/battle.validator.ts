import { NextFunction, Request, Response } from "express"
import { Schema } from "mongoose"
import z from "zod"

interface team{
  teamId: string,
  participants: Array<string>
}

interface schema{
  battleId: number,
  settings:{
    gameMode: "Battle Royal"|"Clash Squad",
    map: "BERMUDA"|"PURGATORY"|"KALAHARI"|"ALPINE"|"NEXTERA"|"BERMUDA REMASTER",
    teamMode: "1v1"|"2v2"|"4v4",
    slots: number,
    ammo: "Limited"|"UN-Limited",
    gunAttributes: "Yes"|"No",
    characterSkill: "Yes"|"No",
    loadout: "Yes"|"No",
  }
  expire: {
    id: number,
    year: number,
    month: number, 
    date: number,
    hour: number,
    minute: number,
    second: number
  },
  entry: number,
  winning: {
    _1: number,
    _2: number,
    _3: number
  },
  teams: Array<team>
}



const validateBattle = (req: Request, res: Response, next: NextFunction)=>{
  const schema = z.object({
    battleId: z.number({message: "battleId Required!"}).optional(),
    settings: z.object({
      gameMode: z.literal("Battle Royal"||"Clash Squad", { message: "gameMode needs specific value!" }).optional(),
      map: z.literal("BERMUDA"||"PURGATORY"||"KALAHARI"||"ALPINE"||"NEXTERA"||"BERMUDA REMASTER", { message: "map needs specific value!" }).optional(),
      teamMode: z.literal("1v1"||"2v2"||"4v4", { message: "teamMode needs specific value!" }).optional(),
      slot: z.number(),
      ammo: z.literal("Limited"||"UN-Limited", { message: "ammo needs specific value!" }).optional(),
      gunAttributes: z.literal("Yes"||"No", { message: "gunAttributes needs specific value!" }).optional(),
      characterSkill: z.literal("Yes"||"No", { message: "characterSkill needs specific value!" }).optional(),
      loadout: z.literal("Yes"||"No", { message: "loadout needs specific value!" }).optional(),
    }).optional(),
    expire: z.object({
      id: z.number(),
      year: z.number(),
      month: z.number(), 
      date: z.number(),
      hour: z.number(),
      minute: z.number(),
      second: z.number()
    }),
    entry: z.number(),
    winning: z.object({
      _1: z.number(),
      _2: z.number(),
      _3: z.number()
    }),
    teams: z.array(z.object({
      teamId: z.string(),
      participants: z.array(z.string())
    })).optional()
  }, {message: "fields required!"});
  
  const validSchema = schema.safeParse(req.body);
  
  if(!validSchema.error){
    return next();
  };
  
  res.status(400).json({
    success: false,
    message: validSchema.error
  });
}

export { validateBattle }