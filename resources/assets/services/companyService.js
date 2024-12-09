import axios from './axios';

export const getListCompanies = async () => {
  try {
    const response = await axios.get(`/api/company/all`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getInforCompany = async (company_id) => {
  try {
    const response = await axios.get(`/api/company/infor/${company_id}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getInforCompanyByUser = async (id) => {
  try {
    const response = await axios.get(`/api/company/infor-by-user/${id}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getListJobsOfCompany = async (company_id) => {
  try {
    const response = await axios.get(`/api/jobdetail/list-jobs-company/${company_id}`);
    return response;
  } catch (error) {
    return error.message;
  }
};

export const updateInforCompany = async (company_id, data) => {
  try {
    const response = await axios.put(`/api/company/update/${company_id}`, data);
    return response;
  } catch (error) {
    return error.message;
  }
}

export const createNewCompany = async (data) => {
  try {
    const response = await axios.post('/api/company/new', data);
    return response;
  } catch (error) {
    return error.message;
  }
}
