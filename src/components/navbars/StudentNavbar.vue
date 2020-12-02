<template>
    <v-app-bar
        absolute
        color="primary"
        elevate-on-scroll
        class="px-16"
    >
        <router-link class="d-flex align-center" to="/student">
            <img src="/img/logo.svg" alt="logo" style="height: 40px"/>
            <v-toolbar-title class="white--text font-weight-medium ml-4">PaTrack</v-toolbar-title>
        </router-link>
        <v-spacer/>
        <router-link class="white--text" to="/student/course-list">課堂回答</router-link>
        <v-btn icon class="ml-10 white--text">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'StudentNavbar',
    }
</script>