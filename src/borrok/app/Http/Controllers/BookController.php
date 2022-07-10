<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Carbon\Carbon;
use Illuminate\Http\Request;
use \Symfony\Component\HttpFoundation\Response;


class BookController extends Controller
{
  public function index()
  {
    $items = Book::all();

    return response()->json([
      'BOOK_DATA' => $items
    ], Response::HTTP_OK);
  }

  /**
   * 新冊取得
   * @return json
   */
  public function new()
  {
    // 本日の日付を取得
    $today = Carbon::now();
    // 30日前の日付を取得
    $lastmonth = Carbon::now()->addDay(-30);
    // 新着データを取得
    $items = Book::whereRaw('created_at > ? and created_at <= ?', [$lastmonth, $today])->orderBy('created_at', 'desc')->get();

    return response()->json([
      'NEW_BOOK_DATA' => $items
    ], Response::HTTP_OK);
  }

  public function lend()
  {
    $items = Book::join('lending', 'books.id', '=', 'lending.book_id')->orderBy('return_date', 'asc')->get();

    foreach ($items as $item) {
      $item->return_date = date('Y/m/d', strtotime($item->return_date));
    }

    return response()->json([
      'LEND_BOOK_DATA' => $items
    ], Response::HTTP_OK);
  }

  public function stock()
  {
    $items = Book::leftjoin('lending', 'books.id', '=', 'lending.book_id')->whereNull('lending.id')->orderBy('return_date', 'asc')->get();

    return response()->json([
      'STOCK_BOOK_DATA' => $items
    ], Response::HTTP_OK);
  }
}
