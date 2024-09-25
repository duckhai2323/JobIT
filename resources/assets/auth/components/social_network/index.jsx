import React from 'react';
import style from './social_network.module.scss';
import classNames from 'classnames/bind';
import { MdFacebook } from 'react-icons/md';
import { FaGoogle } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

const cx = classNames.bind(style);
const SocialNetWork = () => {
  return (
    <div className={cx('social-network-account')}>
      <div className={cx('account-app')} style={{ background: '#e73b2f' }}>
        <FaGoogle />
        <span>Google</span>
      </div>

      <div className={cx('account-app')} style={{ background: '#1877f2' }}>
        <MdFacebook />
        <span>Facebook</span>
      </div>

      <div className={cx('account-app')} style={{ background: '#0a66c2' }}>
        <IoLogoLinkedin />
        <span>Linkedin</span>
      </div>
    </div>
  );
};

export default SocialNetWork;
