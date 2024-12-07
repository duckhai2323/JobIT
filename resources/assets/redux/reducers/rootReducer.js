import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import userReducer from './admin/userReducer';
import jobsReducer from './candidate/jobsReducer';
import companiesReducer from './candidate/companiesReducer';
import adminCompaniesReducer from './admin/adminCompaniesReducer';
import adminJobsReducer from './admin/adminJobsReducer';
import applyJobsReducer from './candidate/applyJobsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  jobs: jobsReducer,
  companies: companiesReducer,
  adminCompanies: adminCompaniesReducer,
  adminJobs: adminJobsReducer,
  jobsApply: applyJobsReducer,
});

export default rootReducer;
