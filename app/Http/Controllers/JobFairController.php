<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\JobFair\JobFairRepositoryInterface;
use App\Models\JobFair;
use Exception;

class JobFairController extends Controller
{
    protected $JobFairRepository;

    public function __construct(JobFairRepositoryInterface $JobFairRepository) {
        $this->JobFairRepository = $JobFairRepository;
    }

    public function applyJobFairFunc (Request $request) {
        try {
            $request->validate([
            'job_id' => 'required|integer',
            'user_id' => 'required|integer',
            'status' => 'required|numeric|min:0|max:10',
            'company_id' =>  'required|integer',
            'status_offer' =>  'required|integer',
            ]);

            $data = $this->JobFairRepository->applyJobFair($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'new jobfair created',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('failed to create new jobfair');
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

    public function getApplyJobs(Request $request)
    {
        try {
            $data = $this->JobFairRepository->index($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get list jobs apply',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('task not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function updateStatusJobFairFunc(Request $request)
    {
        try {
            $data = $this->JobFairRepository->updateStatusJobFair($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'update success',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('task not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function getListCandidates(Request $request)
    {
        try {
            $data = $this->JobFairRepository->getCandidates($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get list candidates success',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('task not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function updateOfferStatusFunc (Request $request)
    {
        try {
            $data = $this->JobFairRepository->updateOfferStatus($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'update success',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('task not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }
}
