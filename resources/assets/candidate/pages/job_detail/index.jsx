import LayoutCandidate from '@/candidate/components/layout';
import React from 'react';
import HeaderSearchJobDetail from './header_search';
import SectionJobInfor from './section_infor';
import SectionContent from './section_content';
import FooterHome from '../home/footer';

const JobDetailsPageCandidate = () => {
  return (
    <LayoutCandidate>
      <HeaderSearchJobDetail />
      <SectionJobInfor />
      <SectionContent />
      <FooterHome />
    </LayoutCandidate>
  );
};

export default JobDetailsPageCandidate;
