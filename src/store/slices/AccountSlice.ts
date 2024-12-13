import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountState } from '../types/AccountTypes';

const initialState: AccountState = {
  accounts: [
    {
      accountNumber: '123456789',
      balance: 5000,
      deposits: 3000,
      withdrawals: 2000,
    },
  ],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount(state, action: PayloadAction<AccountState['accounts'][0]>) {
      state.accounts.push(action.payload);
    },
  },
});

export const { addAccount } = accountSlice.actions;
export default accountSlice.reducer;
