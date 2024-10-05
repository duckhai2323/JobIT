import React from 'react';
import style from './itemJob.module.scss';
import classNames from 'classnames/bind';
import { FaRegHeart } from 'react-icons/fa6';

const cx = classNames.bind(style);

const JobItem = () => {
  return (
    <div className={cx('item-job-group')}>
      <div className={cx('item-job-group__company-image')}>
        <img src='https://avatars.githubusercontent.com/u/2322183?s=200&v=4' />
      </div>
      <div className={cx('item-job-group__content')}>
        <span className={cx('job-title')}>
          Chuyên Viên Kinh Doanh Xuất Nhập Khẩu/Order Hàng Trung Quốc - Taobao,1688 - Thưởng 2 Triệu Khi Nhận Việc
        </span>
        <span className={cx('company-name')}>CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ</span>
        <div className={cx('footer')}>
          <div className={cx('footer-infor-group')}>
            <div className={cx('footer-infor')}>
              <span>8 - 20 triệu </span>
            </div>
            <div className={cx('footer-infor')}>
              <span>Ha Noi</span>
            </div>
          </div>
          <FaRegHeart style={{ color: '#6f7882', fontSize: '18px', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default JobItem;
