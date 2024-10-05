import React from 'react';
import style from './listTopJob.module.scss';
import classNames from 'classnames/bind';
import ITlogo from '../../../../shared/logo/it_logo.png';

const cx = classNames.bind(style);

const ItemTop = () => {
  return (
    <div className={cx('item-top')}>
      <div className={cx('logo-image')}>
        <img src={ITlogo} />
      </div>
      <span className={cx('item-top-title')}>Backend Developer</span>
      <span className={cx('item-top-subtitle')}>345 viec lam</span>
    </div>
  );
};

const ListTopJobs = () => {
  return (
    <div className={cx('section-list-top')}>
      <div className={cx('list-top-group')}>
        <div className={cx('list-top-group__title')}>
          <span>Top ngành nghề nổi bật </span>
        </div>
        <div className={cx('list-top-group__content')}>
          <ItemTop />
          <ItemTop />
          <ItemTop />
          <ItemTop />
          <ItemTop />
          <ItemTop />
          <ItemTop />
          <ItemTop />
        </div>
      </div>
    </div>
  );
};

export default ListTopJobs;
