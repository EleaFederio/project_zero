<?php

use Illuminate\Http\Request;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerTypeController;
use App\Http\Controllers\PriceLevelController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('customer_type', [CustomerTypeController::class, 'index']);
Route::get('price_level', [PriceLevelController::class, 'index']);

Route::apiResource('items', ItemController::class);
Route::apiResource('customer', CustomerController::class);
