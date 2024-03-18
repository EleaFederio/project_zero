<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'area',
        'price_level_id',
        'customer_type_id',
        'firstname',
        'lastname',
        'middle_name',
        'province',
        'municipality',
        'barangay',
        'date_of_birth',
        'place_of_birth',
        'sex',
        'citizenship',
        'occupation',
        'tin',
        'company_name',
        'company_address',
        'business_nature'
    ];
}
