import { getListUsers, updateUserAccount } from '@/services/userService';
import { signUpService } from '@/services/authService';
import { Actions } from '@/redux/reducers/admin/userReducer';
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

function* updateUserSaga(action) {
  try {
    yield delay(1000);
    const response = yield call(updateUserAccount, action.payload.userId, action.payload.data);
    if (response.success) {
      yield put(Actions.updateUserSuccess(response));
    } else {
      yield put(Actions.updateUserFailure({ error: response.message || "Vui lòng kiểm tra lại thông tin" }));
    }
  } catch (error) {
    yield put(Actions.updateUserFailure({ error: response.message || "Vui lòng kiểm tra lại thông tin" }));
  }
}

function* createNewUserSaga(action) {
  try {
    const response = yield call(signUpService, action.payload.data);
    if (response.success) {
      yield put(Actions.createUserSuccess(response));
    } else {
      yield put(Actions.createUserFailure({ error: response.message || "Vui lòng kiểm tra lại thông tin" }));
    }
  } catch (error) {
    yield put(Actions.createUserFailure({ error: error.message || "Vui lòng kiểm tra lại thông tin" }));
  }
}

export function* watchUsersRequest() {
  yield takeLatest(Actions.getUsersRequest.type, getListUsersSaga);
  yield takeLatest(Actions.updateUserRequest, updateUserSaga);
  yield takeLatest(Actions.createUserRequest.type, createNewUserSaga);
}
