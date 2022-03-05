<?php

namespace Database\Factories;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;
use Nette\Utils\Random;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Role>
 */
class RoleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $role1 = [
            'long_name' => 'pharmacy_owner',
            'short_name' => 'pharmacy_owner'
        ];
        $role2 = [
            'long_name' => 'customer',
            'short_name' => 'customer'
        ];

        return $this->faker->randomElement([$role1, $role2]);
    }
}
