<template>
    <v-card min-width="400" class="card shadow py-16 px-10">
        <div class="d-flex flex-column align-center mb-10">
            <img class="icon mb-4" src="../assets/register.svg" alt="login-icon">
            <h3 class="headline font-weight-medium">註冊</h3>
        </div>
        <div>
            <v-text-field
                    label="Outlined"
                    hide-details
                    single-line
                    outlined
                    class="mb-4"
                    placeholder="請輸入您的姓名"
            ></v-text-field>
            <v-text-field
                    label="Outlined"
                    hide-details
                    type="password"
                    single-line
                    outlined
                    class="mb-4"
                    placeholder="請輸入您的系所"
            ></v-text-field>
            <v-text-field
                    label="Outlined"
                    hide-details
                    single-line
                    outlined
                    class="mb-4"
                    placeholder="請輸入您欲設定的帳號"
            ></v-text-field>
            <v-text-field
                    label="Outlined"
                    hide-details
                    type="password"
                    single-line
                    outlined
                    class="mb-10"
                    placeholder="請輸入您欲設定的密碼"
            ></v-text-field>
            <custom-button width="100%" text="註冊"></custom-button>
            <a class="d-block mt-7 font-weight-medium" @click="goTo('/login')">我已經有帳號了</a>
        </div>
    </v-card>
</template>

<script>
    import CustomButton from "./CustomButton";

    export default {
        name: 'RegisterCard',
        components: { CustomButton },
        methods: {
            goTo(path) {
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