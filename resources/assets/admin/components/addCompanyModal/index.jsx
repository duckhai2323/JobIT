import React, { useState, useEffect } from 'react';
import styles from './addCompanyModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaAddressBook } from "react-icons/fa";

const cx = classNames.bind(styles);

const AddCompanyModal = ({ displayModal, onClickHandle, onSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [employeeScale, setEmployeeScale] = useState("");
  const [companyIntro, setCompanyIntro] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyField, setCompanyField] = useState("");
  const [companyOrganize, setCompanyOrganize] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const addCompany = (e) => {
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
    <div style={{ display: displayModal }} className={cx('company-info-modal')}>
      <div className={cx('modal-background')}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-header')}>
            <div className={cx('tabs')}><span className={cx('modal-title')}>Thêm công ty mới</span></div>
            <button onClick={onClickHandle} className={cx('close-button')}>
              <IoMdClose />
            </button>
          </div>
          <form className={cx('modal-body')} onSubmit={addCompany}>
            <div className={cx('form-header')}>
              <h2>Thông tin tài khoản</h2>
            </div>
            {error && (<div className={cx('error-message')}>
              <i style={{ color: 'red' }}>*</i> <span style={{ color: 'red' }}>{error}</span>
            </div>)}
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
            <hr></hr>
            <div className={cx('form-header')}>
              <h2>Thông tin công ty</h2>
            </div>
            <div className={cx('info-item')}>
              <label for="company-logo" className={cx('info-label')}>
                Logo : 
              </label>
              <input
                type="file"
                name="company-logo"
                id="company-logo"
                placeholder="" 
                className={cx('info-content')} 
              />
            </div>
            <div className={cx('info-item')}>
              <label for="company-name" className={cx('info-label')}>
                Tên công ty<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="company-name"
                id="company-name"
                placeholder="" 
                className={cx('info-content')}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)} 
              />
            </div>
            <div className={cx('info-item')}>
              <label for="company-email" className={cx('info-label')}>
                Email<i style={{ color: 'red' }}>*</i> : 
              </label>
              <input
                type="text"
                name="company-email"
                id="company-email"
                placeholder="" 
                className={cx('info-content')}
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="employee-scale" className={cx('info-label')}>
                Nhân sự: 
              </label>
              <input
                type="text"
                name="employee-scale"
                id="employee-scale"
                placeholder="" 
                className={cx('info-content')}
                value={employeeScale}
                onChange={(e) => setEmployeeScale(e.target.value)}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="company-intro" className={cx('info-label')}>
                Giới thiệu công ty: 
              </label>
              <textarea
                name="company-intro"
                id="company-intro"
                className={cx('info-content')}
                value={companyIntro} 
                onChange={(e) => setCompanyIntro(e.target.value)}
                rows="4"
                cols="50"
              />
            </div>
            <div className={cx('info-item')}>
              <label for="company-location" className={cx('info-label')}>
                Địa chỉ: 
              </label>
              <input
                type="text"
                name="company-location"
                id="company-location"
                placeholder="" 
                className={cx('info-content')}
                value={companyLocation}
                onChange={(e) => setCompanyLocation(e.target.value)}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="company-field" className={cx('info-label')}>
                Lĩnh vực: 
              </label>
              <input
                type="text"
                name="company-field"
                id="company-field"
                placeholder="" 
                className={cx('info-content')}
                value={companyField}
                onChange={(e) => setCompanyField(e.target.value)}
              />
            </div>
            <div className={cx('info-item')}>
              <label for="company-organize" className={cx('info-label')}>
                Thành lập: 
              </label>
              <input
                type="date"
                name="company-organize"
                id="company-organize"
                placeholder="" 
                className={cx('info-content')}
                value={companyOrganize}
                onChange={(e) => setCompanyOrganize(e.target.value)}
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

export default AddCompanyModal;
