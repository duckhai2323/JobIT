import React from 'react';
import style from './header_search.module.scss';
import classNames from 'classnames/bind';
import { GoSearch } from 'react-icons/go';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { TbCategory } from 'react-icons/tb';
const cx = classNames.bind(style);

const HeaderSearchJobDetail = () => {
  return (
    <div className={cx('section-header-search')}>
      <div className={cx('header-search-group')}>
        <div className={cx('header-search-group__input-group')}>
          <GoSearch fontSize={'18px'} style={{ marginLeft: '5px', color: '#7f878f' }} />
          <input className={cx('search-input')} placeholder='Vị trí tuyển dụng, tên công ty' />
          <div className={cx('location-group')}>
            <CiLocationOn fontSize={'18px'} style={{ color: '#7f878f' }} />
            <span>Địa điểm</span>
            <IoIosArrowDown fontSize={'18px'} style={{ color: '#7f878f' }} />
          </div>
        </div>
        <div className={cx('header-search-group__search')}>
          <div className={cx('category-search')}>
            <TbCategory fontSize={'18px'} style={{ color: '#7f878f' }} />
            <span>Ngành nghề</span>
            <IoIosArrowDown fontSize={'18px'} style={{ color: '#7f878f' }} />
          </div>
          <div className={cx('search-button')}>
            <span>Tìm kiếm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchJobDetail;
