<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaceImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'place_id', 'image'
    ];

    public function getImageAttribute($image)
    {
        return url('storage/places/' . $image);
    }
}
