<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;
use App\Http\Middleware\CorsMiddleware; // IMPORTANDO O MIDDLEWARE

class Kernel extends HttpKernel
{
    protected $middleware = [
        CorsMiddleware::class, // REGISTRANDO O MIDDLEWARE
    ];
}
