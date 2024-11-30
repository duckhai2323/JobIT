import React from 'react';
import style from './footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
const FooterHome = ({ background }) => {
  return (
    <div className={cx('section-footer')} style={{ background: background }}>
      <div className={cx('footer-group')}>
        <div className={cx('company-infor')}>
          <div className={cx('company-infor__image')}>
            <img src={'http://127.0.0.1:8080/build/images/logo_jobit.png?9ee20b3c2ff45fab217ed1a851eb40a7'} />
          </div>
          <div className={cx('company-infor__title')}>
            <span>Liên hệ</span>
            <div className={cx('title-group')}>
              <span className={cx('title')}>Hotline:</span>
              <span className={cx('content')}>0868338668:</span>
            </div>
            <div className={cx('title-group')}>
              <span className={cx('title')}>Email:</span>
              <span className={cx('content')}>jobitnetwork26@gmail.com:</span>
            </div>
          </div>
        </div>
        <div className={cx('column-infor')}>
          <span style={{ fontSize: '16px', fontWeight: '600' }}>Hồ sơ và CV</span>
          <span>Tầm nhìn</span>
          <span>Sứ mệnh</span>
          <span>Giá trị cốt lõi</span>
          <span>Cơ hội nghề nghiệp</span>
        </div>
        <div className={cx('column-infor')}>
          <span style={{ fontSize: '16px', fontWeight: '600' }}>Về chúng tôi</span>
          <span>Quản lý CV của bạn</span>
          <span>JobIT Profile</span>
          <span>Công nghệ thế mạnh</span>
          <span>Kinh nghiệm IT</span>
        </div>
        <div className={cx('column-infor')}>
          <span style={{ fontSize: '16px', fontWeight: '600' }}>Xây dựng nghề nghiệp</span>
          <span>Việc làm tốt nhất</span>
          <span>Việc làm lương cao</span>
          <span>Việc làm AI</span>
          <span>Việc làm Senior</span>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
