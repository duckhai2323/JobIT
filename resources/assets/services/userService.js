import axios from './axios';

export const getListUsers = async () => {
  try {
    const response = await axios.get('/api/user/all');
    return response;
  } catch (error) {
    return error.message;
  }
};

export const updateUserAccount = async (id, data) => {
  try {
    const response = await axios.put(`/api/user/update/${id}`, data);
    return response;
  } catch (error) {
    return error.message;
  }
}

export const deleteUser = async (id, data) => {
  try {
    const response = await axios.delete(`/api/user/delete/${id}`, data);
    console.log(`call deleteUser api with ${data.id}`);
    return response;
  } catch (error) {
    return error.message;
  }
}
