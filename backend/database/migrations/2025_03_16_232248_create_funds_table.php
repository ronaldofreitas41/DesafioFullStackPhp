<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('funds', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('name');
            $table->enum('type', ['renda-fixa', 'acoes', 'multimercado', 'cambial']);
            $table->decimal('minimum_investment', 10, 2);
            $table->decimal('annual_return', 5, 2);
            $table->enum('risk', ['baixo', 'medio', 'alto']);
            $table->string('manager');
            $table->text('description')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('funds');
    }
};
