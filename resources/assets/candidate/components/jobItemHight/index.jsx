import React from 'react';
import style from './jobItemHight.module.scss';
import classNames from 'classnames/bind';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

const JobItemHight = (props) => {
  const { jobDetail } = props;
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
            <button>Ứng tuyển</button>
            <div className={cx('icon-heart')}>
              <FaRegHeart style={{ color: '#00b14f', fontSize: '16px', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobItemHight;
