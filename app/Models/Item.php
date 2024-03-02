<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_code',
        'bar_code',
        'name',
        'description',
        'unit_cost',
        'total_qty',
        'last_sold_on',
        'unit'
    ];

}
