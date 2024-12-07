import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllJobs, updateInforJobDetail } from '@/services/jobDetailService';
import { Actions } from '@/redux/reducers/admin/adminJobsReducer';

function* getAdminListJobsSaga() {
  try {
    const response = yield call(getAllJobs);
    if (response.success) {
      yield put(Actions.getJobsSuccess(response.data));
    } else {
      yield put(Actions.getJobsFailure(response.message));
    }
  } catch (error) {
    yield put(Actions.getJobsFailure({ error: error.message }));
  }
}

function* updateAdminJobSaga(action) {
  try {
    const response = yield call(updateInforJobDetail, action.payload.jobId, action.payload.data);
    if (response.success) {
      yield put(Actions.updateJobSuccess(response));
    } else {
      yield put(Actions.updateJobFailure({ error: response.message || "Vui lòng kiểm tra lại thông tin" }));
    }
  } catch (error) {
    yield put(Actions.updateJobFailure({ error: error.message || "Vui lòng kiểm tra lại thông tin" }));
  }
}

export function* watchJobsAdminSagas() {
  yield takeLatest(Actions.getJobsRequest.type, getAdminListJobsSaga);
  yield takeLatest(Actions.updateJobRequest.type, updateAdminJobSaga);
}
