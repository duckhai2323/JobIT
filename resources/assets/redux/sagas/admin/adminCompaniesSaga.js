import { Actions } from '@/redux/reducers/admin/adminCompaniesReducer';
import { getListCompanies } from '@/services/companyService';
import { call, put, takeLatest } from 'redux-saga/effects';

function* getListCompaniesAdminSaga() {
  try {
    const response = yield call(getListCompanies);
    if (response.success) {
      yield put(Actions.getCompaniesSuccess(response.data));
    } else {
      yield put(Actions.getCompaniesFailure(response.message));
    }
  } catch (error) {
    yield put(Actions.getCompaniesFailure({ error: error.message }));
  }
}

export function* watchCompaniesAdminSagas() {
  yield takeLatest(Actions.getCompaniesRequest.type, getListCompaniesAdminSaga);
}
