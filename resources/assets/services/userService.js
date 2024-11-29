import axios from './axios';

export const getListUsers = async () => {
  try {
    const response = await axios.get('/api/user/all');
    return response;
  } catch (error) {
    return error.message;
  }
};
