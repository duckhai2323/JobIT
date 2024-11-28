import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/index';
import CandidateItem from '../../components/candidateItem/index';
import styles from './listCandidate.module.scss';
import classNames from 'classnames/bind';
import { FaRegUser } from "react-icons/fa6";
// import CandidateInfoModal from '../../components/candidateInfoModal/index';

const cx = classNames.bind(styles);

const ListCandidate = () => {
  const [displayModal, setDisplayModal] = useState('none');
  const [listCandidates, setListCandidates] = useState([]);
  useEffect(() => {
    setListCandidates([1, 2, 3, 4, 5]);
  }, []);
  const onClickHandleDisplayModal = () => {
    if (displayModal === 'flex') {
      setDisplayModal('none');
    } else {
      setDisplayModal('flex');
    }
  };
  const deleteCandidate = (candidate) => {
    if(listCandidates) {
      const newListCandidates = listCandidates.filter((index) => index !== candidate);
      setListCandidates(newListCandidates);
      console.log(listCandidates);
    }
  }
  return (
    <div>
      <AdminLayout>
        <div className={cx("container")}>
          <div className={cx("info-box")}>
            <div className={cx("candidates-count-info")}>
              <p className={cx("info-title")}>Danh sách ứng viên</p>
              <div className={cx("info-candidates")}>
                <FaRegUser />
                <p className={cx("candidate-count")}>{listCandidates.length} ứng viên</p> 
              </div>
            </div>
            {/* <div className={cx("add-candidate-button")}>
              <button className={cx("add-button")} onClick={onClickHandleDisplayModalAdd}>
                + Thêm ứng viên
              </button>
            </div> */}
          </div>
          <div className={cx("content")}>
            <div className={cx("candidate-list")}>
              {listCandidates && listCandidates.map((candidate) => (
                <button key={candidate}>
                  <CandidateItem onClickHandle={onClickHandleDisplayModal} onClickDelete={() => deleteCandidate(candidate)} />
                </button>
              ))}
            </div>
            <div className={cx("recent-candidates-box")}>
              <h1 className={cx("recent-title")}>Ứng viên mới gần đây</h1>
              <div className={cx("recent-candidates")}>
              <div className={cx("candidate-card")}>
                  <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className={cx("candidate-logo")} />
                  <div className={cx("candidate-info")}>
                    <p className={cx("candidate-name")}>Trần Đức Khải</p>
                    <p className={cx("candidate-email")}>tranduckhai26112003@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
      {/* <CandidateInfoModal
        onClickHandle={onClickHandleDisplayModal}
        displayModal={displayModal}
      /> */}
    </div>
  )
}

export default ListCandidate;
