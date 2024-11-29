<?php

namespace Database\Seeders;

use App\Models\JobDetail;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class JobDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        
        if (JobDetail::count() !== 0) {
            return;
        }
        $data = [
            [
              'company_id' => 5,
              'job_title' => 'Chuyên Viên Tư Vấn Giải Pháp CNTT',
              'job_details' => 'Xây dựng và triển khai các giải pháp công nghệ nhằm đáp ứng nhu cầu phát triển kinh doanh của Công ty cũng như yêu cầu từ phía khách hàng.Cập nhật và áp dụng các xu hướng công nghệ mới, nhằm tối ưu hóa hiệu quả hoạt động và đáp ứng nhu cầu của khách hàng.Quản lý các tài nguyên công nghệ của phòng, bao gồm phần mềm, phần cứng, và các dịch vụ.Tối ưu hóa chi phí đầu tư và vận hành các giải pháp công nghệ, đảm bảo hiệu quả kinh tế cho công ty.',
              'job_require' =>'Cử nhân trở lên trong các ngành tin học, điện tử viễn thông, Công nghệ Thông tin hoặc lĩnh vực liên quan.Tối thiểu 4 năm kinh nghiệm trong lĩnh vực phát triển giải pháp phần mềm và xây dựng tài liệu kĩ thuật.Ưu tiên có kinh nghiệm triển khai các dự án cho Khối Chính phủ.Hiểu biết về các ngôn ngữ lập trình, công cụ và framework phát triển phần mềm.Kiến thức về các mô hình phát triển phần mềm.Kỹ năng xây dựng kế hoạch, thiết lập mục tiêu.Kỹ năng giao tiếp, thuyết phục.Kỹ năng tư vấn, xây dựng tài liệu kĩ thuật.Kỹ năng giải quyết vấn đề, rủi ro.',
              'job_benefit' => 'Mức thu nhập hấp dẫn và các phụ cấp khác.Chế độ thưởng các ngày lễ tết, thưởng cuối năm, thưởng hiệu quả dự án.Các chế độ khác theo Luật quy định.Đánh giá xét tăng lương định kì hàng năm theo năng lực.Teambuilding 2 lần/năm, các hoạt động thể thao, giải trí gắn kết nội bộ hàng tuần như Happy hour, bóng đá, Bi-a, PES, Cờ tướng.',
              'salary' => 'Thoả thuận',
              'job_location' => 'Tổ 28 Thành Thái, Cầu Giấy',
              'candidate_number' => '2',
              'experience_require' => '4 năm',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
              
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
            [
              'company_id' => 1,
              'job_title' => '',
              'job_details' => '',
              'job_require' =>'',
              'job_benefit' => '',
              'salary' => '',
              'job_location' => '',
              'candidate_number' => '',
              'experience_require' => '',
              'status' => 1,
              'work_form' => 'Offline',
              'deadline_job' => '20/11/2024',
            ],
        ];
        foreach ($data as $item) {
            $jobdetail = JobDetail::create($item);
        }
    }
}
