import React, { useState } from 'react';
import styles from './candidateItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { AiOutlineStop, AiOutlineReload } from "react-icons/ai";

const cx = classNames.bind(styles);

const CandidateItem = ({ onClickHandle, onClickDelete }) => {
  const [isActive, setIsActive] = useState(true);
  const suspendAccount = () => {
    setIsActive(false);
  }
  const activateAccount = () => {
    setIsActive(true);
  }
  return (
    <div className={cx("candidate-card")}>
      <div className={cx("candidate-image")}>
        <img 
          src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png" 
          alt="candidate-image" 
          className={cx("image")} 
        />
      </div>
      <div className={cx("candidate-info")}>
        <div className={cx("candidate-name")}>
          Trần Đức Khải
        </div>
        <div className={cx("candidate-contact")}>
          <MdMarkEmailUnread />
          <p>tranduckhai26112003@gmail.com</p>
        </div>
        {
          isActive ? (
            <div className={cx("candidate-status")}>
              Trạng thái: <span className={cx('active-status')}>Đang hoạt động</span>
            </div>
          ) : (
            <div className={cx("candidate-status")}>
              Trạng thái: <span className={cx('suspended-status')}>Dừng hoạt động</span>
            </div>
          )
        }
      </div>
      <div className={cx("candidate-options")}>
        <button className={cx('view-button')} onClick={onClickHandle}>
          <IoMdEye /> Xem chi tiết
        </button>
        {
          isActive ? (
            <button className={cx('delete-button')} onClick={suspendAccount}>
              <AiOutlineStop /> Đóng tài khoản
            </button>
          ) : (
            <button className={cx('active-button')} onClick={activateAccount}>
              <AiOutlineReload /> Kích hoạt tài khoản
            </button>
          )
        }
      </div>
    </div>
  );
}

export default CandidateItem;
