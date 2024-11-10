<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
   {
        Schema::create('companies', function (Blueprint $table) {
           $table->bigIncrements('company_id');
           $table->bigInteger('user_id')->unsigned();
           $table->foreign('user_id')->references('id')->on('users');
           $table->string('company_name')->nullable(false);
           $table->string('email')->nullable(false)->unique();
           $table->string('employee_scale')->nullable();
           $table->text('company_intro')->nullable(); 
           $table->string('company_link')->nullable(false); 
           $table->string('company_image')->nullable();
           $table->string('company_location')->nullable();
           $table->string('company_organize')->nullable();
           $table->string('company_filed')->nullable();
           $table->integer('status')->unsigned()->default(1);
           $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
}
