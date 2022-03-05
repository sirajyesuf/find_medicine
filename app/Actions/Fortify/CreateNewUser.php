<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

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
            'phone_number' => [
                'required',
                'digit:10',
                Rule::unique('users')->where(function ($query) {
                    return $query->roles()->where('short_name', 'pharmacy_owner');
                }),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        return User::create([
            'phone_number' => $input['phone_number'],
            'password' => Hash::make($input['password']),
        ]);
    }
}
