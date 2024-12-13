export const setUser = (username: string, email: string) => ({
    type: 'SET_USER',
    payload: { username, email },
  });
  
  export const deposit = (amount: number) => ({
    type: 'DEPOSIT',
    payload: { amount },
  });
  
  export const withdraw = (amount: number) => ({
    type: 'WITHDRAW',
    payload: { amount },
  });
  
  export const addTransaction = (transaction: { type: string; amount: number; date: string }) => ({
    type: 'ADD_TRANSACTION',
    payload: transaction,
  });
  