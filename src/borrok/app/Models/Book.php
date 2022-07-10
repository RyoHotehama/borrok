<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public static $rules = array(
        'id' => 'required|digits:8',
        'title' => 'required|string|max:100',
        'book_tag' => 'required|string',
        'image' => 'image',
    );

    public static $messages = array(
        'id.required' => '管理番号が入力されていません。',
        'id.digits' => '管理番号は8桁で入力してください。',
        'title.required' => 'タイトルが未入力です。',
        'title.string' => '入力したタイトルが不正です。',
        'title.max' => 'タイトル名が長すぎます。',
        'book_tag.required' => 'タグが選択されていません。',
        'book_tag.string' => 'タグが不正です。',
        'image.image' => '画像ではないものが選択されています。',
    );
}
