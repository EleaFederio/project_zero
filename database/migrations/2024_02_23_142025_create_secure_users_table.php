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
        Schema::create('secure_users', function (Blueprint $table) {
            $table->id();
            $table->char('user_id', 20);
            $table->char('user_name', 40);
            $table->date('create_on');
            $table->smallInteger('is_active');
            $table->char('group_id', 20);
            $table->char('password', 30);
            $table->char('access_id', 20);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('secure_users');
    }
};
