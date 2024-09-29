import { all, fork } from 'redux-saga/effects';
import { watchSignInRequest } from './auth/authSaga';

const rootSaga = function* () {
  yield all([fork(watchSignInRequest)]);
};

export default rootSaga;
