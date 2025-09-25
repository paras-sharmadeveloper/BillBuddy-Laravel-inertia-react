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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('shop_id');
            $table->unsignedBigInteger('bill_id')->nullable(); // linked to bill
            $table->string('name');
            $table->string('brand')->nullable();
            $table->string('model')->nullable();
            $table->string('sku')->nullable(); // system generated
            $table->string('barcode')->nullable(); // scanner code
            $table->string('serial_number')->nullable(); // IMEI/serial
            $table->integer('quantity')->default(1);
            $table->decimal('price', 10, 2)->nullable();
            $table->integer('stock_qty')->default(0); // inventory
            $table->timestamps();

            $table->foreign('shop_id')->references('id')->on('shops')->onDelete('cascade');
            $table->foreign('bill_id')->references('id')->on('bills')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
