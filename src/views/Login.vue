<template>
    <div class="container">
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

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>