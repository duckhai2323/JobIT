import axios from './axios';

export const createNewReference = async (data) => {
  try {
    const response = await axios.post('/api/reference/new', data);
    return response;
  } catch (error) {
    return error.message;
  }
}
