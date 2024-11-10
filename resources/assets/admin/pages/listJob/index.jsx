import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/index';
import JobItem from '../../components/jobItem/index';
import JobLargeItem from '../../components/jobLargeItem/index';
import styles from './listJob.module.scss';
import classNames from 'classnames/bind';
import { FaBuildingCircleCheck } from "react-icons/fa6";
import CompanyInfoModal from '../../components/companyInfoModal/index';
import AddCompanyModal from '../../components/addCompanyModal/index';

const cx = classNames.bind(styles);

const ListJob = () => {
  const [displayModal, setDisplayModal] = useState('none');
  const [displayModalAdd, setDisplayModalAdd] = useState('none');
  const [listJobs, setListJobs] = useState([]);
  useEffect(() => {
    setListJobs([1, 2, 3, 4, 5]);
  }, []);
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
                <button key={job}>
                  <JobLargeItem onClickHandle={onClickHandleDisplayModal} onClickDelete={() => deleteJob(job)} />
                </button>
              ))}
            </div>
            <div className={cx("recent-jobs-box")}>
              <h1 className={cx("recent-title")}>Các công việc gần đây</h1>
              <div className={cx("recent-jobs")}>
                <JobItem 
                  jobTitle="Chuyên Viên Kinh Doanh Xuất Nhập Khẩu/Order Hàng Trung Quốc - Taobao,1688 - Thưởng 2 Triệu Khi Nhận Việc" 
                  companyName="CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ" 
                  location="Hà Nội"
                />
                <JobItem 
                  jobTitle="Chuyên Viên Kinh Doanh Xuất Nhập Khẩu/Order Hàng Trung Quốc - Taobao,1688 - Thưởng 2 Triệu Khi Nhận Việc" 
                  companyName="CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ" 
                  location="Hà Nội"
                />
                <JobItem 
                  jobTitle="Chuyên Viên Kinh Doanh Xuất Nhập Khẩu/Order Hàng Trung Quốc - Taobao,1688 - Thưởng 2 Triệu Khi Nhận Việc" 
                  companyName="CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ" 
                  location="Hà Nội"
                />
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
      <CompanyInfoModal
        onClickHandle={onClickHandleDisplayModal}
        displayModal={displayModal}
      />
      <AddCompanyModal 
        onClickHandle={onClickHandleDisplayModalAdd}
        displayModal={displayModalAdd}
        onSubmit={addJob}
      />
    </div>
  )
}

export default ListJob;
