import React from 'react';
import styles from './adminItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

const cx = classNames.bind(styles);

const AdminItem = ({ onClickHandle }) => {
  return (
    <div className={cx("admin-card")}>
      <div className={cx("admin-image")}>
        <img 
          src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png" 
          alt="admin-image" 
          className={cx("image")} 
        />
      </div>
      <div className={cx("admin-info")}>
        <div className={cx("admin-name")}>
					Admin01
        </div>
        <div className={cx("admin-contact")}>
          <MdMarkEmailUnread />
          <p>tester1@gmail.com</p>
        </div>
      </div>
      <div className={cx("admin-options")}>
        <button className={cx('view-button')} onClick={onClickHandle}>
					<IoMdEye /> Xem chi tiết
				</button>
				<button className={cx('delete-button')}>
					<MdDelete /> Xóa
				</button>
      </div>
    </div>
  );
}

export default AdminItem;
