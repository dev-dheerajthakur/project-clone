"use server"
import axios from "axios";
const domain = process.env.server_domain;

const createTeam = async ({ authorization, teamMembers, teamName } :{authorization: string, teamMembers: Array<string>, teamName :string}) => {
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/team/create`,
      headers: {
        Authorization: authorization
      },
      data: {
        teamName,
        teamMembers
      }
    });
    return json.data
  } catch (err:any) {
    return err.response.data
  }
};

export default createTeam;