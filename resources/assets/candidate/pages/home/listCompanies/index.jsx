import React from 'react';
import style from './listCompanies.module.scss';
import classNames from 'classnames/bind';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const cx = classNames.bind(style);
const ListCompanies = () => {
  return (
    <div className={cx('section-list-companies')}>
      <div className={cx('list-companies-group')}>
        <div className={cx('list-companies-group__title')}>
          <span>Top Công ty hàng đầu</span>
          <div className={cx('arrow-button-group')}>
            <div className={cx('arrow-button')}>
              <IoIosArrowBack className={cx('icon-arrow')} />
            </div>
            <div className={cx('arrow-button')}>
              <IoIosArrowForward className={cx('icon-arrow')} />
            </div>
          </div>
        </div>
        <div className={cx('list-companies-group__content')}>
          <div className={cx('item-company')}>
            <div className={cx('image-company')}>
              <img src='https://avatars.githubusercontent.com/u/2322183?s=200&v=4' />
            </div>
            <span className={cx('company-name')}>Công ty Sun Asterisk </span>
          </div>

          <div className={cx('item-company')}>
            <div className={cx('image-company')}>
              <img src='https://avatars.githubusercontent.com/u/2322183?s=200&v=4' />
            </div>
            <span className={cx('company-name')}>Công ty Sun Asterisk </span>
          </div>

          <div className={cx('item-company')}>
            <div className={cx('image-company')}>
              <img src='https://avatars.githubusercontent.com/u/2322183?s=200&v=4' />
            </div>
            <span className={cx('company-name')}>Công ty Sun Asterisk </span>
          </div>

          <div className={cx('item-company')}>
            <div className={cx('image-company')}>
              <img src='https://avatars.githubusercontent.com/u/2322183?s=200&v=4' />
            </div>
            <span className={cx('company-name')}>Công ty Sun Asterisk </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCompanies;
