import { Actions } from '@/redux/reducers/admin/adminCompaniesReducer';
import { getListCompanies, updateInforCompany } from '@/services/companyService';
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

function* updateAdminCompanySaga(action) {
  try {
    const response = yield call(updateInforCompany, action.payload.companyId, action.payload.data);
    if (response.success) {
      yield put(Actions.updateCompanySuccess(response));
    } else {
      yield put(Actions.updateCompanyFailure({ error: response.message || "Vui lòng kiểm tra lại thông tin" }));
    }
  } catch (error) {
    yield put(Actions.updateCompanyFailure({ error: error.message || "Vui lòng kiểm tra lại thông tin" }));
  }
}

export function* watchCompaniesAdminSagas() {
  yield takeLatest(Actions.getCompaniesRequest.type, getListCompaniesAdminSaga);
  yield takeLatest(Actions.updateCompanyRequest.type, updateAdminCompanySaga);
}
