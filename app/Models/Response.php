<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    use HasFactory;
    public function pharmacy()
    {
        return $this->hasMany(Pharmacy::class);
    }

    public function response()
    {
        return $this->hasMany(Response::class);
    }
}
