import axios from "axios";
const domain = process.env.server_domain;

const getPersonalInfo = async (user :string | undefined) => {
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/user/auth/get`,
      headers: {
        Authorization : user
      }
    });
    return json.data
  } catch (err:any) {
    return err.response.data
  }
};

export default getPersonalInfo;