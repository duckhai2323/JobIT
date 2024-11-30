import LayoutCandidate from '@/candidate/components/layout';
import React, { useEffect, useState } from 'react';
import HeaderSearchJobDetail from '../../components/header_search';
import SectionJobInfor from './section_infor';
import SectionContent from './section_content';
import FooterHome from '../home/footer';
import { useParams } from 'react-router-dom';
import useJobsRoleCandidate from '@/hooks/candidate/useJobs';
import { getInforJobDetail } from '@/services/jobDetailService';

const JobDetailsPageCandidate = () => {
  const { job_id } = useParams();
  const { jobsState } = useJobsRoleCandidate();
  const [jobDetail, setJobDetail] = useState(null);

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

  return (
    <LayoutCandidate>
      <HeaderSearchJobDetail />
      <SectionJobInfor jobDetail={jobDetail} />
      <SectionContent jobDetail={jobDetail} jobsState={jobsState} />
      <FooterHome background={'white'} />
    </LayoutCandidate>
  );
};

export default JobDetailsPageCandidate;
