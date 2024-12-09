import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from '@/redux/reducers/admin/userReducer';
import AdminLayout from '../../components/layout/index';
import AdminItem from '../../components/adminItem/index';
import styles from './listAdmin.module.scss';
import classNames from 'classnames/bind';
import { GrUserAdmin } from "react-icons/gr";
import AdminInfoModal from '../../components/adminInfoModal/index';
import AddAdminModal from '../../components/addAdminModal/index';
import FadeLoader from 'react-spinners/FadeLoader';

const cx = classNames.bind(styles);

const ListAdmin = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [displayModal, setDisplayModal] = useState('none');
  const [displayModalAdd, setDisplayModalAdd] = useState('none');
  const [loading, setLoading] = useState(false);
  const [listAdmins, setListAdmins] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState({});
  useEffect(() => {
    dispatch(Actions.getUsersRequest());
  }, [dispatch]);
  useEffect(() => {
    console.log(userState.loading);
    if (userState.users && userState.users.length > 0) {
      setLoading(false);
      console.log(userState.users);
      const admins = userState.users.filter((user) => user.role === "1");
      setListAdmins(admins);
    }
  }, [userState]);
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
    if(listAdmins) {
      const newListAdmins = listAdmins.filter((index) => index !== admin);
      setListAdmins(newListAdmins);
      console.log(listAdmins);
    }
  }
  return (
    <div>
      <AdminLayout>
        <div className={cx("container")}>
          <div className={cx("info-box")}>
            <div className={cx("admins-count-info")}>
              <p className={cx("info-title")}>Danh sách quản trị viên</p>
              <div className={cx("info-admins")}>
                <GrUserAdmin />
                <p className={cx("admin-count")}>{listAdmins.length} quản trị viên</p> 
              </div>
            </div>	
            <div className={cx("add-admin-button")}>
              <button className={cx("add-button")} onClick={onClickHandleDisplayModalAdd}>
                + Thêm quản trị viên mới
              </button>
            </div>
          </div>
          <div className={cx("content")}>
            <div className={cx("admin-list")}>
              {listAdmins && listAdmins.map((admin) => (
                <button key={admin.id}>
                  <AdminItem onClickHandle={() => onClickHandleDisplayModal(admin)} adminData={admin} loader={setLoading} />
                </button>
              ))}
            </div>
            <div className={cx("recent-admins-box")}>
              <h1 className={cx("recent-title")}>Danh sách quản trị viên đăng nhập gần nhất</h1>
              <div className={cx("recent-admins")}>
                {listAdmins && listAdmins.slice(0, 3).map((admin) => (
                  <div className={cx("admin-card")}>
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className={cx("admin-logo")} />
                    <div className={cx("admin-info")}>
                      <p className={cx("admin-name")}>{admin.name}</p>
                      <p className={cx("admin-email")}>{admin.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
      <div style={{ display: (userState.loading || loading) ? 'flex' : 'none' }} className={cx('loading')}>
        <div>
          <FadeLoader color='rgba(255, 255, 255, 1)' height='10' width='6' />
          <span style={{ fontWeight: '500', color: 'white', fontSize: '18px' }}>Loading...</span>
        </div>
      </div>
      <AdminInfoModal
        onClickHandle={() => onClickHandleDisplayModal({})}
        displayModal={displayModal}
        currentAdmin={currentAdmin}
        setLoading={setLoading}
      />
      <AddAdminModal 
        onClickHandle={onClickHandleDisplayModalAdd}
        displayModal={displayModalAdd}
      />
    </div>
  )
}

export default ListAdmin;
