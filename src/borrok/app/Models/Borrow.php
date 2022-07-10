<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Borrow extends Model
{
    protected $guarded = array('id');

    public static $rules = array(
        'user_id' => 'required',
        'book_id' => 'required',
        'borrow_date' => 'required|date',
        'return_date' => 'required|date',
    );

    public static $messages = array(
        'user_id.required' => 'ユーザーIDがありません。',
        'book_id.required' => '管理番号がありません。',
        'borrow_date.required' => '借りる日が入力されていません。',
        'borrow_date.date' => '借りる日が不正です。',
        'return_date.required' => '返却日が入力されていません。',
        'return_date.date' => '返却日が不正です。',
    );
}
