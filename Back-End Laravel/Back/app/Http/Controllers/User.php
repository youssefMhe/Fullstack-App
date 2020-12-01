<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class User extends Controller
{
    public  function ListUSer()
    { $ListUSer =\App\Models\User::all();;

        return response()->json($ListUSer);
    }

    public function login(Request $request){
        $loginDetails = $request->only('email','password');

        if(Auth::attempt($loginDetails))
        {
            return response()->json(['message' => 'login successful', 'code' => 200]);
        }else{
            return response()->json(['message' => 'wrong login details', 'code' => 501]);
        }
    }
}
