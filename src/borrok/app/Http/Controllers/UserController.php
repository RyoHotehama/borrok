<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use \Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
  public function name(Request $request)
  {
    $item = User::where('id', $request->id)->first();
    
    return response()->json($item, Response::HTTP_OK);
  }
}