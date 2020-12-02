<template>
    <v-app-bar
        absolute
        color="primary"
        elevate-on-scroll
        class="px-16"
    >
        <router-link class="d-flex align-center" to="/teacher">
            <img src="/img/logo.svg" alt="logo" style="height: 40px"/>
            <v-toolbar-title class="white--text font-weight-medium ml-4">PaTrack</v-toolbar-title>
        </router-link>
        <v-spacer/>
        <router-link class="white--text ml-15" to="/teacher/course-management">課堂管理</router-link>
        <router-link class="white--text ml-15" to="/teacher/student-list">學生列表</router-link>
        <v-btn icon class="ml-10 white--text" @click="logout">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
    export default {
        name: 'TeacherNavbar',
        methods: {
            logout() {
                //TODO: call api and logout
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>