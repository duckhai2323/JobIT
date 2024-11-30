import { Actions } from '@/redux/reducers/candidate/jobsReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useJobsRoleCandidate = () => {
  const dispatch = useDispatch();
  const jobsState = useSelector((state) => state.jobs);

  useEffect(() => {
    if (!jobsState.jobs) {
      getListJobs();
    }
  }, []);

  const getListJobs = () => {
    dispatch(Actions.getJobsRequest());
  };

  const nextToPage = () => {
    dispatch(Actions.nextPage());
  };

  const revertToPage = () => {
    dispatch(Actions.revertPage());
  };

  return { jobsState, nextToPage, revertToPage };
};

export default useJobsRoleCandidate;
