import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '@/services/userService';
import { Actions } from '@/redux/reducers/admin/userReducer';
import styles from './hrItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { AiOutlineStop, AiOutlineReload } from "react-icons/ai";

const cx = classNames.bind(styles);

const HrItem = ({ onClickHandle, hrData, loader, getListHrs }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setIsActive(hrData.actived);
  }, [hrData]);
  const suspendAccount = () => {
    setIsActive(false);
    loader(true);
    const timer = setTimeout(() => {
      loader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }
  const activateAccount = () => {
    setIsActive(true);
    loader(true);
    const timer = setTimeout(() => {
      loader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }
  const deleteAccount = () => {
    const deleteAcc = async () => {
      console.log(hrData.id);
      const response = await deleteUser(hrData.id, { id: hrData.id });
      if (response.success) {
        console.log(response.message);
      }
      return null;
    };
    if(hrData.id) {
      deleteAcc();
      const timer = setTimeout(() => {
        getListHrs();
      }, 500);
      window.scrollTo(0, 0);
      return () => clearTimeout(timer);
    }
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
          {hrData.name}
        </div>
        <div className={cx("admin-contact")}>
          <MdMarkEmailUnread />
          <p>{hrData.email}</p>
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
      {
        isActive ? (
          <div className={cx("admin-options")}>
            <button className={cx('view-button')} onClick={onClickHandle}>
              <IoMdEye /> Xem chi tiết
            </button>
            <button className={cx('delete-button')} onClick={suspendAccount}>
              <AiOutlineStop /> Đóng tài khoản
            </button>
          </div>
        ) : (
          <div className={cx("admin-options")}>
            <button className={cx('delete-button')} onClick={deleteAccount}>
              <MdDelete /> Xóa
            </button>
            <button className={cx('active-button')} onClick={activateAccount}>
              <AiOutlineReload /> Mở tài khoản
            </button>
          </div>
        )
      }
    </div>
  );
}

export default HrItem;
