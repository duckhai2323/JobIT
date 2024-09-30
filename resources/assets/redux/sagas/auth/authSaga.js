const { signInService, getUserAccount } = require('@/services/authService');
import { Actions } from '@/redux/reducers/auth/authReducer';
import { call, put, takeLatest, delay } from 'redux-saga/effects';

function* signInSaga(action) {
  try {
    yield delay(1000);
    const response = yield call(signInService, action.payload);
    if (response.success) {
      yield put(Actions.signInSuccess(response));
    } else {
      yield put(Actions.signInFailure({ error: response.message || 'Vui lòng kiểm tra lại email và mật khẩu' }));
    }
  } catch (error) {
    yield put(Actions.signInFailure({ error: error.message || 'Vui lòng kiểm tra lại email và mật khẩu' }));
  }
}

function* getAccountSaga(action) {
  try {
    yield delay(500);
    const response = yield call(getUserAccount, action.payload);
    if (response.success) {
      yield put(Actions.signInSuccess(response));
    } else {
      yield put(Actions.signInFailure({ error: response.message }));
    }
  } catch (error) {
    yield put(Actions.signInFailure({ error: error.message }));
  }
}

export function* watchSignInRequest() {
  yield takeLatest(Actions.signInRequest.type, signInSaga);
  yield takeLatest(Actions.getAccountRequest.type, getAccountSaga);
}
