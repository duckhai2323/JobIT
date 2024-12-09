import React from 'react';
import styles from './jobItem.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const JobItem = ({ jobTitle, location, companyImage }) => {
  return (
    <div className={cx('job-item')}>
      <div className={cx('job-item__company-logo')}>
        <img 
          className={cx('job-item__company-logo__img')} 
          src={companyImage ? companyImage : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"} 
        />
      </div>
      <div className={cx('job-item__content')}>
        <span className={cx('job-title')}>
          {jobTitle}
        </span>
        <span className={cx('location')}>
          {location}
        </span>
      </div>
    </div>
  )
}

export default JobItem;
