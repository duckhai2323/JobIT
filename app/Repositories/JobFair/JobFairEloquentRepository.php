<?php
namespace App\Repositories\JobFair;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Exception;

class JobFairEloquentRepository extends EloquentRepository implements JobFairRepositoryInterface
{
  /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\JobFair::class;
    }

    public function applyJobFair(Request $request) {
    $data = $request->all();

    $exists = $this->_model->where('user_id', $data['user_id'])
        ->where('job_id', $data['job_id'])
        ->exists();

    if ($exists) {
        throw new Exception("Bản ghi đã tồn tại với user_id = {$data['user_id']} và job_id = {$data['job_id']}");
    }

    $jobfair = $this->_model->create([
        'job_id' => $data['job_id'],
        'user_id' => $data['user_id'],
        'status' => $data['status'],
        'company_id' => $data['company_id'],
        'status_offer' => $data['status_offer'],
    ]);

    return $jobfair;
    }

    public function index(Request $request) {
      $listJobId = DB::table('jobfairs')
                       ->where('jobfairs.user_id','=',$request->user_id)
                       ->join('job_details','jobfairs.job_id','=','job_details.job_id')
                      ->join('companies','jobfairs.company_id','=','companies.company_id')
                      ->orderBy('job_details.updated_at', 'desc')
                      ->select('companies.company_image','companies.company_name','companies.company_id','job_details.job_id','job_details.job_title','job_details.job_location','job_details.experience_require','job_details.salary','job_details.deadline_job','job_details.status','job_details.candidate_number','jobfairs.status_offer','jobfairs.status AS jobfair_status','jobfairs.job_fair_id')
                      ->get();

        return  $listJobId;
    }

    public function updateStatusJobFair(Request $request) {
      $data = $request->all();
      $jobfair = $this->_model->where('job_fair_id',$request->job_fair_id)
                          ->first();
        if($jobfair) {
            $jobfair->update(['status' => $data['status']]);
            return $jobfair;
        }else {
            throw new Exception('jobfair not found');
        }
    }

    public function getCandidates (Request $request) {
      $candidates = DB::table('jobfairs')
                    ->where('jobfairs.status','>',0)
                    ->where('jobfairs.job_id','=',$request->job_id)
                    ->join('users','jobfairs.user_id','=','users.id')
                    ->where('users.actived','=',1)
                    ->select('users.id','users.name','users.email','users.image','jobfairs.status_offer','jobfairs.job_fair_id')
                    ->get();
      return $candidates;
    }

    public function updateOfferStatus (Request $request) {
      $data = $request->all();
        $jobfair = $this->_model->where('job_fair_id',$request->job_fair_id)
                          ->first();
        if($jobfair) {
            $jobfair->update(['status_offer' => $data['status_offer']]);
             return $jobfair;
        }else {
            throw new Exception('jobfair not found');
        }
    }
}