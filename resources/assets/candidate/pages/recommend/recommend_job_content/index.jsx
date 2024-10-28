import React from 'react';
import style from './recommendContentJob.module.scss';
import classNames from 'classnames/bind';
import JobItemHight from '@/candidate/components/jobItemHight';
const cx = classNames.bind(style);

const RecommendContentJob = () => {
  return (
    <div className={cx('section-content')}>
      <div className={cx('section-content-group')}>
        <div className={cx('section-content-group__content')}>
          <div className={cx('section-left-group')}>
            <div className={cx('banner-header-group')}>
              <span className={cx('title')}>Việc làm phù hợp</span>
              <span className={cx('subtitle')}>
                Khám phá cơ hội việc làm được gợi ý dựa trên mong muốn, kinh nghiệm và kỹ năng của bạn. Đón lấy sự
                nghiệp thành công với công việc phù hợp nhất dành cho bạn!
              </span>
            </div>
            <div className={cx('section-left-group__other-jobs')}>
              <div className={cx('list-other-jobs')}>
                <JobItemHight />
                <JobItemHight />
                <JobItemHight />
                <JobItemHight />
                <JobItemHight />
                <JobItemHight />
              </div>
            </div>
          </div>
          <div className={cx('section-right-group')}>
            <div className={cx('section-right-group__banner')}>
              <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/maris%20m%E1%BB%9Bi.jpg' />
            </div>
            <div className={cx('section-right-group__summary')}>
              <span className={cx('title')}>Nhu cầu công việc</span>
              <div className={cx('item-group')}>
                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Vị trí công việc</span>
                    <span className={cx('subtitle')}>Software Engineer</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Kinh nghiệm</span>
                    <span className={cx('subtitle')}>1 năm</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Mức lương</span>
                    <span className={cx('subtitle')}>12 triệu</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Địa điểm</span>
                    <span className={cx('subtitle')}>Hà Nội</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendContentJob;
