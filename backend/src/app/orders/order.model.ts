import mongoose from "mongoose";
import { string } from "zod";

type orderTypes = {
  createBy: mongoose.Types.ObjectId,
  product: mongoose.Types.ObjectId,
  members: string[]
};

const validateMembersLimit = (members :string[])=>{
  return members.length <=3
}

const orderSchema = new mongoose.Schema({
  createBy: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "battles",
    required: true
  },
  members: {
    type: [{
      type: String,
      ref: "users.userName"
    }],
    validate: [validateMembersLimit, '{PATH} limit exceeds.']
  }
});

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;