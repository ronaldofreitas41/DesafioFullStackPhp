<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return Contact::all();
    }

    public function store(Request $request)
    {
        return Contact::create($request->all());
    }

    public function show($id)
    {
        return Contact::where('owner_id', $id)->get();
    }

    public function update(Request $request, $id)
    {
        $contact = Contact::findOrFail($id);
        $contact->update($request->all());
        return $contact;
    }

    public function destroy($id)
    {
        Contact::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
