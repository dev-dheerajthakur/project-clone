import { Request, Response } from "express";
import notificationModel from "./notification.model.js";
import { userModel } from "../users/userModel.js";
import mongoose from "mongoose";

export const createFriendRequest_C = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const { to } = req.body;
  const findReq = await notificationModel.findOne({ from: authorization, to });
  if (findReq) {
    return res.status(300).json({
      success: false,
      error: "already sent !",
    });
  }
  try {
    await notificationModel.create({
      from: authorization,
      to,
      n_type: "Friend request",
    });
    res.status(200).json({
      success: true,
      data: "request sent !",
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export const acceptFriendReqest_C = async (req: Request, res: Response) => {
  const { from, to } = req.body;
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    const doc = await notificationModel.deleteOne({ from, to }, { session });
    if (doc.deletedCount < 1) {
      await session.abortTransaction();
      await session.endSession();
      res.status(404).json({
        success: false,
        error: "request not found",
      });
      return;
    }

    await userModel.updateOne(
      { _id: from },
      {
        $addToSet: {
          "friends.allFriends": [to],
        },
      },
      { session }
    );

    await userModel.updateOne(
      { _id: to },
      {
        $addToSet: {
          "friends.allFriends": [from],
        },
      },
      { session }
    );

    await session.commitTransaction();
    await session.endSession();
    res.status(200).json({
      success: true,
      data: "Accepted Successfully !",
    });
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    res.status(500).json({
      success: false,
      error: "internal server error !",
    });
  }
};

export const getAllNotification_C = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(404).json({
      success: false,
      error: "not authorized !",
    });
  }
  try {
    const notifications = await notificationModel.aggregate([
      {
        $match: {
          to: authorization,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "from",
          foreignField: "userName",
          as: "from",
        },
      },
      {
        $project: {
          _id: 1,
          to: 1,
          n_type: 1,
          message: 1,
          from: {
            userName: 1,
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
