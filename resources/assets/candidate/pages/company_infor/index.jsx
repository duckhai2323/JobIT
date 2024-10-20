import LayoutCandidate from '@/candidate/components/layout';
import React from 'react';
import { IoIosArrowForward, IoMdAdd } from 'react-icons/io';
import style from './company_infor.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdApartment, MdOutlineEmail, MdLocalPhone } from 'react-icons/md';
import JobItemHight from '@/candidate/components/jobItemHight';
import { FaLocationDot } from 'react-icons/fa6';
import FooterHome from '../home/footer';
const cx = classNames.bind(style);
const CompanyInforPageCandidate = () => {
  return (
    <LayoutCandidate>
      <div className={cx('section-header-banner')}>
        <div className={cx('header-banner-group')}>
          <div className={cx('header-banner-group__title-header')}>
            <span className={cx('repage')}>Danh sách Công ty</span>
            <IoIosArrowForward />
            <span className={cx('repage')}>
              Thông tin công ty & tin tuyển dụng từ Công ty cổ phần Công nghệ Bekisoft
            </span>
          </div>

          <div className={cx('header-banner-group__content')}>
            <div className={cx('company-avatar-group')}>
              <img src='https://play-lh.googleusercontent.com/FJJ10LTK4KUtPxAaf-kBzQSfYMf9yfdRKU8dRR1d6EWsltN6ZKYPE8jWLQc99PRZ52Q' />
            </div>
            <div className={cx('image-banner')}>
              <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/normal-company/cover/company_cover_1.jpg' />
            </div>
            <div className={cx('company-infor-group')}>
              <div className={cx('company-name-group')}>
                <span className={cx('text-name')}>Công ty cổ phần Công nghệ Bekisoft</span>
                <div className={cx('company-name-group__subname')}>
                  <div className={cx('subname')}>
                    <AiOutlineGlobal style={{ color: '#fff', fontSize: '20px' }} />
                    <a className={cx('content')}>https://www.facebook.com/BekisoftJSC</a>
                  </div>

                  <div className={cx('subname')}>
                    <MdApartment style={{ color: '#fff', fontSize: '20px' }} />
                    <span className={cx('content')}>25-99 nhân viên</span>
                  </div>
                </div>
              </div>
              <button className={cx('follow-compnay-btn')}>
                <IoMdAdd />
                <span>Theo dõi công ty</span>
              </button>
            </div>
          </div>

          <div className={cx('section-intro-group')}>
            <div className={cx('section-intro-group__left')}>
              <div className={cx('company-intro-group')}>
                <div className={cx('company-intro-group__header')}>
                  <span>Giới thiệu công ty</span>
                </div>
                <div className={cx('company-intro-group__content')}>
                  <p>
                    Bekisoft JSC là công ty sản xuất và phát triển phần mềm cho thị trường Nhật Bản, Việt Nam và thị
                    trường các nước nói tiếng Anh. Với đội ngũ nhân sự trẻ nhiệt huyết và chuyên môn cao, chúng tôi sẵn
                    sàng đáp ứng mọi yêu cầu khó khăn và mang đến những giải pháp công nghệ tối ưu cho khách hàng. Sứ
                    mệnh của chúng tôi là tận dụng sự năng động và sự sáng tạo của đội ngũ trẻ, cùng với sức mạnh của
                    công nghệ để giúp khách hàng đạt được thành công. Chúng tôi cam kết đồng hành, hợp tác chặt chẽ với
                    khách hàng của mình để hiểu nhu cầu và những thách thức riêng của họ, từ đó phát triển các giải pháp
                    công nghệ phù hợp và tạo ra giá trị bền vững cho doanh nghiệp.
                  </p>
                </div>
              </div>
              <div className={cx('company-intro-group')}>
                <div className={cx('company-intro-group__header')}>
                  <span>Tuyển dụng</span>
                </div>
                <div
                  className={cx('company-intro-group__content')}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  <JobItemHight />
                  <JobItemHight />
                  <JobItemHight />
                  <JobItemHight />
                  <JobItemHight />
                </div>
              </div>
            </div>
            <div className={cx('section-intro-group__right')}>
              <div className={cx('hotline-group')}>
                <div className={cx('hotline-group__header')}>
                  <span>Thông tin liên hệ</span>
                </div>
                <div className={cx('hotline-group__body')}>
                  <div className={cx('title-icon')}>
                    <FaLocationDot style={{ color: '#00b14f', fontSize: '20px' }} />
                    <span>Địa chỉ công ty</span>
                  </div>

                  <span className={cx('content')}>
                    Tầng 4 tòa Mai Linh Đông Đô, 499 Lương Thế Vinh, Phường Mễ Trì, Quận Nam Từ Liêm, Thành phố Hà Nội,
                    Việt Nam
                  </span>

                  <div className={cx('title-icon')}>
                    <MdOutlineEmail style={{ color: '#00b14f', fontSize: '20px' }} />
                    <span>Email</span>
                  </div>

                  <span className={cx('content')}>rikkia.edu@gmail.com</span>

                  <div className={cx('title-icon')}>
                    <MdLocalPhone style={{ color: '#00b14f', fontSize: '20px' }} />
                    <span>Hotline</span>
                  </div>

                  <span className={cx('content')}>09876786688</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHome background={'white'} />
    </LayoutCandidate>
  );
};

export default CompanyInforPageCandidate;
