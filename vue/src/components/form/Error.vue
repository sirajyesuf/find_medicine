<template>
    <span class="text-red-900 text-sm font-normal">
        {{ error }}
    </span>
</template>

<script>
export default {
    props: ["error"],
};
</script>
