<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Item::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'item_code' => 'required|unique:contracts,contract_id',
            'bar_code' => 'required',
            'description' => 'nullable|string',
            'location' => 'nullable|string|max:200',
            'approved_budget' => 'required|regex:/^\d{5,15}(\.\d{1,2})?$/',
            'pre_bid' => 'nullable|date_format:Y-m-d H:i:s',
            'opening_of_bids' => 'required|date_format:Y-m-d H:i:s',
            'bulletin_posting' => 'required|date',
            'bulletin_removal' => 'required|date',
            'archieve' => 'required'
        ]);
        Item::create($request->all());
        return response()->json([
            'success' => true,
            'message' => 'Item Added!'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Sale $sale, $id)
    {
        $contract = Item::find($id);
        if($contract){
            return response()->json([
                'success' => true,
                'message' => 'contract exist!',
                'data' => $contract
            ]);
        }
        return response()->json([
            'success' => false,
            'message' => 'Contract doesn\'t exist!'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sale $sale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sale $sale)
    {
        //
    }
}
