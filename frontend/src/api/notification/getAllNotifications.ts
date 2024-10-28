import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
const domain = process.env.server_domain;

const getAllNotifications = async ({Authorization}: {Authorization: string | RequestCookie | undefined}) => {
  console.log(Authorization)
  if(Authorization===undefined){
    return {
      success: false,
      error: "not authorized !"
    }
  }
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/notification/all`,
      headers: {
        Authorization: `${Authorization}`
      }
    });
    console.log(json.data)
    return json.data;
  } catch (err :any) {
    return err.response.data
  }
};

export { getAllNotifications }