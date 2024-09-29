import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '@/redux/reducers/auth/authReducer';

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const signInRequest = (data) => {
    dispatch(Actions.signInRequest(data));
  };

  return { authState, signInRequest };
};

export default useAuth;
