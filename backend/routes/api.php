<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FundController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\InvestmentController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\TransferencesController;

Route::post('/login', [LoginController::class, 'login']);
// Rotas para Users
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::middleware('auth:sanctum')->group(function () {
    // Rotas para Contacts
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::post('/contacts', [ContactController::class, 'store']);
    Route::get('/contacts/{id}', [ContactController::class, 'show']);
    Route::put('/contacts/{id}', [ContactController::class, 'update']);
    Route::delete('/contacts/{id}', [ContactController::class, 'destroy']);

    // Rotas para Funds
    Route::get('/funds', [FundController::class, 'index']);
    Route::post('/funds', [FundController::class, 'store']);
    Route::get('/funds/{id}', [FundController::class, 'show']);
    Route::put('/funds/{id}', [FundController::class, 'update']);
    Route::delete('/funds/{id}', [FundController::class, 'destroy']);

    // Rotas para Deposits
    Route::get('/deposits', [DepositController::class, 'index']);
    Route::post('/deposits', [DepositController::class, 'store']);
    Route::get('/deposits/{id}', [DepositController::class, 'show']);
    Route::put('/deposits/{id}', [DepositController::class, 'update']);
    Route::delete('/deposits/{id}', [DepositController::class, 'destroy']);

    // Rotas para Investments
    Route::get('/investments', [InvestmentController::class, 'index']);
    Route::post('/investments', [InvestmentController::class, 'store']);
    Route::get('/investments/{id}', [InvestmentController::class, 'show']);
    Route::put('/investments/{id}', [InvestmentController::class, 'update']);
    Route::delete('/investments/{id}', [InvestmentController::class, 'destroy']);

    //Rotas para Transferencias
    Route::get('/transferences', [TransferencesController::class, 'index']);
    Route::post('/transferences', [TransferencesController::class, 'store']);
    Route::get('/transferences/{id}', [TransferencesController::class, 'show']);
    Route::get('/transference/{id}', [TransferencesController::class, 'showneg']);
    Route::put('/transferences/{id}', [TransferencesController::class, 'update']);
    Route::delete('/transferences/{id}', [TransferencesController::class, 'destroy']);
});
