// accountSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  beneficiary: any;
  transactionDetails: any;
}

const initialState: UserState = {
  beneficiary: {},
  transactionDetails: {}
};

const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBeneficiary: (state, action: PayloadAction<any>) => {
      state.beneficiary = action.payload;
    },
    removeBeneficiary: (state) => {
      state.beneficiary = {};
    },
    addTransactionDetails: (state, action: PayloadAction<any>) => {
      state.transactionDetails = action.payload;
    },
  },
});

export const { addBeneficiary, removeBeneficiary, addTransactionDetails } = accountSlice.actions;
export default accountSlice.reducer;
