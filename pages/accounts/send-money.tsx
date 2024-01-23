// pages/accounts/send-money.tsx

import Layout from "../../components/Layout";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import ReviewPayment from "../../components/account/ReviewPayment";
import Password from "../../components/account/Password";

import MenuItem from "@mui/material/MenuItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Montserrat } from "next/font/google";

import {
  addBeneficiary,
  removeBeneficiary,
  addTransactionDetails,
} from "../../features/accountSlice";

const montserrat = Montserrat({ subsets: ["latin"] });

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "8px",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function getInitials(name: string): string {
  const words = name.split(" ");
  return words
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

const SendMoney = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { beneficiary, transactionDetails } = useSelector(
    (state: any) => state.account
  );

  const [beneficiaryBank, setBeneficiaryBank] = useState("all");
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [narration, setNarration] = useState("");

  const [progress, setProgress] = useState(25);

  const [transactionsType, setTransactionsType] = useState("all");
  const [amount, setAmount] = useState("");
  const [pageflow, setPageFlow] = useState("send");

  const handleChange = (event: SelectChangeEvent) => {
    setTransactionsType(event.target.value as string);
    dispatch(
      addBeneficiary({
        id: "1231232322",
        bank: "Access Bank",
        name: "Uchenna Michael",
        isVerified: true,
        accountNumber: "0029309302",
      })
    );

    setTransactionsType("all");
  };

  const goBack = () => {
    router.back();
  };

  const handleGoToAcount = () => {
    router.push("/accounts");
  };
  const goToReview = () => {
    setProgress(50);
    setPageFlow("review");
    dispatch(
      addTransactionDetails({
        narration,
        amount,
      })
    );
  };

  const handleBeneficiaryBank = (event: SelectChangeEvent) => {
    setBeneficiaryBank(event.target.value as string);
  };

  const handleRemoveBeneficiary = () => {
    dispatch(removeBeneficiary());
  };

  const handleAddBeneficiary = () => {
    if (!name || !accountNumber || !beneficiaryBank) {
      return;
    }

    dispatch(
      addBeneficiary({
        id: accountNumber,
        bank: beneficiaryBank,
        name,
        isVerified: true,
        accountNumber,
      })
    );

    // Close the modal
    handleClose();
  };

  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpenSuccess(false);
    setOpen(false);
  };

  const checkEntries = () => {
    if (amount && narration && beneficiary.isVerified) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Layout>
      <div className="mt-2 w-2/5">
        <LinearProgress
          color="primary"
          variant="determinate"
          value={progress}
        />

        {pageflow === "send" ? (
          <div className="">
            <div className="mt-5 justify-between items-center">
              <h1 className="font-bold text-xl">Send Money</h1>
              <p className="text-sm">How do you want to send money?</p>
            </div>

            <div className="mt-6">
              <TextField
                sx={{ fontFamily: montserrat }}
                className={`w-full ${montserrat.className}`}
                id="outlined-basic"
                placeholder="How much do you want to send"
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="mt-2 mb-10 text-sm">
                ACCOUNT BALANCE: ₦31,733.96
              </div>

              {beneficiary.isVerified ? (
                <div>
                  <span className="">To</span>
                  <div className="mt-3 mb-6">
                    <div className="border rounded-lg px-3 py-2 flex justify-between items-center">
                      <div className="flex space-x-3 items-center">
                        <div className="bg-green-200 w-14 h-14 flex items-center justify-center font-semibold rounded-full p-2">
                          {getInitials(beneficiary.name)}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">
                            {beneficiary.name}
                          </h4>
                          <p className="text-xs text-gray-400">
                            {beneficiary.accountNumber}
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={handleRemoveBeneficiary}
                        className="flex text-red-500 text-xs rounded-2xl py-1 px-3 font-semibold cursor-pointer border"
                      >
                        remove
                      </div>
                    </div>
                  </div>
                  <TextField
                    sx={{ fontFamily: montserrat }}
                    className={` w-full ${montserrat.className}`}
                    id="outlined-basic"
                    placeholder="Add a narration"
                    variant="outlined"
                    value={narration}
                    onChange={(e) => setNarration(e.target.value)}
                  />
                </div>
              ) : (
                <div className="my-8 space-y-4">
                  <Select
                    className="w-full"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={transactionsType}
                    placeholder="Select a beneficiary to send to"
                    onChange={handleChange}
                  >
                    <MenuItem value="all" disabled>
                      Select a beneficiary to send to
                    </MenuItem>
                    <MenuItem value="pending">Uchenna Michael</MenuItem>
                  </Select>

                  <div
                    onClick={handleOpen}
                    className="border rounded-lg px-3 py-2 cursor-pointer flex justify-between items-center"
                  >
                    <div className="flex space-x-3 items-center">
                      <div className="bg-yellow-200 h-10 w-10 flex items-center justify-center text-xl font-semibold rounded-full p-3">
                        +
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">
                          Add New Beneficiary
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex w-9/12 items-center mt-10 space-x-2">
              <Button
                size="large"
                style={{ border: "1px solid", background: "white", color: 'black' }}
                onClick={goBack}
                className={`text-xs w-5/12 hover:bg-white text-gray-500 h-12 shadow-none border border-gray-500 ${montserrat.className}`}
                variant="contained"
              >
                Go Back
              </Button>
              <Button
                size="large"
                disabled={checkEntries()}
                onClick={goToReview}
                style={{ background: "#ffc107" }}
                className={`text-xs w-4/6 hover:bg-orange-400 text-white h-12 shadow-none bg-primary rounded-none ${montserrat.className}`}
                variant="contained"
              >
                Review Payment
              </Button>
            </div>
          </div>
        ) : pageflow === "review" ? (
          <div>
            <ReviewPayment
              goBack={() => {
                setProgress(25);
                setPageFlow("send");
              }}
              goToPassword={() => {
                setProgress(70);
                setPageFlow("password");
              }}
            />
          </div>
        ) : (
          <div>
            <Password
              goBack={() => {
                setProgress(50);
                setPageFlow("review");
              }}
              goToSuccess={() => {
                setProgress(100);
                setPageFlow("success");
                setOpenSuccess(true);
              }}
            />
          </div>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              className="font-semibold"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Add New Beneficiary
            </Typography>
            <Typography className="text-gray-500" id="modal-modal-description">
              Enter your beneficiary account details in this form to proceed.
            </Typography>

            <div className="mt-6 space-y-4">
              <Select
                className="w-full"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={beneficiaryBank}
                placeholder="Select a beneficiary to send to"
                onChange={handleBeneficiaryBank}
              >
                <MenuItem value="all" disabled>
                  Select a bank
                </MenuItem>
                <MenuItem value="0">First Bank</MenuItem>
                <MenuItem value="1">Access Bank</MenuItem>
                <MenuItem value="2">GT Bank</MenuItem>
              </Select>

              <TextField
                sx={{ fontFamily: montserrat }}
                className={`mt-4 w-full ${montserrat.className}`}
                id="outlined-basic"
                placeholder="Account Number"
                variant="outlined"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
              <TextField
                disabled={accountNumber ? false : true}
                sx={{ fontFamily: montserrat }}
                className={`mt-4 w-full ${montserrat.className}`}
                id="outlined-basic"
                placeholder="Chinedu Ohagwu"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                size="large"
                style={{ background: "#ffc107" }}
                onClick={handleAddBeneficiary}
                className={`w-full mt-8 hover:bg-orange-400 text-white h-12 shadow-none bg-primary rounded-none ${montserrat.className}`}
                variant="contained"
              >
                Add Beneficiary
              </Button>
            </div>
          </Box>
        </Modal>
        <Modal
          open={openSuccess}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="text-center">
              <div>
                <CheckCircleIcon className="w-20 h-20 text-green-500" />
              </div>
              <p className="text-gray-600 text-lg">
                ₦{transactionDetails.amount} is on its way to {beneficiary.name}
              </p>
            </div>

            <div className="mt-6">
              <Button
                size="large"
                style={{ background: "#ffc107" }}
                onClick={handleGoToAcount}
                className={`w-full mt-8 hover:bg-orange-400 text-white h-12 shadow-none bg-primary rounded-none ${montserrat.className}`}
                variant="contained"
              >
                Go to Account
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </Layout>
  );
};

export default SendMoney;
