import AuthLayout from '@/auth/components/layout';
import React, { useState } from 'react';
import styles from './signin.module.scss';
import classNames from 'classnames/bind';
import { MdEmail } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbShieldLockFilled } from 'react-icons/tb';
import SocialNetWork from '@/auth/components/social_network';
import useAuth from '@/hooks/useAuth';
import FadeLoader from 'react-spinners/FadeLoader';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignIn() {
  const { authState, signInRequest } = useAuth();
  const [inputData, setInputData] = useState({
    email: null,
    password: null,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    console.log(authState);
    e.preventDefault();
    signInRequest(inputData);
  };

  return (
    <div style={{ position: 'relative' }}>
      <AuthLayout>
        <div className={cx('section-signin')}>
          <div className={cx('section-signin__header')}>
            <span className={cx('header-title')}>Chào mừng bạn đã trở lại</span>
            <span className={cx('header-subtitle')}>
              Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
            </span>
          </div>
          <div className={cx('section-signin__form')}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', width: '90%' }}>
              <label className={cx('form-input-group')}>
                <span className={cx('form-input-group__label')}>Email</span>
                <br />
                <div className={cx('form-input-group__input')}>
                  <MdEmail size={'22px'} color={'#00b14f'} />
                  <input type='text' name='email' placeholder='Email' onChange={onChangeInput} />
                </div>
              </label>

              <label className={cx('form-input-group')}>
                <span className={cx('form-input-group__label')}>Password</span>
                <br />
                <div className={cx('form-input-group__input')}>
                  <TbShieldLockFilled size={'22px'} color={'#00b14f'} />
                  <input type='text' name='password' placeholder='Mật khẩu' onChange={onChangeInput} />
                  <FaEyeSlash size={'22px'} color={'#bcc1c5'} />
                </div>
              </label>

              <span className={cx('title__fogot')}>Quên mật khẩu?</span>

              <button type='submit' className={cx('submit-button')} onClick={handleSignIn}>
                Đăng nhập
              </button>
            </div>

            <div className={cx('section-signin__other')}>
              <span>Hoặc đăng nhập bằng</span>
              <SocialNetWork />
              <NavLink to='/signup' className={cx('handle-signup')}>
                Bạn chưa có tài khoản? Đăng ký ngay
              </NavLink>
              <hr class={cx('solid-divi')} />
            </div>
          </div>
        </div>
      </AuthLayout>
      <div style={{ display: authState.loading ? 'flex' : 'none' }} className={cx('loading')}>
        <div>
          <FadeLoader color='rgba(255, 255, 255, 1)' height='10' width='6' />
          <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
