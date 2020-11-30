<template>
    <button class="button">{{ text }}</button>
</template>

<script>
    export default {
        name: 'CustomButton',
        props: {
            text: String
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