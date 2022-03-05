<template>
    <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <Logo title="Sign up to get account" />
            <form class="mt-8 space-y-6">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <Error :error="credential.error[0]" />
                        <BaseInput
                            type="tel"
                            placeholder="Phone Number"
                            v-model="credential.phonenumber"
                            @input="validatePhoneNumber"
                        />
                    </div>

                    <div>
                        <Error error="erroryyyyyyyyyyyyyyyyyyyyyy" />
                        <BaseInput
                            v-model="credential.password"
                            type="password"
                            placeholder="password"
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

export default {
    data() {
        return {
            credential: {
                password: null,
                phonenumber: null,
                error: [],
            },
        };
    },
    watch: {},
    methods: {
        register() {},
        validatePhoneNumber() {
            if (this.credential.phonenumber.length > 12) {
                this.credential.error.push(
                    "the length of the phonenumber must be lessthan 12"
                );
            }
            if (this.credential.phonenumber.length < 12) {
                this.credential.error.pop();
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
