import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/index';
import AdminItem from '../../components/adminItem/index';
import styles from './listAdmin.module.scss';
import classNames from 'classnames/bind';
import { GrUserAdmin } from "react-icons/gr";
import AdminInfoModal from '../../components/adminInfoModal/index';

const cx = classNames.bind(styles);

const ListAdmin = () => {
	const [displayModal, setDisplayModal] = useState('none');
	const [listAdmins, setListAdmins] = useState([1, 2, 3]);
  const onClickHandleDisplayModal = () => {
    if (displayModal === 'flex') {
      setDisplayModal('none');
			console.log(displayModal);
    } else {
      setDisplayModal('flex');
			console.log(displayModal)
    }
  };
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
							<button className={cx("add-button")} onClick="">
								+ Thêm quản trị viên mới
							</button>
						</div>
  				</div>
  				<div className={cx("content")}>
  				  <div className={cx("admin-list")}>
							{listAdmins && listAdmins.map((admin) => (
								<button key={admin} onClick={onClickHandleDisplayModal}>
									<AdminItem onClickHandle={onClickHandleDisplayModal} />
								</button>
							))}
  				  </div>
  				  <div className={cx("recent-admins-box")}>
  				    <h1 className={cx("recent-title")}>Danh sách quản trị viên đăng nhập gần nhất</h1>
  				    <div className={cx("recent-admins")}>
  				      <div className={cx("admin-card")}>
  				        <img src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png" alt="" className={cx("admin-logo")} />
  				        <div className={cx("admin-info")}>
  				          <p className={cx("admin-name")}>Admin01</p>
  				        </div>
  				      </div>
  				      <div className={cx("admin-card")}>
  				        <img src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png" alt="" className={cx("admin-logo")} />
  				        <div className={cx("admin-info")}>
  				          <p className={cx("admin-name")}>Admin01</p>
  				        </div>
  				      </div>
  				      <div className={cx("admin-card")}>
  				        <img src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png" alt="" className={cx("admin-logo")} />
  				        <div className={cx("admin-info")}>
  				          <p className={cx("admin-name")}>Admin01</p>
  				        </div>
  				      </div>
  				    </div>
  				  </div>
  				</div>
				</div>
			</AdminLayout>
			<AdminInfoModal
				onClickHandle={onClickHandleDisplayModal}
				displayModal={displayModal}
			/>
		</div>
  )
}

export default ListAdmin;
