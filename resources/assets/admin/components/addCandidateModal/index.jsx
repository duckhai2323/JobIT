import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '@/redux/reducers/admin/userReducer';
import styles from './addCandidateModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaAddressBook } from "react-icons/fa";

const cx = classNames.bind(styles);

const AddCandidateModal = ({ displayModal, onClickHandle }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const addCandidate = (e) => {
    e.preventDefault();
    if(password === confirmPassword && password !== "") {
      const inputData = {
        name: name,
        email: email,
        password: password,
        repassword: confirmPassword,
        role: "0",
      };
      console.log(inputData);
      dispatch(Actions.createUserRequest({
        data: inputData,
      }));
      const timer = setTimeout(() => {
        dispatch(Actions.getUsersRequest());
        onClickHandle();
      }, 500);
      setError("");
      return () => clearTimeout(timer);
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
            <div className={cx('tabs')}><span className={cx('modal-title')}>Thêm ứng viên mới</span></div>
            <button onClick={onClickHandle} className={cx('close-button')}>
              <IoMdClose />
            </button>
          </div>
          <form className={cx('modal-body')} onSubmit={addCandidate}>
            <div className={cx('form-header')}>
              <h2>Thông tin tài khoản</h2>
            </div>
            {error && (<div className={cx('error-message')}>
              <i style={{ color: 'red' }}>*</i> <span style={{ color: 'red' }}>{error}</span>
            </div>)}
            <div className={cx('info-item')}>
              <label for="admin-name" className={cx('info-label')}>
                Tên ứng viên<i style={{ color: 'red' }}>*</i> : 
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

export default AddCandidateModal;
