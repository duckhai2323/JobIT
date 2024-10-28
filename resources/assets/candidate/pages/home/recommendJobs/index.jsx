import React from 'react';
import style from './recommendJobs.module.scss';
import classNames from 'classnames/bind';
import JobItemRecommend from './jobItemRecommend';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);
const RecommendJobs = () => {
  const navigate = useNavigate();
  return (
    <div className={cx('section-recommend-jobs')}>
      <div className={cx('recommend-jobs-group')}>
        <div className={cx('recommend-jobs-group__title')}>
          <span>Gợi ý việc làm phù hợp</span>
          <div className={cx('arrow-button-group')}>
            <span
              className={cx('see-all')}
              onClick={() => {
                navigate('/recommend');
              }}
            >
              Xem tất cả
            </span>
            <div className={cx('arrow-button')}>
              <IoIosArrowBack className={cx('icon-arrow')} />
            </div>
            <div className={cx('arrow-button')}>
              <IoIosArrowForward className={cx('icon-arrow')} />
            </div>
          </div>
        </div>
        <div className={cx('recommend-jobs-group__content')}>
          <JobItemRecommend />
          <JobItemRecommend />
          <JobItemRecommend />
          <JobItemRecommend />
        </div>
      </div>
    </div>
  );
};

export default RecommendJobs;
