import React, { useState, useEffect } from 'react';
import styles from './adminItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { AiOutlineStop, AiOutlineReload } from "react-icons/ai";

const cx = classNames.bind(styles);

const AdminItem = ({ onClickHandle, adminData }) => {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setIsActive(adminData.actived);
  }, [adminData]);
  const suspendAccount = () => {
    setIsActive(false);
  }
  const activateAccount = () => {
    setIsActive(true);
  }
  return (
    <div className={cx("admin-card")}>
      <div className={cx("admin-image")}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png" 
          alt="admin-image" 
          className={cx("image")} 
        />
      </div>
      <div className={cx("admin-info")}>
        <div className={cx("admin-name")}>
          {adminData.name}
        </div>
        <div className={cx("admin-contact")}>
          <MdMarkEmailUnread />
          <p>{adminData.email}</p>
        </div>
        {
          isActive ? (
            <div className={cx("admin-status")}>
              Trạng thái: <span className={cx('active-status')}>Đang hoạt động</span>
            </div>
          ) : (
            <div className={cx("admin-status")}>
              Trạng thái: <span className={cx('suspended-status')}>Dừng hoạt động</span>
            </div>
          )
        }
      </div>
      <div className={cx("admin-options")}>
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
              <AiOutlineReload /> Mở tài khoản
            </button>
          )
        }
      </div>
    </div>
  );
}

export default AdminItem;
