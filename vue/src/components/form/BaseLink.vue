<template>
    <div class="text-sm">
        <router-link
            :to="url"
            class="font-medium text-indigo-600 hover:text-indigo-500"
        >
            {{ content }}
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["url", "content"],
};
</script>
