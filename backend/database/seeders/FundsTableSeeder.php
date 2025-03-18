<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FundsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('funds')->insert([
            'user_id' => 1,
            'name' => 'Fund A',
            'type' => 'renda-fixa',
            'minimum_investment' => 1000.00,
            'annual_return' => 5.00,
            'risk' => 'baixo',
            'manager' => 'Manager A',
            'description' => 'Description of Fund A',
        ]);
        DB::table('funds')->insert([
            'user_id' => 2,
            'name' => 'Fund B',
            'type' => 'ações',
            'minimum_investment' => 5000.00,
            'annual_return' => 12.50,
            'risk' => 'alto',
            'manager' => 'Manager B',
            'description' => 'Description of Fund B',
        ]);

        DB::table('funds')->insert([
            'user_id' => 3,
            'name' => 'Fund C',
            'type' => 'multimercado',
            'minimum_investment' => 2000.00,
            'annual_return' => 8.00,
            'risk' => 'médio',
            'manager' => 'Manager C',
            'description' => 'Description of Fund C',
        ]);

        DB::table('funds')->insert([
            'user_id' => 1,
            'name' => 'Fund D',
            'type' => 'renda-fixa',
            'minimum_investment' => 1500.00,
            'annual_return' => 6.00,
            'risk' => 'baixo',
            'manager' => 'Manager D',
            'description' => 'Description of Fund D',
        ]);

        DB::table('funds')->insert([
            'user_id' => 2,
            'name' => 'Fund E',
            'type' => 'ações',
            'minimum_investment' => 10000.00,
            'annual_return' => 15.00,
            'risk' => 'alto',
            'manager' => 'Manager E',
            'description' => 'Description of Fund E',
        ]);
    }
}
