<template>
    <header class="bg-white w-full flex items-center">
        <div class="container">
            <div class="flex mx-4 items-center justify-between relative">
                <div class="px-4 w-60 max-w-full">
                    <a href="javascript:void(0)" class="w-full block py-5">
                        <img
                            src="../assets/find_medicine_logo4.png"
                            alt="logo"
                            class="h-15 w-2/6"
                        />
                    </a>
                </div>
                <div class="flex px-4 justify-between items-center w-full">
                    <div>
                        <button
                            @click="navbarOpen = !navbarOpen"
                            :class="navbarOpen && 'navbarTogglerActive'"
                            id="navbarToggler"
                            class="block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
                        >
                            <span
                                class="relative w-[30px] h-[2px] my-[6px] block bg-body-color"
                            ></span>
                            <span
                                class="relative w-[30px] h-[2px] my-[6px] block bg-body-color"
                            ></span>
                            <span
                                class="relative w-[30px] h-[2px] my-[6px] block bg-body-color"
                            ></span>
                        </button>
                        <nav
                            :class="!navbarOpen && 'hidden'"
                            id="navbarCollapse"
                            class="absolute py-5 px-6 bg-white shadow rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none"
                        >
                            <ul class="blcok lg:flex">
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-base font-medium text-dark hover:text-primary py-2 lg:inline-flex flex lg:ml-12"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-base font-medium text-dark hover:text-primary py-2 lg:inline-flex flex lg:ml-12"
                                    >
                                        Payment
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-base font-medium text-dark hover:text-primary py-2 lg:inline-flex flex lg:ml-12"
                                    >
                                        Features
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="sm:flex justify-end hidden pr-16 lg:pr-0">
                        <a
                            href="javascript:void(0)"
                            class="text-base font-medium text-dark hover:text-primary py-3 px-7"
                        >
                            Login
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="text-base font-medium text-white bg-blue-700 rounded-lg py-3 px-7 hover:bg-opacity-90"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>

            <section class="text-gray-600 body-font">
                <div
                    class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
                >
                    <FindMedicine/>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            class="object-cover object-center rounded"
                            alt="hero"
                            src="https://dummyimage.com/720x600"
                        />
                    </div>
                </div>
            </section>
        </div>
    </header>
</template>

<script>
import FindMedicine from "../components/FindMedicine.vue";
export default {
    data() {
        return {
            navbarOpen: false,
        };
    },
    components: { FindMedicine }
};
</script>
