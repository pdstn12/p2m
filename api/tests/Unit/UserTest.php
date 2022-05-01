<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\User;


class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    // public function test_example()
    // {
    //     $this->assertTrue(true);
    // }
    
    public function testSuccessfulRegistration()
    {
        $userData = [
            "name" => "John Doe",
            "email" => "doe@example.com",
            "phone" => "22222123",
            "class" => "INDP1 A",
            "password" => "demo12345",
            "password_confirmation" => "demo12345"
        ];

        $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJsonStructure([
                "user" => [
                    'id',
                    'name',
                    'phone',
                    'class',
                    'email',
                    'created_at',
                    'updated_at',
                ],
                "access_token"
            ]);
    }

    public function testLoginRegistration()
    {
        $userData = [
            "email" => "doe@example.com",
            "password" => "demo12345"
        ];

        $this->json('POST', 'api/login', $userData, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJsonStructure([
                "user" => [
                    'id',
                    'name',
                    'phone',
                    'class',
                    'email',
                    'created_at',
                    'updated_at',
                ],
                "access_token"
            ]);
    }
}
