<template>
    <label :for="for_what" class="sr-only">{{ label }}</label>
</template>
<script>
export default {
    props: ["for_what", "label"],
};
</script>
