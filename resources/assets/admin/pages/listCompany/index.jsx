import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/index';
import CompanyItem from '../../components/companyItem/index';
import styles from './listCompany.module.scss';
import classNames from 'classnames/bind';
import { FaBuildingCircleCheck } from "react-icons/fa6";
import CompanyInfoModal from '../../components/companyInfoModal/index';
import AddCompanyModal from '../../components/addCompanyModal/index';

const cx = classNames.bind(styles);

const ListCompany = () => {
	const [displayModal, setDisplayModal] = useState('none');
	const [displayModalAdd, setDisplayModalAdd] = useState('none');
	const [listCompanies, setListCompanies] = useState([]);
	useEffect(() => {
		setListCompanies([1, 2, 3, 4, 5]);
	}, []);
  const onClickHandleDisplayModal = () => {
    if (displayModal === 'flex') {
      setDisplayModal('none');
			console.log(displayModal);
    } else {
      setDisplayModal('flex');
			console.log(displayModal);
    }
  };
	const onClickHandleDisplayModalAdd = () => {
    if (displayModalAdd === 'flex') {
      setDisplayModalAdd('none');
			console.log(displayModalAdd);
    } else {
      setDisplayModalAdd('flex');
			console.log(displayModalAdd);
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
								<button key={company} onClick={onClickHandleDisplayModal}>
									<CompanyItem />
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
			<CompanyInfoModal
				onClickHandle={onClickHandleDisplayModal}
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
