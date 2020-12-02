<template>
    <div class="container d-flex justify-center align-center py-16">
        <login-card
            @login="login"
        ></login-card>
    </div>
</template>

<script>
    import LoginCard from '@/components/login/LoginCard.vue'

    export default {
        name: 'Login',
        components: {
            LoginCard
        },
        methods: {
            login(values) {
                // TODO: call api and login
                console.log(values.account, values.password);
            }
        }
    }
</script>