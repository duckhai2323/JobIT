import { call, put, takeLatest } from 'redux-saga/effects';
import { getListJobs } from '@/services/jobDetailService';
import { Actions } from '@/redux/reducers/candidate/jobsReducer';
//role user 0x01
function* getListJobsSaga() {
  try {
    const response = yield call(getListJobs);
    if (response.success) {
      yield put(Actions.getJobsSuccess(response.data));
    } else {
      yield put(Actions.getJobsFailure(response.message));
    }
  } catch (error) {
    yield put(Actions.getJobsFailure({ error: error.message }));
  }
}

export function* watchJobsSagas() {
  yield takeLatest(Actions.getJobsRequest.type, getListJobsSaga);
}
