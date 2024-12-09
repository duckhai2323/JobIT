import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/adminJobsReducer';
import AdminLayout from '../../components/layout/index';
import JobItem from '../../components/jobItem/index';
import JobLargeItem from '../../components/jobLargeItem/index';
import AddJobModal from '@/admin/components/addJobModal';
import styles from './listJob.module.scss';
import classNames from 'classnames/bind';
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';

const cx = classNames.bind(styles);

const ListJob = () => {
  const dispatch = useDispatch();
  const jobState = useSelector((state) => state.adminJobs);
  const [displayModal, setDisplayModal] = useState('none');
  const [displayModalAdd, setDisplayModalAdd] = useState('none');
  const [listJobs, setListJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(Actions.getJobsRequest());
  }, [dispatch]);
  useEffect(() => {
    console.log(jobState.jobs);
    if (jobState.jobs && jobState.jobs.length > 0) {
      setListJobs(jobState.jobs);
    }
  }, [jobState])
  const onClickHandleDisplayModal = () => {
    if (displayModal === 'flex') {
      setDisplayModal('none');
    } else {
      setDisplayModal('flex');
    }
  };
  const onClickHandleDisplayModalAdd = () => {
    if (displayModalAdd === 'flex') {
      setDisplayModalAdd('none');
    } else {
      setDisplayModalAdd('flex');
    }
  };
  const handleNavigate = (jobId) => {
    navigate(`/jobs/${jobId}`);
  }
  const addJob = () => {
    setListJobs((prevJobs) => [...prevJobs, listJobs.length + 1]);
  }
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
                  <JobLargeItem onClickHandle={() => handleNavigate(job.job_id)} jobData={job} loader={setLoading} />
                </button>
              ))}
            </div>
            <div className={cx("recent-jobs-box")}>
              <h1 className={cx("recent-title")}>Các công việc gần đây</h1>
              <div className={cx("recent-jobs")}>
                {listJobs && listJobs.slice(0, 3).map((job) => (
                  <JobItem
                    jobTitle={job.job_title}
                    companyName={job.company_name}
                    location={job.job_location} 
                    companyImage={job.company_image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
      <div style={{ display: (jobState.loading || loading) ? 'flex' : 'none' }} className={cx('loading')}>
        <div>
          <FadeLoader color='rgba(255, 255, 255, 1)' height='10' width='6' />
          <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
        </div>
      </div>
      <AddJobModal 
        onClickHandle={onClickHandleDisplayModalAdd}
        displayModal={displayModalAdd}
        loader={setLoading}
      />
    </div>
  )
}

export default ListJob;
