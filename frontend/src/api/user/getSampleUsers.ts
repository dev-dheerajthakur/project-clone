import axios from "axios";
const domain = process.env.server_domain;

const getSampleUsers = async () => {
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/user/get/sample`
    });
    return json.data
  } catch (err:any) {
    return err.response.data
  }
};

export default getSampleUsers;