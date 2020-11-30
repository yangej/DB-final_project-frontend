<template>
    <div>
        <student-navbar></student-navbar>
        me is student layout
        <router-view></router-view>
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