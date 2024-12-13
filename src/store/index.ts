import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userReducer';
import bankReducer from './slices/bankReducer';
import accountReducer from './slices/AccountSlice';
import authReducer from './slices/AuthSlice'; 

const store = configureStore({
  reducer: {
    user: userReducer,
    bank: bankReducer,
    account: accountReducer,
    auth: authReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
