import React from 'react';
import style from './jobItemHight.module.scss';
import classNames from 'classnames/bind';
import { FaRegHeart } from 'react-icons/fa';

const cx = classNames.bind(style);

const JobItemHight = () => {
  return (
    <div className={cx('item-job-group')}>
      <div className={cx('item-job-group__img')}></div>

      <div className={cx('item-job-group__descript')}>
        <div className={cx('job-title-group')}>
          <div className={cx('job-title-group__left')}>
            <span className={cx('job-title-group__left-title')}>Lập Trình Viên PHP Laravel (Middle)</span>
            <span className={cx('job-title-group__left-subtitle')}>Công ty cổ phần Công nghệ Bekisoft</span>
          </div>
          <span className={cx('salary')}>Tới 15 triệu</span>
        </div>

        <div className={cx('item-job-group__bottom')}>
          <div className={cx('footer-left')}>
            <div className={cx('footer-infor')}>
              <span>Han: 23/10/2025</span>
            </div>
            <div className={cx('footer-infor')}>
              <span>Ha Noi</span>
            </div>
          </div>

          <div className={cx('footer-right')}>
            <button>Ung tuyen</button>
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
