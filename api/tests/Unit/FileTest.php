<?php

namespace Tests\Unit;

use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class FileTest extends TestCase
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

    // public function testSuccessfulFileAdd()
    // {
    //     Storage::fake('local');
    //     $file = UploadedFile::fake()->create('file.jpg');
    //     $user = User::first();
    //     $accessToken = $user->createToken('authToken')->accessToken;

    //     $userData = [
    //         "title" => "John Doe",
    //         "path" => "doe@example.com",
    //         "matier" => "22222123",
    //         "class" => "INDP1 A",
    //     ];

    //     $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
    //         ->assertStatus(200)
    //         ->assertJsonStructure([
    //             "user" => [
    //                 'id',
    //                 'name',
    //                 'phone',
    //                 'class',
    //                 'email',
    //                 'created_at',
    //                 'updated_at',
    //             ],
    //             "access_token"
    //         ]);
    // }

    // public function testLoginRegistration()
    // {
    //     $userData = [
    //         "email" => "doe@example.com",
    //         "password" => "demo12345"
    //     ];

    //     $this->json('POST', 'api/login', $userData, ['Accept' => 'application/json'])
    //         ->assertStatus(200)
    //         ->assertJsonStructure([
    //             "user" => [
    //                 'id',
    //                 'name',
    //                 'phone',
    //                 'class',
    //                 'email',
    //                 'created_at',
    //                 'updated_at',
    //             ],
    //             "access_token"
    //         ]);
    // }
}
