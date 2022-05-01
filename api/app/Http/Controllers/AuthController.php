<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use DB;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name'=>'required|max:55',
            'phone'=>'required|max:8|min:8',
            'class' => 'required|',
            'email'=>'email|required|',
            'password'=>'required|',//password_confirmation (the name of input for password confermation)
        ]);

        $validatedData['password'] = bcrypt($request->password);
        

        $user = User::create($validatedData);

  
        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user'=> $user, 'access_token'=> $accessToken],200);

    }


    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);
		if(!Auth::attempt($loginData)) {
          return response(['message' => "login failed"]);
        }
        $accessToken =  Auth::user()->createToken('authToken')->accessToken;

        return response(['user' =>  Auth::user(), 'access_token' => $accessToken]);

        
    }
	public function logout(Request $request)
	{


    	$user = Auth::user();
        $user->token()->revoke();
        DB::table('oauth_access_tokens')
            ->where('user_id', $user->id)
            ->update([
                'revoked' => true
            ]);
        return response()->json('Done', 200);

	}
}
