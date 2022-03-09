<template>
    <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <div>
                <Logo />
                <h2
                    class="mt-6 text-center text-3xl font-extrabold text-gray-900"
                >
                    Forgot your password
                </h2>
                <p
                    class="mt-2 text-center text-xl text-green-600"
                    v-text="form.message.get()"
                ></p>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="forgotPassword">
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
                </div>

                <div class="flex items-center justify-end">
                    <BaseLink
                        :url="{ name: 'login' }"
                        content="Back to login"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Send Reset Code
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Logo from "../../components/Logo.vue";
import BaseInput from "../../components/form/BaseInput.vue";
import BaseLink from "../../components/form/BaseLink.vue";
import Form from "../../form.js";
import authservice from "../../services/authservice.js";
import Error from "../../components/form/Error.vue";

export default {
    data() {
        return {
            form: new Form({
                email: null,
            }),
        };
    },
    methods: {
        async forgotPassword() {
            this.form.submit(authservice.forgotPassword);
        },
    },
    components: {
        BaseInput,
        BaseLink,
        Error,
        Logo,
    },
};
</script>
