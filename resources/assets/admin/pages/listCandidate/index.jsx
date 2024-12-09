import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '@/redux/reducers/admin/userReducer';
import AdminLayout from '../../components/layout/index';
import CandidateItem from '../../components/candidateItem/index';
import CandidateInfoModal from '../../components/candidateInfoModal/index';
import AddCandidateModal from '@/admin/components/addCandidateModal';
import styles from './listCandidate.module.scss';
import classNames from 'classnames/bind';
import { FaRegUser } from "react-icons/fa6";
import FadeLoader from 'react-spinners/FadeLoader';

const cx = classNames.bind(styles);

const ListCandidate = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [displayModal, setDisplayModal] = useState('none');
  const [displayModalAdd, setDisplayModalAdd] = useState('none');
  const [listCandidates, setListCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCandidate, setCurrentCandidate] = useState({});
  useEffect(() => {
    dispatch(Actions.getUsersRequest());
  }, [dispatch]);
  useEffect(() => {
    console.log(userState.loading);
    if (userState.users && userState.users.length > 0) {
      setLoading(false);
      console.log(userState.users);
      const candidates = userState.users.filter((user) => user.role === "0");
      setListCandidates(candidates);
    }
  }, [userState]);
  const onClickHandleDisplayModal = (candidate) => {
    if (displayModal === 'flex') {
      setDisplayModal('none');
    } else {
      setDisplayModal('flex');
      setCurrentCandidate(candidate);
    }
  };
  const onClickHandleDisplayModalAdd = () => {
    if (displayModalAdd === 'flex') {
      setDisplayModalAdd('none');
    } else {
      setDisplayModalAdd('flex');
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
            <div className={cx("add-candidate-button")}>
              <button className={cx("add-button")} onClick={onClickHandleDisplayModalAdd}>
                + Thêm ứng viên mới
              </button>
            </div>
          </div>
          <div className={cx("content")}>
            <div className={cx("candidate-list")}>
              {listCandidates && listCandidates.map((candidate) => (
                <button key={candidate.id}>
                  <CandidateItem onClickHandle={() => onClickHandleDisplayModal(candidate)} candidateData={candidate} loader={setLoading} />
                </button>
              ))}
            </div>
            <div className={cx("recent-candidates-box")}>
              <h1 className={cx("recent-title")}>Ứng viên mới gần đây</h1>
              <div className={cx("recent-candidates")}>
                {listCandidates && listCandidates.slice(0, 3).map((candidate) => (
                  <div className={cx("candidate-card")}>
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className={cx("candidate-logo")} />
                    <div className={cx("candidate-info")}>
                      <p className={cx("candidate-name")}>{candidate.name}</p>
                      <p className={cx("candidate-email")}>{candidate.email}</p>
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
      <CandidateInfoModal
        onClickHandle={() => onClickHandleDisplayModal({})}
        displayModal={displayModal}
        currentCandidate={currentCandidate}
      />
      <AddCandidateModal 
        onClickHandle={onClickHandleDisplayModalAdd}
        displayModal={displayModalAdd}
      />
    </div>
  )
}

export default ListCandidate;
