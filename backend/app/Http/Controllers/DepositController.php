<?php

namespace App\Http\Controllers;

use App\Models\Deposit;
use Illuminate\Http\Request;

class DepositController extends Controller
{
    public function index()
    {
        return Deposit::all();
    }

    public function store(Request $request)
    {
        return Deposit::create($request->all());
    }

    public function show($id)
    {
        return Deposit::where('user_id',$id)->get();
    }

    public function update(Request $request, $id)
    {
        $deposit = Deposit::findOrFail($id);
        $deposit->update($request->all());
        return $deposit;
    }

    public function destroy($id)
    {
        Deposit::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
