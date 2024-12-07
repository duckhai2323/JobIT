import { createSlice } from '@reduxjs/toolkit';

const initAdminCompaniesState = {
  companies: null,
  loading: false,
  error: null,
  selectCompanyId: null,
  newCompany: null,
  currentPage: null,
};

const adminCompaniesSlice = createSlice({
  name: 'adminCompanies',
  initialState: initAdminCompaniesState,
  reducers: {
    getCompaniesRequest: (state) => {
      return {
        ...state,
        loading: 'true',
        error: null,
      };
    },

    getCompaniesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        companies: action.payload,
        currentPage: 1,
      };
    },

    getCompaniesFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },

    nextPage: (state) => {
      const totalPage = Math.ceil(state.companies.length / 4);
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

    chooseCompany: (state, action) => {
      return {
        ...state,
        selectCompanyId: action.payload,
      };
    },

    updateCompanyRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    updateCompanySuccess: (state, action) => {
      const updatedCompany = action.payload.data;

      return {
        ...state,
        loading: false,
        companies: state.companies.map((company) =>
          company.company_id === updatedCompany.company_id ? updatedCompany : company
        ),
      };
    },

    updateCompanyFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },

    createCompanyRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    createCompanySuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        newCompany: action.payload.data,
      }
    },

    createCompanyFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    },
  },
});

export const Actions = adminCompaniesSlice.actions;
export default adminCompaniesSlice.reducer;
