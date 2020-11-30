<template>
    <v-app-bar
        absolute
        color="primary"
        elevate-on-scroll
        class="px-16"
    >
        <v-toolbar-title class="white--text font-weight-medium">PaTrack</v-toolbar-title>
        <v-spacer/>
        <router-link class="white--text ml-15" to="/course-management">課堂管理</router-link>
        <router-link class="white--text ml-15" to="/student-answer">答題狀況</router-link>
        <router-link class="white--text ml-15" to="/student-list">學生列表</router-link>
        <v-btn icon class="ml-10 white--text">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
    export default {
        name: 'TeacherNavbar'
    }
</script>

<style lang="scss" scoped>

</style>