<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Request>
 */
class RequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'prescription' => $this->faker->imageUrl(),
            'description' => $this->faker->paragraph(),
            'qty' => $this->faker->numberBetween(1, 100)
        ];
    }
}
