import axios from "axios";
const domain = process.env.server_domain;

const getTeams = async ({ authorization } :{authorization: string | undefined}) => {
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/team/get`,
      headers: {
        Authorization: authorization
      }
    });
    return json.data
  } catch (err:any) {
    return err.response.data
  }
};

export default getTeams;