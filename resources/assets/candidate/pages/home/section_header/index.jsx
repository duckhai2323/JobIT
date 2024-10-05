import React from 'react';
import styles from './sectionHeader.module.scss';
import classNames from 'classnames/bind';
import logoWorkFind from '../../../../shared/logo/work_find.png';
import imageHeader from '../../../../shared/logo/header_image.png';
import { AiOutlineRise } from 'react-icons/ai';
import { FcComboChart } from 'react-icons/fc';
import GradientBarChart from '../../../components/chart';
import { GoSearch } from 'react-icons/go';
const cx = classNames.bind(styles);

const SectionHeader = () => {
  return (
    <div className={cx('section-header')}>
      <div className={cx('section-header__search-panel')}>
        <h4>JobIT - Nền tảng tìm kiếm việc làm CNTT</h4>
        <h2>Thông tin thị trường dành cho bạn</h2>
        <div className={cx('search-group')}>
          <GoSearch fontSize={'22px'} style={{ marginLeft: '5px' }} />
          <input className={cx('search-input')} placeholder='Vị trí ứng tuyển' />

          <button className={cx('search-button')}>
            <span>Tìm kiếm</span>
          </button>
        </div>
        <div className={cx('header-image')}>
          <img src={imageHeader} alt='default image' />
        </div>
      </div>
      <div className={cx('section-header__chart-panel')}>
        <div className={cx('title')}>
          <div className={cx('title-search')}>
            <img src={logoWorkFind} />
            <span>Thị trường việc làm hôm nay :</span>
          </div>
          <div className={cx('title-date')}>
            <span>02/10/2024</span>
          </div>
        </div>

        <div className={cx('subtitle')}>
          <div className={cx('subtitle-left')}>
            <span className={cx('subtitle-left__1')}>Việc làm đang tuyển</span>
            <span className={cx('subtitle-left__2')}>44.149</span>
            <div className={cx('icon-rise')}>
              <AiOutlineRise />
            </div>
          </div>

          <div className={cx('subtitle-right')}>
            <span className={cx('subtitle-right__1')}>Việc làm mới hôm nay</span>
            <span className={cx('subtitle-right__2')}>44.149</span>
          </div>
        </div>

        <div className={cx('divider')}></div>

        <div className={cx('filter-work')}>
          <div className={cx('filter-work__icon')}>
            <FcComboChart className={cx('filter-work__icon-chart')} />
            <span className={cx('filter-work__icon-title')}>Nhu cầu tuyển dụng theo</span>
          </div>
          <div className={cx('filter-work__option')}>
            <span>Ngành nghề</span>
          </div>
        </div>

        <div className={cx('content-chart')}>
          <GradientBarChart />
        </div>

        <div className={cx('bottom-chart')}>
          <div className={cx('bottom-chart__item')}>
            <div className={cx('color')}></div>
            <span>Frontend Dev</span>
          </div>
          <div className={cx('bottom-chart__item')}>
            <div className={cx('color')}></div>
            <span>Backend Dev</span>
          </div>
          <div className={cx('bottom-chart__item')}>
            <div className={cx('color')}></div>
            <span>Devops</span>
          </div>
          <div className={cx('bottom-chart__item')}>
            <div className={cx('color')}></div>
            <span>BRSE</span>
          </div>
          <div className={cx('bottom-chart__item')}>
            <div className={cx('color')}></div>
            <span>SystemEngineer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
