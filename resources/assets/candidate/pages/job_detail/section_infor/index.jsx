import React from 'react';
import style from './section_infor.module.scss';
import classNames from 'classnames/bind';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaRegPaperPlane, FaRegHeart } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { LuExternalLink } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';

const cx = classNames.bind(style);

const SectionJobInfor = (props) => {
  const { jobDetail } = props;
  const navigate = useNavigate();
  return (
    <div className={cx('section-infor')}>
      <div className={cx('section-infor-group')}>
        <div className={cx('section-infor-group__title-header')}>
          <span className={cx('repage')}>Trang chủ</span>
          <IoIosArrowForward />
          <span className={cx('repage')}>Backend Engineer</span>
          <IoIosArrowForward />
          <span className={cx('current-page')}>{jobDetail && jobDetail.job_title}</span>
        </div>

        <div className={cx('section-infor-group__content')}>
          <div className={cx('section-left')}>
            <div className={cx('section-left__title-infor')}>
              <span className={cx('job-name')}>{jobDetail && jobDetail.job_title}</span>
              <div className={cx('icon-container')}>
                <div className={cx('icon-group')}>
                  <div className={cx('icon')}>
                    <RiMoneyDollarCircleLine style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <div className={cx('infor-subtitle-group')}>
                    <span className={cx('title')}>Mức lương</span>
                    <span className={cx('subtitle')}>{jobDetail && jobDetail.salary}</span>
                  </div>
                </div>

                <div className={cx('icon-group')}>
                  <div className={cx('icon')}>
                    <MdLocationOn style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <div className={cx('infor-subtitle-group')}>
                    <span className={cx('title')}>Địa điểm</span>
                    <span className={cx('subtitle')}>{jobDetail && jobDetail.job_location}</span>
                  </div>
                </div>

                <div className={cx('icon-group')}>
                  <div className={cx('icon')}></div>
                  <div className={cx('infor-subtitle-group')}>
                    <span className={cx('title')}>Kinh nghiệm</span>
                    <span className={cx('subtitle')}>{jobDetail && jobDetail.experience_require}</span>
                  </div>
                </div>
              </div>

              <div className={cx('deadline')}>
                <AiFillClockCircle fontSize='15px' color='#7f878f' />
                <span>{jobDetail && 'Hạn nộp hồ sợ: ' + jobDetail.deadline_job}</span>
              </div>

              <div className={cx('btn-apply-group')}>
                <div className={cx('btn-apply-group__btn')}>
                  <FaRegPaperPlane />
                  <span>Ứng tuyển ngay</span>
                </div>
                <div className={cx('btn-apply-group__save')}>
                  <FaRegHeart />
                  <span>Lưu tin</span>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('section-right')}>
            <div className={cx('section-right__title-infor')}>
              <div className={cx('avatar-group')}>
                <div className={cx('avatar-group__img')}>
                  <img src={jobDetail && jobDetail.company_image} />
                </div>
                <span className={cx('avatar-group__name')}>{jobDetail && jobDetail.company_name}</span>
              </div>
              <div className={cx('item-infor-group')}>
                <IoMdPeople style={{ fontSize: '20px', color: '#7f878f' }} />
                <span className={cx('item-infor-group__title')}>Quy mô:</span>
                <span className={cx('item-infor-group__subtitle')}>{jobDetail && jobDetail.company_scale}</span>
              </div>
              <div className={cx('item-infor-group')}>
                <IoMdPeople style={{ fontSize: '20px', color: '#7f878f' }} />
                <span className={cx('item-infor-group__title')}>Lĩnh vực:</span>
                <span className={cx('item-infor-group__subtitle')}>{jobDetail && jobDetail.company_filed}</span>
              </div>
              <div className={cx('item-infor-group')}>
                <IoMdPeople style={{ fontSize: '20px', color: '#7f878f' }} />
                <span className={cx('item-infor-group__title')}>Địa điểm:</span>
                <span className={cx('item-infor-group__subtitle')}>{jobDetail && jobDetail.company_location}</span>
              </div>
              <div className={cx('footer')}>
                <div
                  className={cx('company-link-group')}
                  onClick={() => {
                    navigate(`/company-infor/${jobDetail.company_id}`);
                  }}
                >
                  <span>Xem trang công ty</span>
                  <LuExternalLink style={{ fontSize: '18px', color: '#00b14f' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionJobInfor;
