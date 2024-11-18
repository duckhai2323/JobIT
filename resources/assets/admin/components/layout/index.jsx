import React, { useState } from 'react';
import styles from './layout.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { IoMdNotifications } from 'react-icons/io';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { IoBarChartSharp } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import logo from "../../../shared/logo/logo_jobit.png";

const cx = classNames.bind(styles);

const AdminLayout = ({ children }) => {
  const [currentContent, setCurrentContent] = useState('1');
  const onChangeContent = (tab) => {
    setCurrentContent(tab);
    console.log(currentContent);
  }
  return (
    <div className={cx('layout-section')}>
      <div className={cx('layout-section__header')}>
        <div className={cx('header__left')}>
          <div className={cx('header__logo')}>
            <img src={logo} alt='logo-image' />
          </div>
        </div>
        <div className={cx('header__right')}>
          <div className={cx('header__icon')}>
            <IoMdNotifications size={'24px'} />
          </div>
          <div className={cx('header__icon')}>
            <BiSolidMessageDetail size={'24px'} />
          </div>
          <div className={cx('header__avatar')}>
            <img />
          </div>
        </div>
      </div>
      <div className={cx('layout-section__content')}>
        <div className={cx('layout-section__sidebar')}>
          <div className={cx('sidebar__title')}>TRANG QUẢN LÝ ADMIN</div>
          <div className={cx('sidebar__statistics')}>
            <NavLink to='/' className={({ isActive }) => cx('nav-link', { active: isActive })}><button onClick={() => onChangeContent(1)} className={cx('sidebar__button')}>
              <span><IoBarChartSharp /></span> Thống kê
            </button></NavLink>
          </div>
          <div className={cx('sidebar__companies')}>
            <NavLink to='/companies' className={({ isActive }) => cx('nav-link', { active: isActive })}><button onClick={() => onChangeContent(2)} className={cx('sidebar__button')}>
              <span><CgOrganisation /></span> Danh sách công ty
            </button></NavLink>
          </div>
          <div className={cx('sidebar__users')}>
            <NavLink to='/users' className={({ isActive }) => cx('nav-link', { active: isActive })}><button onClick={() => onChangeContent(3)} className={cx('sidebar__button')}>
              <span><FaUser /></span> Danh sách ứng viên
            </button></NavLink>
          </div>
          <div className={cx('sidebar__admins')}>
            <NavLink to='/admins' className={({ isActive }) => cx('nav-link', { active: isActive })}><button onClick={() => onChangeContent(4)} className={cx('sidebar__button')}>
              <span><RiAdminFill /></span> Danh sách quản trị viên
            </button></NavLink>
          </div>
          <div className={cx('sidebar__jobs')}>
            <NavLink to='/jobs' className={({ isActive }) => cx('nav-link', { active: isActive })}><button onClick={() => onChangeContent(5)} className={cx('sidebar__button')}>
              <span><FaBriefcase /></span> Danh sách công việc
            </button></NavLink>
          </div>
        </div>
        <div className={cx('display-content')}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
