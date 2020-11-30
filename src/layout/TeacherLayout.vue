<template>
    <div>
        <teacher-navbar></teacher-navbar>
        <router-view></router-view>
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