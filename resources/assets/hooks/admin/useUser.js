import { Actions } from '@/redux/reducers/admin/userReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useUserRoleAdmin = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const getListUsers = () => {
    dispatch(Actions.getUsersRequest());
  }

  const createNewUser = (data) => {
    dispatch(Actions.createUserRequest(data));
  }

  
  return { userState, getListUsers, createNewUser };
};

export default useUserRoleAdmin;
