import { Actions } from '@/redux/reducers/candidate/companiesReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCompaniesRoleCandidate = () => {
  const dispatch = useDispatch();
  const companiesState = useSelector((state) => state.companies);

  useEffect(() => {
    if (!companiesState.companies) {
      getListCompanies();
    }
  }, []);

  const getListCompanies = () => {
    dispatch(Actions.getCompaniesRequest());
  };

  const nextToPage = () => {
    dispatch(Actions.nextPage());
  };

  const revertToPage = () => {
    dispatch(Actions.revertPage());
  };
  return { companiesState, nextToPage, revertToPage };
};

export default useCompaniesRoleCandidate;
