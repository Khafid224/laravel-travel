<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'slug', 'user_id', 'category_id', 'description', 'phone', 'website', 'office_hours', 'address', 'longitude', 'latitude'
    ];
}
