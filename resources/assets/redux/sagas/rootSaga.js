import { all, fork } from 'redux-saga/effects';
import { watchSignInRequest } from './auth/authSaga';
import { watchUsersRequest } from './user/userSaga';
import { watchJobsSagas } from './candidate/jobsSaga';
import { watchCompaniesSagas } from './candidate/companiesSaga';

const rootSaga = function* () {
  yield all([fork(watchSignInRequest)]);
  yield all([fork(watchUsersRequest)]);
  yield all([fork(watchJobsSagas)]);
  yield all([fork(watchCompaniesSagas)]);
};

export default rootSaga;
