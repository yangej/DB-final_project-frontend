<script src="../../../homework"></script>
<template>
    <div class="card">
        <div class="card-header">
            <img class="icon" src="../assets/011-logout.svg" alt="login-icon">
            <div class="header-text">
                <h3>登入</h3>
                <p>請輸入您的帳號與密碼</p>
            </div>
        </div>
        <div class="card-content">
            <input type="text" placeholder="請輸入您的帳號">
            <input type="text" placeholder="請輸入您的密碼">
            <custom-button text="登入"></custom-button>
            <a style="margin-top: 30px;" @click="goTo('/register')">我要註冊</a>
        </div>
    </div>
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
    .card {
        padding: 60px 50px 50px 50px;
        background-color: #fff;
        max-width: 480px;
        box-shadow: var(--shadow);
        border-radius: 5px;

        .card-header {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;

            .header-text {
                padding-left: 40px;
                p, h3 {
                    padding: 0;
                    margin: 0;
                }
                h3 {
                    font-size: 28px;
                }
                text-align: left;
            }
        }
    }
    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    input {
        background-color: var(--bg);
        padding: 20px;
        width: calc(100% - 40px);
        border-radius: 5px;
        font-size: 16px;
        border: none;
        outline: none;
        margin-bottom: 20px;
    }
</style>