<template>
    <v-card min-width="400" class="card shadow py-16 px-10">
        <div class="d-flex mb-10">
            <img class="icon" src="/img/login.svg" alt="login-icon">
            <div class="mt-6 pl-5 text-left">
                <h3 class="display-1 mb-3 font-weight-medium">登入</h3>
                <p>請輸入您的帳號與密碼</p>
            </div>
        </div>
        <div>
            <v-text-field
                label="Outlined"
                hide-details
                single-line
                outlined
                class="mb-4"
                placeholder="請輸入您的帳號"
            ></v-text-field>
            <v-text-field
                label="Outlined"
                hide-details
                type="password"
                single-line
                outlined
                class="mb-10"
                placeholder="請輸入您的密碼"
            ></v-text-field>
            <custom-button width="100%" text="登入"></custom-button>
            <a class="text-center d-block mt-7 font-weight-medium" @click="goTo('/register')">我要註冊</a>
        </div>
    </v-card>
</template>

<script>
import CustomButton from "./CustomButton";
export default {
    name: 'LoginCard',
    components: { CustomButton },
    methods: {
        goTo (path) {
            this.$router.push(path);
        }
    }
}
</script>

<style lang="scss" scoped>
    ::v-deep fieldset {
        border: none !important;
        background-color: #efefef;
    }
</style>