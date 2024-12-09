<?php

use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\JobDetailController;
use App\Http\Controllers\JobFairController;
use App\Http\Controllers\ReferenceController;
use App\Http\Controllers\SaveJobController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('user')->group(function () {
    Route::post('/register', [UserController::class, 'createUser']);
    Route::get('/verify/{email_token}',[MailController::class,'verifyEmail']);
    Route::get('/all', [UserController::class, 'getListUsers']);
    Route::get('/infor/{user_id}', [UserController::class, 'getInforUser']);
    Route::put('/update/{user_id}', [UserController::class, 'update']);
    Route::put('/activate/{user_id}', [UserController::class, 'updateActive']);
    Route::delete('/delete/{user_id}', [UserController::class, 'deleteUser']);
    Route::get('/company-infor/{company_id}', [UserController::class, 'getCompanyAccount']);
    Route::get('/hr-infor/{company_id}', [UserController::class, 'getHrAccount']);
});

Route::prefix('auth')->group(function () {
    Route::post('/signin', [AuthController::class, 'signIn']);
    Route::post('/account', [AuthController::class, 'getUserAccount']);
    // Route::put('/change/password', [AuthController::class, 'changePass']);
    // Route::middleware('auth:sanctum')->delete('/logout', [AuthController::class, 'logout']);
});

Route::prefix('company')->group(function () {
    Route::post('/new', [CompanyController::class, 'createNewCompany']);
    Route::get('/infor/{company_id}',[CompanyController::class,'getInforCompany']);
    Route::get('/all', [CompanyController::class, 'getListCompanies']);
    Route::get('/infor-by-user/{id}', [CompanyController::class, 'getCompanyByUserId']);
    Route::put('/update/{company_id}', [CompanyController::class, 'update']);
});

Route::prefix('jobdetail')->group(function () {
    Route::post('/new', [JobDetailController::class, 'createNewJobDetail']);
    Route::get('/infor/{job_id}', [JobDetailController::class, 'infor']);
    Route::get('/list-jobs', [JobDetailController::class, 'getListJobs']);
    Route::get('/all-jobs', [JobDetailController::class, 'getAllJobs']);
    Route::get('/list-jobs-company/{company_id}', [JobDetailController::class, 'listJobsOfCompany']);
    Route::put('/edit-job/{job_id}', [JobDetailController::class, 'updateJobDetail']);
    Route::delete('/delete-job/{job_id}', [JobDetailController::class, 'deleteJob']);
    // Route::get('/infor/{company_id}',[CompanyController::class,'getInforCompany']);
    // Route::get('/all', [CompanyController::class, 'getListCompanies']);
    // Route::put('/update/{company_id}', [CompanyController::class, 'update']);
});

Route::prefix('jobfair')->group(function () {
    Route::post('/apply', [JobFairController::class, 'applyJobFairFunc']);
    Route::get('/apply-jobs/{user_id}', [JobFairController::class, 'getApplyJobs']);
    Route::put('/update-status/{job_fair_id}', [JobFairController::class, 'updateStatusJobFairFunc']);
    Route::put('/update-offer-status/{job_fair_id}', [JobFairController::class, 'updateOfferStatusFunc']);
    Route::get('/list-candidate/{job_id}', [JobFairController::class, 'getListCandidates']);
});

Route::prefix('reference')->group(function () {
    Route::post('/new', [ReferenceController::class, 'createNewReference']);
});

Route::prefix('save-job')->group(function () {
    Route::post('/create', [SaveJobController::class, 'saveJobFunc']);
    Route::delete('/delete-job/{job_id}/{user_id}', [SaveJobController::class, 'deleteSaveJobFunc']);
    Route::get('/list-jobs/{user_id}', [SaveJobController::class, 'getListSaveJobs']);
});





