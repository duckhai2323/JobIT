<?php
namespace App\Http\Controllers;

use App\Repositories\User\UserRepositoryInterface;
use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Mail;
use App\Mail\VerifyEmail;


class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function createUser (Request $request) {
        try {
            $request->validate([
                'name' => 'required|string|max:50',
                'email' => 'required|string|email|max:50|unique:'.User::class,
                'password' => 'required|string|min:8',
                'repassword' =>  'required|same:password',
                'role' => 'string|min:0|max:2'
            ]);

            $data = $this->userRepository->createUser($request);
            if ($data && ! $data['error']) {
                Mail::to($data->email)
                ->send(new VerifyEmail($data));
                unset($data['token']);

                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'new user registered',
                        'success' => 1,
                    ], 200
                );
            } else if ($data['error']) {
                throw new Exception($data['error']);
            } else {
                throw new Exception('failed to create new user');
            }
        } catch (Exception $err) {
            return response()->json(
                [
                    'message' => $err->getMessage(),
                    'success' => 0,
                ],404
            );
        }
    }

    public function getInforUser(Request $request)
    {
        try {
            $data = $this->userRepository->getDetailOfUser($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get info of user',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('user not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function getListUsers() {
        try {
            $data = $this->userRepository->index();
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'get list users successfull',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('users not found');
            }
        } catch (Exception $err) {
            return response()->json([
                'success' => 0,
                'message' => $err->getMessage(),
            ]);
        }
    }

    public function update(Request $request) {
        try {
            $request->validate([
                'name' => 'required|string|max:50',
            ]);
            if($request->filled('email')) {
                $request->validate([
                    'email' => 'required|string|email|max:50|unique:'.User::class,
                ]);
            }
            $data = $this->userRepository->editUser($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'user updated',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('user not found / can not be updated');
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

    public function updateActive(Request $request) {
        try {
            $data = $this->userRepository->editActiveUser($request);
            if ($data) {
                return response()->json(
                    [
                        'data' => $data,
                        'message' => 'user updated',
                        'success' => 1,
                    ], 200
                );
            } else {
                throw new Exception('user not found / can not be updated');
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

    public function deleteUser(Request $request) {
        try {
            $this->userRepository->deleteUser($request);
            return response()->json([
                'message' => 'user deleted',
                'success' => 1,
            ], 200);
        } catch (Exception $err) {
            return response()->json([
                'message' => $err->getMessage(),
                'success' => 0,
            ]);
        }
    }
}
