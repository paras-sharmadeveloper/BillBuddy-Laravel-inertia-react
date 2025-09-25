<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@billbuddy.com'],
            [
                'name' => 'Super Admin',
                'phone' => '9999999999',
                'role' => 'admin',
                'password' => Hash::make('Admin@123'), // default password
            ]
        );
    }
}
