<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseUrlController extends Controller
{
    public function index(Request $request)
    {
        $request = $request->all();
        return base64_encode(json_encode($request));
    }

    public function indexDecode(Request $request)
    {
        return base64_decode($request->data);
    }
}
