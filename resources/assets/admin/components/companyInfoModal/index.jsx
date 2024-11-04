import React, { useState, useEffect } from 'react';
import styles from './companyInfoModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit, FaAddressBook } from "react-icons/fa";
import JobItem from '../jobItem';

const cx = classNames.bind(styles);

const CompanyInfoModal = ({ displayModal, onClickHandle }) => {
	const [currentTab, setCurrentTab] = useState(1);
	const [displayTab1, setDisplayTab1] = useState('flex');
	const [displayTab2, setDisplayTab2] = useState('none');
	const [displayTab3, setDisplayTab3] = useState('none');
	const [isEditingTab1, setIsEditingTab1] = useState(false);
	const [isEditingTab2, setIsEditingTab2] = useState(false);
	const [companyName, setCompanyName] = useState("CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ");
	const [companyEmail, setCompanyEmail] = useState("gobiz.inc@gobiz.com");
	const [employeeScale, setEmployeeScale] = useState("1000");
	const [companyIntro, setCompanyIntro] = useState("Là công ty hoạt động trong lĩnh vực cung cấp các phần mềm quản lý nhập hàng và logistics. Sau gần 03 năm phát triển, xây dựng bởi đội ngũ sáng lập dày dặn kinh nghiệm đến từ nhiều tập đoàn công nghệ hàng đầu như Tima, VCCorp, Sapo,… Gobiz chính thức được thành lập vào năm 2018. Gobiz được thành lập với tham vọng thay đổi và số hoá phương thức quản lý và kinh doanh trong ngành thương mại điện tử xuyên biên giới tại Việt Nam.");
	const [companyLocation, setCompanyLocation] = useState("Tầng 5, Tòa nhà Viglacera số 1 Đại lộ Thăng Long, Nam Từ Liêm, Hà Nội");
	const [companyField, setCompanyField] = useState("Cung cấp các phần mềm quản lý nhập hàng và logistics");
	const [companyOrganize, setCompanyOrganize] = useState("2018-09-01");
	const [email, setEmail] = useState("company1@gmail.com");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const onChangeTab = (tab) => {
		setCurrentTab(tab);
		if(tab === 1) {
			setDisplayTab1('flex');
			setDisplayTab2('none');
			setDisplayTab3('none');
		} else if(tab === 2) {
			setDisplayTab2('flex');
			setDisplayTab1('none');
			setDisplayTab3('none');
		} else if(tab === 3) {
			setDisplayTab3('flex');
			setDisplayTab1('none');
			setDisplayTab2('none');
		}
	}

	const updateCompany = (e) => {
		e.preventDefault();
		setIsEditingTab1(false);
	}

	const updateAccount = (e) => {
		e.preventDefault();
		if(password === confirmPassword) {
			setIsEditingTab2(false);
			setError("");
		} else {
			setError("Mật khẩu và nhập lại mật khẩu không khớp.")
		}
	}

	useEffect(() => {
		if(displayModal === 'none') {
			setCurrentTab(1);
			setDisplayTab1('flex');
			setDisplayTab2('none');
			setDisplayTab3('none');
			setIsEditingTab1(false);
			setIsEditingTab2(false);
			setError("");
		}
	}, [displayModal])
  return (
		<div style={{ display: displayModal }} className={cx('company-info-modal')}>
			<div className={cx('modal-background')}>
				<div className={cx('modal-container')}>
					<div className={cx('modal-header')}>
						<button onClick={() => onChangeTab(1)} className={cx('tabs', { active: currentTab === 1 })}><span>Thông tin công ty</span></button>
						<button onClick={() => onChangeTab(2)} className={cx('tabs', { active: currentTab === 2 })}><span>Thông tin tài khoản</span></button>
						<button onClick={() => onChangeTab(3)} className={cx('tabs', { active: currentTab === 3 })}><span>Các công việc đang tuyển</span></button>
						<button onClick={onClickHandle} className={cx('close-button')}>
							<IoMdClose />
						</button>
					</div>
					{isEditingTab1 ? (
						<div style={{ display: displayTab1 }} className={cx('modal-body')}>
							<div className={cx("company-logo")}>
      	  			<img 
      	  				src="https://avatars.githubusercontent.com/u/2322183?s=200&v=4" 
      	  				alt="company-logo" 
      	  				className={cx("logo")} 
      	  			/>
      				</div>
							<form onSubmit={updateCompany}>
								<div className={cx('info-item')}>
									<label for="company-name" className={cx('info-label')}>
										Tên công ty<i style={{ color: 'red' }}>*</i> : 
									</label>
									<input
										type="text"
										name="company-name"
										id="company-name"
										placeholder="" 
										className={cx('info-content')}
										value={companyName}
										onChange={(e) => setCompanyName(e.target.value)} 
									/>
								</div>
								<div className={cx('info-item')}>
									<label for="company-email" className={cx('info-label')}>
										Email<i style={{ color: 'red' }}>*</i> : 
									</label>
									<input
										type="text"
										name="company-email"
										id="company-email"
										placeholder="" 
										className={cx('info-content')}
										value={companyEmail}
										onChange={(e) => setCompanyEmail(e.target.value)}
									/>
								</div>
								<div className={cx('info-item')}>
									<label for="employee-scale" className={cx('info-label')}>
										Nhân sự: 
									</label>
									<input
										type="text"
										name="employee-scale"
										id="employee-scale"
										placeholder="" 
										className={cx('info-content')}
										value={employeeScale}
										onChange={(e) => setEmployeeScale(e.target.value)}
									/>
								</div>
								<div className={cx('info-item')}>
									<label for="company-intro" className={cx('info-label')}>
										Giới thiệu công ty: 
									</label>
									<textarea
										name="company-intro"
										id="company-intro"
										className={cx('info-content')}
										value={companyIntro} 
										onChange={(e) => setCompanyIntro(e.target.value)}
										rows="4"
										cols="50"
									/>
								</div>
								<div className={cx('info-item')}>
									<label for="company-location" className={cx('info-label')}>
										Địa chỉ: 
									</label>
									<input
										type="text"
										name="company-location"
										id="company-location"
										placeholder="" 
										className={cx('info-content')}
										value={companyLocation}
										onChange={(e) => setCompanyLocation(e.target.value)}
									/>
								</div>
								<div className={cx('info-item')}>
									<label for="company-field" className={cx('info-label')}>
										Lĩnh vực: 
									</label>
									<input
										type="text"
										name="company-field"
										id="company-field"
										placeholder="" 
										className={cx('info-content')}
										value={companyField}
										onChange={(e) => setCompanyField(e.target.value)}
									/>
								</div>
								<div className={cx('info-item')}>
									<label for="company-organize" className={cx('info-label')}>
										Thành lập: 
									</label>
									<input
										type="date"
										name="company-organize"
										id="company-organize"
										placeholder="" 
										className={cx('info-content')}
										value={companyOrganize}
										onChange={(e) => setCompanyOrganize(e.target.value)}
									/>
								</div>
								<div className={cx("submit-button")}>
									<button style={{ border: 'none' }} className={cx('button-green')} type="submit">
                	  <FaAddressBook className={cx('icon')} />
                	  <span>Xác nhận</span>
                	</button>
								</div>
							</form>
						</div>
					) : (
						<div style={{ display: displayTab1 }} className={cx('modal-body')}>
							<div className={cx("first-row")}>
								<div className={cx("company-logo")}>
      	  				<img 
      	  					src="https://avatars.githubusercontent.com/u/2322183?s=200&v=4" 
      	  					alt="company-logo" 
      	  					className={cx("logo")} 
      	  				/>
      					</div>
								<button className={cx('button-green')} onClick={() => setIsEditingTab1(true)}>
            	  	<FaEdit className={cx('icon')} />
            	  	<span>Chỉnh sửa</span>
            		</button>
							</div>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Tên công ty: </div>
								<div className={cx('info-content')}>{companyName}</div>
							</div>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Email: </div>
								<div className={cx('info-content')}>{companyEmail}</div>
							</div>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Nhân sự: </div>
								<div className={cx('info-content')}>{employeeScale}</div>
							</div>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Giới thiệu công ty: </div>
								<div className={cx('info-content')}>
									<div className={cx('company-intro')}>
									{companyIntro}
									</div>
								</div>
							</div>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Địa chỉ: </div>
								<div className={cx('info-content')}>{companyLocation}</div>
							</div>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Lĩnh vực: </div>
								<div className={cx('info-content')}>{companyField}</div>
							</div>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Thành lập: </div>
								<div className={cx('info-content')}>{companyOrganize}</div>
							</div>
						</div>
					)}
					{isEditingTab2 ? (
						<form style={{ display: displayTab2 }} className={cx('modal-body')} onSubmit={updateAccount}>
							{error && (<div className={cx('error-message')}>
								<i style={{ color: 'red' }}>*</i> <span style={{ color: 'red' }}>{error}</span>
							</div>)}
							<div className={cx('info-item')}>
								<label for="email" className={cx('info-label')}>
									Email đăng nhập<i style={{ color: 'red' }}>*</i> : 
								</label>
								<input
									type="text"
									name="email"
									id="email"
									placeholder="" 
									className={cx('info-content')}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className={cx('info-item')}>
								<label for="password" className={cx('info-label')}>
									Mật khẩu<i style={{ color: 'red' }}>*</i> : 
								</label>
								<input
									type="text"
									name="password"
									id="password"
									placeholder="" 
									className={cx('info-content')}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className={cx('info-item')}>
								<label for="confirm-password" className={cx('info-label')}>
									Nhập lại mật khẩu<i style={{ color: 'red' }}>*</i> : 
								</label>
								<input
									type="text"
									name="confirm-password"
									id="confirm-password"
									placeholder="" 
									className={cx('info-content')}
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</div>
							<div className={cx("submit-button")}>
								<button style={{ border: 'none' }} className={cx('button-green')} type="submit">
              	  <FaAddressBook className={cx('icon')} />
              	  <span>Xác nhận</span>
              	</button>
							</div>
						</form>
					) : (
						<div style={{ display: displayTab2 }} className={cx('modal-body')}>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Email đăng nhập: </div>
								<div className={cx('info-content')}>{email}</div>
							</div>
							<div className={cx('info-item')}>
								<div className={cx('info-label')}>Mật khẩu: </div>
								<div className={cx('info-content')}>********</div>
							</div>
							<div className={cx('submit-button')} onClick={() => setIsEditingTab2(true)}>
								<button className={cx('button-green')}>
          	  	  <FaEdit className={cx('icon')} />
          	  	  <span>Chỉnh sửa</span>
          	  	</button>
							</div>
						</div>
					)}
					<div style={{ display: displayTab3 }} className={cx('modal-body-2')}>
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
