import React from 'react';
import styles from './layout.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { IoMdNotifications } from 'react-icons/io';
import { BiSolidMessageDetail } from 'react-icons/bi';
import logo from "../../../shared/logo/logo_jobit.png";

const cx = classNames.bind(styles);

const AdminLayout = ({ children }) => {
  return (
    <div className={cx('layout-section')}>
      <div className={cx('layout-section__navbar')}>
        <div className={cx('navbar__left')}>
          <div className={cx('navbar__logo')}>
            <img src={logo} alt='logo-image' />
          </div>
          <div className={cx('navbar__statistics')}>
            <NavLink to='/'><button className={cx('navbar__button')}>Thống kê</button></NavLink>
          </div>
          <div className={cx('navbar__companies')}>
            <NavLink to='/companies'><button className={cx('navbar__button')}>Danh sách công ty</button></NavLink>
          </div>
          <div className={cx('navbar__users')}>
            <NavLink to='/'><button className={cx('navbar__button')}>Danh sách người dùng</button></NavLink>
          </div>
          <div className={cx('navbar__jobs')}>
            <NavLink to='/'><button className={cx('navbar__button')}>Danh sách công việc</button></NavLink>
          </div>
        </div>
        <div className={cx('navbar__right')}>
          <div className={cx('navbar__icon')}>
            <IoMdNotifications size={'24px'} />
          </div>
          <div className={cx('navbar__icon')}>
            <BiSolidMessageDetail size={'24px'} />
          </div>
          <div className={cx('navbar__avatar')}>
            <img />
          </div>
        </div>
      </div>
      <div className={cx('layout-section__content')}>{children}</div>
    </div>
  );
};

export default AdminLayout;
