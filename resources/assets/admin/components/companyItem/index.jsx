import React from 'react';
import styles from './companyItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoToday } from "react-icons/io5";
import { AiFillProfile } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";

const cx = classNames.bind(styles);

const CompanyItem = () => {
  return (
    <div className={cx("company-card")}>
      <div className={cx("company-image")}>
        <img 
          src="https://avatars.githubusercontent.com/u/2322183?s=200&v=4" 
          alt="company-image" 
          className={cx("image")} 
        />
      </div>
      <div className={cx("company-info")}>
        <div className={cx("company-name")}>
					CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ
        </div>
        <div className={cx("company-intro")}>
					Là công ty hoạt động trong lĩnh vực cung cấp các phần mềm quản lý nhập hàng và logistics. 
					Sau gần 03 năm phát triển, xây dựng bởi đội ngũ sáng lập dày dặn kinh nghiệm đến từ nhiều 
					tập đoàn công nghệ hàng đầu như Tima, VCCorp, Sapo,… Gobiz chính thức được thành lập vào 
					năm 2018. Gobiz được thành lập với tham vọng thay đổi và số hoá phương thức quản lý và kinh 
					doanh trong ngành thương mại điện tử xuyên biên giới tại Việt Nam.
        </div>
        <div className={cx("company-contact")}>
          <MdMarkEmailUnread />
          <p>gobiz.inc@gobiz.com</p>
          <a href="#" target="blank" className={cx("company-link")}>
            <FaLink />
          </a>
        </div>
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
    </div>
  );
}

export default CompanyItem;
