<?php
namespace App\Repositories\JobDetail;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Exception;

class JobDetailEloquentRepository extends EloquentRepository implements JobDetailRepositoryInterface
{
  /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\JobDetail::class;
    }

    public function createJobDetail(Request $request) {
      $data = $request->all();
      $jobdetail = $this->_model->create([
            'company_id' => $data['company_id'],
            'job_title' => $data['job_title'],
            'job_details' => $data['job_details'],
            'job_require' => $data['job_require'],
            'job_benefit' => $data['job_benefit'],
            'salary' => $data['salary'],
            'job_location' => $data['job_location'],
            'candidate_number' => $data['candidate_number'],
            'experience_require' => $data['experience_require'],
            'work_form' => $data['work_form'],
            'status' => $data['status'],
            'deadline_job' => $data['deadline_job'],
        ]);

      return $jobdetail;
    }

    public function getDetailOfJobDetail(Request $request) {
      $jobDetail = $this->_model->where('job_id', $request->job_id)->first();
      if($jobDetail) {
        return $jobDetail;
      }else {
        throw new Exception('jobdetail not found');
      }
    }

    public function index() {
      $jobs = DB::table('job_details')
                    ->where('job_details.status',1)
                    ->orderBy('job_details.updated_at', 'desc')
                    ->join('companies', 'job_details.company_id','=', 'companies.company_id')
                    ->select('companies.company_image','companies.company_name','companies.company_id','job_details.job_id','job_details.job_title','job_details.job_location','job_details.experience_require','job_details.salary','job_details.deadline_job','job_details.status','job_details.candidate_number')
                    ->get();
      if($jobs) {
        return $jobs;
      }else {
        throw new Exception('jobs not found');
      }
    }

    public function getListJobsOfCompany (Request $request) {
      $jobs = DB::table('job_details')
                    ->join('companies', 'job_details.company_id','=', 'companies.company_id')
                    ->where('job_details.company_id',$request->company_id)
                    ->orderBy('job_details.updated_at', 'desc')
                    ->select('companies.company_image','companies.company_name','companies.company_id','job_details.job_id','job_details.job_title','job_details.job_location','job_details.experience_require','job_details.salary','job_details.deadline_job','job_details.status','job_details.candidate_number')
                    ->get();
      if($jobs) {
        return $jobs;
      } else {
        throw new Exception('jobs not found');
      }
    }

    public function editJobDetail (Request $request) {
      $data = $request->all();
      $job = DB::table('job_details')->where('job_details.job_id', $request->job_id)
                      ->update($data);
      return $jobs;
    }
}