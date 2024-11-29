import React from 'react';
import style from './itemJob.module.scss';
import classNames from 'classnames/bind';
import { FaRegHeart } from 'react-icons/fa6';

const cx = classNames.bind(style);

const JobItem = (props) => {
  const { company_name, company_image, job_title, salary, job_location } = props;
  return (
    <div className={cx('item-job-group')}>
      <div className={cx('item-job-group__company-image')}>
        <img src={company_image} />
      </div>
      <div className={cx('item-job-group__content')}>
        <span className={cx('job-title')}>{job_title}</span>
        <span className={cx('company-name')}>{company_name}</span>
        <div className={cx('footer')}>
          <div className={cx('footer-infor-group')}>
            <div className={cx('footer-infor')}>
              <span>{salary}</span>
            </div>
            <div className={cx('footer-infor')}>
              <span>{job_location}</span>
            </div>
          </div>
          <FaRegHeart style={{ color: '#6f7882', fontSize: '18px', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default JobItem;
