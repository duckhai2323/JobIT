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
import { useToast } from '@/candidate/components/Toast';
import useSaveJobsRoleCandidate from '@/hooks/candidate/useSaveJobs';
import { deleteSaveJob, saveJob } from '@/services/saveJobService';

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
  const { saveJobsState, getListSaveJobs } = useSaveJobsRoleCandidate();

  const contant =
    jobDetail && applyJobsState.jobsApply && applyJobsState.jobsApply.find((item) => item.job_id === jobDetail.job_id);

  const contantSaveJob =
    jobDetail && saveJobsState.saveJobs && saveJobsState.saveJobs.find((item) => item.job_id === jobDetail.job_id);

  const toast = useToast();
  const handleApply = async () => {
    const response = await applyJobAction({
      job_id,
      user_id: authState.data.data.id,
      status: 1,
      company_id: jobDetail.company_id,
      status_offer: 0,
    });
    if (response.success) {
      toast.success('Bạn đã ứng tuyển thành công');
      getListJobs();
    } else {
      toast.error('Ứng tuyển thất bại');
    }
  };

  const handleSaveJob = async () => {
    const response = contantSaveJob
      ? await deleteSaveJob(job_id, authState.data.data.id)
      : await saveJob({
          job_id,
          user_id: authState.data.data.id,
        });

    if (response.success) {
      !contantSaveJob ? toast.success('Bạn đã lưu tin thành công') : toast.success('Bỏ Lưu thành công');
      getListSaveJobs();
    } else {
      toast.error('Lưu tin thất bại');
    }
  };

  return (
    <LayoutCandidate>
      <HeaderSearchJobDetail />
      <SectionJobInfor
        jobDetail={jobDetail}
        contant={contant}
        handleApply={handleApply}
        contantSaveJob={contantSaveJob}
        handleSaveJob={handleSaveJob}
      />
      <SectionContent
        jobDetail={jobDetail}
        jobsState={jobsState}
        contant={contant}
        handleApply={handleApply}
        applyJobsState={applyJobsState}
        authState={authState}
        getListJobs={getListJobs}
        saveJobsState={saveJobsState}
        handleSaveJob={handleSaveJob}
        contantSaveJob={contantSaveJob}
        getListSaveJobs={getListSaveJobs}
      />
      <FooterHome background={'white'} />
    </LayoutCandidate>
  );
};

export default JobDetailsPageCandidate;
