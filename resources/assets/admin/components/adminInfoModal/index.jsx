import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/userReducer';
import styles from './adminInfoModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit, FaAddressBook } from "react-icons/fa";

const cx = classNames.bind(styles);

const AdminInfoModal = ({ displayModal, onClickHandle, currentAdmin }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Admin01");
  const [email, setEmail] = useState("company1@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const updateAccount = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const payload = {
        id: currentAdmin.id,
        name: name,
      };
      if (email !== currentAdmin.email) {
        payload.email = email;
      }
      if (password.length >= 8) {
        payload.password = password;
        payload.repassword = confirmPassword;
      }
      console.log(payload);
      dispatch(
        Actions.updateUserRequest({
          userId: currentAdmin.id,
          data: payload,
        })
      );
      setIsEditing(false);
      setPassword("");
      setConfirmPassword("");
      setError("");
    } else {
      setError("Mật khẩu và nhập lại mật khẩu không khớp.");
    }
  }

  useEffect(() => {
    if(displayModal === 'none') {
      setIsEditing(false);
      setError("");
    } else if(currentAdmin) {
      console.log(currentAdmin);
      setName(currentAdmin.name);
      setEmail(currentAdmin.email);
      setPassword("");
      setConfirmPassword("");
    }
  }, [displayModal, isEditing])

  return (
    <div style={{ display: displayModal }} className={cx('admin-info-modal')}>
      <div className={cx('modal-background')}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-header')}>
            <div className={cx('tabs')}><span className={cx('modal-title')}>Thông tin quản trị viên</span></div>
            <button onClick={onClickHandle} className={cx('close-button')}>
              <IoMdClose />
            </button>
          </div>
          {isEditing ? (
            <div className={cx('modal-body')}>
              <div className={cx("admin-logo")}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/219/219986.png" 
                  alt="company-logo" 
                  className={cx("logo")} 
                />
              </div>
              <form onSubmit={updateAccount}>
                <div className={cx('info-item')}>
                  <label for="admin-name" className={cx('info-label')}>
                    Tên quản trị viên<i style={{ color: 'red' }}>*</i> : 
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=""
                    className={cx('info-content')}
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                  />
                </div>
                <div className={cx('info-item')}>
                  <label for="admin-email" className={cx('info-label')}>
                    Email<i style={{ color: 'red' }}>*</i> : 
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
                    name="repassword"
                    id="repassword"
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
          ) : (
            <div className={cx('modal-body')}>
              <div className={cx("admin-logo")}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/219/219986.png" 
                  alt="admin-logo" 
                  className={cx("logo")} 
                />
              </div>
              <div className={cx('info-item')}>
                <div className={cx('info-label')}>Tên quản trị viên: </div>
                <div className={cx('info-content')}>{name}</div>
              </div>
              <div className={cx('info-item')}>
                <div className={cx('info-label')}>Email: </div>
                <div className={cx('info-content')}>{email}</div>
              </div>
              <div className={cx('info-item')}>
                <div className={cx('info-label')}>Mật khẩu: </div>
                <div className={cx('info-content')}>********</div>
              </div>
              <button className={cx('button-green')} onClick={() => setIsEditing(true)}>
                <FaEdit className={cx('icon')} />
                <span>Chỉnh sửa</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminInfoModal;
