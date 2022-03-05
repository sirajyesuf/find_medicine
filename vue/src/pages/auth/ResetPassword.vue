<template>
    <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-md w-full space-y-8">
            <div>
                <img
                    class="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2
                    class="mt-6 text-center text-3xl font-extrabold text-gray-900"
                >
                    Reset your password
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600"></p>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <BaseInput
                            v-model="creadential.password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    {{ creadential.phonenumber }}
                </div>

                <div>
                    <BaseButton type="submit" content="Update" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import BaseInput from "../../components/form/BaseInput.vue";
import BaseButton from "../../components/form/BaseButton.vue"
export default {
    data() {
        return {
            creadential: {
                password: null,
                phonenumber: null,
            },
        };
    },
    components: {
        BaseInput,
        BaseButton
    },
};
</script>
