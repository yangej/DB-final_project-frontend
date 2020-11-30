<template>
    <v-btn :width="width" color="primary" class="py-6" depressed @click="onClick">{{ text }}</v-btn>
</template>

<script>
    export default {
        name: 'CustomButton',
        data() {
            return {

            }
        },
        props: {
            text: String,
            width: String
        },
        methods: {
            onClick() {
                this.$emit('on-click');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        padding: 16px;
        background-color: var(--main);
        color: white;
        font-size: 16px;
        font-weight: 500;
        border: none;
        border-radius: 5px;
        width: 100%;

        &:hover {
            background-color: var(--main-hover);
            cursor: pointer;
        }
    }
</style>