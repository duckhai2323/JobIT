import React, { useState, useEffect } from 'react';
import CompanyLayout from '../../components/layout/index';
import styles from './dashboard.module.scss';
import classNames from 'classnames/bind';
import JobItem from '@/company/components/jobItem';
import MarketItem from '@/company/components/marketItem';
import { FaA, FaArrowTrendUp } from "react-icons/fa6";
import { LineChart } from '@/company/components/lineChart';
import { BarChart } from '@/company/components/barChart';
import useAuth from '@/hooks/useAuth';
import { getInforCompanyByUser } from '@/services/companyService';
import { getListJobsOfCompany } from '@/services/companyService';
import { FadeLoader } from 'react-spinners';

const cx = classNames.bind(styles);

function Dashboard() {
  const { authState } = useAuth();
  const [companyImage, setCompanyImage] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [listJobs, setListJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentJob, setCurrentJob] = useState({});
  const getListJobs = async () => {
    setLoading(true);
    const response = await getInforCompanyByUser(authState.data.data.id);
    if (response.success) {
      const response2 = await getListJobsOfCompany(response.data.company_id);
      if (response2.success) {
        const listOfJobs = response2.data;
        console.log(listOfJobs);
        setListJobs(listOfJobs);
        setCompanyId(response.data.company_id);
        setCompanyImage(response.data.company_image);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    getListJobs();
  }, [])
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const month = (today.getMonth() < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1);
    const day = (today.getDate() < 10 ? `0${today.getDate()}` : today.getDate());
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  })
  return (
    <div>
      <CompanyLayout>
        <div className={cx('dashboard')}>
          <div className={cx('dashboard__header')}>
            <h3>Thị trường việc làm hôm nay <span>{currentDate}</span></h3>
          </div>
          <div className={cx('dashboard__content')}>
            <div className={cx('statistics-job')}>
              <div className={cx('work-market')}>
                <MarketItem type="Việc làm mới 24h gần đây nhất" amount="225" />
                <MarketItem type="Việc làm đang tuyển" amount="42.882" />
                <MarketItem type="Công ty đang tuyển" amount="14.505" />
              </div>
              <div className={cx('chart')}>
                <div className={cx('item-chart')}>
                  <div className={cx('header')}>
                    <div className={cx('icon')}>
                      <FaArrowTrendUp style={{color: 'white', fontSize: '13px'}} />
                    </div>
                    <span className={cx('caption')}>
                      Tăng trưởng cơ hội việc làm
                    </span>
                  </div>
                  <div className={cx('box-chart')}>
                    <LineChart />  
                  </div>
                </div>
                <div className={cx('item-chart')}>
                  <div className={cx('header')}>
                    <div className={cx('icon')}>
                      <FaArrowTrendUp style={{color: 'white', fontSize: '13px'}} />
                    </div>
                    <span className={cx('caption')}>
                      Nhu cầu tuyển dụng theo ngành nghề
                    </span>
                  </div>
                  <div className={cx('box-chart')}>
                    <BarChart />
                  </div>
                  <div className={cx('bottom-chart')}>
                    <div className={cx('bottom-chart__item')}>
                      <div className={cx('color')}></div>
                      <span>Kinh doanh</span>
                    </div>
                    <div className={cx('bottom-chart__item')}>
                      <div className={cx('color2')}></div>
                      <span>Marketing</span>
                    </div>
                    <div className={cx('bottom-chart__item')}>
                      <div className={cx('color3')}></div>
                      <span>Hành chính / Văn phòng</span>
                    </div>
                    <div className={cx('bottom-chart__item')}>
                      <div className={cx('color4')}></div>
                      <span>Tư vấn</span>
                    </div>
                    <div className={cx('bottom-chart__item')}>
                      <div className={cx('color5')}></div>
                      <span>IT phần mềm</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('newest-job')}>
                <div className={cx('scroll-bar')}>
                  <p className={cx('newest-job__title')}>
                    Việc làm mới nhất
                  </p>
                  <div className={cx('slider')}>
                  {listJobs && listJobs.slice(0, 3).map((job) => (
                    <JobItem
                      jobTitle={job.job_title}
                      location={job.job_location} 
                      companyImage={companyImage}
                    />
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CompanyLayout>
      <div style={{ display: loading ? 'flex' : 'none' }} className={cx('loading')}>
        <div>
          <FadeLoader color='rgba(255, 255, 255, 1)' height='10' width='6' />
          <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
