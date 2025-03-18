<?php
// filepath: c:\Users\ronal\Desktop\Teste\backend\database\migrations\2025_03_16_000002_create_investments_table.php
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
        Schema::create('investments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('fund_id');
            $table->decimal('amount', 10, 2);
            $table->decimal('current_value', 10, 2);
            $table->timestamp('date')->default(now());
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('fund_id')->references('id')->on('funds')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investments');
    }
};
