<template>
    <div style="padding-top: 100px; padding-bottom: 100px">
        <student-navbar></student-navbar>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script lang="ts">
    import StudentNavbar from "../components/navbars/StudentNavbar.vue";
    export default {
        name: 'StudentLayout',
        components: { StudentNavbar }
    }
</script>

<style lang="scss" scoped>

</style>