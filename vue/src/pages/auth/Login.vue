<template>
    <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <Logo title="Sign in to your account" />
            <form class="mt-8 space-y-6" @submit.prevent="login">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <BaseInput
                            type="email"
                            placeholder="Email"
                            v-model="form.email"
                            @keydown="form.errors.clear('email')"
                        />
                        <Error
                            :error="form.errors.get('email')"
                            v-if="form.errors.has('email')"
                        />
                    </div>

                    <div>
                        <BaseInput
                            v-model="form.password"
                            type="password"
                            placeholder="password"
                            @keydown="form.errors.clear('password')"
                        />
                        <Error
                            :error="form.errors.get('password')"
                            v-if="form.errors.has('password')"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                            for="remember-me"
                            class="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

                    <BaseLink
                        :url="{ name: 'forgotpassword' }"
                        content="Forgot your password?"
                    />
                </div>

                <div>
                    <BaseButton type="submit" content="Sign in" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Logo from "../../components/Logo.vue";
import BaseInput from "../../components/form/BaseInput.vue";
import BaseButton from "../../components/form/BaseButton.vue";
import BaseLink from "../../components/form/BaseLink.vue";
import Error from "../../components/form/Error.vue";
import Form from "../../form.js";
import authservice from "../../services/authservice";

export default {
    data() {
        return {
            form: new Form({
                email: null,
                password: null,
            }),
        };
    },
    methods: {
        async login() {
            this.form
                .submit(authservice.login)
                .then((res) => {
                    this.$router.push({ name: "dashboard" });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    components: {
        Logo,
        BaseInput,
        BaseButton,
        BaseLink,
        Error,
    },
};
</script>
