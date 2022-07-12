<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Borrow;
use \Symfony\Component\HttpFoundation\Response;

class BorrowController extends Controller
{
  public function borrow(Request $request)
  {
    $borrow = new Borrow;
    $form = $request->all();
    $borrow->fill($form)->save();

    return;
  }

  public function history(Request $request)
  {
    $items = Borrow::join('books', 'borrows.book_id', '=', 'books.id')->where('user_id', $request->id)->orderBy('return_date', 'asc')->get();

    foreach ($items as $item) {
      $item->return_date = date('Y/m/d', strtotime($item->return_date));
    }

    return response()->json([
      'BORROW_BOOK_DATA' => $items
    ], Response::HTTP_OK);
  }
}
