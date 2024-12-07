import { createSlice } from '@reduxjs/toolkit';

const initJobsApplyState = {
  jobsApply: null,
  loading: false,
  error: null,
  currentPage: null,
};

const jobsApplySlice = createSlice({
  name: 'jobsApply',
  initialState: initJobsApplyState,
  reducers: {
    getJobsApplyRequest: (state) => {
      return {
        ...state,
        loading: 'true',
        error: null,
      };
    },

    getJobsApplySuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        jobsApply: action.payload,
        currentPage: 1,
      };
    },

    getJobsApplyFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },

    nextPage: (state) => {
      const totalPage = Math.ceil(state.jobsApply.length / 6);
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

export const Actions = jobsApplySlice.actions;
export default jobsApplySlice.reducer;
