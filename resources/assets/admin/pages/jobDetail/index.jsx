import React, { useState, useEffect } from 'react';
import styles from './jobDetail.module.scss';
import classNames from 'classnames/bind';
import { IoMdClose } from 'react-icons/io';
import { FaEdit, FaAddressBook } from "react-icons/fa";
import AdminLayout from '../../components/layout';

const cx = classNames.bind(styles);

const JobDetail = () => {
  const [isEditingTab1, setIsEditingTab1] = useState(false);
  const [jobTitle, setJobTitle] = useState("Nhân viên phát triển thị trường");
  const [companyName, setCompanyName] = useState("Công ty Cổ phần Truyền thông Vàng châu Á");
  const [jobDetails, setJobDetails] = useState(
    "   - Phụ trách việc tìm kiếm và thuê vị trí lắp đặt các màn hình quảng cáo LCD / DIGITAL POSTER/ GIANT POSTER tại các Trường Đại Học, Coffee Shop & Milk Tea, Fastfood (KFC), Beauty Hair Salon, chung cư căn hộ. \n\
    - Thương lượng, đàm phán và ký kết hợp đồng với đối tác. \n\
    - Thường xuyên gặp gỡ, chăm sóc đối tác tận tụy, chân thành để xây dựng mối quan hệ hợp tác lâu bền và ngày càng phát triển. \n\
    - Giải quyết những phát sinh trong quá trình thực hiện Hợp đồng hợp tác với đối tác gồm Nghiệm thu, thanh lý, thanh toán, công nợ, xin phép nội dung quảng cáo và các phát sinh khác. \n\
    - Phối hợp với các phòng ban khác trong việc quản lý vận hành, chăm sóc, kiện toàn hệ thống quảng cáo được phụ trách. \n\
    - Mạnh dạn nghiên cứu, phát triển những hệ thống quảng cáo mới mẽ, tiềm năng trong tương lai, cũng như tăng cường đề xuất, kiến nghị để giúp tăng thêm chất lượng Hệ thống quảng cáo hiện tại của Công ty. \n\
    - Thực hiện các công việc theo yêu cầu của quản lý trực tiếp \n\
    - Công việc cụ thể trao đổi thêm khi phỏng vấn"
  )
  const [jobRequire, setJobRequire] = useState(
    "   - Tốt nghiệp Cao đẳng, Đại học \n\
    - Độ tuổi: 1997 – 2002. Ngoại hình ưa nhìn. \n\
    - Năng động, chuyên nghiệp, có khả năng làm việc dưới áp lực cao. \n\
    - Có sức khỏe tốt, đảm bảo việc di chuyển thường xuyên nhằm khảo sát thị trường, khảo sát hệ thống và đám phán với đối tác. \n\
    - Kỹ năng giao tiếp và thuyết phục tốt. \n\
    - Có kĩ năng sử dụng thành thạo Excel, Word, Powerpoint. \n\
    - Ngoại ngữ tiếng Anh giao tiếp tốt là một lợi thế. \n\
    - Có khả năng làm việc độc lập và làm việc theo nhóm."
  )
  const [jobBenefit, setJobBenefit] = useState(
    "   - Lương căn bản từ 11.000.000 đồng + Lương hiệu quả cao + Thưởng nóng + Thưởng KPI cuối năm. \n\
    - Thu nhập trung bình mỗi tháng: từ 15.000.000 đồng đến 20.000.000 đồng \n\
    - Được làm việc trong môi trường truyền thông trẻ trung, năng động, chuyên nghiệp. \n\
    - Đặc biệt được tham gia các lớp Training chuyên sâu về kỹ năng chuyên môn, về sản phẩm, dịch vụ của Công ty cũng như các kiến thức chuyên sâu trong ngành Quảng cáo OOH tại Việt Nam. \n\
    - Được sử dụng hoàn toàn miễn phí các tiện ích và hỗ trợ của công ty nhằm thông suốt cho công việc như taxi đi lại, chi phí tiếp khách, quà tặng khách hàng. \n\
    - Được tài trợ hoàn toàn khi tham gia các hoạt động truyền thống của Công ty như Xem phim hàng tháng, Running day hàng tháng, du lịch nghỉ dưỡng hàng năm trong và ngoài nước. \n\
    - Được xét tăng lương 1 lần/năm. \n\
    - Chế độ lương tháng 13. \n\
    - Thưởng vào các dịp Lễ, Tết, Sinh nhật. \n\
    - Được hưởng các chế độ BHXH, BHYT, BHTN theo Luật Lao động. \n\
    - Làm việc từ Thứ Hai đến Thứ sáu: 08:30 – 18:00 (Nghỉ trưa 12:00 – 13:30)."
  )
  const [salary, setSalary] = useState("11-15 triệu")
  const [jobLocation, setJobLocation] = useState("Hà Nội")
  const [candidateNumber, setCandidateNumber] = useState("1")
  const [experienceRequire, setExperienceRequire] = useState("Dưới 1 năm")
  const [workFrom, setWorkFrom] = useState("Toàn thời gian")
  const [error, setError] = useState("");

  const updateJob = (e) => {
    e.preventDefault();
    setIsEditingTab1(false);
  }
  useEffect(() => {
    setIsEditingTab1(false);
    setError("");
  }, [])
  return (
    <AdminLayout>
      <div className={cx('job-info-modal')}>
        <div className={cx('modal-background')}>
          <div className={cx('modal-container')}>
            {isEditingTab1 ? (
              <div className={cx('modal-body')}>
                <div className={cx("job-logo")}>
                  <img 
                    src="https://cdn-new.topcv.vn/unsafe/80x/https://static.topcv.vn/company_logos/fOM2T6tdoG3BCqPFfeyECPl8GyJ8eUNH_1676606887____9363a8785daf420770652efc1338dd72.png" 
                    alt="job-logo" 
                    className={cx("logo")} 
                  />
                </div>
                <form onSubmit={updateJob}>
                  <div className={cx('form-header')}>
                    <h2>Thông tin chung</h2>
                  </div>
                  <div className={cx('info-item')}>
                    <label htmlFor="job-title" className={cx('info-label')}>
                      Tên công việc<i style={{ color: 'red' }}>*</i> : 
                    </label>
                    <input
                      type="text"
                      name="job-title"
                      id="job-title"
                      placeholder="" 
                      className={cx('info-content')}
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)} 
                    />
                  </div>
                  <div className={cx('info-item')}>
                    <label htmlFor="company-name" className={cx('info-label')}>
                      Thuộc về công ty<i style={{ color: 'red' }}>*</i> : 
                    </label>
                    <select
                      name="company-name"
                      id="company-name"
                      className={cx('info-content')}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    >
                      <option value="Công ty Cổ phần Truyền thông Vàng châu Á">Công ty Cổ phần Truyền thông Vàng châu Á</option>
                      <option value="CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ">CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GOBIZ</option>
                    </select>
                  </div>
                  <div className={cx('info-item')}>
                    <label for="salary" className={cx('info-label')}>
                      Mức lương<i style={{ color: 'red' }}>*</i> : 
                    </label>
                    <input
                      type="text"
                      name="salary"
                      id="salary"
                      placeholder="" 
                      className={cx('info-content')}
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>
                  <div className={cx('info-item')}>
                    <label for="job-location" className={cx('info-label')}>
                      Địa chỉ<i style={{ color: 'red' }}>*</i> : 
                    </label>
                    <input
                      type="text"
                      name="job-location"
                      id="job-location"
                      placeholder="" 
                      className={cx('info-content')}
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)}
                    />
                  </div>
                  <div className={cx('info-item')}>
                    <label for="candidate-number" className={cx('info-label')}>
                      Số lượng tuyển<i style={{ color: 'red' }}>*</i> : 
                    </label>
                    <input
                      type="number"
                      name="candidate-number"
                      id="candidate-number"
                      placeholder="" 
                      className={cx('info-content')}
                      value={candidateNumber}
                      onChange={(e) => setCandidateNumber(e.target.value)}
                    />
                  </div>
                  <div className={cx('info-item')}>
                    <label for="experience-require" className={cx('info-label')}>
                      Mức lương<i style={{ color: 'red' }}>*</i> : 
                    </label>
                    <input
                      type="text"
                      name="experience-require"
                      id="experience-require"
                      placeholder="" 
                      className={cx('info-content')}
                      value={experienceRequire}
                      onChange={(e) => setExperienceRequire(e.target.value)}
                    />
                  </div>
                  <div className={cx('info-item')}>
                    <label for="work-from" className={cx('info-label')}>
                      Hình thức làm việc<i style={{ color: 'red' }}>*</i> : 
                    </label>
                    <input
                      type="text"
                      name="work-from"
                      id="work-from"
                      placeholder="" 
                      className={cx('info-content')}
                      value={workFrom}
                      onChange={(e) => setWorkFrom(e.target.value)}
                    />
                  </div>
                  <hr></hr>
                  <div className={cx('form-header')}>
                    <h2>Chi tiết công việc</h2>
                  </div>
                  <div className={cx('info-large-item')}>
                    <label htmlFor="job-details" className={cx('info-label')}>
                      Mô tả công việc: 
                    </label>
                    <textarea
                      name="job-details"
                      id="job-details"
                      className={cx('info-content')}
                      value={jobDetails} 
                      onChange={(e) => setJobDetails(e.target.value)}
                      rows="15"
                      cols="80"
                    />
                  </div>
                  <div className={cx('info-large-item')}>
                    <label htmlFor="job-require" className={cx('info-label')}>
                      Yêu cầu ứng viên: 
                    </label>
                    <textarea
                      name="job-require"
                      id="job-require"
                      className={cx('info-content')}
                      value={jobRequire} 
                      onChange={(e) => setJobRequire(e.target.value)}
                      rows="15"
                      cols="80"
                    />
                  </div>
                  <div className={cx('info-large-item')}>
                    <label htmlFor="job-benefit" className={cx('info-label')}>
                      Quyền lợi: 
                    </label>
                    <textarea
                      name="job-benefit"
                      id="job-benefit"
                      className={cx('info-content')}
                      value={jobBenefit} 
                      onChange={(e) => setJobBenefit(e.target.value)}
                      rows="15"
                      cols="80"
                    />
                  </div>
                  <div className={cx("submit-button")}>
                    <button style={{ border: 'none' }} className={cx('button-green')} type="submit">
                      <FaAddressBook className={cx('icon')} />
                      <span>Xác nhận</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className={cx('modal-body')}>
                <div className={cx("first-row")}>
                  <div className={cx("job-logo")}>
                    <img 
                      src="https://cdn-new.topcv.vn/unsafe/80x/https://static.topcv.vn/company_logos/fOM2T6tdoG3BCqPFfeyECPl8GyJ8eUNH_1676606887____9363a8785daf420770652efc1338dd72.png" 
                      alt="job-logo" 
                      className={cx("logo")} 
                    />
                  </div>
                  <button className={cx('button-green')} onClick={() => setIsEditingTab1(true)}>
                    <FaEdit className={cx('icon')} />
                    <span>Chỉnh sửa</span>
                  </button>
                </div>
                <div className={cx('form-header')}>
                  <h2>Thông tin chung</h2>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Tên công việc: </div>
                  <div className={cx('info-content')}>{jobTitle}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Thuộc về công ty: </div>
                  <div className={cx('info-content')}>{companyName}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Mức lương: </div>
                  <div className={cx('info-content')}>{salary}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Địa chỉ: </div>
                  <div className={cx('info-content')}>{jobLocation}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Số lượng tuyển: </div>
                  <div className={cx('info-content')}>{candidateNumber} người</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Kinh nghiệm: </div>
                  <div className={cx('info-content')}>{experienceRequire}</div>
                </div>
                <div className={cx('info-item')}>
                  <div className={cx('info-label')}>Hình thức làm việc: </div>
                  <div className={cx('info-content')}>{jobLocation}</div>
                </div>
                <hr></hr>
                <div className={cx('form-header')}>
                  <h2>Chi tiết công việc</h2>
                </div>
                <div className={cx('info-large-item')}>
                  <div className={cx('info-label')}>Mô tả công việc: </div>
                  <div className={cx('info-content')}>
                    <div className={cx('job-intro')}>
                    {jobDetails.split(" - ").map((line, index) => (
                      index > 0 && line && <li key={index}>{line}</li>
                    ))}
                    </div>
                  </div>
                </div>
                <div className={cx('info-large-item')}>
                  <div className={cx('info-label')}>Yêu cầu ứng viên: </div>
                  <div className={cx('info-content')}>
                    <div className={cx('job-intro')}>
                    {jobRequire.split(" - ").map((line, index) => (
                      index > 0 && line && <li key={index}>{line}</li>
                    ))}
                    </div>
                  </div>
                </div>
                <div className={cx('info-large-item')}>
                  <div className={cx('info-label')}>Quyền lợi: </div>
                  <div className={cx('info-content')}>
                    <div className={cx('job-intro')}>
                    {jobBenefit.split(" - ").map((line, index) => (
                      index > 0 && line && <li key={index}>{line}</li>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default JobDetail;
