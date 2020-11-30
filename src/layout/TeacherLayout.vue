<template>
    <div style="padding-top: 100px; padding-bottom: 100px">
        <teacher-navbar></teacher-navbar>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script lang="ts">
    import TeacherNavbar from "../components/navbars/TeacherNavbar.vue";
    export default {
        name: 'TeacherLayout',
        components: { TeacherNavbar }
    }
</script>

<style lang="scss" scoped>

</style>