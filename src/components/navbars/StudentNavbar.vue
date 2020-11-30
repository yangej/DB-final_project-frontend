<template>
    <v-app-bar
        absolute
        color="primary"
        elevate-on-scroll
        class="px-16"
    >
        <v-toolbar-title class="white--text font-weight-medium">PaTrack</v-toolbar-title>
        <v-spacer/>
        <router-link class="white--text" to="/course-list">課堂回答</router-link>
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