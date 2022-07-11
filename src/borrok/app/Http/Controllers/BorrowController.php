<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Borrow;

class BorrowController extends Controller
{
    public function borrow(Request $request)
  {
    $borrow = new Borrow;
    $form = $request->all();
    $borrow->fill($form)->save();

    return;
  }
}
