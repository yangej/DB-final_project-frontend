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
                v-model="name"
                placeholder="請輸入您的姓名"
            ></v-text-field>
            <v-text-field
                label="Outlined"
                hide-details
                single-line
                outlined
                class="mb-4"
                v-model="department"
                placeholder="請輸入您的系所"
            ></v-text-field>
            <v-text-field
                label="Outlined"
                hide-details
                single-line
                outlined
                class="mb-4"
                v-model="account"
                placeholder="請輸入您欲設定的帳號"
            ></v-text-field>
            <v-text-field
                label="Outlined"
                hide-details
                type="password"
                single-line
                outlined
                class="mb-10"
                v-model="password"
                placeholder="請輸入您欲設定的密碼"
            ></v-text-field>
            <custom-button width="100%" text="註冊" @click="register"></custom-button>
            <a class="text-center d-block mt-7 font-weight-medium" @click="goTo('/')">我已經有帳號了</a>
        </div>
    </v-card>
</template>

<script>
    import CustomButton from "./CustomButton";

    export default {
        name: 'RegisterCard',
        components: { CustomButton },
        data() {
            return {
                name: '',
                department: '',
                account: '',
                password: '',
                showPopup: false
            }
        },
        computed: {
            isFinished() {
                return this.name && this.department && this.account && this.password;
            }
        },
        methods: {
            register() {
                if(this.isFinished) {
                    //call api
                } else {
                    this.showPopup = true;
                }
            },
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