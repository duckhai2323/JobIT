import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './layout.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { IoMdNotifications, IoIosLogOut } from 'react-icons/io';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { IoBarChartSharp } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import logo from "../../../shared/logo/logo_jobit.png";
import { Actions } from '@/redux/reducers/auth/authReducer';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

const cx = classNames.bind(styles);

const AdminLayout = ({ children }) => {
  const { authState } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log('Logged out!');
    // Thực hiện các thao tác logout tại đây
    dispatch(Actions.logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate('/');
  };
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
            <img src='http://127.0.0.1:8080/build/images/logo_jobit.png?9ee20b3c2ff45fab217ed1a851eb40a7' alt='logo-image' />
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
            <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt='admin-avatar' onClick={handleAvatarClick} />
            {isMenuOpen && (
              <div className={cx('menu')}>
                <div className={cx('menu-item')}>
                  <p className={cx('bold')}>{authState.data.data.name}</p>
                  <p className={cx('small-italic')}>{authState.data.data.email}</p>
                </div>
                <button className={cx('logout-button')} onClick={handleLogout}>
                  <IoIosLogOut />  Đăng xuất
                </button>
              </div>
            )}
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
