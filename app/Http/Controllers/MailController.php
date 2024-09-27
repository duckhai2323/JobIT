<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function verifyEmail(Request $request)
    {
        $data = User::where('email_token', $request->email_token)->first();
        if (! $data) {
            return response()->json([
                'success' => 0,
                'message' => 'your token not found',
            ]);
        } elseif ($data->actived && $data->token_verified) {
            return view('emails.emailVerified');
        } else {
            $data->update([
                'token_verified' => true,
                'actived' => true,
            ]);
            
            return view('emails.emailVerified');
        }
    }
}
