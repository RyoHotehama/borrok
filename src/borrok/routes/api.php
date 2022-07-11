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

Route::get('/book', 'BookController@index');
Route::get('/new/book', 'BookController@new');
Route::get('/lend/book', 'BookController@lend');
Route::get('/stock/book', 'BookController@stock');
Route::get('/book/{id}', 'BookController@detail')->where('id', '\d{8}');
Route::post('/book/borrow', 'BorrowController@borrow');
Route::get('/book/borrow', 'BorrowController@borrow');
