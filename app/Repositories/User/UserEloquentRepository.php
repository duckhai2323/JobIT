<?php

namespace App\Repositories\User;

use App\Repositories\EloquentRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserEloquentRepository extends EloquentRepository implements UserRepositoryInterface {
  
  public function getModel() {
    return \App\Models\User::class;
  }

  public function createUser(Request $request)
    {
        if ($request->password != $request->repassword) {
            throw new Exception('password not match');
        }

        $check = $this->_model->where(DB::raw('BINARY `email`'), $request->email)->exists();
        if ($check) {
            return ['error' => 'email has been taken'];
        }

        $temp = $request->all();

        $data = $this->_model->create([
          'name' => $temp['name'],
          'email' => $temp['email'],
          'role' => $temp['role'],
          'password' => Hash::make($temp['password']),
          'email_token' => hash_hmac('sha256', Str::random(40), config('app.key'))
        ]);

        return $data;
    }

  public function index() {
    $users = $this->_model->all();
    if($users) {
      return $users;
    } else {
      return throw new Exception('users not found');
    }
  }

  public function editUser(Request $request){
    $user = $this->_model->where('user_id', $request->user_id)->first();
    if($user) {
      $temp = $request->all();
      $data = $user->update($temp);
      return $temp;
    } else {
      return throw new Exception('users not found');
    }
  }

  public function getDetailOfUser(Request $request) {
    $user = $this->_model->where('user_id', $request->user_id)->first();
    if($user) {
      return $user;
    } else {
      return throw new Exception('user not found');
    }
  }

} 
