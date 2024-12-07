<?php

namespace App\Repositories\Reference;

use Illuminate\Http\Request;

interface ReferenceRepositoryInterface
{
    /**
     * Get all works with Category
     *
     * @return mixed
     */
    //public function getJobs(Request $request);

    public function createReference(Request $request);

    public function index();

}
