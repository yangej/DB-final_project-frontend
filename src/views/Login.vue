<template>
    <div class="container d-flex justify-center align-center py-16">
        <login-card></login-card>
    </div>
</template>

<script>
    import LoginCard from '../components/LoginCard.vue'

    export default {
        name: 'Login',
        components: {
            LoginCard
        }
    }
</script>