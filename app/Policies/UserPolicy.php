<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function view(User $authUser, User $vendor): bool
    {
        return $authUser->role === 'admin' || $authUser->id === $vendor->id;
    }

    public function update(User $authUser, User $vendor): bool
    {
        return $authUser->role === 'admin' || $authUser->id === $vendor->id;
    }

    public function delete(User $authUser, User $vendor): bool
    {
        return $authUser->role === 'admin';
    }
}

