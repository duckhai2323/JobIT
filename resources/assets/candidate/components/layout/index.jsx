import React, { useState } from 'react';
import styles from './layoutCandidate.module.scss';
import classNames from 'classnames/bind';
import { IoMdNotifications } from 'react-icons/io';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { FaRegEdit, FaRegArrowAltCircleUp } from 'react-icons/fa';
import { MdLogout, MdOutlineLock, MdBookmarkBorder, MdOutlineSettings, MdApartment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const LayoutCandidate = ({ children }) => {
  const navigate = useNavigate();
  const [openOptionProfile, setOpenOptionProfile] = useState(false);
  return (
    <div className={cx('layout-candidate')}>
      <div className={cx('layout-candidate__navigate-bar')}>
        <div className={cx('navigate-bar-left')}>
          <div
            className={cx('header-logo')}
            onClick={() => {
              navigate('/');
            }}
          >
            <img
              src={'http://127.0.0.1:8080/build/images/logo_jobit.png?9ee20b3c2ff45fab217ed1a851eb40a7'}
              alt='logo-image'
            />
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
          <div
            className={cx('navigate-bar-right__avatar')}
            onClick={() => {
              setOpenOptionProfile(!openOptionProfile);
            }}
          >
            <img src={'https://static.topcv.vn/avatars/1anT8P94WjH0kTjcOtOR_645a8d798b2e6_cvtpl.jpg'} />
          </div>

          <div className={cx('container-option')} style={{ display: openOptionProfile && 'flex' }}>
            <div className={cx('profile-image-group')}>
              <div className={cx('profile-image-group__image')}>
                <img src={'https://static.topcv.vn/avatars/1anT8P94WjH0kTjcOtOR_645a8d798b2e6_cvtpl.jpg'} />
              </div>
              <div className={cx('profile-image-group__infor')}>
                <span className={cx('user-name')}>Tran Duc Khai</span>
                <span className={cx('user-id')}>Mã ứng viên: #4966876</span>
                <span className={cx('user-email')}>tranduckhai26112003@gmail.com</span>
              </div>
            </div>

            <div className={cx('item-option-group')}>
              <div className={cx('item-option-group__item')}>
                <FaRegEdit style={{ fontSize: '20px', color: '#00b14f' }} />
                <span>Cài đặt thông tin hồ sơ</span>
              </div>
              <div className={cx('item-option-group__item')}>
                <FaRegArrowAltCircleUp style={{ fontSize: '20px', color: '#00b14f' }} />
                <span>Công việc ứng tuyển</span>
              </div>
              <div className={cx('item-option-group__item')}>
                <MdBookmarkBorder style={{ fontSize: '20px', color: '#00b14f' }} />
                <span>Công việc đã lưu</span>
              </div>
              <div className={cx('item-option-group__item')}>
                <MdApartment style={{ fontSize: '20px', color: '#00b14f' }} />
                <span>Danh sách công ty theo dõi</span>
              </div>
              <div className={cx('item-option-group__item')}>
                <MdOutlineSettings style={{ fontSize: '20px', color: '#00b14f' }} />
                <span>Cài đặt gợi ý việc làm</span>
              </div>
              <div className={cx('item-option-group__item')}>
                <MdOutlineLock style={{ fontSize: '20px', color: '#00b14f' }} />
                <span>Đổi mật khẩu</span>
              </div>
              <div className={cx('item-option-group__item')}>
                <MdLogout style={{ fontSize: '20px', color: '#00b14f' }} />
                <span style={{ color: '#e74c3c' }}>Đăng xuất</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('content-section')}>{children}</div>
    </div>
  );
};

export default LayoutCandidate;
