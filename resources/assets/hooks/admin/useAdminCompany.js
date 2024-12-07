import { Actions } from '@/redux/reducers/admin/adminCompaniesReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCompaniesRoleAdmin = () => {
  const dispatch = useDispatch();
  const companiesState = useSelector((state) => state.adminCompanies);

  const getListCompanies = () => {
    dispatch(Actions.getCompaniesRequest());
  };

  const createNewCompany = (data) => {
    dispatch(Actions.createCompanyRequest(data));
  }

  const nextToPage = () => {
    dispatch(Actions.nextPage());
  };

  const revertToPage = () => {
    dispatch(Actions.revertPage());
  };
  return { companiesState, getListCompanies, createNewCompany, nextToPage, revertToPage };
};

export default useCompaniesRoleAdmin;
