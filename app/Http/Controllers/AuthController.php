<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use app\Http\Resources\UserResource;

class AuthController extends Controller
{
    public function __invoke()
    {
        return new UserResource(auth::user());
    }
}
