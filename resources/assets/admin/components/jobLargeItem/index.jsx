import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '@/redux/reducers/admin/adminJobsReducer';
import styles from './jobLargeItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { FaLocationDot, FaSackDollar } from "react-icons/fa6";
import { IoToday } from "react-icons/io5";
import { AiFillProfile, AiOutlineGlobal } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import { deleteJob } from '@/services/jobDetailService';


const cx = classNames.bind(styles);

const JobLargeItem = ({ onClickHandle, jobData, loader }) => {
  const dispatch = useDispatch();
  const deleteCurrentJob = () => {
    const deleteCurrent = async () => {
      console.log(jobData.job_id);
      loader(true);
      const response = await deleteJob(jobData.job_id);
      if (response.success) {
        console.log(response.message);
        dispatch(Actions.getJobsRequest());
      }
      return null;
    };
    if(jobData.job_id) {
      deleteCurrent();
      loader(true);
      const timer = setTimeout(() => {
        loader(false);
      }, 5000);
      window.scrollTo(0, 0);
      return () => clearTimeout(timer);
    }
  }
  return (
    <div className={cx("job-card")}>
      <div className={cx("job-image")}>
        <img 
          src={jobData.company_image ? jobData.company_image : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"}
          alt="job-image" 
          className={cx("image")} 
        />
      </div>
      <div className={cx("job-info")}>
        <div className={cx("job-name")}>
          {jobData.job_title}
        </div>
        <div className={cx("job-from-company")}>
          {jobData.company_name}
        </div>
        <div className={cx("job-contact")}>
          <AiOutlineGlobal />
          <p>{jobData.company_link}</p>
          <a href="#" target="blank" className={cx("job-link")}>
            <FaLink />
          </a>
        </div>
      </div>
      <div className={cx("job-details")}>
        <div className={cx("job-detail")}>
          <FaLocationDot />
          <div className={cx("job-location")}>
            {jobData.job_location}
          </div>
        </div>
        <div className={cx("job-detail")}>
          <CgSandClock />
          <p>{jobData.experience_require}</p>
        </div>
        <div className={cx("job-detail")}>
          <FaSackDollar />
          <p>{jobData.salary}</p>
        </div>
        <div className={cx("job-detail")}>
          <IoPerson />
          <p>{jobData.candidate_number} người</p>
        </div>
      </div>
      <div className={cx("job-options")}>
        <button className={cx('view-button')} onClick={onClickHandle}>
          <IoMdEye /> Xem chi tiết
        </button>
        <button className={cx('delete-button')} onClick={deleteCurrentJob}>
          <MdDelete /> Xóa
        </button>
      </div>
    </div>
  );
}

export default JobLargeItem;
