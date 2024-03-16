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
        Schema::create('post_sales', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('invoice_type_id');
            $table->integer('invoice_no');
            $table->integer('store_id');
            $table->integer('terminal_id');
            $table->char('staff_id', 10);
            $table->char('customer_id', 15);
            $table->date('sales_date');
            $table->time('sales_time');
            $table->decimal('sub_total', 10, 2);
            $table->decimal('discount_percent', 6, 2);
            $table->decimal('discount_amount', 10, 2);
            $table->decimal('tax_amount', 10, 2);
            $table->decimal('total_due', 10, 2);
            $table->decimal('total_cost', 10, 2);
            $table->decimal('net_sales', 10, 2);
            $table->decimal('tendered_amount', 10, 2);
            $table->decimal('amount_paid', 10, 2);
            $table->decimal('change_due', 10, 2);
            $table->decimal('cash_amount', 10, 2);
            $table->decimal('check_amount', 10, 2);
            $table->char('bank_check', 30);
            $table->char('check_number', 25);
            $table->date('check_date');
            $table->decimal('charge_amount', 10, 2);
            $table->char('payment_type', 10);
            $table->char('cust_name', 30);
            $table->char('cust_address', 40);
            $table->smallInteger('is_cancelled');
            $table->smallInteger('print_count');
            $table->integer('or_no');
            $table->integer('batch_id');
            $table->char('discount_type', 10);
            $table->char('status_code', 10);
            $table->char('status_info', 15);
            $table->smallInteger('is_void');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_sales');
    }
};
