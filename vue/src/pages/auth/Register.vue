<template>
    <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <Logo title="Sign up to get account" />
            <form class="mt-8 space-y-6" @submit.prevent="register">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <Error error="" />
                        <BaseInput
                            type="tel"
                            placeholder="Phone Number"
                            v-model="form.phonenumber"
                        />
                    </div>

                    <div>
                        <Error error="" />
                        <BaseInput
                            v-model="form.password"
                            type="password"
                            placeholder="password"
                            @change="validatePassword"
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
                    <BaseButton type="submit" content="Sign up" />
                    {{form.phonenumber}}
                    {{form.password}}
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
import authservice from "../../services/authservice.js";

export default {
    data() {
        return {
            form: new Form({
                phonenumber: null,
                password: null,
            }),
        };
    },
    watch: {},
    methods: {
        register() {
            let payload = this.form.data();
            payload['password_confirmation'] = payload['password']
            console.log(payload)
            authservice.register(payload);
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
