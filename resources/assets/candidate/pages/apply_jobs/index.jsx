import React, { useState } from 'react';
import style from './apply_jobs.module.scss';
import classNames from 'classnames/bind';
import LayoutCandidate from '@/candidate/components/layout';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faEye } from '@fortawesome/free-solid-svg-icons';
import FooterHome from '../home/footer';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const cx = classNames.bind(style);

const ItemJobApply = () => {
  return (
    <div className={cx('item-job-group')}>
      <div className={cx('card', 'd-flex')}>
        {/* Logo của công ty */}
        <div className={cx('company-logo')}>
          <img
            src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/cong-ty-co-phan-atomi-digital-62f5d0dae0d35.jpg'
            alt='Company Logo'
            style={{ maxHeight: '100%' }}
          />
        </div>

        {/* Thông tin chi tiết */}
        <div className={cx('company-info')}>
          {/* Tiêu đề công việc */}
          <div className={cx('title-block')}>
            <div className={cx('job-title')}>
              <span className={cx('job-link')}>Thực Tập Sinh Mobile Developers</span>
            </div>
            <label className={cx('title-salary')}>Thoả thuận</label>
          </div>

          {/* Tên công ty */}
          <div className={cx('company-name', 'text-gray')}>
            <span className={cx('text-gray')}>Công ty Cổ phần Atomi Digital</span>
          </div>

          {/* Thời gian ứng tuyển */}
          <div className={cx('job-applies-meta')}>
            <span className={cx('cv-date')}>Thời gian ứng tuyển: 19-07-2023 00:01</span>
          </div>

          {/* Thông tin footer */}
          <div className={cx('box-footer-history')}>
            <div></div>
            <div className={cx('action-job')}>
              <span className={cx('btn-sm btn-topcv-primary')}>
                <FontAwesomeIcon icon={faMessage} /> Nhắn tin
              </span>
              <span className={cx('btn-sm btn-topcv-primary')}>
                <FontAwesomeIcon icon={faEye} /> Xem CV
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemRecommend = () => {
  return (
    <div className={cx('suitable-job__box', 'job-ta-suggest-job')}>
      {/* Thông tin chung */}
      <div className={cx('suitable-job__box--info')}>
        {/* Hình đại diện */}
        <div className={cx('suitable-job__box--info-avatar')}>
          <img
            src='https://cdn-new.topcv.vn/unsafe/150x/https://static.topcv.vn/company_logos/cong-ty-tnhh-hivelab-vina-1066be6bc819cddacd117cd49513eaa9-65d55a0f0bd24.jpg'
            className={cx('img-responsive')}
            alt='Công ty TNHH Hivelab Vina'
            title='BackEnd Developer'
          />
        </div>

        {/* Thông tin chung */}
        <div className={cx('suitable-job__box--info-general')}>
          <span className={cx('suitable-job__box--info-general-name')}>BackEnd Developer</span>
          <span className={cx('suitable-job__box--info-general-company')}>Công ty TNHH Hivelab Vina</span>
        </div>
      </div>

      {/* Tags */}
      <div className={cx('suitable-job__box--tag')}>
        <div className={cx('suitable-job__box--tag-category')}>
          {/* Lương */}
          <div className={cx('suitable-job__box--tag-category-salary')}>Thoả thuận</div>
          {/* Thành phố */}
          <div
            className={cx('suitable-job__box--tag-category-city')}
            title="<p style='text-align: left'>Hà Nội: Cầu Giấy</p>"
            data-toggle='tooltip'
            data-html='true'
          >
            Hà Nội
          </div>
        </div>

        {/* Nút yêu thích */}
        <a
          href='javascript:void(0)'
          className={cx('suitable-job__box--tag-like', 'not-like')}
          title='Lưu'
          data-toggle='tooltip'
          data-placement='top'
          data-id='1558299'
        >
          <FaRegHeart color='#00b14f' fontSize={'20px'} />
        </a>
      </div>
    </div>
  );
};

const ApplyJobsPage = () => {
  const dropDownFilter = ['Đang ứng tuyển', 'Ứng tuyển thành công', 'Ứng tuyển thất bại'];
  const [titleFilter, setFilter] = useState(dropDownFilter[0]);
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <LayoutCandidate>
      <div className={cx('section-apply-page')}>
        <div className={cx('section-apply-group')}>
          <div className={cx('section-content-left')}>
            <div className={cx('title-filter-group')}>
              <span>Việc làm đã ứng tuyển</span>
              <Box sx={{ minWidth: 110 }}>
                <FormControl fullWidth>
                  <Select
                    value={titleFilter}
                    onChange={handleChange}
                    sx={{
                      minWidth: '190px',
                      minHeight: '37px',
                      background: '#ffffff',
                      borderRadius: '3px',
                      '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0px 5px',
                        color: 'rgb(73, 80, 87)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        textAlign: 'center',
                        textDecoration: 'none',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid rgba(0, 0, 0, 0.067)',
                        color: 'rgb(73, 80, 87)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid rgba(0, 0, 0, 0.067)',
                        color: 'rgb(73, 80, 87)',
                      },
                    }}
                  >
                    <MenuItem value={dropDownFilter[0]}>{dropDownFilter[0]}</MenuItem>
                    <MenuItem value={dropDownFilter[1]}>{dropDownFilter[1]}</MenuItem>
                    <MenuItem value={dropDownFilter[2]}>{dropDownFilter[2]}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className={cx('list-jobs-group')}>
              <ItemJobApply />
              <ItemJobApply />
              <ItemJobApply />
              <ItemJobApply />
              <ItemJobApply />
              <ItemJobApply />
              <ItemJobApply />
            </div>
          </div>
          <div className={cx('section-content-right')}>
            <div className={cx('section-content-right__banner')}>
              <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/maris%20m%E1%BB%9Bi.jpg' />
            </div>
            <div className={cx('jobs-recommend')}>
              <div className={cx('jobs-recommend__title')}>Gợi ý việc làm phù hợp</div>
              <div className={cx('jobs-recommend__content')}>
                <ItemRecommend />
                <ItemRecommend />
                <ItemRecommend />
                <ItemRecommend />
                <ItemRecommend />
                <ItemRecommend />
              </div>
              <div className={cx('box-link')}>
                <span class='box-link__text'>Xem thêm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHome background={'white'} />
    </LayoutCandidate>
  );
};

export default ApplyJobsPage;
