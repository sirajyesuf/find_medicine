<?php

namespace App\Actions;

use App\Models\Role;
use App\Models\User;

trait AttachRoleToUser
{
    public function handle(User $user, $role_short_name)
    {

        $role = Role::where('short_name', $role_short_name)->first();
        return $user->roles()->attach($role->id);
    }
}
