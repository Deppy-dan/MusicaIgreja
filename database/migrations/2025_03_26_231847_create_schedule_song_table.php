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
         Schema::create('schedule_song', function (Blueprint $table) {
             $table->id();
             $table->foreignId('schedule_id')->constrained()->onDelete('cascade');
             $table->foreignId('song_id')->constrained()->onDelete('cascade');
             $table->integer('order')->default(0);
             $table->timestamps();
             
             // Ensure a song can only be added once per schedule
             $table->unique(['schedule_id', 'song_id']);
         });
     }
 
     /**
      * Reverse the migrations.
      */
     public function down(): void
     {
         Schema::dropIfExists('schedule_song');
     }
 };