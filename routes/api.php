<?php

use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\JobDetailController;
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
    Route::put('/update/{company_id}', [CompanyController::class, 'update']);
});

Route::prefix('jobdetail')->group(function () {
    Route::post('/new', [JobDetailController::class, 'createNewJobDetail']);
    Route::get('/infor/{job_id}', [JobDetailController::class, 'infor']);
    Route::get('/list-jobs', [JobDetailController::class, 'getListJobs']);
    Route::get('/list-jobs-company/{company_id}', [JobDetailController::class, 'listJobsOfCompany']);
    Route::put('/edit-job/{job_id}', [JobDetailController::class, 'editJobDetail']);
    // Route::get('/infor/{company_id}',[CompanyController::class,'getInforCompany']);
    // Route::get('/all', [CompanyController::class, 'getListCompanies']);
    // Route::put('/update/{company_id}', [CompanyController::class, 'update']);
});





