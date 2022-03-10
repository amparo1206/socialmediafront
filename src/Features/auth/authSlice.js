import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  userInfoProfile:{},
  isError: false,
  isSuccess: false,
  message: " ",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = " ";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        console.log('action',action)
        state.userInfoProfile = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
    })
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
  try {
    return await authService.register(user);
  } catch (error) {
    const message = error.response.data[0].message;
    return  thunkApi.rejectWithValue(message)
  }
});

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message)
  }
});


export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    return await authService.logout()
  } catch (error) {
    console.error(error)
  }
});

export const getInfo = createAsyncThunk('auth/info', async () => {
  try {
    return await authService.getInfo()
  } catch (error) {
    console.error(error)
  }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;