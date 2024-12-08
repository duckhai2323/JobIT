<?php

namespace App\Repositories\SaveJob;

use Illuminate\Http\Request;

interface SaveJobRepositoryInterface
{
    /**
     * Get all works with Category
     *
     * @return mixed
     */
    //public function getJobs(Request $request);

    public function saveJob(Request $request);

    public function index(Request $request);

    public function deleteSaveJob(Request $request);
}
