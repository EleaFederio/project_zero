<?php

namespace App\Http\Controllers;

use App\Models\PriceLevel;
use Illuminate\Http\Request;

class PriceLevelController extends Controller
{
    function index(){
        return PriceLevel::all();
    }
}
