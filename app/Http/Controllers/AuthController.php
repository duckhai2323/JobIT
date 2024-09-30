<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Hash;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function signIn(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email|max:50',
                'password' => 'required|string|min:8',
                'remember_token' => 'boolean',
            ]);

            $data = $request->all();
            $user = null;
            $user = User::where(DB::raw('BINARY `email`'), $data['email'])->first();
            if (! $user) {
                 throw new Exception('user email not found',404);
            }
            $hashPassword = Hash::check($data['password'], $user->password);
            if (! $hashPassword) {
                 throw new Exception('Incorrect user password',404);
            }

            if (! $user->token_verified) {
                throw new Exception('token not verify',401);
            } else {
                if($user->role == '0' && !$user->actived) {
                    throw new Exception('user not actived',401);
                }
            }

            $rememberToken = Str::random(60);
            $jwtToken = auth()->login($user);

            if (isset($data['remember_token']) && $data['remember_token']) {
                $user->remember_token =  $rememberToken;
            } else {
                $rememberToken = null;
                $user->remember_token =  null;
            }

            $user->save();

            return $this->createSignInResponse($jwtToken, $rememberToken);

        } catch (Exception $error) {
            return response()->json([
                'success' => 0,
                'message' => $error->getMessage(),
            ], $error->getCode() ?: 500);
        }
    }

    protected function createSignInResponse($jwtToken,$rememberToken){
         $user = auth()->user();
        return response()->json([
            'jwt_token' => $jwtToken,
            'remember_token' => $rememberToken,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'data' => [
                'email' => $user->email,
                'role' => $user->role,
                'name' => $user->name,
                'actived' => $user->actived,
            ],
            'success' => 1,
            'message' => 'Login succeeded',
        ],200);
    }

    public function getUserAccount(Request $request) {
        try {
            $request->validate([
                'remember_token' => 'string|required',
            ]);

            $data = $request->all();
            $user = User::where('remember_token',$data['remember_token'])->first();
            if(!$user) {
                throw new Exception('user email not found',404);
            }

            if (! $user->token_verified) {
                throw new Exception('token not verify',401);
            } else {
                if($user->role == '0' && !$user->actived) {
                    throw new Exception('user not actived',401);
                }
            }

             $jwtToken = auth()->login($user);
             
             return $this->createSignInResponse($jwtToken,$data['remember_token']);

        }catch (Exception $error) {
            return response()->json([
                'success' => 0,
                'message' => $error->getMessage(),
            ], $error->getCode() ?: 500);
        }
    }

}