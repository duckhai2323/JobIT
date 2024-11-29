import { createSlice } from '@reduxjs/toolkit';

const initJobsState = {
  jobs: null,
  loading: false,
  error: null,
  selectJobId: null,
  currentPage: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: initJobsState,
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
  },
});

export const Actions = jobsSlice.actions;
export default jobsSlice.reducer;
