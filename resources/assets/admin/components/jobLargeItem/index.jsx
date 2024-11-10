import React from 'react';
import styles from './jobLargeItem.module.scss';
import classNames from 'classnames/bind';
import { MdMarkEmailUnread, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { FaLocationDot, FaSackDollar } from "react-icons/fa6";
import { IoToday } from "react-icons/io5";
import { AiFillProfile, AiOutlineGlobal } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";


const cx = classNames.bind(styles);

const JobLargeItem = ({ onClickHandle, onClickDelete }) => {
  return (
    <div className={cx("job-card")}>
      <div className={cx("job-image")}>
        <img 
          src="https://cdn-new.topcv.vn/unsafe/80x/https://static.topcv.vn/company_logos/fOM2T6tdoG3BCqPFfeyECPl8GyJ8eUNH_1676606887____9363a8785daf420770652efc1338dd72.png" 
          alt="job-image" 
          className={cx("image")} 
        />
      </div>
      <div className={cx("job-info")}>
        <div className={cx("job-name")}>
          Nhân Viên Phát Triển Thị Trường
        </div>
        <div className={cx("job-from-company")}>
          Công ty Cổ phần Truyền thông Vàng châu Á
        </div>
        <div className={cx("job-contact")}>
          <AiOutlineGlobal />
          <p>http://goldenasia.vn</p>
          <a href="#" target="blank" className={cx("job-link")}>
            <FaLink />
          </a>
        </div>
      </div>
      <div className={cx("job-details")}>
        <div className={cx("job-detail")}>
          <FaLocationDot />
          <div className={cx("job-location")}>
            Hà Nội
          </div>
        </div>
        <div className={cx("job-detail")}>
          <CgSandClock />
          <p>Dưới 1 năm</p>
        </div>
        <div className={cx("job-detail")}>
          <FaSackDollar />
          <p>11-15 triệu</p>
        </div>
        <div className={cx("job-detail")}>
          <IoPerson />
          <p>1 người</p>
        </div>
      </div>
      <div className={cx("job-options")}>
        <button className={cx('view-button')} onClick={onClickHandle}>
          <IoMdEye />
        </button>
        <button className={cx('delete-button')} onClick={onClickDelete}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default JobLargeItem;
