<template>
    <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
    >
        <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
            Knausgaard typewriter readymade marfa
        </h1>
        <p class="mb-8 leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
        </p>
        <div class="flex w-full md:justify-start justify-center items-end">
            <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <select
                    class="form-select outline block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropdownOpen: false,
        };
    },
};
</script>
