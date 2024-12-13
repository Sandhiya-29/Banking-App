import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  email: string | null;
  password:string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  username: null,
  email: null,
  password: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register(state, action: PayloadAction<{ username: string; email: string ; password: string }>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password= action.payload.password;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.username = null;
      state.email = null;
      state.password = null;
      state.isLoggedIn = false;
    },
  },
});

export const { register, logout } = userSlice.actions;
export default userSlice.reducer;


