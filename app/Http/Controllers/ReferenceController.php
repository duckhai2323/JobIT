<?php
namespace App\Http\Controllers;

use App\Repositories\Reference\ReferenceRepositoryInterface;
use App\Models\Reference;
use Illuminate\Http\Request;
use Exception;

class ReferenceController extends Controller
{
    protected $referenceRepository;

    public function __construct(ReferenceRepositoryInterface $referenceRepository) {
        $this->referenceRepository = $referenceRepository;
    }

    public function createNewReference (Request $request) {
        try {
            $data = $this->referenceRepository->createReference($request);
            if($data) {
              return response()->json(
                [
                    'data' => $data,
                    'message' => 'new reference registered',
                    'success' => 1,
                ], 200
              );
            }else if ($data['error']) {
                throw new Exception($data['error']);
            } else {
                throw new Exception('failed to create new reference');
            }
        } catch (Exception $err) {
          return response()->json(
              [
                  'message' => $err->getMessage(),
                  'success' => 0,
              ],404
          );
        }
    }
}
