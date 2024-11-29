<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
   {
        Schema::create('job_details', function (Blueprint $table) {
            $table->bigIncrements('job_id');
            $table->bigInteger('company_id')->unsigned();
            $table->foreign('company_id')->references('company_id')->on('companies');
            $table->string('job_title');
            $table->longText('job_details');
            $table->longText('job_require');
            $table->longText('job_benefit');
            $table->string('salary');
            $table->text('job_location');
            $table->integer('candidate_number')->unsigned();
            $table->string('experience_require');
            $table->string('work_form');
            $table->timestamps();
            $table->integer('status')->unsigned()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_details');
    }
}
