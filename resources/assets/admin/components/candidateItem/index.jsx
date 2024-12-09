import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './candidateItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { AiOutlineStop, AiOutlineReload } from "react-icons/ai";
import { deleteUser } from '@/services/userService';

const cx = classNames.bind(styles);

const CandidateItem = ({ onClickHandle, candidateData, loader }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setIsActive(candidateData.actived);
  }, [candidateData]);
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
      console.log(candidateData.id);
      const response = await deleteUser(candidateData.id, { id: candidateData.id });
      if (response.success) {
        console.log(response.message);
      }
      return null;
    };
    if(candidateData.id) {
      deleteAcc();
      const timer = setTimeout(() => {
        dispatch(Actions.getUsersRequest());
      }, 500);
      window.scrollTo(0, 0);
      return () => clearTimeout(timer);
    }
  }
  return (
    <div className={cx("candidate-card")}>
      <div className={cx("candidate-image")}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png" 
          alt="candidate-image" 
          className={cx("image")} 
        />
      </div>
      <div className={cx("candidate-info")}>
        <div className={cx("candidate-name")}>
          {candidateData.name}
        </div>
        <div className={cx("candidate-contact")}>
          <MdMarkEmailUnread />
          <p>{candidateData.email}</p>
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
      {
        isActive ? (
          <div className={cx("candidate-options")}>
            <button className={cx('view-button')} onClick={onClickHandle}>
              <IoMdEye /> Xem chi tiết
            </button>
            <button className={cx('delete-button')} onClick={suspendAccount}>
              <AiOutlineStop /> Đóng tài khoản
            </button>
          </div>
        ) : (
          <div className={cx("candidate-options")}>
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

export default CandidateItem;
