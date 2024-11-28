import { createSlice } from '@reduxjs/toolkit';

const initUserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initUserState,
  reducers: {
    getUsersRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    getUsersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload.data,
      };
    },

    getUsersFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },
  },
});

export const Actions = userSlice.actions;
export default userSlice.reducer;
