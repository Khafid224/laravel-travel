<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', 'image',
    ];

    public function getImageAttribute($image)
    {
        return url('storage/sliders/' . $image);
    }
}
