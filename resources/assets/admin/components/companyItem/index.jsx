import React, { useEffect, useState } from 'react';
import styles from './companyItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoToday } from "react-icons/io5";
import { AiFillProfile } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { AiOutlineStop, AiOutlineReload } from "react-icons/ai";

const cx = classNames.bind(styles);

const CompanyItem = ({ onClickHandle, companyData, loader }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    companyData.status ? setIsActive(true) : setIsActive(false);
  }, [companyData]);
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
  return (
    <div className={cx("company-card")}>
      <div className={cx("company-image")}>
        <img 
          src={companyData.company_image ? companyData.company_image : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"}
          alt="company-image" 
          className={cx("image")} 
        />
      </div>
      <div className={cx("company-info")}>
        <div className={cx("company-name")}>
          {companyData.company_name}
        </div>
        <div className={cx("company-intro")}>
          {companyData.company_intro}
        </div>
        <div className={cx("company-contact")}>
          <MdMarkEmailUnread />
          <p>{companyData.email}</p>
          <a href="#" target="blank" className={cx("company-link")}>
            <FaLink />
          </a>
        </div>
        {
          isActive ? (
            <div className={cx("company-status")}>
              Trạng thái: <span className={cx('active-status')}>Đang hoạt động</span>
            </div>
          ) : (
            <div className={cx("company-status")}>
              Trạng thái: <span className={cx('suspended-status')}>Dừng hoạt động</span>
            </div>
          )
        }
      </div>
      <div className={cx("company-details")}>
        <div className={cx("company-detail")}>
          <FaLocationDot />
          <div className={cx("company-location")}>
            Hà Nội
          </div>
        </div>
        <div className={cx("company-detail")}>
          <IoToday />
          <p>T9/2018</p>
        </div>
        <div className={cx("company-detail")}>
          <AiFillProfile />
          <p>IT - Logistics</p>
        </div>
        <div className={cx("company-detail")}>
          <IoPerson />
          <p>1000+</p>
        </div>
      </div>
      {
        isActive ? (
          <div className={cx("company-options")}>
            <button className={cx('view-button')} onClick={onClickHandle}>
              <IoMdEye /> Xem chi tiết
            </button>
            <button className={cx('delete-button')} onClick={suspendAccount}>
              <AiOutlineStop /> Đóng tài khoản
            </button>
          </div>
        ) : (
          <div className={cx("company-options")}>
            <button className={cx('delete-button')}>
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

export default CompanyItem;
