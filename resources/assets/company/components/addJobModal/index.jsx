import React, { useState, useEffect } from 'react';;
import styles from './addJobModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaAddressBook } from "react-icons/fa";
import { createNewJob } from '@/services/jobDetailService';

const cx = classNames.bind(styles);

const AddJobModal = ({ displayModal, onClickHandle, companyId, getListJobs, loader }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyImage, setCompanyImage] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const [jobRequire, setJobRequire] = useState("");
  const [jobBenefit, setJobBenefit] = useState("");
  const [salary, setSalary] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [candidateNumber, setCandidateNumber] = useState("");
  const [experienceRequire, setExperienceRequire] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [deadlineJob, setDeadlineJob] = useState("");
  const [level, setLevel] = useState("");
  const [sex, setSex] = useState("");
  const [error, setError] = useState("");

  const addJob = (e) => {
    e.preventDefault();
    const inputData = {
      job_title: jobTitle,
      company_id: companyId,
      job_details: jobDetails,
      job_require: jobRequire,
      job_benefit: jobBenefit,
      salary: salary,
      job_location: jobLocation,
      candidate_number: candidateNumber,
      experience_require: experienceRequire,
      work_form: workFrom,
      deadline_job: deadlineJob,
      level: level,
      sex: sex,
      status: "1",
    };
    console.log(inputData);
    const addJob = async () => {
      loader(true);
      const response = await createNewJob(inputData);
      if (response.success) {
        console.log("create new job successful");
        getListJobs();
        loader(true);
      }
      const timer = setTimeout(() => {
        loader(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
    addJob();
    onClickHandle();
    setError("");
  }

  useEffect(() => {
    if(displayModal === 'none') {
      setJobTitle("");
      setJobDetails("");
      setJobRequire("");
      setJobBenefit("");
      setSalary("");
      setJobLocation("");
      setCandidateNumber("");
      setExperienceRequire("");
      setWorkFrom("");
      setDeadlineJob("");
      setLevel("");
      setSex("");
      setError("");
    }
  }, [displayModal])

  return (
    <div style={{ display: displayModal }} className={cx('admin-info-modal')}>
      <div className={cx('modal-background')}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-header')}>
            <div className={cx('tabs')}><span className={cx('modal-title')}>Thêm công việc mới</span></div>
            <button onClick={onClickHandle} className={cx('close-button')}>
              <IoMdClose />
            </button>
          </div>
          <form className={cx('modal-body')} onSubmit={addJob}>
            <div className={cx('form-header')}>
              <h2>Thông tin chung</h2>
            </div>
            {error && (<div className={cx('error-message')}>
              <i style={{ color: 'red' }}>*</i> <span style={{ color: 'red' }}>{error}</span>
            </div>)}
            <div className={cx('info-item')}>
              <label htmlFor="job-title" className={cx('info-label')}>
                Tên công việc<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="job_title"
                id="job-title"
                placeholder="" 
                className={cx('info-content')}
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }} 
              />
            </div>
            <div className={cx('info-item')}>
              <label for="salary" className={cx('info-label')}>
                Mức lương<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="salary"
                id="salary"
                placeholder="" 
                className={cx('info-content')}
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="level" className={cx('info-label')}>
                Vị trí<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="level"
                id="level"
                placeholder="" 
                className={cx('info-content')}
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="sex" className={cx('info-label')}>
                Giới tính<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="sex"
                id="sex"
                placeholder="" 
                className={cx('info-content')}
                value={sex}
                onChange={(e) => {
                  setSex(e.target.value);
                }}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="job-location" className={cx('info-label')}>
                Địa chỉ<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="job_location"
                id="job-location"
                placeholder="" 
                className={cx('info-content')}
                value={jobLocation}
                onChange={(e) => {
                  setJobLocation(e.target.value);
                }}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="candidate-number" className={cx('info-label')}>
                Số lượng tuyển<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="number"
                name="candidate_number"
                id="candidate-number"
                placeholder="" 
                className={cx('info-content')}
                value={candidateNumber}
                onChange={(e) => {
                  setCandidateNumber(e.target.value);
                }}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="experience-require" className={cx('info-label')}>
                Kinh nghiệm<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="experience_require"
                id="experience-require"
                placeholder="" 
                className={cx('info-content')}
                value={experienceRequire}
                onChange={(e) => {
                  setExperienceRequire(e.target.value);
                }}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="work-from" className={cx('info-label')}>
                Hình thức làm việc<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="work_from"
                id="work-from"
                placeholder="" 
                className={cx('info-content')}
                value={workFrom}
                onChange={(e) => {
                  setWorkFrom(e.target.value);
                }}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="deadline-job" className={cx('info-label')}>
                Thời hạn ứng tuyển<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="date"
                name="deadline_job"
                id="deadline-job"
                placeholder="" 
                className={cx('info-content')}
                value={deadlineJob}
                onChange={(e) => {
                  setDeadlineJob(e.target.value);
                }}
              />
            </div>
            <hr></hr>
            <div className={cx('form-header')}>
              <h2>Chi tiết công việc</h2>
            </div>
            <div className={cx('info-item')}>
              <label htmlFor="job-details" className={cx('info-label')}>
                Mô tả công việc: 
              </label>
              <textarea
                name="job_details"
                id="job-details"
                className={cx('info-content')}
                value={jobDetails} 
                onChange={(e) => {
                  setJobDetails(e.target.value);
                }}
                rows="15"
                cols="80"
              />
            </div>
            <div className={cx('info-item')}>
              <label htmlFor="job-require" className={cx('info-label')}>
                Yêu cầu ứng viên: 
              </label>
              <textarea
                name="job_require"
                id="job-require"
                className={cx('info-content')}
                value={jobRequire} 
                onChange={(e) => {
                  setJobRequire(e.target.value);
                }}
                rows="15"
                cols="80"
              />
            </div>
            <div className={cx('info-item')}>
              <label htmlFor="job-benefit" className={cx('info-label')}>
                Quyền lợi: 
              </label>
              <textarea
                name="job_benefit"
                id="job-benefit"
                className={cx('info-content')}
                value={jobBenefit} 
                onChange={(e) => {
                  setJobBenefit(e.target.value);
                }}
                rows="15"
                cols="80"
              />
            </div>
            <div className={cx("submit-button")}>
              <button style={{ border: 'none' }} className={cx('button-green')} type="submit">
                <FaAddressBook className={cx('icon')} />
                <span>Xác nhận</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddJobModal;
