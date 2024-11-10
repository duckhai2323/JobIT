import React, { useState, useEffect } from 'react';
import styles from './addAdminModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaAddressBook } from "react-icons/fa";

const cx = classNames.bind(styles);

const AddAdminModal = ({ displayModal, onClickHandle, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const addAdmin = (e) => {
    e.preventDefault();
    if(password === confirmPassword) {
      setError("");
      onSubmit();
      onClickHandle();
    } else {
      setError("Mật khẩu và nhập lại mật khẩu không khớp.")
    }
  }

  useEffect(() => {
    if(displayModal === 'none') {
      setError("");
    }
  }, [displayModal])

  return (
    <div style={{ display: displayModal }} className={cx('admin-info-modal')}>
      <div className={cx('modal-background')}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-header')}>
            <div className={cx('tabs')}><span className={cx('modal-title')}>Thêm công ty mới</span></div>
            <button onClick={onClickHandle} className={cx('close-button')}>
              <IoMdClose />
            </button>
          </div>
          <form className={cx('modal-body')} onSubmit={addAdmin}>
            <div className={cx('form-header')}>
              <h2>Thông tin tài khoản</h2>
            </div>
            {error && (<div className={cx('error-message')}>
              <i style={{ color: 'red' }}>*</i> <span style={{ color: 'red' }}>{error}</span>
            </div>)}
            <div className={cx('info-item')}>
              <label for="admin-name" className={cx('info-label')}>
                Tên quản trị viên<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="admin-name"
                id="admin-name"
                placeholder="" 
                className={cx('info-content')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="email" className={cx('info-label')}>
                Email đăng nhập<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="" 
                className={cx('info-content')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="password" className={cx('info-label')}>
                Mật khẩu<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="" 
                className={cx('info-content')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="confirm-password" className={cx('info-label')}>
                Nhập lại mật khẩu<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
                placeholder="" 
                className={cx('info-content')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className={cx("submit-button")}>
              <button style={{ border: 'none' }} className={cx('button-green')} type="submit">
                <FaAddressBook className={cx('icon')} />
                <span>Xác nhận</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAdminModal;
