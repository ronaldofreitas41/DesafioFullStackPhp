<?php

namespace App\Http\Controllers;

use App\Models\Investment;
use Illuminate\Http\Request;

class InvestmentController extends Controller
{
    public function index()
    {
        return Investment::all();
    }

    public function store(Request $request)
    {
        //dd($request->all());
        return Investment::create($request->all());
    }

    public function show($id)
    {
        return Investment::where('user_id',$id)->get();
    }

    public function update(Request $request, $id)
    {
        $investment = Investment::findOrFail($id);
        $investment->update($request->all());
        return $investment;
    }

    public function destroy($id)
    {
        Investment::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
