<template>
    <v-card max-width="900" class="shadow pa-15">
        <div class="header pb-10 d-flex justify-space-between align-center">
            <div class="d-flex">
                <img class="icon" :src="imgSrc" alt="icon">
                <div class="ml-7 mt-6">
                    <h3 class="headline font-weight-medium">{{ title }}</h3>
                    <p class="font-weight-medium">{{ enTitle }}</p>
                </div>
            </div>
            <slot name="button"></slot>
        </div>
        <slot></slot>
    </v-card>
</template>

<script>
    export default {
        name: 'StudentNavbar',
        props: {
            imgSrc: String,
            title: String,
            enTitle: String
        }
    }
</script>
<style lang="scss" scoped>

</style>