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
            $table->char('customer_type', 15);
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_initial');
            $table->date('date_of_birth');
            $table->string('place_of_birth');
            $table->string('address');
            $table->char('sex', 1);
            $table->string('civil_status');
            $table->string('occupation');
            $table->string('company_name');
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
