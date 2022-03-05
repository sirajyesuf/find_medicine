<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\TokenController;


Route::middleware('auth:sanctum', function () {

    Route::post('/sanctum/token', TokenController::class);
    Route::get('/users/auth', AuthController::class);
});
