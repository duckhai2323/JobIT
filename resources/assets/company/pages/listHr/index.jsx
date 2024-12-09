import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/userReducer';
import CompanyLayout from '../../components/layout/index';
import HrItem from '../../components/hrItem/index';
import styles from './listHr.module.scss';
import classNames from 'classnames/bind';
import { GrUserAdmin } from "react-icons/gr";
import HrInfoModal from '../../components/hrInfoModal/index';
import AddHrModal from '../../components/addHrModal/index';
import FadeLoader from 'react-spinners/FadeLoader';
import { getInforCompanyByUser } from '@/services/companyService';
import useAuth from '@/hooks/useAuth';
import { getHrAccount } from '@/services/userService';

const cx = classNames.bind(styles);

const ListHr = () => {
  const { authState } = useAuth();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [displayModal, setDisplayModal] = useState('none');
  const [displayModalAdd, setDisplayModalAdd] = useState('none');
  const [companyId, setCompanyId] = useState("");
  const [loading, setLoading] = useState(false);
  const [listHrs, setListHrs] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState({});

  const getListHrs = async () => {
    setLoading(true);
    const response = await getInforCompanyByUser(authState.data.data.id);
    if (response.success) {
      const response2 = await getHrAccount(response.data.company_id);
      if (response2.success) {
        const listAccounts = response2.data;
        console.log(listAccounts);
        setListHrs(listAccounts);
        setCompanyId(response.data.company_id);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getListHrs();
  }, []);

  const onClickHandleDisplayModal = (admin) => {
    if (displayModal === 'flex') {
      setDisplayModal('none');
    } else {
      setDisplayModal('flex');
      setCurrentAdmin(admin);
    }
  };
  const onClickHandleDisplayModalAdd = () => {
    if (displayModalAdd === 'flex') {
      setDisplayModalAdd('none');
    } else {
      setDisplayModalAdd('flex');
    }
  };
  const deleteAdmin = (admin) => {
    if(listHrs) {
      const newlistHrs = listHrs.filter((index) => index !== admin);
      setListHrs(newlistHrs);
      console.log(listHrs);
    }
  }
  return (
    <div>
      <CompanyLayout>
        <div className={cx("container")}>
          <div className={cx("info-box")}>
            <div className={cx("admins-count-info")}>
              <p className={cx("info-title")}>Danh sách nhân viên</p>
              <div className={cx("info-admins")}>
                <GrUserAdmin />
                <p className={cx("admin-count")}>{listHrs.length} nhân viên</p> 
              </div>
            </div>	
            <div className={cx("add-admin-button")}>
              <button className={cx("add-button")} onClick={onClickHandleDisplayModalAdd}>
                + Thêm nhân viên mới
              </button>
            </div>
          </div>
          <div className={cx("content")}>
            <div className={cx("admin-list")}>
              {listHrs && listHrs.map((hr) => (
                <button key={hr.id}>
                  <HrItem onClickHandle={() => onClickHandleDisplayModal(hr)} hrData={hr} loader={setLoading} getListHrs={getListHrs} />
                </button>
              ))}
            </div>
            <div className={cx("recent-admins-box")}>
              <h1 className={cx("recent-title")}>Danh sách nhân viên đăng nhập gần nhất</h1>
              <div className={cx("recent-admins")}>
                {listHrs && listHrs.slice(0, 3).map((hr) => (
                  <div className={cx("admin-card")}>
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className={cx("admin-logo")} />
                    <div className={cx("admin-info")}>
                      <p className={cx("admin-name")}>{hr.name}</p>
                    </div>
                  </div>
                ))}
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
      <HrInfoModal
        onClickHandle={() => onClickHandleDisplayModal({})}
        displayModal={displayModal}
        currentAdmin={currentAdmin}
        setLoading={setLoading}
        getListHrs={getListHrs}
      />
      <AddHrModal 
        onClickHandle={onClickHandleDisplayModalAdd}
        displayModal={displayModalAdd}
        companyId={companyId}
        getListHrs={getListHrs}
        loader={setLoading}
      />
    </div>
  )
}

export default ListHr;
