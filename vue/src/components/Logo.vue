<template>
    <div>
        <img
            class="mx-auto h-15 w-2/6"
            src="../assets/find_medicine_logo4.png"
            alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {{ title }}
        </h2>
    </div>
</template>
<script>
export default {
    props: ["title"],
};
</script>
