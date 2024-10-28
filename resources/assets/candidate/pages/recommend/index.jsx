import LayoutCandidate from '@/candidate/components/layout';
import React from 'react';
import HeaderSearchJobDetail from '../../components/header_search';
import style from './recommend.module.scss';
import classNames from 'classnames/bind';
import RecommendContentJob from './recommend_job_content';
import FooterHome from '../home/footer';

const cx = classNames.bind(style);

const RecommendJobPage = () => {
  return (
    <LayoutCandidate>
      <HeaderSearchJobDetail />
      <RecommendContentJob />
      <FooterHome background={'white'} />
    </LayoutCandidate>
  );
};

export default RecommendJobPage;
