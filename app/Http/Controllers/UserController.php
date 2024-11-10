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
}
