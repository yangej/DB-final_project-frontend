<template>
    <div class="container d-flex justify-center align-center py-16">
        <login-card @login="login"></login-card>
    </div>
</template>

<script>
import LoginCard from '@/components/login/LoginCard.vue';
import { apiExecutor } from '../../api';
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    components: {
        LoginCard,
    },
    methods: {
        async login(values) {
            const response = await apiExecutor.login(values);
            const result = response.result;

            if (result.status === 'success') {
                await this.setLoginInfos({
                    token: result.token,
                    role: result.identity,
                });
                await this.$router.push({ path: `/${result.identity}` });
            } else {
                this.showPopup({
                    popupText: result.err,
                    imgSrc: '/img/disturb.svg',
                });
            }
        },
        ...mapActions({
            setLoginInfos: 'user/login',
            showPopup: 'popup/updatePopup',
        }),
    },
};
</script>
