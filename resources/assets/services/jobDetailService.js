import axios from './axios';

export const getListJobs = async () => {
  try {
    const response = await axios.get(`/api/jobdetail/list-jobs`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getAllJobs = async () => {
  try {
    const response = await axios.get(`/api/jobdetail/all-jobs`);
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

export const updateInforJobDetail = async (job_id, data) => {
  try {
    const response = await axios.put(`/api/jobdetail/edit-job/${job_id}`, data);
    return response;
  } catch (error) {
    return error.message;
  }
}

export const createNewJob = async (data) => {
  try {
    const response = await axios.post(`/api/jobdetail/new`, data);
    return response;
  } catch (error) {
    return error.message;
  }
}

export const deleteJob = async (job_id) => {
  try {
    const response = await axios.delete(`/api/jobdetail/delete-job/${job_id}`);
    return response;
  } catch (error) {
    return error.message;
  }
}
