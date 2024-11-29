import React from 'react';
import style from './listCompanies.module.scss';
import classNames from 'classnames/bind';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useCompaniesRoleCandidate from '@/hooks/candidate/useCompany';

const cx = classNames.bind(style);
const ListCompanies = () => {
  const { companiesState, nextToPage, revertToPage } = useCompaniesRoleCandidate();
  const companiesPerPage = 4;
  const startIndex = (companiesState.currentPage - 1) * companiesPerPage;
  const endIndex = startIndex + companiesPerPage;
  const currentCompanies = companiesState.companies?.slice(startIndex, endIndex);

  return (
    <div className={cx('section-list-companies')}>
      <div className={cx('list-companies-group')}>
        <div className={cx('list-companies-group__title')}>
          <span>Top Công ty hàng đầu</span>
          <div className={cx('arrow-button-group')}>
            <div className={cx('arrow-button')} onClick={revertToPage}>
              <IoIosArrowBack className={cx('icon-arrow')} />
            </div>
            <div className={cx('arrow-button')} onClick={nextToPage}>
              <IoIosArrowForward className={cx('icon-arrow')} />
            </div>
          </div>
        </div>
        <div className={cx('list-companies-group__content')}>
          {currentCompanies &&
            currentCompanies.length > 0 &&
            currentCompanies.map((company) => (
              <div className={cx('item-company')} key={company.company_id}>
                <div className={cx('image-company')}>
                  <img src={company.company_image} />
                </div>
                <span className={cx('company-name')}>{company.company_name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListCompanies;
