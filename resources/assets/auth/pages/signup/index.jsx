import React, { useState } from 'react';
import AuthLayout from '@/auth/components/layout';
import SocialNetWork from '@/auth/components/social_network';
import styles from './signup.module.scss';
import classNames from 'classnames/bind';
import { MdEmail } from 'react-icons/md';
import { FaEyeSlash } from 'react-icons/fa';
import { TbShieldLockFilled } from 'react-icons/tb';
import { IoPersonSharp } from 'react-icons/io5';
import { signUpService } from '@/services/authService';
import { toast } from 'react-toastify';
import FadeLoader from 'react-spinners/FadeLoader';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignUp() {
  const [loading, setLoading] = useState('none');
  const [inputData, setInputData] = useState({
    name: null,
    email: null,
    password: null,
    repassword: null,
    role: '0',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading('flex');
    const res = await signUpService(inputData);
    if (res.success) {
      toast.success('Đăng ký thành công');
    } else {
      toast.error(res?.message);
    }
    setLoading('none');
  };

  return (
    <div style={{ position: 'relative' }}>
      <AuthLayout>
        <div className={cx('section-signup')}>
          <div className={cx('section-signup__header')}>
            <span className={cx('header-title')}>Chào mừng bạn đến với JobIT</span>
            <span className={cx('header-subtitle')}>
              Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
            </span>
          </div>
          <div className={cx('section-signup__form')}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', width: '90%' }}>
              <label className={cx('form-input-group')}>
                <span className={cx('form-input-group__label')}>Họ và tên</span>
                <div className={cx('form-input-group__input')}>
                  <IoPersonSharp size={22} color='#00b14f' />
                  <input type='text' name='name' placeholder='Nhập họ tên' onChange={onChangeInput} />
                </div>
              </label>

              <label className={cx('form-input-group')}>
                <span className={cx('form-input-group__label')}>Email</span>
                <div className={cx('form-input-group__input')}>
                  <MdEmail size={22} color='#00b14f' />
                  <input type='text' name='email' placeholder='Nhập email' onChange={onChangeInput} />
                </div>
              </label>

              <label className={cx('form-input-group')}>
                <span className={cx('form-input-group__label')}>Mật khẩu</span>
                <div className={cx('form-input-group__input')}>
                  <TbShieldLockFilled size={22} color='#00b14f' />
                  <input type='password' name='password' placeholder='Nhập mật khẩu' onChange={onChangeInput} />
                  <FaEyeSlash size={22} color='#bcc1c5' />
                </div>
              </label>

              <label className={cx('form-input-group')}>
                <span className={cx('form-input-group__label')}>Xác nhận mật khẩu</span>
                <div className={cx('form-input-group__input')}>
                  <TbShieldLockFilled size={22} color='#00b14f' />
                  <input type='password' name='repassword' placeholder='Nhập lại mật khẩu' onChange={onChangeInput} />
                  <FaEyeSlash size={22} color='#bcc1c5' />
                </div>
              </label>

              <div className={cx('checkbox-footer')}>
                <input type='checkbox' id='customCheckbox' />
                <span className={cx('title__fogot')}>
                  Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của JobIT
                </span>
              </div>

              <button type='submit' className={cx('submit-button')} onClick={handleRegister}>
                Đăng ký
              </button>
            </div>

            <div className={cx('section-signup__other')}>
              <span>Hoặc đăng nhập bằng</span>
              <SocialNetWork />
              <NavLink to='/signin' className={cx('handle-signup')}>
                Bạn đã có tài khoản? Đăng nhập ngay
              </NavLink>
              <hr className={cx('solid-divi')} />
            </div>
          </div>
        </div>
      </AuthLayout>
      <div style={{ display: loading }} className={cx('loading')}>
        <div>
          <FadeLoader color='rgba(255, 255, 255, 1)' height='10' width='6' />
          <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
