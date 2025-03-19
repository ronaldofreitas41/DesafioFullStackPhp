<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'cpf',
        'telefone',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Relacionamentos
    public function deposits()
    {
        return $this->hasMany(Deposit::class);
    }

    public function investments()
    {
        return $this->hasMany(Investment::class);
    }

    public function funds()
    {
        return $this->hasMany(Fund::class);
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class, 'owner_id');
    }
}
