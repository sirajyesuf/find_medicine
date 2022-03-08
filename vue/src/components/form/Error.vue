<template>
    <span class="text-red-900 text-sm font-normaln px-3">
        {{ error }}
    </span>
</template>

<script>
export default {
    props: ["error"],
};
</script>
