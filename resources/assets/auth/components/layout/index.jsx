import React from 'react';
import style from './layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const AuthLayout = ({ children }) => {
  return (
    <div className={cx('layout-section')}>
      <div className={cx('layout-section__auth-content')}>{children}</div>
      <div className={cx('layout-section__auth-sidbebar')}>
        <div className={cx('sidebar-title')}>
          <span className={cx('sidebar-title__main')}>
            Làm chủ <br /> công nghệ mới
          </span>
          <span className={cx('sidebar-title__submain')}>JobIT - Hệ sinh thái việc làm CNTT</span>
        </div>
        <div className={cx('auth-arrow')}></div>
      </div>
    </div>
  );
};

export default AuthLayout;
