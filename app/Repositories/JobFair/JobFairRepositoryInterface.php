<?php

namespace App\Repositories\JobFair;

use Illuminate\Http\Request;

interface JobFairRepositoryInterface
{
    /**
     * Get all works with Category
     *
     * @return mixed
     */
    //public function getJobs(Request $request);

    public function applyJobFair(Request $request);

    public function index(Request $request);

    public function updateStatusJobFair(Request $request);

    public function getCandidates (Request $request);
    
    public function updateOfferStatus (Request $request);
}
