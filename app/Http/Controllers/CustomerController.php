<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Customer::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'area' => 'required|string',
            'price_level_id' => 'required|numeric',
            'customer_type_id' => 'required|numeric',
            "firstname" => 'required|string|max:20',
            "lastname" => 'required|string|max:20',
            "middle_name" => 'required|string|max:2',
            "province" => 'required|string|max:50',
            "municipality" => 'required|string|max:50',
            "barangay" => 'required|string|max:50',
            "date_of_birth" => 'required|date',
            "place_of_birth" => 'required|string',
            "sex" => 'required|string|max:6',
            "citizenship" => 'required|string|max:50',
            "occupation" => 'required|string|max:150',
            "tin" => 'required|string|max:15',
            "company_name" => 'nullable|string|max:100',
            "company_address" => 'nullable|string|max:200',
            "business_nature" => 'nullable|string|max:100',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
