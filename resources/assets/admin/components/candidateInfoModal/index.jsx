import React, { useState, useEffect } from 'react';
import styles from './candidateInfoModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit, FaAddressBook } from "react-icons/fa";

const cx = classNames.bind(styles);

const CandidateInfoModal = ({ displayModal, onClickHandle, currentCandidate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Candidate01");
  const [email, setEmail] = useState("company1@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const updateAccount = (e) => {
    e.preventDefault();
    if(password === confirmPassword) {
      setIsEditing(false);
      setError("");
    } else {
      setError("Mật khẩu và nhập lại mật khẩu không khớp.")
    }
  }

  useEffect(() => {
    if(displayModal === 'none') {
      setIsEditing(false);
      setError("");
    } else if(currentCandidate) {
      console.log(currentCandidate);
      setName(currentCandidate.name);
      setEmail(currentCandidate.email);
      setPassword("");
      setConfirmPassword("");
    }
  }, [displayModal, isEditing])

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
