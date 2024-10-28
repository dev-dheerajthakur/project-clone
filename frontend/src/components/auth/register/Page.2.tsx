// SignupPage2.tsx
import { useState } from "react";
// import styles from './SignupPage.module.css';
import styles from "./styles/signUpFlow.module.css";
import toast from "@/scripts/toast";
import { TextField } from "@mui/material";
import { sendVerificationEmail, verifyEmailAndOtp } from "@/api/auth/sendVerificationEmail";
import { apiType } from "@/api/types/apiTypes";

// SignupPage2.tsx
const SignupPage2 = ({ formData, setFormData, onNext, onPrevious }: any) => {
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    if (formData.email) {
      // API call to send OTP
      const json :apiType = await sendVerificationEmail({email: formData.email});
      if(!json.success){
        return toast(json.error)
      }
      setOtpSent(true);
      toast("OTP sent to " + formData.email);
    } else {
      toast("Please enter a valid email.");
    }
  };

  const handleVerifyOtp = async () => {
    if (formData.otp) {
      // Verify OTP with backend
      const data :apiType= await verifyEmailAndOtp({email: formData.email, otp: +formData.otp})
      if(data.success){
        onNext()
      }else{
        toast(data.error)
      }
      // onNext();
    } else {
      toast("Please enter the OTP.");
    }
  };

  return (
    <div className={styles.signupPage}>
      <div>
        <div className={styles.title}>Verify Email</div>
        <div className={styles.formGroup}>
          <TextField
            label="Email"
            type="email"
            variant="outlined" // or "filled" for a different style
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className={styles.formGroup}>
          <TextField
            label="OTP"
            type="number"
            variant="outlined" // or "filled" for a different style
            fullWidth
            margin="normal"
            value={formData.otp}
            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
            InputProps={{
              inputProps: {
                sx: {
                  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                    {
                      display: "none",
                    },
                  "&": {
                    "-moz-appearance": "textfield", // Firefox
                  },
                },
              },
            }}
          />
        </div>
        {!otpSent ? (
          <button className={styles.button} onClick={handleSendOtp}>
            Send OTP
          </button>
        ) : (
          <button className={styles.button} onClick={handleVerifyOtp}>
            Verify OTP
          </button>
        )}
        <button className={styles.backButton} onClick={onPrevious}>
          Back
        </button>
      </div>
    </div>
  );
};

export default SignupPage2;
