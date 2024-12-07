import axios from './axios';

export const getApplyJobs = async (userId) => {
  try {
    const response = await axios.get(`/api/jobfair/apply-jobs/${userId}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const applyJobAction = async (data) => {
  try {
    const response = await axios.post(`/api/jobfair/apply`, data);
    return response;
  } catch (error) {
    return error.message;
  }
};
