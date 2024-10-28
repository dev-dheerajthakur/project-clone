"use server"
import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
const domain = process.env.server_domain;

const createFriendRequest = async ({auth, to}: {auth: string | RequestCookie | undefined, to: string}) => {
  if(auth===undefined){
    return {
      success: false,
      error: "not authorized !"
    }
  }
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/notification/friend-request/create`,
      headers: {
        Authorization: `${auth}`
      },
      data: { to }
    });
    return json.data;
  } catch (err :any) {
    return err.response.data
  }
};

export { createFriendRequest }