import { createSlice } from '@reduxjs/toolkit';

const initSaveJobsState = {
  saveJobs: null,
  loading: false,
  error: null,
  currentPage: null,
};

const saveJobsSlice = createSlice({
  name: 'saveJobs',
  initialState: initSaveJobsState,
  reducers: {
    getSaveJobsRequest: (state) => {
      return {
        ...state,
        loading: 'true',
        error: null,
      };
    },

    getSaveJobsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        saveJobs: action.payload,
        currentPage: 1,
      };
    },

    getSaveJobsFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },

    nextPage: (state) => {
      const totalPage = Math.ceil(state.saveJobs.length / 6);
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

export const Actions = saveJobsSlice.actions;
export default saveJobsSlice.reducer;
