<template>
    <span class="text-red-900 text-lg font-bold">
        {{ error }}
    </span>
</template>

<script>
export default {
    props: ["error"],
};
</script>
