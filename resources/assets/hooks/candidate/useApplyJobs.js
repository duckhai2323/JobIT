import { Actions } from '@/redux/reducers/candidate/applyJobsReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useJobsApplyRoleCandidate = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const applyJobsState = useSelector((state) => state.jobsApply);

  useEffect(() => {
    if (!applyJobsState.jobsApply) {
      getListJobs();
    }
  }, [authState.data.id]);

  const getListJobs = () => {
    dispatch(Actions.getJobsApplyRequest(authState.data.data.id));
  };

  const nextToPage = () => {
    dispatch(Actions.nextPage());
  };

  const revertToPage = () => {
    dispatch(Actions.revertPage());
  };

  return { applyJobsState, nextToPage, revertToPage, getListJobs };
};

export default useJobsApplyRoleCandidate;
