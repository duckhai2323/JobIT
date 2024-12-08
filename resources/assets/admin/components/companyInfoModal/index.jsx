import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/adminCompaniesReducer';
import styles from './companyInfoModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit, FaAddressBook } from "react-icons/fa";
import JobItem from '../jobItem';
import { getListJobsOfCompany } from '@/services/companyService';
import { getCompanyAccount, updateUserAccount } from '@/services/userService';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const CompanyInfoModal = ({ displayModal, onClickHandle, loader }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (jobId) => {
    navigate(`/jobs/${jobId}`);
  }
  const modalBodyRef = useRef(null);
  const companyState = useSelector((state) => state.adminCompanies);
  const [currentTab, setCurrentTab] = useState(1);
  const [displayTab1, setDisplayTab1] = useState('flex');
  const [displayTab2, setDisplayTab2] = useState('none');
  const [displayTab3, setDisplayTab3] = useState('none');
  const [isEditingTab1, setIsEditingTab1] = useState(false);
  const [isEditingTab2, setIsEditingTab2] = useState(false);
  const [companyImage, setCompanyImage] = useState("");
  const [companyName, setCompanyName] = useState("CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ");
  const [companyEmail, setCompanyEmail] = useState("gobiz.inc@gobiz.com");
  const [companyLink, setCompanyLink] = useState("https://gobiz.vn/");
  const [employeeScale, setEmployeeScale] = useState("1000");
  const [companyIntro, setCompanyIntro] = useState("Là công ty hoạt động trong lĩnh vực cung cấp các phần mềm quản lý nhập hàng và logistics. Sau gần 03 năm phát triển, xây dựng bởi đội ngũ sáng lập dày dặn kinh nghiệm đến từ nhiều tập đoàn công nghệ hàng đầu như Tima, VCCorp, Sapo,… Gobiz chính thức được thành lập vào năm 2018. Gobiz được thành lập với tham vọng thay đổi và số hoá phương thức quản lý và kinh doanh trong ngành thương mại điện tử xuyên biên giới tại Việt Nam.");
  const [companyLocation, setCompanyLocation] = useState("Tầng 5, Tòa nhà Viglacera số 1 Đại lộ Thăng Long, Nam Từ Liêm, Hà Nội");
  const [companyField, setCompanyField] = useState("Cung cấp các phần mềm quản lý nhập hàng và logistics");
  const [companyOrganize, setCompanyOrganize] = useState("2018-09-01");
  const [companyTaxCode, setCompanyTaxCode] = useState("0108368751");
  const [id, setId] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("company1@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [listJobsOfCompany, setListJobsOfCompany] = useState([]);
  const [error, setError] = useState("");
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  const onChangeTab = (tab) => {
    setCurrentTab(tab);
    if(tab === 1) {
      loader(true);
      const timer = setTimeout(() => {
        loader(false);
      }, 3000);
      setDisplayTab1('flex');
      setDisplayTab2('none');
      setDisplayTab3('none');
      setIsEditingTab2(false);
      setPassword("");
      setConfirmPassword("");
      return () => clearTimeout(timer);
    } else if(tab === 2) {
      setDisplayTab2('flex');
      setDisplayTab1('none');
      setDisplayTab3('none');
      setIsEditingTab1(false);
      loader(true);
      const timer = setTimeout(() => {
        loader(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else if(tab === 3) {
      setDisplayTab3('flex');
      setDisplayTab1('none');
      setDisplayTab2('none');
      setIsEditingTab2(false);
      setIsEditingTab1(false);
      loader(true);
      const timer = setTimeout(() => {
        loader(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }

  const updateCompany = (e) => {
    e.preventDefault();
    const inputData = {
      company_name: companyName,
      company_email: companyEmail,
      company_link: companyLink,
      employee_scale: employeeScale,
      company_intro: companyIntro,
      company_location: companyLocation,
      company_filed: companyField,
      company_organize: companyOrganize,
      tax_code: companyTaxCode,
    };
    dispatch(Actions.updateCompanyRequest({
      companyId: companyState.selectCompanyId,
      data: inputData,
    }));
    const timer = setTimeout(() => {
      dispatch(Actions.getCompaniesRequest());
    }, 500);
    setIsEditingTab1(false);
    return () => clearTimeout(timer);
  }

  const updateAccount = (e) => {
    e.preventDefault();
    if(password === confirmPassword) {
      const payload = {
        id: id,
        name: name,
      };
      if (email !== initialEmail) {
        payload.email = email;
      }
      if (password.length >= 8) {
        payload.password = password;
        payload.repassword = confirmPassword;
      } else {
        setError("Mật khẩu quá ngắn.")
      }
      console.log(payload);
      loader(true);
      const updateCompanyAccount = async () => {
        const response = await updateUserAccount(id, payload);
        if(response.success) {
          console.log("update company account successful");
        }
        return null;
      }
      updateCompanyAccount();
      const timer = setTimeout(() => {
        loader(false);
      }, 3000);
      setIsEditingTab2(false);
      setInitialEmail(email);
      setPassword("");
      setConfirmPassword("");
      setError("");
      return () => clearTimeout(timer);
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
    } else if(companyState.selectCompanyId) {
      const getListJobsById = async () => {
        const response = await getListJobsOfCompany(companyState.selectCompanyId);
        if (response.success) {
          console.log(response.data);
          setListJobsOfCompany(response.data);
        }
        return null;
      };
      const getCompanyInfor = async () => {
        const response2 = await getCompanyAccount(companyState.selectCompanyId);
        if (response2.success) {
          console.log(response2.data);
          setId(response2.data.id);
          setName(response2.data.name);
          setInitialEmail(response2.data.email);
          setEmail(response2.data.email);
          setPassword("");
          setConfirmPassword("");
        }
      };
      const company = companyState.companies.find(company => company.company_id === companyState.selectCompanyId);
      console.log(companyState.selectCompanyId);
      setCompanyName(company.company_name);
      setCompanyEmail(company.email);
      setCompanyLink(company.company_link);
      setEmployeeScale(company.employee_scale);
      setCompanyIntro(company.company_intro);
      setCompanyLocation(company.company_location);
      setCompanyField(company.company_filed);
      setCompanyOrganize(company.company_organize);
      setCompanyTaxCode(company.tax_code);
      setCompanyImage(company.company_image);
      getListJobsById();
      getCompanyInfor();
      modalBodyRef.current.scrollTop = 0;
    }
  }, [displayModal]);
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
                  src={companyImage ? companyImage : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"}
                  alt="company-logo" 
                  className={cx("logo")} 
                />
              </div>
              {error && (<div className={cx('error-message')}>
                <i style={{ color: 'red' }}>*</i> <span style={{ color: 'red' }}>{error}</span>
              </div>)}
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
                  <label for="company-link" className={cx('info-label')}>
                    Link công ty: 
                  </label>
                  <input
                    type="text"
                    name="company-link"
                    id="company-link"
                    placeholder="" 
                    className={cx('info-content')}
                    value={companyLink}
                    onChange={(e) => setCompanyLink(e.target.value)}
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
                    rows="15"
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
                <div className={cx('info-item')}>
                  <label for="company-tax-code" className={cx('info-label')}>
                    Mã số thuế: 
                  </label>
                  <input
                    type="text"
                    name="company-tax-code"
                    id="company-tax-code"
                    placeholder="" 
                    className={cx('info-content')}
                    value={companyTaxCode}
                    onChange={(e) => setCompanyTaxCode(e.target.value)}
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
            <div style={{ display: displayTab1 }} className={cx('modal-body')} ref={modalBodyRef}>
              <div className={cx("first-row")}>
                <div className={cx("company-logo")}>
                  <img 
                    src={companyImage ? companyImage : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"} 
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
                <div className={cx('info-label')}>Link công ty: </div>
                <div className={cx('info-content')}>{companyLink}</div>
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
                <div className={cx('info-content')}>{formatDate(companyOrganize)}</div>
              </div>
              <div className={cx('info-item')}>
                <div className={cx('info-label')}>Mã số thuế: </div>
                <div className={cx('info-content')}>{companyTaxCode}</div>
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
                  Tên đăng nhập<i style={{ color: 'red' }}>*</i> : 
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="" 
                  className={cx('info-content')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                <div className={cx('info-label')}>Tên đăng nhập: </div>
                <div className={cx('info-content')}>{name}</div>
              </div>
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
            {listJobsOfCompany && listJobsOfCompany.map((job) => (
              <button key={job.job_id} onClick={() => handleNavigate(job.job_id)}>
                <JobItem
                  jobTitle={job.job_title}
                  companyName={companyName}
                  companyImage={companyImage}
                  location={job.job_location} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfoModal;
