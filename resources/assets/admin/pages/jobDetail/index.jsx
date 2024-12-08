import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/adminJobsReducer';
import styles from './jobDetail.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit, FaAddressBook } from "react-icons/fa";
import AdminLayout from '../../components/layout';
import { useParams } from 'react-router-dom';
import { getInforJobDetail, updateInforJobDetail } from '@/services/jobDetailService';
import { FadeLoader } from 'react-spinners';

const cx = classNames.bind(styles);

const JobDetail = () => {
  const dispatch = useDispatch();
  const { jobId } = useParams();
  const [isEditingTab1, setIsEditingTab1] = useState(false);
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getJobDetail = async () => {
    setLoading(true);
    const response = await getInforJobDetail(jobId);
    if (response.success) {
      const jobData = response.data;
      console.log(jobData);
      setCompanyImage(jobData.company_image);
      setJobTitle(jobData.job_title);
      setCompanyName(jobData.company_name);
      setJobDetails(jobData.job_details);
      setJobRequire(jobData.job_require);
      setJobBenefit(jobData.job_benefit);
      setSalary(jobData.salary);
      setJobLocation(jobData.job_location);
      setCandidateNumber(jobData.candidate_number);
      setExperienceRequire(jobData.experience_require);
      setWorkFrom(jobData.work_form);
      setDeadlineJob(jobData.deadline_job);
      console.log(jobDetails);
      setLoading(false);
    }
    return null;
  };

  const updateJob = (e) => {
    e.preventDefault();
    setIsEditingTab1(false);
    const inputData = {
      job_title: jobTitle,
      company_name: companyName,
      job_details: jobDetails,
      job_require: jobRequire,
      job_benefit: jobBenefit,
      salary: salary,
      job_location: jobLocation,
      candidate_number: candidateNumber,
      experience_require: experienceRequire,
      work_form: workFrom,
      deadline_job: deadlineJob,
    };
    console.log(inputData);
    dispatch(
      Actions.updateJobRequest({
        jobId: jobId,
        data: inputData,
      })
    );
    setLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }
  useEffect(() => {
    setIsEditingTab1(false);
    setError("");
  }, []);
  useEffect(() => {
    console.log(jobId);
    if (jobId) {
      getJobDetail();
    } 
  }, [jobId]);
  return (
  <div>
    <AdminLayout>
      <div className={cx('job-info-modal')}>
        <div className={cx('modal-background')}>
          <div className={cx('modal-container')}>
            {isEditingTab1 ? (
              <div className={cx('modal-body')}>
                <div className={cx("job-logo")}>
                  <img 
                    src={companyImage ? companyImage : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"}
                    alt="job-logo" 
                    className={cx("logo")} 
                  />
                </div>
                <form onSubmit={updateJob}>
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
                    <label htmlFor="company-name" className={cx('info-label')}>
                      Thuộc về công ty<i style={{ color: 'red' }}>*</i> : 
                    </label>
                    <select
                      name="company_name"
                      id="company-name"
                      className={cx('info-content')}
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
    
                      }}
                    >
                      <option value="Công ty Cổ phần Truyền thông Vàng châu Á">Công ty Cổ phần Truyền thông Vàng châu Á</option>
                      <option value="CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ">CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ</option>
                    </select>
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
                      Mức lương<i style={{ color: 'red' }}>*</i> : 
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
                      type="text"
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
                  <div className={cx('info-large-item')}>
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
                  <div className={cx('info-large-item')}>
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
                  <div className={cx('info-large-item')}>
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
            ) : (
              <div className={cx('modal-body')}>
                <div className={cx("first-row")}>
                  <div className={cx("job-logo")}>
                    <img 
                      src={companyImage ? companyImage : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"} 
                      alt="job-logo" 
                      className={cx("logo")} 
                    />
                  </div>
                  <button className={cx('button-green')} onClick={() => setIsEditingTab1(true)}>
                    <FaEdit className={cx('icon')} />
                    <span>Chỉnh sửa</span>
                  </button>
                </div>
                <div className={cx('form-header')}>
                  <h2>Thông tin chung</h2>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Tên công việc: </div>
                  <div className={cx('info-content')}>{jobTitle}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Thuộc về công ty: </div>
                  <div className={cx('info-content')}>{companyName}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Mức lương: </div>
                  <div className={cx('info-content')}>{salary}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Địa chỉ: </div>
                  <div className={cx('info-content')}>{jobLocation}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Số lượng tuyển: </div>
                  <div className={cx('info-content')}>{candidateNumber} người</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Kinh nghiệm: </div>
                  <div className={cx('info-content')}>{experienceRequire}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Hình thức làm việc: </div>
                  <div className={cx('info-content')}>{workFrom}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Thời hạn ứng tuyển: </div>
                  <div className={cx('info-content')}>{deadlineJob}</div>
                </div>
                <hr></hr>
                <div className={cx('form-header')}>
                  <h2>Chi tiết công việc</h2>
                </div>
                <div className={cx('info-large-item')}>
                  <div className={cx('info-label')}>Mô tả công việc: </div>
                  <div className={cx('info-content')}>
                    <div className={cx('job-intro')}>
                    {jobDetails.split("- ").map((line, index) => (
                      index > 0 && line && <li key={index}>{line}</li>
                    ))}
                    </div>
                  </div>
                </div>
                <div className={cx('info-large-item')}>
                  <div className={cx('info-label')}>Yêu cầu ứng viên: </div>
                  <div className={cx('info-content')}>
                    <div className={cx('job-intro')}>
                    {jobRequire.split("- ").map((line, index) => (
                      index > 0 && line && <li key={index}>{line}</li>
                    ))}
                    </div>
                  </div>
                </div>
                <div className={cx('info-large-item')}>
                  <div className={cx('info-label')}>Quyền lợi: </div>
                  <div className={cx('info-content')}>
                    <div className={cx('job-intro')}>
                    {jobBenefit.split("- ").map((line, index) => (
                      index > 0 && line && <li key={index}>{line}</li>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
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
  </div>
  )
}

export default JobDetail;
