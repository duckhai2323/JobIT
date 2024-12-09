import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/userReducer';
import styles from './candidateInfoModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit, FaAddressBook } from "react-icons/fa";

const cx = classNames.bind(styles);

const CandidateInfoModal = ({ displayModal, onClickHandle, currentCandidate }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Candidate01");
  const [initialEmail, setInitialEmail] = useState("");
  const [email, setEmail] = useState("company1@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (currentCandidate) {
      setName(currentCandidate.name);
      setInitialEmail(currentCandidate.email);
      setEmail(currentCandidate.email);
    }
  }, [currentCandidate]);

  const updateAccount = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const payload = {
        id: currentCandidate.id,
        name: name,
      };
      if (email !== initialEmail) {
        payload.email = email;
      }
      if (password.length >= 8) {
        payload.password = password;
        payload.repassword = confirmPassword;
      } else {
        setError("Mật khẩu quá ngắn.")
      }
      console.log(payload);
      dispatch(
        Actions.updateUserRequest({
          userId: currentCandidate.id,
          data: payload,
        })
      );
      const timer = setTimeout(() => {
        dispatch(Actions.getUsersRequest());
      }, 1000);
      setInitialEmail(email);
      setPassword("");
      setConfirmPassword("");
      setError("");
      setIsEditing(false);
      return () => {
        clearTimeout(timer);
      }
    } else {
      setError("Mật khẩu và nhập lại mật khẩu không khớp.");
    }
  };

  useEffect(() => {
    if(displayModal === 'none') {
      setIsEditing(false);
      setError("");
    } else if(currentCandidate) {
      console.log(currentCandidate);
      setName(currentCandidate.name);
      setInitialEmail(currentCandidate.email);
      setEmail(currentCandidate.email);
      setPassword("");
      setConfirmPassword("");
    }
  }, [displayModal]);

  return (
    <div style={{ display: displayModal }} className={cx('candidate-info-modal')}>
      <div className={cx('modal-background')}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-header')}>
            <div className={cx('tabs')}><span className={cx('modal-title')}>Thông tin ứng viên</span></div>
            <button onClick={onClickHandle} className={cx('close-button')}>
              <IoMdClose />
            </button>
          </div>
          {isEditing ? (
            <div className={cx('modal-body')}>
              <div className={cx("candidate-logo")}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/219/219986.png" 
                  alt="company-logo" 
                  className={cx("logo")} 
                />
              </div>
              {error && (<div className={cx('error-message')}>
                <i style={{ color: 'red' }}>*</i> <span style={{ color: 'red' }}>{error}</span>
              </div>)}
              <form onSubmit={updateAccount}>
                <div className={cx('info-item')}>
                  <label for="candidate-name" className={cx('info-label')}>
                    Tên ứng viên<i style={{ color: 'red' }}>*</i> : 
                  </label>
                  <input
                    type="text"
                    name="candidate-name"
                    id="candidate-name"
                    placeholder=""
                    className={cx('info-content')}
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                  />
                </div>
                <div className={cx('info-item')}>
                  <label for="candidate-email" className={cx('info-label')}>
                    Email<i style={{ color: 'red' }}>*</i> : 
                  </label>
                  <input
                    type="text"
                    name="candidate-email"
                    id="candidate-email"
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
          ) : (
            <div className={cx('modal-body')}>
              <div className={cx("candidate-logo")}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/219/219986.png" 
                  alt="candidate-logo" 
                  className={cx("logo")} 
                />
              </div>
              <div className={cx('info-item')}>
                <div className={cx('info-label')}>Tên ứng viên: </div>
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

export default CandidateInfoModal;
