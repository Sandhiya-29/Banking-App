import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  id: number;
  type: 'Deposit' | 'Withdraw';
  amount: number;
  date: string;
}

interface BankState {
  balance: number;
  transactions: Transaction[];
  notifications: string[]; 
}

const initialState: BankState = {
  balance: 1000, 
  transactions: [],
  notifications: [], 
};

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      const amount = action.payload;
      state.balance += amount;
      state.transactions.push({
        id: Date.now(),
        type: 'Deposit',
        amount,
        date: new Date().toLocaleDateString(),
      });

      state.notifications.push(`Deposited $${amount}. New balance: $${state.balance}`);
    },
    withdraw(state, action: PayloadAction<number>) {
      const amount = action.payload;
      if (state.balance >= amount) {
        state.balance -= amount;
        state.transactions.push({
          id: Date.now(),
          type: 'Withdraw',
          amount,
          date: new Date().toLocaleDateString(),
        });

        state.notifications.push(`Withdrew $${amount}. New balance: $${state.balance}`);
      } else {
        state.notifications.push('Withdrawal failed: Insufficient balance.');
      }
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const { deposit, withdraw, clearNotifications } = bankSlice.actions;
export default bankSlice.reducer;
