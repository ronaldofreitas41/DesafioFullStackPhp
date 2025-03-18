<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fund extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'type',
        'minimum_investment',
        'annual_return',
        'risk',
        'manager',
        'description',
    ];

    // Relacionamento
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function investments()
    {
        return $this->hasMany(Investment::class);
    }
}
