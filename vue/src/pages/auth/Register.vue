<template>
    <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <Logo title="Sign up to get account" />
            <form class="mt-8 space-y-6" @submit.prevent="register">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <BaseInput
                            type="tel"
                            name="name"
                            placeholder="Name"
                            v-model="form.name"
                            @keydown="form.errors.clear('name')"
                        />
                        <Error
                            :error="form.errors.get('name')"
                            v-if="form.errors.has('name')"
                        />
                    </div>

                    <div>
                        <BaseInput
                            name="email"
                            v-model="form.email"
                            type="email"
                            placeholder="Email"
                            @keydown="form.errors.clear('email')"
                        />
                        <Error
                            :error="form.errors.get('email')"
                            v-if="form.errors.has('email')"
                        />
                    </div>

                    <div>
                        <BaseInput
                            name="password"
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

                <div class="flex items-center justify-end">
                    <BaseLink
                        :url="{ name: 'login' }"
                        content="Back to login"
                    />
                </div>

                <div>
                    <BaseButton
                        type="submit"
                        content="Sign up"
                        :disabled="form.errors.any()"
                    />
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
import validators from "../../validators.js";
import authservice from "../../services/authservice";

export default {
    data() {
        return {
            form: new Form({
                name: null,
                email: null,
                password: null,
            }),
            er: {
                name: [],
                email: [],
                password: [],
            },
        };
    },
    watch: {},
    methods: {
        register() {
            this.form
                .submit(authservice.register)
                .then((res) => {
                    this.$router.push({ name: "dashboard" });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        validate(ev) {
            if (ev.target.name === "password") {
                let res = validators.password(this.form.password);
                console.log(res);
                if (res !== true) {
                    this.er.password.push(res);
                }
                if (res == true) {
                    this.form.errors.clear("password");
                }
            }
            if (ev.target.name === "name") {
                let res = validators.name(this.form.name);
                console.log(res);

                if (res !== true) {
                    this.er.name.push(res);
                }
                if (res == true) {
                    this.form.errors.clear("name");
                }
            }
            if (this.er.password.length > 0 || this.er.name.length > 0) {
                this.form.errors.record(this.er);
            }
        },
    },
    components: {
        Logo,
        BaseButton,
        BaseInput,
        BaseLink,
        Error,
    },
};
</script>
