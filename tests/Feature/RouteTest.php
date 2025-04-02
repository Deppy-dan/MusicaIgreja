<?php

test('example', function ()
{
    $response = $this->get('/dashboard');
    $response->assertRedirect('/login');
}
);
