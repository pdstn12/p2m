<?php

namespace Tests\Unit;

use Illuminate\Http\UploadedFile;
use Tests\TestCase;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

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

    public function testSuccessfulFileGet()
    {
        $user = User::first();
        $accessToken = $user->createToken('authToken')->accessToken;

        $this->get('api/file/1', ['Accept' => 'application/json' , 'Authorization' => 'Bearer '.$accessToken ])
            ->assertStatus(200)
            ->assertJsonStructure([
                "files",
                "count"
            ]);
    }

    public function testSuccessfulFileAdd()
    {
        Storage::fake('local');
        $file = UploadedFile::fake()->create('file.jpg');
        $user = User::first();
        $accessToken = $user->createToken('authToken')->accessToken;

        $fileData = [
            "title" => "John Doe",
            "course" => $file,
            "matier" => "22222123",
            "class" => "INDP1 A",
        ];

        $this->json('POST', 'api/file/add', $fileData, ['Accept' => 'application/json' , 'Authorization' => 'Bearer '.$accessToken ])
            ->assertStatus(200)
            ->assertJsonStructure([
                "message"
            ]);
    }

    

}
