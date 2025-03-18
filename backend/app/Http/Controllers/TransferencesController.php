<?php

namespace App\Http\Controllers;

use App\Models\Transference;
use Illuminate\Http\Request;

class TransferencesController extends Controller
{
    public function index()
    {
        return Transference::all();
    }

    public function store(Request $request)
    {
        return  Transference::create($request->all());
    }

    public function show($id)
    {
        return Transference::where("receiver_id",$id)->get();

    }
    public function showneg($id)
    {
        return Transference::where("sender_id",$id)->get();

    }

    public function update(Request $request, $id)
    {
        $transference = Transference::findOrFail($id);
        $transference->update($request->all());
        return $transference;
    }

    public function destroy($id)
    {
        $transference = Transference::findOrFail($id);
        return response()->json(null, 204);
    }
}
