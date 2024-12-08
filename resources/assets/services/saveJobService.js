import axios from './axios';

export const getSaveJobs = async (userId) => {
  try {
    const response = await axios.get(`/api/save-job/list-jobs/${userId}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const saveJob = async (data) => {
  try {
    const response = await axios.post(`/api/save-job/create`, data);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const deleteSaveJob = async (job_id, userId) => {
  try {
    const response = await axios.delete(`/api/save-job/delete-job/${job_id}/${userId}`);
    return response;
  } catch (error) {
    return error.message;
  }
};
