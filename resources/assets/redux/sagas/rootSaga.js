import { all, fork } from 'redux-saga/effects';
import { watchSignInRequest } from './auth/authSaga';
import { watchUsersRequest } from './admin/userSaga';
import { watchJobsSagas } from './candidate/jobsSaga';
import { watchCompaniesSagas } from './candidate/companiesSaga';
import { watchCompaniesAdminSagas } from './admin/adminCompaniesSaga';

const rootSaga = function* () {
  yield all([fork(watchSignInRequest)]);
  yield all([fork(watchUsersRequest)]);
  yield all([fork(watchJobsSagas)]);
  yield all([fork(watchCompaniesSagas)]);
  yield all([fork(watchCompaniesAdminSagas)]);
};

export default rootSaga;
