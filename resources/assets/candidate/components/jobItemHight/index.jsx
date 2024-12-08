import React from 'react';
import style from './jobItemHight.module.scss';
import classNames from 'classnames/bind';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { applyJobAction } from '@/services/jobfairService';
import { useToast } from '../Toast';
import { deleteSaveJob, saveJob } from '@/services/saveJobService';
import { FaHeart } from 'react-icons/fa6';

const cx = classNames.bind(style);

const JobItemHight = (props) => {
  const { jobDetail, applyJobsState, authState, getListJobs, saveJobsState, getListSaveJobs } = props;
  const contant =
    jobDetail && applyJobsState.jobsApply && applyJobsState.jobsApply.find((item) => item.job_id === jobDetail.job_id);
  const toast = useToast();
  const contantSaveJob =
    jobDetail && saveJobsState.saveJobs && saveJobsState.saveJobs.find((item) => item.job_id === jobDetail.job_id);

  const handleApply = async (event) => {
    event.stopPropagation();
    const response = await applyJobAction({
      job_id: jobDetail.job_id,
      user_id: authState.data.data.id,
      status: 1,
      company_id: jobDetail.company_id,
      status_offer: 0,
    });
    if (response.success) {
      toast.success('Bạn đã ứng tuyển thành công');
      getListJobs();
    } else {
      toast.error('Ứng tuyển thất bại');
    }
  };

  const handleSaveJob = async (event) => {
    event.stopPropagation();
    const response = contantSaveJob
      ? await deleteSaveJob(jobDetail.job_id, authState.data.data.id)
      : await saveJob({
          job_id: jobDetail.job_id,
          user_id: authState.data.data.id,
        });

    if (response.success) {
      !contantSaveJob ? toast.success('Bạn đã lưu tin thành công') : toast.success('Bỏ Lưu thành công');
      getListSaveJobs();
    } else {
      toast.error('Lưu tin thất bại');
    }
  };

  const navigate = useNavigate();

  return (
    <div
      className={cx('item-job-group')}
      onClick={() => {
        navigate(`/jobdetail/${jobDetail.job_id}`);
      }}
    >
      <div className={cx('item-job-group__img')}>
        <img src={jobDetail.company_image} alt='company-image' />
      </div>

      <div className={cx('item-job-group__descript')}>
        <div className={cx('job-title-group')}>
          <div className={cx('job-title-group__left')}>
            <span className={cx('job-title-group__left-title')}>{jobDetail.job_title}</span>
            <span className={cx('job-title-group__left-subtitle')}>{jobDetail.company_name}</span>
          </div>
          <span className={cx('salary')}>{jobDetail.salary}</span>
        </div>

        <div className={cx('item-job-group__bottom')}>
          <div className={cx('footer-left')}>
            <div className={cx('footer-infor')}>
              <span>{`Hạn: ${jobDetail.deadline_job}`}</span>
            </div>
            <div className={cx('footer-infor')}>
              <span>{jobDetail.job_location}</span>
            </div>
          </div>

          <div className={cx('footer-right')}>
            {!contant ? (
              <button className={cx('apply')} onClick={(e) => handleApply(e)}>
                Ứng tuyển
              </button>
            ) : (
              <button className={cx('apply-ed')}>Đã Ứng tuyển</button>
            )}
            <div className={cx('icon-heart')} onClick={(e) => handleSaveJob(e)}>
              {contantSaveJob ? (
                <FaHeart style={{ color: '#00b14f', fontSize: '16px', cursor: 'pointer' }} />
              ) : (
                <FaRegHeart style={{ color: '#00b14f', fontSize: '16px', cursor: 'pointer' }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobItemHight;
