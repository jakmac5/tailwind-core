<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    import { ref } from "vue";

    const darkMode = ref<Boolean>(false);
</script>

<template>
    <div>
        <div class="p-8 bg-tahiti dark:bg-gray-900">
            <h1 class="text-primary-60">
                Hello <span class="text-[#d83737]">world!</span>
            </h1>
        </div>
    </div>
</template>

<style>
    #app {
        @apply w-[100vw] h-[100vh] bg-gray-300 dark:bg-gray-900;
    }
    .box {
        @apply w-full h-full p-4 ml-4 flex justify-center items-center;
    }
    .box--red {
        @apply .box bg-red;
    }
</style>
