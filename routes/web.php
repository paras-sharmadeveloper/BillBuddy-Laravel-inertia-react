<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AuthController;
use App\Http\Controllers\BillController;
Use Inertia\Inertia;
// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get( '/', function () {
//     return Inertia::render('Home');
// });

Route::inertia('/','Home');
Route::inertia('/about','About');
Route::inertia('/contact','ContactUs');
// Route::inertia('/login','Admin/Login');
// Route::inertia('/item','Admin/ItemList');
// Route::inertia('/dashboard','Admin/Dashboard');


Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    Route::resource('bills', BillController::class);
});
