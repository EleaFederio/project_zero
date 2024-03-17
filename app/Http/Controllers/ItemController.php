<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::all();
        return $items;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Item::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $custom_id = IdGenerator::generate(['table' => 'items', 'field' => 'item_code', 'length' => 12, 'prefix' => date('Y').''.date('m')]);
        $request->validate([
            'bar_code' => 'string|max:30',
            'name' => 'required|string',
            'description' => 'string',
            'unit_cost' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'total_qty' => 'required|numeric',
            'unit' => 'required|string'
        ]);
        $item = new Item();
        $item->item_code = $custom_id;
        $item->bar_code = $request->bar_code;
        $item->name = $request->name;
        $item->description = $request->description;
        $item->unit_cost = $request->unit_cost;
        $item->total_qty = $request->total_qty;
        $item->unit = $request->unit;
        $item->save();
        return response()->json([
            'success' => true,
            'message' => 'Item Added!'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        //
    }
}
