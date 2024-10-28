import React from 'react';
import style from './recommendJobs.module.scss';
import classNames from 'classnames/bind';
import { FaRegHeart } from 'react-icons/fa';
import { MdApartment, MdOutlineLocationOn } from 'react-icons/md';

const cx = classNames.bind(style);

const JobItemRecommend = () => {
  return (
    <div className={cx('item-job-group')}>
      <div className={cx('item-job-group__img')}></div>

      <div className={cx('item-job-group__descript')}>
        <div className={cx('job-title-group')}>
          <div className={cx('job-title-group__left')}>
            <span className={cx('job-title-group__left-title')}>Lập Trình Viên PHP Laravel (Middle)</span>
            <div className={cx('job-title-group__left-subtitle-group')}>
              <MdApartment style={{ fontSize: '20px' }} />
              <span className={cx('subtitle')}>Công ty cổ phần Công nghệ Bekisoft</span>
            </div>
          </div>
          <span className={cx('salary')}>Tới 15 triệu</span>
        </div>

        <div className={cx('item-job-group__bottom')}>
          <div className={cx('footer-left')}>
            <MdOutlineLocationOn style={{ fontSize: '20px' }} />
            <span className={cx('subtitle')}>Hà Nội</span>
          </div>
          <div className={cx('footer-right')}>
            <div className={cx('icon-heart')}>
              <FaRegHeart style={{ color: '#00b14f', fontSize: '25px', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItemRecommend;
