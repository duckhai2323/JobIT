import { all, fork } from 'redux-saga/effects';
import { watchSignInRequest } from './auth/authSaga';
import { watchUsersRequest } from './user/userSaga';

const rootSaga = function* () {
  yield all([fork(watchSignInRequest)]);
  yield all([fork(watchUsersRequest)]);
};

export default rootSaga;
