<template>
    <div class="container d-flex justify-center align-center py-16">
        <register-card></register-card>
    </div>
</template>

<script>
    import RegisterCard from '../components/RegisterCard.vue'

    export default {
        name: 'Register',
        components: {
            RegisterCard
        }
    }
</script>

<style lang="scss" scoped>

</style>