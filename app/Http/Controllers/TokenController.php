<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class TokenController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'phonenumber' => 'required',
            'password' => 'required',
            'device_name' => 'required',
        ]);

        $user = User::where('phonenumber', $request->phonenumber)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken($request->device_name)->plainTextToken;

        return response()->json(['token' => $token], 200);
    }
}
