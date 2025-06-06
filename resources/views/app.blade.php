<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Música Igreja - Sistema de Gestão Musical</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/App.tsx'])
</head>
<body class="antialiased">
    <!-- Root para React -->
    <div id="root"></div>
    <script>
        // Adicionar token CSRF aos cabeçalhos de requisições Ajax
        window.csrfToken = "{{ csrf_token() }}";
    </script>
</body>
</html>

