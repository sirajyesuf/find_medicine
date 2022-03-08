<template>
    <div>logout</div>
</template>
<script>
import authservice from "../../services/authservice.js";

export default {
    created() {
       authservice.logout();
    },
};
</script>
