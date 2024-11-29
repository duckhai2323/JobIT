import axios from './axios';

export const getListCompanies = async () => {
  try {
    const response = await axios.get(`/api/company/all`);
    return response;
  } catch (error) {
    return error.message;
  }
};
