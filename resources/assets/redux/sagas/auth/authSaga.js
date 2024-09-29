const { signInService } = require('@/services/authService');
import { Actions } from '@/redux/reducers/auth/authReducer';
import { call, put, takeLatest, delay } from 'redux-saga/effects';

function* signInSaga(action) {
  try {
    yield delay(1000);
    const response = yield call(signInService, action.payload);
    if (response.success) {
      yield put(Actions.signInSuccess(response.data));
    } else {
      yield put(Actions.signInFailure({ error: response.message || 'Vui lòng kiểm tra lại email và mật khẩu' }));
    }
  } catch (error) {
    yield put(ActionssignInFailure({ error: error.message || 'Vui lòng kiểm tra lại email và mật khẩu' }));
  }
}

export function* watchSignInRequest() {
  yield takeLatest(Actions.signInRequest.type, signInSaga);
}
