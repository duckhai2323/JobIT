import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/adminCompaniesReducer';
import AdminLayout from '../../components/layout/index';
import CompanyItem from '../../components/companyItem/index';
import styles from './listCompany.module.scss';
import classNames from 'classnames/bind';
import { FaBuildingCircleCheck } from "react-icons/fa6";
import CompanyInfoModal from '../../components/companyInfoModal/index';
import AddCompanyModal from '../../components/addCompanyModal/index';
import FadeLoader from 'react-spinners/FadeLoader';

const cx = classNames.bind(styles);

const ListCompany = () => {
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.adminCompanies);
  const [displayModal, setDisplayModal] = useState('none');
  const [displayModalAdd, setDisplayModalAdd] = useState('none');
  const [loading, setLoading] = useState(true);
  const [listCompanies, setListCompanies] = useState([]);
  useEffect(() => {
    dispatch(Actions.getCompaniesRequest());
  }, [dispatch]);
  useEffect(() => {
    console.log(companyState.loading);
    if (companyState.companies && companyState.companies.length > 0) {
      console.log(companyState.companies);
      setListCompanies(companyState.companies);
    }
  }, [companyState]);
  const onClickHandleDisplayModal = (id) => {
    if (displayModal === 'flex') {
      setDisplayModal('none');
    } else {
      setDisplayModal('flex');
      dispatch(Actions.chooseCompany(id));
    }
  };
  const onClickHandleDisplayModalAdd = () => {
    if (displayModalAdd === 'flex') {
      setDisplayModalAdd('none');
    } else {
      setDisplayModalAdd('flex');
    }
  };
  const addCompany = () => {
    setListCompanies((prevCompanies) => [...prevCompanies, listCompanies.length + 1]);
  }
  return (
    <div>
      <AdminLayout>
        <div className={cx("container")}>
          <div className={cx("info-box")}>
            <div className={cx("companies-count-info")}>
              <p className={cx("info-title")}>Các công ty hợp tác</p>
              <div className={cx("info-companies")}>
                <FaBuildingCircleCheck />
                <p className={cx("company-count")}>{listCompanies.length} công ty</p> 
              </div>
            </div>	
            <div className={cx("add-company-button")}>
              <button className={cx("add-button")} onClick={onClickHandleDisplayModalAdd}>
                + Thêm công ty
              </button>
            </div>
          </div>
          <div className={cx("content")}>
            <div className={cx("company-list")}>
              {listCompanies && listCompanies.map((company) => (
                <button key={company.company_id}>
                  <CompanyItem onClickHandle={() => onClickHandleDisplayModal(company.company_id)} companyData={company} />
                </button>
              ))}
            </div>
            <div className={cx("recent-companies-box")}>
              <h1 className={cx("recent-title")}>Các công ty gần đây</h1>
              <div className={cx("recent-companies")}>
                <div className={cx("company-card")}>
                  <img src="https://avatars.githubusercontent.com/u/2322183?s=200&v=4" alt="" className={cx("company-logo")} />
                  <div className={cx("company-info")}>
                    <p className={cx("company-name")}>CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ</p>
                    <p className={cx("company-location")}>Hà Nội</p>
                  </div>
                </div>
                <div className={cx("company-card")}>
                  <img src="https://avatars.githubusercontent.com/u/2322183?s=200&v=4" alt="" className={cx("company-logo")} />
                  <div className={cx("company-info")}>
                    <p className={cx("company-name")}>CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ</p>
                    <p className={cx("company-location")}>Hà Nội</p>
                  </div>
                </div>
                <div className={cx("company-card")}>
                  <img src="https://avatars.githubusercontent.com/u/2322183?s=200&v=4" alt="" className={cx("company-logo")} />
                  <div className={cx("company-info")}>
                    <p className={cx("company-name")}>CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ</p>
                    <p className={cx("company-location")}>Hà Nội</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
      <div style={{ display: companyState.loading ? 'flex' : 'none' }} className={cx('loading')}>
        <div>
          <FadeLoader color='rgba(255, 255, 255, 1)' height='10' width='6' />
          <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
        </div>
      </div>
      <CompanyInfoModal
        onClickHandle={() => onClickHandleDisplayModal("")}
        displayModal={displayModal}
      />
      <AddCompanyModal 
        onClickHandle={onClickHandleDisplayModalAdd}
        displayModal={displayModalAdd}
        onSubmit={addCompany}
      />
    </div>
  )
}

export default ListCompany;
