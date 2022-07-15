<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param = [
            'id' => 12345678,
            'title' => '世界の不思議',
            'book_tag' => 'その他',
        ];
        DB::table('books')->insert($param);
    
        $param = [
            'id' => 23456789,
            'title' => 'よくわかるPHP',
            'book_tag' => 'PHP',
        ];
        DB::table('books')->insert($param);
    }
}
