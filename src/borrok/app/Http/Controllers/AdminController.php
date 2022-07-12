<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use \Symfony\Component\HttpFoundation\Response;


class AdminController extends Controller
{
  public function lend()
  {
    $items = Book::join('borrows', 'books.id', '=', 'borrows.book_id')->join('users', 'borrows.user_id', '=', 'users.id')->orderBy('return_date', 'asc')->get();

    foreach ($items as $item) {
      $item->return_date = date('Y/m/d', strtotime($item->return_date));
    }

    return response()->json([
      'LEND_BOOK_DATA' => $items
    ], Response::HTTP_OK);
  }
}