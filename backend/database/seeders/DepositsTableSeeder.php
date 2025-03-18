<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use  Illuminate\Support\Facades\DB;

class DepositsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('deposits')->insert([
            'user_id' => 2,
            'amount' => 1000.00,
            'description' => 'Salary deposit',
        ]);

        DB::table('deposits')->insert([
            'user_id' => 3,
            'amount' => 200.00,
            'description' => 'Savings contribution',
        ]);

        DB::table('deposits')->insert([
            'user_id' => 1,
            'amount' => 750.00,
            'description' => 'Gift deposit',
        ]);

        DB::table('deposits')->insert([
            'user_id' => 3,
            'amount' => 1500.00,
            'description' => 'Investment return',
        ]);
        DB::table('deposits')->insert([
            'user_id' => 1,
            'amount' => 500.00,
            'description' => 'Initial deposit',
        ]);

        DB::table('investments')->insert([
            'user_id' => 1,
            'fund_id' => 1,
            'amount' => 1000.00,
            'current_value' => 1050.00,
            'date' => now(),
        ]);

        DB::table('investments')->insert([
            'user_id' => 2,
            'fund_id' => 2,
            'amount' => 2000.00,
            'current_value' => 2200.00,
            'date' => now(),
        ]);

        DB::table('investments')->insert([
            'user_id' => 3,
            'fund_id' => 3,
            'amount' => 1500.00,
            'current_value' => 1620.00,
            'date' => now(),
        ]);

        DB::table('investments')->insert([
            'user_id' => 1,
            'fund_id' => 4,
            'amount' => 3000.00,
            'current_value' => 3150.00,
            'date' => now(),
        ]);

        DB::table('investments')->insert([
            'user_id' => 2,
            'fund_id' => 5,
            'amount' => 5000.00,
            'current_value' => 5250.00,
            'date' => now(),
        ]);

    }
}
