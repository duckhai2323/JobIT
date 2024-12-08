import React, { useState } from 'react';
import style from './save_jobs.module.scss';
import classNames from 'classnames/bind';
import LayoutCandidate from '@/candidate/components/layout';
import { FaTrash } from 'react-icons/fa';
import FooterHome from '../home/footer';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import useSaveJobsRoleCandidate from '@/hooks/candidate/useSaveJobs';
import { deleteSaveJob } from '@/services/saveJobService';
import { useToast } from '@/candidate/components/Toast';
import useJobsApplyRoleCandidate from '@/hooks/candidate/useApplyJobs';
import { applyJobAction } from '@/services/jobfairService';

const cx = classNames.bind(style);

const ItemSaveJob = (props) => {
  const {
    company_image,
    company_name,
    job_title,
    salary,
    job_id,
    deadline_job,
    job_location,
    getListSaveJobs,
    authState,
    getListJobs,
    applyJobsState,
    company_id,
  } = props;
  const contant = job_id && applyJobsState.jobsApply && applyJobsState.jobsApply.find((item) => item.job_id === job_id);
  const navigate = useNavigate();
  const toast = useToast();

  const handleDeleteSaveJob = async (event) => {
    event.stopPropagation();
    const response = await deleteSaveJob(job_id, authState.data.data.id);
    if (response.success) {
      toast.success('Bạn đã bỏ lưu thành công!');
      getListSaveJobs();
    } else {
      toast.error('Bỏ lưu không thành công!');
    }
  };

  const handleApply = async (event) => {
    event.stopPropagation();
    const response = await applyJobAction({
      job_id,
      user_id: authState.data.data.id,
      status: 1,
      company_id,
      status_offer: 0,
    });
    if (response.success) {
      toast.success('Bạn đã ứng tuyển thành công');
      getListJobs();
    } else {
      toast.error('Ứng tuyển thất bại');
    }
  };

  return (
    <div
      className={cx('item-job-group')}
      onClick={() => {
        navigate(`/jobdetail/${job_id}`);
      }}
    >
      <div className={cx('card', 'd-flex')}>
        {/* Logo của công ty */}
        <div className={cx('company-logo')}>
          <img src={company_image} alt='Company Logo' style={{ maxHeight: '100%' }} />
        </div>

        {/* Thông tin chi tiết */}
        <div className={cx('company-info')}>
          {/* Tiêu đề công việc */}
          <div className={cx('title-block')}>
            <div className={cx('job-title')}>
              <span className={cx('job-link')}>{job_title}</span>
            </div>
            <label className={cx('title-salary')}>{salary}</label>
          </div>

          {/* Tên công ty */}
          <div className={cx('company-name', 'text-gray')}>
            <span className={cx('text-gray')}>{company_name}</span>
          </div>

          {/* Thời gian ứng tuyển */}
          <div className={cx('job-applies-meta')}>
            <span className={cx('cv-date')}>Đã lưu: 19-07-2023</span>
          </div>

          {/* Thông tin footer */}
          <div className={cx('box-footer-history')}>
            <div className={cx('label-content')}>
              <label className={cx('address')}>{job_location}</label>
              <label className={cx('time')}>{`Hạn: ${deadline_job}`}</label>
            </div>
            <div className={cx('icon')}>
              {contant ? (
                <button className={cx('btn-apply-now-ed')}>
                  <span> Đã ứng tuyển</span>
                </button>
              ) : (
                <button className={cx('btn-apply-now')} onClick={(event) => handleApply(event)}>
                  <span>Ứng tuyển</span>
                </button>
              )}

              <div id='box-save-job-1552003' className={cx('box-save-job')} onClick={(e) => handleDeleteSaveJob(e)}>
                <span id='save-job-loading' style={{ display: 'none' }}>
                  <img src='https://www.topcv.vn/v3/images/ap-loading.gif' alt='' style={{ width: '20px' }} />
                </span>
                <FaTrash style={{ marginRight: '5px' }} /> Bỏ lưu
              </div>
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

const SaveJobsPage = () => {
  const { saveJobsState, nextToPage, revertToPage, getListSaveJobs, authState } = useSaveJobsRoleCandidate();
  const { applyJobsState, getListJobs } = useJobsApplyRoleCandidate();

  const jobsPerPage = 6;
  const startIndex = (saveJobsState.currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = saveJobsState.saveJobs?.slice(startIndex, endIndex);

  return (
    <LayoutCandidate>
      <div className={cx('section-apply-page')}>
        <div className={cx('section-apply-group')}>
          <div className={cx('section-content-left')}>
            <div className={cx('banner-header-group')}>
              <span className={cx('title')}>Việc làm đã lưu</span>
              <span className={cx('subtitle')}>
                Xem lại danh sách những việc làm mà bạn đã lưu trước đó. Ứng tuyển ngay để không bỏ lỡ cơ hội nghề
                nghiệp dành cho bạn.
              </span>
            </div>

            <div className={cx('list-jobs-group')}>
              {currentJobs &&
                currentJobs.length > 0 &&
                currentJobs.map((job) => (
                  <ItemSaveJob
                    key={job.job_fair_id}
                    company_image={job.company_image}
                    company_name={job.company_name}
                    job_title={job.job_title}
                    salary={job.salary}
                    job_id={job.job_id}
                    job_location={job.job_location}
                    deadline_job={job.deadline_job}
                    getListSaveJobs={getListSaveJobs}
                    authState={authState}
                    applyJobsState={applyJobsState}
                    getListJobs={getListJobs}
                    company_id={job.company_id}
                  />
                ))}
            </div>

            <div className={cx('list-jobs-group__navigate')}>
              <div className={cx('arrow-button')} onClick={revertToPage}>
                <IoIosArrowBack className={cx('icon-arrow')} />
              </div>
              <div className={cx('page-number-group')}>
                <span className={cx('page-number-left')} style={{ color: '#74d86b' }}>
                  {saveJobsState.currentPage}
                </span>
                <span className={cx('page-number-right')} style={{ color: '#6f7882' }}>
                  /{saveJobsState.saveJobs && Math.ceil(saveJobsState.saveJobs.length / jobsPerPage)}
                </span>
              </div>
              <div className={cx('arrow-button')} onClick={nextToPage}>
                <IoIosArrowForward className={cx('icon-arrow')} />
              </div>
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

export default SaveJobsPage;
