import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

interface ReviewPaymentProps {
  goBack: () => void;
  goToSuccess: () => void;
}

const ReviewPayment: React.FC<ReviewPaymentProps> = ({
  goBack,
  goToSuccess,
}) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]); // Specify the type as string[]

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResendClick = () => {
    // Add logic to resend OTP
    console.log("Resend OTP");
  };

  const handleVerifyClick = () => {
    // Add logic to verify OTP
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
  };

  return (
    <div className="">
      <div className="mt-5 justify-between items-center">
        <h1 className="font-bold text-xl">Authorize Payment</h1>
        <div className="mt-10">
          <div className="flex space-x-2">
            {otp.map((digit, index) => (
              <TextField
                key={index}
                type="text"
                variant="outlined"
                size="medium"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
              />
            ))}
          </div>
        </div>

        <div className="flex w-9/12 items-center mt-10 space-x-2">
          <Button
            size="large"
            style={{ border: "1px solid", background: "white" }}
            onClick={goBack}
            className={`text-xs w-5/12 hover:bg-white text-gray-500 h-12 shadow-none border border-gray-500 ${montserrat.className}`}
            variant="contained"
          >
            Go Back
          </Button>
          <Button
            size="large"
            style={{ background: "#ffc107" }}
            onClick={goToSuccess}
            className={`text-xs w-4/6 hover:bg-orange-400 text-white h-12 shadow-none bg-primary rounded-none ${montserrat.className}`}
            variant="contained"
          >
            Authorize
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPayment;
