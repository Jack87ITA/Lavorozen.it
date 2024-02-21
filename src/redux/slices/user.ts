import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthAPI } from "../../Apis/authAPI";
import { User } from "../../Types/type";

export const loginUser = createAsyncThunk(
  "user/login",
  async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const data = await AuthAPI.postLogin({ email, password });

      dispatch(
        setUser({ user: data.user, role: data.role, token: data.token })
      );

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface initialStateInterface {
  user: User | null;
  role: any;
  token: any;
  isLoggedIn: boolean;
}

const initialState: initialStateInterface = {
  user: null,
  role: null,
  token: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state: any) => {
      state.user = null;
      state.role = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    changeToken: (state, action) => {
      state.token = action.payload.token;
    },

    setUserFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload;
      }
    },
  },
});

export const { setUser, logout, changeToken, setUserFriends } =
  userSlice.actions;

export const reducer = userSlice.reducer;
