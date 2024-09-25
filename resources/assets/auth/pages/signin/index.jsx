import AuthLayout from '@/auth/components/layout';
import React from 'react';
import styles from './signin.module.scss';
import classNames from 'classnames/bind';
import { MdEmail } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbShieldLockFilled } from 'react-icons/tb';
import SocialNetWork from '@/auth/components/social_network';

const cx = classNames.bind(styles);

function SignIn() {
  return (
    <AuthLayout>
      <div className={cx('section-signin')}>
        <div className={cx('section-signin__header')}>
          <span className={cx('header-title')}>Chào mừng bạn đã trở lại</span>
          <span className={cx('header-subtitle')}>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
          </span>
        </div>
        <div className={cx('section-signin__form')}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '22px', width: '90%' }}>
            <label className={cx('form-input-group')}>
              <span className={cx('form-input-group__label')}>Email</span>
              <br />
              <div className={cx('form-input-group__input')}>
                <MdEmail size={'22px'} color={'#00b14f'} />
                <input type='text' name='email' placeholder='Email' />
              </div>
            </label>

            <label className={cx('form-input-group')}>
              <span className={cx('form-input-group__label')}>Password</span>
              <br />
              <div className={cx('form-input-group__input')}>
                <TbShieldLockFilled size={'22px'} color={'#00b14f'} />
                <input type='text' name='password' placeholder='Mật khẩu' />
                <FaEyeSlash size={'22px'} color={'#bcc1c5'} />
              </div>
            </label>

            <span className={cx('title__fogot')}>Quên mật khẩu?</span>

            <input type='submit' value={'Đăng nhập'} className={cx('submit-button')} />
          </form>

          <div className={cx('section-signin__other')}>
            <span>Hoặc đăng nhập bằng</span>
            <SocialNetWork />
            <span className={cx('handle-signup')}>Bạn chưa có tài khoản? Đăng ký ngay</span>
            <hr class={cx('solid-divi')} />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default SignIn;
