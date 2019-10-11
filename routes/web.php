<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('company/index.html');
    return view('welcome');
});

Route::get('/down', function () {
    return view('download');
});

Route::get('/url_base64_encode', 'BaseUrlController@index');
Route::get('/url_base64_decode', 'BaseUrlController@indexDecode');
