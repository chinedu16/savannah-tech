import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

interface ReviewPaymentProps {
  goBack: () => void;
  goToPassword: () => void;
}

const ReviewPayment: React.FC<ReviewPaymentProps> = ({
  goBack,
  goToPassword,
}) => {

  const { transactionDetails, beneficiary } = useSelector((state: any) => state.account);

  return (
    <div className="">
      <div className="mt-5 justify-between items-center">
        <h1 className="font-bold text-xl">Review Transfer</h1>
        <div className="border border-gray-300 mt-6 rounded-lg space-y-6 py-6 px-4 ">
          <div className="flex justify-between items-center">
            <span className="flex text-gray-500 text-sm">YOURE SENDING</span>
            <span className="font-medium">₦ {transactionDetails.amount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex text-gray-500 text-sm">FROM</span>
            <span className="font-medium">Main Account (NGN)</span>
          </div>
        </div>
        <div className="my-6">To</div>
        <div className="border border-gray-300 mt-6 rounded-lg space-y-6 py-6 px-4 ">
          <div className="flex justify-between ">
            <span className="flex text-gray-500 text-sm">BENEFICIARY</span>
            <div className="text-right">
              <span className="font-medium">{beneficiary.name}</span>
              <span className="flex justify-end text-gray-500 text-sm">
                {beneficiary.account}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex text-gray-500 text-sm">NARRATION</span>
            <span className="font-medium">{transactionDetails.narration}</span>
          </div>
        </div>

        <div className="flex w-9/12 items-center mt-10 space-x-2">
          <Button
            size="large"
            style={{ border: "1px solid" }}
            onClick={goBack}
            className={`text-xs w-5/12 hover:bg-white text-gray-500 h-12 shadow-none border border-gray-500 ${montserrat.className}`}
            variant="contained"
          >
            Go Back
          </Button>
          <Button
            size="large"
            onClick={goToPassword}
            className={`text-xs w-4/6 hover:bg-orange-400 text-white h-12 shadow-none bg-primary rounded-none ${montserrat.className}`}
            variant="contained"
          >
            Proceed to Pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPayment;
