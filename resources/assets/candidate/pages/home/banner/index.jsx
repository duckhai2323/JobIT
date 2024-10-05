import React from 'react';
import style from './banner.module.scss';
import classNames from 'classnames/bind';
import banner1 from '../../../../shared/logo/banner1.png';
import banner2 from '../../../../shared/logo/banner2.png';
import banner3 from '../../../../shared/logo/banner3.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const cx = classNames.bind(style);
const Banner = () => {
  return (
    <div className={cx('section-banner')}>
      <div className={cx('banner-group')}>
        <div className={cx('banner-group-image')}>
          <img src={banner1} />
        </div>
        <div className={cx('banner-group-image')}>
          <img src={banner2} />
        </div>
        <div className={cx('banner-group-image')}>
          <img src={banner3} />
        </div>
        <div className={cx('arrow-button-left')}>
          <IoIosArrowBack className={cx('icon-arrow')} />
        </div>
        <div className={cx('arrow-button-right')}>
          <IoIosArrowForward className={cx('icon-arrow')} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
