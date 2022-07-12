<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/hello', function () {
    return 'Hello Next.js';
});

// 新冊API
Route::get('/new/book', 'BookController@new');

Route::get('/book', 'BookController@index');
Route::get('/lend/book', 'BookController@lend');

// 貸出可能確認API
Route::get('/stock/book', 'BookController@stock');
Route::get('/book/{id}', 'BookController@detail')->where('id', '\d{8}');
Route::post('/book/borrow', 'BorrowController@borrow');
Route::get('/admin/book', 'AdminController@lend');
Route::post('/history/book', 'BorrowController@history');
Route::post('/user', 'UserController@name');
Route::get('/book/ranking', 'BookController@ranking');