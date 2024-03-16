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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->char('item_code', 10);
            $table->char('bar_code', 30)->nullable();
            $table->string('name');
            $table->string('description');
            $table->decimal('unit_cost', 10, 2);
            $table->integer('total_qty')->default(0);
            $table->date('last_sold_on')->nullable();
            $table->string('unit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
