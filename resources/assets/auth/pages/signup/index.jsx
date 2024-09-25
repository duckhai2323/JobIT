import AuthLayout from '@/auth/components/layout';
import SocialNetWork from '@/auth/components/social_network';
import React from 'react';
import styles from './signup.module.scss';
import classNames from 'classnames/bind';
import { MdEmail } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbShieldLockFilled } from 'react-icons/tb';
import { IoPersonSharp } from 'react-icons/io5';

const cx = classNames.bind(styles);

function SignUp() {
  return (
    <AuthLayout>
      <div className={cx('section-signup')}>
        <div className={cx('section-signup__header')}>
          <span className={cx('header-title')}>Chào mừng bạn đến với JobIT</span>
          <span className={cx('header-subtitle')}>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
          </span>
        </div>
        <div className={cx('section-signup__form')}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '22px', width: '90%' }}>
            <label className={cx('form-input-group')}>
              <span className={cx('form-input-group__label')}>Họ và tên</span>
              <br />
              <div className={cx('form-input-group__input')}>
                <IoPersonSharp size={'22px'} color={'#00b14f'} />
                <input type='text' name='name' placeholder='Nhập họ tên' />
              </div>
            </label>

            <label className={cx('form-input-group')}>
              <span className={cx('form-input-group__label')}>Email</span>
              <br />
              <div className={cx('form-input-group__input')}>
                <MdEmail size={'22px'} color={'#00b14f'} />
                <input type='text' name='email' placeholder='Nhập email' />
              </div>
            </label>

            <label className={cx('form-input-group')}>
              <span className={cx('form-input-group__label')}>Mật khẩu</span>
              <br />
              <div className={cx('form-input-group__input')}>
                <TbShieldLockFilled size={'22px'} color={'#00b14f'} />
                <input type='password' name='password' placeholder='Nhập mật khẩu' />
                <FaEyeSlash size={'22px'} color={'#bcc1c5'} />
              </div>
            </label>

            <label className={cx('form-input-group')}>
              <span className={cx('form-input-group__label')}>Xác nhận mật khẩu</span>
              <br />
              <div className={cx('form-input-group__input')}>
                <TbShieldLockFilled size={'22px'} color={'#00b14f'} />
                <input type='password' name='confirm_password' placeholder='Nhập lại mật khẩu' />
                <FaEyeSlash size={'22px'} color={'#bcc1c5'} />
              </div>
            </label>

            <div className={cx('checkbox-footer')}>
              <input type='checkbox' id='customCheckbox' />
              <span className={cx('title__fogot')}>
                Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của JobIT
              </span>
            </div>

            <input type='submit' value={'Đăng ký'} className={cx('submit-button')} />
          </form>

          <div className={cx('section-signup__other')}>
            <span>Hoặc đăng nhập bằng</span>
            <SocialNetWork />
            <span className={cx('handle-signup')}>Bạn đã có tài khoản? Đăng nhập ngay</span>
            <hr class={cx('solid-divi')} />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
