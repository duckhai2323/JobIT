<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Exception;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function signIn(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|string|email|max:50',
                'password' => 'required|string|min:8',
            ]);
            $data = $request->all();
            $user = null;
            $user = User::where(DB::raw('BINARY `email`'), $data['email'])->first();
            if (! $user) {
                 throw new Exception('user email not found');
            }
            $hashPassword = Hash::check($data['password'], $user->password);
            if (! $hashPassword) {
                 throw new Exception('Incorrect user password');
            }

            if (! $user->token_verified) {
                throw new Exception('token not verify');
            }


            return response()->json([
                'success' => 1,
                'data' => [
                    'email' => $user->email,
                    'role' => $user->role,
                    'name' => $user->name,
                ],
                'message' => 'login succeeded',
            ],200);

        } catch (Exception $error) {
            return response()->json([
                'success' => 0,
                'message' => $error->getMessage(),
                'error' => $error,
            ],404);
        }
    }
}
