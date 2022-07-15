<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param = [
            'name' => 'たけし',
            'email' => 'user@user',
            'password' => 'user1',
        ];
        DB::table('users')->insert($param);

        $param = [
            'name' => 'サトシ',
            'email' => 'user2@user2',
            'password' => 'user2',
        ];
        DB::table('users')->insert($param);
    }
}
