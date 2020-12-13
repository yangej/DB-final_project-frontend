<template>
    <div class="container d-flex justify-center align-center py-16">
        <login-card @login="login"></login-card>
    </div>
</template>

<script>
import LoginCard from '@/components/login/LoginCard.vue';
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    components: {
        LoginCard,
    },
    methods: {
        async login(values) {
            const axiosInstance = axios.create({
                baseURL: 'http://localhost:5000',
                'Content-Type': 'application/json',
            });
            const res = await axiosInstance.post('/login', values);
            const result = res.data.result;
            this.setLoginInfos({ token: result.token, role: result.identity });

            this.$router.push({ path: `/${result.identity}` });
        },
        ...mapActions({
            setLoginInfos: 'user/login',
        }),
    },
};
</script>
