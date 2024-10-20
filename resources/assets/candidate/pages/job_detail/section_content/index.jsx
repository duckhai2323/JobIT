import React from 'react';
import style from './section_content.module.scss';
import classNames from 'classnames/bind';
import { WiMoonFull } from 'react-icons/wi';
import { FaRegHeart } from 'react-icons/fa6';
const cx = classNames.bind(style);

const ItemJob = () => {
  return (
    <div className={cx('item-job-group')}>
      <div className={cx('item-job-group__img')}></div>

      <div className={cx('item-job-group__descript')}>
        <div className={cx('job-title-group')}>
          <div className={cx('job-title-group__left')}>
            <span className={cx('job-title-group__left-title')}>Lập Trình Viên PHP Laravel (Middle)</span>
            <span className={cx('job-title-group__left-subtitle')}>Công ty cổ phần Công nghệ Bekisoft</span>
          </div>
          <span className={cx('salary')}>Tới 15 triệu</span>
        </div>

        <div className={cx('item-job-group__bottom')}>
          <div className={cx('footer-left')}>
            <div className={cx('footer-infor')}>
              <span>Han: 23/10/2025</span>
            </div>
            <div className={cx('footer-infor')}>
              <span>Ha Noi</span>
            </div>
          </div>

          <div className={cx('footer-right')}>
            <button>Ung tuyen</button>
            <div className={cx('icon-heart')}>
              <FaRegHeart style={{ color: '#00b14f', fontSize: '16px', cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionContent = () => {
  return (
    <div className={cx('section-content')}>
      <div className={cx('section-content-group')}>
        <div className={cx('section-content-group__content')}>
          <div className={cx('section-left-group')}>
            <span className={cx('section-left-group__title')}>Chi tiết tin tuyển dụng</span>
            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Mô tả công việc</span>
              <div className={cx('content-group')}>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Tham gia vào các dự án phát triển web sử dụng PHP và Laravel Framework.</span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Tham gia vào các dự án phát triển web sử dụng PHP và Laravel Framework.</span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Tham gia vào các dự án phát triển web sử dụng PHP và Laravel Framework.</span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Tham gia vào các dự án phát triển web sử dụng PHP và Laravel Framework.</span>
                </div>
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Yêu cầu ứng viên</span>
              <div className={cx('content-group')}>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>
                    Sinh viên năm cuối hoặc vừa tốt nghiệp các ngành Công nghệ Thông tin hoặc ngành liên quan.
                  </span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Có kiến thức cơ bản về PHP, OOP (lập trình hướng đối tượng).</span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Hiểu biết về các công cụ và framework như Laravel là một lợi thế.</span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Nhiệt tình, ham học hỏi và có khả năng làm việc nhóm tốt.</span>
                </div>
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Quyền lợi</span>
              <div className={cx('content-group')}>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Được đào tạo về các kỹ năng lập trình PHP, Laravel và các công nghệ liên quan.</span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>
                    Cơ hội làm việc trong môi trường năng động, sáng tạo và có cơ hội học hỏi từ các chuyên gia giàu
                    kinh nghiệm.
                  </span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>
                    Hỗ trợ tài liệu, thiết bị làm việc và các tài nguyên cần thiết cho việc phát triển kỹ năng.
                  </span>
                </div>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Được cân nhắc trở thành nhân viên chính thức sau khi kết thúc kỳ thực tập.</span>
                </div>
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Địa điểm làm việc</span>
              <div className={cx('content-group')}>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span> Hà Nội: 219 Trung Kính, P.Yên Hòa, Cầu Giấy.</span>
                </div>
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Thời gian làm việc</span>
              <div className={cx('content-group')}>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>Thứ 2 - Thứ 6 (từ 08:00 đến 17:00)</span>
                </div>
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Cách thức ứng tuyển</span>
              <div className={cx('content-group')}>
                <div
                  className={cx('content')}
                  style={{ flex: 'display', flexDirection: 'column', alignItems: 'start', gap: '15px' }}
                >
                  <span> Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây.</span>
                  <span>Hạn nộp hồ sơ: 14/11/2024</span>
                </div>
              </div>
            </div>

            <div className={cx('btn-apply-group')}>
              <button className={cx('apply-btn')}>Ứng tuyển ngay</button>
              <button className={cx('save-btn')}>Lưu tin</button>
            </div>

            <div className={cx('section-left-group__other-jobs')}>
              <span className={cx('section-left-group__title')}>Việc làm liên quan</span>
              <div className={cx('list-other-jobs')}>
                <ItemJob />
                <ItemJob />
                <ItemJob />
                <ItemJob />
                <ItemJob />
                <ItemJob />
              </div>
            </div>
          </div>
          <div className={cx('section-right-group')}>
            <div className={cx('section-right-group__summary')}>
              <span className={cx('title')}>Thông tin chung</span>
              <div className={cx('item-group')}>
                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Cấp bậc</span>
                    <span className={cx('subtitle')}>Thực tập sinh</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Kinh nghiệm</span>
                    <span className={cx('subtitle')}>Không yêu cầu kinh nghiệm</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Số lượng tuyển</span>
                    <span className={cx('subtitle')}>5 người</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Hình thức làm việc</span>
                    <span className={cx('subtitle')}>Toàn thời gian</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}></div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Giới tính</span>
                    <span className={cx('subtitle')}>Không yêu cầu</span>
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

export default SectionContent;
