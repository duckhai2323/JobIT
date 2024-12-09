<?php
namespace App\Repositories\Company;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Exception;

class CompanyEloquentRepository extends EloquentRepository implements CompanyRepositoryInterface
{
  /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Company::class;
    }

    public function createCompany(Request $request) {
      $check = $this->_model->where(DB::raw('BINARY `email`'), $request->email)->orWhere(DB::raw('BINARY `tax_code`'), $request->tax_code)->exists();
      if (! $check) {
            if (Http::get('https://api.vietqr.io/v2/business/'.$request->tax_code)['data']) {
                $temp = $request->all();
                $data = $this->_model->create([
                  'company_name' =>$temp['company_name'],
                  'email' => $temp['email'],
                  'employee_scale' => $temp['employee_scale'],
                  'company_intro' => $temp['company_intro'],
                  'company_location' => $temp['company_location'],
                  'company_organize' => $temp['company_organize'],
                  'company_filed' => $temp['company_filed'],
                  'company_link' =>  $temp['company_link'],
                  'tax_code' => $temp['tax_code'],
                  'status' => $temp['status']
                ]);
                return $data;
            } else {
                throw new Exception('taxcode invalid');
            }
        } else {
            throw new Exception('your email or taxcode already taken');
        }
    }

    public function getDetailOfCompany(Request $request) {
        $company = $this->_model->where('company_id', $request->company_id)->first();
        if($company){
            return $company;
        } else {
            return throw new Exception('company not found');
        }
    }

    public function index() {
        $companies = $this->_model->all();
        if($companies){
            return $companies;
        } else {
            return throw new Exception('companies not found');
        }
    }

    public function editCompany(Request $request){
        $company = $this->_model->where('company_id', $request->company_id)->first();
        if ($company) {
            $temp = $request->all();
            $data = $company->update($temp);
            return $temp;
        } else {
            return throw new Exception('companies not found');
        }
    }

    public function getCompanyByUserId(Request $request) {
        $company = $this->_model->join('references', 'companies.company_id', '=', 'references.company_id')
                            ->where('references.user_id', $request->id)
                            ->select('companies.*')
                            ->first();
    
        if ($company) {
            return $company;
        } else {
            throw new Exception('User not found');
        }
    }
}