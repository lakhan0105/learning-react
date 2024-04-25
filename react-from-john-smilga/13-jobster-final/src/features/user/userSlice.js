import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import custFetch from "../../utils/custFetch";
import { toast } from "react-toastify";
import { addUserLS, removeUserLS, getUserLS } from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserLS(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await custFetch.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(`Login user: ${JSON.stringify(user)}`);
    try {
      const resp = await custFetch.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const resp = await custFetch.patch("/auth/updateUser", user, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized, Logging out...");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// userSlice
export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserLS();

      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserLS(user);
        toast.success(`Hello there! ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserLS(user);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserLS(user);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

// export the actions
export const { toggleSidebar, logoutUser } = userSlice.actions;
// export slice reducer
export default userSlice.reducer;
