import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/adminJobsReducer';
import AdminLayout from '../../components/layout/index';
import JobItem from '../../components/jobItem/index';
import JobLargeItem from '../../components/jobLargeItem/index';
import styles from './listJob.module.scss';
import classNames from 'classnames/bind';
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';
import { getInforCompanyByUser } from '@/services/companyService';
import { getListJobsOfCompany } from '@/services/companyService';
import useAuth from '@/hooks/useAuth';
import JobInfoModal from '@/company/components/jobInfoModal';
import AddJobModal from '@/company/components/addJobModal';

const cx = classNames.bind(styles);

const ListJob = () => {
  const { authState } = useAuth();
  const dispatch = useDispatch();
  const jobState = useSelector((state) => state.adminJobs);
  const [displayModal, setDisplayModal] = useState('none');
  const [displayModalAdd, setDisplayModalAdd] = useState('none');
  const [companyImage, setCompanyImage] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [listJobs, setListJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentJob, setCurrentJob] = useState({});
  const navigate = useNavigate();

  const getListJobs = async () => {
    setLoading(true);
    const response = await getInforCompanyByUser(authState.data.data.id);
    if (response.success) {
      const response2 = await getListJobsOfCompany(response.data.company_id);
      if (response2.success) {
        const listOfJobs = response2.data;
        console.log(listOfJobs);
        setListJobs(listOfJobs);
        setCompanyId(response.data.company_id);
        setCompanyImage(response.data.company_image);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getListJobs();
  }, [])
  const onClickHandleDisplayModal = (job) => {
    if (displayModal === 'flex') {
      setDisplayModal('none');
    } else {
      setDisplayModal('flex');
      setCurrentJob(job);
    }
  };
  const onClickHandleDisplayModalAdd = () => {
    if (displayModalAdd === 'flex') {
      setDisplayModalAdd('none');
    } else {
      setDisplayModalAdd('flex');
    }
  };

  const deleteJob = (job) => {
    if(listJobs) {
      const newListJobs = listJobs.filter((index) => index !== job);
      setListJobs(newListJobs);
      console.log(listJobs);
    }
  }
  return (
    <div>
      <AdminLayout>
        <div className={cx("container")}>
          <div className={cx("info-box")}>
            <div className={cx("jobs-count-info")}>
              <p className={cx("info-title")}>Các công việc hiện có</p>
              <div className={cx("info-jobs")}>
                <FaBuildingCircleCheck />
                <p className={cx("job-count")}>{listJobs.length} công việc</p> 
              </div>
            </div>	
            <div className={cx("add-job-button")}>
              <button className={cx("add-button")} onClick={onClickHandleDisplayModalAdd}>
                + Thêm công việc
              </button>
            </div>
          </div>
          <div className={cx("content")}>
            <div className={cx("job-list")}>
              {listJobs && listJobs.map((job) => (
                <button key={job.job_id}>
                  <JobLargeItem onClickHandle={() => onClickHandleDisplayModal(job)} jobData={job} loader={setLoading} getListJobs={getListJobs} />
                </button>
              ))}
            </div>
            <div className={cx("recent-jobs-box")}>
              <h1 className={cx("recent-title")}>Các công việc gần đây</h1>
              <div className={cx("recent-jobs")}>
                {listJobs && listJobs.slice(0, 3).map((job) => (
                  <JobItem
                    jobTitle={job.job_title}
                    location={job.job_location} 
                    companyImage={companyImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
      <div style={{ display: loading ? 'flex' : 'none' }} className={cx('loading')}>
        <div>
          <FadeLoader color='rgba(255, 255, 255, 1)' height='10' width='6' />
          <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
        </div>
      </div>
      <JobInfoModal
        onClickHandle={() => onClickHandleDisplayModal({})}
        displayModal={displayModal}
        currentJob={currentJob}
        setLoading={setLoading}
        getListJobs={getListJobs}
      />
      <AddJobModal 
        onClickHandle={onClickHandleDisplayModalAdd}
        displayModal={displayModalAdd}
        companyId={companyId}
        getListJobs={getListJobs}
        loader={setLoading}
      />
    </div>
  )
}

export default ListJob;
