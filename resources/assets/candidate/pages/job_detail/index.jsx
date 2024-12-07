import LayoutCandidate from '@/candidate/components/layout';
import React, { useEffect, useState } from 'react';
import HeaderSearchJobDetail from '../../components/header_search';
import SectionJobInfor from './section_infor';
import SectionContent from './section_content';
import FooterHome from '../home/footer';
import { useParams } from 'react-router-dom';
import useJobsRoleCandidate from '@/hooks/candidate/useJobs';
import { getInforJobDetail } from '@/services/jobDetailService';
import useJobsApplyRoleCandidate from '@/hooks/candidate/useApplyJobs';
import { applyJobAction } from '@/services/jobfairService';
import { useSelector } from 'react-redux';

const JobDetailsPageCandidate = () => {
  const { job_id } = useParams();
  const { jobsState } = useJobsRoleCandidate();
  const [jobDetail, setJobDetail] = useState(null);
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const getJobDetail = async () => {
      const response = await getInforJobDetail(job_id);
      if (response.success) {
        setJobDetail(response.data);
      }
      return null;
    };

    if (job_id) {
      getJobDetail();
      window.scrollTo(0, 0);
    }
  }, [job_id]);

  const { applyJobsState, getListJobs } = useJobsApplyRoleCandidate();
  const contant =
    jobDetail && applyJobsState.jobsApply && applyJobsState.jobsApply.find((item) => item.job_id === jobDetail.job_id);

  const handleApply = async () => {
    const response = await applyJobAction({
      job_id,
      user_id: authState.data.data.id,
      status: 1,
      company_id: jobDetail.company_id,
      status_offer: 0,
    });
    if (response.success) {
      getListJobs();
    }
  };
  return (
    <LayoutCandidate>
      <HeaderSearchJobDetail />
      <SectionJobInfor jobDetail={jobDetail} contant={contant} handleApply={handleApply} />
      <SectionContent
        jobDetail={jobDetail}
        jobsState={jobsState}
        contant={contant}
        handleApply={handleApply}
        applyJobsState={applyJobsState}
        authState={authState}
        getListJobs={getListJobs}
      />
      <FooterHome background={'white'} />
    </LayoutCandidate>
  );
};

export default JobDetailsPageCandidate;
