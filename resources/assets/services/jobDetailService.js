import axios from './axios';

export const getListJobs = async () => {
  try {
    const response = await axios.get(`/api/jobdetail/list-jobs`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getInforJobDetail = async (job_id) => {
  try {
    const response = await axios.get(`/api/jobdetail/infor/${job_id}`);
    return response;
  } catch (error) {
    return error.message;
  }
};
