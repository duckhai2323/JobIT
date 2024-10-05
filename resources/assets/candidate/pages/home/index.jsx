import LayoutCandidate from '@/candidate/components/layout';
import React from 'react';
import SectionHeader from './section_header';
import ListJobs from './list_jobs';
import ListCompanies from './listCompanies';
import ListTopJobs from './listTopJob';
import FooterHome from './footer';
import Banner from './banner';

function HomePageCandidate() {
  return (
    <LayoutCandidate>
      <SectionHeader />
      <ListJobs />
      <Banner />
      <ListCompanies />
      <ListTopJobs />
      <FooterHome />
    </LayoutCandidate>
  );
}

export default HomePageCandidate;
