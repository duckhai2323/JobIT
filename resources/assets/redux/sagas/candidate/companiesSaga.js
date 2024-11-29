import { Actions } from '@/redux/reducers/candidate/companiesReducer';
import { getListCompanies } from '@/services/companyService';
import { call, put, takeLatest } from 'redux-saga/effects';
//role user 0x01
function* getListCompaniesSaga() {
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

export function* watchCompaniesSagas() {
  yield takeLatest(Actions.getCompaniesRequest.type, getListCompaniesSaga);
}
