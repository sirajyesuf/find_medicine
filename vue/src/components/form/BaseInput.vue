<template>
    <div>
        <input
            :type="type"
            class="my-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
<script>
export default {
    props: ["type", "placeholder", "modelValue"],
    emits: ["update:modelValue"],
};
</script>
