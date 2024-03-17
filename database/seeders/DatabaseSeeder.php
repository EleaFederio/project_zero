<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('customer_types')->insert([
            'type_name' => 'Personal'
        ]);
        DB::table('customer_types')->insert([
            'type_name' => 'Corporate'
        ]);

        DB::table('price_levels')->insert([
            'price_level_name' => 'Level 1'
        ]);
        DB::table('price_levels')->insert([
            'price_level_name' => 'Level 2'
        ]);
        DB::table('price_levels')->insert([
            'price_level_name' => 'Level 3'
        ]);
        DB::table('price_levels')->insert([
            'price_level_name' => 'Level 4'
        ]);
        DB::table('price_levels')->insert([
            'price_level_name' => 'Level 5'
        ]);
    }
}
