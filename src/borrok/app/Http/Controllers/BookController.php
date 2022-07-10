<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
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
}
