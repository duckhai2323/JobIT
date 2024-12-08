<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\SaveJob\SaveJobRepositoryInterface;
use App\Models\SaveJob;
use Exception;

class SaveJobController extends Controller
{
    protected $SaveJobRepository;

    public function __construct(SaveJobRepositoryInterface $SaveJobRepository) {
        $this->SaveJobRepository = $SaveJobRepository;
    }

    public function saveJobFunc (Request $request) {
        try {
            $request->validate([
            'user_id' => 'required|integer',
            'job_id' => 'required|integer'
        ]);

            $data = $this->SaveJobRepository->saveJob($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'new SaveJob created',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('failed to create new SaveJob');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function deleteSaveJobFunc (Request $request) {
        try {
            $data = $this->SaveJobRepository->deleteSaveJob($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'SaveJob delete',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('failed to create new SaveJob');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }

    public function getListSaveJobs (Request $request) {
        try {
            $data = $this->SaveJobRepository->index($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get list successfull',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('failed to create new SaveJob');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ]
            );
        }
    }
}
