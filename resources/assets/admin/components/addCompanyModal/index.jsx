import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useUserRoleAdmin from '@/hooks/admin/useUser';
import useCompaniesRoleAdmin from '@/hooks/admin/useAdminCompany';
import styles from './addCompanyModal.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaAddressBook } from "react-icons/fa";
import { createNewReference } from '@/services/referenceService';
import { createNewCompany } from '@/services/companyService';
import { signUpService } from '@/services/authService';

const cx = classNames.bind(styles);

const AddCompanyModal = ({ displayModal, onClickHandle, loader }) => {
  const { companiesState, getListCompanies } = useCompaniesRoleAdmin();
  const { userState, getListUsers } = useUserRoleAdmin();
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [employeeScale, setEmployeeScale] = useState("");
  const [companyIntro, setCompanyIntro] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyField, setCompanyField] = useState("");
  const [companyOrganize, setCompanyOrganize] = useState("");
  const [companyTaxCode, setCompanyTaxCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const addCompany = async (e) => {
    e.preventDefault();
  
    if (password === confirmPassword && password !== "") {
      setError("");
  
      const companyData = {
        company_name: companyName,
        email: companyEmail,
        employee_scale: employeeScale,
        company_intro: companyIntro,
        company_link: companyLink,
        company_location: companyLocation,
        company_organize: companyOrganize,
        company_filed: companyField,
        status: 1,
        tax_code: companyTaxCode,
      };
  
      const userData = {
        name: name,
        email: email,
        password: password,
        repassword: confirmPassword,
        role: "2",
      };
  
      try {
        // Tạo công ty và người dùng
        console.log("Creating company and user...");
        let newUser = null;
        let newCompany = null;
        const addCompany = async () => {
          loader(true);
          const response = await createNewCompany(companyData);
          if (response.success) {
            newCompany = response.data;
          }
          getListCompanies();
          const response2 = await signUpService(userData);
          if (response2) {
            newUser = response2;
          } else {
            console.log(response2);
          }
          loader(false);
          console.log(newUser);
          console.log(newCompany);
          const timer = setTimeout(() => {
            if (newUser && newCompany) {
              console.log("Creating reference...");
              // Tạo reference
              createNewReference({
                user_id: newUser.id,
                company_id: newCompany.company_id,
                role: 1,
              });
              console.log("Reference created successfully!");
            } else {
              console.error("Error: Unable to find new user or company!");
            }
          }, 2000);
        }
        addCompany();
        onClickHandle();
      } catch (err) {
        console.error("Error occurred:", err);
        setError("Đã xảy ra lỗi trong quá trình xử lý.");
      }
    } else {
      setError("Mật khẩu và nhập lại mật khẩu không khớp.");
    }
  };

  useEffect(() => {
    if(displayModal === 'none') {
      setError("");
    } else {
      setCompanyName("");
      setCompanyEmail("");
      setCompanyLink("");
      setEmployeeScale("");
      setCompanyIntro("");
      setCompanyLocation("");
      setCompanyField("");
      setCompanyOrganize("");
      setCompanyTaxCode("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }, [displayModal]);

  return (
    <div style={{ display: displayModal }} className={cx('company-info-modal')}>
      <div className={cx('modal-background')}>
        <div className={cx('modal-container')}>
          <div className={cx('modal-header')}>
            <div className={cx('tabs')}><span className={cx('modal-title')}>Thêm công ty mới</span></div>
            <button onClick={onClickHandle} className={cx('close-button')}>
              <IoMdClose />
            </button>
          </div>
          <form className={cx('modal-body')} onSubmit={addCompany}>
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
      </div>
    </div>
  )
}

export default AddCompanyModal;
