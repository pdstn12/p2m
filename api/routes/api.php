<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Authorization Bearer token ;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
// Route::post('/forget', 'ForgetController@forget');
// Route::post('/reset', 'ForgetController@reset');
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

Route::post('/file/add', [FileController::class, 'store'])->middleware('auth:api');
Route::get('/file/{page}', [FileController::class, 'index'])->middleware('auth:api');
Route::get('/file/delete/{id}', [FileController::class, 'destroy'])->middleware('auth:api');

