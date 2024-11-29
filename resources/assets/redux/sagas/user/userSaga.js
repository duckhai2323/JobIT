import { getListUsers } from '@/services/userService';
import { Actions } from '@/redux/reducers/user/userReducer';
import { call, put, takeLatest, delay } from 'redux-saga/effects';

function* getListUsersSaga(action) {
  try {
    yield delay(1000);
    const response = yield call(getListUsers); 
    if(response.success) {
      yield put(Actions.getUsersSuccess(response));
    } else {
      yield put(Actions.getUsersFailure({ error: response.message || 'Đã xảy ra lỗi khi thực hiện lấy danh sách người dùng' }));
    }
  } catch (error) {
    yield put(Actions.getUsersFailure({ error: error.message || 'Đã xảy ra lỗi khi thực hiện lấy danh sách người dùng' })); 
  }
}

export function* watchUsersRequest() {
  yield takeLatest(Actions.getUsersRequest.type, getListUsersSaga);
}
