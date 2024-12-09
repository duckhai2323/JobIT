import LayoutCandidate from '@/candidate/components/layout';
import React, { useEffect, useState } from 'react';
import { IoIosArrowForward, IoMdAdd } from 'react-icons/io';
import style from './company_infor.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdApartment, MdOutlineEmail, MdLocalPhone } from 'react-icons/md';
import JobItemHight from '@/candidate/components/jobItemHight';
import { FaLocationDot } from 'react-icons/fa6';
import FooterHome from '../home/footer';
import { useParams } from 'react-router-dom';
import { getInforCompany, getListJobsOfCompany } from '@/services/companyService';
import useJobsApplyRoleCandidate from '@/hooks/candidate/useApplyJobs';
import useSaveJobsRoleCandidate from '@/hooks/candidate/useSaveJobs';
const cx = classNames.bind(style);
const CompanyInforPageCandidate = () => {
  const { company_id } = useParams();
  const [companyInfor, setCompanyInfor] = useState(null);
  const [jobs, setListJobs] = useState(null);

  const { applyJobsState, getListJobs } = useJobsApplyRoleCandidate();
  const { saveJobsState, getListSaveJobs, authState } = useSaveJobsRoleCandidate();

  useEffect(() => {
    const getInfor = async () => {
      const companyInforResponse = await getInforCompany(company_id);
      const listJobsResponse = await getListJobsOfCompany(company_id);
      if (companyInforResponse.success && listJobsResponse.success) {
        setCompanyInfor(companyInforResponse.data);
        setListJobs(listJobsResponse.data);
      }
      return null;
    };

    if (company_id) {
      getInfor();
      window.scrollTo(0, 0);
    }
  }, [company_id]);

  return (
    <LayoutCandidate>
      <div className={cx('section-header-banner')}>
        <div className={cx('header-banner-group')}>
          <div className={cx('header-banner-group__title-header')}>
            <span className={cx('repage')}>Danh sách Công ty</span>
            <IoIosArrowForward />
            <span className={cx('repage')}>
              Thông tin công ty & tin tuyển dụng từ {companyInfor && companyInfor.company_name}
            </span>
          </div>

          <div className={cx('header-banner-group__content')}>
            <div className={cx('company-avatar-group')}>
              <img src={companyInfor && companyInfor.company_image} />
            </div>
            <div className={cx('image-banner')}>
              <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/normal-company/cover/company_cover_1.jpg' />
            </div>
            <div className={cx('company-infor-group')}>
              <div className={cx('company-name-group')}>
                <span className={cx('text-name')}>{companyInfor && companyInfor.company_name}</span>
                <div className={cx('company-name-group__subname')}>
                  <div className={cx('subname')}>
                    <AiOutlineGlobal style={{ color: '#fff', fontSize: '20px' }} />
                    <a className={cx('content')}>{companyInfor && companyInfor.company_link}</a>
                  </div>

                  <div className={cx('subname')}>
                    <MdApartment style={{ color: '#fff', fontSize: '20px' }} />
                    <span className={cx('content')}>{companyInfor && companyInfor.employee_scale}</span>
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
                  <p>{companyInfor && companyInfor.company_intro}</p>
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
                  {jobs &&
                    jobs.map((job) => (
                      <JobItemHight
                        jobDetail={job}
                        applyJobsState={applyJobsState}
                        saveJobsState={saveJobsState}
                        authState={authState}
                        getListJobs={getListJobs}
                        getListSaveJobs={getListSaveJobs}
                      />
                    ))}
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

                  <span className={cx('content')}>{companyInfor && companyInfor.company_location}</span>

                  <div className={cx('title-icon')}>
                    <MdOutlineEmail style={{ color: '#00b14f', fontSize: '20px' }} />
                    <span>Email</span>
                  </div>

                  <span className={cx('content')}>{companyInfor && companyInfor.email}</span>

                  <div className={cx('title-icon')}>
                    <MdLocalPhone style={{ color: '#00b14f', fontSize: '20px' }} />
                    <span>Hotline</span>
                  </div>

                  <span className={cx('content')}>{companyInfor && companyInfor.telephone}</span>
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
