"use server"
import axios from "axios";
const domain = process.env.server_domain;

const findUser = async (user:string) => {
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/user/auth/get/${user}`
    });
    return json.data
  } catch (err:any) {
    return err.response.data
  }
};

export default findUser;