import axios from "axios";
const domain = process.env.server_domain;

const sendVerificationEmail = async ({email}: {email: string}) => { 
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/auth/send/verificationMail`,
      data: {
        email
      }
    });
    return json.data;
  } catch (err:any) {
    console.log(err)
    return err.response.data
  }
};

const verifyEmailAndOtp = async ({email, otp}: {email: string, otp: number | string}) => {
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/auth/verifyEmailAndOtp`,
      data: {
        email, otp
      }
    });
    return json.data;
  } catch (err:any) {
    return err.response.data
  }
}

export { sendVerificationEmail, verifyEmailAndOtp }