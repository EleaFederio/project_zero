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
        Schema::create('post_sales_item', function (Blueprint $table) {
            $table->id();
            $table->integer('sales_item_id');
            $table->integer('sales_id');
            $table->integer('item_id');
            $table->smallInteger('qty');
            $table->decimal('cost', 10, 2);
            $table->decimal('price', 10, 2);
            $table->decimal('total_price', 10, 2);
            $table->decimal('total_cost', 10, 2);
            $table->smallInteger('price_level');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_sales_item');
    }
};
