<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransferencesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('transferences')->insert([
            [
                'sender_id' => 1,
                'receiver_id' => 2,
                'amount' => 100.00,
                'description' => 'Transferência de teste 1 de usuário 1 para usuário 2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'sender_id' => 1,
                'receiver_id' => 3,
                'amount' => 150.00,
                'description' => 'Transferência de teste 2 de usuário 1 para usuário 3',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'sender_id' => 2,
                'receiver_id' => 1,
                'amount' => 200.00,
                'description' => 'Transferência de teste 1 de usuário 2 para usuário 1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'sender_id' => 2,
                'receiver_id' => 3,
                'amount' => 250.00,
                'description' => 'Transferência de teste 2 de usuário 2 para usuário 3',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'sender_id' => 3,
                'receiver_id' => 1,
                'amount' => 300.00,
                'description' => 'Transferência de teste 1 de usuário 3 para usuário 1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'sender_id' => 3,
                'receiver_id' => 2,
                'amount' => 350.00,
                'description' => 'Transferência de teste 2 de usuário 3 para usuário 2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
