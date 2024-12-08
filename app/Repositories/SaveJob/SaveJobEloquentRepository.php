<?php
namespace App\Repositories\SaveJob;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Exception;

class SaveJobEloquentRepository extends EloquentRepository implements SaveJobRepositoryInterface
{
  /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\SaveJob::class;
    }

    public function saveJob (Request $request) {
      $data = $request->all();
      $exists = $this->_model->where('user_id', $data['user_id'])
        ->where('job_id', $data['job_id'])
        ->exists();

      if ($exists) {
        throw new Exception("Bản ghi đã tồn tại với user_id = {$data['user_id']} và job_id = {$data['job_id']}");
      }

      $saveJob = $this->_model->create([
            'user_id' => $data['user_id'],
            'job_id' => $data['job_id'],
        ]);

      return $saveJob;
    }

    public function deleteSaveJob(Request $request) {
         $deleted = DB::table('savejobs')
            ->where('job_id', $request->job_id)
            ->where('user_id', $request->user_id)
            ->delete();

        return $deleted;
    }

    public function index (Request $request) {
      $listSaveJobs = DB::table('savejobs')
                           ->where('savejobs.user_id',$request->user_id)
                           ->join('job_details','savejobs.job_id','=','job_details.job_id')
                           ->join('companies', 'job_details.company_id','=', 'companies.company_id')
                           ->orderBy('job_details.updated_at', 'desc')
                           ->select('companies.company_image','companies.company_name','companies.company_id','job_details.job_id','job_details.job_title','job_details.job_location','job_details.experience_require','job_details.salary','job_details.deadline_job','job_details.status','job_details.candidate_number')
                           ->get();
      return $listSaveJobs;
    }
}