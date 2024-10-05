import React, { useState } from 'react';
import styles from './listJobs.module.scss';
import classNames from 'classnames/bind';
import JobItem from '@/candidate/components/jobItem';
import { RiFilter3Fill } from 'react-icons/ri';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const cx = classNames.bind(styles);
const ListJobs = () => {
  const [filterJob, setFilterJob] = useState(false);
  const [textFilter, setTextFilter] = useState('Địa điểm');

  return (
    <div className={cx('section-list-jobs')}>
      <div className={cx('list-jobs-group')}>
        <div className={cx('list-jobs-group__header')}>
          <div className={cx('list-jobs-group__header-title')}>
            <span className={cx('header-title')}>Việc làm tốt nhất</span>
            <div
              className={cx('filter-group')}
              onClick={() => {
                setFilterJob(!filterJob);
              }}
            >
              <RiFilter3Fill color='#6f7882' />
              <span className={cx('text-filter')}>Lọc theo:</span>
              <span className={cx('text-option')}>{textFilter}</span>
              <div style={{ flex: '1' }}></div>
              <IoIosArrowDown color='#6f7882' style={{ marginRight: '5px' }} />

              <div className={cx('bar-options')} style={{ display: filterJob ? 'flex' : 'none' }}>
                <span
                  style={{ color: textFilter === 'Địa điểm' ? '#74d86b' : '#000000' }}
                  onClick={() => setTextFilter('Địa điểm')}
                >
                  Địa điểm
                </span>
                <span
                  style={{ color: textFilter === 'Mức lương' ? '#74d86b' : '#000000' }}
                  onClick={() => setTextFilter('Mức lương')}
                >
                  Mức lương
                </span>
                <span
                  style={{ color: textFilter === 'Kinh nghiệm' ? '#74d86b' : '#000000' }}
                  onClick={() => setTextFilter('Kinh nghiệm')}
                >
                  Kinh nghiệm
                </span>
                <span
                  style={{ color: textFilter === 'Ngành nghề' ? '#74d86b' : '#000000' }}
                  onClick={() => setTextFilter('Ngành nghề')}
                >
                  Ngành nghề
                </span>
              </div>
            </div>
          </div>

          <div className={cx('list-jobs-group__header-content')}>
            <div className={cx('arrow-button')}>
              <IoIosArrowBack className={cx('icon-arrow')} />
            </div>
            <div className={cx('item-content')}>
              <span>Ha Noi</span>
              <span>TP Ho Chi Minh</span>
              <span>TP Da Nang</span>
              <span>Hai Phong</span>
              <span>Hung Yen</span>
              <span>Ba Dinh</span>
              <span>Cau Giay</span>
              <span>Nhat Ban</span>
              <span>Ba Dinh</span>
              <span>Cau Giay</span>
              <span>Nhat Ban</span>
            </div>
            <div className={cx('arrow-button')}>
              <IoIosArrowForward className={cx('icon-arrow')} />
            </div>
          </div>
        </div>
        <div className={cx('list-jobs-group__content')}>
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
        </div>

        <div className={cx('list-jobs-group__navigate')}>
          <div className={cx('arrow-button')}>
            <IoIosArrowBack className={cx('icon-arrow')} />
          </div>
          <div className={cx('page-number-group')}>
            <span className={cx('page-number-left')} style={{ color: '#74d86b' }}>
              2
            </span>
            <span className={cx('page-number-right')} style={{ color: '#6f7882' }}>
              /55 trang
            </span>
          </div>
          <div className={cx('arrow-button')}>
            <IoIosArrowForward className={cx('icon-arrow')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListJobs;
