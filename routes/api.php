<?php
 
 use Illuminate\Http\Request;
 use Illuminate\Support\Facades\Route;
 use App\Http\Controllers\API\MusicianController;
 use App\Http\Controllers\API\ScheduleController;
 use App\Http\Controllers\API\SongController;
 use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Pest\Mutate\Event\Events\Test\Outcome\Tested;

 /*
 |--------------------------------------------------------------------------
 | API Routes
 |--------------------------------------------------------------------------
 */

 //Teste

 Route::get('/teste', function () {
    return response()->json(['status' => 'API carregada corretamente!']);
});

 Route::get('/hello', function () {
    return response()->json(['message' => 'Hello, API está funcionando!']);
});
 
 
 // Rotas públicas
 Route::post('/login', [AuthenticatedSessionController::class, 'login']);
 
 // Rotas protegidas
 Route::middleware('auth:sanctum')->group(function () {
     // Usuário atual
     Route::get('/user', function (Request $request) {
         return $request->user();
     });
     Route::post('/logout', [AuthenticatedSessionController::class, 'logout']);
     
     // Rotas de músicos
     Route::apiResource('musicians', MusicianController::class);
     Route::get('/musicians/user/{userId}', [MusicianController::class, 'getByUserId']);
     
     // Rotas de agendamentos
     Route::apiResource('schedules', ScheduleController::class);
     Route::get('/schedules/musician/{musicianId}', [ScheduleController::class, 'getByMusicianId']);
     
     // Rotas de músicas
     Route::apiResource('songs', SongController::class);
 });