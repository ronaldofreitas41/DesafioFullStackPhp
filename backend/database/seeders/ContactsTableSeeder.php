<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Inserindo contatos
        DB::table('contacts')->insert([
            [

                'name' => 'Maria Souza',
                'account_number' => '1234-5',
                'avatar' => null,
                'owner_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Maria Souza',
                'account_number' => '1234-5',
                'avatar' => null,
                'owner_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Maria Souza',
                'account_number' => '1234-5',
                'avatar' => null,
                'owner_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Maria Souza',
                'account_number' => '1234-5',
                'avatar' => null,
                'owner_id' => 5,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Pedro Oliveira',
                'account_number' => '4321-5',
                'avatar' => null,
                'owner_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Pedro Oliveira',
                'account_number' => '4321-5',
                'avatar' => null,
                'owner_id' => 5,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Pedro Oliveira',
                'account_number' => '4321-5',
                'avatar' => null,
                'owner_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Pedro Oliveira',
                'account_number' => '4321-5',
                'avatar' => null,
                'owner_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'João Silva',
                'account_number' => '5678-9',
                'avatar' => null,
                'owner_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'João Silva',
                'account_number' => '5678-9',
                'avatar' => null,
                'owner_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'João Silva',
                'account_number' => '5678-9',
                'avatar' => null,
                'owner_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'João Silva',
                'account_number' => '5678-9',
                'avatar' => null,
                'owner_id' => 5,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Ana Costa',
                'account_number' => '4321-0',
                'avatar' => null,
                'owner_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Ana Costa',
                'account_number' => '4321-0',
                'avatar' => null,
                'owner_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Ana Costa',
                'account_number' => '4321-0',
                'avatar' => null,
                'owner_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Ana Costa',
                'account_number' => '4321-0',
                'avatar' => null,
                'owner_id' => 5,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Carlos Lima',
                'account_number' => '3421-0',
                'avatar' => null,
                'owner_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Carlos Lima',
                'account_number' => '3421-0',
                'avatar' => null,
                'owner_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Carlos Lima',
                'account_number' => '3421-0',
                'avatar' => null,
                'owner_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [

                'name' => 'Carlos Lima',
                'account_number' => '3421-0',
                'avatar' => null,
                'owner_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
