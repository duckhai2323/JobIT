import React from 'react';
import style from './section_infor.module.scss';
import classNames from 'classnames/bind';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaRegPaperPlane, FaRegHeart } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { LuExternalLink } from 'react-icons/lu';

const cx = classNames.bind(style);

const SectionJobInfor = () => {
  return (
    <div className={cx('section-infor')}>
      <div className={cx('section-infor-group')}>
        <div className={cx('section-infor-group__title-header')}>
          <span className={cx('repage')}>Trang chủ</span>
          <IoIosArrowForward />
          <span className={cx('repage')}>Backend Engineer</span>
          <IoIosArrowForward />
          <span className={cx('current-page')}>Lập trình Backend Laravel</span>
        </div>

        <div className={cx('section-infor-group__content')}>
          <div className={cx('section-left')}>
            <div className={cx('section-left__title-infor')}>
              <span className={cx('job-name')}>Lập trình Backend Laravel</span>
              <div className={cx('icon-container')}>
                <div className={cx('icon-group')}>
                  <div className={cx('icon')}></div>
                  <div className={cx('infor-subtitle-group')}>
                    <span className={cx('title')}>Mức lương</span>
                    <span className={cx('subtitle')}>Thỏa thuận</span>
                  </div>
                </div>

                <div className={cx('icon-group')}>
                  <div className={cx('icon')}></div>
                  <div className={cx('infor-subtitle-group')}>
                    <span className={cx('title')}>Địa điểm</span>
                    <span className={cx('subtitle')}>Hà Nội</span>
                  </div>
                </div>

                <div className={cx('icon-group')}>
                  <div className={cx('icon')}></div>
                  <div className={cx('infor-subtitle-group')}>
                    <span className={cx('title')}>Kinh nghiệm</span>
                    <span className={cx('subtitle')}>Dưới 1 năm</span>
                  </div>
                </div>
              </div>

              <div className={cx('deadline')}>
                <AiFillClockCircle fontSize='15px' color='#7f878f' />
                <span>Hạn nộp hồ sơ: 21/10/2024</span>
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
                  <img src='https://en.sun-asterisk.com/wp-content/uploads/2020/06/sun-ogp.png' />
                </div>
                <span className={cx('avatar-group__name')}>Sun Asterisk VN</span>
              </div>
              <div className={cx('item-infor-group')}>
                <IoMdPeople style={{ fontSize: '20px', color: '#7f878f' }} />
                <span className={cx('item-infor-group__title')}>Quy mô:</span>
                <span className={cx('item-infor-group__subtitle')}>100-499 nhân viên</span>
              </div>
              <div className={cx('item-infor-group')}>
                <IoMdPeople style={{ fontSize: '20px', color: '#7f878f' }} />
                <span className={cx('item-infor-group__title')}>Lĩnh vực:</span>
                <span className={cx('item-infor-group__subtitle')}>IT - Phần mềm</span>
              </div>
              <div className={cx('item-infor-group')}>
                <IoMdPeople style={{ fontSize: '20px', color: '#7f878f' }} />
                <span className={cx('item-infor-group__title')}>Địa điểm:</span>
                <span className={cx('item-infor-group__subtitle')}>
                  Tầng 19, Tòa nhà Thành Lợi 2, Số 3 Lê Đình Lý, Da Nang, Viet
                </span>
              </div>
              <div className={cx('footer')}>
                <div className={cx('company-link-group')}>
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
