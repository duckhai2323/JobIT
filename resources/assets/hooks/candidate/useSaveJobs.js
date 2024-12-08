import { Actions } from '@/redux/reducers/candidate/saveJobsReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useSaveJobsRoleCandidate = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const saveJobsState = useSelector((state) => state.saveJobs);

  useEffect(() => {
    if (!saveJobsState.saveJobs) {
      getListSaveJobs();
    }
  }, [authState.data.id]);

  const getListSaveJobs = () => {
    dispatch(Actions.getSaveJobsRequest(authState.data.data.id));
  };

  const nextToPage = () => {
    dispatch(Actions.nextPage());
  };

  const revertToPage = () => {
    dispatch(Actions.revertPage());
  };

  return { saveJobsState, nextToPage, revertToPage, getListSaveJobs, authState };
};

export default useSaveJobsRoleCandidate;
