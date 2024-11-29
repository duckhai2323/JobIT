import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';
import jobsReducer from './candidate/jobsReducer';
import companiesReducer from './candidate/companiesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  jobs: jobsReducer,
  companies: companiesReducer,
});

export default rootReducer;
