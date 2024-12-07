<?php
namespace App\Repositories\Reference;
use App\Repositories\EloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Exception;

class ReferenceEloquentRepository extends EloquentRepository implements ReferenceRepositoryInterface
{
  /**
     * get model
     *
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Reference::class;
    }

    public function createReference(Request $request) {
        try {
            $temp = $request->all();
            $data = $this->_model->create([
              'user_id' => $temp['user_id'],
              'company_id' => $temp['company_id'],
              'role' => $temp['role'],
            ]);
            return $data;
        } catch (Exception $err) {
            throw new Exception($err->getMessage());
        }
    }

    public function index() {

    }
}
