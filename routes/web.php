<?php

use Illuminate\Support\Facades\Route;
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
Route::inertia('/login','Admin/Login');
