<?php

namespace App\Repositories\User;

use Illuminate\Http\Request;

interface UserRepositoryInterface
{
    /**
     * Get all works with Category
     *
     * @return mixed
     */
    //public function getJobs(Request $request);

    public function createUser(Request $request);

    public function index();

    public function editUser(Request $request);

    public function getDetailOfUser(Request $request);

    public function deleteUser(Request $request);

    public function getCompanyAccount(Request $request);

    public function getHrAccount(Request $request);
}
