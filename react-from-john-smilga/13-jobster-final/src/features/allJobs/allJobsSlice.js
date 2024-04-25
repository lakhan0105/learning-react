import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import custFetch from "../../utils/custFetch";
import { toast } from "react-toastify";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk(
  "allJobs/getAllJobs",
  async (_, thunkAPI) => {
    try {
      const resp = await custFetch.get("/jobs", {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const showStats = createAsyncThunk(
  "allJobs/allJobsSlice",
  async (_, thunkAPI) => {
    try {
      const resp = await custFetch("/jobs/stats", {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
        },
      });
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: "allJobsSlice",
  initialState,
  reducers: {
    showIsLoading: (state) => {
      state.isLoading = true;
    },
    hideIsLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        const { jobs, totalJobs, numOfPages } = payload;
        state.isLoading = false;
        state.jobs = jobs;
        state.totalJobs = totalJobs;
        state.numOfPages = numOfPages;
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })
      .addCase(showStats.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { showIsLoading, hideIsLoading, handleChange, clearFilters } =
  allJobsSlice.actions;
export default allJobsSlice.reducer;
