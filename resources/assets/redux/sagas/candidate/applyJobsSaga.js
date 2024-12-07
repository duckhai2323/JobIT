import { call, put, takeLatest } from 'redux-saga/effects';
import { getApplyJobs } from '@/services/jobfairService';
import { Actions } from '@/redux/reducers/candidate/applyJobsReducer';
//role user 0x01
function* getListJobsApplySaga(action) {
  try {
    const response = yield call(getApplyJobs, action.payload);
    if (response.success) {
      yield put(Actions.getJobsApplySuccess(response.data));
    } else {
      yield put(Actions.getJobsApplyFailure(response.message));
    }
  } catch (error) {
    yield put(Actions.getJobsApplyFailure({ error: error.message }));
  }
}

export function* watchJobsApplySagas() {
  yield takeLatest(Actions.getJobsApplyRequest.type, getListJobsApplySaga);
}
