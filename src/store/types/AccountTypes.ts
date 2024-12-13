export interface Account {
    accountNumber: string;
    balance: number;
    deposits: number;
    withdrawals: number;
  }
  
  export interface AccountState {
    accounts: Account[];
  }
  