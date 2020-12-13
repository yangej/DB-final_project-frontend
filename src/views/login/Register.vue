<template>
    <div class="container d-flex justify-center align-center py-16">
        <register-card @register="register"></register-card>
    </div>
</template>

<script>
import axios from 'axios';
import RegisterCard from '@/components/login/RegisterCard.vue';

export default {
    name: 'Register',
    components: {
        RegisterCard,
    },
    methods: {
        async register(values) {
            // TODO: call api and login
            const axiosInstance = axios.create({
                baseURL: 'http://localhost:5000',
                'Content-Type': 'application/json',
            });
            console.log(values);
            const res = await axiosInstance.post('/register', values);
            console.log(res);
        },
    },
};
</script>
