<?php

namespace App\Http\Controllers;

use App\Models\Fund;
use Illuminate\Http\Request;

class FundController extends Controller
{
    public function index()
    {
        return Fund::all();
    }

    public function store(Request $request)
    {
        return Fund::create($request->all());
    }

    public function show($id)
    {
        return Fund::where('user_id', $id)->get();
    }

    public function update(Request $request, $id)
    {
        $fund = Fund::findOrFail($id);
        $fund->update($request->all());
        return $fund;
    }

    public function destroy($id)
    {
        Fund::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
