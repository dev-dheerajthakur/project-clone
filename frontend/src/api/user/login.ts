"use server"
import axios from "axios"


const domain = process.env.server_domain;

const fetchUser = async ({phone, email, password}: {phone?:number, email?:number, password: string}) => {
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/user/auth/login`,
      data: {
        phone,
        email,
        password
      }
    });
    return json.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export { fetchUser }