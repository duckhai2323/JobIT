import { createSlice } from '@reduxjs/toolkit';

const initAdminJobsState = {
  jobs: null,
  loading: false,
  error: null,
  currentPage: null,
};

const adminJobsSlice = createSlice({
  name: 'adminJobs',
  initialState: initAdminJobsState,
  reducers: {
    getJobsRequest: (state) => {
      return {
        ...state,
        loading: 'true',
        error: null,
      };
    },

    getJobsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        currentPage: 1,
      };
    },

    getJobsFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },

    nextPage: (state) => {
      const totalPage = Math.ceil(state.jobs.length / 12);
      if (state.currentPage < totalPage) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      }
    },

    revertPage: (state) => {
      if (state.currentPage >= 2) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
        };
      }
    },

    updateJobRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    updateJobSuccess: (state, action) => {
      const updatedJob = action.payload.data;

      return {
        ...state,
        loading: false,
        jobs: state.jobs.map((job) =>
          job.job_id === updatedJob.job_id ? updatedJob : job
        ),
      };
    },

    updateJobFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },
  },
});

export const Actions = adminJobsSlice.actions;
export default adminJobsSlice.reducer;
