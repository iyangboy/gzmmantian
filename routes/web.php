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
    //return view('welcome');
    echo "hello";
});

Route::get('/download', function () {
    echo "download";
    //return response()->download('/var/www/gzmmantian/public/download/daxiangjiebei2.apk');
});
