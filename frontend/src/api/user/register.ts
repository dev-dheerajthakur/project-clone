"use server"
import axios from "axios"
import { apiType } from "../types/apiTypes";


const domain = process.env.server_domain;

const registerUser = async ({name, ffUid, otp, ffUserName, userName, email, password, confirmPassword}: {
  email: string,
  otp: string,
  password: string,
  name: string,
  ffUid: string,
  ffUserName: string,
  userName: string,
  confirmPassword: string
}) => {
  try {
    const json :apiType= await axios({
      method: "POST",
      url: `${domain}/user/auth/register`,
      data: {
        name, otp: +otp,
        "ffUid": +ffUid,
        userName, ffUserName,
        // "phone": parseInt(phone?phone:""),
        email, password, confirmPassword
      }
    });
    return json.data;
  } catch (err: any) {
    console.log(err)
    return err.response.data;
  }
};

export { registerUser }