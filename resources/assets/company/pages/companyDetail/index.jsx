import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/adminJobsReducer';
import styles from './companyDetail.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit, FaAddressBook } from "react-icons/fa";
import CompanyLayout from '../../components/layout';
import { useParams } from 'react-router-dom';
import { getInforCompanyByUser, updateInforCompany } from '@/services/companyService';
import { updateUserAccount } from '@/services/userService';
import { FadeLoader } from 'react-spinners';
import useAuth from '@/hooks/useAuth';

const cx = classNames.bind(styles);

const CompanyDetail = () => {
  const { authState } = useAuth();
  const dispatch = useDispatch();
  const jobId = "1";
  const [isEditingTab1, setIsEditingTab1] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyImage, setCompanyImage] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [employeeScale, setEmployeeScale] = useState("");
  const [companyIntro, setCompanyIntro] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyField, setCompanyField] = useState("");
  const [companyOrganize, setCompanyOrganize] = useState("");
  const [companyTaxCode, setCompanyTaxCode] = useState("");
  const [name, setName] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const getCompanyDetail = async () => {
    setLoading(true);
    const response = await getInforCompanyByUser(authState.data.data.id);
    if (response.success) {
      const company = response.data;
      console.log(company);
      setCompanyId(company.company_id);
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
      setName(authState.data.data.name);
      setInitialEmail(authState.data.data.email);
      setEmail(authState.data.data.email);
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
    }
    return null;
  };

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
    const payload = {
      id: authState.data.data.id,
      name: name,
    };
    if (email !== initialEmail) {
      payload.email = email;
    }
    if (password.length >= 8 && password === confirmPassword) {
      payload.password = password;
      payload.repassword = confirmPassword;
    } else if(password.length < 8) {
      setError("Mật khẩu quá ngắn.")
    } else {
      setError("Mật khẩu và nhập lại mật khẩu phải giống nhau.")
    }
    setLoading(true);
    const updateCompanyInfor = async () => {
      const response = await updateInforCompany(companyId, inputData);
      if (response.success) {
        console.log('update company infor successful');
      }
      return null;
    }
    const updateCompanyAccount = async () => {
      const response = await updateUserAccount(authState.data.data.id, payload);
      if(response.success) {
        console.log("update company account successful");
      }
      return null;
    }
    updateCompanyInfor();
    updateCompanyAccount();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    setIsEditingTab1(false);
    setInitialEmail(email);
    setPassword("");
    setConfirmPassword("");
    return () => clearTimeout(timer);
  }
  useEffect(() => {
    setIsEditingTab1(false);
    setError("");
    console.log(authState.data.data);
    getCompanyDetail();
  }, []);
  // useEffect(() => {
  //   console.log(jobId);
  //   if (jobId) {
  //     getJobDetail();
  //   } 
  // }, [jobId]);
  return (
  <div>
    <CompanyLayout>
      <div className={cx('job-info-modal')}>
        <div className={cx('modal-background')}>
          <div className={cx('modal-container')}>
            {isEditingTab1 ? (
              <div className={cx('modal-body')}>
                <div className={cx("job-logo")}>
                  <img 
                    src={companyImage ? companyImage : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"}
                    alt="job-logo" 
                    className={cx("logo")} 
                  />
                </div>
                <form className={cx('modal-body')} onSubmit={updateCompany}>
                  <div className={cx('form-header')}>
                    <h2>Thông tin tài khoản</h2>
                  </div>
                  {error && (<div className={cx('error-message')}>
                    <i style={{ color: 'red' }}>*</i> <span style={{ color: 'red' }}>{error}</span>
                  </div>)}
                  <div className={cx('info-item')}>
                    <label for="name" className={cx('info-label')}>
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
                  <hr></hr>
                  <div className={cx('form-header')}>
                    <h2>Thông tin công ty</h2>
                  </div>
                  <div className={cx('info-item')}>
                    <label for="company-logo" className={cx('info-label')}>
                      Logo : 
                    </label>
                    <input
                      type="file"
                      name="company-logo"
                      id="company-logo"
                      placeholder="" 
                      className={cx('info-content')} 
                    />
                  </div>
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
              <div className={cx('modal-body')}>
                <div className={cx("first-row")}>
                  <div className={cx("job-logo")}>
                    <img 
                      src={companyImage ? companyImage : "https://avatars.githubusercontent.com/u/2322183?s=200&v=4"} 
                      alt="job-logo" 
                      className={cx("logo")} 
                    />
                  </div>
                  <button className={cx('button-green')} onClick={() => setIsEditingTab1(true)}>
                    <FaEdit className={cx('icon')} />
                    <span>Chỉnh sửa</span>
                  </button>
                </div>
                <div className={cx('form-header')}>
                  <h2>Thông tin tài khoản</h2>
                </div>
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
                <hr></hr>
                <div className={cx('form-header')}>
                  <h2>Thông tin công ty</h2>
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
                <div className={cx('info-large-item')}>
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
          </div>
        </div>
      </div>
    </CompanyLayout>
    <div style={{ display: loading ? 'flex' : 'none' }} className={cx('loading')}>
      <div>
        <FadeLoader color='rgba(255, 255, 255, 1)' height='10' width='6' />
        <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
      </div>
    </div>
  </div>
  )
}

export default CompanyDetail;
