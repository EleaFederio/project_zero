<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('customer_id');
            $table->string('area');
            $table->foreignId('price_level_id')->constrained();
            $table->foreignId('customer_type_id')->constrained();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('middle_name');
            $table->string('province');
            $table->string('municipality');
            $table->string('barangay');
            $table->date('date_of_birth');
            $table->string('place_of_birth');
            $table->char('sex', 6);
            $table->string('citizenship');
            $table->string('occupation');
            $table->string('tin');
            $table->string('company_name');
            $table->string('company_address');
            $table->string('business_nature');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
