<?php

namespace App\Http\Controllers;

use App\Repositories\JobDetail\JobDetailRepositoryInterface;
use App\Models\JobDetail;
use Illuminate\Http\Request;
use Exception;

class JobDetailController extends Controller
{
    protected $JobDetailRepository;

    public function __construct(JobDetailRepositoryInterface $JobDetailRepository) {
        $this->JobDetailRepository = $JobDetailRepository;
    }

    public function createNewJobDetail(Request $request)
    {
        try {
            $request->validate([
            'job_title' => 'required|string|max:255',
            'job_details' => 'required|string',
            'job_require' => 'required|string',
            'job_benefit' => 'required|string',
            'salary' => 'required|string|max:255',
            'job_location' => 'required|string|max:255',
            'candidate_number' => 'required|numeric',
            'experience_require' => 'required|string|max:255',
            'work_form' => 'required|string|max:255',
            'deadline_job' => 'required|string|max:255',
            ]);
            $data = $this->JobDetailRepository->createJobDetail($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'new job detail created',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('failed to create new job detail');
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

    public function infor(Request $request)
    {
        try {
            $data = $this->JobDetailRepository->getDetailOfJobDetail($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of jobdetail',
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

    public function getListJobs(Request $request)
    {
        try {
            $data = $this->JobDetailRepository->index($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of jobdetail',
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

    public function listJobsOfCompany(Request $request)
    {
        try {
            $data = $this->JobDetailRepository->getListJobsOfCompany($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of jobdetail',
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

    public function updateJobDetail(Request $request)
    {
        try {
            $request->validate([
            'job_title' => 'required|string|max:255',
            'job_details' => 'required|string',
            'job_require' => 'required|string',
            'job_benefit' => 'required|string',
            'salary' => 'required|string|max:255',
            'job_location' => 'required|string|max:255',
            'candidate_number' => 'required|numeric',
            'experience_require' => 'required|string|max:255',
            'work_form' => 'required|string|max:255',
            'deadline_job' => 'required|string|max:255',
            ]);
            $data = $this->JobDetailRepository->editJobDetail($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'update successfull',
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
