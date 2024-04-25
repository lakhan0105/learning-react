import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import custFetch from "../../utils/custFetch";
import { toast } from "react-toastify";
import { getUserLS } from "../../utils/localStorage";
import {
  showIsLoading,
  hideIsLoading,
  getAllJobs,
} from "../allJobs/allJobsSlice";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const createJob = createAsyncThunk(
  "job/createJob",
  async (jobObj, thunkAPI) => {
    try {
      const resp = await custFetch.post("/jobs", jobObj, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
        },
      });

      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showIsLoading());
    try {
      const resp = await custFetch.delete(`jobs/${jobId}`, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
        },
      });
      // get all jobs
      thunkAPI.dispatch(getAllJobs());
      return resp.data;
    } catch (error) {
      thunkAPI.dispatch(hideIsLoading());
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const editJob = createAsyncThunk(
  "job/editJob",
  async ({ jobId, job }, thunkAPI) => {
    try {
      const resp = await custFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    },
    clearValues: () => {
      return { ...initialState, jobLocation: getUserLS()?.location || "" };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("job added successfully");
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("job deleted!");
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.isLoading = true;
        toast.error(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("job modified!");
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = true;
        toast.error(payload);
      });
  },
});

// exports
export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
