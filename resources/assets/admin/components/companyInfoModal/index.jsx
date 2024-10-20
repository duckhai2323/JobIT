import React, { useState, useEffect } from 'react';
import styles from './companyInfoModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit } from "react-icons/fa";
import JobItem from '../jobItem';

const cx = classNames.bind(styles);

const CompanyInfoModal = ({ displayModal, onClickHandle }) => {
	const [currentTab, setCurrentTab] = useState(1);
	const [displayTab1, setDisplayTab1] = useState('flex');
	const [displayTab2, setDisplayTab2] = useState('none');
	const onChangeTab = (tab) => {
		setCurrentTab(tab);
		if(tab === 1) {
			setDisplayTab1('flex');
			setDisplayTab2('none');
		} else if(tab === 2) {
			setDisplayTab2('flex');
			setDisplayTab1('none');
		}
	}
	useEffect(() => {
		if(displayModal === 'none') {
			setCurrentTab(1);
			setDisplayTab1('flex');
			setDisplayTab2('none');
		}
	}, [displayModal])
  return (
		<div style={{ display: displayModal }} className={cx('company-info-modal')}>
			<div className={cx('modal-background')}>
				<div className={cx('modal-container')}>
					<div className={cx('modal-header')}>
						<button onClick={() => onChangeTab(1)} className={cx('tabs', { active: currentTab === 1 })}><span>Thông tin công ty</span></button>
						<button onClick={() => onChangeTab(2)} className={cx('tabs', { active: currentTab === 2 })}><span>Các công việc đang tuyển</span></button>
						<button onClick={onClickHandle} className={cx('close-button')}>
							<IoMdClose />
						</button>
					</div>
					<div style={{ display: displayTab1 }} className={cx('modal-body')}>
						<div className={cx("company-logo")}>
      	  		<img 
      	  			src="https://avatars.githubusercontent.com/u/2322183?s=200&v=4" 
      	  			alt="company-logo" 
      	  			className={cx("logo")} 
      	  		/>
      			</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Tên công ty: </div>
							<div className={cx('info-content')}>CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ</div>
						</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Email: </div>
							<div className={cx('info-content')}>gobiz.inc@gobiz.com</div>
						</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Nhân sự: </div>
							<div className={cx('info-content')}>1000+ nhân viên</div>
						</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Giới thiệu công ty: </div>
							<div className={cx('info-content')}>
								<div className={cx('company-intro')}>
								Là công ty hoạt động trong lĩnh vực cung cấp các phần mềm quản lý nhập hàng và logistics. 
								Sau gần 03 năm phát triển, xây dựng bởi đội ngũ sáng lập dày dặn kinh nghiệm đến từ nhiều 
								tập đoàn công nghệ hàng đầu như Tima, VCCorp, Sapo,… Gobiz chính thức được thành lập vào 
								năm 2018. Gobiz được thành lập với tham vọng thay đổi và số hoá phương thức quản lý và kinh 
								doanh trong ngành thương mại điện tử xuyên biên giới tại Việt Nam.
								</div>
							</div>
						</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Địa chỉ: </div>
							<div className={cx('info-content')}>Tầng 5, Tòa nhà Viglacera số 1 Đại lộ Thăng Long, Nam Từ Liêm, Hà Nội</div>
						</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Lĩnh vực: </div>
							<div className={cx('info-content')}>Cung cấp các phần mềm quản lý nhập hàng và logistics</div>
						</div>
						<div className={cx('info-item')}>
							<div className={cx('info-label')}>Thành lập: </div>
							<div className={cx('info-content')}>09/2018</div>
						</div>
            <button className={cx('button-green')}>
              <FaEdit className={cx('icon')} />
              <span>Chỉnh sửa</span>
            </button>
					</div>
					<div style={{ display: displayTab2 }} className={cx('modal-body-2')}>
						<JobItem 
              jobTitle="Chuyên Viên Kinh Doanh Xuất Nhập Khẩu/Order Hàng Trung Quốc - Taobao,1688 - Thưởng 2 Triệu Khi Nhận Việc" 
              companyName="CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ" 
              location="Hà Nội"
            />
            <JobItem 
              jobTitle="Chuyên Viên Kinh Doanh Xuất Nhập Khẩu/Order Hàng Trung Quốc - Taobao,1688 - Thưởng 2 Triệu Khi Nhận Việc" 
              companyName="CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ" 
              location="Hà Nội"
            />
            <JobItem 
              jobTitle="Chuyên Viên Kinh Doanh Xuất Nhập Khẩu/Order Hàng Trung Quốc - Taobao,1688 - Thưởng 2 Triệu Khi Nhận Việc" 
              companyName="CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ" 
              location="Hà Nội"
            />
					</div>
				</div>
			</div>
		</div>
  )
}

export default CompanyInfoModal;
