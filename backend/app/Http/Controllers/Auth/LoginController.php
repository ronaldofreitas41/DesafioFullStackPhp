<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $request->authenticate();

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        $userId = $user->id;

        return response()->json(['access_token' => $token, 'token_type' => 'Bearer', 'user_id' => $userId]);
    }
}
