<?php

namespace App\Policies;

use App\Models\Shop;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ShopPolicy
{
     public function update(User $authUser, Shop $shop): bool
    {
        return $authUser->role === 'admin' || $authUser->id === $shop->user_id;
    }
}
