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
                    Reset your password
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600"></p>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="passwordReset">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <Error
                            :error="form.errors.get('email')"
                            v-if="form.errors.has('email')"
                        />
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
                {{ form.errors }}
                <div>
                    <BaseButton type="submit" content="Update" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Logo from "../../components/Logo.vue";

import BaseInput from "../../components/form/BaseInput.vue";
import BaseButton from "../../components/form/BaseButton.vue";
import Form from "../../form.js";
import Error from "../../components/form/Error.vue";
import authservice from "../../services/authservice";

export default {
    data() {
        return {
            form: new Form({
                password: null,
                email: "email",
                token: null,
            }),
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (vm.$route.query.email && vm.$route.query.token) {
                next();
            } else {
                vm.$router.push({ name: "landing" });
            }
        });
    },
    methods: {
        async passwordReset() {
            this.form.submit(authservice.passwordReset);
        },
    },
    created() {
        this.form.email = this.$route.query.email;
        this.form.token = this.$route.query.token;
    },
    components: {
        BaseInput,
        BaseButton,
        Error,
        Logo,
    },
};
</script>
