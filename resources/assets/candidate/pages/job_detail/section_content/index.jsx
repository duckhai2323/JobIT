import React from 'react';
import style from './section_content.module.scss';
import classNames from 'classnames/bind';
import { WiMoonFull } from 'react-icons/wi';
import JobItemHight from '@/candidate/components/jobItemHight';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { RiMedalFill } from "react-icons/ri";
import { GiSandsOfTime } from 'react-icons/gi';
import { MdPeopleAlt } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaTransgender } from "react-icons/fa";

const cx = classNames.bind(style);

const SectionContent = (props) => {
  const {
    jobDetail,
    jobsState,
    contant,
    handleApply,
    applyJobsState,
    authState,
    getListJobs,
    saveJobsState,
    handleSaveJob,
    contantSaveJob,
    getListSaveJobs,
  } = props;

  return (
    <div className={cx('section-content')}>
      <div className={cx('section-content-group')}>
        <div className={cx('section-content-group__content')}>
          <div className={cx('section-left-group')}>
            <span className={cx('section-left-group__title')}>Chi tiết tin tuyển dụng</span>
            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Mô tả công việc</span>
              <div className={cx('content-group')}>
                {jobDetail &&
                  jobDetail.job_details.split(/\.+/).map(
                    (title) =>
                      title.length > 0 && (
                        <div className={cx('content')}>
                          <WiMoonFull style={{ fontSize: '8px' }} />
                          <span>{title}</span>
                        </div>
                      )
                  )}
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Yêu cầu ứng viên</span>
              <div className={cx('content-group')}>
                {jobDetail &&
                  jobDetail.job_require.split(/\.+/).map(
                    (title) =>
                      title.length > 0 && (
                        <div className={cx('content')}>
                          <WiMoonFull style={{ fontSize: '8px' }} />
                          <span>{title}</span>
                        </div>
                      )
                  )}
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Quyền lợi</span>
              <div className={cx('content-group')}>
                {jobDetail &&
                  jobDetail.job_benefit.split(/\.+/).map(
                    (title) =>
                      title.length > 0 && (
                        <div className={cx('content')}>
                          <WiMoonFull style={{ fontSize: '8px' }} />
                          <span>{title}</span>
                        </div>
                      )
                  )}
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Địa điểm làm việc</span>
              <div className={cx('content-group')}>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span> {jobDetail && jobDetail.job_location}</span>
                </div>
              </div>
            </div>

            <div className={cx('section-left-group__description')}>
              <span className={cx('title')}>Thời gian làm việc</span>
              <div className={cx('content-group')}>
                <div className={cx('content')}>
                  <WiMoonFull style={{ fontSize: '8px' }} />
                  <span>{jobDetail && jobDetail.work_form}</span>
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
                  <span>{`Hạn nộp hồ sơ: ${jobDetail && jobDetail.deadline_job}`}</span>
                </div>
              </div>
            </div>

            <div className={cx('btn-apply-group')}>
              {!contant ? (
                <button className={cx('apply-btn')} onClick={handleApply}>
                  Ứng tuyển ngay
                </button>
              ) : (
                <button className={cx('apply-btn-ed')}>Đã ứng tuyển</button>
              )}
              <button className={cx('save-btn')} onClick={handleSaveJob}>
                {contantSaveJob ? <FaHeart /> : <FaRegHeart />}
                <span>Lưu tin</span>
              </button>
            </div>

            <div className={cx('section-left-group__other-jobs')}>
              <span className={cx('section-left-group__title')}>Việc làm liên quan</span>
              <div className={cx('list-other-jobs')}>
                {jobsState &&
                  jobsState.jobs?.length > 0 &&
                  jobDetail &&
                  jobsState.jobs.map(
                    (job) =>
                      jobDetail.job_id !== job.job_id && (
                        <JobItemHight
                          jobDetail={job}
                          applyJobsState={applyJobsState}
                          saveJobsState={saveJobsState}
                          authState={authState}
                          getListJobs={getListJobs}
                          getListSaveJobs={getListSaveJobs}
                        />
                      )
                  )}
              </div>
            </div>
          </div>
          <div className={cx('section-right-group')}>
            <div className={cx('section-right-group__summary')}>
              <span className={cx('title')}>Thông tin chung</span>
              <div className={cx('item-group')}>
                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}>
                    <RiMedalFill style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Cấp bậc</span>
                    <span className={cx('subtitle')}>{jobDetail && jobDetail.level}</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}>
                    <GiSandsOfTime style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Kinh nghiệm</span>
                    <span className={cx('subtitle')}>{jobDetail && jobDetail.experience_require}</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}>
                    <MdPeopleAlt style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Số lượng tuyển</span>
                    <span className={cx('subtitle')}>{jobDetail && jobDetail.candidate_number} người</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}>
                    <FaBriefcase style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Hình thức làm việc</span>
                    <span className={cx('subtitle')}>{jobDetail && jobDetail.work_form}</span>
                  </div>
                </div>

                <div className={cx('item-group__infor-item')}>
                  <div className={cx('icon-container')}>
                    <FaTransgender style={{ fontSize: '35px', color: 'white' }} />
                  </div>
                  <div className={cx('title-container')}>
                    <span className={cx('title')}>Giới tính</span>
                    <span className={cx('subtitle')}>{jobDetail && jobDetail.sex}</span>
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
