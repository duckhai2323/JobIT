import { Actions } from '@/redux/reducers/candidate/saveJobsReducer';
import { getSaveJobs } from '@/services/saveJobService';
import { call, put, takeLatest } from 'redux-saga/effects';
//role user 0x01
function* getListSaveJobsSaga(action) {
  try {
    const response = yield call(getSaveJobs, action.payload);
    if (response.success) {
      yield put(Actions.getSaveJobsSuccess(response.data));
    } else {
      yield put(Actions.getSaveJobsFailure(response.message));
    }
  } catch (error) {
    yield put(Actions.getSaveJobsFailure({ error: error.message }));
  }
}

export function* watchSaveJobsSagas() {
  yield takeLatest(Actions.getSaveJobsRequest.type, getListSaveJobsSaga);
}
