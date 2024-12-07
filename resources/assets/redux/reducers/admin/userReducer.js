import { createSlice } from '@reduxjs/toolkit';

const initUserState = {
  users: [],
  loading: false,
  error: null,
  newUser: null,
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

    updateUserRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    updateUserSuccess: (state, action) => {
      const updatedUser = action.payload.data;

      return {
        ...state,
        loading: false,
        users: state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        ),
      };
    },

    updateUserFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },

    createUserRequest: (state, action) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    createUserSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        newUser: action.payload.data,
      }
    },

    createUserFailure: (state, action) => {
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
