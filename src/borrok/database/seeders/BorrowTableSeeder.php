<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BorrowTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param = [
            'user_id' => 1,
            'book_id' => 12345678,
            'borrow_date' => '2022-07-10',
            'return_date' => '2022-07-16',
        ];
        DB::table('lending')->insert($param);

        $param = [
            'user_id' => 1,
            'book_id' => 23456789,
            'borrow_date' => '2022-07-10',
            'return_date' => '2022-07-17',
        ];
        DB::table('lending')->insert($param);
    }
}
