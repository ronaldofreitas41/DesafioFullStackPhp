<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'João Silva',
            'email' => 'joao.silva@example.com',
            'cpf' => '12345678901',
            'telefone' => '31999999999',
            'password' => Hash::make('senha123'),
        ]);

        DB::table('users')->insert([
            'name' => 'Maria Souza',
            'email' => 'maria.souza@example.com',
            'cpf' => '98765432100',
            'telefone' => '31988888888',
            'password' => Hash::make('senha456'),
        ]);

        DB::table('users')->insert([
            'name' => 'Pedro Oliveira',
            'email' => 'pedro.oliveira@example.com',
            'cpf' => '45678912300',
            'telefone' => '31977777777',
            'password' => Hash::make('senha789'),
        ]);

        DB::table('users')->insert([
            'name' => 'Ana Costa',
            'email' => 'ana.costa@example.com',
            'cpf' => '32198765400',
            'telefone' => '31966666666',
            'password' => Hash::make('senha321'),
        ]);

        DB::table('users')->insert([
            'name' => 'Carlos Lima',
            'email' => 'carlos.lima@example.com',
            'cpf' => '65432198700',
            'telefone' => '31955555555',
            'password' => Hash::make('senha654'),
        ]);

    }
}
