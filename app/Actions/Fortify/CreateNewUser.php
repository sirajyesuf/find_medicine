<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use App\Actions\AttachRoleToUser;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'phonenumber' => [
                'required',
                'digits:10',
                'unique:users'
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        $user =  User::create([
            'phonenumber' => $input['phonenumber'],
            'password' => Hash::make($input['password']),
        ]);

        (new AttachRoleToUser())->handle($user, 'customer');

        return $user;
        
    }
}
