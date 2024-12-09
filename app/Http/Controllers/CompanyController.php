<?php
namespace App\Http\Controllers;

use App\Repositories\Company\CompanyRepositoryInterface;
use App\Models\Company;
use Illuminate\Http\Request;
use Exception;


class CompanyController extends Controller
{
    protected $companyRepository;

    public function __construct(CompanyRepositoryInterface $companyRepository) {
        $this->companyRepository = $companyRepository;
    }

    public function createNewCompany (Request $request) {
        try {
            $request->validate([
                'company_name' => 'required|string|max:255',
                'email' => 'required|email|unique:companies,email',
                'company_link' => 'required|string',
                'tax_code' => 'nullable|string|max:255',
                'status' => 'nullable|integer',
            ]);

            $data = $this->companyRepository->createCompany($request);

            if($data && !$data['error']) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'new company registered',
                        'success' => 1,
                    ], 200
                );
            }else if ($data['error']) {
                throw new Exception($data['error']);
            } else {
                throw new Exception('failed to create new company');
            }

        }catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ],404
            );
        }
    }

    public function getInforCompany(Request $request)
    {
        try {
            $data = $this->companyRepository->getDetailOfCompany($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of company',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('company not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function getListCompanies() {
        try {
            $data = $this->companyRepository->index();
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get list companies successfull',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('companies not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

   public function update(Request $request)
    {
        try {
            $data = $this->companyRepository->editCompany($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'company updated',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('company not found / can not be updated');
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

    public function getCompanyByUserId(Request $request) {
        try {
            $data = $this->companyRepository->getCompanyByUserId($request);
            if ($data) {
                return response()->json([
                    'data' => $data,
                    'message' => 'get company infor successful',
                    'success' => 1,
                ], 200);
            } else {
                throw new Exception('company not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'message' => $err->getMessage(),
                'success' => 0,
            ]);
        }
    }
}
