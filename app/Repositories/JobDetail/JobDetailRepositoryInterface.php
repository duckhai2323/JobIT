<?php

namespace App\Repositories\JobDetail;

use Illuminate\Http\Request;

interface JobDetailRepositoryInterface
{
    /**
     * Get all works with Category
     *
     * @return mixed
     */

    public function createJobDetail(Request $request);

    public function getDetailOfJobDetail(Request $request);

    public function editJobDetail(Request $request);

    public function getListJobsOfCompany (Request $request);

    public function index();

    public function getAllJobs(Request $request);

    public function deleteJob(Request $request);
}
