import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '@/redux/reducers/auth/authReducer';
import { useEffect } from 'react';

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const remember_token = JSON.parse(localStorage.getItem('remember_token'));
  const dataSaveSession = JSON.parse(sessionStorage.getItem('user'));

  useEffect(() => {
    dataSaveSession
      ? dispatch(Actions.signInSuccess(dataSaveSession))
      : remember_token && dispatch(Actions.getAccountRequest({ remember_token }));
  }, []);

  useEffect(() => {
    if (!dataSaveSession && authState.data) {
      authState.data &&
        authState.data.jwt_token &&
        sessionStorage.setItem('jwt_token', JSON.stringify(authState.data.jwt_token));

      authState.data && sessionStorage.setItem('user', JSON.stringify(authState.data));

      authState.data &&
        authState.data.remember_token &&
        localStorage.setItem('remember_token', JSON.stringify(authState.data.remember_token));
    }
  }, [authState.data]);

  const signInRequest = (data) => {
    dispatch(Actions.signInRequest(data));
  };

  return { authState, signInRequest };
};

export default useAuth;
