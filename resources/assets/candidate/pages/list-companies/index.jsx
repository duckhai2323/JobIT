import React from 'react';
import style from './list-companies.module.scss';
import classNames from 'classnames/bind';
import LayoutCandidate from '@/candidate/components/layout';
import { IoIosSearch } from 'react-icons/io';
import FooterHome from '../home/footer';
import useCompaniesRoleCandidate from '@/hooks/candidate/useCompany';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(style);

const ItemCompanyGrid = (props) => {
  const { company } = props;
  const navigate = useNavigate();
  return (
    <div className={cx('box-company')}>
      <div className={cx('company-banner')}>
        <div
          className={cx('cover-wrapper')}
          onClick={() => {
            navigate(`/company-infor/${company.company_id}`);
          }}
        >
          <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_covers/tap-doan-cong-nghiep-vien-thong-quan-doi-e3c6e7727df189e29507b150c6a7d893-64c328ef424bd.jpg' />
        </div>
        <div
          className={cx('company-logo')}
          onClick={() => {
            navigate(`/company-infor/${company.company_id}`);
          }}
        >
          <img src={company.company_image} />
        </div>
      </div>
      <div className={cx('company-infor')}>
        <span>
          <a href={company.company_link} class='company-name' target='_blank'>
            {company.company_name}
          </a>
        </span>
        <div className={cx('company-description')} bis_skin_checked='1'>
          <p>{company.company_intro}</p>
        </div>
      </div>
    </div>
  );
};

const ListCompaniesPage = () => {
  const { companiesState } = useCompaniesRoleCandidate();
  return (
    <LayoutCandidate>
      <div className={cx('section-list-companies-page')}>
        <div className={cx('section-header')}>
          <div className={cx('section-header__container')}>
            <div className={cx('box-search')} bis_skin_checked='1'>
              <div className={cx('caption')} bis_skin_checked='1'>
                <span className={cx('title')}>Khám phá những công ty nổi bật</span>
                <p className={cx('description')}>
                  Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho bạn
                </p>
              </div>
              <form className={cx('form-search')}>
                <IoIosSearch className={cx('icon-search')} />
                <input className={cx('form-control')} placeholder='Nhập tên công ty' id='keyword' name='keyword' />
                <button className={cx('btn-search')}>Tìm kiếm</button>
              </form>
            </div>
            <div className={cx('box-img')} bis_skin_checked='1'>
              <img src='https://static.topcv.vn/v4/image/brand-identity/company-billBoard.png?v=1.0.0' />
            </div>
          </div>
        </div>
        <div className={cx('section-content')}>
          <div className={cx('section-content__header-title')}>
            <span>DANH SÁCH CÁC CÔNG TY NỔI BẬT</span>
          </div>
          <div className={cx('section-content__content')}>
            {companiesState.companies &&
              companiesState.companies.map((company) => <ItemCompanyGrid key={company.company_id} company={company} />)}
          </div>
        </div>
      </div>
      <FooterHome />
    </LayoutCandidate>
  );
};

export default ListCompaniesPage;
