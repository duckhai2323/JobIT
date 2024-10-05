import React from 'react';
import styles from './layoutCandidate.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../shared/logo/logo_jobit.png';
import avatar from '../../../shared/logo/avatar.jpg';
import { IoMdNotifications } from 'react-icons/io';
import { BiSolidMessageDetail } from 'react-icons/bi';

const cx = classNames.bind(styles);

const LayoutCandidate = ({ children }) => {
  return (
    <div className={cx('layout-candidate')}>
      <div className={cx('layout-candidate__navigate-bar')}>
        <div className={cx('navigate-bar-left')}>
          <div className={cx('header-logo')}>
            <img src={logo} alt='logo-image' />
          </div>
          <div className={cx('header-item')}>
            <span>Việc làm</span>
          </div>
          <div className={cx('header-item')}>
            <span>Hồ sơ & CV</span>
          </div>
          <div className={cx('header-item')}>
            <span>Công ty</span>
          </div>
          <div className={cx('header-item')}>
            <span>Phỏng vấn</span>
          </div>
        </div>

        <div className={cx('navigate-bar-right')}>
          <div className={cx('navigate-bar-right__icon')}>
            <IoMdNotifications size={'24px'} />
          </div>
          <div className={cx('navigate-bar-right__icon')}>
            <BiSolidMessageDetail size={'24px'} />
          </div>
          <div className={cx('navigate-bar-right__avatar')}>
            <img src={avatar} />
          </div>
        </div>
      </div>
      <div className={cx('content-section')}>{children}</div>
    </div>
  );
};

export default LayoutCandidate;
