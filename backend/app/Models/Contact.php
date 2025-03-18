<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'account_number',
        'avatar',
        'owner_id',
    ];

    // Relacionamento
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
