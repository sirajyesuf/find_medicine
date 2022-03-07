<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\TokenController;
use App\Http\Controllers\AuthController;





Route::middleware([])->group(function () {
    Route::post('/sanctum/token', [TokenController::class, '__invoke']);
    Route::get('/users/auth', [AuthController::class, '__invoke']);
});
