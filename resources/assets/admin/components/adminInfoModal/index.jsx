import React, { useState, useEffect } from 'react';
import styles from './adminInfoModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit } from "react-icons/fa";
import JobItem from '../jobItem';

const cx = classNames.bind(styles);

const AdminInfoModal = ({ displayModal, onClickHandle }) => {
  return (
		<div style={{ display: displayModal }} className={cx('admin-info-modal')}>
			<div className={cx('modal-background')}>
				<div className={cx('modal-container')}>
					<div className={cx('modal-header')}>
						<div className={cx('tabs')}><span className={cx('modal-title')}>Thông tin quản trị viên</span></div>
						<button onClick={onClickHandle} className={cx('close-button')}>
							<IoMdClose />
						</button>
					</div>
					<div className={cx('modal-body')}>
						<div className={cx("admin-logo")}>
      	  		<img 
      	  			src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png" 
      	  			alt="admin-logo" 
      	  			className={cx("logo")} 
      	  		/>
      			</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Tên quản trị viên: </div>
							<div className={cx('info-content')}>Admin01</div>
						</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Email: </div>
							<div className={cx('info-content')}>tester1@gmail.com</div>
						</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Mật khẩu: </div>
							<div className={cx('info-content')}>12345678</div>
						</div>
            <button className={cx('button-green')}>
              <FaEdit className={cx('icon')} />
              <span>Chỉnh sửa</span>
            </button>
					</div>
				</div>
			</div>
		</div>
  )
}

export default AdminInfoModal;
