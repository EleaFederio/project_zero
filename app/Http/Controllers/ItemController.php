<?php

namespace App\Http\Controllers;

use App\Models\Item;
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
        $request->validate([
            'item_code' => 'required|string|max:10|unique:items,item_code',
            'bar_code' => 'string|max:30',
            'name' => 'required|string',
            'description' => 'string',
            'unit_cost' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'unit' => 'required|string'
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
